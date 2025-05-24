import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
}
