'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EndUsersPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <User className="w-3.5 h-3.5" />
            Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            For <span className="text-[var(--orange)]">End Users</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-10 leading-relaxed">
            Get anything delivered to your doorstep in minutes. From documents to groceries, Percelio connects you with the fastest couriers in East Africa.
          </p>

          <div className="grid gap-4 mb-12">
            {[
              'Lightning-fast delivery within your city',
              'Live map tracking of your courier',
              'Secure, cashless payment options',
              'Verified and professional couriers',
              '24/7 customer support'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--orange)]" />
                <span className="text-[var(--foreground)] font-medium">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/download"
            className="inline-flex px-8 py-4 bg-[var(--orange)] text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-[var(--orange)]/30 transition-all items-center gap-2 group no-underline"
          >
            Download the App
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
