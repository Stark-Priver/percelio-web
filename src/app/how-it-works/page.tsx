import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
