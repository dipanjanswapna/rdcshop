export default function TopCourses() {
  const courses = [
    {
      id: 1,
      title: 'HSC Physics 1st Paper',
      instructor: 'Dr. Rahman',
      price: '৳১২৯৯',
      rating: 4.9,
      students: '২.৫k+',
      image: '/courses/physics.jpg'
    },
    // ...more courses
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">জনপ্রিয় কোর্সসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">শিক্ষক: {course.instructor}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-red-600">{course.price}</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                    এনরোল করুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
