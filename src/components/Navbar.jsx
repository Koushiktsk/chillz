import React, { useState } from 'react';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themeBackgrounds = {
    strawberry: 'bg-gradient-to-r from-pink-500 to-pink-400',
    blueberry: 'bg-gradient-to-r from-blue-500 to-blue-400',
    chocolate: 'bg-gradient-to-r from-yellow-900 to-yellow-700',
    pista: 'bg-gradient-to-r from-green-500 to-green-300'
  };

  return (
    <nav className={`w-full ${themeBackgrounds[theme]} text-white px-6 py-4 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="font-bold text-2xl tracking-wide mt-6 pl-4">
  Chillz
</div>


        {/* Hamburger icon  */}
        <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>

        {/* header Items */}
        <ul className={`lg:flex lg:space-x-8 lg:items-center font-semibold text-lg 
                        ${isOpen ? 'block mt-4' : 'hidden'} lg:mt-0`}>
          <li className="cursor-pointer hover:text-gray-200 py-2 lg:py-0 mt-3">Home</li>
          <li className="cursor-pointer hover:text-gray-200 py-2 lg:py-0 mt-3">Shop</li>
          <li className="cursor-pointer hover:text-gray-200 py-2 lg:py-0 mt-3">Delivery</li>
          <li className="cursor-pointer hover:text-gray-200 py-2 lg:py-0 mt-3">Contact</li>
          <li>
            <button className="border border-white px-4 py-2 rounded-xl text-white font-semibold hover:bg-white hover:text-red-500 transition-all duration-300 mt-2 lg:mt-3">
              Order Your Ice-cream
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;








