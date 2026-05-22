'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BusinessesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5" />
            Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            For <span className="text-[var(--orange)]">Businesses</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-10 leading-relaxed">
            Empower your business with East Africa's most reliable delivery network. From local shops to large enterprises, Percelio provides the tools you need to reach your customers faster.
          </p>

          <div className="grid gap-4 mb-12">
            {[
              'Real-time order tracking for your customers',
              'Automated dispatch and route optimization',
              'Integrated payment and invoicing systems',
              'Dedicated business dashboard and analytics',
              'Custom delivery zones and pricing'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--orange)]" />
                <span className="text-[var(--foreground)] font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[var(--orange)] text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-[var(--orange)]/30 transition-all flex items-center gap-2 group no-underline"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-white/5 border border-[var(--border)] text-[var(--foreground)] rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all no-underline"
            >
              Speak to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
