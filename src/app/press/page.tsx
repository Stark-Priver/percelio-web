'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Radio, Download, ExternalLink } from 'lucide-react';

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Radio className="w-3.5 h-3.5" />
            Media
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Press Kit</h1>
          <p className="text-lg text-[var(--muted)] mb-12">
            Resources and brand assets for journalists and media partners.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-[var(--border)]">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Brand Identity</h3>
              <p className="text-[var(--muted)] mb-6 text-sm">Download our official logos, color palettes, and brand guidelines in various formats.</p>
              <button className="w-full py-4 rounded-2xl bg-[var(--orange)] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <Download className="w-4 h-4" /> Download Logos
              </button>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-[var(--border)]">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Executive Photos</h3>
              <p className="text-[var(--muted)] mb-6 text-sm">High-resolution headshots of the Percelio leadership team for publication.</p>
              <button className="w-full py-4 rounded-2xl bg-white dark:bg-white/10 border border-[var(--border)] text-[var(--foreground)] font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/15 transition-all">
                <Download className="w-4 h-4" /> View Gallery
              </button>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Recent Press Coverage</h3>
          <div className="space-y-6">
            {[
              { date: 'Oct 24, 2023', outlet: 'East Africa Tech Review', title: 'Percelio raises $5M to digitize Tanzanian logistics' },
              { date: 'Sep 12, 2023', outlet: 'Logistics Weekly', title: 'The future of last-mile delivery in developing markets' }
            ].map((news) => (
              <div key={news.title} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-[var(--orange)] uppercase tracking-wider">{news.date}</span>
                  <h4 className="font-bold text-[var(--foreground)] group-hover:text-[var(--orange)] transition-colors">{news.title}</h4>
                  <p className="text-xs text-[var(--muted)]">{news.outlet}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--muted)]" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
