'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-32 pb-20 container-px max-content">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Briefcase className="w-3.5 h-3.5" />
            Hiring
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Join the Revolution</h1>
          <p className="text-lg text-[var(--muted)] mb-12">
            We're looking for passionate individuals to help us build the future of logistics in East Africa.
            Come work with a team that values innovation, speed, and customer obsession.
          </p>

          <div className="space-y-4">
            {[
              { title: 'Senior Backend Engineer', team: 'Engineering', location: 'Dar es Salaam' },
              { title: 'Product Designer', team: 'Product', location: 'Remote (TZ/KE)' },
              { title: 'Logistics Operations Manager', team: 'Operations', location: 'Tanzania' }
            ].map((job) => (
              <div key={job.title} className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-[var(--orange)] transition-colors cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                    <span className="font-medium text-[var(--orange)]">{job.team}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--orange)]/10 flex items-center justify-center text-[var(--orange)] group-hover:bg-[var(--orange)] group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
