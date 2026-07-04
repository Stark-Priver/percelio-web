'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, CheckCircle2, ArrowRight, Building2, Headphones, Cpu, Globe, Lock, Sliders, BarChart3, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    desc: 'SOC 2 compliant infrastructure with data encrypted at rest and in transit. Role-based access control, audit trails, and SSO integration.',
  },
  {
    icon: Cpu,
    title: 'Advanced API & Webhooks',
    desc: 'Full REST API with rate limits of 10,000 requests per minute. Real-time webhooks for order events. SDKs in Python, JS, PHP, and Dart.',
  },
  {
    icon: Globe,
    title: 'Multi-Region Operations',
    desc: 'Manage deliveries across multiple cities and countries from one platform. Consolidated billing, cross-region analytics, and unified tracking.',
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    desc: 'Dedicated account manager, 24/7/365 phone and chat support. SLA-backed response times with 1-hour critical issue resolution.',
  },
  {
    icon: Sliders,
    title: 'Custom Workflows',
    desc: 'Tailored delivery workflows, approval chains, and notification rules. Custom integration with your ERP, WMS, or e-commerce platform.',
  },
  {
    icon: Building2,
    title: 'White-Label Options',
    desc: 'Brand the platform with your company logo and colors. Custom domain, branded tracking pages, and co-branded courier app available.',
  },
];

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
      <section className="pt-32 pb-16 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            <span className="text-[var(--orange)]">Enterprise</span> Solutions
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
            Custom-built logistics infrastructure for large organizations. Pacelio Enterprise provides the security, scalability,
            and integration capabilities required by global businesses operating in East Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Enterprise Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Everything in Standard, <span className="text-[var(--orange)]">Plus Enterprise</span></h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">Built for organizations with advanced security, compliance, and integration requirements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{f.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features List */}
      <section className="py-16 container-px max-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4 text-center">Enterprise <span className="text-[var(--orange)]">Capabilities</span></h2>
          <p className="text-[var(--muted)] text-center mb-10 max-w-xl mx-auto">Everything large organizations need to operate at scale with confidence.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Lock, text: 'Enterprise-grade security and compliance (GDPR, ISO 27001)' },
              { icon: Cpu, text: 'Advanced API integrations with custom webhook support' },
              { icon: Headphones, text: 'SLA-backed priority support available 24/7/365' },
              { icon: Users, text: 'Dedicated account management and onboarding team' },
              { icon: BarChart3, text: 'Custom reporting, business intelligence, and data exports' },
              { icon: Building2, text: 'White-label branding options for customer-facing interfaces' },
              { icon: Globe, text: 'Multi-region and cross-border delivery management' },
              { icon: DollarSign, text: 'Custom contract pricing and volume-based discounts' },
              { icon: ShieldCheck, text: 'On-premise deployment options available' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[var(--foreground)] font-medium leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Ready to <span className="text-[var(--orange)]">Scale</span>?</h2>
            <p className="text-[var(--muted)] mb-8">Talk to our enterprise team about a custom solution for your organization.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Enterprise Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
