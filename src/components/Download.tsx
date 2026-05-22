export default function Download() {
  return (
    <section id="download" className="section-pad" style={{ background: '#fff' }}>
      <div className="max-content container-px">
        <div style={{
          background: 'var(--bg-soft)',
          border: '1px solid var(--border)',
          borderRadius: 28,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: 0,
        }}>

          {/* Left — copy */}
          <div style={{ padding: 'clamp(36px, 5vw, 64px)', paddingRight: 40 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'var(--orange-light)', borderRadius: 100, padding: '5px 12px 5px 8px', marginBottom: 28,
            }}>
              <span>📱</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)' }}>iOS & Android — Free to download</span>
            </div>

            <h2 style={{ marginBottom: 18, lineHeight: 1.12 }}>
              Stay Updated.<br />
              Stay <span style={{ color: 'var(--orange)' }}>Ahead.</span>
            </h2>

            <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.65, marginBottom: 36, maxWidth: 420 }}>
              Download the Percelio app and manage every delivery — from booking to proof of delivery — right from your phone. Available in Swahili and English.
            </p>

            {/* Store buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              {[
                {
                  store: 'App Store',
                  sub: 'Download on the',
                  href: 'https://apps.apple.com',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  ),
                },
                {
                  store: 'Google Play',
                  sub: 'Get it on',
                  href: 'https://play.google.com',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76L14 12 3.18 23.76zm17.27-9.86l-2.88-1.65L14 12l3.57 3.57 2.88-1.65A2 2 0 0022 12a2 2 0 00-1.55-2.1zM3.96.62l10.6 10.6L11.8 14l-7.84-7.84A2 2 0 012 4.3V2A2 2 0 013.96.62zm10.6 12.16L3.96 23.38A2 2 0 012 21.7v-1.68l7.84-7.84 2.72 2.6z"/>
                    </svg>
                  ),
                },
              ].map(s => (
                <a
                  key={s.store}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: 'var(--dark)', color: '#fff',
                    padding: '12px 20px', borderRadius: 12,
                    textDecoration: 'none', transition: 'all 0.2s ease',
                    border: '1px solid transparent',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#333')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--dark)')}
                >
                  {s.icon}
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{s.sub}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2 }}>{s.store}</div>
                  </div>
                </a>
              ))}
            </div>

            <p style={{ fontSize: 13, color: 'var(--muted)' }}>
              Or access the web dashboard at{' '}
              <a href="https://app.percelio.com" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 600 }}>
                app.percelio.com
              </a>
            </p>
          </div>

          {/* Right — phone mockups */}
          <div style={{
            background: 'linear-gradient(135deg, var(--orange-tint) 0%, #fff 60%)',
            padding: '40px 32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            minHeight: 420,
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative circles */}
            <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', border: '1px solid var(--orange-tint)', opacity: 0.6 }} />
            <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', border: '1px solid var(--orange)', opacity: 0.15 }} />

            {/* Back phone */}
            <div style={{ width: 180, marginRight: -32, marginBottom: 32, position: 'relative', zIndex: 1 }}>
              <div className="phone-frame" style={{ background: 'var(--dark)' }}>
                <div style={{ height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: 52, height: 14, borderRadius: 7, background: '#000' }} />
                </div>
                <div style={{ padding: '14px 14px 20px', background: '#1A1A2E' }}>
                  <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Notifications</p>
                  {[
                    { icon: '✅', msg: 'Parcel delivered!', color: '#22C55E' },
                    { icon: '🚴', msg: 'Courier en route',  color: '#E55934' },
                    { icon: '💰', msg: 'Payment received',  color: '#F59E0B' },
                  ].map((n, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '8px 10px', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 12 }}>{n.icon}</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', flex: 1 }}>{n.msg}</span>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: n.color, flexShrink: 0 }} />
                    </div>
                  ))}
                  <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 10, padding: '10px 12px', marginTop: 8 }}>
                    <p style={{ fontSize: 9, color: '#4ADE80', fontWeight: 600, marginBottom: 3 }}>Today's Earnings</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>TZS 45,000</p>
                    <p style={{ fontSize: 9, color: '#4ADE80' }}>+18% vs yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Front phone */}
            <div style={{ width: 200, position: 'relative', zIndex: 2 }} className="float">
              <div className="phone-frame" style={{ background: '#fff' }}>
                <div style={{ height: 24, background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ width: 64, height: 16, borderRadius: 8, background: '#1A1A1A' }} />
                </div>
                <div style={{ padding: '14px 14px 20px', background: '#F8F7F5' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <div>
                      <p style={{ fontSize: 9, color: 'var(--muted)' }}>Good morning 👋</p>
                      <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--dark)' }}>Amani Business</p>
                    </div>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>A</div>
                  </div>
                  {/* Map */}
                  <div style={{ borderRadius: 12, overflow: 'hidden', height: 90, background: 'linear-gradient(135deg, #EBF5FF, #EDF7EE)', marginBottom: 10, border: '1px solid var(--border)', position: 'relative' }}>
                    <svg width="100%" height="100%" viewBox="0 0 180 90">
                      <path d="M10,72 C35,65 60,38 90,40 C120,42 145,60 170,28" stroke="#E55934" strokeWidth="2.5" fill="none" strokeDasharray="5,3" opacity="0.8"/>
                      <circle cx="10" cy="72" r="5" fill="#E55934"/>
                      <circle cx="10" cy="72" r="10" fill="#E55934" opacity="0.15"/>
                      <circle cx="90" cy="40" r="5" fill="#fff" stroke="#E55934" strokeWidth="2"/>
                      <circle cx="170" cy="28" r="5" fill="#2E7D32"/>
                    </svg>
                    <p style={{ position: 'absolute', bottom: 4, left: 8, fontSize: 8, color: 'var(--muted)' }}>Live tracking</p>
                  </div>
                  {/* Status */}
                  <div style={{ background: '#fff', borderRadius: 10, padding: '10px 12px', border: '1px solid var(--border)', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--orange)', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }} />
                      <span style={{ fontSize: 9, color: 'var(--orange)', fontWeight: 600 }}>Order #PCT-2847</span>
                    </div>
                    <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>Dar es Salaam → Arusha</p>
                    <div style={{ height: 4, borderRadius: 2, background: '#F0F0F0', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '67%', borderRadius: 2, background: 'var(--orange)' }} />
                    </div>
                  </div>
                  {/* Quick stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[{ l: 'Active', v: '12' }, { l: 'Delivered', v: '348' }].map(s => (
                      <div key={s.l} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px' }}>
                        <p style={{ fontSize: 8, color: 'var(--muted)', marginBottom: 2 }}>{s.l}</p>
                        <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>{s.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:800px){
        .download-grid{grid-template-columns:1fr!important;}
      }`}</style>
    </section>
  );
}
