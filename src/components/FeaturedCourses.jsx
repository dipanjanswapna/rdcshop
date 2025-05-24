export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "HSC পদার্থবিজ্ঞান",
      teacher: "রহিম আহমেদ",
      students: "২.৫k+",
      rating: 4.8,
      image: "/course1.jpg"
    },
    {
      id: 2,
      title: "ইংরেজি স্পোকেন",
      teacher: "সারা রহমান",
      students: "১.৮k+",
      rating: 4.9,
      image: "/course2.jpg"
    },
    {
      id: 3,
      title: "ওয়েব ডেভেলপমেন্ট",
      teacher: "করিম হাসান",
      students: "৩k+",
      rating: 4.7,
      image: "/course3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">জনপ্রিয় কোর্সসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">শিক্ষক: {course.teacher}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{course.rating}</span>
                  </div>
                  <span className="text-gray-600">{course.students} শিক্ষার্থী</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
