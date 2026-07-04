'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export default function EastAfricaLogisticsPost() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto container-px">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] no-underline mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            Industry Trends
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">East Africa's logistics boom: Why 2026 is a turning point</h1>

          <div className="flex items-center gap-6 text-sm text-[var(--muted)] mb-12 pb-8 border-b border-[var(--border)]">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Peter Ntonda</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> March 28, 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min read</span>
          </div>

          <div className="prose text-[var(--body)]">
            <p className="text-xl leading-relaxed text-[var(--foreground)] font-medium">
              The East African Community is experiencing a logistics revolution. With cross-border e-commerce expected to triple by 2027, platforms like Pacelio are building the infrastructure to keep pace.
            </p>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">A region on the move</h2>
            <p>
              The numbers are staggering. Intra-East African trade has grown 40% since 2020, driven by the African Continental Free Trade Area and harmonised customs procedures. Yet logistics infrastructure still lags — only 25% of roads in the region are paved, and last-mile delivery costs remain the highest barrier for small businesses.
            </p>
            <p>
              This gap is exactly where Pacelio operates. By combining digital infrastructure with a network of local couriers, we bridge the final kilometre that traditional logistics providers cannot reach profitably.
            </p>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">Key trends shaping 2026</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mobile-first commerce</strong> — over 80% of transactions in Tanzania originate on mobile. Delivery platforms must be mobile-native end to end.</li>
              <li><strong>Urbanisation acceleration</strong> — Mbeya, Arusha, and Mwanza are growing at 5% annually, creating dense delivery clusters that were nonexistent a decade ago.</li>
              <li><strong>Cash-on-delivery dominance</strong> — digital payments are rising, but COD still accounts for 60% of deliveries. Platforms need to support both seamlessly.</li>
              <li><strong>Cross-border SME growth</strong> — small traders moving goods between Tanzania, Kenya, and Uganda need affordable, trackable cross-border shipping.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">Pacelio's role</h2>
            <p>
              From our base in Mbeya, we are building for the entire region. Our platform handles the full delivery lifecycle — booking, tracking, payments, and proof of delivery — so businesses can focus on serving their customers. With real-time GPS tracking, automated dispatch, and a growing courier network, Pacelio is positioned to become the backbone of East African logistics.
            </p>

            <p className="text-[var(--foreground)] font-medium">
              The logistics boom is here. The question isn't whether East Africa will modernise its delivery infrastructure — it's who will build it first. We believe the answer is local.
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
