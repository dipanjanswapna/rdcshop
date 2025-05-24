export default function Leaderboard() {
  const topStudents = [
    {
      id: 1,
      name: 'রহিম আহমেদ',
      points: 2500,
      badge: 'গোল্ড',
      avatar: '/avatars/student1.jpg',
      institution: 'নটর ডেম কলেজ'
    },
    // ...add more students
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">টপ পারফরমার</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topStudents.map(student => (
            <div key={student.id} className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4">
              <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-semibold">{student.name}</h3>
                <p className="text-gray-600 text-sm">{student.institution}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm ml-1">{student.points} পয়েন্ট</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
