export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: 'কামরুল হাসান',
      achievement: 'বুয়েট CSE',
      story: 'রেড ডট ক্লাসরুমের সাথে নিয়মিত পড়াশোনা করে বুয়েটে ভর্তি হতে পেরেছি।',
      image: '/students/kamrul.jpg',
      rank: 235
    },
    {
      id: 2,
      name: 'তাসনিম জাহান',
      achievement: 'ঢাকা মেডিকেল',
      story: 'অনলাইন ক্লাসগুলো আমার মেডিকেল ভর্তি পরীক্ষার প্রস্তুতিতে খুবই সহায়ক ছিল।',
      image: '/students/tasnim.jpg',
      rank: 121
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">সাফল্যের গল্প</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map(story => (
            <div key={story.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{story.name}</h3>
                  <p className="text-red-600">{story.achievement}</p>
                </div>
              </div>
              <p className="text-gray-600">{story.story}</p>
              <div className="mt-4 text-sm text-gray-500">র‍্যাংক: {story.rank}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
