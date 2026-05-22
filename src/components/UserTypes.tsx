'use client';
import { useState } from 'react';

const roles = [
  {
    id: 'business',
    emoji: '🏢',
    label: 'Business Owners',
    tagline: 'Ship smarter, grow faster',
    color: 'var(--orange)',
    colorHex: '#E55934',
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
    emoji: '🛵',
    label: 'Courier Agents',
    tagline: 'Earn more, deliver with ease',
    color: '#1565C0',
    colorHex: '#1565C0',
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
    emoji: '🚛',
    label: 'Logistics Companies',
    tagline: 'Manage fleets, maximize revenue',
    color: '#5B21B6',
    colorHex: '#5B21B6',
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
    emoji: '📦',
    label: 'End Users',
    tagline: 'Receive with confidence',
    color: '#2E7D32',
    colorHex: '#2E7D32',
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
    <section id="roles" className="section-pad" style={{ background: 'var(--bg-soft)' }}>
      <div className="max-content container-px">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="overline" style={{ marginBottom: 14 }}>Built For Everyone</div>
          <h2 style={{ marginBottom: 16 }}>
            One Platform,{' '}
            <span style={{ color: 'var(--orange)' }}>Four Perspectives</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>
            Whether shipping, delivering, managing fleets, or receiving — Percelio adapts to your role.
          </p>
        </div>

        {/* Role tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 52, flexWrap: 'wrap' }}>
          {roles.map(r => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '9px 18px', borderRadius: 100, border: 'none',
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'var(--font)',
                transition: 'all 0.2s ease',
                background: active === r.id ? r.colorHex : '#fff',
                color: active === r.id ? '#fff' : 'var(--body)',
                boxShadow: active === r.id ? `0 4px 16px ${r.colorHex}30` : '0 1px 4px rgba(0,0,0,0.06)',
                border: `1.5px solid ${active === r.id ? r.colorHex : 'var(--border)'}`,
              }}
            >
              <span style={{ fontSize: 15 }}>{r.emoji}</span>
              {r.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={active} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>

          {/* Left */}
          <div>
            <div style={{ fontSize: 42, marginBottom: 20 }}>{role.emoji}</div>
            <h3 style={{ marginBottom: 6, color: 'var(--dark)' }}>{role.label}</h3>
            <p style={{ fontSize: 16, color: role.colorHex, fontWeight: 600, marginBottom: 28 }}>{role.tagline}</p>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 36 }}>
              {role.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--border-light)', fontSize: 15, color: 'var(--body)' }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: `${role.colorHex}18`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke={role.colorHex} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 5l2 2 4-4"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="btn"
              style={{ background: role.colorHex, color: '#fff', fontFamily: 'var(--font)', boxShadow: `0 4px 16px ${role.colorHex}30` }}
            >
              Get Started as {role.label.split(' ')[0]}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 7h10M7 2l5 5-5 5"/></svg>
            </a>
          </div>

          {/* Right — dashboard card */}
          <div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 20, padding: 24, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500 }}>{role.emoji} {role.label} Dashboard</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.01em', marginTop: 2 }}>Percelio Platform</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E7D32', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }} />
                  <span style={{ fontSize: 11, color: '#2E7D32', fontWeight: 600 }}>Live</span>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
                {role.stats.map(s => (
                  <div key={s.label} style={{ background: 'var(--bg-soft)', borderRadius: 12, padding: '12px 14px' }}>
                    <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 500, marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em' }}>{s.val}</div>
                  </div>
                ))}
              </div>

              {/* Activity */}
              <div>
                <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>Recent Activity</div>
                {[
                  { text: 'Shipment #PCT-2847 picked up',   time: '2m ago',  dot: role.colorHex },
                  { text: 'Payment confirmed — TZS 12,000', time: '15m ago', dot: '#2E7D32' },
                  { text: 'New order request from Mwanza',  time: '1h ago',  dot: '#E65100' },
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: a.dot, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'var(--body)', flex: 1 }}>{a.text}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)', flexShrink: 0 }}>{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:860px){.roles-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
