import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AVATAR_URL = 'https://randomuser.me/api/portraits/men/32.jpg'; // royalty-free avatar

const heroWords = [
  { text: 'Exclusive', className: 'text-[#439CB0] font-bold' },
  { text: 'Real', className: 'text-white font-bold' },
  { text: 'Estate', className: 'text-white font-bold' },
  { text: 'Leads', className: 'text-[#439CB0] font-bold' },
  { text: 'Without', className: 'text-white font-bold' },
  { text: 'the', className: 'text-white font-bold' },
  { text: 'Zillow', className: 'text-[#439CB0] font-bold' },
  { text: 'Price', className: 'text-white font-bold' },
  { text: 'Tag.', className: 'text-[#439CB0] font-bold' },
];

const subWords = [
  { text: 'Pay', className: 'text-white' },
  { text: 'only', className: 'text-[#439CB0]' },
  { text: 'for', className: 'text-white' },
  { text: 'what', className: 'text-[#439CB0]' },
  { text: 'you', className: 'text-white' },
  { text: 'get.', className: 'text-[#439CB0]' },
  { text: 'No', className: 'text-white' },
  { text: 'monthly', className: 'text-[#439CB0]' },
  { text: 'commitment.', className: 'text-white' },
  { text: 'Cancel', className: 'text-[#439CB0]' },
  { text: 'anytime', className: 'text-white' },
];

