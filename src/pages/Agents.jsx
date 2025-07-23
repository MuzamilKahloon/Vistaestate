import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Place these at the top-level, outside the component
const agentsHeroWords = [
  { text: 'Meet', className: 'text-[#439CB0] font-bold' },
  { text: 'Our', className: 'text-white font-bold' },
  { text: 'Expert', className: 'text-white font-bold' },
  { text: 'Agents', className: 'text-[#439CB0] font-bold' },
];
const agentsSubWords = [
  { text: 'Dedicated', className: 'text-white' },
  { text: 'professionals', className: 'text-[#439CB0]' },
  { text: 'with', className: 'text-white' },
  { text: 'extensive', className: 'text-[#439CB0]' },
  { text: 'market', className: 'text-white' },
  { text: 'knowledge', className: 'text-[#439CB0]' },
];

const Agents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSort, setActiveSort] = useState('default');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: 'Samuel Palmer',
      role: 'Founder & CEO',
      phone: '+1 (555) 123-4567',
      email: 'samuel@realtyproperties.com',
      bio: '15+ years in luxury properties and investment consulting',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      properties: 42,
      experience: '15 years',
      rating: 4.9,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Vincent Fuller',
      role: 'Senior Agent',
      phone: '+1 (555) 234-5678',
      email: 'vincent@coolhouses.com',
      bio: 'Specializing in commercial properties and sustainable architecture',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      properties: 38,
      experience: '12 years',
      rating: 4.8,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Brittany Watkins',
      role: 'Buyer Specialist',
      phone: '+1 (555) 345-6789',
      email: 'brittany@smarthouses.com',
      bio: 'Expert in first-time homebuyer programs',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      properties: 35,
      experience: '8 years',
      rating: 4.9,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Michelle Ramirez',
      role: 'Luxury Specialist',
      phone: '+1 (555) 456-7890',
      email: 'michelle@reallory.com',
      bio: 'International property and investment expert',
      image: 'https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg',
      properties: 47,
      experience: '14 years',
      rating: 4.8,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'Commercial Expert',
      phone: '+1 (555) 567-8901',
      email: 'david@vistaestate.com',
      bio: 'Commercial real estate transactions specialist',
      image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg',
      properties: 29,
      experience: '10 years',
      rating: 4.7,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Olivia Martinez',
      role: 'Rental Manager',
      phone: '+1 (555) 678-9012',
      email: 'olivia@vistaestate.com',
      bio: 'Portfolio of high-end residential properties',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      properties: 31,
      experience: '7 years',
      rating: 4.7,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ]);

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

  const agentsRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroSectionRef = useRef(null);
  const orbRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const statsSectionRef = useRef(null);
  const statsCardRefs = useRef([]);
  const agentsGridRef = useRef(null);
  const agentsCardRefs = useRef([]);

  useEffect(() => {
    // Animate headline words
    gsap.set('.agents-hero-headline-word', { opacity: 0, y: 40, scale: 0.92, filter: 'blur(6px)' });
    gsap.to('.agents-hero-headline-word', {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.7,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.2,
    });
    // Animate subtext words
    gsap.set('.agents-hero-subtext-word', { opacity: 0, y: 24, scale: 0.95, filter: 'blur(4px)' });
    gsap.to('.agents-hero-subtext-word', {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.5,
      stagger: 0.09,
      ease: 'power2.out',
      delay: 1.1,
    });
    // Animate orb floating if present
    if (orbRef.current) {
      gsap.to(orbRef.current, {
        y: 30,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'sine.inOut',
      });
    }
    // Parallax scroll effect for hero text
    if (heroTextRef.current && heroSectionRef.current) {
      gsap.to(heroTextRef.current, {
        y: -18,
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
        ease: 'power1.out',
      });
    }

    // CTA section scroll-triggered entrance animation
    if (ctaSectionRef.current) {
      gsap.fromTo(
        ctaSectionRef.current.children,
        { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Stats section scroll-triggered entrance animation
    if (statsSectionRef.current) {
      gsap.fromTo(
        statsCardRefs.current,
        { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: statsSectionRef.current,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Agents grid cards: instant appearance
    if (agentsGridRef.current) {
      agentsCardRefs.current.forEach(card => {
        if (card) {
          gsap.set(card, { opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' });
        }
      });
    }
  }, []);

  useEffect(() => {
    window.updateAgentProfile = (updatedProfile) => {
      setAgents(prevAgents => {
        const exists = prevAgents.some(agent => agent.email === updatedProfile.email);
        if (exists) {
          return prevAgents.map(agent =>
            agent.email === updatedProfile.email ? { ...agent, ...updatedProfile } : agent
          );
        } else {
          return [...prevAgents, { ...updatedProfile, id: prevAgents.length + 1 }];
        }
      });
    };
    return () => { window.updateAgentProfile = undefined; };
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

  // Sort agents based on active sort option
  const sortedAgents = [...agents].sort((a, b) => {
    if (activeSort === 'rating') return b.rating - a.rating;
    if (activeSort === 'experience') return parseInt(b.experience) - parseInt(a.experience);
    if (activeSort === 'properties') return b.properties - a.properties;
    return a.id - b.id; // Default sort
  });

  // Filter agents based on search query
  const filteredAgents = sortedAgents.filter(agent => {
    return agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           agent.role.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
              className="text-[#262626]/60 hover:text-[#262626]"
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
                <label className="block text-sm font-medium text-[#262626] mb-1">Brokerage / Company Name</label>
                <input
                  type="text"
                  name="brokerage"
                  value={formData.brokerage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
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
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
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
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
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
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-1">Preferred Consultation Time</label>
              <input
                type="datetime-local"
                name="consultationTime"
                value={formData.consultationTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
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

  const handleStatsCardHover = idx => {
    if (statsCardRefs.current[idx]) {
      gsap.to(statsCardRefs.current[idx], {
        scale: 1.07,
        boxShadow: '0 0 32px 8px #439CB0, 0 8px 32px 0 rgba(67,156,176,0.25)',
        filter: 'brightness(1.08) saturate(1.2)',
        cursor: 'pointer',
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  };
  const handleStatsCardLeave = idx => {
    if (statsCardRefs.current[idx]) {
      gsap.to(statsCardRefs.current[idx], {
        scale: 1,
        boxShadow: '',
        filter: 'brightness(1) saturate(1)',
        cursor: 'default',
        duration: 0.35,
        ease: 'power2.in',
      });
    }
  };

  const handleAgentsCardHover = idx => {
    if (agentsCardRefs.current[idx]) {
      gsap.to(agentsCardRefs.current[idx], {
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
  const handleAgentsCardLeave = idx => {
    if (agentsCardRefs.current[idx]) {
      gsap.to(agentsCardRefs.current[idx], {
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
      <section 
        ref={heroSectionRef}
        className="relative min-h-screen flex items-center justify-center bg-[#153E42] overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Real Estate Agents" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#153E42]/30 to-[#153E42]/100"></div>
        </div>
        {/* Decorative floating orb */}
        <div ref={orbRef} className="absolute left-[-80px] top-1/3 w-64 h-64 bg-gradient-to-br from-[#439CB0]/60 to-[#153E42]/40 rounded-full blur-3xl opacity-70 pointer-events-none z-0"></div>
        {/* Content Container */}
        <div className="relative flex items-center justify-center z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[80vh] py-16">
            {/* Headline */}
            <div className="text-center mb-12 w-full max-w-4xl px-4">
              <div className="inline-flex items-center mt-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">👔 MEET OUR TEAM</span>
              </div>
              <h1 ref={heroTextRef} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight flex flex-wrap gap-x-2">
                {agentsHeroWords.map((w, i) => (
                  <span key={i} className={`agents-hero-headline-word ${w.className}`}>{w.text}</span>
                ))}
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light mb-8 leading-relaxed max-w-2xl mx-auto flex flex-wrap gap-x-1">
                {agentsSubWords.map((w, i) => (
                  <span key={i} className={`agents-hero-subtext-word ${w.className}`}>{w.text}</span>
                ))}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 bg-[#439CB0] hover:bg-[#153E42] rounded-lg text-white font-medium shadow-lg transition-colors duration-300"
              >
                🚀 Get Started Today
              </button>
              <button
                className="px-8 py-4 bg-[#153E42] hover:bg-[#262626] rounded-lg text-white font-medium shadow-lg border border-white/20 transition-colors duration-300"
              >
                Explore Agents
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={agentsRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Sort Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Search agents by name or specialty..."
                className="w-full p-4 pl-12 border border-[#262626]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#262626]/60 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="w-full md:w-auto flex items-center gap-4">
              <div className="flex items-center">
                <span className="mr-3 text-[#262626] font-medium">Sort by:</span>
                <select 
                  className="p-3 border border-[#262626]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent font-medium bg-white"
                  value={activeSort}
                  onChange={(e) => setActiveSort(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="rating">Highest Rating</option>
                  <option value="experience">Most Experience</option>
                  <option value="properties">Most Properties</option>
                </select>
              </div>
            </div>
          </div>

          {/* Agents Grid */}
          {filteredAgents.length > 0 ? (
            <div 
              ref={agentsGridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredAgents.map((agent, idx) => (
                <div 
                  key={agent.id}
                  ref={el => agentsCardRefs.current[idx] = el}
                  className="group relative rounded-xl overflow-hidden h-96 shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-[#262626]/10"
                  onMouseEnter={() => handleAgentsCardHover(idx)}
                  onMouseLeave={() => handleAgentsCardLeave(idx)}
                >
                  {/* Agent Image with Full Cover Hover Overlay */}
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay - Full Cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153E42]/80 via-[#153E42]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-dosis font-bold text-white mb-1">{agent.name}</h3>
                      <p className="text-[#439CB0] font-medium mb-4">{agent.role}</p>
                      <p className="text-white/90 text-sm mb-6">{agent.bio}</p>
                      
                      {/* Contact Info */}
                      <div className="mb-6">
                        <a href={`tel:${agent.phone}`} className="block text-white hover:text-[#439CB0] transition-colors mb-2 font-medium">
                          <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {agent.phone}
                        </a>
                        <a href={`mailto:${agent.email}`} className="block text-white hover:text-[#439CB0] transition-colors font-medium">
                          <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {agent.email}
                        </a>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex space-x-4">
                        <a href={agent.social.facebook} className="text-white hover:text-[#439CB0] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                        <a href={agent.social.twitter} className="text-white hover:text-[#439CB0] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href={agent.social.instagram} className="text-white hover:text-[#439CB0] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        </a>
                        <a href={agent.social.linkedin} className="text-white hover:text-[#439CB0] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow border border-[#262626]/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#262626]/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-2">No agents found</h3>
              <p className="text-[#262626]/60">Try adjusting your search criteria</p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 font-medium">
                Previous
              </button>
              <button className="px-4 py-2 bg-[#439CB0] text-white rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 font-medium">
                2
              </button>
              <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 font-medium">
                3
              </button>
              <span className="px-2 text-[#262626]/60">...</span>
              <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 font-medium">
                6
              </button>
              <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 font-medium">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#153E42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsSectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              ref={el => statsCardRefs.current[0] = el}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#262626]/10 text-center hover:shadow-md transition-all duration-300 group"
              onMouseEnter={() => handleStatsCardHover(0)}
              onMouseLeave={() => handleStatsCardLeave(0)}
            >
              <div className="w-20 h-20 bg-[#439CB0]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#439CB0] mb-2">15+ Years</h3>
              <p className="text-[#262626] font-medium">Average industry experience</p>
            </div>
            <div
              ref={el => statsCardRefs.current[1] = el}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#262626]/10 text-center hover:shadow-md transition-all duration-300 group"
              onMouseEnter={() => handleStatsCardHover(1)}
              onMouseLeave={() => handleStatsCardLeave(1)}
            >
              <div className="w-20 h-20 bg-[#439CB0]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#439CB0] mb-2">98%</h3>
              <p className="text-[#262626] font-medium">Client satisfaction rate</p>
            </div>
            <div
              ref={el => statsCardRefs.current[2] = el}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#262626]/10 text-center hover:shadow-md transition-all duration-300 group"
              onMouseEnter={() => handleStatsCardHover(2)}
              onMouseLeave={() => handleStatsCardLeave(2)}
            >
              <div className="w-20 h-20 bg-[#439CB0]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#439CB0] mb-2">500+</h3>
              <p className="text-[#262626] font-medium">Properties sold annually</p>
            </div>
          </div>
        </div>
      </section>
   
     
    </div>
  );
};

export default Agents;