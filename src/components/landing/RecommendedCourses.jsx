export default function RecommendedCourses() {
  const recommendations = [
    {
      id: 1,
      title: 'HSC ফিজিক্স অধ্যায় ১',
      match: '95%',
      thumbnail: '/courses/physics-1.jpg',
      price: '৳১২৯৯'
    }
    // Add more recommendations
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">আপনার জন্য নির্বাচিত কোর্স</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map(course => (
            <div key={course.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{course.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {course.match} ম্যাচ
                  </span>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-4">
                  এনরোল করুন - {course.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
