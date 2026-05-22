'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UserTypes from '@/components/UserTypes';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Download from '@/components/Download';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <Hero />
        <UserTypes />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
