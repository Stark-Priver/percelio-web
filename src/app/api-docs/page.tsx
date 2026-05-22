'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Terminal, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Terminal className="w-3.5 h-3.5" />
            Developers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">API Documentation</h1>
          <p className="text-lg text-[var(--muted)] mb-8">
            Build powerful logistics integrations with Percelio's developer-friendly APIs.
            Detailed documentation and SDKs are coming soon.
          </p>
          <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-[var(--border)] mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-[var(--orange)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Early Access</h3>
            </div>
            <p className="text-[var(--muted)] mb-6">
              Our API is currently in private beta. If you are interested in building with Percelio,
              please contact our developer relations team.
            </p>
            <Link href="/contact" className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-3 transition-all no-underline">
              Request API Key <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
