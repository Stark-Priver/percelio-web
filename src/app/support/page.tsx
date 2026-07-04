'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HelpCircle, Search, Mail, MessageCircle, ArrowRight, Phone, BookOpen, LifeBuoy, Clock, ChevronRight, Package, User, Bike, ShieldCheck, Code, Globe } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    icon: Package,
    title: 'Shipments & Tracking',
    desc: 'Track parcels, understand status updates, and manage delivery preferences.',
  },
  {
    icon: User,
    title: 'Account & Billing',
    desc: 'Manage your profile, payment methods, invoices, and subscription plans.',
  },
  {
    icon: Bike,
    title: 'Courier Support',
    desc: 'Earnings, route optimization, vehicle management, and delivery procedures.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Security',
    desc: 'Account security, data privacy, dispute resolution, and fraud prevention.',
  },
  {
    icon: Code,
    title: 'API & Integrations',
    desc: 'Technical documentation, API keys, webhooks, and troubleshooting.',
  },
  {
    icon: Globe,
    title: 'Coverage & Regions',
    desc: 'Serviceable cities, expansion plans, and cross-border delivery options.',
  },
];

const popularArticles = [
  'How to track your parcel in real time',
  'Setting up your courier agent profile',
  'Understanding delivery statuses',
  'How to earn more as a courier',
  'Managing your business dashboard',
  'COD payment process explained',
];

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero Search */}
      <section className="pt-32 pb-16 container-px max-content">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <LifeBuoy className="w-3.5 h-3.5" />
            Support Center
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">How can we <span className="text-[var(--orange)]">help</span>?</h1>
          <p className="text-[var(--muted)] mb-8 text-lg">Search our knowledge base or browse categories below.</p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Search for articles, guides..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border)] focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/10 outline-none transition-all shadow-sm text-[var(--foreground)]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 container-px max-content">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">Browse by <span className="text-[var(--orange)]">Category</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center">
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[var(--foreground)]">{cat.title}</h3>
              </div>
              <p className="text-sm text-[var(--muted)] mb-4">{cat.desc}</p>
              <span className="text-xs font-bold text-[var(--orange)] flex items-center gap-1 group-hover:gap-2 transition-all">
                View Articles <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">Popular <span className="text-[var(--orange)]">Articles</span></h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all cursor-pointer group">
                  <BookOpen className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--orange)] transition-colors" />
                  <span className="text-sm text-[var(--foreground)] font-medium flex-1">{article}</span>
                  <ChevronRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--orange)] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-16 container-px max-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Still need <span className="text-[var(--orange)]">help</span>?</h2>
          <p className="text-[var(--muted)]">Our support team is available 24/7 to assist you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-[var(--bg-soft)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-6">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Live Chat</h3>
            <p className="text-[var(--muted)] text-sm mb-6">Chat with our support team in real time. Average response: under 2 minutes.</p>
            <button className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-3 transition-all mx-auto">
              Start Chat <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="p-8 rounded-3xl bg-[var(--bg-soft)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Email Support</h3>
            <p className="text-[var(--muted)] text-sm mb-6">Send us a message and we will reply within 24 hours. For non-urgent inquiries.</p>
            <Link href="mailto:pacelio@incpritech.com" className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-3 transition-all justify-center no-underline">
              Send Email <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-8 rounded-3xl bg-[var(--bg-soft)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mx-auto mb-6">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Phone Support</h3>
            <p className="text-[var(--muted)] text-sm mb-6">Speak directly to our team. Available Monday to Friday, 8 AM to 6 PM EAT.</p>
            <a href="tel:+255792017591" className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-3 transition-all justify-center no-underline">
              +255 792 017 591 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
