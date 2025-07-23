import React, { useState, useEffect } from 'react';

import { 
  Calendar, Clock, User, Phone, MapPin, DollarSign, TrendingUp, PlayCircle, 
  Edit, Trash2, Mail, MessageSquare, Search, Filter, Download, MoreVertical, 
  Home, Users, Building, Target, AlertCircle, CheckCircle, ChevronDown, Briefcase, X
} from 'lucide-react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, 
  Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler } from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, 
  ArcElement, PointElement, LineElement, Filler
);

const AGENT_NAME = 'Sarah Williams'; // Simulate logged-in agent

const AgentDashboard = () => {
  const [activeTab, setActiveTab] = useState('assigned');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAssignForm, setShowAssignForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [workers, setWorkers] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedWorker, setSelectedWorker] = useState('');
  const [notification, setNotification] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sarah Williams',
    role: 'Senior Agent',
    phone: '+1 (555) 234-5678',
    email: 'sarah@coolhouses.com',
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
  });
  const [editProfile, setEditProfile] = useState(profile);
  const handleProfileChange = e => {
    const { name, value } = e.target;
    if (name in editProfile.social) {
      setEditProfile(prev => ({ ...prev, social: { ...prev.social, [name]: value } }));
    } else {
      setEditProfile(prev => ({ ...prev, [name]: value }));
    }
  };
  const handleProfileSubmit = e => {
    e.preventDefault();
    const isNewProfile = profile.email !== editProfile.email;
    setProfile(editProfile);
    setShowProfileModal(false);
    if (window.updateAgentProfile) window.updateAgentProfile(editProfile);
    setNotification({
      type: 'success',
      message: isNewProfile ? 'New profile created and added to agents page!' : 'Profile updated!'
    });
  };

  // Only show leads assigned to this agent
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Olivia Gray',
      phone: '(123) 456-7890',
      address: '123 Main St, New York, NY',
      type: 'Buyer',
      budget: '$500,000 - $600,000',
      location: 'Manhattan',
      status: 'assigned',
      lastContact: 'Today, 9:21 AM',
      notes: 'Interested in 2-bedroom apartments',
      recording: 'recording1.mp3',
      assignedBy: 'John Doe (LPM)',
      assignedTo: AGENT_NAME,
      priority: 'high',
      source: 'Website',
      createdAt: '2024-02-20T09:21:00',
      area: 'New York'
    },
    {
      id: 2,
      name: 'Ethan Wong',
      phone: '(556) 123-4557',
      address: '456 Oak Ave, Brooklyn, NY',
      type: 'Seller',
      demand: '$665,900',
      motivation: 'Relocating',
      status: 'assigned',
      lastContact: 'Yesterday, 2:30 PM',
      notes: 'Property needs minor repairs',
      recording: 'recording2.mp3',
      assignedBy: 'Jane Smith (LPM)',
      assignedTo: AGENT_NAME,
      priority: 'medium',
      source: 'Referral',
      createdAt: '2024-02-19T14:30:00',
      area: 'New York'
    },
    {
      id: 3,
      name: 'Avery Hill',
      phone: '(789) 321-6540',
      address: '789 Pine Rd, Los Angeles, CA',
      type: 'Buyer',
      budget: '$400,000 - $450,000',
      location: 'Downtown LA',
      status: 'inProgress',
      lastContact: 'April 10, 11:15 AM',
      notes: 'Looking for condo with parking',
      recording: 'recording3.mp3',
      assignedBy: 'Mike Johnson (LPM)',
      assignedTo: AGENT_NAME,
      priority: 'low',
      source: 'Cold Call',
      createdAt: '2024-02-10T11:15:00',
      area: 'Los Angeles'
    },
    {
      id: 4,
      name: 'Liam Barnes',
      phone: '(321) 654-0987',
      address: '321 Elm St, Miami, FL',
      type: 'Seller',
      demand: '$320,000',
      motivation: 'Downsizing',
      status: 'contracted',
      lastContact: 'April 5, 3:36 PM',
      notes: 'Contract signed, closing in 30 days',
      recording: 'recording4.mp3',
      assignedBy: 'Sarah Williams (LPM)',
      assignedTo: AGENT_NAME,
      priority: 'low',
      source: 'Open House',
      createdAt: '2024-02-05T15:36:00',
      area: 'Miami'
    }
  ]);

  useEffect(() => {
    // Simulate fetching workers from API
    const mockWorkers = [
      { id: 1, name: 'Michael Johnson', email: 'michael@example.com', area: 'New York' },
      { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', area: 'Los Angeles' },
      { id: 3, name: 'David Brown', email: 'david@example.com', area: 'Miami' },
      { id: 4, name: 'Emily Davis', email: 'emily@example.com', area: 'New York' },
      { id: 5, name: 'Robert Wilson', email: 'robert@example.com', area: 'Los Angeles' },
    ];
    setWorkers(mockWorkers);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const stats = {
    totalLeads: leads.length,
    assigned: leads.filter(lead => lead.status === 'assigned').length,
    inProgress: leads.filter(lead => lead.status === 'inProgress').length,
    followUp: leads.filter(lead => lead.status === 'followUp').length,
    contracted: leads.filter(lead => lead.status === 'contracted').length,
    closed: leads.filter(lead => lead.status === 'closed').length,
    conversionRate: leads.length > 0 
      ? Math.round((leads.filter(lead => lead.status === 'closed').length / leads.length) * 100)
      : 0,
    avgResponseTime: '2.5 hrs'
  };

  // Chart data and options (similar to LeadPoolManager)
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Assigned Leads',
        data: [8, 12, 6, 14, 10, 16],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Closed Deals',
        data: [3, 7, 4, 9, 6, 12],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderRadius: 6,
        borderSkipped: false,
      }
    ]
  };
  const donutChartData = {
    labels: ['Website', 'Referral', 'Cold Call', 'Open House', 'Social Media'],
    datasets: [{
      data: [12, 19, 8, 5, 3],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)'
      ],
      borderColor: 'rgba(17, 24, 39, 0.8)',
      borderWidth: 2,
      cutout: '70%',
    }]
  };
  const areaChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Lead Conversion Rate',
        data: [25, 40, 30, 55],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#262626',
          font: { weight: '600' },
          boxWidth: 12,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#262626',
        bodyColor: '#262626',
        borderColor: '#439CB0',
        borderWidth: 1,
        padding: 12,
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        cornerRadius: 8,
        displayColors: true,
        usePointStyle: true
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#676880'
        }
      },
      y: {
        grid: {
          color: '#e5e7eb',
          drawBorder: false
        },
        ticks: {
          color: '#676880',
          stepSize: 5
        },
        beginAtZero: true
      }
    }
  };
  const donutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#262626',
          font: {
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#262626',
        bodyColor: '#262626',
        borderColor: '#439CB0',
        borderWidth: 1,
        padding: 12,
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        cornerRadius: 8
      }
    }
  };
  const areaChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#262626',
        bodyColor: '#262626',
        borderColor: '#439CB0',
        borderWidth: 1,
        padding: 12,
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#676880'
        }
      },
      y: {
        grid: {
          color: '#e5e7eb',
          drawBorder: false
        },
        ticks: {
          color: '#676880',
          callback: function(value) {
            return value + '%';
          }
        },
        min: 0,
        max: 100
      }
    }
  };

  const filteredLeads = leads.filter(lead => {
    if (activeTab === 'assigned') return lead.status === 'assigned';
    if (activeTab === 'inProgress') return lead.status === 'inProgress';
    if (activeTab === 'followUp') return lead.status === 'followUp';
    if (activeTab === 'contracted') return lead.status === 'contracted';
    if (activeTab === 'closed') return lead.status === 'closed';
    return true;
  }).filter(lead => 
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.phone.includes(searchQuery) ||
    lead.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredWorkers = selectedArea 
    ? workers.filter(worker => worker.area === selectedArea)
    : workers;

  const handleAssignLead = (e) => {
    e.preventDefault();
    if (!selectedWorker) {
      setNotification({ type: 'error', message: 'Please select a worker' });
      return;
    }
    const updatedLeads = leads.map(lead => 
      lead.id === selectedLead.id 
        ? { ...lead, status: 'assigned', assignedTo: selectedWorker }
        : lead
    );
    setLeads(updatedLeads);
    setShowAssignForm(false);
    setSelectedWorker('');
    setSelectedArea('');
    setNotification({ 
      type: 'success', 
      message: `Lead assigned to ${selectedWorker} successfully!` 
    });
  };

  const handleUpdateStatus = (leadId, newStatus) => {
    const updatedLeads = leads.map(lead => 
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    );
    setLeads(updatedLeads);
    setNotification({ 
      type: 'success', 
      message: `Lead status updated to ${newStatus}` 
    });
  };

  const handleCallLead = (lead) => {
    setNotification({ type: 'info', message: `Calling ${lead.name} at ${lead.phone}` });
  };

  const handleEmailLead = (lead) => {
    setNotification({ type: 'info', message: `Emailing ${lead.name}` });
  };

  const handleScheduleLead = (lead) => {
    setNotification({ type: 'info', message: `Scheduling appointment with ${lead.name}` });
  };

  const handleAddNote = (lead) => {
    setNotification({ type: 'info', message: `Adding note for ${lead.name}` });
  };

  return (
    <div className="min-h-screen bg-[#E2E2E2] text-[#262626] font-quicksand">
      {/* Header */}
      <header className="bg-[#153E42] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-[#439CB0]">Vista</span>Estate
              </span>
            </div>
            <h1 className="ml-10 text-xl font-medium text-white">Agent Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-[#439CB0] flex items-center justify-center text-white font-medium">
              AG
            </div>
            <span className="font-medium text-white">{AGENT_NAME}</span>
          </div>
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl bg-[#439CB0] text-white flex items-center space-x-2 transition-opacity duration-300">
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="text-white hover:text-[#153E42]">
            <X size={16} />
          </button>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Business Profile Card */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="relative bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 w-full md:w-2/3">
            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-[#439CB0]/30">
              <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#153E42]/80 to-transparent h-1/2"></div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-[#153E42]">{profile.name}</h2>
              <p className="text-lg text-[#439CB0] font-semibold">{profile.role}</p>
              <p className="text-[#262626] mb-2">{profile.bio}</p>
              <div className="flex flex-wrap gap-4 text-[#262626] text-sm">
                <span><Phone className="inline w-4 h-4 mr-1" /> {profile.phone}</span>
                <span><Mail className="inline w-4 h-4 mr-1" /> {profile.email}</span>
              </div>
              <div className="flex gap-6 mt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#439CB0]">{profile.properties}</div>
                  <div className="text-xs text-[#153E42]">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#439CB0]">{profile.experience}</div>
                  <div className="text-xs text-[#153E42]">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#439CB0]">{profile.rating}</div>
                  <div className="text-xs text-[#153E42]">Rating</div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <a href={profile.social.facebook} className="text-[#439CB0] hover:text-[#153E42]" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href={profile.social.twitter} className="text-[#439CB0] hover:text-[#153E42]" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href={profile.social.instagram} className="text-[#439CB0] hover:text-[#153E42]" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href={profile.social.linkedin} className="text-[#439CB0] hover:text-[#153E42]" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <button onClick={() => { setEditProfile(profile); setShowProfileModal(true); }} className="absolute top-4 right-4 px-4 py-2 bg-[#439CB0] hover:bg-[#153E42] text-white rounded-lg shadow transition-all font-semibold">Edit Profile</button>
          </div>
        </div>
        {/* Profile Edit Modal */}
        {showProfileModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/80 backdrop-blur-sm">
            <div className="bg-[#E2E2E2] rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#262626]">Edit Business Profile</h2>
                    <p className="text-[#262626]/80">Update your public agent profile</p>
                  </div>
                  <button onClick={() => setShowProfileModal(false)} className="text-[#262626]/60 hover:text-[#262626]" aria-label="Close modal">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Full Name (Required)</label>
                      <input type="text" name="name" value={editProfile.name} onChange={handleProfileChange} required className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Role/Position (Required)</label>
                      <input type="text" name="role" value={editProfile.role} onChange={handleProfileChange} required className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Phone Number (Required)</label>
                      <input type="tel" name="phone" value={editProfile.phone} onChange={handleProfileChange} required className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Email Address (Required)</label>
                      <input type="email" name="email" value={editProfile.email} onChange={handleProfileChange} required className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#262626] mb-1">Bio/Description</label>
                    <textarea name="bio" value={editProfile.bio} onChange={handleProfileChange} rows={3} className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white" placeholder="Brief description of the agent's expertise"></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Properties Sold</label>
                      <input type="number" name="properties" value={editProfile.properties} onChange={handleProfileChange} className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" placeholder="e.g. 25" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Years of Experience</label>
                      <input type="text" name="experience" value={editProfile.experience} onChange={handleProfileChange} className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" placeholder="e.g. 5 years" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Rating (1-5)</label>
                      <input type="number" name="rating" value={editProfile.rating} onChange={handleProfileChange} min="1" max="5" step="0.1" className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" placeholder="e.g. 4.5" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#262626] mb-1">Profile Image URL</label>
                    <input type="url" name="image" value={editProfile.image} onChange={handleProfileChange} className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-transparent bg-white" placeholder="https://example.com/agent.jpg" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Facebook Profile</label>
                      <input type="url" name="facebook" value={editProfile.social.facebook} onChange={handleProfileChange} className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" placeholder="https://facebook.com/username" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Twitter Profile</label>
                      <input type="url" name="twitter" value={editProfile.social.twitter} onChange={handleProfileChange} className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" placeholder="https://twitter.com/username" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">Instagram Profile</label>
                      <input type="url" name="instagram" value={editProfile.social.instagram} onChange={handleProfileChange} className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" placeholder="https://instagram.com/username" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-1">LinkedIn Profile</label>
                      <input type="url" name="linkedin" value={editProfile.social.linkedin} onChange={handleProfileChange} className="w-full px-4 py-2 border border-[#262626]/30 rounded-lg focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] bg-white" placeholder="https://linkedin.com/in/username" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-[#439CB0] hover:bg-[#153E42] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">Save Profile</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {/* Search and Filters */}
        <div className="mb-6 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-xl flex flex-col md:flex-row justify-between items-center">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#439CB0]/20 bg-white/80 text-[#262626] placeholder-[#439CB0]/60 focus:outline-none focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] transition-all"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-[#439CB0]/60" />
          </div>
        </div>

        {/* Stats Cards with Graph */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#439CB0] mb-1 font-semibold">Total Leads</p>
                <p className="text-3xl font-bold text-[#153E42]">{stats.totalLeads}</p>
                <p className="text-xs text-green-600 mt-1 font-medium">+2.4% from last week</p>
              </div>
              <div className="p-3 rounded-full bg-[#439CB0]/10">
                <Users className="w-6 h-6 text-[#439CB0]" />
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#439CB0] mb-1 font-semibold">Conversion Rate</p>
                <p className="text-3xl font-bold text-green-600">{stats.conversionRate}%</p>
                <p className="text-xs text-green-600 mt-1 font-medium">+1.2% from last week</p>
              </div>
              <div className="p-3 rounded-full bg-green-500/10">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-xl">
            <div className="h-full">
              <Bar 
                data={barChartData} 
                options={barChartOptions} 
                height={200}
              />
            </div>
          </div>
        </div>
        {/* Second Row with Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-[#439CB0] mb-1 font-semibold">Lead Sources</p>
                <p className="text-xl font-bold">Distribution</p>
              </div>
              <div className="p-3 rounded-full bg-[#439CB0]/10">
                <Building className="w-6 h-6 text-[#439CB0]" />
              </div>
            </div>
            <div className="h-60">
              <Pie 
                data={donutChartData} 
                options={donutChartOptions} 
              />
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-[#439CB0] mb-1 font-semibold">Conversion Trend</p>
                <p className="text-xl font-bold">Monthly Progress</p>
              </div>
              <div className="p-3 rounded-full bg-emerald-500/10">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="h-60">
              <Line 
                data={areaChartData} 
                options={areaChartOptions} 
              />
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-[#439CB0] mb-1 font-semibold">Closed Leads</p>
                <p className="text-2xl font-bold text-green-600">{stats.closed}</p>
              </div>
              <div className="p-3 rounded-full bg-green-500/10">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="h-60 flex items-center justify-center">
              <div className="w-full">
                <div className="flex justify-between text-sm text-[#439CB0] mb-1">
                  <span>Target</span>
                  <span>75%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#153E42]">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-[#153E42] to-[#439CB0]" 
                    style={{ width: `${Math.min(100, (stats.closed / stats.totalLeads) * 100)}%` }}
                  ></div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {Math.round((stats.closed / stats.totalLeads) * 100)}%
                  </div>
                  <div className="text-sm text-[#439CB0]">conversion rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Leads List */}
          <div className="lg:col-span-2">
            <div className="rounded-lg shadow bg-white">
              {/* Header with Tabs */}
              <div className="p-4 border-b border-[#439CB0]/20">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Lead Management</h2>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-lg bg-[#439CB0]/10 hover:bg-[#439CB0]/20">
                      <Download className="w-5 h-5 text-[#439CB0]" />
                    </button>
                  </div>
                </div>
                <div className="flex space-x-1 bg-[#439CB0]/10 p-1 rounded-lg overflow-x-auto">
                  {[
                    { key: 'assigned', label: `Assigned (${stats.assigned})`, color: 'purple' },
                    { key: 'inProgress', label: `In Progress (${stats.inProgress})`, color: 'yellow' },
                    { key: 'followUp', label: `Follow-up (${stats.followUp})`, color: 'orange' },
                    { key: 'contracted', label: `Contracted (${stats.contracted})`, color: 'indigo' },
                    { key: 'closed', label: `Closed (${stats.closed})`, color: 'green' }
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                        activeTab === tab.key
                          ? 'bg-white shadow-sm text-[#153E42]'
                          : 'text-[#439CB0] hover:text-[#153E42]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Leads List */}
              <div className="divide-y divide-[#439CB0]/10 max-h-[600px] overflow-y-auto">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <div 
                      key={lead.id} 
                      className={`p-4 hover:bg-[#439CB0]/5 cursor-pointer transition-all ${
                        selectedLead?.id === lead.id ? 'bg-emerald-50 border-l-4 border-emerald-500' : ''
                      }`}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{lead.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-[#439CB0] mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{lead.address}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-[#439CB0] mt-1">
                            <Phone className="w-4 h-4" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-2 py-1 text-xs rounded-full border font-semibold ${
                            lead.status === 'assigned' ? 'bg-[#439CB0]/10 text-[#439CB0] border-[#439CB0]/30' :
                            lead.status === 'inProgress' ? 'bg-yellow-400/10 text-yellow-600 border-yellow-400/30' :
                            lead.status === 'followUp' ? 'bg-orange-400/10 text-orange-600 border-orange-400/30' :
                            lead.status === 'contracted' ? 'bg-indigo-400/10 text-indigo-600 border-indigo-400/30' :
                            'bg-green-500/10 text-green-600 border-green-500/30'
                          }`}>
                            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                          </span>
                          {lead.assignedTo && (
                            <span className="text-xs text-[#439CB0]">{lead.assignedTo}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-[#439CB0]">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{lead.assignedBy}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{lead.lastContact}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {lead.status !== 'closed' && (
                            <select
                              value={lead.status}
                              onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                              className="text-xs rounded border bg-white border-[#439CB0]/20 focus:outline-none focus:ring-1 focus:ring-[#439CB0]"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <option value="assigned">Assigned</option>
                              <option value="inProgress">In Progress</option>
                              <option value="followUp">Follow Up</option>
                              <option value="contracted">Contracted</option>
                              <option value="closed">Closed</option>
                            </select>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#439CB0]/10 flex items-center justify-center">
                      <Search className="w-8 h-8 text-[#439CB0]/40" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No leads found</h3>
                    <p className="text-[#439CB0]/80">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Lead Details */}
          <div className="lg:col-span-1">
            <div className="rounded-lg shadow bg-white">
              <div className="p-4 border-b border-[#439CB0]/20">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Lead Details</h2>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-[#439CB0]/10 hover:bg-[#439CB0]/20">
                      <MoreVertical className="w-5 h-5 text-[#439CB0]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                {selectedLead ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selectedLead.name}</h3>
                      <div className="space-y-2 text-[#439CB0]">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedLead.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{selectedLead.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Assigned by: {selectedLead.assignedBy}</span>
                        </div>
                        {selectedLead.assignedTo && (
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4" />
                            <span>Assigned to: {selectedLead.assignedTo}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-[#439CB0]/10">
                        <div className="text-sm text-[#153E42] mb-1">Type</div>
                        <div className="font-medium">{selectedLead.type}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#439CB0]/10">
                        <div className="text-sm text-[#153E42] mb-1">Status</div>
                        <div className="font-medium">
                          <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                            selectedLead.status === 'assigned' ? 'bg-[#439CB0]/10 text-[#439CB0] border-[#439CB0]/30' :
                            selectedLead.status === 'inProgress' ? 'bg-yellow-400/10 text-yellow-600 border-yellow-400/30' :
                            selectedLead.status === 'followUp' ? 'bg-orange-400/10 text-orange-600 border-orange-400/30' :
                            selectedLead.status === 'contracted' ? 'bg-indigo-400/10 text-indigo-600 border-indigo-400/30' :
                            'bg-green-500/10 text-green-600 border-green-500/30'
                          }`}>
                            {selectedLead.status.charAt(0).toUpperCase() + selectedLead.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    {selectedLead.budget && (
                      <div className="p-3 rounded-lg bg-[#439CB0]/10">
                        <div className="text-sm text-[#153E42] mb-1">Budget</div>
                        <div className="font-medium text-green-500">{selectedLead.budget}</div>
                      </div>
                    )}
                    {selectedLead.demand && (
                      <div className="p-3 rounded-lg bg-[#439CB0]/10">
                        <div className="text-sm text-[#153E42] mb-1">Demand</div>
                        <div className="font-medium text-green-500">{selectedLead.demand}</div>
                      </div>
                    )}
                    <div className="p-3 rounded-lg bg-[#439CB0]/10">
                      <div className="text-sm text-[#153E42] mb-2">Notes</div>
                      <div className="text-[#262626]">{selectedLead.notes}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#439CB0]/10">
                      <div className="text-sm text-[#153E42] mb-2">Call Recording</div>
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 text-emerald-500 hover:text-emerald-600">
                          <PlayCircle className="w-5 h-5" />
                          <span className="text-sm">{selectedLead.recording}</span>
                        </button>
                        <div className="text-xs text-[#439CB0]">0:25</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => handleAddNote(selectedLead)}
                        className="p-2 rounded-lg bg-[#439CB0]/10 hover:bg-[#439CB0]/20 flex items-center justify-center space-x-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Add Note</span>
                      </button>
                      <button 
                        onClick={() => handleCallLead(selectedLead)}
                        className="p-2 rounded-lg bg-[#439CB0]/10 hover:bg-[#439CB0]/20 flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </button>
                      <button 
                        onClick={() => handleEmailLead(selectedLead)}
                        className="p-2 rounded-lg bg-[#439CB0]/10 hover:bg-[#439CB0]/20 flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </button>
                      <button 
                        onClick={() => handleScheduleLead(selectedLead)}
                        className="p-2 rounded-lg bg-[#439CB0]/10 hover:bg-[#439CB0]/20 flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Schedule</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#439CB0]/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-[#439CB0]/40" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Select a Lead</h3>
                    <p className="text-[#439CB0]/80">Choose a lead from the list to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Assign Lead Form Modal */}
      {showAssignForm && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Assign Lead to Worker</h2>
              <button 
                onClick={() => {
                  setShowAssignForm(false);
                  setSelectedArea('');
                  setSelectedWorker('');
                }}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleAssignLead} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Lead Information</label>
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="font-medium">{selectedLead.name}</p>
                  <p className="text-sm text-gray-500">{selectedLead.address}</p>
                  <p className="text-sm text-gray-500">{selectedLead.phone}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Select Area</label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select Area</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Miami">Miami</option>
                </select>
              </div>

              {selectedArea && (
                <div>
                  <label className="block text-sm font-medium mb-1">Select Worker</label>
                  <select
                    value={selectedWorker}
                    onChange={(e) => setSelectedWorker(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select Worker</option>
                    {filteredWorkers.map(worker => (
                      <option key={worker.id} value={`${worker.name} (${worker.area})`}>
                        {worker.name} ({worker.area})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAssignForm(false);
                    setSelectedArea('');
                    setSelectedWorker('');
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                >
                  Assign Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentDashboard;