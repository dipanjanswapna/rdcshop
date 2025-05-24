import { useState, useEffect } from 'react';
import { getTestimonials } from '../firebase';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'রহিম আহমেদ',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      text: 'Red Dot Classroom আমার HSC পরীক্ষার প্রস্তুতিতে খুব সাহায্য করেছে।',
      institution: 'নটর ডেম কলেজ'
    },
    {
      id: 2,
      name: 'ফারিয়া ইসলাম',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      text: 'অনলাইনে পড়াশোনার সেরা প্ল্যাটফর্ম।',
      institution: 'ভিকারুননিসা নূন স্কুল'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">শিক্ষার্থীদের মতামত</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(item => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.institution}</p>
                </div>
              </div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
