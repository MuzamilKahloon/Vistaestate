import React, { useState } from 'react';
import { motion as MOTION, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Worker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSort, setActiveSort] = useState('default');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [isCreateWorkerModalOpen, setIsCreateWorkerModalOpen] = useState(false);
  const [workers, setWorkers] = useState([
    {
      id: 1,
      name: 'James Wilson',
      role: 'Master Plumber',
      phone: '+1 (555) 123-4567',
      email: 'james@proplumbing.com',
      bio: 'Specializing in residential and commercial plumbing with 12 years experience',
      image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg',
      experience: '12 years',
      rating: 4.9,
      services: ['Pipe Repair', 'Installation', 'Drain Cleaning'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Electrician',
      phone: '+1 (555) 234-5678',
      email: 'maria@brightspark.com',
      bio: 'Licensed electrician with expertise in home wiring and smart home installations',
      image: 'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg',
      experience: '8 years',
      rating: 4.8,
      services: ['Wiring', 'Panel Upgrades', 'Lighting'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Robert Chen',
      role: 'Carpenter',
      phone: '+1 (555) 345-6789',
      email: 'robert@finewoodwork.com',
      bio: 'Custom woodworking and home remodeling specialist',
      image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg',
      experience: '15 years',
      rating: 4.9,
      services: ['Cabinetry', 'Furniture', 'Renovations'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Lisa Thompson',
      role: 'Cleaning Specialist',
      phone: '+1 (555) 456-7890',
      email: 'lisa@sparkleclean.com',
      bio: 'Professional cleaning services for homes and offices',
      image: 'https://images.pexels.com/photos/5711695/pexels-photo-5711695.jpeg',
      experience: '6 years',
      rating: 4.7,
      services: ['Deep Cleaning', 'Move-In/Out', 'Regular Maintenance'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Landscaper',
      phone: '+1 (555) 567-8901',
      email: 'david@greenearth.com',
      bio: 'Landscape design and maintenance expert',
      image: 'https://images.pexels.com/photos/5325638/pexels-photo-5325638.jpeg',
      experience: '10 years',
      rating: 4.8,
      services: ['Lawn Care', 'Garden Design', 'Hardscaping'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      role: 'Painter',
      phone: '+1 (555) 678-9012',
      email: 'sarah@colorperfect.com',
      bio: 'Interior and exterior painting specialist',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      experience: '7 years',
      rating: 4.7,
      services: ['Wall Painting', 'Cabinet Refinishing', 'Decorative Finishes'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ]);

  const [newWorker, setNewWorker] = useState({
    name: '',
    role: '',
    phone: '',
    email: '',
    bio: '',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    experience: '',
    rating: '',
    services: [],
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: ''
    }
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    experience: '',
    availability: '',
    message: ''
  });

  // Animation refs and controls
  const heroRef = useRef(null);
  const workersRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.5 });
  const workersInView = useInView(workersRef, { once: true, amount: 0.2 });

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

  const handleNewWorkerChange = (e) => {
    const { name, value } = e.target;
    
    if (name in newWorker.social) {
      setNewWorker(prev => ({
        ...prev,
        social: {
          ...prev.social,
          [name]: value
        }
      }));
    } else {
      setNewWorker(prev => ({
        ...prev,
        [name]: value
      }));
    }
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
      serviceType: '',
      experience: '',
      availability: '',
      message: ''
    });
  };

  const handleCreateWorkerSubmit = (e) => {
    e.preventDefault();
    
    // Create new worker object with all required fields
    const workerToAdd = {
      ...newWorker,
      id: workers.length + 1,
      rating: parseFloat(newWorker.rating) || 4.5,
      experience: newWorker.experience ? `${newWorker.experience} years` : '1 year',
      services: newWorker.services.length > 0 ? newWorker.services : ['General Maintenance']
    };
    
    // Add the new worker to the list
    setWorkers(prev => [...prev, workerToAdd]);
    
    // Reset form and close modal
    setNewWorker({
      name: '',
      role: '',
      phone: '',
      email: '',
      bio: '',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      experience: '',
      rating: '',
      services: [],
      social: {
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: ''
      }
    });
    
    setIsCreateWorkerModalOpen(false);
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
              <h2 className="text-2xl font-bold text-[#262626]">Hire a Professional Worker</h2>
              <p className="text-[#262626]/80">Find skilled professionals for your property needs</p>
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
                <label className="block text-sm font-medium text-[#262626] mb-1">Service Type Needed</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                >
                  <option value="">Select Service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="carpentry">Carpentry</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="painting">Painting</option>
                  <option value="other">Other</option>
                </select>
              </MOTION.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Years of Experience Required</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                >
                  <option value="">Select Experience Level</option>
                  <option value="1-2">1-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">When do you need the service?</label>
                <input
                  type="datetime-local"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
                />
              </MOTION.div>
            </div>

            <MOTION.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#262626] mb-1">Additional Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe the work needed..."
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
              ></textarea>
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
                📅 Request Service Now
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
                  <span>Quick response within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Verified, background-checked professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Transparent pricing with no hidden fees</span>
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
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-[#439CB0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Quality workmanship warranty</span>
                </li>
              </ul>
            </MOTION.div>
          </MOTION.div>
        </div>
      </MOTION.div>
    </MOTION.div>
  );

  // Create Worker Modal Component
  const CreateWorkerModal = () => (
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
              <h2 className="text-2xl font-bold text-[#262626]">Add New Worker</h2>
              <p className="text-[#262626]/80">Add a new skilled professional to your team</p>
            </div>
            <MOTION.button 
              onClick={() => setIsCreateWorkerModalOpen(false)}
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
          <form onSubmit={handleCreateWorkerSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Full Name (Required)</label>
                <input
                  type="text"
                  name="name"
                  value={newWorker.name}
                  onChange={handleNewWorkerChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Role/Position (Required)</label>
                <input
                  type="text"
                  name="role"
                  value={newWorker.role}
                  onChange={handleNewWorkerChange}
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
                  value={newWorker.phone}
                  onChange={handleNewWorkerChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Email Address (Required)</label>
                <input
                  type="email"
                  name="email"
                  value={newWorker.email}
                  onChange={handleNewWorkerChange}
                  required
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                />
              </MOTION.div>
            </div>

            <MOTION.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#262626] mb-1">Bio/Description</label>
              <textarea
                name="bio"
                value={newWorker.bio}
                onChange={handleNewWorkerChange}
                rows={3}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
                placeholder="Brief description of the worker's expertise"
              ></textarea>
            </MOTION.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Years of Experience</label>
                <input
                  type="number"
                  name="experience"
                  value={newWorker.experience}
                  onChange={handleNewWorkerChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                  placeholder="e.g. 5"
                />
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Rating (1-5)</label>
                <input
                  type="number"
                  name="rating"
                  value={newWorker.rating}
                  onChange={handleNewWorkerChange}
                  min="1"
                  max="5"
                  step="0.1"
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                  placeholder="e.g. 4.5"
                />
              </MOTION.div>
            </div>

            <MOTION.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#262626] mb-1">Profile Image URL</label>
              <input
                type="url"
                name="image"
                value={newWorker.image}
                onChange={handleNewWorkerChange}
                className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
                placeholder="https://example.com/worker.jpg"
              />
            </MOTION.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Facebook Profile</label>
                <input
                  type="url"
                  name="facebook"
                  value={newWorker.social.facebook}
                  onChange={handleNewWorkerChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                  placeholder="https://facebook.com/username"
                />
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Twitter Profile</label>
                <input
                  type="url"
                  name="twitter"
                  value={newWorker.social.twitter}
                  onChange={handleNewWorkerChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                  placeholder="https://twitter.com/username"
                />
              </MOTION.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">Instagram Profile</label>
                <input
                  type="url"
                  name="instagram"
                  value={newWorker.social.instagram}
                  onChange={handleNewWorkerChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                  placeholder="https://instagram.com/username"
                />
              </MOTION.div>
              <MOTION.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#262626] mb-1">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  value={newWorker.social.linkedin}
                  onChange={handleNewWorkerChange}
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
                  placeholder="https://linkedin.com/in/username"
                />
              </MOTION.div>
            </div>

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
                ➕ Add Worker Profile
              </MOTION.button>
            </MOTION.div>
          </form>
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
          Service Request Received!
        </MOTION.h2>
        
        <MOTION.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 text-[#262626]/80 mb-6"
        >
          <p>We've received your service request and will contact you shortly.</p>
          
          <div className="bg-[#153E42]/10 p-4 rounded-lg text-left">
            <h3 className="font-semibold text-[#153E42] mb-2">Next Steps:</h3>
            <ul className="space-y-2 text-sm text-[#153E42]">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Our team will review your request</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>We'll match you with qualified professionals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-[#153E42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>You'll receive quotes within 24 hours</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-4 bg-[#262626]/10 p-4 rounded-lg">
            <p className="text-sm text-[#262626]/60">For urgent requests, please call us at +1 (555) 123-4567</p>
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

  // Sort workers based on active sort option
  const sortedWorkers = [...workers].sort((a, b) => {
    if (activeSort === 'rating') return b.rating - a.rating;
    if (activeSort === 'experience') return parseInt(b.experience) - parseInt(a.experience);
    return a.id - b.id; // Default sort
  });

  // Filter workers based on search query
  const filteredWorkers = sortedWorkers.filter(worker => {
    return worker.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           worker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
           worker.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="font-quicksand antialiased text-[#262626] bg-[#E2E2E2]">
      {/* Modals */}
      {isBookingModalOpen && <BookingModal />}
      {isThankYouModalOpen && <ThankYouModal />}
      {isCreateWorkerModalOpen && <CreateWorkerModal />}

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
            alt="Professional Workers" 
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
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🛠️ PROFESSIONAL SERVICES</span>
              </MOTION.div>
              <MOTION.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight"
              >
                Our <span className="text-[#439CB0]">Skilled Workers</span>
              </MOTION.h1>
              <MOTION.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Trusted professionals working with our agents to maintain your properties
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
                🚀 Request Service Now
              </MOTION.button>
              <MOTION.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={secondaryButtonHover}
                className="px-8 py-4 rounded-lg text-white font-medium shadow-lg border border-white/20"
              >
                Browse Workers
              </MOTION.button>
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={workersRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div 
            initial="hidden"
            animate={workersInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Search and Sort Bar */}
            <MOTION.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
            >
              <div className="w-full md:w-1/2 relative">
                <input
                  type="text"
                  placeholder="Search workers by name, specialty or service..."
                  className="w-full p-4 pl-12 border border-[#262626]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#262626]/60 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="w-full md:w-auto flex items-center gap-4">
                <MOTION.button
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={buttonHover}
                  onClick={() => setIsCreateWorkerModalOpen(true)}
                  className="px-6 py-3 rounded-lg text-white font-medium shadow-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Worker
                </MOTION.button>
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
                  </select>
                </div>
              </div>
            </MOTION.div>

            {/* Workers Grid */}
            {filteredWorkers.length > 0 ? (
              <MOTION.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredWorkers.map(worker => (
                  <MOTION.div 
                    key={worker.id}
                    variants={itemVariants}
                    className="group relative rounded-xl overflow-hidden h-96 shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-[#262626]/10"
                  >
                    {/* Worker Image with Full Cover Hover Overlay */}
                    <img 
                      src={worker.image} 
                      alt={worker.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay - Full Cover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#153E42]/80 via-[#153E42]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-dosis font-bold text-white mb-1">{worker.name}</h3>
                        <p className="text-[#439CB0] font-medium mb-4">{worker.role}</p>
                        <p className="text-white/90 text-sm mb-4">{worker.bio}</p>
                        
                        {/* Services */}
                        <div className="mb-4">
                          <p className="text-white font-medium mb-2">Services:</p>
                          <div className="flex flex-wrap gap-2">
                            {worker.services.map((service, index) => (
                              <span key={index} className="bg-[#439CB0]/30 text-white text-xs px-3 py-1 rounded-full">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="mb-6">
                          <a href={`tel:${worker.phone}`} className="block text-white hover:text-[#439CB0] transition-colors mb-2 font-medium">
                            <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {worker.phone}
                          </a>
                          <a href={`mailto:${worker.email}`} className="block text-white hover:text-[#439CB0] transition-colors font-medium">
                            <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {worker.email}
                          </a>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                          <a href={worker.social.facebook} className="text-white hover:text-[#439CB0] transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                          </a>
                          <a href={worker.social.twitter} className="text-white hover:text-[#439CB0] transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                          <a href={worker.social.instagram} className="text-white hover:text-[#439CB0] transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                          </a>
                          <a href={worker.social.linkedin} className="text-white hover:text-[#439CB0] transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </MOTION.div>
                ))}
              </MOTION.div>
            ) : (
              <MOTION.div 
                variants={itemVariants}
                className="text-center py-16 bg-white rounded-xl shadow border border-[#262626]/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#262626]/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-2">No workers found</h3>
                <p className="text-[#262626]/60">Try adjusting your search criteria</p>
              </MOTION.div>
            )}

            {/* Pagination */}
            <MOTION.div 
              variants={itemVariants}
              className="mt-16 flex justify-center"
            >
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
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#153E42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <MOTION.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#262626]/10 text-center hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-[#439CB0]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#439CB0] mb-2">24/7</h3>
              <p className="text-[#262626] font-medium">Emergency service availability</p>
            </MOTION.div>
            <MOTION.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#262626]/10 text-center hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-[#439CB0]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#439CB0] mb-2">100%</h3>
              <p className="text-[#262626] font-medium">Licensed and insured professionals</p>
            </MOTION.div>
            <MOTION.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#262626]/10 text-center hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-[#439CB0]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#439CB0] mb-2">5000+</h3>
              <p className="text-[#262626] font-medium">Completed projects annually</p>
            </MOTION.div>
          </MOTION.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#262626] text-white overflow-hidden">
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
            Need <span className="text-[#439CB0]">Professional Help</span> Today?
          </MOTION.h2>
          
          <MOTION.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Our skilled workers are ready to tackle any job, big or small
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
              Request Service Now
            </MOTION.button>
            <MOTION.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={secondaryButtonHover}
              className="px-8 py-4 rounded-lg text-white font-medium shadow-lg border border-white/20"
            >
              Call Us: (555) 123-4567
            </MOTION.button>
          </MOTION.div>
        </div>
      </section>
    </div>
  );
};

export default Worker;