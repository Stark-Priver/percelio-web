'use client';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="11" r="3" fill="currentColor" stroke="none"/>
        <path d="M11 2v2M11 18v2M2 11h2M18 11h2" opacity="0.5"/>
        <circle cx="11" cy="11" r="9" opacity="0.3"/>
      </svg>
    ),
    title: 'Live Courier Tracking',
    desc: 'GPS-accurate positions updated every 15 seconds. Watch your parcel move in real time on a live map — never wonder where your shipment is.',
    stat: '15s updates',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l4-4 5 5 4-6 3 3" opacity="0.4"/>
        <path d="M3 9l4-4 5 5 4-6 3 3" strokeDasharray="none"/>
        <circle cx="17" cy="12" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: 'Smart Route Optimization',
    desc: 'AI-powered routing saves couriers up to 40% travel time. Multi-stop planning calculated instantly — more deliveries, less fuel, better earnings.',
    stat: '40% faster',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="18" height="14" rx="3" opacity="0.3"/>
        <path d="M6 9h10M6 12h6" opacity="0.6"/>
        <path d="M13 14l2 2 3-3" strokeWidth="2"/>
      </svg>
    ),
    title: 'Barcode Scanning',
    desc: 'Instant parcel verification via QR or barcode. Zero manual entry errors. Digital proof of delivery captured automatically at every stop.',
    stat: '99.9% accuracy',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h14a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" opacity="0.35"/>
        <path d="M8 4h6a2 2 0 012 2v2H6V6a2 2 0 012-2z" opacity="0.35"/>
        <path d="M11 11v3M9 13h4" strokeWidth="2"/>
      </svg>
    ),
    title: 'Shipment Management',
    desc: 'Full order lifecycle in one dashboard — create, assign, track, and complete. Book a pickup in under 60 seconds. Bulk upload via CSV for high-volume shippers.',
    stat: '< 60s to book',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" opacity="0.4"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" opacity="0.35"/>
        <path d="M6 1v3M10 1v3M14 1v3" opacity="0.5"/>
      </svg>
    ),
    title: 'Instant Notifications',
    desc: 'SMS, push, and email alerts at every milestone. Customers always know where their parcel is — reducing "where is my order?" calls by over 80%.',
    stat: 'Real-time alerts',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="18" height="18" rx="3" opacity="0.2"/>
        <path d="M6 14l4-4 3 3 5-5" strokeWidth="2"/>
        <path d="M6 18h10" opacity="0.4"/>
      </svg>
    ),
    title: 'Performance Analytics',
    desc: 'Business-grade reports: delivery success rates, courier performance, revenue trends, and SLA tracking. 30+ report types exportable to PDF or CSV.',
    stat: '30+ report types',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-pad" style={{ background: '#fff' }}>
      <div className="max-content container-px">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="overline" style={{ marginBottom: 14 }}>Platform Capabilities</div>
          <h2 style={{ marginBottom: 18, color: 'var(--dark)' }}>
            Tools That Power<br />
            <span style={{ color: 'var(--orange)' }}>Smarter Deliveries</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            Every feature built for the realities of East African logistics — offline-capable, mobile-first, and designed for speed.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} className="card" style={{ padding: 28 }}>
              <div className="icon-wrap icon-wrap-orange" style={{ marginBottom: 20, color: 'var(--orange)' }}>
                {f.icon}
              </div>
              <h4 style={{ marginBottom: 10, fontSize: 17, fontWeight: 700, letterSpacing: '-0.015em' }}>{f.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, marginBottom: 20 }}>{f.desc}</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'var(--orange-light)', borderRadius: 100, padding: '4px 10px' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orange)', display: 'inline-block' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--orange)' }}>{f.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 56, textAlign: 'center', background: 'var(--bg-soft)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--body)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E7D32', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }} />
              <strong style={{ color: 'var(--dark)' }}>99.95% uptime</strong>
            </span>
            <span style={{ color: 'var(--border)', fontSize: 18 }}>·</span>
            <span style={{ fontSize: 14, color: 'var(--body)' }}><strong style={{ color: 'var(--dark)' }}>24/7</strong> customer support</span>
            <span style={{ color: 'var(--border)', fontSize: 18 }}>·</span>
            <span style={{ fontSize: 14, color: 'var(--body)' }}>Available in <strong style={{ color: 'var(--dark)' }}>Swahili & English</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
