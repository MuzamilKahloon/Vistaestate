import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Agents data
  const agents = [
    {
      name: 'Samuel Palmer',
      role: 'Founder & CEO, Realty Properties Inc.',
      bio: 'Award-winning real estate professional with over 15 years of experience in luxury properties and investment consulting.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      profileLink: '/agent/samuel-palmer'
    },
    {
      name: 'Vincent Fuller',
      role: 'Company Agent, Cool Houses Inc.',
      bio: 'Specializing in commercial properties and residential developments with a focus on sustainable architecture.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      profileLink: '/agent/vincent-fuller'
    },
    {
      name: 'Brittany Watkins',
      role: 'Company Agent, Smart Houses Inc.',
      bio: 'Expert in first-time homebuyer programs and neighborhood analysis with extensive market knowledge.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      profileLink: '/agent/brittany-watkins'
    },
    {
      name: 'Michelle Ramirez',
      role: 'Company Agent, Reallory Inc.',
      bio: 'International property specialist with expertise in luxury estates and investment portfolio management.',
      image: 'https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg',
      profileLink: '/agent/michelle-ramirez'
    }
  ];

  // Services data
  const services = [
    {
      title: 'Property Management',
      description: 'Comprehensive property management solutions for residential and commercial properties with 24/7 support.',
      icon: (
        <svg className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: 'Business Development',
      description: 'Strategic business development services for real estate investors and property developers.',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      )
    },
    {
      title: 'Capital Improvements',
      description: 'Expert guidance on property improvements and renovations to maximize your investment returns.',
      icon: (
        <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: 'Finance Real Estate',
      description: 'Complete financing solutions including mortgages, investment loans, and financial planning services.',
      icon: (
        <svg className="w-10 h-10 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: 'Financial Reporting',
      description: 'Detailed financial analysis and reporting services for property portfolios and investment tracking.',
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      title: 'Asset Recovery',
      description: 'Professional asset recovery services to help maximize the value of distressed properties.',
      icon: (
        <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  // Neighborhoods data
  const neighborhoods = [
    {
      name: 'Downtown',
      properties: 124,
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Westside',
      properties: 89,
      image: 'https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Riverside',
      properties: 76,
      image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Hillside',
      properties: 65,
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  return (
    <div className="font-quicksand antialiased text-slate-700 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/50"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[80vh] py-16">
            {/* Headline */}
            <div className="text-center mb-12 w-full max-w-4xl px-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-emerald-400 font-medium text-xs tracking-wide whitespace-nowrap">✨ PREMIUM REAL ESTATE EXPERIENCE</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-dosis font-medium text-white mb-4 leading-tight whitespace-nowrap">
                Find Your Dream <span className="text-emerald-400">Luxury Home</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                Discover exceptional properties in the most desirable locations worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-dosis font-bold text-gray-900 mb-2">
              Our Featured Exclusives
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT AS LISTS OR GRIDS, FULL-WIDTH OR BOXED
            </p>
          </div>
          
          {/* Property Grid - 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Modern Home" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  SINGLE FAMILY HOME
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-2">Guaranteed Modern Home</h3>
                <p className="text-xl font-bold text-emerald-600 mb-4">$590,000</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bedrooms</span>
                      <span className="block font-medium">4</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bathrooms</span>
                      <span className="block font-medium">2</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Garage</span>
                      <span className="block font-medium">1</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Area</span>
                      <span className="block font-medium">1200 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Contemporary Apartment" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  APARTMENT
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-2">Contemporary Apartment</h3>
                <p className="text-xl font-bold text-emerald-600 mb-4">$3,600/mo</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bedrooms</span>
                      <span className="block font-medium">2</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bathrooms</span>
                      <span className="block font-medium">1</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Garage</span>
                      <span className="block font-medium">1</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Area</span>
                      <span className="block font-medium">800 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Renovated Apartment" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  APARTMENT
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-2">Renovated Apartment</h3>
                <p className="text-xl font-bold text-emerald-600 mb-4">$540,000</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bedrooms</span>
                      <span className="block font-medium">3</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bathrooms</span>
                      <span className="block font-medium">2</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Garage</span>
                      <span className="block font-medium">1</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Area</span>
                      <span className="block font-medium">950 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Next 3 Properties */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Property 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Luxury Family Home" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  SINGLE FAMILY HOME
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-2">Luxury Family Home</h3>
                <p className="text-xl font-bold text-emerald-600 mb-4">$1,200,000</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bedrooms</span>
                      <span className="block font-medium">4</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bathrooms</span>
                      <span className="block font-medium">3</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Garage</span>
                      <span className="block font-medium">2</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Area</span>
                      <span className="block font-medium">1500 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Modern Townhouse" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  TOWNHOUSE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-2">Modern Townhouse</h3>
                <p className="text-xl font-bold text-emerald-600 mb-4">$750,000</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bedrooms</span>
                      <span className="block font-medium">3</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bathrooms</span>
                      <span className="block font-medium">2.5</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Garage</span>
                      <span className="block font-medium">1</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Area</span>
                      <span className="block font-medium">1100 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Luxury Condo" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  CONDO
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-2">Luxury Condo</h3>
                <p className="text-xl font-bold text-emerald-600 mb-4">$2,800/mo</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bedrooms</span>
                      <span className="block font-medium">2</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Bathrooms</span>
                      <span className="block font-medium">2</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Garage</span>
                      <span className="block font-medium">1</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Area</span>
                      <span className="block font-medium">900 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Neighborhoods */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-600 font-medium text-xs tracking-wide uppercase">🌟 Prime Locations</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-bold text-gray-900 mb-4 leading-tight">
              Explore Premium
              <span className="block text-emerald-600 bg-clip-text">
                Neighborhoods
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the most sought-after areas with exceptional amenities and lifestyle
            </p>
          </div>
          
          {/* Neighborhoods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden h-96 shadow-md hover:shadow-lg transition-all duration-300">
                {/* Image with Overlay */}
                <div className="relative h-full w-full">
                  <img 
                    src={neighborhood.image} 
                    alt={neighborhood.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-dosis font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {neighborhood.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-300">
                      {neighborhood.properties} properties
                    </p>
                    <button className="text-emerald-400 hover:text-white text-sm font-medium flex items-center transition-colors">
                      Explore
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Agents */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight">
              Meet Our 
              <span className="block text-emerald-600 bg-clip-text">
                Expert Agents
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Dedicated professionals with extensive market knowledge and personalized service
            </p>
          </div>
          
          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                {/* Agent Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Agent Info */}
                <div className="p-6">
                  <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-emerald-600 text-sm mb-3 font-medium">{agent.role}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {agent.bio}
                  </p>
                  
                  {/* View Profile Link */}
                  <Link 
                    to={agent.profileLink} 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm transition-colors duration-300"
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
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-600 font-medium text-xs tracking-wide whitespace-nowrap">🌟 WHAT WE OFFER</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight whitespace-nowrap">
              Our Comprehensive <span className="bg-emerald-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              End-to-end real estate solutions tailored to your unique needs
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                  {React.cloneElement(service.icon, {
                    className: "w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300"
                  })}
                </div>
                
                {/* Service Content */}
                <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-3 whitespace-nowrap">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Our Blog */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-600 font-medium text-xs tracking-wide whitespace-nowrap">📰 LATEST INSIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight whitespace-nowrap">
              From Our <span className="bg-emerald-600 bg-clip-text text-transparent">Blog</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Expert advice and market insights to guide your property journey
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                {/* Post Image */}
                <div className="h-60 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                  <h3 className="text-xl font-dosis font-semibold text-gray-900 my-3 group-hover:text-emerald-600 transition-colors whitespace-nowrap">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Read Article Link */}
                  <Link 
                    to={post.link} 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm transition-colors duration-300"
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
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;