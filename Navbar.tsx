
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-t-4 border-[#005A8D] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-[#005A8D] p-2 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="hidden md:block border-r border-gray-300 pr-3 mr-1">
                <span className="block text-lg font-bold text-[#005A8D] leading-none">ביטוח לאומי</span>
                <span className="block text-xs text-gray-500 font-medium">לצדך, ברגעים החשובים</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-gray-700 font-medium text-sm md:text-base">
            <a href="#" className="hover:text-[#005A8D] transition-colors">דף הבית</a>
            <a href="#" className="hover:text-[#005A8D] transition-colors font-bold text-[#005A8D]">נפגעי איבה</a>
            <a href="#" className="hover:text-[#005A8D] transition-colors">צור קשר</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
