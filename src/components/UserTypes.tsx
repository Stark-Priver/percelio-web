'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Bike, Truck, User, CheckCircle2, ArrowRight, LayoutDashboard, Zap, ShieldCheck } from 'lucide-react';

const roles = [
  {
    id: 'business',
    icon: Briefcase,
    label: 'Business Owners',
    tagline: 'Ship smarter, grow faster',
    color: '#E55934',
    features: [
      'Book pickups in under 60 seconds',
      'Real-time parcel tracking dashboard',
      'Automated invoicing and receipts',
      'Multi-location shipment management',
      'Bulk order creation and CSV import',
      'Spend analytics and monthly reports',
    ],
    stats: [{ label: 'Orders Today', val: '24' }, { label: 'In Transit', val: '8' }, { label: 'Delivered', val: '16' }],
  },
  {
    id: 'courier',
    icon: Bike,
    label: 'Courier Agents',
    tagline: 'Earn more, deliver with ease',
    color: '#1565C0',
    features: [
      'Smart route optimization engine',
      'Instant job notifications and matching',
      'Daily earnings tracking and payouts',
      'Navigation-integrated delivery maps',
      'Digital e-signature at delivery',
      'Performance scores and ratings',
    ],
    stats: [{ label: 'Earnings Today', val: 'TZS 45K' }, { label: 'Deliveries', val: '12' }, { label: 'Rating', val: '4.9 ★' }],
  },
  {
    id: 'logistics',
    icon: Truck,
    label: 'Logistics Companies',
    tagline: 'Manage fleets, maximize revenue',
    color: '#5B21B6',
    features: [
      'Full fleet management and GPS tracking',
      'Driver assignment and scheduling',
      'B2B contract and SLA management',
      'Advanced KPI analytics dashboard',
      'REST API integration',
      'Multi-city, multi-warehouse support',
    ],
    stats: [{ label: 'Fleet Active', val: '38/42' }, { label: 'Revenue MTD', val: '$28K' }, { label: 'SLA Rate', val: '98.2%' }],
  },
  {
    id: 'user',
    icon: User,
    label: 'End Users',
    tagline: 'Receive with confidence',
    color: '#2E7D32',
    features: [
      'Track any parcel in real time',
      'SMS and push delivery notifications',
      'Delivery slot rescheduling',
      'Safe drop location management',
      'Rate and review couriers',
      'Digital proof of delivery',
    ],
    stats: [{ label: 'Active Parcels', val: '2' }, { label: 'Delivered Total', val: '47' }, { label: 'Next Arrival', val: 'Today' }],
  },
];

export default function UserTypes() {
  const [active, setActive] = useState('business');
  const role = roles.find(r => r.id === active)!;

  return (
    <section id="roles" className="section-pad bg-[var(--bg-soft)] overflow-hidden">
      <div className="max-content container-px">

        {/* Header */}
        <div className="text-center mb-8 reveal">
          <div className="overline mb-4">End-to-End Delivery Flow</div>
          <h2 className="mb-4">
            One Platform,{' '}
            <span className="text-[var(--orange)]">Four Perspectives</span>
          </h2>
          <p className="text-lg text-[var(--body)] max-w-xl mx-auto leading-relaxed">
            From the initial booking to the final doorstep delivery — Pacelio manages the entire lifecycle for everyone involved.
          </p>
        </div>

        {/* Role tabs (Stages) */}
        <div className="relative mb-10 reveal-delay-1">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--border)] -translate-y-1/2 hidden lg:block z-0" />

          <div className="flex justify-between gap-2 flex-wrap relative z-10">
            {roles.map((r, idx) => (
              <div key={r.id} className="flex flex-col items-center">
                <button
                  onClick={() => setActive(r.id)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-500 border-2 group ${
                    active === r.id
                      ? 'bg-[var(--bg)] border-[var(--orange)] shadow-xl scale-105'
                      : 'bg-[var(--bg-soft)] border-transparent hover:border-[var(--muted)]/20'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                      active === r.id ? 'text-white' : 'bg-[var(--bg)] text-[var(--muted)]'
                    }`}
                    style={{ backgroundColor: active === r.id ? r.color : undefined }}
                  >
                    <r.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${
                    active === r.id ? 'text-[var(--dark)]' : 'text-[var(--muted)] group-hover:text-[var(--body)]'
                  }`}>
                    {r.label}
                  </span>
                </button>
                {/* Stage numbering */}
                <div className={`mt-4 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-colors duration-500 ${
                  active === r.id ? 'bg-[var(--orange)] border-[var(--orange)] text-white' : 'bg-[var(--bg)] border-[var(--border)] text-[var(--muted)]'
                }`}>
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div key={`${active}-text`} className="reveal">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-xl"
              style={{ backgroundColor: `${role.color}10`, color: role.color }}
            >
              <role.icon className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-[var(--dark)]">{role.label}</h3>
            <p className="text-lg font-semibold mb-8" style={{ color: role.color }}>{role.tagline}</p>

            <ul className="space-y-2 mb-8 p-0 list-none">
              {role.features.map(f => (
                <li key={f} className="flex items-center gap-4 py-2 border-b border-[var(--border-light)] text-[var(--body)] group">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: `${role.color}15`, color: role.color }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base group-hover:text-[var(--dark)] transition-colors">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/download"
              className="btn text-white px-8 py-4 rounded-xl shadow-2xl transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: role.color,
                boxShadow: `0 12px 32px ${role.color}40`
              }}
            >
              Get Started as {role.label.split(' ')[0]}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Right — dashboard card */}
          <div key={`${active}-card`} className="reveal-delay-2">
            <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 shadow-lifted">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${role.color}10`, color: role.color }}
                  >
                    <role.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-widest">{role.label}</div>
                    <div className="text-sm font-bold text-[var(--dark)] tracking-tight">Active Session</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Live Now</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {role.stats.map(s => (
                  <div key={s.label} className="bg-[var(--bg-soft)] rounded-xl p-4 border border-[var(--border-light)] hover:border-[var(--muted)]/20 transition-colors">
                    <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-wider mb-1">{s.label}</div>
                    <div className="text-xl font-bold text-[var(--dark)] tracking-tight">{s.val}</div>
                  </div>
                ))}
              </div>

              {/* Activity */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <LayoutDashboard className="w-3 h-3 text-[var(--muted)]" />
                  <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-widest">System Activity</div>
                </div>
                <div className="space-y-0.5">
                  {[
                    { text: 'Shipment #PCT-2847 updated', time: '2m ago', icon: Zap, color: role.color },
                    { text: 'Payment confirmed via M-Pesa', time: '15m ago', icon: CheckCircle2, color: '#10B981' },
                    { text: 'Security scan completed', time: '1h ago', icon: ShieldCheck, color: '#6366F1' },
                  ].map((a, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[var(--bg-soft)] ${i < 2 ? 'border-b border-[var(--border-light)]' : ''}`}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${a.color}10`, color: a.color }}>
                        <a.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-[var(--body)] font-medium flex-1">{a.text}</span>
                      <span className="text-[10px] text-[var(--muted)] font-bold uppercase">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
