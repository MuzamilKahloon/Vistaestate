import React, { useState, useEffect } from 'react';

import { 
  Calendar, Clock, User, Phone, MapPin, DollarSign, TrendingUp, PlayCircle, 
  Edit, Trash2, Mail, MessageSquare, Search, Filter, Download, MoreVertical, 
  Home, Users, Building, Target, AlertCircle, CheckCircle, ChevronDown, Briefcase, X,
  Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, 
  Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler } from 'chart.js';

import CreateProfile from '../components/Createprofile';

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
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl bg-[#439CB0] text-white flex items-center space-x-2 transition-opacity duration-300">
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="text-white hover:text-[#153E42]">
            <X size={16} />
          </button>
        </div>
      )}
      {/* Create Profile Section */}
      <CreateProfile type="agent" />
      {/* Profile Modal (View Only, visually attractive) */}
      {/* This section is now handled by CreateProfile, so it's removed */}
      {/* Main dashboard content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          {/* Lead Status Distribution Donut Chart */}
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#439CB0]/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-[#439CB0] mb-1 font-semibold">Lead Status</p>
                <p className="text-xl font-bold">Distribution</p>
              </div>
              <div className="p-3 rounded-full bg-[#439CB0]/10">
                <Target className="w-6 h-6 text-[#439CB0]" />
              </div>
            </div>
            <div className="h-60">
              <Pie 
                data={{
                  labels: ['Assigned', 'In Progress', 'Follow Up', 'Contracted', 'Closed'],
                  datasets: [{
                    data: [
                      stats.assigned,
                      stats.inProgress,
                      stats.followUp,
                      stats.contracted,
                      stats.closed
                    ],
                    backgroundColor: [
                      'rgba(59, 130, 246, 0.8)', // Assigned - blue
                      'rgba(251, 191, 36, 0.8)', // In Progress - yellow
                      'rgba(249, 115, 22, 0.8)', // Follow Up - orange
                      'rgba(139, 92, 246, 0.8)', // Contracted - indigo
                      'rgba(16, 185, 129, 0.8)'  // Closed - green
                    ],
                    borderColor: 'rgba(17, 24, 39, 0.8)',
                    borderWidth: 2,
                    cutout: '70%',
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: {
                        color: '#262626',
                        font: { weight: '500' },
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
                }}
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