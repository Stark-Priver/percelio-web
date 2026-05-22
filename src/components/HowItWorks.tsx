'use client';

const steps = [
  {
    num: '01',
    icon: '👤',
    title: 'Create Your Account',
    desc: 'Sign up in 2 minutes. Choose your role — business owner, courier agent, logistics company, or end user. Percelio tailors the experience instantly.',
    color: '#E55934',
    bg: '#FFF1EC',
  },
  {
    num: '02',
    icon: '📦',
    title: 'Book or Accept a Shipment',
    desc: 'Businesses book pickups in under 60 seconds. Couriers accept nearby jobs from a live feed. Everything matched automatically by location and rating.',
    color: '#1565C0',
    bg: '#E8F0FE',
  },
  {
    num: '03',
    icon: '📍',
    title: 'Track in Real Time',
    desc: 'From pickup to drop-off, every milestone is visible. Live map, SMS alerts, and an accurate estimated arrival time — always.',
    color: '#5B21B6',
    bg: '#EDE9FE',
  },
  {
    num: '04',
    icon: '✅',
    title: 'Confirm & Get Paid',
    desc: 'Digital proof of delivery captured automatically. Instant receipts for businesses. Same-day mobile money payouts for couriers. Zero paperwork.',
    color: '#2E7D32',
    bg: '#EDF7EE',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad" style={{ background: '#fff' }}>
      <div className="max-content container-px">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="overline" style={{ marginBottom: 14 }}>Simple Process</div>
          <h2 style={{ marginBottom: 18 }}>
            Up and Running{' '}
            <span style={{ color: 'var(--orange)' }}>in Minutes</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>
            No complex onboarding. No training required. Percelio is built for busy people on the move.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: 36,
            left: '12.5%',
            right: '12.5%',
            height: 1,
            background: 'linear-gradient(to right, #E55934, #1565C0, #5B21B6, #2E7D32)',
            opacity: 0.15,
            zIndex: 0,
          }} />

          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative', zIndex: 1 }}>
              {/* Icon */}
              <div style={{
                width: 72,
                height: 72,
                borderRadius: 20,
                background: s.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                marginBottom: 20,
                border: `1px solid ${s.color}20`,
                position: 'relative',
              }}>
                {s.icon}
                {/* Step number */}
                <div style={{
                  position: 'absolute',
                  top: -8, right: -8,
                  width: 22, height: 22,
                  borderRadius: '50%',
                  background: s.color,
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {i + 1}
                </div>
              </div>

              <div style={{ fontSize: 10, fontWeight: 700, color: s.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{s.num}</div>
              <h4 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: 'var(--dark)', letterSpacing: '-0.015em' }}>{s.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* KPI strip */}
        <div style={{
          marginTop: 72,
          background: 'var(--bg-soft)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          padding: '40px 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative orange corner */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: 180, height: 180, background: 'radial-gradient(circle at top right, var(--orange-tint), transparent)', borderRadius: '0 20px 0 0' }} />

          {[
            { val: '< 60s', label: 'Average booking time', sub: 'From open to confirmed' },
            { val: '15%',   label: 'Avg delivery cost saved', sub: 'vs traditional logistics' },
            { val: '4.8★',  label: 'App store rating', sub: 'From 2,400+ reviews' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>{s.val}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:860px){
        .steps-grid{grid-template-columns:1fr 1fr!important;}
      }
      @media(max-width:600px){
        .steps-grid{grid-template-columns:1fr!important;}
        .kpi-grid{grid-template-columns:1fr!important;}
      }`}</style>
    </section>
  );
}
