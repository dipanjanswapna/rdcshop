import { useState, useEffect } from 'react';
import { getHeroContent } from '../firebase';

export default function Hero() {
  const [heroContent, setHeroContent] = useState({
    title: "Red Dot Classroom – শেখা হবে সহজে!",
    subtitle: "বাংলাদেশের সেরা অনলাইন শিক্ষার প্ল্যাটফর্ম",
    ctaText: "এখনই শুরু করো"
  });

  useEffect(() => {
    const loadHeroContent = async () => {
      const content = await getHeroContent();
      if (content) setHeroContent(content);
    };
    loadHeroContent();
  }, []);

  return (
    <div className="pt-16 bg-gradient-to-r from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {heroContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {heroContent.subtitle}
            </p>
            <button className="bg-red-600 text-white text-lg px-8 py-3 rounded-lg 
                           hover:bg-red-700 transition duration-300">
              {heroContent.ctaText}
            </button>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <img src="/hero-image.svg" alt="Education" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
