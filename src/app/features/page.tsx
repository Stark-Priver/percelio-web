'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scale, Map, QrCode, Zap, MessageCircle, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Scale,
    title: 'Multi-Carrier Rate Comparison',
    desc: 'Compare prices, delivery times, and ratings across multiple logistics carriers side by side. Choose the best option for every shipment — carriers compete on price and service quality, saving you up to 30% on shipping costs.',
    stat: 'Save up to 30%',
  },
  {
    icon: Map,
    title: 'Live Courier Tracking',
    desc: 'Watch your parcel move in real time on a live map. Never wonder where your shipment is — share tracking links with customers and reduce "where is my order" calls by over 80%.',
    stat: '80% fewer calls',
  },
  {
    icon: QrCode,
    title: 'QR-Based Parcel Handoffs',
    desc: 'Secure three-step chain: Pickup Agent → Hub → Delivery Agent. Each handoff requires QR scanning, creating an auditable chain of custody that eliminates lost parcels and disputes.',
    stat: 'Zero lost parcels',
  },
  {
    icon: Zap,
    title: 'Smart Route Optimization',
    desc: 'Intelligent routing saves couriers up to 40% travel time. Multi-stop delivery planning means more deliveries per day, less fuel consumption, and higher earnings for agents.',
    stat: '40% faster routes',
  },
  {
    icon: MessageCircle,
    title: 'In-App Chat & Messaging',
    desc: 'Real-time messaging connects senders, couriers, and logistics companies instantly. Share delivery instructions, send photos, and resolve issues without picking up the phone.',
    stat: 'Instant resolution',
  },
  {
    icon: DollarSign,
    title: 'Cash on Delivery (COD)',
    desc: 'Full COD lifecycle from booking to payment confirmation. Agents confirm payment at delivery, failed payments trigger automatic return-to-sender — no more lost revenue.',
    stat: 'Zero revenue loss',
  },
];

const stats = [
  { val: '50K+', label: 'Parcels Delivered' },
  { val: '98%', label: 'On-Time Rate' },
  { val: '5+', label: 'Tanzanian Cities' },
  { val: '3,000+', label: 'Active Couriers' },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        <section className="pt-32 pb-16 container-px max-content">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3.5 h-3.5" />
              Features
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              Everything You Need to <span className="text-[var(--orange)]">Deliver Better</span>
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
              From real-time tracking to multi-carrier booking — Pacelio gives businesses, couriers, and individuals
              the tools to ship smarter, faster, and more cost-effectively.
            </p>
          </div>
        </section>

        <section className="pb-16 container-px max-content">
          <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-[2rem] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-[var(--orange)] mb-1">{s.val}</div>
                  <div className="text-sm text-[var(--muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Core <span className="text-[var(--orange)]">Features</span></h2>
              <p className="text-[var(--muted)] max-w-xl mx-auto">Six capabilities that set Pacelio apart — each built to solve a real logistics challenge.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg hover:border-[var(--orange)]/30 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{f.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{f.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-[var(--orange-light)] rounded-full px-3 py-1">
                    <span className="w-1 h-1 rounded-full bg-[var(--orange)]" />
                    <span className="text-[10px] font-bold text-[var(--orange)] uppercase tracking-wider">{f.stat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 container-px max-content text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Ready to experience <span className="text-[var(--orange)]">Pacelio</span>?</h2>
            <p className="text-[var(--muted)] mb-8">Join thousands of businesses, couriers, and individuals using Pacelio every day.</p>
            <Link href="/download" className="btn btn-primary btn-lg">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
