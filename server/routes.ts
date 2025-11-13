import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { contactFormSchema } from "@shared/schema";
import { getUncachableResendClient } from "./resend-client";

// Escape HTML to prevent injection in emails
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve PDFs with aggressive caching to reduce bandwidth costs
  // Cache for 1 year since resume/research PDFs rarely change
  app.use('/attached_assets', express.static(path.join(process.cwd(), 'attached_assets'), {
    maxAge: '31536000000', // 1 year in milliseconds
    immutable: true,
    setHeaders: (res, filePath) => {
      // Only cache PDFs aggressively, not other files
      if (filePath.endsWith('.pdf')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      const timestamp = new Date().toISOString();
      
      // Log to console as backup
      console.log("Contact form submission:", {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        timestamp
      });

      // Send email notification
      try {
        const { client, fromEmail } = await getUncachableResendClient();
        
        // Escape all user input to prevent HTML injection
        const safeName = escapeHtml(validatedData.name);
        const safeEmail = escapeHtml(validatedData.email);
        const safeMessage = escapeHtml(validatedData.message).replace(/\n/g, '<br>');
        
        await client.emails.send({
          from: fromEmail,
          to: 'Keshavkotteswaran@gmail.com',
          replyTo: validatedData.email,
          subject: `New Contact Form Message from ${safeName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
            <hr>
            <h3>Message:</h3>
            <p>${safeMessage}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              You can reply directly to this email to respond to ${safeName}.
            </p>
          `
        });
        
        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the request if email fails - user still submitted successfully
      }

      res.json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid form data" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
