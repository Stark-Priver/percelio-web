'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { History, Zap, Package, Map, MessageCircle, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const releases = [
  {
    version: 'V2.0',
    date: 'June 2026',
    color: '#E55934',
    title: 'Beta Launch — Mbeya',
    items: [
      'Platform goes live in Mbeya with 50+ couriers and 120 partner businesses',
      'Multi-carrier rate comparison with real-time quotes across logistics providers',
      'QR-based three-step parcel handoff chain (Pickup → Hub → Delivery)',
      'In-app chat system with real-time messaging between all stakeholders',
      'Cash on Delivery (COD) lifecycle with automated return-to-sender flow',
    ],
  },
  {
    version: 'V1.5',
    date: 'April 2026',
    color: '#1565C0',
    title: 'Enterprise & Fleet Features',
    items: [
      'Fleet management dashboard with GPS tracking and driver monitoring',
      'Commission splitting engine with configurable platform/carrier/agent splits',
      'Real-time GPS tracking on interactive map with live location updates',
      'Audit logging with full actor details and export capability',
      'Rate card system allowing carriers to define their own pricing',
    ],
  },
  {
    version: 'V1.2',
    date: 'February 2026',
    color: '#5B21B6',
    title: 'Core Platform Complete',
    items: [
      'Live courier tracking with real-time location updates on interactive map',
      'In-app notification center with read/unread tracking',
      'Dispute management system with full lifecycle support',
      'Performance analytics dashboard with 30+ report types',
      'Business analytics and reporting suite',
    ],
  },
  {
    version: 'V1.0',
    date: 'January 2026',
    color: '#2E7D32',
    title: 'Development Begins',
    items: [
      'Full-stack development initiated under IncriprTech in Mbeya',
      'Flutter cross-platform mobile app with role-based dashboards',
      'Supabase backend with PostgreSQL, authentication, and Row Level Security',
      'Basic shipment booking and order management system',
      'Dark and light theme support across all platforms',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <History className="w-3.5 h-3.5" />
            Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Changelog</h1>
          <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl">
            The development journey of Pacelio — from initial concept in January 2026 to beta launch in Mbeya. Built by IncriprTech, Mbeya, Tanzania.
          </p>

          <div className="space-y-12">
            {releases.map((release, i) => (
              <div key={i} className="relative pl-10">
                {/* Timeline line */}
                {i < releases.length - 1 && (
                  <div className="absolute left-[13px] top-10 bottom-0 w-0.5 bg-[var(--border)]" />
                )}
                {/* Dot */}
                <div
                  className="absolute top-1 left-0 w-7 h-7 rounded-full border-4 border-[var(--bg)] flex items-center justify-center"
                  style={{ backgroundColor: release.color }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="mb-2 flex items-center gap-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: release.color }}
                  >
                    {release.version}
                  </span>
                  <span className="text-sm text-[var(--muted)] font-medium">{release.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{release.title}</h3>
                <ul className="space-y-3">
                  {release.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[var(--muted)] text-sm">
                      <div className="w-5 h-5 rounded-full bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div className="mt-20 bg-[var(--bg-soft)] border border-[var(--border)] rounded-[2rem] p-10 text-center">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Stay Updated</h3>
            <p className="text-sm text-[var(--muted)] mb-6 max-w-md mx-auto">Get notified about new features, improvements, and platform updates delivered to your inbox.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/10 outline-none transition-all text-sm"
              />
              <button className="btn btn-primary px-6 py-3 rounded-xl text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
