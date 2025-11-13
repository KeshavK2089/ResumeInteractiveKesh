import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Phone, Copy, Check } from 'lucide-react';

export function Contact() {
  const { toast } = useToast();
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kotteswaran.k@northeastern.edu');
    setEmailCopied(true);
    toast({
      title: 'Email Copied!',
      description: 'Email address copied to clipboard.',
    });
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have questions? I'd love to hear from you.
          </p>
        </div>

        <Card className="p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Contact Information
          </h3>

          <div className="space-y-6 max-w-lg mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Email
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:kotteswaran.k@northeastern.edu"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    data-testid="link-email"
                  >
                    kotteswaran.k@northeastern.edu
                  </a>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={copyEmail}
                    className="h-8 w-8"
                    data-testid="button-copy-email"
                    aria-label="Copy email to clipboard"
                  >
                    {emailCopied ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Phone
                </p>
                <a
                  href="tel:+13028976913"
                  className="text-foreground hover:text-primary transition-colors text-lg"
                  data-testid="link-phone"
                >
                  302-897-6913
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Linkedin className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/keshav-kotteswaran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-lg"
                  data-testid="link-linkedin"
                >
                  linkedin.com/in/keshav-kotteswaran
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Available for consulting and collaboration opportunities in bioengineering
              and healthcare technology
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
