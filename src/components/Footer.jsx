export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Red Dot Classroom</h3>
            <p className="text-gray-400">বাংলাদেশের সেরা অনলাইন শিক্ষার প্ল্যাটফর্ম</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">যোগাযোগ</h3>
            <p className="text-gray-400">support@reddotclassroom.com</p>
            <p className="text-gray-400">+880 1234567890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">কুইক লিংক</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">আমাদের সম্পর্কে</a></li>
              <li><a href="/courses" className="text-gray-400 hover:text-white">কোর্সসমূহ</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">যোগাযোগ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">সোশ্যাল মিডিয়া</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
