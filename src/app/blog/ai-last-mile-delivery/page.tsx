'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export default function AILastMilePost() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto container-px">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] no-underline mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            Logistics Technology
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">How AI is optimizing last-mile delivery in Mbeya</h1>

          <div className="flex items-center gap-6 text-sm text-[var(--muted)] mb-12 pb-8 border-b border-[var(--border)]">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Privatus Cosmas</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> April 15, 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 6 min read</span>
          </div>

          <div className="prose text-[var(--body)]">
            <p className="text-xl leading-relaxed text-[var(--foreground)] font-medium">
              Mbeya's hilly terrain and rapid urban growth make last-mile delivery a unique challenge. Pacelio's AI-powered routing engine is turning that challenge into a competitive advantage.
            </p>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">The problem with traditional routing</h2>
            <p>
              Most courier platforms rely on shortest-path algorithms that work well on flat, grid-based cities. Mbeya's topology — steep slopes, narrow feeders, and seasonal road closures — demands a more intelligent approach. Before Pacelio, couriers in the Southern Highlands wasted an average of 25 minutes per trip navigating around impassable roads or backtracking from dead ends.
            </p>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">How Pacelio's algorithm works</h2>
            <p>
              Our routing engine combines three data sources in real time:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Historical traffic patterns</strong> — learned from thousands of completed deliveries across Mbeya's wards</li>
              <li><strong>Live road conditions</strong> — crowdsourced from active courier GPS feeds every 30 seconds</li>
              <li><strong>Terrain weight maps</strong> — elevation and surface-type data that penalizes routes with steep gradients or unpaved sections</li>
            </ul>
            <p>
              The result is a dynamic route that adapts throughout the day. When heavy rain makes one road impassable, the system reroutes the entire batch in under two seconds.
            </p>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">Measurable impact</h2>
            <p>
              In the three months since the algorithm went live, Pacelio has recorded:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>30% reduction</strong> in average delivery time</li>
              <li><strong>22% more</strong> deliveries per courier per shift</li>
              <li><strong>18% decrease</strong> in fuel costs for the fleet</li>
              <li><strong>95% on-time delivery rate</strong> within Mbeya city centre</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">What's next</h2>
            <p>
              We are currently training the model on data from Dar es Salaam and Arusha ahead of our expansion. The goal is a self-improving logistics brain that gets smarter with every parcel delivered across East Africa.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--border)]">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--orange)] hover:text-[var(--orange)]/80 no-underline font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> View all articles
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
