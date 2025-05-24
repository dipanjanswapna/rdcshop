export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-r from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Red Dot Classroom – শেখা হবে সহজে!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              বাংলাদেশের সেরা অনলাইন শিক্ষার প্ল্যাটফর্ম
            </p>
            <button className="bg-red-600 text-white text-lg px-8 py-3 rounded-lg 
                           hover:bg-red-700 transition duration-300">
              এখনই শুরু করো
            </button>
          </div>
          
          {/* Right Image */}
          <div className="mt-10 md:mt-0 md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
              alt="Education" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
