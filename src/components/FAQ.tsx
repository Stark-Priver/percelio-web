'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle, Mail, MessageSquare } from 'lucide-react';

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
    <section id="about" className="section-pad bg-[var(--bg)]">
      <div className="max-narrow container-px">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="overline mb-4">Support</div>
          <h2 className="mb-2 text-[var(--dark)] font-bold">Common <span className="text-[var(--orange)]">Questions</span></h2>
          <div className="w-12 h-1 bg-[var(--orange)] mx-auto rounded-full mt-6" />
        </div>

        {/* Accordion */}
        <div className="space-y-3 reveal-delay-1">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[var(--orange)] bg-[var(--orange-light)] shadow-sm'
                    : 'border-[var(--border)] bg-[var(--bg)] hover:border-[var(--muted)]/30'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-100 flex items-center justify-between gap-6 p-6 border-none bg-transparent cursor-pointer text-left w-full group"
                >
                  <span className={`text-base font-bold leading-relaxed transition-colors ${isOpen ? 'text-[var(--dark)]' : 'text-[var(--body)] group-hover:text-[var(--dark)]'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'bg-[var(--orange)] text-white rotate-180'
                      : 'bg-[var(--bg-soft)] text-[var(--muted)] group-hover:bg-[var(--border)]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-[var(--body)] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center bg-[var(--bg-soft)] border border-[var(--border)] rounded-3xl p-10 md:p-12 reveal-delay-2">
          <div className="w-12 h-12 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[var(--dark)] mb-4 tracking-tight">Still have questions?</h3>
          <p className="text-sm text-[var(--body)] mb-10 max-w-sm mx-auto leading-relaxed">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@percelio.com" className="btn btn-primary btn-md">
              <Mail className="w-4 h-4" />
              Email Us
            </a>
            <a
              href="https://wa.me/255700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-md bg-[var(--bg)]"
            >
              <MessageSquare className="w-4 h-4 text-green-500" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
