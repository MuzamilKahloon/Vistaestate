import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Area = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brokerage: '',
    agentType: '',
    markets: '',
    challenge: '',
    consultationTime: ''
  });

  const heroRef = useRef(null);
  const areaRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroSubRef = useRef(null);
  const zipGridRef = useRef(null);
  const zipCardRefs = useRef([]);
  const ctaCardRef = useRef(null);
  const ctaBtn1Ref = useRef(null);
  const ctaBtn2Ref = useRef(null);
  const lastSectionRef = useRef(null);

  useEffect(() => {
    // Animate area hero headline words
    if (heroHeadlineRef.current) {
      const words = heroHeadlineRef.current.querySelectorAll('.area-hero-headline-word');
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
      const words = heroSubRef.current.querySelectorAll('.area-hero-subtext-word');
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
    if (heroHeadlineRef.current && heroRef.current) {
      gsap.to(heroHeadlineRef.current, {
        y: -24,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
        ease: 'power1.out',
      });
    }
    if (heroSubRef.current && heroRef.current) {
      gsap.to(heroSubRef.current, {
        y: -12,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
        ease: 'power1.out',
      });
    }

    // ZIP grid scroll-triggered entrance animation
    if (zipGridRef.current) {
      gsap.fromTo(
        zipCardRefs.current,
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
            trigger: zipGridRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    // CTA card and button animation
    if (ctaCardRef.current) {
      gsap.fromTo(
        ctaCardRef.current,
        { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ctaCardRef.current,
            start: 'top 90%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    gsap.set([ctaBtn1Ref.current, ctaBtn2Ref.current], { opacity: 0, y: 40, scale: 0.92, filter: 'blur(8px)', boxShadow: '0 0 0 0 #439CB0' });
    gsap.to([ctaBtn1Ref.current, ctaBtn2Ref.current], {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      boxShadow: '0 8px 32px 0 rgba(67,156,176,0.18)',
      duration: 0.7,
      stagger: 0.18,
      ease: 'power4.out',
      delay: 0.3,
      scrollTrigger: {
        trigger: ctaCardRef.current,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
    });
    // Last section animation
    if (lastSectionRef.current) {
      gsap.fromTo(
        lastSectionRef.current,
        { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: lastSectionRef.current,
            start: 'top 90%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

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
      brokerage: '',
      agentType: '',
      markets: '',
      challenge: '',
      consultationTime: ''
    });
  };

  const handleZipCardHover = idx => {
    if (zipCardRefs.current[idx]) {
      gsap.to(zipCardRefs.current[idx], {
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
  const handleZipCardLeave = idx => {
    if (zipCardRefs.current[idx]) {
      gsap.to(zipCardRefs.current[idx], {
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

  const handleCtaBtnHover = ref => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1.08,
        boxShadow: '0 0 32px 8px #439CB0, 0 8px 32px 0 rgba(67,156,176,0.25)',
        filter: 'brightness(1.08) saturate(1.2)',
        duration: 0.32,
        ease: 'power2.out',
      });
    }
  };
  const handleCtaBtnLeave = ref => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1,
        boxShadow: '',
        filter: 'brightness(1) saturate(1)',
        duration: 0.32,
        ease: 'power2.in',
      });
    }
  };

  // Booking Modal Component
  const BookingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm">
      <div className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#262626]">Book Your Real Estate Lead Gen Consultation</h2>
              <p className="text-[#262626]/80">Unlock Uncapped, Approval-Based Lead Delivery With 25%+ Avg. Conversions</p>
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
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
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
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
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
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-1">Brokerage / Company Name</label>
                <input
                  type="text"
                  name="brokerage"
                  value={formData.brokerage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-1">Are you a solo agent or team?</label>
                <select
                  name="agentType"
                  value={formData.agentType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
                >
                  <option value="">Select</option>
                  <option value="solo">Solo Agent</option>
                  <option value="team">Team</option>
                  <option value="broker">Broker Owner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-1">Which markets do you serve?</label>
                <input
                  type="text"
                  name="markets"
                  value={formData.markets}
                  onChange={handleInputChange}
                  placeholder="Enter your markets"
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-1">What's your biggest lead generation challenge right now?</label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-1">Preferred Consultation Time</label>
              <input
                type="datetime-local"
                name="consultationTime"
                value={formData.consultationTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                🔒 Schedule My Call Now
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
                  <span>15-minute strategy session</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom lead generation plan</span>
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
                  <span>25%+ average conversion rate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Exclusive, intent-based leads</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Money-back guarantee</span>
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
          <p>Your consultation has been scheduled successfully.</p>
          
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
                <span>Prepare any questions about your lead generation needs</span>
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

  // Sample ZIP code data with availability status
  const zipCodes = [
    { code: '90210', city: 'Beverly Hills', state: 'CA', status: 'limited' },
    { code: '10001', city: 'New York', state: 'NY', status: 'taken' },
    { code: '33139', city: 'Miami Beach', state: 'FL', status: 'available' },
    { code: '60611', city: 'Chicago', state: 'IL', status: 'available' },
    { code: '75201', city: 'Dallas', state: 'TX', status: 'taken' },
    { code: '90069', city: 'West Hollywood', state: 'CA', status: 'limited' },
    { code: '02108', city: 'Boston', state: 'MA', status: 'available' },
    { code: '98109', city: 'Seattle', state: 'WA', status: 'taken' },
  ];

  // Status colors and labels
  const statusConfig = {
    available: { color: 'bg-[#439CB0]', text: '✅ Available' },
    limited: { color: 'bg-[#E2A73E]', text: '⏳ Limited' },
    taken: { color: 'bg-[#E25D5D]', text: '❌ Taken' },
  };

  // Filter ZIP codes based on search query
  const filteredZipCodes = zipCodes.filter(zip => 
    zip.code.includes(searchQuery) || 
    zip.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    zip.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-quicksand antialiased text-[#262626] bg-[#E2E2E2]">
      {/* Modals */}
      {isBookingModalOpen && <BookingModal />}
      {isThankYouModalOpen && <ThankYouModal />}

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-[#153E42] overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Home" 
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
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📍 AREA AVAILABILITY</span>
              </div>
              <h1 ref={heroHeadlineRef} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight">
                {['Is', 'Your', <span key="area" className="text-[#439CB0]">Area</span>, 'Available?'].map((word, i) => (
                  <span key={i} className="area-hero-headline-word inline-block mr-2">{word}</span>
                ))}
              </h1>
              <p ref={heroSubRef} className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                {['Our', 'services', 'are', 'limited', 'to', 'select', 'high-converting', 'ZIP', 'codes.', 'Search', 'below', 'to', 'reserve', 'yours', 'before', "it's", 'booked', 'out.'].map((word, i) => (
                  <span key={i} className="area-hero-subtext-word inline-block mr-1">{word}</span>
                ))}
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-xl w-full relative">
              <input
                type="text"
                placeholder="Search by ZIP code, city, or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white/10 backdrop-blur-sm text-white placeholder-white/70 shadow-lg transition-colors"
              />
              <svg 
                className="w-5 h-5 absolute right-4 top-4 text-white/70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ZIP Codes Section */}
      <section 
        ref={areaRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-[#439CB0] mr-2"></span>
              <span className="text-sm text-[#262626]">Available</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-[#E2A73E] mr-2"></span>
              <span className="text-sm text-[#262626]">Limited Availability</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-[#E25D5D] mr-2"></span>
              <span className="text-sm text-[#262626]">Already Taken</span>
            </div>
          </div>

          {/* ZIP Codes Grid */}
          <div 
            ref={zipGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredZipCodes.map((zip, index) => (
              <div 
                key={index}
                ref={el => zipCardRefs.current[index] = el}
                className={`bg-white rounded-xl p-6 shadow-md border-l-4 ${statusConfig[zip.status].color} hover:shadow-lg transition-all duration-300`}
                onMouseEnter={() => handleZipCardHover(index)}
                onMouseLeave={() => handleZipCardLeave(index)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-dosis font-bold text-[#262626]">
                    {zip.code}
                  </h3>
                  <span className="text-sm font-medium">
                    {statusConfig[zip.status].text}
                  </span>
                </div>
                <p className="text-[#262626]/80 mb-4">
                  {zip.city}, {zip.state}
                </p>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  disabled={zip.status === 'taken'}
                  className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                    zip.status === 'available' 
                      ? 'bg-[#439CB0] hover:bg-[#153E42] text-white' 
                      : zip.status === 'limited' 
                        ? 'bg-[#E2A73E] hover:bg-[#C58E2E] text-white' 
                        : 'bg-[#262626]/10 text-[#262626]/50 cursor-not-allowed'
                  }`}
                >
                  {zip.status === 'available' 
                    ? 'Reserve This Area' 
                    : zip.status === 'limited' 
                      ? 'Join Waitlist' 
                      : 'Already Taken'}
                </button>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredZipCodes.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow border border-[#262626]/10">
              <svg 
                className="w-16 h-16 mx-auto text-[#262626]/40" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-dosis font-medium text-[#262626] mt-4">
                No areas found
              </h3>
              <p className="text-[#262626]/60 mt-2">
                We couldn't find any areas matching your search. Try a different ZIP code or location.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 flex flex-col items-center justify-center">
            <div ref={ctaCardRef} className="backdrop-blur-xl bg-white/70 border border-[#439CB0]/20 shadow-2xl rounded-3xl px-8 py-10 max-w-3xl w-full mb-10 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-dosis font-bold text-[#153E42] mb-3 tracking-tight">
                Why Booking is <span className="text-[#439CB0]">Important</span>
              </h3>
              <p className="text-[#262626] text-lg mb-4 max-w-2xl text-center">
                We only work with <span className="font-bold text-[#439CB0]">one agent per area</span> to maintain performance and exclusivity.<br/>
                <span className="text-[#153E42]">Booking ensures you're next in line for top-producing ZIPs.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
                <button
                  ref={ctaBtn1Ref}
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-8 py-4 bg-[#439CB0] hover:bg-[#153E42] rounded-xl text-white font-bold shadow-lg transition-colors duration-300 text-lg flex items-center justify-center"
                  onMouseEnter={() => handleCtaBtnHover(ctaBtn1Ref)}
                  onMouseLeave={() => handleCtaBtnLeave(ctaBtn1Ref)}
                >
                  Schedule a Strategy Call
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                <button
                  ref={ctaBtn2Ref}
                  className="px-8 py-4 bg-[#153E42] hover:bg-[#262626] rounded-xl text-white font-bold shadow-lg border border-white/20 transition-colors duration-300 text-lg flex items-center justify-center"
                  onMouseEnter={() => handleCtaBtnHover(ctaBtn2Ref)}
                  onMouseLeave={() => handleCtaBtnLeave(ctaBtn2Ref)}
                >
                  Browse Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={lastSectionRef} className="relative mb-20 py-24 bg-gradient-to-br from-[#262626] via-[#153E42] to-[#439CB0]/80 text-white overflow-hidden flex items-center justify-center">
        <div className="relative z-10 max-w-2xl w-full mx-auto px-6 py-12 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-dosis font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Ready to <span className="text-[#439CB0]">Claim Your Area</span>?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Don't miss out on <span className="font-bold text-[#439CB0]">exclusive leads</span> in your market. Secure your spot and get ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-10 py-5 rounded-2xl bg-[#439CB0] hover:bg-[#153E42] text-white font-bold shadow-xl text-lg transition-colors duration-300 flex-1"
            >
              Reserve My Area
            </button>
            <button
              className="px-10 py-5 rounded-2xl bg-[#153E42] hover:bg-[#262626] text-white font-bold shadow-xl border border-white/20 text-lg transition-colors duration-300 flex-1"
            >
              Browse Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Area;