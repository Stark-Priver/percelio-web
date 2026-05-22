'use client';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    sub: 'Perfect for small businesses',
    monthlyTZS: 0,
    annualTZS: 0,
    isFree: true,
    highlight: false,
    features: [
      'Up to 50 shipments per month',
      'Basic real-time tracking',
      'Mobile app access',
      'Email notifications',
      'Standard support',
      'Basic analytics',
    ],
    cta: 'Start for Free',
    ctaHref: '#download',
  },
  {
    name: 'Professional',
    sub: 'For growing businesses',
    monthlyTZS: 89000,
    annualTZS: 69000,
    isFree: false,
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Unlimited shipments',
      'Live GPS map tracking',
      'Priority courier matching',
      'Bulk CSV order import',
      'Advanced analytics & reports',
      'REST API access',
      'Priority 24/7 support',
      'Custom SMS notifications',
      'Invoice & receipt automation',
    ],
    cta: 'Start 14-Day Trial',
    ctaHref: '#download',
  },
  {
    name: 'Enterprise',
    sub: 'For logistics companies',
    monthlyTZS: null,
    annualTZS: null,
    isFree: false,
    highlight: false,
    features: [
      'Everything in Professional',
      'Full fleet management suite',
      'Dedicated account manager',
      'SLA guarantees & monitoring',
      'Custom API integrations',
      'White-label options',
      'Multi-country & multi-city',
      'On-site training & onboarding',
    ],
    cta: 'Contact Sales',
    ctaHref: 'mailto:sales@percelio.com',
  },
];

function formatTZS(n: number) {
  if (n === 0) return 'Free';
  return `TZS ${(n / 1000).toFixed(0)}K`;
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section-pad" style={{ background: 'var(--bg-soft)' }}>
      <div className="max-content container-px">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="overline" style={{ marginBottom: 14 }}>Transparent Pricing</div>
          <h2 style={{ marginBottom: 18 }}>
            Choose a Plan That Grows<br />
            <span style={{ color: 'var(--orange)' }}>With Your Business</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.65 }}>
            Start free. Scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: 100,
            padding: 4,
            gap: 4,
          }}>
            {['Monthly', 'Annual'].map((opt, i) => {
              const isAnnual = i === 1;
              const active = annual === isAnnual;
              return (
                <button
                  key={opt}
                  onClick={() => setAnnual(isAnnual)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '8px 18px', borderRadius: 100, border: 'none',
                    fontFamily: 'var(--font)', fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s ease',
                    background: active ? 'var(--dark)' : 'transparent',
                    color: active ? '#fff' : 'var(--body)',
                  }}
                >
                  {opt}
                  {isAnnual && (
                    <span style={{
                      fontSize: 10, fontWeight: 700,
                      background: active ? 'rgba(255,255,255,0.2)' : 'var(--orange-light)',
                      color: active ? '#fff' : 'var(--orange)',
                      padding: '1px 6px', borderRadius: 100,
                    }}>−22%</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }}>
          {plans.map((p, i) => {
            const price = annual ? p.annualTZS : p.monthlyTZS;
            const isHighlight = p.highlight;

            return (
              <div
                key={i}
                style={{
                  background: isHighlight ? 'var(--orange)' : '#fff',
                  border: `1px solid ${isHighlight ? 'var(--orange)' : 'var(--border)'}`,
                  borderRadius: 20,
                  padding: 28,
                  position: 'relative',
                  transform: isHighlight ? 'scale(1.03)' : 'none',
                  boxShadow: isHighlight ? '0 16px 48px rgba(229,89,52,0.25)' : '0 2px 12px rgba(0,0,0,0.05)',
                }}
              >
                {p.badge && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--dark)', color: '#fff',
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
                    padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap',
                  }}>
                    {p.badge}
                  </div>
                )}

                {/* Plan name */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: isHighlight ? 'rgba(255,255,255,0.7)' : 'var(--muted)', marginBottom: 6 }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: 14, color: isHighlight ? 'rgba(255,255,255,0.85)' : 'var(--body)' }}>{p.sub}</div>
                </div>

                {/* Price */}
                <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${isHighlight ? 'rgba(255,255,255,0.2)' : 'var(--border)'}` }}>
                  {p.monthlyTZS === null ? (
                    <>
                      <div style={{ fontSize: 36, fontWeight: 700, color: isHighlight ? '#fff' : 'var(--dark)', letterSpacing: '-0.03em', lineHeight: 1 }}>Custom</div>
                      <div style={{ fontSize: 13, color: isHighlight ? 'rgba(255,255,255,0.7)' : 'var(--muted)', marginTop: 6 }}>Tailored to your fleet size</div>
                    </>
                  ) : p.isFree ? (
                    <>
                      <div style={{ fontSize: 36, fontWeight: 700, color: isHighlight ? '#fff' : 'var(--dark)', letterSpacing: '-0.03em', lineHeight: 1 }}>Free</div>
                      <div style={{ fontSize: 13, color: isHighlight ? 'rgba(255,255,255,0.7)' : 'var(--muted)', marginTop: 6 }}>No credit card required</div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: 36, fontWeight: 700, color: isHighlight ? '#fff' : 'var(--dark)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                        {formatTZS(price!)}
                        <span style={{ fontSize: 14, fontWeight: 500, color: isHighlight ? 'rgba(255,255,255,0.6)' : 'var(--muted)' }}>/mo</span>
                      </div>
                      {annual && (
                        <div style={{ fontSize: 12, color: isHighlight ? 'rgba(255,255,255,0.7)' : '#2E7D32', marginTop: 4, fontWeight: 600 }}>Billed annually — you save 22%</div>
                      )}
                    </>
                  )}
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '6px 0', fontSize: 13, color: isHighlight ? 'rgba(255,255,255,0.9)' : 'var(--body)' }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                        background: isHighlight ? 'rgba(255,255,255,0.2)' : 'var(--orange-light)',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke={isHighlight ? '#fff' : 'var(--orange)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1.5 4l2 2 3-3"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={p.ctaHref}
                  style={{
                    display: 'block', textAlign: 'center',
                    fontFamily: 'var(--font)', fontSize: 14, fontWeight: 700,
                    padding: '13px 24px', borderRadius: 10, textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    background: isHighlight ? '#fff' : p.name === 'Enterprise' ? 'var(--dark)' : 'var(--dark)',
                    color: isHighlight ? 'var(--orange)' : '#fff',
                    border: 'none',
                  }}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', marginTop: 28 }}>
          All prices in Tanzanian Shilling (TZS). VAT may apply. No credit card required for Starter plan.
        </p>
      </div>

      <style>{`@media(max-width:900px){
        .pricing-grid{grid-template-columns:1fr!important;}
      }`}</style>
    </section>
  );
}
