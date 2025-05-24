import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </div>
  );
}
