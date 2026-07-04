'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bike, CheckCircle2, ArrowRight, DollarSign, Map, TrendingUp, Clock, Smartphone, Star, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: DollarSign,
    title: 'Same-Day Payouts',
    desc: 'Get paid the same day you deliver. Earnings deposited directly to your mobile money account — M-Pesa, Tigo Pesa, or Airtel Money.',
  },
  {
    icon: Map,
    title: 'Smart Route Planning',
    desc: 'Optimized delivery routes that save time and fuel. Multi-stop planning means more deliveries per hour and higher daily earnings.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    desc: 'Work when you want. Accept jobs that fit your schedule. No minimum hours, no shifts — you are your own boss.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Earnings',
    desc: 'See exactly what you will earn before accepting a job. Daily earning summaries, weekly reports, and performance bonuses.',
  },
  {
    icon: Smartphone,
    title: 'All-in-One App',
    desc: 'Accept jobs, navigate to locations, scan QR codes, collect payments, and track your earnings — all from one app.',
  },
  {
    icon: Star,
    title: 'Grow Your Rating',
    desc: 'Build your reputation with customer ratings. Top-rated couriers get priority matching on high-value deliveries.',
  },
];

const steps = [
  { num: '01', title: 'Download & Register', desc: 'Download the Pacelio app and sign up as a Courier Agent. Takes under 3 minutes.' },
  { num: '02', title: 'Get Approved', desc: 'Upload your ID and vehicle details. Most agents are approved within 48 hours.' },
  { num: '03', title: 'Accept Jobs', desc: 'Browse available deliveries in your area. Accept the ones that fit your schedule.' },
  { num: '04', title: 'Deliver & Earn', desc: 'Pick up, deliver, and get paid. Same-day payout to your mobile money account.' },
];

export default function CouriersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
        <section className="pt-32 pb-16 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Bike className="w-3.5 h-3.5" />
            Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            For <span className="text-[var(--orange)]">Couriers</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
            Join the elite network of Pacelio couriers. Work on your own schedule, earn competitive rates with same-day payouts,
            and use our smart technology to deliver faster and earn more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/download" className="btn btn-primary btn-lg">
              Apply to Deliver <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '3,000+', label: 'Active Couriers' },
              { val: 'TZS 45K', label: 'Avg Daily Earnings' },
              { val: '4.8 ★', label: 'Courier Rating' },
              { val: '48hrs', label: 'Approval Time' },
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Why Deliver with <span className="text-[var(--orange)]">Pacelio</span>?</h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">More deliveries, less hassle, better earnings.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{b.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Start Delivering in <span className="text-[var(--orange)]">4 Steps</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mx-auto mb-5 text-xl font-black">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--muted)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 container-px max-content">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">What You <span className="text-[var(--orange)]">Need</span></h2>
          <div className="grid gap-4">
            {[
              'Valid government-issued ID (National ID, Passport, or Voters Card)',
              'A smartphone (Android or iOS) with internet access',
              'Reliable transportation (bicycle, motorcycle, or vehicle)',
              'Basic knowledge of your delivery city',
              'Commitment to on-time deliveries and customer service',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--orange)] flex-shrink-0" />
                <span className="text-[var(--foreground)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Ready to <span className="text-[var(--orange)]">Start Earning</span>?</h2>
            <p className="text-[var(--muted)] mb-8">Join thousands of couriers earning daily with Pacelio.</p>
            <Link href="/download" className="btn btn-primary btn-lg">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
