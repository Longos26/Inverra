import { useState } from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div
              className="text-2xl font-black text-black tracking-tighter uppercase"
              style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              Inverra
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}
                className="font-semibold text-black hover:text-gray-500 px-3 py-2 text-sm transition-colors tracking-wide uppercase"
                style={{
                  fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="font-semibold text-black hover:text-gray-500 px-3 py-2 text-sm transition-colors tracking-wide uppercase"
                style={{
                  fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="font-semibold text-black hover:text-gray-500 px-3 py-2 text-sm transition-colors tracking-wide uppercase"
                style={{
                  fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                About
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleSmoothScroll(e, "portfolio")}
                className="font-semibold text-black hover:text-gray-500 px-3 py-2 text-sm transition-colors tracking-wide uppercase"
                style={{
                  fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="font-semibold text-black hover:text-gray-500 px-3 py-2 text-sm transition-colors tracking-wide uppercase"
                style={{
                  fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="font-semibold text-black hover:text-gray-500 block px-3 py-2 text-base tracking-wide uppercase"
              style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: "0.05em",
                fontWeight: 600,
              }}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="font-semibold text-black hover:text-gray-500 block px-3 py-2 text-base tracking-wide uppercase"
              style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: "0.05em",
                fontWeight: 600,
              }}
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="font-semibold text-black hover:text-gray-500 block px-3 py-2 text-base tracking-wide uppercase"
              style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: "0.05em",
                fontWeight: 600,
              }}
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "portfolio")}
              className="font-semibold text-black hover:text-gray-500 block px-3 py-2 text-base tracking-wide uppercase"
              style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: "0.05em",
                fontWeight: 600,
              }}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="font-semibold text-black hover:text-gray-500 block px-3 py-2 text-base tracking-wide uppercase"
              style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: "0.05em",
                fontWeight: 600,
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;