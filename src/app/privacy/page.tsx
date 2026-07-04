'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Shield className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-8">Privacy Policy</h1>
          <div className="prose prose-orange dark:prose-invert max-w-none">
            <p className="text-lg text-[var(--muted)] mb-8">Last Updated: January 2026</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">1. Information We Collect</h3>
            <p className="text-[var(--muted)] mb-6">We collect information you provide directly to us when you create an account, use our delivery services, or communicate with us.</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">2. How We Use Information</h3>
            <p className="text-[var(--muted)] mb-6">We use the information we collect to provide, maintain, and improve our services, including processing deliveries and communicating with you.</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">3. Data Security</h3>
            <p className="text-[var(--muted)] mb-6">We implement industry-standard security measures to protect your personal information from unauthorized access and disclosure.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
