'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smartphone, Package, MapPin, CheckCircle2, ArrowRight, ShoppingCart, Bike, Building2 } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Create Your Account',
    desc: 'Download the Pacelio app and register as a business, courier, or individual. The process takes under 3 minutes — no paperwork required.',
    color: 'bg-[var(--orange)]',
  },
  {
    num: '02',
    icon: Package,
    title: 'Book a Delivery',
    desc: 'Enter pickup and drop-off addresses, package details, and preferred time. Get instant price quotes from multiple carriers and choose the best option.',
    color: 'bg-[var(--orange)]',
  },
  {
    num: '03',
    icon: MapPin,
    title: 'Real-Time Tracking',
    desc: 'Follow your parcel on a live map from pickup to delivery. Receive SMS updates at every milestone. Share tracking links with recipients.',
    color: 'bg-[var(--orange)]',
  },
  {
    num: '04',
    icon: CheckCircle2,
    title: 'Confirm & Review',
    desc: 'Sign digitally on delivery. Rate your experience, submit feedback, and manage returns if needed. Payments are processed automatically.',
    color: 'bg-[var(--orange)]',
  },
];

const roles = [
  {
    icon: ShoppingCart,
    title: 'For Businesses',
    desc: 'Ship products to customers across Tanzania. Manage multiple locations, track spending, and integrate with your e-commerce platform.',
    href: '/solutions/businesses',
  },
  {
    icon: Bike,
    title: 'For Couriers',
    desc: 'Earn on your own schedule with same-day payouts. Get smart route suggestions and grow your reputation with every delivery.',
    href: '/solutions/couriers',
  },
  {
    icon: Building2,
    title: 'For Logistics Fleets',
    desc: 'Digitize your fleet operations. Manage drivers, track vehicles, win B2B contracts, and scale your business with data-driven tools.',
    href: '/solutions/logistics',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
        <section className="pt-32 pb-20 container-px max-content">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
              <ArrowRight className="w-3.5 h-3.5" />
              How It Works
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              From Booking to Delivery in <span className="text-[var(--orange)]">Four Steps</span>
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
              Pacelio makes shipping and receiving parcels simple. Whether you are a business shipping products,
              a courier making deliveries, or an individual sending a package — the process is the same.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="pb-20 container-px max-content">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border)] -translate-x-1/2" />
            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-[var(--orange)] uppercase tracking-wider">Step {step.num}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">{step.title}</h2>
                    <p className="text-[var(--body)] leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-[2rem] bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center shadow-lg shadow-[var(--orange)]/10">
                      <step.icon className="w-12 h-12 lg:w-16 lg:h-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role-specific */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">How It Works for <span className="text-[var(--orange)]">You</span></h2>
              <p className="text-[var(--muted)] max-w-xl mx-auto">Different roles, one platform. See how Pacelio fits your needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {roles.map((role, i) => (
                <Link key={i} href={role.href} className="group no-underline">
                  <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg hover:border-[var(--orange)]/30 transition-all h-full">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <role.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{role.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed mb-6">{role.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--orange)]">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ hint */}
        <section className="py-16 container-px max-content text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Still have <span className="text-[var(--orange)]">questions</span>?</h2>
            <p className="text-[var(--muted)] mb-8">Visit our FAQ page for detailed answers about how Pacelio works.</p>
            <Link href="/support" className="btn btn-primary btn-lg">
              Visit Support Center <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
