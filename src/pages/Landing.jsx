import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
}
