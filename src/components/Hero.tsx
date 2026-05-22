'use client';

import Link from 'next/link';
import { ArrowRight, Download, Play, CheckCircle2, MapPin, Package, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-[var(--bg)] overflow-hidden">
      <div className="max-content container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

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
            <div className="flex gap-8 mb-8 pb-6 border-b border-[var(--border)] overflow-x-auto no-scrollbar">
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
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/download" className="btn btn-primary btn-lg">
                Download App
                <Download className="w-5 h-5" />
              </Link>
              <Link href="/how-it-works" className="btn btn-ghost btn-lg">
                See how it works
                <Play className="w-4 h-4 fill-current" />
              </Link>
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
          <div className="relative flex justify-center lg:justify-end reveal-delay-2 min-h-[600px]">
            {/* Soft background circle */}
            <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[var(--orange-tint)] to-transparent opacity-40 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 w-full max-w-[400px]">

              {/* Secondary phone (back) */}
              <div className="absolute -left-12 top-20 w-[260px] opacity-40 hidden md:block transform -rotate-12 translate-y-10 scale-95 transition-transform duration-700 hover:rotate-0 hover:translate-y-0">
                <div className="phone-frame bg-[var(--bg)] border-4 border-[var(--border)]">
                  <div className="h-6 bg-[var(--bg)] flex justify-center items-center">
                    <div className="w-12 h-2.5 rounded-full bg-[var(--dark)]/20" />
                  </div>
                  <div className="p-4 bg-[var(--bg-soft)] h-[400px]">
                     <div className="space-y-4">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="h-12 bg-[var(--bg)] rounded-xl border border-[var(--border)] opacity-50" />
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Primary phone (front) */}
              <div className="float mx-auto md:mr-0 w-[280px] md:w-[310px] relative z-20">
                <div className="phone-frame bg-[var(--bg)] border-[6px] border-[var(--dark)] overflow-hidden shadow-2xl">
                  {/* Notch */}
                  <div className="h-8 bg-[var(--dark)] flex justify-center items-end pb-1.5">
                    <div className="w-24 h-4 rounded-full bg-[#111]" />
                  </div>

                  {/* App content */}
                  <div className="p-5 pb-8 bg-[var(--bg-soft)]">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-widest">Welcome back</div>
                        <div className="text-sm font-black text-[var(--dark)] tracking-tight mt-0.5">Amani Business</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[var(--orange)] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[var(--orange)]/30">A</div>
                    </div>

                    {/* Live tracking card */}
                    <div className="bg-[var(--bg)] rounded-2xl p-5 mb-5 border border-[var(--border)] shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-[var(--orange)] animate-pulse" />
                        <span className="text-[10px] font-bold text-[var(--orange)] uppercase tracking-widest">In Transit</span>
                      </div>
                      <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-widest mb-1">Parcel #PCT-2847</div>
                      <div className="text-base font-bold text-[var(--dark)] tracking-tight mb-4">Dar es Salaam → Arusha</div>

                      <div className="relative pt-1 mb-4">
                        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-[var(--border-light)]">
                          <div className="w-[70%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[var(--orange)]"></div>
                        </div>
                        <div className="flex justify-between mt-2">
                           <span className="text-[9px] font-bold text-[var(--muted)] uppercase">70% Journey</span>
                           <span className="text-[9px] font-bold text-[var(--orange)] uppercase">4h Left</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      {[
                        { label: 'Active', val: '12',  color: 'text-[var(--orange)]' },
                        { label: 'Delivered', val: '348', color: 'text-green-500' },
                      ].map(s => (
                        <div key={s.label} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-4 shadow-sm">
                          <div className="text-[9px] text-[var(--muted)] font-bold uppercase tracking-widest mb-1">{s.label}</div>
                          <div className={`text-xl font-black ${s.color} tracking-tight`}>{s.val}</div>
                        </div>
                      ))}
                    </div>

                    {/* Map preview */}
                    <div className="rounded-2xl overflow-hidden h-32 bg-[var(--bg)] relative border border-[var(--border)] shadow-inner">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,var(--orange)_0%,transparent_60%)]" />
                      <div className="absolute top-4 left-6 scale-110">
                         <MapPin className="w-5 h-5 text-[var(--orange)]" />
                      </div>
                      <div className="absolute bottom-4 right-6 scale-110">
                         <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 200 100">
                        <path d="M30,30 C70,30 110,70 170,70" fill="none" stroke="var(--orange)" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />
                      </svg>
                      <div className="absolute bottom-3 left-4 text-[9px] font-bold text-[var(--muted)] uppercase tracking-widest bg-[var(--bg)]/80 backdrop-blur-sm px-2 py-0.5 rounded">Real-time Route</div>
                    </div>
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
