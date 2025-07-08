import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Agents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSort, setActiveSort] = useState('default');

  // Agents data
  const agents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Agent',
      phone: '+1 (555) 123-4567',
      email: 'sarah@vistaestate.com',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
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
      name: 'Michael Chen',
      title: 'Luxury Property Specialist',
      phone: '+1 (555) 234-5678',
      email: 'michael@vistaestate.com',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
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
      name: 'David Wilson',
      title: 'Commercial Real Estate',
      phone: '+1 (555) 345-6789',
      email: 'david@vistaestate.com',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
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
      id: 4,
      name: 'Emma Rodriguez',
      title: 'First-Time Buyer Specialist',
      phone: '+1 (555) 456-7890',
      email: 'emma@vistaestate.com',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
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
      id: 5,
      name: 'James Wilson',
      title: 'Investment Property Advisor',
      phone: '+1 (555) 567-8901',
      email: 'james@vistaestate.com',
      image: 'https://randomuser.me/api/portraits/men/85.jpg',
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
      id: 6,
      name: 'Olivia Martinez',
      title: 'Rental Property Manager',
      phone: '+1 (555) 678-9012',
      email: 'olivia@vistaestate.com',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
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
           agent.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="agents-page">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Agents</h1>
            <p className="text-xl mb-8">Meet our team of experienced real estate professionals</p>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="text-white hover:text-blue-300">Home</Link>
              <span>/</span>
              <span className="text-blue-400">Agents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and Sort Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Search agents by name or specialty..."
                className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="w-full md:w-auto flex items-center">
              <span className="mr-3 text-gray-600">Sort by:</span>
              <select 
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <div key={agent.id} className="agent-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="relative">
                    <img src={agent.image} alt={agent.name} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition duration-300 flex items-end p-6">
                      <div className="text-white opacity-0 hover:opacity-100 transition duration-300 w-full">
                        <div className="flex justify-center space-x-4 mb-4">
                          <a href={agent.social.facebook} className="hover:text-blue-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                          </a>
                          <a href={agent.social.twitter} className="hover:text-blue-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                          <a href={agent.social.instagram} className="hover:text-blue-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                          </a>
                          <a href={agent.social.linkedin} className="hover:text-blue-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        </div>
                        <div className="text-center">
                          <a href={`tel:${agent.phone}`} className="block mb-2 hover:text-blue-400">{agent.phone}</a>
                          <a href={`mailto:${agent.email}`} className="block hover:text-blue-400">{agent.email}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                    <p className="text-blue-600 mb-4">{agent.title}</p>
                    <div className="flex justify-center items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 ${i < Math.floor(agent.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600">{agent.rating}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <div className="font-medium">{agent.properties}</div>
                        <div>Properties</div>
                      </div>
                      <div>
                        <div className="font-medium">{agent.experience}</div>
                        <div>Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">No agents found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                3
              </button>
              <span className="px-2 text-gray-600">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                6
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">We're always looking for talented real estate professionals to join VistaEstate</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/careers" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded transition duration-300">
              View Open Positions
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agents;