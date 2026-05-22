import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Download from '@/components/Download';
import FAQ from '@/components/FAQ';

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
