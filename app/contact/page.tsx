'use client';

import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  User, 
  Briefcase 
} from 'lucide-react';
import Layout from '@/components/Layout';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="/hero-bg.jpg" 
              alt="Cyber Circuit Background" 
              className="w-full h-full object-cover opacity-30" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
          </div>

          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-float-slow" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-float" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-up">
                <MessageSquare size={16} />
                <span>Get In Touch</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight animate-fade-up delay-100">
                Let's Build Something <span className="text-gradient">Brilliant</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl pb-28 mx-auto animate-fade-up delay-200">
                Whether you have a specific project in mind or just want to explore 
                what is possible, we are here to listen. Every great partnership starts 
                with a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <div className="order-2 lg:order-1 animate-fade-up delay-300">
                <div className="p-8 md:p-10 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-border shadow-xl">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8 text-sm">Fill out the form below and we will respond within 24 hours.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                        <div className="relative">
                          {/* Added 'text-foreground' for typed text visibility 
                              Added 'placeholder:text-muted-foreground/50' for placeholder visibility 
                          */}
                          <Input 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe" 
                            className="pl-10 bg-background/50 border-border focus:border-primary/50 transition-colors text-foreground placeholder:text-muted-foreground/50" 
                            required 
                          />
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                        <div className="relative">
                          <Input 
                            id="email" 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com" 
                            className="pl-10 bg-background/50 border-border focus:border-primary/50 transition-colors text-foreground placeholder:text-muted-foreground/50" 
                            required 
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">Company (Optional)</label>
                      <div className="relative">
                        <Input 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Name" 
                          className="pl-10 bg-background/50 border-border focus:border-primary/50 transition-colors text-foreground placeholder:text-muted-foreground/50" 
                        />
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message</label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, or questions..." 
                        rows={6}
                        className="bg-background/50 border-border focus:border-primary/50 transition-colors resize-none text-foreground placeholder:text-muted-foreground/50"
                        required
                      />
                    </div>

                    {/* Added 'text-black' to ensure the button text is visible 
                        on the bright cyan background
                    */}
                    <Button 
                      type="submit" 
                      variant="glow" 
                      size="xl" 
                      className="w-full gap-2 shadow-lg shadow-primary/20 text-black font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-12 animate-fade-up delay-400">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                    Other Ways to <span className="text-gradient">Connect</span>
                  </h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email Us Directly</h3>
                        <a href="mailto:nexegent3@gmail.com" className="text-primary hover:text-cyan-glow transition-colors text-lg">
                          nexegent3@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">Response Time</h3>
                        <p className="text-muted-foreground">We typically respond within 24 hours during business days.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">Global Reach</h3>
                        <p className="text-muted-foreground">We work with clients worldwide. Timezone differences? No problem.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/30 shadow-lg shadow-primary/5">
                  <Sparkles className="w-10 h-10 text-primary mb-4 animate-pulse" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Get a Free AI Audit</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Not sure where to start? Request a complimentary analysis of your 
                    business operations and discover AI opportunities.
                  </p>
                  <Button variant="hero" size="lg" className="w-full gap-2 border-primary/50 text-black font-bold bg-primary hover:bg-primary/90">
                    Request Free Audit
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/10 border-t border-border/50">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              The Future Starts With a Single Message
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't let outdated systems hold your business back. Reach out today and 
              let us show you what intelligent technology can achieve for your organization.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}