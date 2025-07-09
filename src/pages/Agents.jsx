import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Agents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSort, setActiveSort] = useState('default');

  // Agents data
  const agents = [
    {
      id: 1,
      name: 'Samuel Palmer',
      role: 'Founder & CEO',
      phone: '+1 (555) 123-4567',
      email: 'samuel@realtyproperties.com',
      bio: '15+ years in luxury properties and investment consulting',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      properties: 42,
      experience: '15 years',
      rating: 4.9,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Vincent Fuller',
      role: 'Senior Agent',
      phone: '+1 (555) 234-5678',
      email: 'vincent@coolhouses.com',
      bio: 'Specializing in commercial properties and sustainable architecture',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      properties: 38,
      experience: '12 years',
      rating: 4.8,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Brittany Watkins',
      role: 'Buyer Specialist',
      phone: '+1 (555) 345-6789',
      email: 'brittany@smarthouses.com',
      bio: 'Expert in first-time homebuyer programs',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      properties: 35,
      experience: '8 years',
      rating: 4.9,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Michelle Ramirez',
      role: 'Luxury Specialist',
      phone: '+1 (555) 456-7890',
      email: 'michelle@reallory.com',
      bio: 'International property and investment expert',
      image: 'https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg',
      properties: 47,
      experience: '14 years',
      rating: 4.8,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'Commercial Expert',
      phone: '+1 (555) 567-8901',
      email: 'david@vistaestate.com',
      bio: 'Commercial real estate transactions specialist',
      image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg',
      properties: 29,
      experience: '10 years',
      rating: 4.7,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Olivia Martinez',
      role: 'Rental Manager',
      phone: '+1 (555) 678-9012',
      email: 'olivia@vistaestate.com',
      bio: 'Portfolio of high-end residential properties',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      properties: 31,
      experience: '7 years',
      rating: 4.7,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  // Sort agents based on active sort option
  const sortedAgents = [...agents].sort((a, b) => {
    if (activeSort === 'rating') return b.rating - a.rating;
    if (activeSort === 'experience') return parseInt(b.experience) - parseInt(a.experience);
    if (activeSort === 'properties') return b.properties - a.properties;
    return a.id - b.id; // Default sort
  });

  // Filter agents based on search query
  const filteredAgents = sortedAgents.filter(agent => {
    return agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           agent.role.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="font-quicksand antialiased text-slate-700 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Real Estate Agents" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto">
          <div className="flex flex-col items-center justify-center">
            {/* Headline */}
            <div className="text-center w-full max-w-4xl px-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-emerald-400 font-medium text-xs tracking-wide whitespace-nowrap">👔 MEET OUR TEAM</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-dosis font-medium text-white mb-4 leading-tight">
                Our <span className="text-emerald-400">Expert Agents</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                Dedicated professionals with extensive market knowledge
              </p>
              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact an Agent
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Sort Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Search agents by name or specialty..."
                className="w-full p-4 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="w-full md:w-auto flex items-center">
              <span className="mr-3 text-gray-600 font-medium">Sort by:</span>
              <select 
                className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-medium"
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="rating">Highest Rating</option>
                <option value="experience">Most Experience</option>
                <option value="properties">Most Properties</option>
              </select>
            </div>
          </div>

          {/* Agents Grid */}
          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAgents.map(agent => (
                <div key={agent.id} className="group relative rounded-xl overflow-hidden h-96 shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Agent Image with Full Cover Hover Overlay */}
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay - Full Cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-dosis font-bold text-white mb-1">{agent.name}</h3>
                      <p className="text-emerald-400 font-medium mb-4">{agent.role}</p>
                      <p className="text-white/90 text-sm mb-6">{agent.bio}</p>
                      
                      {/* Contact Info */}
                      <div className="mb-6">
                        <a href={`tel:${agent.phone}`} className="block text-white hover:text-emerald-400 transition-colors mb-2 font-medium">
                          <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {agent.phone}
                        </a>
                        <a href={`mailto:${agent.email}`} className="block text-white hover:text-emerald-400 transition-colors font-medium">
                          <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {agent.email}
                        </a>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex space-x-4">
                        <a href={agent.social.facebook} className="text-white hover:text-emerald-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                        <a href={agent.social.twitter} className="text-white hover:text-emerald-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href={agent.social.instagram} className="text-white hover:text-emerald-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        </a>
                        <a href={agent.social.linkedin} className="text-white hover:text-emerald-400 transition-colors">
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
            <div className="text-center py-16 bg-white rounded-xl shadow border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-2">No agents found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium">
                Previous
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium">
                2
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium">
                3
              </button>
              <span className="px-2 text-gray-600">...</span>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium">
                6
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Stats Section - Improved */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">15+ Years</h3>
              <p className="text-gray-600 font-medium">Average industry experience</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">98%</h3>
              <p className="text-gray-600 font-medium">Client satisfaction rate</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Properties sold annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Improved */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
  {/* Subtle background texture */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=10')] bg-cover bg-center"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-dosis font-medium mb-6 leading-tight">
      Start Your <span className="text-emerald-400">Property Journey</span> Today
    </h2>
    
    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
      Our expert agents are ready to guide you through every step
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <Link 
        to="/contact" 
        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Connect With Us
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </Link>
      
      <Link 
        to="/properties" 
        className="inline-flex items-center justify-center bg-transparent border-2 border-emerald-400 hover:border-emerald-300 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Explore Properties
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  </div>
</section>
    </div>
  );
};

export default Agents;