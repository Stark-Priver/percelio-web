'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle, Mail, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: 'Which cities in Tanzania is Pacelio available in?',
    a: 'Pacelio is currently active in Mbeya, Dar es Salaam, Arusha, Mwanza, and Dodoma. We are expanding to more Tanzanian cities every quarter, with Kenya, Uganda, and Rwanda planned for 2026.',
  },
  {
    q: 'How does courier matching work?',
    a: 'When a business books a shipment, Pacelio automatically matches it to the nearest available, highest-rated courier agent. Couriers receive instant push notifications and can accept or decline jobs with one tap — no phone calls needed.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We support M-Pesa, Tigo Pesa, Airtel Money, and direct bank transfer. Business accounts can set up monthly invoicing. Courier agent payouts are processed daily to mobile money accounts.',
  },
  {
    q: 'Is my data secure? Where is it stored?',
    a: "Pacelio uses enterprise-grade infrastructure with all data encrypted in transit and at rest. We comply with Tanzania's Electronic and Postal Communications Act. Your data is never sold to third parties.",
  },
  {
    q: 'Can I integrate Pacelio with my existing systems?',
    a: 'Yes. Professional and Enterprise plans include REST API access for integrating with ERPs, e-commerce platforms, and custom internal systems. We have ready-made plugins for WooCommerce and Shopify.',
  },
  {
    q: 'What happens if a parcel is lost or damaged?',
    a: 'All shipments on Pacelio include standard parcel protection. Enterprise plans include enhanced coverage options. Our support team responds within 2 hours and all claims are resolved within 3 business days.',
  },
  {
    q: 'How do I become a courier agent?',
    a: 'Download the Pacelio app, select "Courier Agent" on sign-up, upload your ID and vehicle details, and complete a brief orientation. Most agents are approved and earning within 48 hours.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="about" className="section-pad bg-[var(--bg)]">
      <div className="max-narrow container-px">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <div className="overline mb-3">Support</div>
          <h2 className="text-[var(--dark)] font-bold">Common <span className="text-[var(--orange)]">Questions</span></h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2 reveal-delay-1">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-[var(--orange)] bg-[var(--orange-light)] shadow-sm'
                    : 'border-[var(--border)] bg-[var(--bg)] hover:border-[var(--muted)]/30'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex items-center justify-between gap-4 p-4 border-none bg-transparent cursor-pointer text-left w-full group"
                >
                  <span className={`text-sm font-semibold leading-snug transition-colors ${isOpen ? 'text-[var(--dark)]' : 'text-[var(--body)] group-hover:text-[var(--dark)]'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                    isOpen
                      ? 'bg-[var(--orange)] text-white rotate-180'
                      : 'bg-[var(--bg-soft)] text-[var(--muted)] group-hover:bg-[var(--border)]'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
                <div className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 pt-0">
                      <p className="text-sm text-[var(--body)] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-8 md:p-10 reveal-delay-2">
          <div className="w-10 h-10 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[var(--dark)] mb-2 tracking-tight">Still have questions?</h3>
          <p className="text-sm text-[var(--body)] mb-6 max-w-sm mx-auto leading-relaxed">
            Can't find the answer you're looking for? Chat with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:pacelio@incpritech.com" className="btn btn-primary btn-sm">
              <Mail className="w-3.5 h-3.5" />
              Email Us
            </a>
            <a
              href="https://wa.me/255792017591"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm bg-[var(--bg)]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-green-500" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
