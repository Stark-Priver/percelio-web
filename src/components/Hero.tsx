'use client';

import { ArrowRight, Download, Play, CheckCircle2, MapPin, Package, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[var(--bg)] overflow-hidden">
      <div className="max-content container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="reveal">
            {/* Overline badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--orange-light)] rounded-full px-4 py-1.5 mb-8 border border-[var(--orange)]/10">
              <span className="w-2 h-2 rounded-full bg-[var(--orange)] pulse-dot" />
              <span className="text-xs font-bold text-[var(--orange)] uppercase tracking-wider">Now live in Tanzania</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[var(--dark)] leading-[1.1] tracking-tighter mb-6">
              Smarter Deliveries<br />
              for <span className="text-[var(--orange)]">Growing</span><br />
              Businesses
            </h1>

            <p className="text-lg text-[var(--body)] leading-relaxed max-w-lg mb-10">
              Percelio connects business owners, courier agents, and logistics companies across East Africa — real-time tracking, instant booking, full visibility on every parcel.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10 pb-8 border-b border-[var(--border)] overflow-x-auto no-scrollbar">
              {[
                { val: '3,000+', label: 'Active couriers' },
                { val: '3.5M',   label: 'Parcels moved' },
                { val: '24/7',   label: 'Live support' },
              ].map(s => (
                <div key={s.label} className="min-w-fit">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--dark)] tracking-tight">{s.val}</div>
                  <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#download" className="btn btn-primary btn-lg">
                Download App
                <Download className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="btn btn-ghost btn-lg">
                See how it works
                <Play className="w-4 h-4 fill-current" />
              </a>
            </div>

            {/* Trust logos */}
            <div className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest mb-4">
                Trusted by logistics teams worldwide
              </p>
              <div className="flex gap-8 items-center flex-wrap">
                {['TAZARA', 'SHIPIT', 'DEXPRESS', 'FASTEX', 'MOVEIT'].map(b => (
                  <span key={b} className="text-sm font-black text-[var(--muted)] tracking-tighter">{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="relative flex justify-center lg:justify-end reveal-delay-2">
            {/* Soft background circle */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[var(--orange-tint)] to-transparent opacity-50 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="float relative z-10">
              {/* Phone frame */}
              <div className="phone-frame w-[280px] md:w-[300px] bg-[var(--bg)] border-4 border-[var(--border)] overflow-hidden">
                {/* Notch */}
                <div className="h-7 bg-[var(--bg)] flex justify-center items-center border-b border-[var(--border-light)]">
                  <div className="w-20 h-4 rounded-full bg-[var(--dark)]" />
                </div>

                {/* App content */}
                <div className="p-4 pb-6 bg-[var(--bg-soft)]">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <div className="text-[10px] text-[var(--muted)] font-medium">Good morning</div>
                      <div className="text-sm font-bold text-[var(--dark)] tracking-tight">Amani Business</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[var(--orange)] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[var(--orange)]/20">A</div>
                  </div>

                  {/* Live tracking card */}
                  <div className="bg-[var(--bg)] rounded-2xl p-4 mb-4 border border-[var(--border)] shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse" />
                      <span className="text-[10px] font-bold text-[var(--orange)] uppercase tracking-wider">Live Tracking</span>
                    </div>
                    <div className="text-[10px] text-[var(--muted)] mb-1">Order #PCT-2847</div>
                    <div className="text-sm font-bold text-[var(--dark)] tracking-tight mb-3">Dar es Salaam → Arusha</div>
                    <div className="h-1.5 rounded-full bg-[var(--border-light)] overflow-hidden mb-2">
                      <div className="h-full w-2/3 rounded-full bg-[var(--orange)]" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-[var(--muted)]">67% complete</span>
                      <span className="text-[10px] text-[var(--orange)] font-bold">Est. 4:30 PM</span>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: 'Active', val: '12',  color: 'text-[var(--orange)]' },
                      { label: 'Delivered', val: '348', color: 'text-green-500' },
                    ].map(s => (
                      <div key={s.label} className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-3">
                        <div className="text-[9px] text-[var(--muted)] font-bold uppercase tracking-wider mb-1">{s.label}</div>
                        <div className={`text-lg font-bold ${s.color} tracking-tight`}>{s.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Map preview with icons */}
                  <div className="rounded-xl overflow-hidden h-28 bg-[var(--bg)] relative border border-[var(--border)]">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,var(--orange)_0%,transparent_50%)]" />
                    <div className="absolute top-4 left-6">
                       <MapPin className="w-4 h-4 text-[var(--orange)]" />
                    </div>
                    <div className="absolute bottom-4 right-6">
                       <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 200 100">
                      <path d="M20,20 C60,20 100,80 180,80" fill="none" stroke="var(--orange)" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                    <div className="absolute bottom-2 left-3 text-[8px] font-bold text-[var(--muted)] uppercase tracking-widest">Route Overview</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-12 top-1/4 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-4 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-[var(--orange)]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[var(--orange)] leading-none">+348</div>
                    <div className="text-[10px] text-[var(--muted)] font-bold uppercase mt-1">Monthly</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-10 bottom-1/4 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-4 shadow-xl hidden md:block">
                 <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-500 leading-none">99.5%</div>
                    <div className="text-[10px] text-[var(--muted)] font-bold uppercase mt-1">Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
