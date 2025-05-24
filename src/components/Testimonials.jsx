import { useState, useEffect } from 'react';
import { getTestimonials } from '../firebase';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loadTestimonials = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };
    loadTestimonials();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">শিক্ষার্থীদের মতামত</h2>
        
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} 
                 className={`transition-opacity duration-500 absolute w-full
                            ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                <img src={testimonial.image} alt={testimonial.name} 
                     className="w-20 h-20 rounded-full mx-auto mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
