'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Newspaper, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-6xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Newspaper className="w-3.5 h-3.5" />
            Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Percelio Blog</h1>
          <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl">
            Latest news, industry insights, and stories from the heart of East Africa's logistics revolution.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-3xl bg-gray-200 dark:bg-white/5 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--orange)]/20 to-transparent group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[var(--orange)] uppercase">Logistics Technology</span>
                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--orange)] transition-colors">
                    How AI is optimizing last-mile delivery in Dar es Salaam
                  </h3>
                  <p className="text-[var(--muted)] text-sm line-clamp-2">
                    Discover how Percelio's new routing algorithm is reducing delivery times by 30% across the city's most congested routes.
                  </p>
                  <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)] no-underline">
                    Read Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
