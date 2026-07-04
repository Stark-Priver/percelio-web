'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-[var(--bg-soft)]">
      <div className="max-content container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left side: Content */}
          <div className="reveal">
            <div className="overline mb-4">Contact Us</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--dark)] tracking-tighter">
              Let's Start a <span className="text-[var(--orange)]">Conversation.</span>
            </h2>
            <p className="text-lg text-[var(--body)] mb-10 max-w-md">
              Have questions about our platform or want to partner with us? Our team is here to help you optimize your logistics.
            </p>

            <div className="flex flex-col gap-8">
              {[
                { icon: Mail, title: 'Email Us', value: 'pacelio@incpritech.com', sub: 'We reply within 24 hours' },
                { icon: Phone, title: 'Call Us', value: '+255 792 017 591', sub: 'Mon-Fri from 8am to 5pm' },
                { icon: MapPin, title: 'Visit Us', value: 'Pacelio HQ, Mbeya, Tanzania', sub: 'Tanzania' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="icon-wrap icon-wrap-orange">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--dark)] mb-1">{item.title}</p>
                    <p className="text-base font-semibold text-[var(--body)]">{item.value}</p>
                    <p className="text-xs text-[var(--muted)] mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Form */}
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-8 md:p-10 shadow-lifted reveal reveal-delay-1">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-[var(--dark)] uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--orange)]/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-[var(--dark)] uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--orange)]/20 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold text-[var(--dark)] uppercase tracking-wider">Subject</label>
                <select
                  id="subject"
                  className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--orange)]/20 transition-all appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Business Partnership</option>
                  <option>Support Request</option>
                  <option>Media Inquiry</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-[var(--dark)] uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--orange)]/20 transition-all resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-full justify-center mt-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
