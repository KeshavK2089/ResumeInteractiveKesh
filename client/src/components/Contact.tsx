import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Mail, Linkedin, Phone, Copy, Check } from 'lucide-react';
import { contactFormSchema, type ContactFormData } from '@shared/schema';

export function Contact() {
  const { toast } = useToast();
  const [emailCopied, setEmailCopied] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for your message. I\'ll get back to you soon.',
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive'
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have questions? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="h-12"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="h-12"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          rows={6}
                          data-testid="input-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </Card>

          <Card className="md:col-span-2 p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:kotteswaran.k@northeastern.edu"
                      className="text-foreground hover:text-primary transition-colors"
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
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+13028976913"
                    className="text-foreground hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    302-897-6913
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/keshav-kotteswaran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    data-testid="link-linkedin"
                  >
                    linkedin.com/in/keshav-kotteswaran
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Available for consulting and collaboration opportunities in bioengineering
                and healthcare technology
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
