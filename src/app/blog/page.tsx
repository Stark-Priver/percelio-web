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
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Pacelio Blog</h1>
          <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl">
            Latest news, industry insights, and stories from the heart of East Africa's logistics revolution.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                slug: 'ai-last-mile-delivery',
                category: 'Logistics Technology',
                title: 'How AI is optimizing last-mile delivery in Mbeya',
                excerpt: 'Discover how Pacelio\'s new routing algorithm is reducing delivery times by 30% across the city\'s most congested routes.',
              },
              {
                slug: 'east-africa-logistics-boom',
                category: 'Industry Trends',
                title: 'East Africa\'s logistics boom: Why 2025 is a turning point',
                excerpt: 'Cross-border trade is surging. Learn how Pacelio is positioned to connect Tanzania, Kenya, Uganda, and Rwanda like never before.',
              },
              {
                slug: 'pacelio-launch-mbeya',
                category: 'Company News',
                title: 'Pacelio launches in Mbeya: A new chapter for local delivery',
                excerpt: 'From student project to city-wide platform — the story of how two MUST graduates are transforming logistics in the Southern Highlands.',
              },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group no-underline">
                <div className="aspect-[16/10] rounded-3xl bg-gray-200 dark:bg-white/5 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--orange)]/20 to-transparent group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[var(--orange)] uppercase">{post.category}</span>
                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--orange)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)]">
                    Read Story <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
