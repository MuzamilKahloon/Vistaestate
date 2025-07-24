import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Marketing = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    marketingBudget: '',
    challenges: '',
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
      marketingBudget: '',
      challenges: '',
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
              <h2 className="text-2xl font-bold text-[#262626]">Marketing Strategy Consultation</h2>
              <p className="text-[#262626]/80">Get a custom marketing plan to grow your real estate business</p>
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
                <label className="block text-sm font-medium text-[#262626] mb-1">Current Monthly Marketing Budget</label>
                <select
                  name="marketingBudget"
                  value={formData.marketingBudget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                >
                  <option value="">Select</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-3000">$1,000 - $3,000</option>
                  <option value="3000-5000">$3,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-1">What are your biggest marketing challenges?</label>
              <textarea
                name="challenges"
                value={formData.challenges}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                placeholder="Lead quality, budget, consistency, etc."
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
                🔒 Schedule My Marketing Consultation
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
                  <span>Custom marketing proposal</span>
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
                  <span>Transparent reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No long-term contracts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Performance-based optimization</span>
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
          <p>Your marketing consultation has been scheduled successfully.</p>
          
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
                <span>Prepare any questions about your marketing needs</span>
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
      title: 'SEO + Geo Tagging',
      description: 'We optimize your online presence to appear in searches where it counts—locally, helping potential clients find you when they search for real estate services in your area.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      ),
      features: [
        'Local SEO Optimization',
        'Google My Business Setup',
        'Geo-Targeted Content',
        'Review Management'
      ]
    },
    {
      title: 'Ads / Performance Marketing',
      description: 'Targeted Facebook & Google campaigns that actually deliver inquiries from serious buyers and sellers in your market area.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      ),
      features: [
        'Facebook/Instagram Ads',
        'Google Search Ads',
        'Retargeting Campaigns',
        'Conversion Tracking'
      ]
    },
    {
      title: 'Delivery & Transparency',
      description: 'Every dollar is tracked. Every lead is logged. No fluff—just real performance metrics and clear reporting.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      features: [
        'Real-Time Dashboard',
        'Weekly Performance Reports',
        'Lead Quality Tracking',
        'ROI Analysis'
      ]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Real Estate Agent, Luxe Properties',
      quote: 'Our lead volume increased by 300% within 2 months of starting their marketing services. The quality of leads is exceptional.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'Broker, Urban Living Realty',
      quote: 'Finally found a marketing partner that understands real estate. Their geo-targeted ads bring us exactly the clients we want.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Team Lead, Coastal Homes Group',
      quote: 'The transparency in reporting is unmatched. We know exactly where every dollar goes and what results it generates.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
    }
  ];

  const heroHeadlineRef = useRef(null);
  const heroSubRef = useRef(null);
  const servicesGridRef = useRef(null);
  const servicesCardRefs = useRef([]);
  const resultsGridRef = useRef(null);
  const resultsCardRefs = useRef([]);
  const testimonialsGridRef = useRef(null);
  const testimonialsCardRefs = useRef([]);

  useEffect(() => {
    // Animate marketing hero headline words
    if (heroHeadlineRef.current) {
      const words = heroHeadlineRef.current.querySelectorAll('.marketing-hero-headline-word');
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
      const words = heroSubRef.current.querySelectorAll('.marketing-hero-subtext-word');
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
    // Testimonials grid scroll-triggered entrance animation
    if (testimonialsGridRef.current) {
      gsap.fromTo(
        testimonialsCardRefs.current,
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
            trigger: testimonialsGridRef.current,
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
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📈 MARKETING SERVICES</span>
            </div>
            <h1 ref={heroHeadlineRef} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight">
              {['Your', 'leads', 'should', 'know', 'your', 'name', 'they', 'ever', 'answer', 'the', 'phone.'].map((word, i) => (
                <span key={i} className="marketing-hero-headline-word inline-block mr-2">{word}</span>
              ))}
            </h1>
            <p ref={heroSubRef} className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl">
              {['Strategic', 'marketing', 'that', 'builds', 'your', 'brand', 'and', 'delivers', 'high-intent', 'leads', 'ready', 'to', 'transact.'].map((word, i) => (
                <span key={i} className="marketing-hero-subtext-word inline-block mr-1">{word}</span>
              ))}
            </p>
          </div>
          {/* Right: CTA Card */}
          <div className="w-full md:w-[420px] flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#439CB0]/20 px-8 py-10 flex flex-col items-center">
              <h3 className="text-2xl font-dosis font-bold text-[#153E42] mb-2 tracking-tight text-center">
                Boost My Marketing
              </h3>
              <p className="text-[#262626] text-base mb-6 text-center">
                Book a free strategy call and see how we can grow your brand and deliver high-intent leads.
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
      <section className="py-24 bg-[#E2E2E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📈 OUR MARKETING SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Real Estate <span className="text-[#439CB0]">Marketing Solutions</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Data-driven strategies that get you in front of motivated buyers and sellers
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

      {/* Results Section */}
      <section className="py-16 bg-[#153E42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Proven <span className="text-[#439CB0]">Results</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              What our clients achieve with our marketing strategies
            </p>
          </div>
          
          {/* Stats Grid */}
          <div 
            ref={resultsGridRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: '3-5x', label: 'Return on Ad Spend' },
              { value: '25%+', label: 'Conversion Rate' },
              { value: '50%', label: 'Cost Reduction vs. Zillow' },
              { value: '24h', label: 'Avg. Lead Response Time' },
            ].map((stat, index) => (
              <div 
                key={index}
                ref={el => resultsCardRefs.current[index] = el}
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300"
                onMouseEnter={() => handleCardHover(resultsCardRefs, index)}
                onMouseLeave={() => handleCardLeave(resultsCardRefs, index)}
              >
                <div className="text-3xl md:text-4xl font-dosis font-bold text-[#439CB0] mb-2">{stat.value}</div>
                <div className="text-sm text-[#262626]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#E2E2E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              What Our <span className="text-[#439CB0]">Clients Say</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Real agents achieving real results with our marketing services
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div 
            ref={testimonialsGridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                ref={el => testimonialsCardRefs.current[index] = el}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 hover:-translate-y-1"
                onMouseEnter={() => handleCardHover(testimonialsCardRefs, index)}
                onMouseLeave={() => handleCardLeave(testimonialsCardRefs, index)}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-dosis font-medium text-[#262626]">{testimonial.name}</h4>
                    <p className="text-sm text-[#439CB0]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#262626]/80 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#439CB0]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
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
              Ready to get more high-quality leads?
            </h2>
            <p className="text-[#262626]/80 mb-8 max-w-2xl mx-auto">
              Let's create a marketing strategy that delivers consistent, qualified leads for your business.
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

export default Marketing;