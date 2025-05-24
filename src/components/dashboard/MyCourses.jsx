export default function MyCourses() {
  const courses = [
    {
      id: 1,
      title: 'HSC Physics 1st Paper',
      progress: 60,
      lastAccessed: '2 days ago',
      thumbnail: '/courses/physics.jpg'
    },
    // Add more courses...
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">আমার কোর্সসমূহ</h2>
      <div className="space-y-4">
        {courses.map(course => (
          <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <img src={course.thumbnail} alt={course.title} className="w-24 h-24 rounded-lg object-cover" />
            <div className="flex-1">
              <h3 className="font-semibold">{course.title}</h3>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-600 rounded-full h-2" 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">সর্বশেষ দেখেছেন: {course.lastAccessed}</p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
              কোর্সে যান
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
