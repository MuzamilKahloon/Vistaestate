import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Area = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample ZIP code data with availability status
  const zipCodes = [
    { code: '90210', city: 'Beverly Hills', state: 'CA', status: 'limited' },
    { code: '10001', city: 'New York', state: 'NY', status: 'taken' },
    { code: '33139', city: 'Miami Beach', state: 'FL', status: 'available' },
    { code: '60611', city: 'Chicago', state: 'IL', status: 'available' },
    { code: '75201', city: 'Dallas', state: 'TX', status: 'taken' },
    { code: '90069', city: 'West Hollywood', state: 'CA', status: 'limited' },
    { code: '02108', city: 'Boston', state: 'MA', status: 'available' },
    { code: '98109', city: 'Seattle', state: 'WA', status: 'taken' },
  ];

  // Filter ZIP codes based on search query
  const filteredZipCodes = zipCodes.filter(zip => 
    zip.code.includes(searchQuery) || 
    zip.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    zip.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Status colors and labels
  const statusConfig = {
    available: { color: 'bg-emerald-500', text: '✅ Available' },
    limited: { color: 'bg-amber-500', text: '⏳ Limited' },
    taken: { color: 'bg-rose-500', text: '❌ Taken' },
  };

  return (
    <div className="font-quicksand antialiased text-slate-700 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
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
          <div className="flex flex-col items-center justify-center py-16">
            {/* Headline */}
            <div className="text-center mb-12 w-full max-w-4xl px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-dosis font-medium text-white mb-4 leading-tight">
                <span className="text-emerald-400">Is Your Area Available?</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                Our services are limited to select high-converting ZIP codes. Search below to reserve yours before it's booked out.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search by ZIP code, city, or state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-lg"
                />
                <svg 
                  className="w-5 h-5 absolute right-4 top-4 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZIP Codes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-emerald-500 mr-2"></span>
              <span className="text-sm text-gray-700">Available</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-amber-500 mr-2"></span>
              <span className="text-sm text-gray-700">Limited Availability</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-rose-500 mr-2"></span>
              <span className="text-sm text-gray-700">Already Taken</span>
            </div>
          </div>

          {/* ZIP Codes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredZipCodes.map((zip, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-md border-l-4 ${statusConfig[zip.status].color} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-dosis font-bold text-gray-900">
                    {zip.code}
                  </h3>
                  <span className="text-sm font-medium">
                    {statusConfig[zip.status].text}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {zip.city}, {zip.state}
                </p>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  disabled={zip.status === 'taken'}
                  className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-300 ${
                    zip.status === 'available' 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : zip.status === 'limited' 
                        ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {zip.status === 'available' 
                    ? 'Reserve This Area' 
                    : zip.status === 'limited' 
                      ? 'Join Waitlist' 
                      : 'Already Taken'}
                </button>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredZipCodes.length === 0 && (
            <div className="text-center py-12">
              <svg 
                className="w-16 h-16 mx-auto text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-dosis font-medium text-gray-900 mt-4">
                No areas found
              </h3>
              <p className="text-gray-600 mt-2">
                We couldn't find any areas matching your search. Try a different ZIP code or location.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <h3 className="text-lg font-dosis font-medium text-emerald-800 mb-2">
                Why booking is important
              </h3>
              <p className="text-gray-700">
                We only work with one agent per area to maintain performance and exclusivity. 
                Booking ensures you're next in line for top-producing ZIPs.
              </p>
            </div>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center"
            >
              Schedule a Strategy Call
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal - Same as in Home component */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Book Your Real Estate Lead Gen Consultation</h2>
                  <p className="text-gray-600">Unlock Uncapped, Approval-Based Lead Delivery With 25%+ Avg. Conversions</p>
                </div>
                <button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name (Required)</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Required)</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Required)</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brokerage / Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Are you a solo agent or team?</label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select</option>
                      <option value="solo">Solo Agent</option>
                      <option value="team">Team</option>
                      <option value="broker">Broker Owner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Which markets do you serve?</label>
                    <input
                      type="text"
                      placeholder="Enter your markets"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What's your biggest lead generation challenge right now?</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Consultation Time</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    🔒 Schedule My Call Now
                  </button>
                </div>
              </form>

              {/* Conversion Messaging */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-800 mb-2">What to expect:</h3>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>15-minute strategy session</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Custom lead generation plan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>No obligation consultation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Our Guarantees:</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>25%+ average conversion rate</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Exclusive, intent-based leads</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      )}
    </div>
  );
};

export default Area;