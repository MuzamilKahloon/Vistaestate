import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as MOTION, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AboutUs = () => {
  // State for modal
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

  // Animation refs and controls
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const awardsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.5 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const awardsInView = useInView(awardsRef, { once: true, amount: 0.2 });

  const controls = useAnimation();

  useEffect(() => {
    if (heroInView) {
      controls.start("visible");
    }
  }, [heroInView, controls]);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonHover = {
    rest: { 
      backgroundColor: "#439CB0",
      transition: { duration: 0.3 }
    },
    hover: { 
      backgroundColor: "#153E42",
      transition: { duration: 0.3 }
    }
  };

  const secondaryButtonHover = {
    rest: { 
      backgroundColor: "#153E42",
      transition: { duration: 0.3 }
    },
    hover: { 
      backgroundColor: "#262626",
      transition: { duration: 0.3 }
    }
  };

  // Booking Modal Component
  const BookingModal = () => (
    <MOTION.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm"
    >
      <MOTION.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#262626]">Book Your Real Estate Lead Gen Consultation</h2>
              <p className="text-[#262626]/80">Unlock Uncapped, Approval-Based Lead Delivery With 25%+ Avg. Conversions</p>
            </div>
            <MOTION.button 
              onClick={() => setIsBookingModalOpen(false)}
              whileHover={{ scale: 1.1 }}
              className="text-[#262626]/60 hover:text-[#262626]"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </MOTION.button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Full Name (Required)</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Email Address (Required)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Phone Number (Required)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Brokerage / Company Name</label>
                <input
                  type="text"
                  name="brokerage"
                  value={formData.brokerage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MOTION.div variants={itemVariants}>
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
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Which markets do you serve?</label>
                <input
                  type="text"
                  name="markets"
                  value={formData.markets}
                  onChange={handleInputChange}
                  placeholder="Enter your markets"
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
            </div>

            <MOTION.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#262626] mb-1">What's your biggest lead generation challenge right now?</label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
              ></textarea>
            </MOTION.div>

            <MOTION.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#262626] mb-1">Preferred Consultation Time</label>
              <input
                type="datetime-local"
                name="consultationTime"
                value={formData.consultationTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
              />
            </MOTION.div>

            <MOTION.div 
              variants={itemVariants}
              className="pt-4"
            >
              <MOTION.button
                type="submit"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHover}
                className="w-full text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                🔒 Schedule My Call Now
              </MOTION.button>
            </MOTION.div>
          </form>

          {/* Conversion Messaging */}
          <MOTION.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <MOTION.div 
              variants={itemVariants}
              className="bg-[#153E42]/10 p-4 rounded-lg"
            >
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
            </MOTION.div>
            
            <MOTION.div 
              variants={itemVariants}
              className="bg-[#439CB0]/10 p-4 rounded-lg"
            >
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
            </MOTION.div>
          </MOTION.div>
        </div>
      </MOTION.div>
    </MOTION.div>
  );

  // Thank You Modal Component
  const ThankYouModal = () => (
    <MOTION.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm"
    >
      <MOTION.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-md w-full p-8 text-center"
      >
        <MOTION.div 
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1.1, 1]
          }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <svg className="w-16 h-16 mx-auto text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </MOTION.div>
        
        <MOTION.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-[#262626] mb-4"
        >
          Thank You for Booking!
        </MOTION.h2>
        
        <MOTION.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 text-[#262626]/80 mb-6"
        >
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
        </MOTION.div>
        
        <MOTION.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsThankYouModalOpen(false)}
          className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Close
        </MOTION.button>
      </MOTION.div>
    </MOTION.div>
  );

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Samuel Palmer',
      role: 'Founder & CEO',
      bio: 'With over 15 years in real estate, Samuel founded our company to revolutionize lead generation.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      phone: '+1 (555) 123-4567',
      email: 'samuel@example.com'
    },
    {
      id: 2,
      name: 'Vincent Fuller',
      role: 'Head of Sales',
      bio: 'Vincent brings a decade of experience in high-conversion lead generation strategies.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      phone: '+1 (555) 234-5678',
      email: 'vincent@example.com'
    },
    {
      id: 3,
      name: 'Brittany Watkins',
      role: 'Marketing Director',
      bio: 'Brittany oversees all marketing strategies and lead generation campaigns.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      phone: '+1 (555) 345-6789',
      email: 'brittany@example.com'
    },
    {
      id: 4,
      name: 'Michelle Ramirez',
      role: 'Lead Strategist',
      bio: 'Michelle specializes in conversion optimization and lead nurturing systems.',
      image: 'https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg',
      phone: '+1 (555) 456-7890',
      email: 'michelle@example.com'
    }
  ];

  // Stats data
  const stats = [
    { value: '1500+', label: 'Agents Served' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '25%+', label: 'Avg. Conversion' },
    { value: '200+', label: 'Markets Covered' }
  ];

  // Awards data
  const awards = [
    {
      title: 'Best Lead Generation',
      organization: 'Real Estate Awards',
      year: '2023',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      )
    },
    {
      title: 'Top Customer Service',
      organization: 'Marketing Excellence',
      year: '2023',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      )
    },
    {
      title: 'Innovation Award',
      organization: 'Tech Marketing',
      year: '2022',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
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
        <MOTION.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="About Us" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#153E42]/30 to-[#153E42]/100"></div>
        </MOTION.div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto">
          <MOTION.div 
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center min-h-[80vh] py-16"
          >
            {/* Headline */}
            <MOTION.div 
              variants={itemVariants}
              className="text-center mb-12 w-full max-w-4xl px-4"
            >
              <MOTION.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center mt-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🏢 ABOUT US</span>
              </MOTION.div>
              <MOTION.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight"
              >
                Our <span className="text-[#439CB0]">Story</span> & <span className="text-[#439CB0]">Team</span>
              </MOTION.h1>
              <MOTION.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Discover the people and values behind our real estate lead generation success
              </MOTION.p>
            </MOTION.div>

            {/* CTA Buttons */}
            <MOTION.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MOTION.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHover}
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 rounded-lg text-white font-medium shadow-lg"
              >
                🚀 Get Started Today
              </MOTION.button>
              <MOTION.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={secondaryButtonHover}
                className="px-8 py-4 rounded-lg text-white font-medium shadow-lg border border-white/20"
              >
                Learn More
              </MOTION.button>
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <MOTION.div 
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <MOTION.div variants={itemVariants} className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📜 OUR JOURNEY</span>
            </MOTION.div>
            <MOTION.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Building <span className="text-[#439CB0]">Our Company</span>
            </MOTION.h2>
            <MOTION.p variants={itemVariants} className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              From vision to reality - our evolution in real estate lead generation
            </MOTION.p>
          </MOTION.div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg" 
                  alt="Our Office" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <MOTION.p variants={itemVariants} className="text-[#262626] mb-6 leading-relaxed font-light">
                Founded in 2015, we began as a small team of passionate real estate professionals with a vision to revolutionize lead generation. What started as a local service has evolved into a nationally recognized real estate lead generation provider.
              </MOTION.p>
              <MOTION.p variants={itemVariants} className="text-[#262626] mb-8 leading-relaxed font-light">
                Today, we serve agents across the country, helping individuals and teams generate high-quality leads while assisting brokers in building profitable businesses. Our commitment to transparency, integrity, and exceptional results continues to set us apart in the industry.
              </MOTION.p>
              
              {/* Stats Grid */}
              <MOTION.div 
                variants={containerVariants}
                initial="hidden"
                animate={storyInView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <MOTION.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-[#153E42]/10 hover:bg-[#439CB0]/10 rounded-xl p-6 text-center transition-colors duration-300 group"
                  >
                    <div className="text-3xl font-bold text-[#153E42] mb-2 group-hover:text-[#439CB0]">{stat.value}</div>
                    <div className="text-sm text-[#262626] font-medium">{stat.label}</div>
                  </MOTION.div>
                ))}
              </MOTION.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        ref={valuesRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <MOTION.div 
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <MOTION.div variants={itemVariants} className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🌟 OUR VALUES</span>
            </MOTION.div>
            <MOTION.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              What <span className="text-[#439CB0]">Guides Us</span>
            </MOTION.h2>
            <MOTION.p variants={itemVariants} className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              The principles that shape every decision we make
            </MOTION.p>
          </MOTION.div>
          
          <MOTION.div 
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <MOTION.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group"
            >
              <div className="w-16 h-16 bg-[#439CB0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#439CB0] group-hover:text-[#153E42] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-3">Integrity</h3>
              <p className="text-[#262626]/80 text-sm leading-relaxed">
                We believe in complete transparency and honesty in all our dealings. Your trust is our most valued asset.
              </p>
            </MOTION.div>
            
            <MOTION.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group"
            >
              <div className="w-16 h-16 bg-[#439CB0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#439CB0] group-hover:text-[#153E42] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-3">Innovation</h3>
              <p className="text-[#262626]/80 text-sm leading-relaxed">
                We constantly seek better ways to serve our clients, leveraging technology and creative solutions.
              </p>
            </MOTION.div>
            
            <MOTION.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group"
            >
              <div className="w-16 h-16 bg-[#439CB0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#439CB0] group-hover:text-[#153E42] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-3">Community</h3>
              <p className="text-[#262626]/80 text-sm leading-relaxed">
                We're committed to building not just leads, but thriving businesses where agents can flourish.
              </p>
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section 
        ref={teamRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <MOTION.div 
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <MOTION.div variants={itemVariants} className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">👔 OUR TEAM</span>
            </MOTION.div>
            <MOTION.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              The <span className="text-[#439CB0]">Leadership</span>
            </MOTION.h2>
            <MOTION.p variants={itemVariants} className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Meet the passionate professionals driving our success
            </MOTION.p>
          </MOTION.div>
          
          <MOTION.div 
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <MOTION.div 
                key={member.id}
                variants={itemVariants}
                className="group relative rounded-xl overflow-hidden h-96 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Team Member Image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay - Full Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-dosis font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#439CB0] font-medium mb-4">{member.role}</p>
                    <p className="text-white/90 text-sm mb-6">{member.bio}</p>
                    
                    {/* Contact Info */}
                    <div className="mb-6">
                      <a href={`tel:${member.phone}`} className="block text-white hover:text-[#439CB0] transition-colors mb-2 font-medium">
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {member.phone}
                      </a>
                      <a href={`mailto:${member.email}`} className="block text-white hover:text-[#439CB0] transition-colors font-medium">
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </MOTION.div>
            ))}
          </MOTION.div>
        </div>
      </section>

      {/* Awards Section */}
      <section 
        ref={awardsRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <MOTION.div 
            initial="hidden"
            animate={awardsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <MOTION.div variants={itemVariants} className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🏆 RECOGNITION</span>
            </MOTION.div>
            <MOTION.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Awards & <span className="text-[#439CB0]">Accolades</span>
            </MOTION.h2>
            <MOTION.p variants={itemVariants} className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Celebrating excellence in real estate lead generation
            </MOTION.p>
          </MOTION.div>
          
          <MOTION.div 
            initial="hidden"
            animate={awardsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {awards.map((award, index) => (
              <MOTION.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group"
              >
                {/* Award Icon */}
                <div className="w-16 h-16 bg-[#439CB0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                  {React.cloneElement(award.icon, {
                    className: "w-8 h-8 text-[#439CB0] group-hover:text-[#153E42] transition-colors duration-300"
                  })}
                </div>
                
                {/* Award Content */}
                <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-2">{award.title}</h3>
                <p className="text-[#262626]/80 text-sm mb-2 font-medium">{award.organization}</p>
                <p className="text-[#439CB0] font-medium">{award.year}</p>
              </MOTION.div>
            ))}
          </MOTION.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#153E42] text-white overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=10')] bg-cover bg-center"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MOTION.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-dosis font-medium mb-6 leading-tight"
          >
            Start Your <span className="text-[#439CB0]">Lead Generation</span> Today
          </MOTION.h2>
          
          <MOTION.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Our expert team is ready to guide you through every step
          </MOTION.p>
          
          <MOTION.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <MOTION.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={buttonHover}
              onClick={() => setIsBookingModalOpen(true)}
              className="px-8 py-4 rounded-lg text-white font-medium shadow-lg"
            >
              🚀 Get Started
            </MOTION.button>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-[#439CB0] hover:border-[#439CB0]/80 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </MOTION.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;