export default function EventCalendar() {
  const events = [
    {
      id: 1,
      title: 'HSC Physics Live Class',
      date: 'May 26, 2025',
      time: '8:00 PM',
      instructor: 'Dr. Rahman',
      type: 'webinar'
    },
    // ...add more events
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">আসন্ন ক্লাস ও ইভেন্টস</h2>
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg p-6 shadow-md flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-gray-600">{event.date} - {event.time}</p>
                <p className="text-sm text-gray-500">শিক্ষক: {event.instructor}</p>
              </div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
                রেজিস্টার করুন
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
