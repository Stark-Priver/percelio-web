'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HelpCircle, Search, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-4xl text-center mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Center
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6">How can we help?</h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Search for articles, guides..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-[var(--border)] focus:border-[var(--orange)] focus:ring-1 focus:ring-[var(--orange)] outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 max-content">
          <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-[var(--border)] hover:border-[var(--orange)] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Live Chat</h3>
            <p className="text-[var(--muted)] text-sm mb-6">Chat with our support team in real-time for urgent issues.</p>
            <button className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Start Chat <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-[var(--border)] hover:border-[var(--orange)] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Email Support</h3>
            <p className="text-[var(--muted)] text-sm mb-6">Send us an email and we'll get back to you within 24 hours.</p>
            <Link href="mailto:support@percelio.com" className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-3 transition-all no-underline">
              Send Email <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-[var(--border)] hover:border-[var(--orange)] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Knowledge Base</h3>
            <p className="text-[var(--muted)] text-sm mb-6">Browse our detailed guides and common troubleshooting tips.</p>
            <button className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Browse Docs <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
