'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, CheckCircle2, ArrowRight, MapPin, Bell, Clock, Smartphone, Star, ShieldCheck, Package } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    desc: 'See exactly where your parcel is on a live map. Share tracking with family or colleagues so everyone stays informed.',
  },
  {
    icon: Bell,
    title: 'Automatic Alerts',
    desc: 'Receive SMS and push notifications at every milestone — picked up, in transit, out for delivery, and delivered. No need to keep checking.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    desc: 'Same-day and next-day delivery options within major cities. Express service for urgent parcels within hours.',
  },
  {
    icon: Star,
    title: 'Verified Couriers',
    desc: 'Every courier is verified with ID and background checks. Rate and review your delivery experience to help maintain quality.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Handling',
    desc: 'QR-based handoff system ensures only authorized couriers handle your parcel. Digital proof of delivery for every transaction.',
  },
  {
    icon: Package,
    title: 'Flexible Options',
    desc: 'Schedule delivery for when you are home. Redirect to a neighbor. Use safe drop options. You control how and when you receive.',
  },
];

export default function EndUsersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
      <section className="pt-32 pb-16 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <User className="w-3.5 h-3.5" />
            Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            For <span className="text-[var(--orange)]">End Users</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
            Get anything delivered to your doorstep — documents, groceries, packages, and more.
            Track every parcel in real time, receive instant alerts, and never miss a delivery again.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/download" className="btn btn-primary btn-lg">
              Download the App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '50,000+', label: 'Parcels Delivered' },
              { val: '4.8 ★', label: 'User Rating' },
              { val: '98%', label: 'On-Time Rate' },
              { val: '12', label: 'Cities Served' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[var(--orange)] tracking-tighter">{s.val}</div>
                <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 container-px max-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Receive with <span className="text-[var(--orange)]">Confidence</span></h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">Every delivery is tracked, verified, and protected.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{b.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">How It <span className="text-[var(--orange)]">Works</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Sender Books', desc: 'A business or friend books a delivery to your address through Pacelio.' },
              { num: '02', title: 'Get Notified', desc: 'You receive an SMS with tracking number and estimated delivery time.' },
              { num: '03', title: 'Track Live', desc: 'Follow your parcel in real time on the map. See exactly when it will arrive.' },
              { num: '04', title: 'Receive & Rate', desc: 'Sign digitally upon receipt. Rate your delivery experience.' },
            ].map((s, i) => (
              <div key={i} className="text-center bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mx-auto mb-5 text-xl font-black">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--muted)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container-px max-content text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Start <span className="text-[var(--orange)]">Receiving</span> Today</h2>
          <p className="text-[var(--muted)] mb-8">Ask your sender to use Pacelio, or download the app to track all your deliveries in one place.</p>
          <Link href="/download" className="btn btn-primary btn-lg">
            Download the App <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
