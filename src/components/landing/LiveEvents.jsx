export default function LiveEvents() {
  const events = [
    {
      id: 1,
      title: 'ক্যারিয়ার গাইডলাইন',
      time: 'আজ রাত ৮:০০',
      speaker: 'ড. রহমান',
      viewers: 1250,
      thumbnail: '/events/career.jpg'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">লাইভ ইভেন্টস</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative">
                <img src={event.thumbnail} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded">
                  LIVE
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.time}</p>
                <p className="text-sm text-gray-500">স্পিকার: {event.speaker}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm">{event.viewers} জন দেখছেন</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded">
                    জয়েন করুন
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
