import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as MOTION, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

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

  // Animation refs and controls
  const heroRef = useRef(null);
  const leadRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.5 });
  const leadInView = useInView(leadRef, { once: true, amount: 0.2 });

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
              <h2 className="text-2xl font-bold text-[#262626]">Lead Generation Consultation</h2>
              <p className="text-[#262626]/80">Get a custom lead generation plan for your real estate business</p>
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
                <label className="block text-sm font-medium text-[#262626] mb-1">Target Area (ZIP/City)</label>
                <input
                  type="text"
                  name="markets"
                  value={formData.markets}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
            </div>

            <MOTION.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#262626] mb-1">What types of leads are you looking for?</label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                placeholder="Sellers, buyers, investors, specific price ranges, etc."
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
                🔒 Schedule My Lead Gen Consultation
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
                  <span>Pay only for qualified leads</span>
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
        <MOTION.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Lead Generation" 
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
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📞 LEAD GENERATION</span>
              </MOTION.div>
              <MOTION.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight"
              >
                We play on the numbers so you only work with <span className="text-[#439CB0]">closings.</span>
              </MOTION.h1>
              <MOTION.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Pay only for qualified leads that meet your specific criteria - no monthly retainers or empty promises.
              </MOTION.p>
            </MOTION.div>

            {/* CTA Button */}
            <MOTION.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <MOTION.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHover}
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 rounded-lg text-white font-medium shadow-lg"
              >
                Get More Qualified Leads
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

      {/* Services Section */}
      <section 
        ref={leadRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div 
            initial="hidden"
            animate={leadInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Section Header */}
            <MOTION.div 
              variants={itemVariants}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🧊 OUR LEAD SERVICES</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
                Real Estate <span className="text-[#439CB0]">Lead Generation</span>
              </h2>
              <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
                High-intent leads delivered straight to your pipeline
              </p>
            </MOTION.div>
            
            {/* Services Grid */}
            <MOTION.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <MOTION.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group"
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
                </MOTION.div>
              ))}
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#153E42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <MOTION.div 
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
                Our <span className="text-[#439CB0]">4-Step Process</span>
              </h2>
              <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
                How we deliver high-quality leads to your business
              </p>
            </MOTION.div>
            
            {/* Process Steps */}
            <MOTION.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {processSteps.map((step, index) => (
                <MOTION.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 text-center"
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
                </MOTION.div>
              ))}
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* Results Section */}
     <section className="py-16 bg-[#E2E2E2]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <MOTION.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#153E42]/10 to-[#439CB0]/10 rounded-2xl p-8 md:p-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-dosis font-medium text-[#262626] mb-4">
            Real Results
          </h2>
          <p className="text-lg text-[#262626]/80 max-w-2xl font-light leading-relaxed">
            From initial contact to deal closure, we ensure each lead is nurtured and delivered with intent.
          </p>
        </div>
        {/* Optional second grid column content can go here */}
      </div>
    </MOTION.div>

    {/* Process Grid */}
    <MOTION.div 
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
    >
      {processSteps.map((step, index) => (
        <MOTION.div 
          key={index}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
        >
          <div className="w-12 h-12 mx-auto mb-4 bg-[#439CB0]/10 flex items-center justify-center rounded-full">
            {React.cloneElement(step.icon, {
              className: "w-6 h-6 text-[#439CB0]"
            })}
          </div>
          <h4 className="text-lg font-semibold text-[#262626] mb-2">{step.title}</h4>
          <p className="text-sm text-[#262626]/80">{step.description}</p>
        </MOTION.div>
      ))}
    </MOTION.div>
  </div>
</section>

    </div>
  );
};

export default LeadGeneration;
