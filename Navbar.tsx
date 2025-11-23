import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-t-4 border-[#005ABD] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">

            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-3">

              {/* כאן הלוגו החדש */}
              <img
                src="https://www.btl.gov.il/_layouts/15/images/btl.website/new/sprite/logo.png"
                alt="BTL Logo"
                style={{ height: "45px" }}
              />

              <div className="hidden md:block border-r border-gray-300 pr-3 mr-1">
                <span className="block text-lg font-bold text-[#005ABD] leading-none">שירות לקוחות</span>
                <span className="block text-xs text-gray-500 font-medium">
                  אגף ה..., המוסד לביטוח לאומי
                </span>
              </div>

            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-700 font-medium text-sm md:text-base">

            <a href="#" className="hover:text-[#005ABD] transition-colors duration-200">
              מידע כללי
            </a>

            <a href="#" className="hover:text-[#005ABD] transition-colors duration-200">
              זכויות וסיוע
            </a>

            <a href="#" className="hover:text-[#005ABD] transition-colors duration-200">
              צור קשר
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};
