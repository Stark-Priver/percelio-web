'use client';

import { Scale, Map, QrCode, Zap, MessageCircle, DollarSign } from 'lucide-react';

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

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[var(--bg)]">
      <div className="max-content container-px">

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
            <span className="hidden md:block w-px h-4 bg-[var(--border)]" />
            <span className="text-sm font-medium text-[var(--body)]">
              <strong className="text-[var(--dark)]">3,000+</strong> Active Couriers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
