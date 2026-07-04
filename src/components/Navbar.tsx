'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',          href: '/' },
  { label: 'Features',      href: '/features' },
  { label: 'How it Works',  href: '/how-it-works' },
  { label: 'About',         href: '/about' },
  { label: 'Contact',       href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[var(--bg)]/80 backdrop-blur-md border-[var(--border)] py-3'
          : 'bg-[var(--bg)] border-transparent py-5'
      }`}
    >
      <div className="max-content container-px flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <img src="/logo.png" alt="Pacelio" className="w-9 h-9 object-contain flex-shrink-0" />
          <span className="text-xl font-bold text-[var(--dark)] tracking-tight">
            Pacelio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all no-underline ${
                  isActive
                    ? 'text-[var(--orange)] bg-[var(--orange-light)]'
                    : 'text-[var(--body)] hover:text-[var(--dark)] hover:bg-[var(--bg-soft)]'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA group */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <div className="h-4 w-px bg-[var(--border)] mx-1" />
          <Link href="/download" className="text-sm font-medium text-[var(--body)] px-4 py-2 hover:text-[var(--dark)] transition-colors no-underline">
            Sign in
          </Link>
          <Link href="/download" className="btn btn-primary btn-sm">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[var(--dark)]"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-6 py-8 absolute top-full left-0 right-0 shadow-xl reveal">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(l => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium py-4 border-b border-[var(--border-light)] no-underline transition-colors ${
                    isActive ? 'text-[var(--orange)]' : 'text-[var(--body)] hover:text-[var(--orange)]'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <Link href="/download" onClick={() => setOpen(false)} className="btn btn-ghost w-full justify-center">Sign in</Link>
            <Link href="/download" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
