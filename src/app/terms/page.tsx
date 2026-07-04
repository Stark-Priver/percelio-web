'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <FileText className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-8">Terms of Service</h1>
          <div className="prose prose-orange dark:prose-invert max-w-none">
            <p className="text-lg text-[var(--muted)] mb-8">Last Updated: January 2024</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">1. Acceptance of Terms</h3>
            <p className="text-[var(--muted)] mb-6">By accessing or using the Pacelio platform, you agree to be bound by these Terms of Service.</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">2. Service Description</h3>
            <p className="text-[var(--muted)] mb-6">Pacelio provides a technology platform that connects users with courier and logistics services.</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">3. User Responsibilities</h3>
            <p className="text-[var(--muted)] mb-6">Users are responsible for providing accurate information and complying with all applicable laws while using our services.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
