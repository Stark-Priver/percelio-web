'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Features',      href: '#features' },
  { label: 'How it Works',  href: '#how-it-works' },
  { label: 'Pricing',       href: '#pricing' },
  { label: 'About',         href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        borderBottom: `1px solid ${scrolled ? '#E8E8E8' : '#F0F0F0'}`,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-content container-px" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34,
            borderRadius: 9,
            background: 'var(--orange)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1.5L16 9L9 16.5L2 9L9 1.5Z" fill="rgba(255,255,255,0.25)" />
              <path d="M9 5L13 9L9 13L5 9L9 5Z" fill="#fff" />
            </svg>
          </div>
          <span style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 20, fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em' }}>
            Percelio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden md:flex">
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: 'var(--font)',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--body)',
                padding: '7px 14px',
                borderRadius: 8,
                transition: 'all 0.15s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--dark)'; (e.target as HTMLElement).style.background = 'var(--bg-soft)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--body)'; (e.target as HTMLElement).style.background = 'transparent'; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="hidden md:flex">
          <a href="/login" style={{ fontFamily: 'var(--font)', fontSize: 14, fontWeight: 500, color: 'var(--body)', padding: '7px 14px', textDecoration: 'none' }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--dark)'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--body)'}
          >
            Sign in
          </a>
          <a href="#download" className="btn btn-primary btn-sm">
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', padding: 8, border: 'none', background: 'transparent', cursor: 'pointer', flexDirection: 'column', gap: 5 }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--dark)', borderRadius: 2, transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--dark)', borderRadius: 2, transition: 'all 0.2s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--dark)', borderRadius: 2, transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid var(--border)', padding: '16px 24px 24px' }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', fontFamily: 'var(--font)', fontSize: 16, fontWeight: 500, color: 'var(--body)', padding: '12px 0', borderBottom: '1px solid var(--border-light)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="/login" className="btn btn-ghost" style={{ textAlign: 'center', justifyContent: 'center' }}>Sign in</a>
            <a href="#download" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>Get Started</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .mobile-menu-btn { display: flex !important; }
          .hidden.md\\:flex { display: none !important; }
        }
      `}</style>
    </header>
  );
}
