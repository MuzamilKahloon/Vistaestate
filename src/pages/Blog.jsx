import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as MOTION, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
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
  const postsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.5 });
  const postsInView = useInView(postsRef, { once: true, amount: 0.2 });

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

  // Blog categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'market-trends', name: 'Market Trends' },
    { id: 'home-improvement', name: 'Home Improvement' },
    { id: 'investment', name: 'Investment' },
    { id: 'neighborhoods', name: 'Neighborhoods' },
    { id: 'guides', name: 'Guides' }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: '2024 Real Estate Market Predictions',
      excerpt: 'Discover what experts are saying about the upcoming year in real estate and how it might affect your buying or selling decisions.',
      date: 'January 15, 2024',
      category: 'market-trends',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Johnson',
      comments: 12,
      featured: true
    },
    {
      id: 2,
      title: '10 Home Improvement Projects With the Best ROI',
      excerpt: 'Learn which home improvements give you the most bang for your buck when it comes time to sell your property.',
      date: 'December 5, 2023',
      category: 'home-improvement',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Chen',
      comments: 8,
      featured: false
    },
    {
      id: 3,
      title: 'The Complete Guide to Buying Rental Property',
      excerpt: 'Everything you need to know about purchasing your first investment property and becoming a landlord.',
      date: 'November 22, 2023',
      category: 'investment',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'David Wilson',
      comments: 5,
      featured: false
    },
    {
      id: 4,
      title: 'Top 5 Up-and-Coming Neighborhoods in 2024',
      excerpt: 'These neighborhoods are poised for growth in the coming year - perfect for buyers looking for value.',
      date: 'November 10, 2023',
      category: 'neighborhoods',
      image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Emma Rodriguez',
      comments: 15,
      featured: false
    },
    {
      id: 5,
      title: 'First-Time Home Buyer Mistakes to Avoid',
      excerpt: 'Learn from others mistakes with this guide to common pitfalls for first-time buyers and how to steer clear.',
      date: 'October 28, 2023',
      category: 'guides',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Johnson',
      comments: 7,
      featured: false
    },
    {
      id: 6,
      title: 'How to Stage Your Home for a Quick Sale',
      excerpt: 'Professional staging tips that can help your home sell faster and for more money.',
      date: 'October 15, 2023',
      category: 'home-improvement',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Chen',
      comments: 9,
      featured: false
    }
  ];

  // Recent comments data
  const recentComments = [
    {
      id: 1,
      author: 'John D.',
      text: 'Great insights on the market trends!',
      post: '2024 Real Estate Market Predictions',
      time: '2 days ago'
    },
    {
      id: 2,
      author: 'Lisa M.',
      text: 'The ROI numbers were very helpful.',
      post: '10 Home Improvement Projects With the Best ROI',
      time: '1 week ago'
    },
    {
      id: 3,
      author: 'Robert T.',
      text: 'Looking forward to more neighborhood guides!',
      post: 'Top 5 Up-and-Coming Neighborhoods in 2024',
      time: '2 weeks ago'
    }
  ];

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post (first featured post found)
  const featuredPost = blogPosts.find(post => post.featured);

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
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📖 OUR BLOG</span>
              </MOTION.div>
              <MOTION.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight"
              >
                Real Estate <span className="text-[#439CB0]">Insights</span>
              </MOTION.h1>
              <MOTION.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Expert advice, market trends, and property tips from our team
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
                Explore Articles
              </MOTION.button>
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={postsRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div 
            initial="hidden"
            animate={postsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Blog Posts Column */}
            <div className="lg:w-2/3">
              {/* Featured Post (if exists) */}
              {featuredPost && (
                <MOTION.div 
                  variants={itemVariants}
                  className="featured-post mb-12 bg-white rounded-xl shadow-md overflow-hidden border border-[#262626]/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-96 object-cover" />
                    <div className="absolute top-4 left-4 bg-[#439CB0] text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-[#262626]/80 text-sm mb-4">
                      <span className="mr-4">{featuredPost.date}</span>
                      <span className="mr-4">By {featuredPost.author}</span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {featuredPost.comments} Comments
                      </span>
                    </div>
                    <h2 className="text-2xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
                      <Link to={`/blog/${featuredPost.id}`} className="hover:text-[#439CB0] transition duration-300">
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-[#262626]/80 mb-6">{featuredPost.excerpt}</p>
                    <Link 
                      to={`/blog/${featuredPost.id}`} 
                      className="inline-flex items-center bg-[#439CB0] hover:bg-[#153E42] text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </MOTION.div>
              )}

              {/* Category Filter */}
              <MOTION.div 
                variants={itemVariants}
                className="mb-8 flex flex-wrap gap-2"
              >
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.id ? 'bg-[#439CB0] text-white' : 'bg-[#E2E2E2] text-[#262626] hover:bg-[#153E42]/10'}`}
                  >
                    {category.name}
                  </button>
                ))}
              </MOTION.div>

              {/* Search Box */}
              <MOTION.div 
                variants={itemVariants}
                className="mb-8 relative"
              >
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full p-4 pl-12 border border-[#262626]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent transition duration-200 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#262626]/60 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </MOTION.div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <MOTION.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate={postsInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {filteredPosts.filter(post => !post.featured).map(post => (
                    <MOTION.div 
                      key={post.id}
                      variants={itemVariants}
                      className="blog-post bg-white rounded-xl shadow-md overflow-hidden border border-[#262626]/10 hover:shadow-lg transition duration-300"
                    >
                      <div className="relative">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="absolute top-4 left-4 bg-[#439CB0] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-[#262626]/80 text-xs mb-3">
                          <span className="mr-4">{post.date}</span>
                          <span>By {post.author}</span>
                        </div>
                        <h3 className="text-xl font-dosis font-medium text-[#262626] mb-3 leading-tight">
                          <Link to={`/blog/${post.id}`} className="hover:text-[#439CB0] transition duration-300">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-[#262626]/80 mb-4 text-sm">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="text-[#439CB0] hover:text-[#153E42] font-medium text-sm flex items-center"
                          >
                            Read More
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </Link>
                          <span className="flex items-center text-[#262626]/80 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            {post.comments} Comments
                          </span>
                        </div>
                      </div>
                    </MOTION.div>
                  ))}
                </MOTION.div>
              ) : (
                <MOTION.div 
                  variants={itemVariants}
                  className="text-center py-12 bg-white rounded-xl shadow-md p-8 border border-[#262626]/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#262626]/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-dosis font-medium text-[#262626] mb-2">No articles found</h3>
                  <p className="text-[#262626]/60 text-sm">Try adjusting your search or filter criteria</p>
                </MOTION.div>
              )}

              {/* Pagination */}
              <MOTION.div 
                variants={itemVariants}
                className="mt-12 flex justify-center"
              >
                <nav className="flex items-center space-x-2">
                  <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 text-sm font-medium">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-[#439CB0] text-white rounded-lg text-sm font-medium">
                    1
                  </button>
                  <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 text-sm font-medium">
                    2
                  </button>
                  <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 text-sm font-medium">
                    3
                  </button>
                  <span className="px-2 text-[#262626]/60">...</span>
                  <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 text-sm font-medium">
                    8
                  </button>
                  <button className="px-4 py-2 border border-[#262626]/20 rounded-lg text-[#262626]/80 hover:bg-[#153E42]/10 text-sm font-medium">
                    Next
                  </button>
                </nav>
              </MOTION.div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:w-1/3">
              <MOTION.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 mb-8 border border-[#262626]/10"
              >
                <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">ℹ️ ABOUT THE BLOG</span>
                </div>
                <h2 className="text-2xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
                  Real Estate <span className="text-[#439CB0]">Knowledge</span>
                </h2>
                <p className="text-[#262626]/80 text-sm mb-4">
                  Our blog provides expert insights, market trends, and practical advice for agents looking to generate more leads and grow their business.
                </p>
                <p className="text-[#262626]/80 text-sm">
                  Our team of experienced marketers share their knowledge to help you make informed decisions about your lead generation strategy.
                </p>
              </MOTION.div>

              <MOTION.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 mb-8 border border-[#262626]/10"
              >
                <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🗂️ CATEGORIES</span>
                </div>
                <h2 className="text-2xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
                  Browse By <span className="text-[#439CB0]">Topic</span>
                </h2>
                <ul className="space-y-2">
                  {categories.filter(cat => cat.id !== 'all').map(category => (
                    <li key={category.id}>
                      <button 
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex justify-between w-full px-4 py-3 rounded-lg text-sm ${activeCategory === category.id ? 'bg-[#439CB0]/10 text-[#439CB0]' : 'hover:bg-[#153E42]/10 text-[#262626]'}`}
                      >
                        <span>{category.name}</span>
                        <span className="bg-[#E2E2E2] text-[#262626] px-2 py-1 rounded-full text-xs">
                          {blogPosts.filter(post => post.category === category.id).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </MOTION.div>

              <MOTION.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 mb-8 border border-[#262626]/10"
              >
                <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">💬 RECENT COMMENTS</span>
                </div>
                <h2 className="text-2xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
                  Community <span className="text-[#439CB0]">Feedback</span>
                </h2>
                <ul className="space-y-4">
                  {recentComments.map(comment => (
                    <li key={comment.id} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-10 w-10 rounded-full bg-[#439CB0]/10 flex items-center justify-center text-[#439CB0] font-medium">
                          {comment.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#262626]">{comment.author}</div>
                        <div className="text-sm text-[#262626]/80">{comment.text}</div>
                        <div className="text-xs text-[#262626]/60 mt-1">
                          On <Link to="#" className="text-[#439CB0] hover:underline">{comment.post}</Link> • {comment.time}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </MOTION.div>

              <MOTION.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 border border-[#262626]/10"
              >
                <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">✉️ SUBSCRIBE</span>
                </div>
                <h2 className="text-2xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
                  Stay <span className="text-[#439CB0]">Updated</span>
                </h2>
                <p className="text-[#262626]/80 text-sm mb-4">Get the latest articles and news delivered to your inbox</p>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-[#262626]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent text-sm bg-white"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-[#262626]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent text-sm bg-white"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    Subscribe Now
                  </button>
                </form>
              </MOTION.div>
            </div>
          </MOTION.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;