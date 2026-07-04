'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserTypes from '@/components/UserTypes';
import Testimonials from '@/components/Testimonials';
import { Target, Eye, Heart, MapPin, Users, Award, ArrowRight, Github, Linkedin, Mail, Quote } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    desc: 'Every feature we build starts with a customer problem. We measure success by the smiles we deliver, not just the parcels.',
  },
  {
    icon: Award,
    title: 'Reliability',
    desc: "When you trust us with a delivery, we treat it like our own. 99.5% on-time delivery rate and 24/7 support — we don't cut corners.",
  },
  {
    icon: Users,
    title: 'Community Impact',
    desc: 'We are building technology that creates jobs, empowers small businesses, and makes logistics accessible to every Tanzanian.',
  },
  {
    icon: MapPin,
    title: 'East African Pride',
    desc: 'Built in Mbeya, for Africa. We understand local challenges — from road conditions to mobile money — and design solutions that work here.',
  },
];

const team = [
  {
    img: '/privatus.png',
    name: 'Privatus Cosmas',
    role: 'Co-Founder & Lead Developer',
    bio: 'A passionate software engineer focused on building scalable logistics technology for East Africa. Leads platform architecture, backend development, and mobile engineering.',
    quote: 'Logistics is the backbone of trade. We are building the digital spine East Africa deserves.',
  },
  {
    img: '/peter.png',
    name: 'Peter Ntonda',
    role: 'Co-Founder & Product Lead',
    bio: 'Product strategist and user experience advocate dedicated to making delivery simple for every Tanzanian. Drives product vision, design, and business development.',
    quote: 'Good technology is invisible. Great technology makes the impossible feel effortless.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 container-px max-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
                About Us
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                Transforming Logistics in <span className="text-[var(--orange)]">East Africa</span>
              </h1>
              <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
                Pacelio was born in Mbeya, Tanzania, with a simple mission: make delivery as easy as sending a text message.
                We connect businesses, couriers, and customers on one platform — bringing transparency, speed, and trust to East African logistics.
              </p>
              <div className="flex gap-4">
                <Link href="/download" className="btn btn-primary btn-lg">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[var(--orange-tint)] to-transparent opacity-40 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-[3rem] p-8 md:p-12 shadow-lifted">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: '3,000+', label: 'Active Users' },
                    { val: '50,000+', label: 'Parcels Delivered' },
                    { val: '98%', label: 'Satisfaction Rate' },
                    { val: '12', label: 'Cities in Tanzania' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-[var(--orange)] tracking-tighter">{s.val}</div>
                      <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider mt-2">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[2rem] p-10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Our Mission</h3>
                <p className="text-[var(--muted)] leading-relaxed text-base">
                  To democratize access to reliable, affordable delivery services across East Africa.
                  We empower businesses of all sizes to ship with confidence, create earning opportunities for couriers,
                  and give customers the visibility they deserve — all through a single, intuitive platform.
                </p>
              </div>
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[2rem] p-10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Our Vision</h3>
                <p className="text-[var(--muted)] leading-relaxed text-base">
                  To become the most trusted logistics technology platform in Africa — where every business,
                  regardless of size, can access world-class delivery infrastructure, and every courier can build a sustainable career.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 container-px max-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-8">Our <span className="text-[var(--orange)]">Story</span></h2>
            <div className="space-y-6 text-[var(--muted)] leading-relaxed text-base">
              <p>
                Pacelio started as a final-year diploma project at <strong className="text-[var(--foreground)]">Mbeya University of Science and Technology</strong>.
                As computer science students, Privatus Cosmas and Peter Ntonda saw firsthand how local businesses struggled with deliveries —
                relying on phone calls, paper records, and informal courier networks with no tracking, no accountability, and no way to compare options.
              </p>
              <p>
                Inspired by the potential of modern cross-platform technology, they set out to build a solution that could work for everyone —
                from a small business owner in Mbeya sending documents, to a logistics company managing a fleet in Dar es Salaam.
              </p>
              <p>
                What started as a classroom project quickly grew into a fully functional platform serving real users.
                Today, Pacelio connects thousands of users across Tanzania, with plans to expand throughout East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="max-content container-px">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">What We <span className="text-[var(--orange)]">Believe</span></h2>
              <p className="text-[var(--muted)] max-w-xl mx-auto">Our values shape every decision we make and every feature we build.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{v.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 container-px max-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Meet the <span className="text-[var(--orange)]">Team</span></h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">Built with passion by students-turned-founders at Mbeya University of Science and Technology.</p>
          </div>
          <div className="flex justify-center gap-10 flex-wrap">
            {team.map((t, i) => (
              <div key={i} className="group relative w-80">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-[var(--orange)]/10 hover:border-[var(--orange)]/30 hover:bg-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Quote */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-start gap-2">
                        <Quote className="w-4 h-4 text-[var(--orange)] flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-white/90 leading-relaxed italic line-clamp-2">{t.quote}</p>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--orange)] transition-colors">{t.name}</h3>
                    <p className="text-sm text-[var(--orange)] font-medium mt-1">{t.role}</p>

                    {/* Expanded on hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="overflow-hidden">
                        <div className="pt-4 border-t border-white/10 mt-4 min-h-0">
                          <p className="text-sm text-[var(--body)] leading-relaxed">{t.bio}</p>
                          <div className="flex gap-3 mt-5">
                            <a href="#" onClick={e => e.preventDefault()} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--orange)]/20 hover:text-[var(--orange)] focus-visible:bg-[var(--orange)]/20 focus-visible:text-[var(--orange)] focus-visible:outline-2 focus-visible:outline-[var(--orange)] transition-all no-underline text-[var(--muted)]" aria-label={`${t.name} LinkedIn`}>
                              <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" onClick={e => e.preventDefault()} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--orange)]/20 hover:text-[var(--orange)] focus-visible:bg-[var(--orange)]/20 focus-visible:text-[var(--orange)] focus-visible:outline-2 focus-visible:outline-[var(--orange)] transition-all no-underline text-[var(--muted)]" aria-label={`${t.name} GitHub`}>
                              <Github className="w-4 h-4" />
                            </a>
                            <a href="#" onClick={e => e.preventDefault()} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--orange)]/20 hover:text-[var(--orange)] focus-visible:bg-[var(--orange)]/20 focus-visible:text-[var(--orange)] focus-visible:outline-2 focus-visible:outline-[var(--orange)] transition-all no-underline text-[var(--muted)]" aria-label={`${t.name} Email`}>
                              <Mail className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <UserTypes />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