const Home = () => {
  // State for modal and form
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
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
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselGroupRef = useRef(null);

 

  // Hero section refs for GSAP
  const heroTextRef = useRef(null);
  const heroCardRef = useRef(null);
  const orbRef = useRef(null);
  const chartBarRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    // Animate headline words
    gsap.set('.hero-headline-word', { opacity: 0, y: 30, scale: 0.95 });
    gsap.to('.hero-headline-word', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.13,
      ease: 'power3.out',
      delay: 0.2,
    });
    // Animate subtext words
    gsap.set('.hero-subtext-word', { opacity: 0, y: 20, scale: 0.95 });
    gsap.to('.hero-subtext-word', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 1.2,
    });
    // Animate orb floating
    gsap.to(orbRef.current, {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: 'sine.inOut',
    });
    // Animate card entrance
    gsap.fromTo(
      heroCardRef.current,
      { x: 80, y: 40, opacity: 0, scale: 0.95, filter: 'blur(8px)' },
      { x: 0, y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power4.out', delay: 0.5 }
    );
    // Animate chart bar
    gsap.fromTo(
      chartBarRef.current,
      { width: '0%' },
      { width: '78%', duration: 1.2, ease: 'power2.out', delay: 1.6 }
    );
    // Parallax scroll effect (subtle)
    gsap.to(heroTextRef.current, {
      y: -20,
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.7,
      },
      ease: 'power1.out',
    });
    gsap.to(heroCardRef.current, {
      y: 20,
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.7,
      },
      ease: 'power1.out',
    });
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

  // Remove animation variants
  // Remove buttonHover and secondaryButtonHover objects

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Real Estate Agent, Luxe Properties",
      quote: "Our lead volume increased by 300% within 2 months of starting their marketing services. The quality of leads is exceptional.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example1",
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Broker, Urban Living Realty",
      quote: "Finally found a marketing partner that understands real estate. Their geo-targeted ads bring us exactly the clients we want.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example2",
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Team Lead, Coastal Homes Group",
      quote: "The transparency in reporting is unmatched. We know exactly where every dollar goes and what results it generates.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example3",
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Broker/Owner, Summit Realty",
      quote: "Conversion rates doubled since switching to their lead system. The ROI is incredible compared to other services we've tried.",
      rating: 4,
      videoUrl: "https://www.youtube.com/embed/example4",
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      id: 5,
      name: "Jessica Kim",
      role: "Top Producer, Metro Homes",
      quote: "Their leads are pre-qualified and ready to buy. I've closed 8 deals in the first month alone from their referrals.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example5",
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
      id: 6,
      name: "Robert Taylor",
      role: "Team Leader, Elite Properties",
      quote: "The automated follow-up system saves us 15+ hours per week while increasing our conversion rate by 40%.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example6",
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    {
      id: 7,
      name: "Amanda Smith",
      role: "Agent, Dream Homes Realty",
      quote: "As a new agent, their leads helped me build my business faster than I ever imagined possible.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example7",
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
      id: 8,
      name: "James Peterson",
      role: "Investor, Prime Properties",
      quote: "Their data-driven approach consistently delivers high-intent buyers for our investment properties.",
      rating: 4,
      videoUrl: "https://www.youtube.com/embed/example8",
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    {
      id: 9,
      name: "Lisa Wong",
      role: "Broker Associate, Cityscape Realty",
      quote: "After 15 years in the business, I can confidently say this is the best lead source I've ever used.",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/example9",
      avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
    }
  ];

  useEffect(() => {
    // Carousel group animation
    let timeout;
    const animateCarousel = () => {
      if (carouselGroupRef.current) {
        gsap.fromTo(
          carouselGroupRef.current.children,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
        );
      }
      timeout = setTimeout(() => {
        if (carouselGroupRef.current) {
          gsap.to(carouselGroupRef.current.children, {
            x: -100,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.in',
            onComplete: () => {
              setCarouselIndex(prev => (prev + 3) % testimonials.length);
            }
          });
        } else {
          setCarouselIndex(prev => (prev + 3) % testimonials.length);
        }
      }, 3000);
    };
    animateCarousel();
    return () => clearTimeout(timeout);
  }, [carouselIndex, testimonials.length]);

  // Cursor animation on card hover
  const handleTestimonialHover = (idx) => {
    if (carouselGroupRef.current && carouselGroupRef.current.children[idx]) {
      gsap.to(carouselGroupRef.current.children[idx], { scale: 1.05, boxShadow: '0 8px 32px 0 rgba(67,156,176,0.25), 0 1.5px 8px 0 rgba(21,62,66,0.10)', cursor: 'pointer', duration: 0.3 });
    }
  };
  const handleTestimonialLeave = (idx) => {
    if (carouselGroupRef.current && carouselGroupRef.current.children[idx]) {
      gsap.to(carouselGroupRef.current.children[idx], { scale: 1, boxShadow: '', cursor: 'default', duration: 0.3 });
    }
  };

  // Booking Modal Component
  const BookingModal = () => {
    // No refs, no animation, no extra state
    return (
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
                    className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
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
                  className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white"
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
  };

  // Thank You Modal Component
  const ThankYouModal = () => (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm"
    >
      <div 
        className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-md w-full p-8 text-center"
      >
        <div 
          className="mb-6"
        >
          <svg className="w-16 h-16 mx-auto text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        
        <h2 
          className="text-2xl font-bold text-[#262626] mb-4"
        >
          Thank You for Booking!
        </h2>
        
        <div 
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
        </div>
        
        <button
          className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          onClick={() => setIsThankYouModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );

  // Testimonial Modal Component
  const TestimonialModal = () => (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm"
    >
      <div 
        className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          {/* Modal Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#262626] mb-1">{testimonials.find(t => t.id === isTestimonialModalOpen)?.name}</h2>
              <p className="text-[#439CB0] font-medium">{testimonials.find(t => t.id === isTestimonialModalOpen)?.role}</p>
            </div>
            <button 
              onClick={() => setIsTestimonialModalOpen(false)}
              className="text-[#262626]/60 hover:text-[#262626]"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Video Testimonial */}
          <div className="relative aspect-video bg-[#262626]/10 rounded-xl overflow-hidden mb-6">
            {testimonials.find(t => t.id === isTestimonialModalOpen)?.videoUrl ? (
              <iframe 
                src={testimonials.find(t => t.id === isTestimonialModalOpen)?.videoUrl}
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
                  className={`w-5 h-5 ${i < testimonials.find(t => t.id === isTestimonialModalOpen)?.rating ? 'text-yellow-400' : 'text-[#262626]/20'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            
            <blockquote className="text-lg italic text-[#262626]/90 mb-6 leading-relaxed">
              "{testimonials.find(t => t.id === isTestimonialModalOpen)?.quote}"
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
      </div>
    </div>
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
      title: 'Real estate lead generation',
      description: 'Unlock high-quality leads tailored for real estate professionals.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-4 0h4" /></svg>
      )
    },
    {
      title: 'Buyer',
      description: 'Connect with motivated buyers ready to make a move.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" /></svg>
      )
    },
    {
      title: 'Seller',
      description: 'Attract sellers looking for the best representation.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12.79V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-6.21a2 2 0 01.553-1.384l7-7a2 2 0 012.894 0l7 7A2 2 0 0121 12.79z" /></svg>
      )
    },
    {
      title: 'Marketing',
      description: 'Boost your brand and listings with cutting-edge marketing.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2a4 4 0 014-4h4m0 0V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v4m6 0l-6 6" /></svg>
      )
    },
    {
      title: 'Web development',
      description: 'Modern, responsive websites for real estate success.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm3 4h12M7 8v8m10-8v8" /></svg>
      )
    },
    {
      title: 'CRM',
      description: 'Organize, track, and nurture your leads with powerful CRM tools.',
      icon: (
        <svg className="w-10 h-10 text-[#439CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-7.13a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
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

  const agentsSectionRef = useRef(null);
  const agentCardRefs = useRef([]);
  const agentImgRefs = useRef([]);

  useEffect(() => {
    // Animated hub for agents section
    if (agentsSectionRef.current) {
      gsap.fromTo(
        agentCardRefs.current,
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
            trigger: agentsSectionRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      // Floating/parallax effect for agent images
      agentImgRefs.current.forEach((img, i) => {
        gsap.to(img, {
          y: 18,
          repeat: -1,
          yoyo: true,
          duration: 2.5 + i * 0.3,
          ease: 'sine.inOut',
        });
      });
    }
  }, []);
  // Magic hover effect
  const handleAgentHover = idx => {
    if (agentCardRefs.current[idx]) {
      gsap.to(agentCardRefs.current[idx], {
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
  const handleAgentLeave = idx => {
    if (agentCardRefs.current[idx]) {
      gsap.to(agentCardRefs.current[idx], {
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

  const servicesSectionRef = useRef(null);
  const serviceCardRefs = useRef([]);
  const serviceIconRefs = useRef([]);

  useEffect(() => {
    // Scroll-triggered entrance animation
    if (servicesSectionRef.current) {
      gsap.fromTo(
        serviceCardRefs.current,
        { opacity: 0, y: 100, scale: 0.8, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: servicesSectionRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  // Magic hover effect for service cards and icons
  const handleServiceHover = idx => {
    if (serviceCardRefs.current[idx]) {
      gsap.to(serviceCardRefs.current[idx], {
        scale: 1.08,
        boxShadow: '0 0 32px 8px #439CB0, 0 8px 32px 0 rgba(67,156,176,0.25)',
        filter: 'brightness(1.08) saturate(1.2)',
        cursor: 'pointer',
        duration: 0.35,
        ease: 'power2.out',
      });
    }
    if (serviceIconRefs.current[idx]) {
      gsap.to(serviceIconRefs.current[idx], {
        rotate: 20,
        scale: 1.2,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      });
    }
  };
  const handleServiceLeave = idx => {
    if (serviceCardRefs.current[idx]) {
      gsap.to(serviceCardRefs.current[idx], {
        scale: 1,
        boxShadow: '',
        filter: 'brightness(1) saturate(1)',
        cursor: 'default',
        duration: 0.35,
        ease: 'power2.in',
      });
    }
    if (serviceIconRefs.current[idx]) {
      gsap.to(serviceIconRefs.current[idx], {
        rotate: 0,
        scale: 1,
        duration: 0.4,
        ease: 'elastic.in(1, 0.5)',
      });
    }
  };

  const blogSectionRef = useRef(null);
  const blogCardRefs = useRef([]);
  const blogImgRefs = useRef([]);

  useEffect(() => {
    // Blog section scroll-triggered entrance animation
    if (blogSectionRef.current) {
      gsap.fromTo(
        blogCardRefs.current,
        { opacity: 0, y: 80, scale: 0.85, rotateY: 16, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.18,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: blogSectionRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  // Blog card/image hover effect
  const handleBlogHover = idx => {
    if (blogCardRefs.current[idx]) {
      gsap.to(blogCardRefs.current[idx], {
        scale: 1.06,
        boxShadow: '0 0 32px 8px #439CB0, 0 8px 32px 0 rgba(67,156,176,0.25)',
        filter: 'brightness(1.08) saturate(1.2)',
        cursor: 'pointer',
        duration: 0.35,
        ease: 'power2.out',
      });
    }
    if (blogImgRefs.current[idx]) {
      gsap.to(blogImgRefs.current[idx], {
        scale: 1.08,
        rotateY: 8,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      });
    }
  };
  const handleBlogLeave = idx => {
    if (blogCardRefs.current[idx]) {
      gsap.to(blogCardRefs.current[idx], {
        scale: 1,
        boxShadow: '',
        filter: 'brightness(1) saturate(1)',
        cursor: 'default',
        duration: 0.35,
        ease: 'power2.in',
      });
    }
    if (blogImgRefs.current[idx]) {
      gsap.to(blogImgRefs.current[idx], {
        scale: 1,
        rotateY: 0,
        duration: 0.4,
        ease: 'elastic.in(1, 0.5)',
      });
    }
  };

  return (
    <div className="font-quicksand antialiased text-[#262626] bg-[#E2E2E2]">
      {/* Modals */}
      {isBookingModalOpen && <BookingModal />}
      {isThankYouModalOpen && <ThankYouModal />}
      {isTestimonialModalOpen && <TestimonialModal />}

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative min-h-screen flex items-center justify-center bg-[#153E42] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Home" 
            className="w-full h-full object-cover opacity-90"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#153E42]/60 via-[#153E42]/70 to-[#153E42]/80"></div>
          {/* Readability overlay */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </div>
        {/* Decorative floating orb */}
        <div ref={orbRef} className="absolute left-[-80px] top-1/3 w-64 h-64 bg-gradient-to-br from-[#439CB0]/60 to-[#153E42]/40 rounded-full blur-3xl opacity-70 pointer-events-none z-0"></div>
        {/* Content Container - No partition, no box for text */}
        <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto flex flex-row items-center justify-between min-h-[80vh]">
          {/* Left: Animated Headline and Subtext */}
          <div ref={heroTextRef} className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <div className="mb-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-bold leading-tight flex flex-wrap gap-x-2">
                {heroWords.map((w, i) => (
                  <span key={i} className={`hero-headline-word ${w.className}`}>{w.text}</span>
                ))}
              </h1>
            </div>
            <div className="mb-0">
              <p className="text-base md:text-lg font-light flex flex-wrap gap-x-1">
                {subWords.map((w, i) => (
                  <span key={i} className={`hero-subtext-word ${w.className}`}>{w.text}</span>
                ))}
              </p>
            </div>
          </div>
          {/* Right: Card, previous size, improved glassmorphism */}
          <div ref={heroCardRef} className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-md w-full border border-[#439CB0]/30 overflow-hidden" style={{boxShadow:'0 8px 32px 0 rgba(67,156,176,0.25), 0 1.5px 8px 0 rgba(21,62,66,0.10)'}}>
              {/* Avatar and title */}
              <div className="flex items-center mb-4">
                <img src={AVATAR_URL} alt="Manager" className="w-12 h-12 rounded-full border-2 border-[#439CB0] shadow-md mr-3"/>
                <span className="text-2xl font-bold text-[#153E42] tracking-tight">Lead Pool Manager</span>
                <span className="ml-auto bg-[#439CB0]/10 text-[#439CB0] text-xs font-semibold px-3 py-1 rounded-full">LIVE</span>
              </div>
              {/* Mock dashboard preview */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#153E42]/80 font-medium">Active Leads</span>
                  <span className="text-2xl font-bold text-[#153E42] drop-shadow-sm">128</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#153E42]/80 font-medium">Conversion Rate</span>
                  <span className="text-2xl font-bold text-[#153E42] drop-shadow-sm">27%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#153E42]/80 font-medium">Avg. Response Time</span>
                  <span className="text-2xl font-bold text-[#153E42] drop-shadow-sm">2m 14s</span>
                </div>
                {/* Mini chart */}
                <div className="mt-6">
                  <div className="h-2 w-full bg-[#E2E2E2] rounded-full overflow-hidden">
                    <div ref={chartBarRef} className="h-2 bg-gradient-to-r from-[#439CB0] to-[#153E42] rounded-full transition-all duration-700" style={{ width: '78%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-[#262626]/60 mt-1">
                    <span>Lead Pool</span>
                    <span>78% Full</span>
                  </div>
                </div>
                {/* Status badges */}
                <div className="flex gap-2 mt-4">
                  <span className="bg-[#439CB0]/20 text-[#439CB0] text-xs font-semibold px-2 py-1 rounded">Verified</span>
                  <span className="bg-[#153E42]/20 text-[#153E42] text-xs font-semibold px-2 py-1 rounded">Synced</span>
                  <span className="bg-[#E2E2E2] text-[#153E42] font-semibold px-2 py-1 rounded">Updated 2m ago</span>
                </div>
              </div>
              {/* Decorative background orbs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#439CB0]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#153E42]/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 bg-[#153E42] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">💬 REAL RESULTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight">
              What Our <span className="text-[#439CB0]">Clients Say</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Real agents achieving real results with our marketing services
            </p>
          </div>
          {/* GSAP Carousel: Only 3 visible at a time */}
          <div className="relative w-full flex justify-center">
            <div
              ref={carouselGroupRef}
              className="flex gap-8 testimonials-carousel"
              style={{ willChange: 'transform' }}
            >
              {testimonials.slice(carouselIndex, carouselIndex + 3).map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card group flex-shrink-0 w-96 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 cursor-pointer relative overflow-hidden transition-all duration-300"
                  style={{ minWidth: '24rem', maxWidth: '24rem', height: '22rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                  onMouseEnter={() => handleTestimonialHover(idx)}
                  onMouseLeave={() => handleTestimonialLeave(idx)}
                >
                  {/* Video Reveal on Hover */}
                  <div className={`testimonial-video absolute inset-0 flex items-center justify-center bg-black/90 z-20 transition-all duration-500 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto`} style={{ borderRadius: '1rem' }}>
                    <iframe
                      src={testimonial.videoUrl}
                      className="w-full h-full rounded-2xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Testimonial video"
                    ></iframe>
                  </div>
                  {/* Text Content */}
                  <div className={`testimonial-content relative z-10 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:opacity-0`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-[#439CB0]/10 flex items-center justify-center">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#262626]">{testimonial.name}</h3>
                        <p className="text-sm text-[#439CB0]">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-[#262626]/90 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex gap-1 mb-2">
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
                    <div className="flex items-center gap-2 text-sm text-[#439CB0] font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      Watch Video Testimonial
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Agents */}
      <section 
        ref={agentsSectionRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight">
              Meet Our 
              <span className="block text-[#439CB0]">
                Expert Agents
              </span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Dedicated professionals with extensive market knowledge and personalized service
            </p>
          </div>
          
          {/* Agents Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {agents.map((agent, index) => (
              <div 
                key={index}
                ref={el => agentCardRefs.current[index] = el}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#262626]/10"
                onMouseEnter={() => handleAgentHover(index)}
                onMouseLeave={() => handleAgentLeave(index)}
              >
                {/* Agent Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    ref={el => agentImgRefs.current[index] = el}
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section 
        ref={servicesSectionRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🌟 WHAT WE OFFER</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight whitespace-nowrap">
              Our Comprehensive <span className="text-[#439CB0]">Services</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              End-to-end real estate solutions tailored to your unique needs
            </p>
          </div>
          
          {/* Services Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                ref={el => serviceCardRefs.current[index] = el}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-[#262626]/10 group"
                onMouseEnter={() => handleServiceHover(index)}
                onMouseLeave={() => handleServiceLeave(index)}
              >
                {/* Service Icon */}
                <div 
                  ref={el => serviceIconRefs.current[index] = el}
                  className="w-16 h-16 bg-[#439CB0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#439CB0]/20 transition-colors duration-300"
                >
                  {React.cloneElement(service.icon, {
                    className: "w-8 h-8 text-[#439CB0] group-hover:text-[#153E42] transition-colors duration-300"
                  })}
                </div>
                
                {/* Service Content */}
                <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-3 whitespace-nowrap">{service.title}</h3>
                <p className="text-[#262626]/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Our Blog */}
      <section 
        ref={blogSectionRef}
        className="py-24 bg-[#E2E2E2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-[#439CB0]/10 border border-[#439CB0]/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">📰 LATEST INSIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-[#262626] mb-4 leading-tight whitespace-nowrap">
              From Our <span className="text-[#439CB0]">Blog</span>
            </h2>
            <p className="text-lg text-[#262626]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Expert advice and market insights to guide your property journey
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                ref={el => blogCardRefs.current[index] = el}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#262626]/10"
                onMouseEnter={() => handleBlogHover(index)}
                onMouseLeave={() => handleBlogLeave(index)}
              >
                {/* Post Image */}
                <div className="h-60 overflow-hidden">
                  <img 
                    ref={el => blogImgRefs.current[index] = el}
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
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
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div 
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
            
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center bg-[#439CB0] hover:bg-[#153E42] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              🚀 Book Free Strategy Call
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
        </div>
        </div>
      </section>


            
    </div>
  );
};

export default Home;