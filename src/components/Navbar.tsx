
import { useState } from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-display font-bold text-gray-900 tracking-tight">
              Inverra
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="font-medium text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors">
                Home
              </a>
              <a href="#services" className="font-medium text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors">
                Services
              </a>
              <a href="#about" className="font-medium text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors">
                About
              </a>
              <a href="#portfolio" className="font-medium text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="font-medium text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-400" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a href="#home" className="font-medium text-gray-700 hover:text-blue-600 block px-3 py-2 text-base">
              Home
            </a>
            <a href="#services" className="font-medium text-gray-700 hover:text-blue-600 block px-3 py-2 text-base">
              Services
            </a>
            <a href="#about" className="font-medium text-gray-700 hover:text-blue-600 block px-3 py-2 text-base">
              About
            </a>
            <a href="#portfolio" className="font-medium text-gray-700 hover:text-blue-600 block px-3 py-2 text-base">
              Portfolio
            </a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-blue-600 block px-3 py-2 text-base">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
