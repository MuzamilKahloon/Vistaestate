import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Samuel Palmer',
      role: 'Founder & CEO',
      bio: 'With over 15 years in real estate, Samuel founded VistaEstate to revolutionize property finding.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      phone: '+1 (555) 123-4567',
      email: 'samuel@vistaestate.com'
    },
    {
      id: 2,
      name: 'Vincent Fuller',
      role: 'Head of Sales',
      bio: 'Vincent brings a decade of luxury property experience to our team.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      phone: '+1 (555) 234-5678',
      email: 'vincent@vistaestate.com'
    },
    {
      id: 3,
      name: 'Brittany Watkins',
      role: 'Marketing Director',
      bio: 'Brittany oversees all marketing strategies and brand development.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      phone: '+1 (555) 345-6789',
      email: 'brittany@vistaestate.com'
    },
    {
      id: 4,
      name: 'Michelle Ramirez',
      role: 'Lead Agent',
      bio: 'Michelle specializes in commercial properties and investments.',
      image: 'https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg',
      phone: '+1 (555) 456-7890',
      email: 'michelle@vistaestate.com'
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
      title: 'Best Real Estate Agency',
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
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="font-quicksand antialiased text-slate-700 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="About VistaEstate" 
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
                <span className="text-emerald-400 font-medium text-xs tracking-wide whitespace-nowrap">🏢 ABOUT US</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-dosis font-medium text-white mb-4 leading-tight">
                Our <span className="text-emerald-400">Story</span> & <span className="text-emerald-400">Team</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                Discover the people and values behind our success in real estate
              </p>
              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact Our Team
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
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
              <span className="text-emerald-600 font-medium text-xs tracking-wide whitespace-nowrap">📜 OUR JOURNEY</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight">
              Building <span className="text-emerald-600">VistaEstate</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              From vision to reality - our evolution in the real estate industry
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl ">
                <img 
                  src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg" 
                  alt="Our Office" 
                  className="w-full h-full object-cover"
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
                  <div key={index} className="bg-slate-50 hover:bg-emerald-50 rounded-xl p-6 text-center transition-colors duration-300 group">
                    <div className="text-3xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-700">{stat.value}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
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
              What <span className="text-emerald-600">Guides Us</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              The principles that shape every decision we make
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
              <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We constantly seek better ways to serve our clients, leveraging technology and creative solutions.
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
                We're committed to building not just houses, but thriving communities where people can flourish.
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
              The <span className="text-emerald-600">Leadership</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Meet the passionate professionals driving our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="group relative rounded-xl overflow-hidden h-96 shadow-md hover:shadow-lg transition-all duration-300">
                {/* Team Member Image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay - Full Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-dosis font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-emerald-400 font-medium mb-4">{member.role}</p>
                    <p className="text-white/90 text-sm mb-6">{member.bio}</p>
                    
                    {/* Contact Info */}
                    <div className="mb-6">
                      <a href={`tel:${member.phone}`} className="block text-white hover:text-emerald-400 transition-colors mb-2 font-medium">
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {member.phone}
                      </a>
                      <a href={`mailto:${member.email}`} className="block text-white hover:text-emerald-400 transition-colors font-medium">
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {member.email}
                      </a>
                    </div>
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
              <span className="text-emerald-600 font-medium text-xs tracking-wide whitespace-nowrap">🏆 RECOGNITION</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-slate-800 mb-4 leading-tight">
              Awards & <span className="text-emerald-600">Accolades</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Celebrating excellence in real estate services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                {/* Award Icon */}
                <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                  {React.cloneElement(award.icon, {
                    className: "w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300"
                  })}
                </div>
                
                {/* Award Content */}
                <h3 className="text-xl font-dosis font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm mb-2 font-medium">{award.organization}</p>
                <p className="text-emerald-600 font-medium">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

export default AboutUs;