'use client';

import Link from 'next/link';
import { Globe, Smartphone, Bell, Wallet, TrendingUp } from 'lucide-react';

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6 group-hover:text-[var(--orange)] transition-colors fill-current">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 group-hover:text-[var(--orange)] transition-colors fill-current">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.1 18-26.7-1.2-36.3zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

export default function Download() {
  return (
    <section id="download" className="section-pad bg-[var(--bg)]">
      <div className="max-content container-px">
        <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center gap-0 shadow-soft">

          {/* Left — copy */}
          <div className="p-12 md:p-16 lg:p-20">
            <div className="inline-flex items-center gap-2 bg-[var(--orange-light)] rounded-full px-4 py-1.5 mb-8 border border-[var(--orange)]/10">
              <Smartphone className="w-3.5 h-3.5 text-[var(--orange)]" />
              <span className="text-xs font-bold text-[var(--orange)] uppercase tracking-wider">Available on iOS & Android</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tighter text-[var(--dark)]">
              Stay Updated.<br />
              Stay <span className="text-[var(--orange)]">Ahead.</span>
            </h2>

            <p className="text-lg text-[var(--body)] leading-relaxed mb-10 max-w-md">
              Download the Pacelio app and manage every delivery — from booking to proof of delivery — right from your phone. Available in Swahili and English.
            </p>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="relative">
                <div className="flex items-center gap-3 bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--muted)] px-6 py-3.5 rounded-2xl opacity-60 cursor-not-allowed">
                  <AppleIcon />
                  <div className="text-left">
                    <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-widest leading-none mb-0.5">Download on the</div>
                    <div className="text-base font-bold leading-none">App Store</div>
                  </div>
                </div>
                <span className="absolute -top-2 -right-2 bg-[var(--orange)] text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--muted)] px-6 py-3.5 rounded-2xl opacity-60 cursor-not-allowed">
                  <PlayStoreIcon />
                  <div className="text-left">
                    <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-widest leading-none mb-0.5">Get it on</div>
                    <div className="text-base font-bold leading-none">Google Play</div>
                  </div>
                </div>
                <span className="absolute -top-2 -right-2 bg-[var(--orange)] text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-[var(--muted)] font-medium mb-6">
              <Globe className="w-4 h-4 text-[var(--orange)]" />
              <span>
                Or access the web dashboard at{' '}
                <a href="https://app.pacelio.com" className="text-[var(--orange)] font-bold no-underline hover:underline">
                  app.pacelio.com
                </a>
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-[var(--muted)] pt-4 border-t border-[var(--border)]">
              <TrendingUp className="w-4 h-4 text-[var(--orange)]" />
              <span>
                Built by <strong className="text-[var(--foreground)]">IncriprTech</strong> —{' '}
                <Link href="/investors" className="text-[var(--orange)] font-bold no-underline hover:underline">
                  View investment opportunity
                </Link>
              </span>
            </div>
          </div>

          {/* Right — phone mockups */}
          <div className="bg-gradient-to-br from-[var(--orange-tint)] to-[var(--bg-soft)] p-12 md:p-20 flex justify-center items-end min-h-[500px] relative overflow-hidden border-l border-[var(--border)]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 border border-[var(--orange)]/10 rounded-full -mr-40 -mt-40" />
            <div className="absolute top-20 right-20 w-40 h-40 bg-[var(--orange)]/5 rounded-full blur-2xl" />

            {/* Back phone */}
            <div className="w-[180px] -mr-12 mb-12 relative z-10 hidden md:block">
              <div className="phone-frame bg-[var(--dark)] border-4 border-black">
                <div className="h-6 bg-black flex justify-center items-center">
                  <div className="w-12 h-3 rounded-full bg-[#111]" />
                </div>
                <div className="p-4 bg-[#0A0A0F]">
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mb-4">Notifications</p>
                  {[
                    { icon: Bell, msg: 'Parcel delivered!', color: 'text-green-500', bg: 'bg-green-500/10' },
                    { icon: Smartphone, msg: 'Courier en route',  color: 'text-[var(--orange)]', bg: 'bg-[var(--orange)]/10' },
                    { icon: Wallet, msg: 'Payment received',  color: 'text-blue-500', bg: 'bg-blue-500/10' },
                  ].map((n, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-3 mb-3 flex items-center gap-3 border border-white/5">
                      <div className={`w-6 h-6 rounded-lg ${n.bg} flex items-center justify-center`}>
                        <n.icon className={`w-3 h-3 ${n.color}`} />
                      </div>
                      <span className="text-[9px] text-white/70 font-medium flex-1">{n.msg}</span>
                    </div>
                  ))}
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-6">
                    <p className="text-[8px] text-green-500 font-bold uppercase mb-1">Today's Earnings</p>
                    <p className="text-sm font-black text-white tracking-tight">TZS 45,000</p>
                    <p className="text-[8px] text-green-500 font-medium mt-1">+18% vs yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Front phone */}
            <div className="w-[200px] md:w-[220px] relative z-20 float">
              <div className="phone-frame bg-[var(--bg)] border-4 border-[var(--border)] shadow-2xl">
                <div className="h-7 bg-[var(--bg)] flex justify-center items-center border-b border-[var(--border-light)]">
                  <div className="w-16 h-4 rounded-full bg-[var(--dark)]" />
                </div>
                <div className="p-5 bg-[var(--bg-soft)]">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-[8px] text-[var(--muted)] font-bold uppercase tracking-widest">Welcome back</p>
                      <p className="text-xs font-bold text-[var(--dark)] mt-0.5">Amani Business</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[var(--orange)] flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-[var(--orange)]/20">A</div>
                  </div>
                  {/* Map */}
                  <div className="rounded-xl overflow-hidden h-24 bg-[var(--bg)] mb-5 border border-[var(--border)] relative group">
                    <div className="absolute inset-0 opacity-10 bg-[var(--orange)] group-hover:opacity-20 transition-opacity" />
                    <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 50">
                      <path d="M10,40 C30,35 70,15 90,10" fill="none" stroke="var(--orange)" strokeWidth="2" strokeDasharray="3 2" />
                      <circle cx="10" cy="40" r="3" fill="var(--orange)" />
                      <circle cx="90" cy="10" r="3" fill="green" />
                    </svg>
                    <p className="absolute bottom-2 left-3 text-[7px] font-bold text-[var(--muted)] uppercase">Live map</p>
                  </div>
                  {/* Status */}
                  <div className="bg-[var(--bg)] rounded-xl p-4 border border-[var(--border)] shadow-sm mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse" />
                      <span className="text-[8px] font-bold text-[var(--orange)] uppercase tracking-widest">PCT-2847</span>
                    </div>
                    <p className="text-[10px] font-bold text-[var(--dark)] mb-3 leading-tight">Dar es Salaam → Arusha</p>
                    <div className="h-1 rounded-full bg-[var(--border-light)] overflow-hidden">
                      <div className="h-full w-2/3 rounded-full bg-[var(--orange)]" />
                    </div>
                  </div>
                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-2">
                    {[{ l: 'Active', v: '12' }, { l: 'Delivered', v: '348' }].map(s => (
                      <div key={s.l} className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-3">
                        <p className="text-[7px] text-[var(--muted)] font-bold uppercase mb-1">{s.l}</p>
                        <p className="text-xs font-bold text-[var(--dark)]">{s.v}</p>
                      </div>
                    ))}
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
