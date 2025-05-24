import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClassDropdownOpen, setClassDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.svg" alt="Red Dot Classroom" className="h-8 w-auto" />
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-500"
              />
              <div className="absolute left-3 top-2.5">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Class Dropdown */}
            <div className="relative">
              <button
                onClick={() => setClassDropdownOpen(!isClassDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2"
              >
                <span>ক্লাস ৬-১২</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isClassDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ক্লাস ৬</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ক্লাস ৭</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ক্লাস ৮</a>
                  {/* Add more class options */}
                </div>
              )}
            </div>
            <a href="/skills" className="text-gray-700 hover:text-red-600 px-3 py-2">স্কিলস</a>
            <a href="/admission" className="text-gray-700 hover:text-red-600 px-3 py-2">ভর্তি পরীক্ষা</a>
            <a href="/online-batch" className="text-gray-700 hover:text-red-600 px-3 py-2">অনলাইন ব্যাচ</a>
            <a href="/english" className="text-gray-700 hover:text-red-600 px-3 py-2">ইংলিশ</a>
            <button className="text-red-600 font-medium">আরো</button>
            
            {/* Language and Login */}
            <div className="flex items-center space-x-4 ml-4">
              <button className="text-sm font-medium">EN</button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                লগ-ইন
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Add mobile search */}
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম"
                className="w-full px-4 py-2 rounded-lg border border-gray-200"
              />
            </div>
            <a href="/class" className="block px-3 py-2 text-gray-700 hover:text-red-600">ক্লাস ৬-১২</a>
            <a href="/skills" className="block px-3 py-2 text-gray-700 hover:text-red-600">স্কিলস</a>
            <a href="/admission" className="block px-3 py-2 text-gray-700 hover:text-red-600">ভর্তি পরীক্ষা</a>
            <a href="/online-batch" className="block px-3 py-2 text-gray-700 hover:text-red-600">অনলাইন ব্যাচ</a>
            <a href="/english" className="block px-3 py-2 text-gray-700 hover:text-red-600">ইংলিশ</a>
            <button className="block w-full text-left px-3 py-2 text-gray-700">আরো</button>
            <button className="w-full bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600">
              লগ-ইন
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
