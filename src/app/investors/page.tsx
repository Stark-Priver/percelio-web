'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Wallet, Users, Globe, BarChart3, ShieldCheck, ArrowRight, CheckCircle2, Download, FileText } from 'lucide-react';
import Link from 'next/link';

const milestones = [
  { date: 'Jan 2026', title: 'Development Begins', desc: 'Full-stack development of Pacelio platform initiated under IncriprTech.' },
  { date: 'Jun 2026', title: 'Beta Launch — Mbeya', desc: 'Platform goes live in Mbeya with 50+ couriers and 120 partner businesses.' },
  { date: 'Jul 2026', title: 'MVP Complete', desc: 'All core features delivered: multi-carrier booking, live tracking, QR handoffs, COD, chat, and analytics.' },
  { date: 'Q3 2026', title: 'Market Expansion', desc: 'Scale to Dar es Salaam, Arusha, Mwanza, Dodoma. Target: 300+ couriers, 500+ businesses.' },
];

const revenueStreams = [
  {
    icon: Wallet,
    title: 'Commission per Delivery',
    desc: 'Platform takes a 10–15% commission on every delivery transaction. With 1,000 daily deliveries at an average TZS 10,000 commission, this alone generates TZS 300M+ monthly.',
    impact: 'TZS 300M+ / mo at scale',
  },
  {
    icon: Users,
    title: 'Subscription Plans',
    desc: 'Tiered monthly subscriptions for businesses (Basic, Professional, Enterprise) starting at TZS 50,000/mo. Includes analytics, API access, and priority support.',
    impact: 'TZS 50K–500K / mo per business',
  },
  {
    icon: Globe,
    title: 'Carrier Listing Fees',
    desc: 'Logistics companies pay a listing fee to appear in the marketplace. Premium placement and featured listings available at additional cost.',
    impact: 'TZS 100K–1M / mo per carrier',
  },
  {
    icon: BarChart3,
    title: 'Value-Added Services',
    desc: 'Premium features: white-label branding, custom API integrations, advanced analytics, bulk SMS credits, and dedicated account management.',
    impact: 'TZS 200K–2M / mo per client',
  },
  {
    icon: ShieldCheck,
    title: 'Parcel Protection',
    desc: 'Optional insurance and enhanced liability coverage on shipments. Revenue share with insurance partners on every protected parcel.',
    impact: '5–10% add-on per shipment',
  },
  {
    icon: TrendingUp,
    title: 'Cross-Border Fees',
    desc: 'Facilitation fees on cross-border shipments between Tanzania, Kenya, Uganda, and Rwanda. Higher margin due to value-added customs handling.',
    impact: '15–20% per cross-border parcel',
  },
];

const useOfFunds = [
  { label: 'Marketing & User Acquisition', pct: '35%', desc: 'Digital campaigns, courier recruitment, business outreach across 5 cities' },
  { label: 'Operations & Support Team', pct: '25%', desc: 'Hiring support staff, operations managers, and city coordinators' },
  { label: 'Product Development', pct: '20%', desc: 'Cross-border features, web dashboard, advanced analytics, API improvements' },
  { label: 'Legal & Compliance', pct: '10%', desc: 'Company registration, licenses, insurance, data compliance across EAC' },
  { label: 'Reserve Fund', pct: '10%', desc: 'Working capital for courier payouts, contingency, and scaling buffer' },
];

