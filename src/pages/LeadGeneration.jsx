import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const LeadGeneration = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
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
  const leadRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroSubRef = useRef(null);
  const servicesGridRef = useRef(null);
  const servicesCardRefs = useRef([]);
  const processGridRef = useRef(null);
  const processCardRefs = useRef([]);
  const resultsGridRef = useRef(null);
  const resultsCardRefs = useRef([]);

  useEffect(() => {
    // Animate lead gen hero headline words
    if (heroHeadlineRef.current) {
      const words = heroHeadlineRef.current.querySelectorAll('.leadgen-hero-headline-word');
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
      const words = heroSubRef.current.querySelectorAll('.leadgen-hero-subtext-word');
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
    // Process grid scroll-triggered entrance animation
    if (processGridRef.current) {
      gsap.fromTo(
        processCardRefs.current,
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
            trigger: processGridRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    // Results grid scroll-triggered entrance animation
    if (resultsGridRef.current) {
      gsap.fromTo(
        resultsCardRefs.current,
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
            trigger: resultsGridRef.current,
            start: 'top 80%',
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

  // Booking Modal Component
  const BookingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm">
      <div className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#262626]">Lead Generation Consultation</h2>
              <p className="text-[#262626]/80">Get a custom lead generation plan for your real estate business</p>
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
                <label className="block text-sm font-medium text-[#262626] mb-1">Target Area (ZIP/City)</label>
                <input
                  type="text"
                  name="markets"
                  value={formData.markets}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-1">What types of leads are you looking for?</label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                placeholder="Sellers, buyers, investors, specific price ranges, etc."
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
                🔒 Schedule My Lead Gen Consultation
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
                  <span>Pay only for qualified leads</span>
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

  // Services data
  const services = [
    {
      title: 'Cold Calling',
      description: 'We do the dirty work: calling thousands to spark the few that matter. Our trained specialists handle objections and qualify leads so you only talk to serious prospects.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      features: [
        '100+ calls per day per agent',
        'Custom call scripts',
        'Local area specialists',
        'Lead qualification'
      ]
    },
    {
      title: 'Verification Calls',
      description: 'We verify intent, timeline, and eligibility so you don\'t chase the wrong prospect. Our team confirms motivation and readiness before you ever speak with them.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      features: [
        'Intent verification',
        'Timeline confirmation',
        'Budget qualification',
        'Property criteria'
      ]
    },
    {
      title: 'Quality Assurance',
      description: 'Every call is recorded, evaluated, and tracked—so you know what\'s working. We continuously optimize our approach based on real performance data.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      features: [
        'Call recordings',
        'Performance analytics',
        'Conversion tracking',
        'Weekly reports'
      ]
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: '1',
      title: 'Lead Generation',
      description: 'Our team makes 100+ calls daily in your target area to identify motivated sellers and buyers.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      step: '2',
      title: 'Verification',
      description: 'We qualify each lead for intent, timeline, and financial readiness before passing them to you.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      step: '3',
      title: 'Delivery',
      description: 'Hot leads are immediately routed to you via your preferred method (call, text, or CRM).',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      step: '4',
      title: 'Conversion',
      description: 'You close deals while we continue generating more qualified leads for your pipeline.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

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
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" 
            alt="Modern Real Estate Marketing" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#153E42]/80 via-[#439CB0]/60 to-[#153E42]/90"></div>
          {/* Glassmorphism overlay for readability */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2.5px]"></div>
        </div>
        {/* Floating orb accent */}
        <div className="absolute left-[-80px] top-1/3 w-64 h-64 bg-gradient-to-br from-[#439CB0]/60 to-[#153E42]/40 rounded-full blur-3xl opacity-70 pointer-events-none z-0"></div>
        {/* Content Container - Responsive split */}
        <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-16 gap-10">
          {/* Left: Animated Headline and Subtext */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📞 LEAD GENERATION</span>
            </div>
            <h1 ref={heroHeadlineRef} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight">
              {['We', 'play', 'on', 'the', 'numbers', 'so', 'you', 'only', 'work', 'with',].map((word, i) => (
                <span key={i} className="leadgen-hero-headline-word inline-block mr-2">{word}</span>
              ))}
            </h1>
            <p ref={heroSubRef} className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl">
              {['Pay', 'only', 'for', 'qualified', 'leads', 'that', 'meet', 'your', 'specific', 'criteria', '-', 'no', 'monthly', 'retainers', 'or', 'empty', 'promises.'].map((word, i) => (
                <span key={i} className="leadgen-hero-subtext-word inline-block mr-1">{word}</span>
              ))}
            </p>
          </div>
          {/* Right: CTA Card */}
          <div className="w-full md:w-[420px] flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#439CB0]/20 px-8 py-10 flex flex-col items-center">
              <h3 className="text-2xl font-dosis font-bold text-[#153E42] mb-2 tracking-tight text-center">
                Get More Qualified Leads
              </h3>
              <p className="text-[#262626] text-base mb-6 text-center">
                Book a free strategy call and see how we deliver high-intent leads to your pipeline.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 text-lg mb-3"
              >
                Schedule My Consultation
              </button>
              <button
                className="w-full bg-[#153E42] hover:bg-[#262626] text-white font-bold py-4 px-6 rounded-xl shadow-lg border border-white/20 transition-all duration-300 text-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={leadRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🧊 OUR LEAD SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Real Estate <span className="text-[#439CB0]">Lead Generation</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              High-intent leads delivered straight to your pipeline
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
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group"
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

      {/* Process Section */}
      <section className="py-16 bg-[#153E42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Our <span className="text-[#439CB0]">4-Step Process</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              How we deliver high-quality leads to your business
            </p>
          </div>
          
          {/* Process Steps */}
          <div 
            ref={processGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <div 
                key={index}
                ref={el => processCardRefs.current[index] = el}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 text-center"
                onMouseEnter={() => handleCardHover(processCardRefs, index)}
                onMouseLeave={() => handleCardLeave(processCardRefs, index)}
              >
                <div className="w-16 h-16 bg-[#439CB0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-dosis font-bold text-[#439CB0]">{step.step}</span>
                </div>
                <div className="w-12 h-12 bg-[#439CB0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(step.icon, {
                    className: "w-6 h-6 text-[#439CB0]"
                  })}
                </div>
                <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-3">{step.title}</h3>
                <p className="text-[#262626]/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-[#E2E2E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#153E42]/10 to-[#439CB0]/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-dosis font-medium text-[#262626] mb-4">
                  Real Results
                </h2>
                <p className="text-lg text-[#262626]/80 max-w-2xl font-light leading-relaxed">
                  From initial contact to deal closure, we ensure each lead is nurtured and delivered with intent.
                </p>
              </div>
            </div>
          </div>

          {/* Process Grid */}
          <div 
            ref={resultsGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {processSteps.map((step, index) => (
              <div 
                key={index}
                ref={el => resultsCardRefs.current[index] = el}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
                onMouseEnter={() => handleCardHover(resultsCardRefs, index)}
                onMouseLeave={() => handleCardLeave(resultsCardRefs, index)}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#439CB0]/10 flex items-center justify-center rounded-full">
                  {React.cloneElement(step.icon, {
                    className: "w-6 h-6 text-[#439CB0]"
                  })}
                </div>
                <h4 className="text-lg font-semibold text-[#262626] mb-2">{step.title}</h4>
                <p className="text-sm text-[#262626]/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;