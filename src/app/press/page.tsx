'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Radio, Download, ExternalLink, FileText, Image, Palette, Newspaper, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const assets = [
  {
    icon: Image,
    title: 'Logo Package',
    desc: 'Pacelio logo in PNG, SVG, and EPS formats. Full color, white, and black variations.',
    format: 'ZIP · 12 MB',
  },
  {
    icon: Palette,
    title: 'Brand Guidelines',
    desc: 'Complete brand guide including color palette, typography, usage rules, and spacing.',
    format: 'PDF · 8 MB',
  },
  {
    icon: Image,
    title: 'Icon Set',
    desc: 'Pacelio app icon in multiple resolutions for web, iOS, and Android.',
    format: 'ZIP · 4 MB',
  },
  {
    icon: FileText,
    title: 'Press Release Templates',
    desc: 'Editable press release templates in DOCX format for media partners.',
    format: 'DOCX · 2 MB',
  },
];

const coverage = [
  { date: 'Oct 24, 2023', outlet: 'East Africa Tech Review', title: 'Pacelio raises $5M to digitize Tanzanian logistics' },
  { date: 'Sep 12, 2023', outlet: 'Logistics Weekly', title: 'The future of last-mile delivery in developing markets' },
  { date: 'Aug 5, 2023', outlet: 'Tanzania Business Times', title: 'Mbeya-based startup is transforming how Tanzanians ship goods' },
  { date: 'Jun 20, 2023', outlet: 'African Tech Roundup', title: 'How two students built a logistics platform serving thousands' },
];

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Radio className="w-3.5 h-3.5" />
            Media
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Press Kit</h1>
          <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl">
            Resources and brand assets for journalists, media partners, and researchers covering Pacelio and East African logistics technology.
          </p>

          {/* Brand Assets */}
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Brand <span className="text-[var(--orange)]">Assets</span></h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {assets.map((asset, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[var(--bg-soft)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center">
                    <asset.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--foreground)]">{asset.title}</h3>
                    <p className="text-xs text-[var(--muted)] font-medium">{asset.format}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--muted)] mb-6">{asset.desc}</p>
                <button className="w-full py-3 rounded-2xl bg-[var(--orange)] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm">
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            ))}
          </div>

          {/* Media Contact */}
          <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-[2rem] p-10 mb-16">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Media Inquiries</h3>
            <p className="text-sm text-[var(--muted)] mb-6">
              For press inquiries, interview requests, or media partnerships, please contact our communications team.
            </p>
            <Link href="mailto:press@incpritech.com" className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-3 transition-all no-underline">
              press@incpritech.com <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Press Coverage */}
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Press <span className="text-[var(--orange)]">Coverage</span></h2>
          <div className="space-y-4">
            {coverage.map((news, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-5 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all group cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-[var(--orange)] uppercase tracking-wider">{news.date}</span>
                  <h4 className="font-bold text-[var(--foreground)] group-hover:text-[var(--orange)] transition-colors mt-1">{news.title}</h4>
                  <p className="text-xs text-[var(--muted)] mt-1">{news.outlet}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--orange)] transition-colors flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
