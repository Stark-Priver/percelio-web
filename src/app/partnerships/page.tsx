'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Handshake, CheckCircle2, ArrowRight, Globe, Users, TrendingUp, Gift, Building2, Lightbulb, Code } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    icon: Code,
    title: 'Technology Integration',
    desc: 'Integrate your platform with Pacelio\'s API and offer delivery services to your users. Perfect for e-commerce platforms, ERP systems, and logistics software providers.',
    benefits: ['API access with dedicated support', 'Co-marketing opportunities', 'Revenue sharing on referrals', 'Early access to new features'],
  },
  {
    icon: Building2,
    title: 'Strategic Alliance',
    desc: 'Partner with us to expand delivery coverage, share infrastructure, or co-develop logistics solutions for specific industries or regions.',
    benefits: ['Joint market development', 'Shared operational resources', 'Co-branded solutions', 'Executive relationship management'],
  },
  {
    icon: Users,
    title: 'Reseller Program',
    desc: 'Resell Pacelio services to your customer base. Earn competitive commissions on every delivery your clients book through the platform.',
    benefits: ['Wholesale pricing structure', 'Sales enablement materials', 'Dedicated partner portal', 'Quarterly business reviews'],
  },
  {
    icon: Globe,
    title: 'Regional Expansion',
    desc: 'Help us bring Pacelio to new cities and countries. Local partners are essential for understanding market dynamics and building last-mile networks.',
    benefits: ['Exclusive territory rights', 'Local operations support', 'Brand licensing options', 'Equity partnership potential'],
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
      <section className="pt-32 pb-16 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Handshake className="w-3.5 h-3.5" />
            Partners
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            Grow with <span className="text-[var(--orange)]">Pacelio</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
            We believe in the power of collaboration. Partner with East Africa's leading logistics technology platform
            and unlock new growth opportunities for your organization.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Become a Partner <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Partnership <span className="text-[var(--orange)]">Programs</span></h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">Choose the partnership model that fits your organization.</p>
          </div>
          <div className="space-y-8">
            {programs.map((program, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-[2rem] p-8 md:p-10 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-16">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center">
                      <program.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{program.title}</h3>
                    <p className="text-[var(--muted)] mb-6 leading-relaxed">{program.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {program.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--orange)] flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 container-px max-content">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">Why Partner with <span className="text-[var(--orange)]">Pacelio</span>?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Fast Growing Market', desc: 'East African logistics is expanding at 15% annually. Tap into a rapidly growing ecosystem.' },
              { icon: Gift, title: 'Revenue Sharing', desc: 'Competitive commission structures with transparent tracking and monthly payouts.' },
              { icon: Lightbulb, title: 'Joint Innovation', desc: 'Co-develop solutions for specific markets and benefit from shared R&D investment.' },
            ].map((item, i) => (
              <div key={i}>
                <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Let's <span className="text-[var(--orange)]">Partner</span></h2>
            <p className="text-[var(--muted)] mb-8">Ready to explore partnership opportunities? We would love to hear from you.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
