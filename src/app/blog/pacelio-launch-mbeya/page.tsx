'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export default function PacelioLaunchPost() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto container-px">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] no-underline mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            Company News
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Pacelio launches in Mbeya: A new chapter for local delivery</h1>

          <div className="flex items-center gap-6 text-sm text-[var(--muted)] mb-12 pb-8 border-b border-[var(--border)]">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Pacelio Team</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> February 10, 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 4 min read</span>
          </div>

          <div className="prose text-[var(--body)]">
            <p className="text-xl leading-relaxed text-[var(--foreground)] font-medium">
              What started as a Final Year Diploma project at Mbeya University of Science and Technology has grown into a full-fledged delivery platform serving businesses and residents across the city.
            </p>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">From campus to city-wide</h2>
            <p>
              In early 2025, Privatus Cosmas and Peter Ntonda noticed something frustrating: ordering goods across Mbeya meant coordinating multiple phone calls, waiting hours for a rider, and never knowing exactly when — or if — your package would arrive. The Southern Highlands had no modern, trackable delivery service.
            </p>
            <p>
              They built Pacelio as their diploma project, initially planning a simple proof of concept. But when local businesses heard about the idea, demand was immediate. A restaurant in Iyunga wanted in. A boutique in Soweto. A hardware store in Mabatini. By graduation, they had 15 businesses on a waitlist.
            </p>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">The launch</h2>
            <p>
              Pacelio officially launched in Mbeya on February 10, 2026, with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>50+ couriers</strong> covering all 20 wards of Mbeya city</li>
              <li><strong>120 partner businesses</strong> across retail, food, pharmaceuticals, and logistics</li>
              <li><strong>Real-time tracking</strong> for every delivery</li>
              <li><strong>In-app payments</strong> supporting both mobile money and cash on delivery</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">What the community says</h2>
            <p>
              "Before Pacelio, we relied on motorcycle riders we found at the stage. We never knew if they'd show up, how long they'd take, or whether the package arrived. Now I can track every delivery from my phone — it's transformed how we serve our customers." — <em>Mwanaisha S., Shop Owner, Soweto Market</em>
            </p>

            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-12 mb-4">What's next</h2>
            <p>
              The launch is only the beginning. Pacelio is already preparing for expansion to Dar es Salaam and Arusha, with a target of 1,000 couriers and 500 businesses by the end of 2027. The team is also developing cross-border capabilities for Tanzania-Kenya and Tanzania-Uganda routes.
            </p>
            <p>
              For now, the focus remains on Mbeya — proving that world-class logistics can start anywhere, even at a university desk.
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
