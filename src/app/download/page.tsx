'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smartphone, Monitor, Download as DownloadIcon, ArrowRight, CheckCircle2, Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
        <section className="pt-32 pb-16 container-px max-content">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
              <Smartphone className="w-3.5 h-3.5" />
              Download
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              Get Pacelio on Your <span className="text-[var(--orange)]">Device</span>
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
              Available on iOS, Android, and the web. Manage every delivery — from booking to proof of delivery — right from your phone or browser.
            </p>
          </div>
        </section>

        {/* Platform cards */}
        <section className="pb-20 container-px max-content">
          <div className="grid md:grid-cols-3 gap-6">
            {/* iOS */}
            <div className="rounded-[2rem] p-8 border bg-[var(--bg-soft)] border-[var(--border)] opacity-70 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg)] text-[var(--muted)] flex items-center justify-center mb-6">
                <AppleIcon />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-[var(--foreground)]">iOS</h3>
                <span className="text-[9px] font-bold text-[var(--orange)] uppercase tracking-widest bg-[var(--orange-light)] px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-8">iPhone &amp; iPad</p>
              <span className="text-sm font-medium text-[var(--muted)]">Download on the App Store</span>
            </div>

            {/* Android */}
            <div className="rounded-[2rem] p-8 border bg-[var(--bg-soft)] border-[var(--border)] opacity-70 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg)] text-[var(--muted)] flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-[var(--foreground)]">Android</h3>
                <span className="text-[9px] font-bold text-[var(--orange)] uppercase tracking-widest bg-[var(--orange-light)] px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-8">Phones &amp; Tablets</p>
              <span className="text-sm font-medium text-[var(--muted)]">Get it on Google Play</span>
            </div>

            {/* Web */}
            <div className="rounded-[2rem] p-8 border bg-[var(--bg)] border-[var(--border)] hover:shadow-lg hover:border-[var(--orange)]/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-[var(--foreground)]">Web Dashboard</h3>
              </div>
              <p className="text-sm text-[var(--muted)] mb-8">Any browser, any device</p>
              <a href="https://app.pacelio.incpritech.com" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--orange)] no-underline group">
                Access at app.pacelio.incpritech.com <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Direct download */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Prefer a Direct <span className="text-[var(--orange)]">Download</span>?</h2>
              <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">
                Download the latest version directly. No app store required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="btn btn-primary btn-lg inline-flex">
                  <DownloadIcon className="w-5 h-5" />
                  Download APK (v2.0)
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-8 py-4 text-base rounded-xl border-2 border-[var(--orange)] text-[var(--orange)] font-bold hover:bg-[var(--orange-light)] transition-all no-underline">
                  <DownloadIcon className="w-5 h-5" />
                  Download for Windows
                </a>
              </div>
              <p className="text-xs text-[var(--muted)] mt-4">Version 2.0 — Released June 2026 | APK: ~28 MB | Windows: ~45 MB</p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 container-px max-content">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 text-center">App <span className="text-[var(--orange)]">Requirements</span></h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, text: 'iOS 14.0 or later — iPhone 7 and newer' },
                { icon: CheckCircle2, text: 'Android 7.0 (Nougat) or later' },
                { icon: CheckCircle2, text: 'Internet connection for real-time tracking' },
                { icon: CheckCircle2, text: 'Location permissions for GPS tracking' },
                { icon: CheckCircle2, text: 'Camera access for QR code scanning' },
                { icon: CheckCircle2, text: 'Notification permissions for delivery alerts' },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)]">
                  <r.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-[var(--foreground)] font-medium">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Web Access */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mx-auto mb-6">
                <Globe className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">No App? No <span className="text-[var(--orange)]">Problem</span></h2>
              <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">
                Access the full Pacelio dashboard from any browser. Manage shipments, track deliveries, and view analytics — no download required.
              </p>
              <a href="https://app.pacelio.incpritech.com" className="btn btn-primary btn-lg inline-flex">
                Open Web Dashboard <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Investors note */}
        <section className="py-10 container-px max-content">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
              <TrendingUp className="w-4 h-4 text-[var(--orange)]" />
              <span>
                Built by <strong className="text-[var(--foreground)]">IncriprTech</strong> in Mbeya, Tanzania.{' '}
                <Link href="/investors" className="text-[var(--orange)] font-bold no-underline hover:underline">
                  View investment opportunity
                </Link>
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
