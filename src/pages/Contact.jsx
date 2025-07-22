import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as MOTION, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ setIsBookingModalOpen] = useState(false);

  // Animation refs and controls
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.5 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });

  const controls = useAnimation();

  useEffect(() => {
    if (heroInView) {
      controls.start("visible");
    }
  }, [heroInView, controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
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

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "info@realtyproperties.com",
      link: "mailto:info@realtyproperties.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office",
      content: "123 Real Estate Ave, Suite 456\nNew York, NY 10001",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="font-quicksand antialiased text-[#262626] bg-[#E2E2E2]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-[#153E42] overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <motion.div 
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
        </motion.div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center min-h-[80vh] py-16"
          >
            {/* Headline */}
            <motion.div 
              variants={itemVariants}
              className="text-center mb-12 w-full max-w-4xl px-4"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center mt-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📞 CONTACT US</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight"
              >
                Get In <span className="text-[#439CB0]">Touch</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Our team is ready to assist you with all your real estate needs
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHover}
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 rounded-lg text-white font-medium shadow-lg"
              >
                🚀 Get Started Today
              </motion.button>
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={secondaryButtonHover}
                className="px-8 py-4 rounded-lg text-white font-medium shadow-lg border border-white/20"
              >
                Browse Properties
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={contactRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-[#262626]/10">
                <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">✉️ SEND A MESSAGE</span>
                </div>
                <h2 className="text-3xl font-dosis font-medium text-[#262626] mb-6 leading-tight">
                  Contact <span className="text-[#439CB0]">Form</span>
                </h2>
                
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-[#439CB0]/10 rounded-lg border border-[#439CB0]/20"
                  >
                    <div className="flex items-center text-[#439CB0]">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Thank you for your message! We'll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#262626] mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#262626]/20 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white transition duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#262626] mb-2">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#262626]/20 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white transition duration-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#262626] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#262626]/20 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white transition duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#262626] mb-2">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#262626]/20 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white transition duration-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#262626] mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-[#262626]/20 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white transition duration-200"
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={buttonHover}
                    className="w-full text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/3"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-[#262626]/10 mb-8">
                <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📌 CONTACT INFO</span>
                </div>
                <h2 className="text-3xl font-dosis font-medium text-[#262626] mb-6 leading-tight">
                  Our <span className="text-[#439CB0]">Details</span>
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 bg-[#439CB0]/10 p-3 rounded-lg text-[#439CB0] mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-dosis font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-[#262626]/80 hover:text-[#439CB0] text-sm">
                            {info.content.split('\n').map((line, i) => (
                              <span key={i} className="block">{line}</span>
                            ))}
                          </a>
                        ) : (
                          <div className="text-[#262626]/80 text-sm">
                            {info.content.split('\n').map((line, i) => (
                              <span key={i} className="block">{line}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border border-[#262626]/10">
                <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🕒 OFFICE HOURS</span>
                </div>
                <h2 className="text-3xl font-dosis font-medium text-[#262626] mb-6 leading-tight">
                  When We're <span className="text-[#439CB0]">Available</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-[#262626]/20 pb-3">
                    <span className="text-[#262626]">Monday - Friday</span>
                    <span className="font-medium text-[#262626]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-[#262626]/20 pb-3">
                    <span className="text-[#262626]">Saturday</span>
                    <span className="font-medium text-[#262626]">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#262626]">Sunday</span>
                    <span className="font-medium text-[#262626]">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="h-96 mb-14 w-full bg-[#153E42]"
      >
        <iframe
          title="Real Estate Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510037!2d-73.9878449242374!3d40.74844097138998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.section>

     
    </div>
  );
};

export default Contact;