'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowRight, Send } from 'lucide-react';
import Link from 'next/link';

const channels = [
  {
    icon: Mail,
    title: 'Email Us',
    desc: 'Our team responds within 24 hours.',
    action: 'pacelio@incpritech.com',
    href: 'mailto:pacelio@incpritech.com',
    bg: 'bg-[var(--orange-light)]',
    color: 'text-[var(--orange)]',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    desc: 'Available Mon-Fri, 8 AM - 6 PM EAT.',
    action: 'Start a conversation',
    href: '#',
    bg: 'bg-blue-500/10',
    color: 'text-blue-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    desc: 'Speak directly with our support team.',
    action: '+255 792 017 591',
    href: 'tel:+255792017591',
    bg: 'bg-green-500/10',
    color: 'text-green-500',
  },
];

const offices = [
  {
    city: 'Mbeya (HQ)',
    address: 'Pacelio Headquarters,\nMbeya, Tanzania',
    hours: 'Mon–Fri, 8 AM – 6 PM EAT',
    phone: '+255 792 017 591',
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
        <section className="pt-32 pb-16 container-px max-content">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
              <Mail className="w-3.5 h-3.5" />
              Contact
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              Get in <span className="text-[var(--orange)]">Touch</span>
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
              Have a question, feedback, or want to partner with us? We would love to hear from you.
              Reach out through any of the channels below.
            </p>
          </div>
        </section>

        {/* Contact Channels */}
        <section className="pb-16 container-px max-content">
          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((ch, i) => (
              <a
                key={i}
                href={ch.href}
                className={`${ch.bg} ${ch.color} rounded-2xl p-8 hover:shadow-lg transition-all group no-underline`}
                {...(ch.href === '#' ? { onClick: (e: React.MouseEvent) => e.preventDefault() } : {})}
              >
                <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ch.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{ch.title}</h3>
                <p className="text-sm opacity-80 mb-4">{ch.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold">
                  {ch.action} <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Form + Office */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Send us a <span className="text-[var(--orange)]">Message</span></h2>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--orange)] transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--orange)] transition-colors"
                    />
                  </div>
                  <select className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--orange)] transition-colors">
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Technical Support</option>
                    <option>Media & Press</option>
                    <option>Careers</option>
                  </select>
                  <textarea
                    rows={5}
                    placeholder="Your message"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--orange)] transition-colors resize-none"
                  />
                  <button type="submit" className="btn btn-primary px-8">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Office Info */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Our <span className="text-[var(--orange)]">Office</span></h2>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--foreground)] mb-1">{offices[0].city}</h3>
                      <p className="text-sm text-[var(--muted)] whitespace-pre-line">{offices[0].address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--foreground)] mb-1">Office Hours</h3>
                      <p className="text-sm text-[var(--muted)]">{offices[0].hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--foreground)] mb-1">Phone</h3>
                      <a href={`tel:${offices[0].phone.replace(/\s/g, '')}`} className="text-sm text-[var(--orange)] hover:underline no-underline">{offices[0].phone}</a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-soft)] h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[var(--muted)] mx-auto mb-2" />
                    <p className="text-sm text-[var(--muted)]">Pacelio HQ — Mbeya, Tanzania</p>
                    <p className="text-xs text-[var(--muted)]/60 mt-1">Interactive map loading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social CTA */}
        <section className="py-16 container-px max-content text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Follow <span className="text-[var(--orange)]">Pacelio</span></h2>
            <p className="text-[var(--muted)] mb-6">Stay updated with the latest news, features, and stories from our team.</p>
            <div className="flex justify-center gap-4">
              <a href="https://x.com/pacelio" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--orange)]/30 hover:text-[var(--orange)] transition-all no-underline font-medium text-sm">
                X (Twitter)
              </a>
              <a href="https://linkedin.com/company/pacelio" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--orange)]/30 hover:text-[var(--orange)] transition-all no-underline font-medium text-sm">
                LinkedIn
              </a>
              <a href="https://instagram.com/pacelio" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--orange)]/30 hover:text-[var(--orange)] transition-all no-underline font-medium text-sm">
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
