import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as MOTION, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

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

  // Animation refs and controls
  const heroRef = useRef(null);
  const areaRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.5 });
  const areaInView = useInView(areaRef, { once: true, amount: 0.2 });

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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
        <MOTION.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Home" 
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
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📍 AREA AVAILABILITY</span>
              </MOTION.div>
              <MOTION.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight"
              >
                Is Your <span className="text-[#439CB0]">Area Available?</span>
              </MOTION.h1>
              <MOTION.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Our services are limited to select high-converting ZIP codes. Search below to reserve yours before it's booked out.
              </MOTION.p>
            </MOTION.div>

            {/* Search Bar */}
            <MOTION.div 
              variants={itemVariants}
              className="max-w-xl w-full relative"
            >
              <input
                type="text"
                placeholder="Search by ZIP code, city, or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white/10 backdrop-blur-sm text-white placeholder-white/70 shadow-lg"
              />
              <svg 
                className="w-5 h-5 absolute right-4 top-4 text-white/70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* ZIP Codes Section */}
      <section 
        ref={areaRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div 
            initial="hidden"
            animate={areaInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Legend */}
            <MOTION.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
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
            </MOTION.div>

            {/* ZIP Codes Grid */}
            <MOTION.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredZipCodes.map((zip, index) => (
                <MOTION.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-xl p-6 shadow-md border-l-4 ${statusConfig[zip.status].color} hover:shadow-lg transition-all duration-300`}
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
                  <MOTION.button
                    onClick={() => setIsBookingModalOpen(true)}
                    disabled={zip.status === 'taken'}
                    whileHover={{ scale: zip.status !== 'taken' ? 1.03 : 1 }}
                    whileTap={{ scale: zip.status !== 'taken' ? 0.97 : 1 }}
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
                  </MOTION.button>
                </MOTION.div>
              ))}
            </MOTION.div>

            {/* No Results */}
            {filteredZipCodes.length === 0 && (
              <MOTION.div 
                variants={itemVariants}
                className="text-center py-12 bg-white rounded-xl shadow border border-[#262626]/10"
              >
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
              </MOTION.div>
            )}

            {/* CTA */}
            <MOTION.div 
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <div className="bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-xl p-6 max-w-2xl mx-auto mb-8">
                <h3 className="text-lg font-dosis font-medium text-[#439CB0] mb-2">
                  Why booking is important
                </h3>
                <p className="text-[#262626]">
                  We only work with one agent per area to maintain performance and exclusivity. 
                  Booking ensures you're next in line for top-producing ZIPs.
                </p>
              </div>
              <MOTION.button
                onClick={() => setIsBookingModalOpen(true)}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHover}
                className="text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center"
              >
                Schedule a Strategy Call
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </MOTION.button>
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mb-10 py-20 bg-[#262626] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=10')] bg-cover bg-center"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MOTION.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-dosis font-medium mb-6 leading-tight"
          >
            Ready to <span className="text-[#439CB0]">Claim Your Area</span>?
          </MOTION.h2>
          
          <MOTION.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Don't miss out on exclusive leads in your market
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
              Reserve My Area
            </MOTION.button>
            <MOTION.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={secondaryButtonHover}
              className="px-8 py-4 rounded-lg text-white font-medium shadow-lg border border-white/20"
            >
              Browse Properties
            </MOTION.button>
          </MOTION.div>
        </div>
      </section>
    </div>
  );
};

export default Area;