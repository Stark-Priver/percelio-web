'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Percelio transformed how we handle deliveries. Our customers now track orders in real time and we've reduced 'where is my order' calls by 80%. It's built for how business actually works in Tanzania.",
      name: "Amina Saleh",
      title: "Operations Manager",
      company: "Saleh Trading Co., Dar es Salaam",
      initials: "AS",
      stars: 5,
    },
    {
      quote: "As a courier I was sceptical. But the route planning actually works, earnings are deposited same day, and customers can see me coming. My daily deliveries went from 8 to 14. Game changer.",
      name: "David Mwangi",
      title: "Independent Courier Agent",
      company: "Arusha, Tanzania",
      initials: "DM",
      stars: 5,
    },
    {
      quote: "We integrated Percelio into our fleet operations within a week. The SLA tracking alone saved us three client disputes in the first month. The analytics dashboard is genuinely impressive.",
      name: "Fatuma Osei",
      title: "CEO",
      company: "Osei Logistics, Mwanza",
      initials: "FO",
      stars: 5,
    },
  ];

  return (
    <section className="section-pad bg-[var(--bg-dark)] relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,var(--orange)_0%,transparent_60%),radial-gradient(circle_at_80%_20%,var(--orange)_0%,transparent_50%)]" />

      <div className="max-content container-px relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="overline mb-4">Real Stories</div>
          <h2 className="text-white mb-6">
            Trusted Across{' '}
            <span className="text-[var(--orange)]">East Africa</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            From small traders to large logistics fleets — Percelio delivers results that matter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[var(--orange-tint)] rounded-[2rem] p-10 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[var(--orange)] opacity-10 group-hover:opacity-20 transition-opacity" />

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-[var(--bg-dark)] font-medium leading-relaxed mb-10 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t border-[var(--orange)]/10">
                <div className="w-12 h-12 rounded-2xl bg-[var(--orange)] text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-[var(--orange)]/20">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--bg-dark)]">{t.name}</div>
                  <div className="text-xs text-[var(--bg-dark)]/60 font-medium mt-0.5">{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center backdrop-blur-sm">
          {[
            { val: '3,000+', label: 'Active users' },
            { val: '98%',    label: 'Satisfaction rate' },
            { val: '5 Cities', label: 'In Tanzania' },
            { val: '4.8 ★',  label: 'App store rating' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-black text-white tracking-tighter mb-2">{s.val}</div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
