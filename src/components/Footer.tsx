'use client';

import Link from 'next/link';
import { Mail, Globe, Phone, Twitter, Linkedin, Instagram, Box, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'How it Works', 'Download App', 'API Docs', 'Changelog'],
  Solutions: ['For Businesses', 'For Couriers', 'For Logistics', 'For End Users', 'Enterprise', 'Partnerships'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact', 'Support'],
};

const socials = [
  { label: 'X (Twitter)', href: 'https://x.com/percelio', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/percelio', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/percelio', icon: Instagram },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-darker)] text-[var(--body)] border-t border-[var(--border)]">
      {/* Main footer */}
      <div className="max-content container-px pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[var(--orange)] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[var(--orange)]/20">
                <Box className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Percelio</span>
            </div>

            <p className="text-sm leading-relaxed text-[var(--muted)] max-w-sm mb-8">
              East Africa's premier courier and logistics platform — connecting businesses, agents, and customers through smarter delivery technology.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: Mail, label: 'hello@percelio.com', href: 'mailto:hello@percelio.com' },
                { icon: Globe, label: 'percelio.com', href: 'https://percelio.com' },
                { icon: Phone, label: '+255 700 000 000', href: 'tel:+255700000000' },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-white transition-colors no-underline group"
                >
                  <c.icon className="w-4 h-4 group-hover:text-[var(--orange)] transition-colors" />
                  {c.label}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--muted)] hover:bg-[var(--orange)] hover:text-white hover:border-[var(--orange)] transition-all duration-300"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">{title}</p>
              <ul className="flex flex-col gap-4 p-0 list-none">
                {links.map(l => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-[var(--muted)] hover:text-white transition-colors no-underline flex items-center group"
                    >
                      {l}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 hidden" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Expansion row */}
        <div className="py-6 border-y border-white/5 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Expanding to</span>
            {['Tanzania', 'Kenya', 'Uganda', 'Rwanda'].map(c => (
              <span
                key={c}
                className="text-xs text-[var(--muted)] bg-white/5 border border-white/10 rounded-full px-4 py-1.5 hover:border-[var(--orange)]/50 transition-colors cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs text-[var(--muted)]/60">
            © {year} <span className="text-[var(--muted)] font-semibold">Percelio Inc.</span> All rights reserved. Registered in Tanzania.
          </p>

          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <a
                key={l}
                href="#"
                className="text-xs text-[var(--muted)]/60 hover:text-white transition-colors no-underline"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Systems Live</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
