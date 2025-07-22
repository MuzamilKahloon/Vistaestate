import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as MOTION, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Home = () => {
  // State for modal and form
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
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
  const agentsRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.5 });
  const agentsInView = useInView(agentsRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const blogInView = useInView(blogRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });

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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Real Estate Agent, Luxe Properties",
      quote: "Our lead volume increased by 300% within 2 months of starting their marketing services. The quality of leads is exceptional.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example1"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Broker, Urban Living Realty",
      quote: "Finally found a marketing partner that understands real estate. Their geo-targeted ads bring us exactly the clients we want.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example2"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Team Lead, Coastal Homes Group",
      quote: "The transparency in reporting is unmatched. We know exactly where every dollar goes and what results it generates.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example3"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Broker/Owner, Summit Realty",
      quote: "Conversion rates doubled since switching to their lead system. The ROI is incredible compared to other services we've tried.",
      rating: 4,
      videoUrl: "https://www.youtube.com/embed/example4"
    },
    {
      id: 5,
      name: "Jessica Kim",
      role: "Top Producer, Metro Homes",
      quote: "Their leads are pre-qualified and ready to buy. I've closed 8 deals in the first month alone from their referrals.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example5"
    },
    {
      id: 6,
      name: "Robert Taylor",
      role: "Team Leader, Elite Properties",
      quote: "The automated follow-up system saves us 15+ hours per week while increasing our conversion rate by 40%.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example6"
    },
    {
      id: 7,
      name: "Amanda Smith",
      role: "Agent, Dream Homes Realty",
      quote: "As a new agent, their leads helped me build my business faster than I ever imagined possible.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example7"
    },
    {
      id: 8,
      name: "James Peterson",
      role: "Investor, Prime Properties",
      quote: "Their data-driven approach consistently delivers high-intent buyers for our investment properties.",
      rating: 4,
      videoUrl: "https://www.youtube.com/embed/example8"
    },
    {
      id: 9,
      name: "Lisa Wong",
      role: "Broker Associate, Cityscape Realty",
      quote: "After 15 years in the business, I can confidently say this is the best lead source I've ever used.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example9"
    }
  ];

  const openTestimonialModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsTestimonialModalOpen(true);
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

  // Testimonial Modal Component
  const TestimonialModal = () => (
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
        className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          {/* Modal Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#262626] mb-1">{selectedTestimonial?.name}</h2>
              <p className="text-[#439CB0] font-medium">{selectedTestimonial?.role}</p>
            </div>
            <MOTION.button 
              onClick={() => setIsTestimonialModalOpen(false)}
              whileHover={{ scale: 1.1 }}
              className="text-[#262626]/60 hover:text-[#262626]"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </MOTION.button>
          </div>

          {/* Video Testimonial */}
          <div className="relative aspect-video bg-[#262626]/10 rounded-xl overflow-hidden mb-6">
            {selectedTestimonial?.videoUrl ? (
              <iframe 
                src={selectedTestimonial.videoUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Testimonial video"
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#262626]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
            )}
          </div>

          {/* Testimonial Content */}
          <div className="space-y-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < selectedTestimonial?.rating ? 'text-yellow-400' : 'text-[#262626]/20'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            
            <blockquote className="text-lg italic text-[#262626]/90 mb-6 leading-relaxed">
              "{selectedTestimonial?.quote}"
            </blockquote>
            
            <div className="pt-4 border-t border-[#262626]/10">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Get Started With Our Services
              </button>
            </div>
          </div>
        </div>
      </MOTION.div>
    </MOTION.div>
  );

  // Agents data
  const agents = [
    {
      name: 'Samuel Palmer',
      role: 'Founder & CEO, Realty Properties Inc.',
      bio: 'Award-winning real estate professional with over 15 years of experience in luxury properties and investment consulting.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      profileLink: '/agents'
    },
    {
      name: 'Vincent Fuller',
      role: 'Company Agent, Cool Houses Inc.',
      bio: 'Specializing in commercial properties and residential developments with a focus on sustainable architecture.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      profileLink: '/agents'
    },
    {
      name: 'Brittany Watkins',
      role: 'Company Agent, Smart Houses Inc.',
      bio: 'Expert in first-time homebuyer programs and neighborhood analysis with extensive market knowledge.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      profileLink: '/agents'
    },
    {
      name: 'Michelle Ramirez',
      role: 'Company Agent, Reallory Inc.',
      bio: 'International property specialist with expertise in luxury estates and investment portfolio management.',
      image: 'https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg',
      profileLink: '/agents'
    }
  ];

  // Services data
  const services = [
    {
      title: 'Property Management',
      description: 'Comprehensive property management solutions for residential and commercial properties with 24/7 support.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: 'Business Development',
      description: 'Strategic business development services for real estate investors and property developers.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      )
    },
    {
      title: 'Capital Improvements',
      description: 'Expert guidance on property improvements and renovations to maximize your investment returns.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: 'Finance Real Estate',
      description: 'Complete financing solutions including mortgages, investment loans, and financial planning services.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: 'Financial Reporting',
      description: 'Detailed financial analysis and reporting services for property portfolios and investment tracking.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      title: 'Asset Recovery',
      description: 'Professional asset recovery services to help maximize the value of distressed properties.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      )
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      title: 'How to Choose the Right Neighborhood',
      excerpt: 'Essential factors to consider when selecting the perfect neighborhood for your lifestyle, budget, and future growth potential.',
      image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80',
      date: 'June 15, 2023',
      link: '/blog/choosing-neighborhood'
    },
    {
      title: 'The Ultimate Home Buying Checklist',
      excerpt: 'A comprehensive guide covering everything you need to know before purchasing your dream home, from financing to final walkthrough.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'May 28, 2023',
      link: '/blog/home-buying-checklist'
    },
    {
      title: 'Investment Properties: What to Look For',
      excerpt: 'Key indicators and metrics that identify profitable investment opportunities in today\'s dynamic real estate market.',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'April 12, 2023',
      link: '/blog/investment-properties'
    }
  ];

  return (
    <div className="font-quicksand antialiased text-[#262626] bg-[#E2E2E2]">
      {/* Modals */}
      {isBookingModalOpen && <BookingModal />}
      {isThankYouModalOpen && <ThankYouModal />}
      {isTestimonialModalOpen && <TestimonialModal />}

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
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">✨ PREMIUM REAL ESTATE EXPERIENCE</span>
              </MOTION.div>
              <MOTION.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight"
              >
                Exclusive Real Estate Leads <span className="text-[#439CB0]">Without the Zillow Price Tag</span>
              </MOTION.h1>
              <MOTION.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Pay only for what you get. No monthly commitment. Cancel anytime
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

      {/* Meet Our Agents */}
      <section 
        ref={agentsRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <MOTION.div 
            initial="hidden"
            animate={agentsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <MOTION.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Meet Our 
              <span className="block text-[#439CB0]">
                Expert Agents
              </span>
            </MOTION.h2>
            <MOTION.p variants={itemVariants} className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Dedicated professionals with extensive market knowledge and personalized service
            </MOTION.p>
          </MOTION.div>
          
          {/* Agents Grid */}
          <MOTION.div 
            initial="hidden"
            animate={agentsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {agents.map((agent, index) => (
              <MOTION.div 
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#262626]/10"
              >
                {/* Agent Image */}
                <div className="relative h-72 overflow-hidden">
                  <MOTION.img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Agent Info */}
                <div className="p-6">
                  <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-1 group-hover:text-[#439CB0] transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-[#439CB0] text-sm mb-3 font-medium">{agent.role}</p>
                  <p className="text-[#262626]/80 text-sm mb-6 leading-relaxed">
                    {agent.bio}
                  </p>
                  
                  {/* View Profile Link */}
                  <Link 
                    to={agent.profileLink} 
                    className="inline-flex items-center text-[#439CB0] hover:text-[#153E42] font-medium text-sm transition-colors duration-300"
                  >
                    View Profile
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </MOTION.div>
            ))}
          </MOTION.div>
        </div>
      </section>

      {/* Our Services */}
      <section 
        ref={servicesRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <MOTION.div 
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <MOTION.div variants={itemVariants} className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🌟 WHAT WE OFFER</span>
            </MOTION.div>
            <MOTION.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight whitespace-nowrap">
              Our Comprehensive <span className="text-[#439CB0]">Services</span>
            </MOTION.h2>
            <MOTION.p variants={itemVariants} className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              End-to-end real estate solutions tailored to your unique needs
            </MOTION.p>
          </MOTION.div>
          
          {/* Services Grid */}
          <MOTION.div 
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <MOTION.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group"
              >
                {/* Service Icon */}
                <MOTION.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-16 h-16 bg-[#439CB0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300"
                >
                  {React.cloneElement(service.icon, {
                    className: "w-8 h-8 text-[#439CB0] group-hover:text-[#153E42] transition-colors duration-300"
                  })}
                </MOTION.div>
                
                {/* Service Content */}
                <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-3 whitespace-nowrap">{service.title}</h3>
                <p className="text-[#262626]/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </MOTION.div>
            ))}
          </MOTION.div>
        </div>
      </section>

      {/* From Our Blog */}
      <section 
        ref={blogRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <MOTION.div 
            initial="hidden"
            animate={blogInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <MOTION.div variants={itemVariants} className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📰 LATEST INSIGHTS</span>
            </MOTION.div>
            <MOTION.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight whitespace-nowrap">
              From Our <span className="text-[#439CB0]">Blog</span>
            </MOTION.h2>
            <MOTION.p variants={itemVariants} className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Expert advice and market insights to guide your property journey
            </MOTION.p>
          </MOTION.div>
          
          {/* Blog Posts Grid */}
          <MOTION.div 
            initial="hidden"
            animate={blogInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <MOTION.div 
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#262626]/10"
              >
                {/* Post Image */}
                <div className="h-60 overflow-hidden">
                  <MOTION.img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <span className="text-xs text-[#262626]/60 font-medium">{post.date}</span>
                  <h3 className="text-xl font-dosis font-semibold text-[#262626] my-3 group-hover:text-[#439CB0] transition-colors whitespace-nowrap">
                    {post.title}
                  </h3>
                  <p className="text-[#262626]/80 text-sm mb-5 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Read Article Link */}
                  <Link 
                    to={post.link} 
                    className="inline-flex items-center text-[#439CB0] hover:text-[#153E42] font-medium text-sm transition-colors duration-300"
                  >
                    Read Article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </MOTION.div>
            ))}
          </MOTION.div>
          
          {/* View All Button */}
          <MOTION.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12 space-x-4"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-[#439CB0] hover:bg-[#153E42] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            
            <MOTION.button 
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={secondaryButtonHover}
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              🚀 Book Free Strategy Call
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </MOTION.button>
          </MOTION.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-24 bg-[#153E42]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <MOTION.div 
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <MOTION.div variants={itemVariants} className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">💬 REAL RESULTS</span>
            </MOTION.div>
            <MOTION.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight">
              What Our <span className="text-[#439CB0]">Clients Say</span>
            </MOTION.h2>
            <MOTION.p variants={itemVariants} className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Real agents achieving real results with our marketing services
            </MOTION.p>
          </MOTION.div>
          
          {/* Testimonials Carousel */}
          <MOTION.div 
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative"
          >
            <div className="overflow-hidden">
              <MOTION.div 
                className="flex gap-8 pb-8"
                drag="x"
                dragConstraints={{ right: 0, left: -2000 }}
                whileTap={{ cursor: "grabbing" }}
              >
                {testimonials.map((testimonial, ) => (
                  <MOTION.div 
                    key={testimonial.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="flex-shrink-0 w-80 bg-[#E2E2E2] rounded-xl p-6 cursor-pointer"
                    onClick={() => openTestimonialModal(testimonial)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#439CB0]/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#439CB0]">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#262626]">{testimonial.name}</h3>
                        <p className="text-sm text-[#439CB0]">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-[#262626]/90 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-[#262626]/20'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-[#439CB0] font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      Watch Video Testimonial
                    </div>
                  </MOTION.div>
                ))}
              </MOTION.div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-white/30"></div>
                ))}
                <div className="w-4 h-2 rounded-full bg-[#439CB0]"></div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-white/30"></div>
                ))}
              </div>
            </div>
          </MOTION.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#153E42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MOTION.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-6 leading-tight">
              Ready to Transform Your <span className="text-[#439CB0]">Real Estate Business?</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Join hundreds of agents who are scaling their business with our exclusive lead generation system
            </p>
            <MOTION.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={buttonHover}
              onClick={() => setIsBookingModalOpen(true)}
              className="px-8 py-4 rounded-lg text-white font-medium shadow-lg"
            >
              🔥 Get Started Today
            </MOTION.button>
          </MOTION.div>
        </div>
      </section>
    </div>
  );
};

export default Home;