import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'With over 15 years in real estate, Sarah founded VistaEstate to revolutionize property finding.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      phone: '+1 (555) 123-4567',
      email: 'sarah@vistaestate.com'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Sales',
      bio: 'Michael brings a decade of luxury property experience to our team.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      phone: '+1 (555) 234-5678',
      email: 'michael@vistaestate.com'
    },
    {
      id: 3,
      name: 'David Wilson',
      role: 'Marketing Director',
      bio: 'David oversees all marketing strategies and brand development.',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      phone: '+1 (555) 345-6789',
      email: 'david@vistaestate.com'
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      role: 'Lead Agent',
      bio: 'Emma specializes in commercial properties and investments.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      phone: '+1 (555) 456-7890',
      email: 'emma@vistaestate.com'
    }
  ];

  // Stats data
  const stats = [
    { value: '1500+', label: 'Properties Sold' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Awards Won' },
    { value: '200+', label: 'Happy Clients' }
  ];

  // Awards data
  const awards = [
    {
      title: 'Best Real Estate Agency 2023',
      organization: 'National Property Awards',
      year: '2023',
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      )
    },
    {
      title: 'Top Customer Service',
      organization: 'Real Estate Excellence',
      year: '2023',
      icon: (
        <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      )
    },
    {
      title: 'Innovation in Real Estate',
      organization: 'Tech Property Awards',
      year: '2022',
      icon: (
        <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
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
                <span className="text-emerald-400 font-medium text-xs tracking-wide whitespace-nowrap">✨ ABOUT VISTAESTATE</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-dosis font-medium text-white mb-4 leading-tight">
                Our Story, <span className="text-emerald-400">Our Team</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                Discover the people and values behind VistaEstate's success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-600 font-medium text-xs tracking-wide whitespace-nowrap">🏢 OUR JOURNEY</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight">
              Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              From humble beginnings to industry leaders - our journey in real estate
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                  alt="Our Modern Office" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-slate-700 mb-6 leading-relaxed font-light">
                Founded in 2010, VistaEstate began as a small team of passionate real estate professionals with a vision to revolutionize property transactions. What started as a local agency has evolved into a nationally recognized real estate service provider.
              </p>
              <p className="text-slate-700 mb-8 leading-relaxed font-light">
                Today, we serve clients across the country, helping individuals and families find their dream homes while assisting investors in building profitable portfolios. Our commitment to transparency, integrity, and exceptional service continues to set us apart in the industry.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors group">
                    <span className="block text-2xl font-medium text-slate-800 group-hover:text-emerald-600 transition-colors">{stat.value}</span>
                    <span className="block text-sm text-slate-500 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-600 font-medium text-xs tracking-wide whitespace-nowrap">🌟 OUR VALUES</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight">
              Core <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              The foundation of everything we do at VistaEstate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in complete transparency and honesty in all our dealings. Your trust is our most valued asset.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We strive for excellence in everything we do, delivering results that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're not just selling properties - we're helping build communities where people can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-600 font-medium text-xs tracking-wide whitespace-nowrap">👔 OUR TEAM</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight">
              Meet Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Experts</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              The passionate professionals dedicated to your real estate success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                {/* Team Member Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Team Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 text-sm mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Contact Info (shown on hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-gray-500 mb-1">{member.phone}</p>
                    <p className="text-xs text-gray-500">{member.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-600 font-medium text-xs tracking-wide whitespace-nowrap">🏆 AWARDS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight">
              Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Recognition for our commitment to excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group text-center">
                {/* Award Icon */}
                <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-100 transition-colors duration-300">
                  {React.cloneElement(award.icon, {
                    className: "w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300"
                  })}
                </div>
                
                {/* Award Content */}
                <h3 className="text-lg font-dosis font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm mb-2 font-medium">{award.organization}</p>
                <p className="text-emerald-600 font-medium text-sm">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-6 leading-tight">
            Ready to Work With <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Whether you're buying, selling, or investing, our experienced team is here to guide you through every step of your real estate journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              to="/properties" 
              className="bg-transparent border border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;