'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Users,
  Sparkles,
  Brain,
  Code,
  Zap,
  Target,
  Lightbulb,
  Layers,
  Shield
} from 'lucide-react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We pursue emerging technologies and creative solutions that give our clients a competitive edge.",
  },
  {
    icon: Brain,
    title: "Intelligent Design",
    description: "Every system we build incorporates smart logic that adapts, learns, and improves over time.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "From day one, we engineer solutions that grow seamlessly with your business demands.",
  },
  {
    icon: Shield,
    title: "Uncompromising Reliability",
    description: "We build systems that businesses depend on, with uptime, security, and performance you can trust.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">

        {/* Hero Section - Background image and glows restricted strictly to this component */}
        <section className="relative pt-32 pb-16 overflow-hidden">

          {/* Background Image restricted to Hero only */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/hero-bg.jpg"
              alt="Cyber Circuit Background"
              className="w-full h-full object-cover opacity-30"
            />
            {/* Blending overlay to ensure image doesn't bleed into next section */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
          </div>

          {/* Animated Glows restricted to Hero only */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-float-slow" />
            <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-up">
                <Users size={16} />
                <span>About Nexe-Agent</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight animate-fade-up delay-100">
                Building the Future of <span className="text-gradient">Intelligent Business</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl pb-24 mx-auto animate-fade-up delay-200">
                Nexe-Agent was founded on a simple belief: technology should amplify human potential,
                not complicate it. We make artificial intelligence accessible, practical, and transformative
                for businesses of every size.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section - Standard Background */}
        <section className="py-16 bg-card/30 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission/Vision Section - Standard Background */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1 animate-fade-up">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-card border border-border p-8 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary/30 rounded-full" />
                  </div>

                  <div className="relative text-center">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-float">
                      <Target className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                    <p className="text-muted-foreground max-w-xs mx-auto">
                      A world where intelligent systems eliminate manual work and unlock exponential growth for every business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-up">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Reducing Manual Work, <span className="text-gradient">Increasing Efficiency</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We saw too many businesses drowning in repetitive tasks and outdated processes.
                  Every hour spent on manual work is an hour not spent on innovation or customer relationships.
                </p>
                <div className="space-y-4 mb-8 inline-block text-left">
                  {[
                    { icon: Brain, text: 'Cutting-edge AI integration' },
                    { icon: Code, text: 'Clean, maintainable architecture' },
                    { icon: Zap, text: 'Reclaiming time for what truly matters' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Standard Background */}
        <section className="py-24 bg-card/30 border-y border-border">
          <div className="container mx-auto px-6 text-center">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core <span className="text-gradient">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide every decision and every line of code we write.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group p-8 rounded-2xl bg-secondary/20 border border-border hover:border-primary/50 transition-all duration-500 text-center hover:shadow-[0_0_30px_rgba(0,229,229,0.05)]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Standard Background */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow opacity-50" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the growing list of businesses transforming their operations with intelligent technology.
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link href="/contact" className="gap-3">
                Start a Conversation
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}