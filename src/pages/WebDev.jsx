import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const WebDev = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentWebsite: '',
    features: '',
    consultationTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setIsBookingModalOpen(false);
    setIsThankYouModalOpen(true);
    
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      currentWebsite: '',
      features: '',
      consultationTime: ''
    });
  };

  // Booking Modal Component
  const BookingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm">
      <div className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#262626]">Website Development Consultation</h2>
              <p className="text-[#262626]/80">Get a custom real estate website that converts visitors into leads</p>
            </div>
            <button 
              onClick={() => setIsBookingModalOpen(false)}
              className="text-[#262626]/60 hover:text-[#262626] transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-1">Full Name (Required)</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-1">Email Address (Required)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-1">Phone Number (Required)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-1">Current Website (if any)</label>
                <input
                  type="text"
                  name="currentWebsite"
                  value={formData.currentWebsite}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-1">What features are most important for your new website?</label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                placeholder="MLS integration, virtual tours, lead capture forms, etc."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-1">Preferred Consultation Time</label>
              <input
                type="datetime-local"
                name="consultationTime"
                value={formData.consultationTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                🔒 Schedule My Website Consultation
              </button>
            </div>
          </form>

          {/* Conversion Messaging */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#153E42]/10 p-4 rounded-lg">
              <h3 className="font-bold text-[#153E42] mb-2">What to expect:</h3>
              <ul className="space-y-2 text-sm text-[#153E42]">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>30-minute strategy session</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom website proposal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No obligation consultation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#439CB0]/10 p-4 rounded-lg">
              <h3 className="font-bold text-[#439CB0] mb-2">Our Guarantees:</h3>
              <ul className="space-y-2 text-sm text-[#439CB0]">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>100% Custom Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Mobile Responsive</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>30-day support included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Thank You Modal Component
  const ThankYouModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm">
      <div className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-[#262626] mb-4">
          Thank You for Booking!
        </h2>
        
        <div className="space-y-4 text-[#262626]/80 mb-6">
          <p>Your website consultation has been scheduled successfully.</p>
          
          <div className="bg-[#153E42]/10 p-4 rounded-lg text-left">
            <h3 className="font-semibold text-[#153E42] mb-2">What to expect next:</h3>
            <ul className="space-y-2 text-sm text-[#153E42]">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>You'll receive a confirmation email with calendar invite</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Our team will reach out to confirm details</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Prepare any questions about your website needs</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-4 bg-[#262626]/10 p-4 rounded-lg">
            <p className="text-sm text-[#262626]/60">We'll send you a Zoom link 24 hours before your scheduled call.</p>
          </div>
        </div>
        
        <button
          onClick={() => setIsThankYouModalOpen(false)}
          className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );

  // Services data
  const services = [
    {
      title: 'Custom Website Builds',
      description: 'Mobile-first, conversion-optimized sites tailored to the real estate niche with modern designs that showcase your properties and convert visitors into leads.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      features: [
        '100% Custom Design',
        'Mobile Responsive',
        'SEO Optimized',
        'Fast Loading'
      ]
    },
    {
      title: 'CRM + Backend Integration',
      description: 'We connect your site with pipelines, forms, and calendar tools to streamline your lead management and follow-up process.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      ),
      features: [
        'Zapier Integration',
        'Lead Capture Forms',
        'Automated Follow-ups',
        'Calendar Sync'
      ]
    },
    {
      title: 'Ongoing Technical Support',
      description: 'From updates to troubleshooting—we keep your site running smoothly with our comprehensive maintenance and support plans.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      features: [
        '24/7 Monitoring',
        'Security Updates',
        'Performance Optimization',
        'Content Updates'
      ]
    }
  ];

  // Portfolio examples
  const portfolio = [
    {
      title: 'Luxury Realty Group',
      description: 'Custom website for high-end property specialists with virtual tours and neighborhood guides.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '#'
    },
    {
      title: 'Urban Living Real Estate',
      description: 'Modern design for city property experts with integrated MLS search and lead capture.',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '#'
    },
    {
      title: 'Coastal Properties',
      description: 'Beachfront specialists with property showcase and vacation rental booking system.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '#'
    }
  ];

  const heroHeadlineRef = useRef(null);
  const heroSubRef = useRef(null);
  const servicesGridRef = useRef(null);
  const servicesCardRefs = useRef([]);
  const portfolioGridRef = useRef(null);
  const portfolioCardRefs = useRef([]);

  useEffect(() => {
    // Animate webdev hero headline words
    if (heroHeadlineRef.current) {
      const words = heroHeadlineRef.current.querySelectorAll('.webdev-hero-headline-word');
      gsap.set(words, { opacity: 0, y: 100, scale: 0.95, filter: 'blur(12px)', rotate: 8, clipPath: 'inset(0 0 100% 0)' });
      gsap.to(words, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        rotate: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.7,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.2,
      });
    }
    if (heroSubRef.current) {
      const words = heroSubRef.current.querySelectorAll('.webdev-hero-subtext-word');
      gsap.set(words, { opacity: 0, y: 60, scale: 0.97, filter: 'blur(8px)', rotate: -6, clipPath: 'inset(0 0 100% 0)' });
      gsap.to(words, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        rotate: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.8,
      });
    }
    // Parallax scroll effect for hero text
    if (heroHeadlineRef.current) {
      gsap.to(heroHeadlineRef.current, {
        y: -24,
        scrollTrigger: {
          trigger: heroHeadlineRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 0.7,
        },
        ease: 'power1.out',
      });
    }
    if (heroSubRef.current) {
      gsap.to(heroSubRef.current, {
        y: -12,
        scrollTrigger: {
          trigger: heroSubRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 0.7,
        },
        ease: 'power1.out',
      });
    }
    // Services grid scroll-triggered entrance animation
    if (servicesGridRef.current) {
      gsap.fromTo(
        servicesCardRefs.current,
        { opacity: 0, y: 80, scale: 0.85, rotate: -8, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.18,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: servicesGridRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    // Portfolio grid scroll-triggered entrance animation
    if (portfolioGridRef.current) {
      gsap.fromTo(
        portfolioCardRefs.current,
        { opacity: 0, y: 80, scale: 0.85, rotate: -8, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.18,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: portfolioGridRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const handleCardHover = (refs, idx) => {
    if (refs.current[idx]) {
      gsap.to(refs.current[idx], {
        scale: 1.07,
        boxShadow: '0 0 32px 8px #439CB0, 0 8px 32px 0 rgba(67,156,176,0.25)',
        rotate: gsap.utils.random(-4, 4),
        filter: 'brightness(1.08) saturate(1.2)',
        cursor: 'pointer',
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  };
  const handleCardLeave = (refs, idx) => {
    if (refs.current[idx]) {
      gsap.to(refs.current[idx], {
        scale: 1,
        boxShadow: '',
        rotate: 0,
        filter: 'brightness(1) saturate(1)',
        cursor: 'default',
        duration: 0.35,
        ease: 'power2.in',
      });
    }
  };

  return (
    <div className="font-quicksand antialiased text-[#262626] bg-[#E2E2E2]">
      {/* Modals */}
      {isBookingModalOpen && <BookingModal />}
      {isThankYouModalOpen && <ThankYouModal />}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#153E42] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Web Development" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#153E42]/30 to-[#153E42]/100"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[80vh] py-16">
            {/* Headline */}
            <div className="text-center mb-12 w-full max-w-4xl px-4">
              <div className="inline-flex items-center mt-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">💻 WEB DEVELOPMENT</span>
              </div>
              <h1 ref={heroHeadlineRef} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight">
                {['A', 'great', 'first', 'impression', 'starts', 'with', 'a', <span key="greatsite" className="text-[#439CB0]">great site.</span>].map((word, i) => (
                  <span key={i} className="webdev-hero-headline-word inline-block mr-2">{word}</span>
                ))}
              </h1>
              <p ref={heroSubRef} className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                {['Professional', 'real', 'estate', 'websites', 'designed', 'to', 'convert', 'visitors', 'into', 'leads', 'and', 'showcase', 'your', 'properties', 'in', 'the', 'best', 'light.'].map((word, i) => (
                  <span key={i} className="webdev-hero-subtext-word inline-block mr-1">{word}</span>
                ))}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 rounded-lg bg-[#439CB0] hover:bg-[#153E42] text-white font-medium shadow-lg transition-colors duration-300"
              >
                Get Your Custom Website
              </button>
              <button
                className="px-8 py-4 rounded-lg bg-[#153E42] hover:bg-[#262626] text-white font-medium shadow-lg border border-white/20 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#E2E2E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🛠 OUR WEB SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Real Estate <span className="text-[#439CB0]">Web Solutions</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Everything you need to establish a powerful online presence and convert visitors into clients
            </p>
          </div>
          
          {/* Services Grid */}
          <div 
            ref={servicesGridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                ref={el => servicesCardRefs.current[index] = el}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group hover:-translate-y-1"
                onMouseEnter={() => handleCardHover(servicesCardRefs, index)}
                onMouseLeave={() => handleCardLeave(servicesCardRefs, index)}
              >
                {/* Service Icon */}
                <div className="w-16 h-16 bg-[#439CB0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                  {React.cloneElement(service.icon, {
                    className: "w-8 h-8 text-[#439CB0] group-hover:text-[#153E42] transition-colors duration-300"
                  })}
                </div>
                
                {/* Service Content */}
                <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-3">{service.title}</h3>
                <p className="text-[#262626]/80 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-[#262626]">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-[#153E42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Recent <span className="text-[#439CB0]">Projects</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Examples of our custom real estate website designs
            </p>
          </div>
          
          {/* Portfolio Grid */}
          <div 
            ref={portfolioGridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {portfolio.map((item, index) => (
              <div 
                key={index}
                ref={el => portfolioCardRefs.current[index] = el}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group hover:scale-[1.03]"
                onMouseEnter={() => handleCardHover(portfolioCardRefs, index)}
                onMouseLeave={() => handleCardLeave(portfolioCardRefs, index)}
              >
                {/* Portfolio Image */}
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Portfolio Content */}
                <div className="p-6">
                  <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-2 group-hover:text-[#439CB0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#262626]/80 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  {/* View Project Link */}
                  <Link 
                    to={item.link} 
                    className="inline-flex items-center text-[#439CB0] hover:text-[#153E42] font-medium text-sm transition-colors duration-300"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E2E2E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#153E42]/10 to-[#439CB0]/10 rounded-2xl p-8 md:p-12 shadow-inner">
            <h2 className="text-2xl md:text-3xl font-dosis font-medium text-[#262626] mb-4">
              Ready to transform your online presence?
            </h2>
            <p className="text-[#262626]/80 mb-8 max-w-2xl mx-auto">
              Let's build a website that attracts your ideal clients and converts visitors into leads.
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-8 py-4 rounded-lg bg-[#439CB0] hover:bg-[#153E42] text-white font-medium shadow-lg transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDev;