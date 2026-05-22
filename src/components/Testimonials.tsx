export default function Testimonials() {
  const testimonials = [
    {
      quote: "Percelio transformed how we handle deliveries. Our customers now track orders in real time and we've reduced 'where is my order' calls by 80%. It's built for how business actually works in Tanzania.",
      name: "Amina Saleh",
      title: "Operations Manager",
      company: "Saleh Trading Co., Dar es Salaam",
      initials: "AS",
      stars: 5,
    },
    {
      quote: "As a courier I was sceptical. But the route planning actually works, earnings are deposited same day, and customers can see me coming. My daily deliveries went from 8 to 14. Game changer.",
      name: "David Mwangi",
      title: "Independent Courier Agent",
      company: "Arusha, Tanzania",
      initials: "DM",
      stars: 5,
    },
    {
      quote: "We integrated Percelio into our fleet operations within a week. The SLA tracking alone saved us three client disputes in the first month. The analytics dashboard is genuinely impressive.",
      name: "Fatuma Osei",
      title: "CEO",
      company: "Osei Logistics, Mwanza",
      initials: "FO",
      stars: 5,
    },
  ];

  return (
    <section className="section-pad" style={{ background: '#2B2B2B', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(229,89,52,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(229,89,52,0.04) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="max-content container-px" style={{ position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 14 }}>Real Stories</div>
          <h2 style={{ color: '#fff', marginBottom: 16 }}>
            Trusted Across{' '}
            <span style={{ color: 'var(--orange)' }}>East Africa</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
            From small traders to large logistics fleets — Percelio delivers results that matter.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 56 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: 'var(--orange-tint)', /* #FDEAE0 — peach tint matching design */
              borderRadius: 20,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Quote mark */}
              <div style={{ fontSize: 64, lineHeight: 0.8, color: 'var(--orange)', opacity: 0.15, fontFamily: 'Georgia, serif', marginBottom: 16, userSelect: 'none' }}>&ldquo;</div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {Array(t.stars).fill(0).map((_, j) => (
                  <svg key={j} width="15" height="15" viewBox="0 0 15 15" fill="var(--orange)">
                    <path d="M7.5 1.2l1.67 3.38 3.73.54-2.7 2.63.64 3.72L7.5 9.8l-3.34 1.69.64-3.72-2.7-2.63 3.73-.54L7.5 1.2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontSize: 14, color: '#2B2B2B', lineHeight: 1.72, marginBottom: 24, flex: 1 }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(229,89,52,0.15)' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--orange)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 13, fontWeight: 700, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A1A', letterSpacing: '-0.01em' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 1 }}>{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 16,
          padding: '28px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          textAlign: 'center',
        }}>
          {[
            { val: '3,000+', label: 'Active users' },
            { val: '98%',    label: 'Satisfaction rate' },
            { val: '5 Cities', label: 'In Tanzania' },
            { val: '4.8 ★',  label: 'App store rating' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: 6 }}>{s.val}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:860px){
        .testimonial-grid{grid-template-columns:1fr!important;}
        .social-proof-grid{grid-template-columns:1fr 1fr!important;}
      }`}</style>
    </section>
  );
}
