import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserTypes from '@/components/UserTypes';
import Testimonials from '@/components/Testimonials';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-pad">
          <div className="max-content container-px">
            <h1 className="mb-8">About Percelio</h1>
            <p className="text-lg text-[var(--body)] max-w-2xl mb-12">
              Percelio is dedicated to revolutionizing the logistics landscape in East Africa.
              By connecting businesses, couriers, and customers through innovative technology,
              we ensure that every package is delivered with precision and care.
            </p>
          </div>
        </section>
        <UserTypes />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
