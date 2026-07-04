'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, ArrowRight, MapPin, Heart, Zap, Users, Globe, Coffee, GraduationCap, Laptop } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  { icon: Laptop, title: 'Remote Friendly', desc: 'Work from anywhere in Tanzania. We believe in output, not hours at a desk.' },
  { icon: Heart, title: 'Health Coverage', desc: 'Comprehensive medical insurance for you and your family.' },
  { icon: Zap, title: 'Growth Budget', desc: 'Annual learning allowance for courses, conferences, and certifications.' },
  { icon: Coffee, title: 'Team Retreats', desc: 'Quarterly team gatherings in Mbeya. Great food, great company, great ideas.' },
  { icon: GraduationCap, title: 'Student Friendly', desc: 'Flexible hours for students. We started as students — we understand.' },
  { icon: Globe, title: 'Impactful Work', desc: 'Build technology that transforms logistics for millions of East Africans.' },
];

const jobs = [
  { title: 'Senior Backend Engineer', team: 'Engineering', location: 'Mbeya / Remote', type: 'Full-time' },
  { title: 'Flutter Mobile Developer', team: 'Engineering', location: 'Mbeya / Remote', type: 'Full-time' },
  { title: 'Product Designer', team: 'Product', location: 'Remote (TZ/KE)', type: 'Full-time' },
  { title: 'Logistics Operations Manager', team: 'Operations', location: 'Mbeya', type: 'Full-time' },
  { title: 'Customer Support Lead', team: 'Support', location: 'Mbeya', type: 'Full-time' },
  { title: 'Marketing & Communications', team: 'Marketing', location: 'Dar es Salaam', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
      <section className="pt-32 pb-16 container-px max-content">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Briefcase className="w-3.5 h-3.5" />
            Careers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            Join Us in Building the <span className="text-[var(--orange)]">Future</span> of Logistics
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl">
            We are a small, ambitious team building technology that makes a real difference.
            If you care about craftsmanship, love solving hard problems, and want your work to matter — come join us.
          </p>
          <Link href="#openings" className="btn btn-primary btn-lg">
            View Openings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Why <span className="text-[var(--orange)]">Pacelio</span>?</h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">More than a job — a chance to shape an industry.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{b.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="py-16 container-px max-content">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Open <span className="text-[var(--orange)]">Positions</span></h2>
        <p className="text-[var(--muted)] mb-10">We are growing. If you do not see a role that fits, send us your CV anyway.</p>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer">
              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{job.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                  <span className="font-medium text-[var(--orange)]">{job.team}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                  <span className="px-2 py-0.5 rounded-full bg-[var(--orange-light)] text-[10px] font-bold text-[var(--orange)] uppercase">{job.type}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--orange)]/10 flex items-center justify-center text-[var(--orange)] group-hover:bg-[var(--orange)] group-hover:text-white transition-all flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Do not see a fit?</h2>
            <p className="text-[var(--muted)] mb-8">We are always looking for talented people. Send us your resume and we will keep you in mind.</p>
            <Link href="mailto:careers@incpritech.com" className="btn btn-primary btn-lg">
              Send Your CV <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
