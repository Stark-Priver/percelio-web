'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Which cities in Tanzania is Percelio available in?',
    a: 'Percelio is currently active in Dar es Salaam, Arusha, Mwanza, Dodoma, and Mbeya. We are expanding to more Tanzanian cities every quarter, with Kenya, Uganda, and Rwanda planned for 2025–2026.',
  },
  {
    q: 'How does courier matching work?',
    a: 'When a business books a shipment, Percelio automatically matches it to the nearest available, highest-rated courier agent. Couriers receive instant push notifications and can accept or decline jobs with one tap — no phone calls needed.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We support M-Pesa, Tigo Pesa, Airtel Money, and direct bank transfer. Business accounts can set up monthly invoicing. Courier agent payouts are processed daily to mobile money accounts.',
  },
  {
    q: 'Is my data secure? Where is it stored?',
    a: "Percelio uses enterprise-grade infrastructure with all data encrypted in transit and at rest. We comply with Tanzania's Electronic and Postal Communications Act. Your data is never sold to third parties.",
  },
  {
    q: 'Can I integrate Percelio with my existing systems?',
    a: 'Yes. Professional and Enterprise plans include REST API access for integrating with ERPs, e-commerce platforms, and custom internal systems. We have ready-made plugins for WooCommerce and Shopify.',
  },
  {
    q: 'What happens if a parcel is lost or damaged?',
    a: 'All shipments on Percelio include standard parcel protection. Enterprise plans include enhanced coverage options. Our support team responds within 2 hours and all claims are resolved within 3 business days.',
  },
  {
    q: 'How do I become a courier agent?',
    a: 'Download the Percelio app, select "Courier Agent" on sign-up, upload your ID and vehicle details, and complete a brief orientation. Most agents are approved and earning within 48 hours.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="about" className="section-pad" style={{ background: '#fff' }}>
      <div className="max-narrow container-px">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="overline" style={{ marginBottom: 14 }}>FAQ</div>
          <h2>Common <span style={{ color: 'var(--orange)' }}>Questions</span></h2>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  border: `1px solid ${isOpen ? 'var(--orange)' : 'var(--border)'}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                  background: isOpen ? 'var(--orange-light)' : '#fff',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 16, padding: '18px 22px', border: 'none', background: 'transparent',
                    cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font)',
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)', lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    background: isOpen ? 'var(--orange)' : 'var(--bg-soft)',
                    border: `1px solid ${isOpen ? 'var(--orange)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      stroke={isOpen ? '#fff' : 'var(--body)'} strokeWidth="2" strokeLinecap="round">
                      {isOpen
                        ? <path d="M2 6h8"/>
                        : <path d="M6 2v8M2 6h8"/>}
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 22px 20px' }}>
                    <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div style={{
          marginTop: 48, textAlign: 'center',
          background: 'var(--bg-soft)', border: '1px solid var(--border)',
          borderRadius: 20, padding: '36px 32px',
        }}>
          <p style={{ fontSize: 16, color: 'var(--body)', marginBottom: 20 }}>
            Still have questions? Our team is ready to help.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a href="mailto:hello@percelio.com" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="2" y="4" width="12" height="9" rx="2"/>
                <path d="M2 4l6 5 6-5"/>
              </svg>
              Email Us
            </a>
            <a
              href="https://wa.me/255700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
