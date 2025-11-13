import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { contactFormSchema } from "@shared/schema";
import { getUncachableResendClient } from "./resend-client";

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
        
        await client.emails.send({
          from: fromEmail,
          to: 'Keshavkotteswaran@gmail.com',
          subject: `New Contact Form Message from ${validatedData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
            <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
            <hr>
            <h3>Message:</h3>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              Reply directly to ${validatedData.email} to respond to this message.
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