export default function InvestorsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">

        {/* Hero */}
        <section className="pt-32 pb-16 container-px max-content">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              Investment
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              Invest in the Future of <span className="text-[var(--orange)]">East African Logistics</span>
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-3xl">
              Pacelio is a production-ready courier and logistics marketplace platform built by{' '}
              <strong className="text-[var(--foreground)]">IncriprTech</strong>, a Mbeya-based technology startup.
              Development is complete. We are seeking funding to launch across East Africa and capture a rapidly growing market.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:pacelio@incpritech.com" className="btn btn-primary btn-lg">
                Contact for Investment <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/docs/PERCELIO_DOCUMENTATION.pdf" className="btn btn-ghost btn-lg" target="_blank">
                <FileText className="w-4 h-4" />
                View Technical Documentation
              </a>
            </div>
          </div>
        </section>

        {/* Key Metrics Strip */}
        <section className="pb-16 container-px max-content">
          <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-[2rem] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: 'TZS 47.8T', label: 'EAC logistics market size' },
                { val: '5', label: 'Tanzanian cities ready' },
                { val: '15%', label: 'Avg platform commission' },
                { val: '40%', label: 'Projected annual growth' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-[var(--orange)] mb-1">{s.val}</div>
                  <div className="text-sm text-[var(--muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wider mb-6">Market Opportunity</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">Why Now?</h2>
                <div className="space-y-5">
                  {[
                    'East Africa\'s logistics market is valued at TZS 47.8 trillion and growing at 15% annually, driven by e-commerce and cross-border trade under the African Continental Free Trade Area.',
                    'Over 80% of deliveries in Tanzania still rely on informal networks — phone calls, motorcycle stages, and manual coordination. No centralized digital marketplace exists.',
                    'Mobile money penetration exceeds 70% in Tanzania, creating the perfect payment infrastructure for a digital logistics platform.',
                    'Youth unemployment is high, and platform-based courier work offers immediate earning opportunities with low barriers to entry.',
                  ].map((p, i) => (
                    <p key={i} className="text-[var(--body)] leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[2rem] p-8 md:p-10">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">East Africa Logistics at a Glance</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Market Value', val: 'TZS 47.8T', sub: 'Courier & logistics (2025)' },
                    { label: 'Annual Growth', val: '15%', sub: 'CAGR 2025–2030' },
                    { label: 'E-Commerce Share', val: '22%', sub: 'Of total logistics demand' },
                    { label: 'Unserved Market', val: '~65%', sub: 'No digital logistics solution' },
                    { label: 'Mobile Money Users', val: '70%+', sub: 'Of Tanzanian adults' },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center justify-between pb-4 border-b border-[var(--border)] last:border-0 last:pb-0">
                      <div>
                        <span className="text-sm font-medium text-[var(--foreground)]">{d.label}</span>
                        <span className="text-xs text-[var(--muted)] block">{d.sub}</span>
                      </div>
                      <span className="text-lg font-black text-[var(--orange)]">{d.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Status */}
        <section className="py-16 container-px max-content">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider mb-6">Product Status</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Development <span className="text-[var(--orange)]">Complete</span> — Ready to Launch</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">The platform is fully built and tested. All six core features are production-ready. What remains is market entry — marketing, operations, and scaling.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, text: 'Multi-carrier rate comparison engine', done: true },
                { icon: CheckCircle2, text: 'Real-time GPS tracking with live map', done: true },
                { icon: CheckCircle2, text: 'QR-based parcel handoff system', done: true },
                { icon: CheckCircle2, text: 'In-app chat and messaging', done: true },
                { icon: CheckCircle2, text: 'Cash on Delivery lifecycle', done: true },
                { icon: CheckCircle2, text: 'Fleet & driver management dashboard', done: true },
                { icon: CheckCircle2, text: 'Business analytics and reporting', done: true },
                { icon: CheckCircle2, text: 'Cross-border shipping infrastructure', done: false },
              ].map((f, i) => (
                <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border ${f.done ? 'bg-green-500/5 border-green-500/20' : 'bg-[var(--bg-soft)] border-[var(--border)] opacity-50'}`}>
                  <f.icon className={`w-5 h-5 flex-shrink-0 ${f.done ? 'text-green-500' : 'text-[var(--muted)]'}`} />
                  <span className={`text-sm font-medium ${f.done ? 'text-[var(--foreground)]' : 'text-[var(--muted)]'}`}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Project <span className="text-[var(--orange)]">Timeline</span></h2>
              <p className="text-[var(--muted)] max-w-xl mx-auto">From concept to market-ready platform in under seven months.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-[17px] top-0 bottom-0 w-0.5 bg-[var(--border)]" />
                <div className="space-y-10">
                  {milestones.map((m, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-[34px] h-[34px] rounded-full bg-[var(--bg)] border-4 border-[var(--orange)] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[var(--orange)]" />
                      </div>
                      <span className="text-xs font-bold text-[var(--orange)] uppercase tracking-wider">{m.date}</span>
                      <h3 className="text-lg font-bold text-[var(--foreground)] mt-1">{m.title}</h3>
                      <p className="text-sm text-[var(--muted)] mt-1">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="py-16 container-px max-content">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold uppercase tracking-wider mb-6">Revenue Model</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">How Pacelio <span className="text-[var(--orange)]">Generates Revenue</span></h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">Six diversified revenue streams that scale with platform growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {revenueStreams.map((r, i) => (
              <div key={i} className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg hover:border-[var(--orange)]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-5">
                  <r.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{r.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{r.desc}</p>
                <div className="inline-flex items-center gap-1.5 bg-green-500/10 rounded-full px-3 py-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">{r.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use of Funds */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Use of <span className="text-[var(--orange)]">Funds</span></h2>
                <p className="text-[var(--muted)] max-w-xl mx-auto">Investment allocation for market entry across East Africa.</p>
              </div>
              <div className="space-y-4">
                {useOfFunds.map((f, i) => (
                  <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-[var(--foreground)]">{f.label}</h3>
                      <span className="text-lg font-black text-[var(--orange)]">{f.pct}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--bg-soft)] overflow-hidden mb-3">
                      <div className="h-full rounded-full bg-[var(--orange)]" style={{ width: f.pct }} />
                    </div>
                    <p className="text-sm text-[var(--muted)]">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROI Projection */}
        <section className="py-16 container-px max-content">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Projected <span className="text-[var(--orange)]">ROI</span></h2>
              <p className="text-[var(--muted)] max-w-xl mx-auto">Conservative estimates based on comparable platform metrics in emerging markets.</p>
            </div>
            <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-[2rem] overflow-hidden">
              <div className="grid grid-cols-4 text-xs font-bold uppercase tracking-wider border-b border-[var(--border)]">
                {['Metric', 'Year 1', 'Year 2', 'Year 3'].map(h => (
                  <div key={h} className="p-4 text-[var(--muted)]">{h}</div>
                ))}
              </div>
              {[
                { label: 'Active Users', y1: '5,000', y2: '25,000', y3: '100,000' },
                { label: 'Daily Deliveries', y1: '500', y2: '3,000', y3: '15,000' },
                { label: 'Monthly Revenue (TZS)', y1: '75M', y2: '450M', y3: '2.1B' },
                { label: 'Gross Margin', y1: '55%', y2: '65%', y3: '72%' },
                { label: 'Market Share (TZ)', y1: '2%', y2: '8%', y3: '20%' },
              ].map((r, i) => (
                <div key={i} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-[var(--bg)]' : ''}`}>
                  <div className="p-4 font-bold text-[var(--foreground)]">{r.label}</div>
                  <div className="p-4 text-[var(--body)]">{r.y1}</div>
                  <div className="p-4 text-[var(--body)]">{r.y2}</div>
                  <div className="p-4 text-[var(--orange)] font-bold">{r.y3}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Procedure */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">How to <span className="text-[var(--orange)]">Invest</span></h2>
              <p className="text-[var(--muted)] mb-12 max-w-xl mx-auto">We welcome conversations with angel investors, venture capital firms, development finance institutions, and strategic partners.</p>
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                  { step: '01', title: 'Reach Out', desc: 'Contact us at pacelio@incpritech.com with your investment interest. We will schedule a call to discuss the opportunity.' },
                  { step: '02', title: 'Due Diligence', desc: 'Receive our detailed pitch deck, financial models, technical documentation, and market analysis. Ask any questions.' },
                  { step: '03', title: 'Partner', desc: 'Negotiate terms, finalize agreements, and join us in transforming logistics across East Africa.' },
                ].map((s, i) => (
                  <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8">
                    <div className="w-10 h-10 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-5 text-sm font-black">{s.step}</div>
                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{s.title}</h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 container-px max-content text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--orange-tint)] to-[var(--bg-soft)] border border-[var(--orange)]/20 rounded-[3rem] p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Ready to <span className="text-[var(--orange)]">Invest</span>?</h2>
              <p className="text-[var(--body)] mb-8 max-w-lg mx-auto leading-relaxed">
                We are building the logistics infrastructure East Africa deserves. Let's talk about how you can be part of this journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:pacelio@incpritech.com" className="btn btn-primary btn-lg">
                  pacelio@incpritech.com <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/docs/PERCELIO_DOCUMENTATION.pdf" className="btn btn-ghost btn-lg" target="_blank">
                  <FileText className="w-4 h-4" />
                  Download Documentation
                </a>
              </div>
              <p className="text-xs text-[var(--muted)] mt-6">IncriprTech — Mbeya, Tanzania | Building the digital infrastructure of East Africa</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
