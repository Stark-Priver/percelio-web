'use client';

import { Map, Zap, Scan, Package, Bell, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Live Courier Tracking',
    desc: 'GPS-accurate positions updated every 15 seconds. Watch your parcel move in real time on a live map — never wonder where your shipment is.',
    stat: '15s updates',
  },
  {
    icon: Zap,
    title: 'Smart Route Optimization',
    desc: 'AI-powered routing saves couriers up to 40% travel time. Multi-stop planning calculated instantly — more deliveries, less fuel, better earnings.',
    stat: '40% faster',
  },
  {
    icon: Scan,
    title: 'Barcode Scanning',
    desc: 'Instant parcel verification via QR or barcode. Zero manual entry errors. Digital proof of delivery captured automatically at every stop.',
    stat: '99.9% accuracy',
  },
  {
    icon: Package,
    title: 'Shipment Management',
    desc: 'Full order lifecycle in one dashboard — create, assign, track, and complete. Book a pickup in under 60 seconds. Bulk upload via CSV for high-volume shippers.',
    stat: '< 60s to book',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    desc: 'SMS, push, and email alerts at every milestone. Customers always know where their parcel is — reducing "where is my order?" calls by over 80%.',
    stat: 'Real-time alerts',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    desc: 'Business-grade reports: delivery success rates, courier performance, revenue trends, and SLA tracking. 30+ report types exportable to PDF or CSV.',
    stat: '30+ report types',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[var(--bg)]">
      <div className="max-content container-px">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <div className="overline mb-4">Platform Capabilities</div>
          <h2 className="mb-6">
            Tools That Power<br />
            <span className="text-[var(--orange)]">Smarter Deliveries</span>
          </h2>
          <p className="text-lg text-[var(--body)] max-w-xl mx-auto leading-relaxed">
            Every feature built for the realities of East African logistics — offline-capable, mobile-first, and designed for speed.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card group p-8 hover:border-[var(--orange)]/30">
              <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-[var(--dark)]">{f.title}</h4>
              <p className="text-[var(--body)] text-sm leading-relaxed mb-6">{f.desc}</p>
              <div className="inline-flex items-center gap-2 bg-[var(--orange-light)] rounded-full px-3 py-1">
                <span className="w-1 h-1 rounded-full bg-[var(--orange)]" />
                <span className="text-[10px] font-bold text-[var(--orange)] uppercase tracking-wider">{f.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 text-center bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-6 reveal-delay-2">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <span className="flex items-center gap-3 text-sm font-medium text-[var(--body)]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <strong className="text-[var(--dark)]">99.95% uptime</strong>
            </span>
            <span className="hidden md:block w-px h-4 bg-[var(--border)]" />
            <span className="text-sm font-medium text-[var(--body)]">
              <strong className="text-[var(--dark)]">24/7</strong> Customer Support
            </span>
            <span className="hidden md:block w-px h-4 bg-[var(--border)]" />
            <span className="text-sm font-medium text-[var(--body)]">
              Available in <strong className="text-[var(--dark)]">Swahili & English</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
