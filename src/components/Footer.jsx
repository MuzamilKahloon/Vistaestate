import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // GSAP refs
  const footerRef = useRef(null);
  const colRefs = useRef([]);
  const newsletterRef = useRef(null);
  const socialRefs = useRef([]);

  useEffect(() => {
    // Footer entrance
    if (footerRef.current) {
      gsap.fromTo(footerRef.current, { y: 80 }, {
        y: 0, duration: 1.2, ease: 'power4.out', scrollTrigger: { trigger: footerRef.current, start: 'top 90%', end: 'bottom 60%', toggleActions: 'play none none reverse' }
      });
    }
    // Columns entrance
    if (colRefs.current.length) {
      gsap.fromTo(colRefs.current,
        { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)', rotate: -6 },
        {
          opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', rotate: 0, duration: 1.1, stagger: 0.15, ease: 'power4.out', scrollTrigger: { trigger: footerRef.current, start: 'top 95%', end: 'bottom 60%', toggleActions: 'play none none reverse' }
        }
      );
    }
    // Newsletter entrance
    if (newsletterRef.current) {
      gsap.fromTo(newsletterRef.current, { opacity: 0, y: 40, scale: 0.97, filter: 'blur(8px)' }, {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power4.out', scrollTrigger: { trigger: newsletterRef.current, start: 'top 98%', end: 'bottom 60%', toggleActions: 'play none none reverse' }
      });
    }
    // Social links entrance
    if (socialRefs.current.length) {
      gsap.fromTo(socialRefs.current,
        { opacity: 0, y: 30, scale: 0.92, filter: 'blur(8px)' },
        {
          opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.7, stagger: 0.13, ease: 'power4.out', scrollTrigger: { trigger: footerRef.current, start: 'top 99%', end: 'bottom 60%', toggleActions: 'play none none reverse' }
        }
      );
    }
  }, []);

  // Magic hover effect for links, icons, buttons
  const handleFooterHover = (ref) => {
    if (ref) {
      gsap.to(ref, {
        scale: 1.08,
        boxShadow: '0 0 32px 8px #439CB0, 0 8px 32px 0 rgba(67,156,176,0.25)',
        color: '#439CB0',
        filter: 'brightness(1.08) saturate(1.2)',
        duration: 0.32,
        ease: 'power2.out',
      });
    }
  };
  const handleFooterLeave = (ref) => {
    if (ref) {
      gsap.to(ref, {
        scale: 1,
        boxShadow: '',
        color: '',
        filter: 'brightness(1) saturate(1)',
        duration: 0.32,
        ease: 'power2.in',
      });
    }
  };

  const quickLinks = [
    { 
      path: '/', 
      label: 'Home',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      path: '/aboutus', 
      label: 'About Us',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      path: '/properties', 
      label: 'Properties',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      path: '/agents', 
      label: 'Our Agents',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
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
      path: '/contact', 
      label: 'Contact',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const services = [
    { name: 'Residential Sales', icon: '🏡' },
    { name: 'Commercial Properties', icon: '🏢' },
    { name: 'Property Management', icon: '🔧' },
    { name: 'Real Estate Investment', icon: '💰' },
    { name: 'Property Valuation', icon: '📊' },
    { name: 'Luxury Homes', icon: '✨' }
  ];

  const locations = [
    { city: 'New York', count: '1,200+' },
    { city: 'Los Angeles', count: '850+' },
    { city: 'Chicago', count: '650+' },
    { city: 'Miami', count: '400+' },
    { city: 'San Francisco', count: '300+' },
    { city: 'Boston', count: '250+' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8-.568-1.07-.411-2.404.393-3.31.804-.906 2.06-1.297 3.184-.992 1.124.305 2.017 1.198 2.322 2.322.305 1.124-.086 2.38-.992 3.184-.906.804-2.24.961-3.31.393-1.07-.568-1.8-1.719-1.8-3.016 0-1.963 1.592-3.555 3.555-3.555s3.555 1.592 3.555 3.555c0 1.297-.73 2.448-1.8 3.016z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer ref={footerRef} className="bg-[#153E42] text-white relative overflow-hidden" style={{ opacity: 1, filter: 'blur(0px)' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#439CB0]/20 via-transparent to-[#439CB0]/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#439CB0] via-[#439CB0] to-[#439CB0]"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#439CB0]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#439CB0]/5 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div ref={el => colRefs.current[0] = el} className="lg:col-span-1">
              <Link to="/" className="flex items-center group mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#439CB0] to-[#153E42] rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="ml-3 text-2xl font-dosis font-bold text-white group-hover:text-[#439CB0] transition-colors duration-300">
                  <span className="text-[#439CB0]">Vista</span>Estate
                </span>
              </Link>
              
              <p className="text-[#E2E2E2]/80 mb-6 leading-relaxed">
                Your premier destination for luxury real estate. We connect dreams with reality through exceptional properties and personalized service.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center group">
                  <div className="w-8 h-8 bg-[#439CB0]/20 rounded-lg flex items-center justify-center group-hover:bg-[#439CB0]/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-[#E2E2E2]/80 group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-8 h-8 bg-[#439CB0]/20 rounded-lg flex items-center justify-center group-hover:bg-[#439CB0]/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-[#E2E2E2]/80 group-hover:text-white transition-colors duration-300">info@vistaestate.com</span>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-8 h-8 bg-[#439CB0]/20 rounded-lg flex items-center justify-center group-hover:bg-[#439CB0]/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-[#E2E2E2]/80 group-hover:text-white transition-colors duration-300">123 Main Street, New York, NY 10001</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div ref={el => colRefs.current[1] = el}>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#439CB0] to-[#153E42] rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="flex items-center text-[#E2E2E2]/80 hover:text-[#439CB0] transition-all duration-300 group"
                    >
                      <span className="mr-3 text-[#439CB0] group-hover:text-[#439CB0] transition-colors duration-300">
                        {link.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div ref={el => colRefs.current[2] = el}>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#439CB0] to-[#153E42] rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to="#" 
                      className="flex items-center text-[#E2E2E2]/80 hover:text-[#439CB0] transition-all duration-300 group"
                    >
                      <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Locations */}
            <div ref={el => colRefs.current[3] = el}>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Our Locations
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#439CB0] to-[#153E42] rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li key={index}>
                    <Link 
                      to="#" 
                      className="flex items-center justify-between text-[#E2E2E2]/80 hover:text-[#439CB0] transition-all duration-300 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {location.city}
                      </span>
                      <span className="text-xs bg-[#439CB0]/20 px-2 py-1 rounded-full text-[#439CB0] group-hover:bg-[#439CB0]/30 transition-colors duration-300">
                        {location.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div ref={newsletterRef} className="py-8 border-t border-[#439CB0]/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-[#E2E2E2]/80">Get the latest property listings and real estate news.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 bg-[#153E42] border border-[#439CB0]/30 rounded-xl text-white placeholder-[#E2E2E2]/60 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent transition-all duration-300 min-w-[280px]"
              />
              <button
                className="px-6 py-3 bg-[#439CB0] hover:bg-[#153E42] text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
                onMouseEnter={e => handleFooterHover(e.currentTarget)}
                onMouseLeave={e => handleFooterLeave(e.currentTarget)}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="py-6 border-t border-[#439CB0]/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-[#E2E2E2]/60 text-sm mb-4 md:mb-0">
              © {currentYear} VistaEstate. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  ref={el => socialRefs.current[index] = el}
                  href={social.url}
                  className="w-10 h-10 bg-[#153E42] border border-[#439CB0]/30 rounded-xl flex items-center justify-center text-[#E2E2E2]/80 hover:text-white hover:bg-[#439CB0] hover:border-[#439CB0] transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                  onMouseEnter={e => handleFooterHover(e.currentTarget)}
                  onMouseLeave={e => handleFooterLeave(e.currentTarget)}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;