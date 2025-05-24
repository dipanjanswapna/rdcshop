export default function AchievementBadges() {
  const badges = [
    {
      id: 1,
      name: 'গোল্ড ব্যাজ',
      description: 'HSC টেস্টে ৯০%+ স্কোর',
      icon: '🏅',
      color: 'bg-yellow-100'
    },
    {
      id: 2,
      name: 'স্ট্রিক কিং',
      description: '৩০ দিন ধারাবাহিক লার্নিং',
      icon: '⚡',
      color: 'bg-blue-100'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">অর্জন করুন ব্যাজ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map(badge => (
            <div key={badge.id} 
                 className={`${badge.color} p-4 rounded-lg text-center hover:shadow-lg transition`}>
              <span className="text-3xl">{badge.icon}</span>
              <h3 className="font-semibold mt-2">{badge.name}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
