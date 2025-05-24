export default function Features() {
  const features = [
    {
      id: 1,
      title: 'লাইভ ক্লাস',
      description: 'অভিজ্ঞ শিক্ষকদের সাথে সরাসরি ক্লাস করুন',
      icon: '🎥'
    },
    {
      id: 2,
      title: 'স্টাডি ম্যাটেরিয়ালস',
      description: 'সব বিষয়ের নোট ও প্র্যাকটিস শীট',
      icon: '📚'
    },
    {
      id: 3,
      title: 'মডেল টেস্ট',
      description: 'নিয়মিত পরীক্ষা দিয়ে নিজেকে যাচাই করুন',
      icon: '✍️'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">আমাদের সুবিধাসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
