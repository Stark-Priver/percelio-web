import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Features from '@/components/Features';

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Features />
      </main>
      <Footer />
    </>
  );
}
