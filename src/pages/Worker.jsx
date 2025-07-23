import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Worker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSort, setActiveSort] = useState('default');
  const [workers] = useState([
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

  // Sort workers based on active sort option
  const sortedWorkers = [...workers].sort((a, b) => {
    if (activeSort === 'rating') return b.rating - a.rating;
    if (activeSort === 'experience') return parseInt(b.experience) - parseInt(a.experience);
    return a.id - b.id;
  });

  // Filter workers based on search query
  const filteredWorkers = sortedWorkers.filter(worker => {
    return worker.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           worker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
           worker.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const heroHeadlineRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroBtn1Ref = useRef(null);
  const heroBtn2Ref = useRef(null);
  const heroSectionRef = useRef(null);
  const workersGridRef = useRef(null);
  const workersCardRefs = useRef([]);
  const workerHeroHeadlineRef = useRef(null);
  const workerHeroSubRef = useRef(null);

  useEffect(() => {
    // Split headline and subheadline into words for staggered animation
    if (heroHeadlineRef.current) {
      const words = heroHeadlineRef.current.querySelectorAll('.hero-headline-word');
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
      const words = heroSubRef.current.querySelectorAll('.hero-subtext-word');
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
    // Buttons entrance
    gsap.set([heroBtn1Ref.current, heroBtn2Ref.current], { opacity: 0, y: 60, scale: 0.92, filter: 'blur(8px)', boxShadow: '0 0 0 0 #439CB0', clipPath: 'inset(0 0 100% 0)' });
    gsap.to([heroBtn1Ref.current, heroBtn2Ref.current], {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      boxShadow: '0 8px 32px 0 rgba(67,156,176,0.18)',
      clipPath: 'inset(0 0 0% 0)',
      duration: 0.7,
      stagger: 0.18,
      ease: 'power4.out',
      delay: 1.2,
    });
    // Parallax scroll effect
    gsap.to(heroHeadlineRef.current, {
      y: -24,
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.7,
      },
      ease: 'power1.out',
    });
    gsap.to(heroSubRef.current, {
      y: -12,
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.7,
      },
      ease: 'power1.out',
    });
    gsap.to([heroBtn1Ref.current, heroBtn2Ref.current], {
      y: 12,
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.7,
      },
      ease: 'power1.out',
    });

    // Workers grid scroll-triggered entrance animation
    if (workersGridRef.current) {
      gsap.fromTo(
        workersCardRefs.current,
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
            trigger: workersGridRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Animate worker hero headline words
    if (workerHeroHeadlineRef.current) {
      const words = workerHeroHeadlineRef.current.querySelectorAll('.worker-hero-headline-word');
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
    if (workerHeroSubRef.current) {
      const words = workerHeroSubRef.current.querySelectorAll('.worker-hero-subtext-word');
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
    if (workerHeroHeadlineRef.current && heroSectionRef.current) {
      gsap.to(workerHeroHeadlineRef.current, {
        y: -24,
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
        ease: 'power1.out',
      });
    }
    if (workerHeroSubRef.current && heroSectionRef.current) {
      gsap.to(workerHeroSubRef.current, {
        y: -12,
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
        ease: 'power1.out',
      });
    }

    // Workers grid cards: instant appearance
    if (workersGridRef.current) {
      workersCardRefs.current.forEach(card => {
        if (card) {
          gsap.set(card, { opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' });
        }
      });
    }
  }, []);

  // Button hover GSAP effect
  const handleBtnHover = (ref) => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1.08,
        boxShadow: '0 0 32px 8px #439CB0, 0 8px 32px 0 rgba(67,156,176,0.25)',
        filter: 'brightness(1.08) saturate(1.2)',
        duration: 0.32,
        ease: 'power2.out',
      });
    }
  };
  const handleBtnLeave = (ref) => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1,
        boxShadow: '',
        filter: 'brightness(1) saturate(1)',
        duration: 0.32,
        ease: 'power2.in',
      });
    }
  };

  const handleWorkersCardHover = idx => {
    if (workersCardRefs.current[idx]) {
      gsap.to(workersCardRefs.current[idx], {
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
  const handleWorkersCardLeave = idx => {
    if (workersCardRefs.current[idx]) {
      gsap.to(workersCardRefs.current[idx], {
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
      

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative min-h-screen flex items-center justify-center bg-[#153E42] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional Workers" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#153E42]/30 to-[#153E42]/100"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[80vh] py-16">
            {/* Headline */}
            <div className="text-center mb-12 w-full max-w-4xl px-4">
              <div className="inline-flex items-center mt-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#439CB0] font-medium text-xs tracking-wide whitespace-nowrap">🛠️ PROFESSIONAL SERVICES</span>
              </div>
              <h1 ref={workerHeroHeadlineRef} className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight">
                {['Our', <span key="skilled" className="text-[#439CB0]">Skilled</span>, 'Workers'].map((word, i) => (
                  <span key={i} className="worker-hero-headline-word inline-block mr-2">{word}</span>
                ))}
              </h1>
              <p ref={workerHeroSubRef} className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                {['Trusted', 'professionals', 'working', 'with', 'our', 'agents', 'to', 'maintain', 'your', 'properties'].map((word, i) => (
                  <span key={i} className="worker-hero-subtext-word inline-block mr-1">{word}</span>
                ))}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                ref={heroBtn1Ref}
                className="px-8 py-4 bg-[#439CB0] hover:bg-[#153E42] rounded-lg text-white font-medium shadow-lg transition-colors duration-300"
                onMouseEnter={() => handleBtnHover(heroBtn1Ref)}
                onMouseLeave={() => handleBtnLeave(heroBtn1Ref)}
              >
                🚀 Request Service Now
              </button>
              <button
                ref={heroBtn2Ref}
                className="px-8 py-4 bg-[#153E42] hover:bg-[#262626] rounded-lg text-white font-medium shadow-lg border border-white/20 transition-colors duration-300"
                onMouseEnter={() => handleBtnHover(heroBtn2Ref)}
                onMouseLeave={() => handleBtnLeave(heroBtn2Ref)}
              >
                Browse Workers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#E2E2E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Sort Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
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
          </div>

          {/* Workers Grid */}
          {filteredWorkers.length > 0 ? (
            <div 
              ref={workersGridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredWorkers.map((worker, idx) => (
                <div 
                  key={worker.id}
                  ref={el => workersCardRefs.current[idx] = el}
                  className="group relative rounded-xl overflow-hidden h-96 shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-[#262626]/10"
                  onMouseEnter={() => handleWorkersCardHover(idx)}
                  onMouseLeave={() => handleWorkersCardLeave(idx)}
                >
                  {/* Worker Image with Full Cover Hover Overlay */}
                  <img 
                    src={worker.image} 
                    alt={worker.name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay - Full Cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153E42]/80 via-[#153E42]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div>
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
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow border border-[#262626]/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#262626]/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-dosis font-semibold text-[#262626] mb-2">No workers found</h3>
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
    </div>
  );
};

export default Worker;