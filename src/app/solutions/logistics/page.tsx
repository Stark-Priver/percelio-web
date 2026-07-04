'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Truck, CheckCircle2, ArrowRight, BarChart3, Users, Map, TrendingUp, Settings, ShieldCheck, DollarSign, Route, ClipboardList, Link2, Palette } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: BarChart3,
    title: 'Full Fleet Visibility',
    desc: 'Track every vehicle in real time. Monitor driver performance, fuel efficiency, and delivery completion rates from one comprehensive dashboard.',
  },
  {
    icon: Users,
    title: 'Driver Management',
    desc: 'Assign drivers to deliveries, track their performance, manage schedules, and handle payroll — all within the platform.',
  },
  {
    icon: Map,
    title: 'Route & Coverage Planning',
    desc: 'Define your coverage areas, set rate cards per route, and apply for B2B delivery contracts. Expand your business strategically.',
  },
  {
    icon: DollarSign,
    title: 'Dynamic Rate Cards',
    desc: 'Set your own pricing per route, per package size, and per service tier. Carriers compete on price and quality — you control your margins.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    desc: 'Track on-time delivery rates, customer ratings, revenue trends, and SLA compliance. Data-driven insights to grow your business.',
  },
  {
    icon: ShieldCheck,
    title: 'SLA Management',
    desc: 'Define and track service level agreements for B2B contracts. Automated reporting ensures compliance and client satisfaction.',
  },
];

export default function LogisticsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
      <section className="pt-32 pb-16 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Truck className="w-3.5 h-3.5" />
            Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            For <span className="text-[var(--orange)]">Logistics Fleets</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
            Scale your fleet operations with Pacelio's enterprise-grade logistics operating system. Manage vehicles, drivers,
            contracts, and performance from one dashboard with complete visibility and control.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request Fleet Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '98.2%', label: 'SLA Achievement' },
              { val: '38/42', label: 'Avg Fleet Utilization' },
              { val: '24/7', label: 'Real-Time Monitoring' },
              { val: '5', label: 'Cities Covered' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[var(--orange)] tracking-tighter">{s.val}</div>
                <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 container-px max-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Built for <span className="text-[var(--orange)]">Growing Fleets</span></h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">From 5 vehicles to 500 — Pacelio scales with your operations.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{b.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4 text-center">Platform <span className="text-[var(--orange)]">Capabilities</span></h2>
            <p className="text-[var(--muted)] text-center mb-10 max-w-xl mx-auto">Comprehensive tools to manage, optimize, and grow your fleet operations.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Truck, text: 'Comprehensive fleet management dashboard with live GPS tracking' },
                { icon: Users, text: 'Driver assignment, scheduling, and performance scorecards' },
                { icon: DollarSign, text: 'Custom rate cards per route, package size, and service tier' },
                { icon: ClipboardList, text: 'B2B contract and SLA management with automated reporting' },
                { icon: Route, text: 'Route application system for new business opportunities' },
                { icon: Map, text: 'Hub handoff management for multi-leg deliveries' },
                { icon: Link2, text: 'Integration with existing systems via REST API and webhooks' },
                { icon: Palette, text: 'White-label options for your own branding' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[var(--foreground)] font-medium leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container-px max-content text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Ready to <span className="text-[var(--orange)]">Digitize</span> Your Fleet?</h2>
          <p className="text-[var(--muted)] mb-8">Schedule a demo and see how Pacelio can transform your logistics operations.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Request Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
