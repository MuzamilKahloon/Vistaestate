import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import logo from '../../public/images/logo1.jpg'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  // GSAP refs
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navLinkRefs = useRef([]);

  useEffect(() => {
    // Navbar entrance
    if (navbarRef.current) {
      gsap.fromTo(navbarRef.current, { opacity: 0, y: -40, filter: 'blur(8px)' }, {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out', delay: 0.1
      });
    }
    // Logo entrance
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, { opacity: 0, scale: 0.8, filter: 'blur(8px)' }, {
        opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power4.out', delay: 0.2
      });
    }
    // Nav links entrance
    if (navLinkRefs.current.length) {
      gsap.fromTo(navLinkRefs.current,
        { opacity: 0, y: 30, scale: 0.95, filter: 'blur(8px)' },
        {
          opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.7, stagger: 0.11, ease: 'power4.out', delay: 0.3
        }
      );
    }
  }, [location.pathname]);

  // GSAP hover effect for nav links
  const handleNavHover = (idx) => {
    if (navLinkRefs.current[idx]) {
      gsap.to(navLinkRefs.current[idx], {
        scale: 1.08,
        boxShadow: '0 0 16px 2px #439CB0, 0 2px 8px 0 rgba(67,156,176,0.18)',
        color: '#439CB0',
        filter: 'brightness(1.08) saturate(1.2)',
        duration: 0.28,
        ease: 'power2.out',
      });
    }
  };
  const handleNavLeave = (idx) => {
    if (navLinkRefs.current[idx]) {
      gsap.to(navLinkRefs.current[idx], {
        scale: 1,
        boxShadow: '',
        color: '',
        filter: 'brightness(1) saturate(1)',
        duration: 0.28,
        ease: 'power2.in',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDashboardOpen(false);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  }, [location.pathname]);

  const navItems = [
    { 
      path: '/', 
      label: 'Home',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  const aboutItems = [
    { 
      path: '/aboutus', 
      label: 'About Us',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      path: '/blog', 
      label: 'Blog',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    { 
      path: '/agents', 
      label: 'Broker',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      path: '/worker', 
      label: 'Agents',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    // { 
    //   path: '/contact', 
    //   label: 'Contact',
    //   icon: (
    //     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    //     </svg>
    //   )
    // }
  ];

  const dashboardItems = [
    {
      path: "/leadpooldash",
      label: "Lead Pool Manager",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      path: "/agentdash",
      label: "Broker",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      path: "/workerdash",
      label: "Agent",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const servicesItems = [
    {
      path: "/area",
      label: "Look up your areas",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      path: "/lead-generation",
      label: "Lead generation page",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      path: "/marketing",
      label: "Marketing feature",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      path: "/web-development",
      label: "Wishable Web development",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <nav ref={navbarRef} className={`fixed w-full top-0 z-50 transition-all duration-300 bg-[#FFFFFF] border-b border-[#439CB0]/10 ${isScrolled ? 'shadow-lg py-2' : 'py-4'}`} style={{ boxShadow: isScrolled ? '0 8px 32px 0 rgba(67,156,176,0.10)' : '0 2px 8px 0 rgba(67,156,176,0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with hover effect */}
          <Link to="/" className="flex items-center mt-2 ">
            <img 
              src={logo} 
              alt="VistaEstate Logo" 
              className="h-10 w-auto ml-5 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_2px_#439CB0,0_2px_8px_0_rgba(67,156,176,0.18)] group-hover:brightness-110"
              style={{ borderRadius: '0.5rem' }}
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item, idx) => (
                <Link
                  key={item.path}
                  to={item.path}
                  ref={el => navLinkRefs.current[idx] = el}
                  className={`group relative px-3 py-2 font-medium ${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#153E42] hover:text-[#439CB0]'} transition-colors`}
                  onMouseEnter={() => handleNavHover(idx)}
                  onMouseLeave={() => handleNavLeave(idx)}
                >
                  <div className="flex items-center space-x-2">
                    <span className={`${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#439CB0]/60 group-hover:text-[#439CB0]'} transition-colors`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#439CB0] transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}

              {/* About Us Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="group flex items-center px-3 py-2 font-medium text-[#153E42] hover:text-[#439CB0] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#439CB0]/60 group-hover:text-[#439CB0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>About Us</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439CB0] transition-all duration-300 group-hover:w-full"></span>
                </button>

                {isAboutOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center px-4 py-2 ${location.pathname === item.path ? 'bg-[#439CB0]/10 text-[#439CB0]' : 'text-[#153E42] hover:bg-[#439CB0]/10 hover:text-[#439CB0]'} transition-colors`}
                        onClick={() => setIsAboutOpen(false)}
                      >
                        <span className={`${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#439CB0]/60'} mr-3`}>{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="group flex items-center px-3 py-2 font-medium text-[#153E42] hover:text-[#439CB0] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#439CB0]/60 group-hover:text-[#439CB0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <span>Services</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439CB0] transition-all duration-300 group-hover:w-full"></span>
                </button>

                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center px-4 py-2 ${location.pathname === item.path ? 'bg-[#439CB0]/10 text-[#439CB0]' : 'text-[#153E42] hover:bg-[#439CB0]/10 hover:text-[#439CB0]'} transition-colors`}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className={`${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#439CB0]/60'} mr-3`}>{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Dashboard Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                  className="group flex items-center px-3 py-2 font-medium text-[#153E42] hover:text-[#439CB0] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#439CB0]/60 group-hover:text-[#439CB0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span>Dashboards</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isDashboardOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439CB0] transition-all duration-300 group-hover:w-full"></span>
                </button>

                {isDashboardOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    {dashboardItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center px-4 py-2 ${location.pathname === item.path ? 'bg-[#439CB0]/10 text-[#439CB0]' : 'text-[#153E42] hover:bg-[#439CB0]/10 hover:text-[#439CB0]'} transition-colors`}
                        onClick={() => setIsDashboardOpen(false)}
                      >
                        <span className={`${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#439CB0]/60'} mr-3`}>{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="ml-6">
              <Link 
                to="/login" 
                className="inline-flex items-center bg-[#439CB0] hover:bg-[#52B7D3] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#153E42] hover:text-[#439CB0] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-xl`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center px-4 py-3 ${location.pathname === item.path ? 'text-[#439CB0] bg-[#439CB0]/10' : 'text-[#153E42] hover:text-[#439CB0]'} font-medium transition-colors rounded-lg hover:bg-[#439CB0]/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={`${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#439CB0]/60 group-hover:text-[#439CB0]'} mr-3 transition-colors`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}

          {/* Mobile About Us Dropdown */}
          <div className="px-4 py-3">
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center justify-between w-full text-[#153E42] hover:text-[#439CB0] font-medium"
            >
              <div className="flex items-center">
                <svg className="w-4 h-4 text-[#439CB0]/60 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>About Us</span>
              </div>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isAboutOpen && (
              <div className="mt-2 pl-8 space-y-2">
                {aboutItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-2 ${location.pathname === item.path ? 'text-[#439CB0] bg-[#439CB0]/10' : 'text-[#153E42] hover:text-[#439CB0]'} rounded-lg hover:bg-[#439CB0]/10`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpen(false);
                    }}
                  >
                    <span className={`${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#439CB0]/60'} mr-3`}>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Dropdown */}
          <div className="px-4 py-3">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full text-[#153E42] hover:text-[#439CB0] font-medium"
            >
              <div className="flex items-center">
                <svg className="w-4 h-4 text-[#439CB0]/60 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <span>Services</span>
              </div>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isServicesOpen && (
              <div className="mt-2 pl-8 space-y-2">
                {servicesItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-2 ${location.pathname === item.path ? 'text-[#439CB0] bg-[#439CB0]/10' : 'text-[#153E42] hover:text-[#439CB0]'} rounded-lg hover:bg-[#439CB0]/10`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsServicesOpen(false);
                    }}
                  >
                    <span className={`${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#439CB0]/60'} mr-3`}>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Dashboard Dropdown */}
          <div className="px-4 py-3">
            <button
              onClick={() => setIsDashboardOpen(!isDashboardOpen)}
              className="flex items-center justify-between w-full text-[#153E42] hover:text-[#439CB0] font-medium"
            >
              <div className="flex items-center">
                <svg className="w-4 h-4 text-[#439CB0]/60 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Dashboards</span>
              </div>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isDashboardOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDashboardOpen && (
              <div className="mt-2 pl-8 space-y-2">
                {dashboardItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-2 ${location.pathname === item.path ? 'text-[#439CB0] bg-[#439CB0]/10' : 'text-[#153E42] hover:text-[#439CB0]'} rounded-lg hover:bg-[#439CB0]/10`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDashboardOpen(false);
                    }}
                  >
                    <span className={`${location.pathname === item.path ? 'text-[#439CB0]' : 'text-[#439CB0]/60'} mr-3`}>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="px-4 pb-4">
          <Link
            to="/login"
            className="flex items-center justify-center px-4 py-3 bg-[#439CB0] text-white font-medium rounded-lg hover:bg-[#52B7D3] transition-colors shadow-md hover:shadow-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;