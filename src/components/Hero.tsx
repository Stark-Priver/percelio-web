'use client';

export default function Hero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, background: '#fff', overflow: 'hidden' }}>
      <div className="max-content container-px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* Left — copy */}
          <div>
            {/* Overline badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--orange-light)', borderRadius: 100, padding: '5px 12px 5px 8px', marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--orange)', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.02em' }}>Now live in Tanzania 🇹🇿</span>
            </div>

            <h1 style={{ fontSize: 'clamp(38px,5vw,62px)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24 }}>
              Smarter Deliveries<br />
              for{' '}
              <span style={{ color: 'var(--orange)' }}>Growing</span>
              <br />Businesses
            </h1>

            <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.65, maxWidth: 440, marginBottom: 36 }}>
              Percelio connects business owners, courier agents, and logistics companies across East Africa — real-time tracking, instant booking, full visibility on every parcel.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 32, marginBottom: 40, paddingBottom: 36, borderBottom: '1px solid var(--border)' }}>
              {[
                { val: '3,000+', label: 'Active couriers' },
                { val: '3.5M',   label: 'Parcels moved' },
                { val: '24/7',   label: 'Live support' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#download" className="btn btn-primary btn-lg">
                Download App
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 2v8M4 8l4 4 4-4" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn btn-ghost btn-lg">
                See how it works
              </a>
            </div>

            {/* Trust logos */}
            <div>
              <p style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>
                Trusted by logistics teams worldwide
              </p>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                {['TAZARA', 'SHIPIT', 'DEXPRESS', 'FASTEX', 'MOVEIT'].map(b => (
                  <span key={b} style={{ fontSize: 13, fontWeight: 700, color: '#C8C8C8', letterSpacing: '0.05em' }}>{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Soft background circle */}
            <div style={{
              position: 'absolute',
              width: 460,
              height: 460,
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--orange-tint) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }} />

            <div className="float" style={{ position: 'relative', zIndex: 2 }}>
              {/* Phone frame */}
              <div className="phone-frame" style={{ width: 280, background: '#fff', position: 'relative' }}>
                {/* Notch */}
                <div style={{ height: 28, background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ width: 72, height: 18, borderRadius: 9, background: '#1A1A1A' }} />
                </div>

                {/* App content */}
                <div style={{ padding: '16px 16px 24px', background: '#F8F7F5' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500 }}>Good morning 👋</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.01em' }}>Amani Business</div>
                    </div>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 15, fontWeight: 700 }}>A</div>
                  </div>

                  {/* Live tracking card */}
                  <div style={{ background: '#fff', borderRadius: 14, padding: 14, marginBottom: 12, border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--orange)', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--orange)' }}>Live Tracking</span>
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 3 }}>Order #PCT-2847</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.01em', marginBottom: 10 }}>Dar es Salaam → Arusha</div>
                    <div style={{ height: 5, borderRadius: 3, background: '#F0F0F0', overflow: 'hidden', marginBottom: 6 }}>
                      <div style={{ height: '100%', width: '67%', borderRadius: 3, background: 'var(--orange)' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 10, color: 'var(--muted)' }}>67% complete</span>
                      <span style={{ fontSize: 10, color: 'var(--orange)', fontWeight: 600 }}>Est. 4:30 PM</span>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                    {[
                      { label: 'Active Orders', val: '12',  color: 'var(--orange)' },
                      { label: 'Delivered',     val: '348', color: '#2E7D32' },
                      { label: 'In Transit',    val: '8',   color: '#1565C0' },
                      { label: 'Pending',       val: '4',   color: '#E65100' },
                    ].map(s => (
                      <div key={s.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 12px' }}>
                        <div style={{ fontSize: 9, color: 'var(--muted)', fontWeight: 500, marginBottom: 4 }}>{s.label}</div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: s.color, letterSpacing: '-0.02em' }}>{s.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Map preview */}
                  <div style={{ borderRadius: 12, overflow: 'hidden', height: 100, background: 'linear-gradient(135deg, #E8F4FD, #EDF7EE)', position: 'relative', border: '1px solid var(--border)' }}>
                    <svg width="100%" height="100%" viewBox="0 0 260 100">
                      {/* Grid */}
                      {[20,40,60,80].map(y => <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>)}
                      {[50,100,150,200].map(x => <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>)}
                      {/* Route */}
                      <path d="M20,78 C60,75 90,40 140,42 C190,44 220,65 245,30" stroke="var(--orange)" strokeWidth="2.5" fill="none" strokeDasharray="5,3" opacity="0.7"/>
                      {/* Origin */}
                      <circle cx="20" cy="78" r="5" fill="var(--orange)" />
                      <circle cx="20" cy="78" r="9" fill="var(--orange)" opacity="0.2" />
                      {/* Courier */}
                      <circle cx="140" cy="42" r="6" fill="#fff" stroke="var(--orange)" strokeWidth="2"/>
                      {/* Dest */}
                      <circle cx="245" cy="30" r="5" fill="#2E7D32" />
                      <circle cx="245" cy="30" r="9" fill="#2E7D32" opacity="0.2" />
                    </svg>
                    <div style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 9, color: 'var(--muted)', fontWeight: 500 }}>Live Map View</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div style={{
                position: 'absolute', left: -64, top: '22%',
                background: '#fff', border: '1px solid var(--border)', borderRadius: 12,
                padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--orange)', letterSpacing: '-0.02em' }}>+348</div>
                <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 500 }}>Deliveries</div>
              </div>

              <div style={{
                position: 'absolute', right: -52, bottom: '30%',
                background: '#fff', border: '1px solid var(--border)', borderRadius: 12,
                padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#2E7D32', letterSpacing: '-0.02em' }}>99.5%</div>
                <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 500 }}>Success rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-phone { display: none; }
        }
      `}</style>
    </section>
  );
}
