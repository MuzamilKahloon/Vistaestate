import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
              <span className="text-amber-600">Vista</span>Estate
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium flex items-center transition-colors relative group"
                >
                  Properties
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <Link 
                      to="/properties" 
                      className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                    >
                      All Properties
                    </Link>
                    <Link 
                      to="/properties?type=house" 
                      className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                    >
                      Houses
                    </Link>
                    <Link 
                      to="/properties?type=apartment" 
                      className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                    >
                      Apartments
                    </Link>
                    <Link 
                      to="/properties?type=villa" 
                      className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                    >
                      Villas
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                to="/agents" 
                className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors relative group"
              >
                Our Agents
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            <div className="flex items-center space-x-4 ml-6">
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/submit-property" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Submit Property
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t border-gray-100`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-3 text-gray-700 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          
          <div className="border-b border-gray-100">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center px-3 py-3 text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Properties
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="pl-4 pb-2">
                <Link 
                  to="/properties" 
                  className="block px-3 py-2 text-gray-600 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Properties
                </Link>
                <Link 
                  to="/properties?type=house" 
                  className="block px-3 py-2 text-gray-600 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Houses
                </Link>
                <Link 
                  to="/properties?type=apartment" 
                  className="block px-3 py-2 text-gray-600 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apartments
                </Link>
                <Link 
                  to="/properties?type=villa" 
                  className="block px-3 py-2 text-gray-600 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Villas
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/aboutus"
            className="block px-3 py-3 text-gray-700 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          
          <Link
            to="/blog"
            className="block px-3 py-3 text-gray-700 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          
          <Link
            to="/agents"
            className="block px-3 py-3 text-gray-700 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Agents
          </Link>
          
          <Link
            to="/contact"
            className="block px-3 py-3 text-gray-700 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        
        <div className="px-4 pt-3 pb-4 border-t border-gray-100">
          <Link
            to="/login"
            className="block w-full px-4 py-2.5 text-center text-gray-700 hover:text-amber-600 font-medium transition-colors mb-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/submit-property"
            className="block w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Submit Property
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;