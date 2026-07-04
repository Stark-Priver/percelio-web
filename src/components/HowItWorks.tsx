'use client';

import { UserPlus, Package, MapPin, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    desc: 'Sign up in 2 minutes. Choose your role — business owner, courier agent, logistics company, or end user. Pacelio tailors the experience instantly.',
    color: '#E55934',
    bg: '#FFF1EC',
  },
  {
    num: '02',
    icon: Package,
    title: 'Book or Accept a Shipment',
    desc: 'Businesses book pickups in under 60 seconds. Couriers accept nearby jobs from a live feed. Everything matched automatically by location and rating.',
    color: '#1565C0',
    bg: '#E8F0FE',
  },
  {
    num: '03',
    icon: MapPin,
    title: 'Track in Real Time',
    desc: 'From pickup to drop-off, every milestone is visible. Live map, SMS alerts, and an accurate estimated arrival time — always.',
    color: '#5B21B6',
    bg: '#EDE9FE',
  },
  {
    num: '04',
    icon: CheckCircle2,
    title: 'Confirm & Get Paid',
    desc: 'Digital proof of delivery captured automatically. Instant receipts for businesses. Same-day mobile money payouts for couriers. Zero paperwork.',
    color: '#2E7D32',
    bg: '#EDF7EE',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-[var(--bg-soft)]">
      <div className="max-content container-px">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="overline mb-4">Simple Process</div>
          <h2 className="mb-6">
            Up and Running{' '}
            <span className="text-[var(--orange)]">in Minutes</span>
          </h2>
          <p className="text-lg text-[var(--body)] max-w-xl mx-auto leading-relaxed">
            No complex onboarding. No training required. Pacelio is built for busy people on the move.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#E55934] via-[#5B21B6] to-[#2E7D32] opacity-20 z-0" />

          {steps.map((s, i) => (
            <div key={i} className="relative z-10 bg-[var(--bg)] p-8 rounded-3xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow group">
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: s.bg, color: s.color }}
              >
                <s.icon className="w-8 h-8" />
                {/* Step number badge */}
                <div
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center border-4 border-[var(--bg)]"
                  style={{ backgroundColor: s.color }}
                >
                  {i + 1}
                </div>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>Step {s.num}</div>
              <h4 className="text-lg font-bold mb-4 text-[var(--dark)] leading-tight">{s.title}</h4>
              <p className="text-sm text-[var(--body)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* KPI strip */}
        <div className="mt-20 bg-[var(--bg)] border border-[var(--border)] rounded-[2.5rem] p-12 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative overflow-hidden shadow-lifted">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--orange-tint)] to-transparent opacity-30 -mr-16 -mt-16 rounded-full" />

          {[
            { val: '< 60s', label: 'Average booking time', sub: 'From open to confirmed' },
            { val: '15%',   label: 'Avg delivery cost saved', sub: 'vs traditional logistics' },
            { val: '4.8★',  label: 'App store rating', sub: 'From 2,400+ reviews' },
          ].map(s => (
            <div key={s.label} className="text-center relative z-10">
              <div className="text-4xl md:text-5xl font-black text-[var(--dark)] tracking-tighter mb-4">{s.val}</div>
              <div className="text-base font-bold text-[var(--dark)] mb-2">{s.label}</div>
              <div className="text-sm text-[var(--muted)] font-medium">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
