import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'market-trends', name: 'Market Trends' },
    { id: 'home-improvement', name: 'Home Improvement' },
    { id: 'investment', name: 'Investment' },
    { id: 'neighborhoods', name: 'Neighborhoods' },
    { id: 'guides', name: 'Guides' }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: '2024 Real Estate Market Predictions',
      excerpt: 'Discover what experts are saying about the upcoming year in real estate and how it might affect your buying or selling decisions.',
      date: 'January 15, 2024',
      category: 'market-trends',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Johnson',
      comments: 12,
      featured: true
    },
    {
      id: 2,
      title: '10 Home Improvement Projects With the Best ROI',
      excerpt: 'Learn which home improvements give you the most bang for your buck when it comes time to sell your property.',
      date: 'December 5, 2023',
      category: 'home-improvement',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Chen',
      comments: 8,
      featured: false
    },
    {
      id: 3,
      title: 'The Complete Guide to Buying Rental Property',
      excerpt: 'Everything you need to know about purchasing your first investment property and becoming a landlord.',
      date: 'November 22, 2023',
      category: 'investment',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'David Wilson',
      comments: 5,
      featured: false
    },
    {
      id: 4,
      title: 'Top 5 Up-and-Coming Neighborhoods in 2024',
      excerpt: 'These neighborhoods are poised for growth in the coming year - perfect for buyers looking for value.',
      date: 'November 10, 2023',
      category: 'neighborhoods',
      image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Emma Rodriguez',
      comments: 15,
      featured: false
    },
    {
      id: 5,
      title: 'First-Time Home Buyer Mistakes to Avoid',
      excerpt: 'Learn from others mistakes with this guide to common pitfalls for first-time buyers and how to steer clear.',
      date: 'October 28, 2023',
      category: 'guides',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Johnson',
      comments: 7,
      featured: false
    },
    {
      id: 6,
      title: 'How to Stage Your Home for a Quick Sale',
      excerpt: 'Professional staging tips that can help your home sell faster and for more money.',
      date: 'October 15, 2023',
      category: 'home-improvement',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Chen',
      comments: 9,
      featured: false
    }
  ];

  // Recent comments data
  const recentComments = [
    {
      id: 1,
      author: 'John D.',
      text: 'Great insights on the market trends!',
      post: '2024 Real Estate Market Predictions',
      time: '2 days ago'
    },
    {
      id: 2,
      author: 'Lisa M.',
      text: 'The ROI numbers were very helpful.',
      post: '10 Home Improvement Projects With the Best ROI',
      time: '1 week ago'
    },
    {
      id: 3,
      author: 'Robert T.',
      text: 'Looking forward to more neighborhood guides!',
      post: 'Top 5 Up-and-Coming Neighborhoods in 2024',
      time: '2 weeks ago'
    }
  ];

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post (first featured post found)
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">VistaEstate Blog</h1>
            <p className="text-xl mb-8">Expert insights, market trends, and real estate advice</p>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="text-white hover:text-blue-300">Home</Link>
              <span>/</span>
              <span className="text-blue-400">Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts Column */}
            <div className="lg:w-2/3">
              {/* Featured Post (if exists) */}
              {featuredPost && (
                <div className="featured-post mb-12 bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-96 object-cover" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="mr-4">{featuredPost.date}</span>
                      <span className="mr-4">By {featuredPost.author}</span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {featuredPost.comments} Comments
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      <Link to={`/blog/${featuredPost.id}`} className="hover:text-blue-600 transition duration-300">
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <Link 
                      to={`/blog/${featuredPost.id}`} 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              )}

              {/* Category Filter */}
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="mb-8 relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.filter(post => !post.featured).map(post => (
                    <div key={post.id} className="blog-post bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                      <div className="relative">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-gray-600 text-sm mb-3">
                          <span className="mr-4">{post.date}</span>
                          <span>By {post.author}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                          <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition duration-300">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Read More
                          </Link>
                          <span className="flex items-center text-gray-600 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            {post.comments} Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
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
                    8
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">About The Blog</h3>
                <p className="text-gray-600 mb-4">
                  The VistaEstate blog provides expert insights, market trends, and practical advice for buyers, sellers, and investors in today's dynamic real estate market.
                </p>
                <p className="text-gray-600">
                  Our team of experienced agents and analysts share their knowledge to help you make informed real estate decisions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">Categories</h3>
                <ul className="space-y-3">
                  {categories.filter(cat => cat.id !== 'all').map(category => (
                    <li key={category.id}>
                      <button 
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex justify-between w-full px-3 py-2 rounded ${activeCategory === category.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {blogPosts.filter(post => post.category === category.id).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">Recent Comments</h3>
                <ul className="space-y-4">
                  {recentComments.map(comment => (
                    <li key={comment.id} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          {comment.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{comment.author}</div>
                        <div className="text-sm text-gray-600">{comment.text}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          On <Link to="#" className="text-blue-600 hover:underline">{comment.post}</Link> • {comment.time}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">Subscribe</h3>
                <p className="text-gray-600 mb-4">Get the latest articles and news delivered to your inbox</p>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;