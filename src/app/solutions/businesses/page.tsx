'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, CheckCircle2, ArrowRight, DollarSign, Clock, BarChart3, Users, Globe, ShieldCheck, TrendingUp, Map, Smartphone, FileText, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/components/FAQ';

const benefits = [
  {
    icon: DollarSign,
    title: 'Reduce Shipping Costs',
    desc: 'Compare rates across multiple carriers and choose the most affordable option for every shipment. Average savings of 20-30% compared to single-carrier contracts.',
  },
  {
    icon: Clock,
    title: 'Book in Under 60 Seconds',
    desc: 'Save pickup and delivery addresses, package preferences, and recipient details. Rebook repeat shipments with one tap. No paperwork, no phone calls.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Tracking',
    desc: 'Share live tracking links with your customers. Reduce "where is my order" calls by over 80%. Your customers see exactly where their parcel is, anytime.',
  },
  {
    icon: BarChart3,
    title: 'Business Analytics',
    desc: 'Track shipping volume, spending trends, carrier performance, and delivery success rates. Export reports for accounting and decision making.',
  },
  {
    icon: Users,
    title: 'Multi-Location Support',
    desc: 'Manage shipments from multiple business locations. Add team members with role-based access. Perfect for businesses with several branches.',
  },
  {
    icon: Globe,
    title: 'Expanding Coverage',
    desc: 'Active in 5+ Tanzanian cities with continuous expansion. Cross-border shipping to Kenya, Uganda, and Rwanda coming soon.',
  },
];

const stats = [
  { val: '20-30%', label: 'Average savings' },
  { val: '< 60s', label: 'Booking time' },
  { val: '80%', label: 'Fewer inquiry calls' },
  { val: '98%', label: 'On-time delivery' },
];

export default function BusinessesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
        <section className="pt-32 pb-16 container-px max-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
              <Building2 className="w-3.5 h-3.5" />
              Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              For <span className="text-[var(--orange)]">Businesses</span>
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
              Empower your business with East Africa's most reliable delivery network. From local shops to large enterprises,
              Pacelio gives you the tools to ship faster, save money, and delight your customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/download" className="btn btn-primary btn-lg">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">
                Speak to Sales
              </Link>
            </div>
          </div>
          <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-[2rem] p-8 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[var(--orange)] tracking-tighter">{s.val}</div>
                <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Everything You Need to <span className="text-[var(--orange)]">Ship Smarter</span></h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">Built for the realities of East African business — reliable, fast, and transparent.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{b.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-16 container-px max-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4 text-center">Key <span className="text-[var(--orange)]">Capabilities</span></h2>
          <p className="text-[var(--muted)] text-center mb-10 max-w-xl mx-auto">Everything your business needs to ship smarter, faster, and more cost-effectively.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Map, text: 'Real-time order tracking for your customers with shareable links' },
              { icon: TrendingUp, text: 'Automated dispatch and route-optimized delivery' },
              { icon: DollarSign, text: 'Integrated payment, invoicing, and COD management' },
              { icon: BarChart3, text: 'Dedicated business dashboard with analytics' },
              { icon: Globe, text: 'Custom delivery zones and pricing negotiation' },
              { icon: FileText, text: 'Bulk order creation with CSV import' },
              { icon: Users, text: 'Multi-location and multi-user account management' },
              { icon: Smartphone, text: 'Automated SMS and email customer notifications' },
              { icon: ShoppingCart, text: 'Monthly spending reports and carrier performance reviews' },
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
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Ready to <span className="text-[var(--orange)]">Transform</span> Your Shipping?</h2>
            <p className="text-[var(--muted)] mb-8">Join thousands of businesses using Pacelio to deliver better.</p>
            <Link href="/download" className="btn btn-primary btn-lg">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      </main>
      <Footer />
    </>
  );
}
