'use client';

import Link from 'next/link';
import { Mail, Globe, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'How it Works', href: '/how-it-works' },
      { label: 'Download App', href: '/download' },
      { label: 'API Docs', href: '/api-docs' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Businesses', href: '/solutions/businesses' },
      { label: 'For Couriers', href: '/solutions/couriers' },
      { label: 'For Logistics', href: '/solutions/logistics' },
      { label: 'For End Users', href: '/solutions/users' },
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'Partnerships', href: '/partnerships' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
      { label: 'Investors', href: '/investors' },
      { label: 'Contact', href: '/contact' },
      { label: 'Support', href: '/support' },
    ],
  },
];

const socials = [
  { label: 'X (Twitter)', href: 'https://x.com/pacelio', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/pacelio', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/pacelio', icon: Instagram },
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
              <img src="/logo.png" alt="Pacelio" className="w-9 h-9 object-contain flex-shrink-0" />
              <span className="text-xl font-bold text-white tracking-tight">Pacelio</span>
            </div>

            <p className="text-sm leading-relaxed text-[var(--muted)] max-w-sm mb-8">
              East Africa's premier courier and logistics platform — connecting businesses, agents, and customers through smarter delivery technology.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: Mail, label: 'pacelio@incpritech.com', href: 'mailto:pacelio@incpritech.com' },
                { icon: Phone, label: '+255 792 017 591', href: 'tel:+255792017591' },
                { icon: MapPin, label: 'Pacelio HQ, Mbeya, Tanzania', href: '/contact' },
              ].map(c => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-white transition-colors no-underline group"
                >
                  <c.icon className="w-4 h-4 group-hover:text-[var(--orange)] transition-colors" />
                  {c.label}
                </Link>
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
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">{group.title}</p>
              <ul className="flex flex-col gap-4 p-0 list-none">
                {group.links.map(l => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--muted)] hover:text-white transition-colors no-underline flex items-center group"
                    >
                      {l.label}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 hidden" />
                    </Link>
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
            © {year} <span className="text-[var(--muted)] font-semibold">Pacelio Inc.</span> All rights reserved. Registered in Tanzania.
          </p>

          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <Link
                key={l}
                href={`/${l.toLowerCase()}`}
                className="text-xs text-[var(--muted)]/60 hover:text-white transition-colors no-underline"
              >
                {l}
              </Link>
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
