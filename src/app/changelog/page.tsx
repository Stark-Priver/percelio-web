'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { History, Zap } from 'lucide-react';

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <History className="w-3.5 h-3.5" />
            Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Changelog</h1>
          <p className="text-lg text-[var(--muted)] mb-12">
            The latest updates, improvements, and fixes for the Percelio platform.
          </p>

          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-[var(--border)]">
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-[var(--orange)]" />
              <div className="mb-2">
                <span className="text-sm font-bold text-[var(--orange)]">January 2024</span>
                <h3 className="text-xl font-bold text-[var(--foreground)]">V2.0 — The New Standard</h3>
              </div>
              <ul className="space-y-4 text-[var(--muted)]">
                <li className="flex gap-3"><Zap className="w-5 h-5 text-yellow-500 flex-shrink-0" /> Full redesign of the courier mobile app for better battery efficiency.</li>
                <li className="flex gap-3"><Zap className="w-5 h-5 text-yellow-500 flex-shrink-0" /> New business dashboard with advanced cohort analytics.</li>
                <li className="flex gap-3"><Zap className="w-5 h-5 text-yellow-500 flex-shrink-0" /> Enhanced real-time tracking with sub-second latency.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
