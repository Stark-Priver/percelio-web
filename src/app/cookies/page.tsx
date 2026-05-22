'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cookie } from 'lucide-react';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Cookie className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-8">Cookie Policy</h1>
          <div className="prose prose-orange dark:prose-invert max-w-none">
            <p className="text-lg text-[var(--muted)] mb-8">Last Updated: January 2024</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">What are cookies?</h3>
            <p className="text-[var(--muted)] mb-6">Cookies are small text files that are stored on your device when you visit our website.</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">How we use cookies</h3>
            <p className="text-[var(--muted)] mb-6">We use cookies to understand how you use our site and to improve your experience. This includes personalizing content and advertising.</p>

            <h3 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">Your choices</h3>
            <p className="text-[var(--muted)] mb-6">You can choose to disable cookies through your browser settings, although this may affect your ability to use certain features of our site.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
