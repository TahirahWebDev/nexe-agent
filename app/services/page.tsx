'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Cpu, Rocket, Brain, Code, Bot, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const services = [
  {
    icon: Brain,
    title: 'AI-Powered Websites',
    description: 'Websites that think and adapt to your users, making decisions in real-time to optimize conversions and engagement.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored solutions built specifically for your business needs, integrating seamlessly with your existing workflows.',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that handle customer inquiries, bookings, and support 24/7.',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Streamline operations by automating repetitive tasks and connecting your tools for maximum efficiency.',
  },
  {
    icon: Shield,
    title: 'API Integration',
    description: 'Connect your systems and enable seamless data flow between applications with secure API solutions.',
  },
  {
    icon: Cpu,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with custom dashboards and reporting tools.',
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* --- HERO SECTION: IMAGE AND GLOWS RESTRICTED HERE --- */}
        <section className="relative pt-32 pb-16 overflow-hidden">

          {/* Animated Background Layers (Restricted to Hero) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Background Hero Image */}
            <img
              src="/hero-bg.jpg"
              alt="Cyber Circuit Background"
              className="w-full h-full object-cover opacity-30"
            />
            {/* Blending overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />

            {/* Animated Glow Nodes */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-float-slow" />
            <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float" />
          </div>

          <div className="container mx-auto px-6 relative pb-20 z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-up">
                <Sparkles size={16} />
                <span>Scalable Digital Architecture</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up delay-100">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-20 leading-relaxed animate-fade-up delay-200">
                Comprehensive digital solutions designed to accelerate your business growth through
                <span className="text-foreground"> intelligence and automation.</span>
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTIONS BELOW: NO BACKGROUND IMAGE --- */}
        {/* Services Grid */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,229,0.1)] animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Nexe-Agent Section */}
        <section className="py-24 bg-card/30 border-y border-border relative overflow-hidden z-10">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
             <div className="max-w-3xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why <span className="text-gradient">Nexe-Agent</span>?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We are not just developers. We are strategic partners who understand that
                  technology should serve your business goals, not complicate them. Our team
                  combines deep technical expertise with business acumen to deliver solutions
                  that drive real results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   <div className="flex flex-col items-center gap-2">
                      <Code className="text-primary w-8 h-8" />
                      <span className="text-sm text-foreground">Custom Solutions</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <Bot className="text-primary w-8 h-8" />
                      <span className="text-sm text-foreground">AI Value-Add</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <Cpu className="text-primary w-8 h-8" />
                      <span className="text-sm text-foreground">Scalable Architecture</span>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build Something <span className="text-gradient">Intelligent</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Let us analyze your business and show you exactly how AI and automation
              can transform your operations. No obligations, just insights.
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link href="/contact" className="gap-3">
                Get Your Free Audit
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}