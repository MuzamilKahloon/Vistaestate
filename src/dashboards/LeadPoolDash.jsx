import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, User, Phone, MapPin, DollarSign, TrendingUp, PlayCircle, 
  Edit, Trash2, Mail, MessageSquare, Search, Filter, Download, MoreVertical, 
  Home, Users, Building, Target, AlertCircle, CheckCircle, Sun, Moon, X 
} from 'lucide-react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, 
  Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler } from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, 
  ArcElement, PointElement, LineElement, Filler
);

const Navbar = () => {
  return (
    <header className="bg-[#153E42] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-[#439CB0]">Vista</span>Estate
            </span>
          </div>
          <h1 className="ml-10 text-xl font-medium text-white">Lead Management</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-[#439CB0] flex items-center justify-center text-white font-medium">
            LP
          </div>
          <span className="font-medium text-white">Lead Pool Manager</span>
        </div>
      </div>
    </header>
  );
};

const StatusBadge = ({ status }) => {
  const colors = {
    new: 'bg-[#439CB0]/10 text-[#439CB0] border-[#439CB0]/30',
    inProgress: 'bg-[#153E42]/10 text-[#153E42] border-[#153E42]/30',
    followUp: 'bg-yellow-400/10 text-yellow-600 border-yellow-400/30',
    closed: 'bg-green-500/10 text-green-600 border-green-500/30'
  };
  return (
    <span className={`px-2 py-1 text-xs rounded-full border font-semibold ${colors[status]}`}> 
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const PriorityBadge = ({ priority }) => {
  const colors = {
    high: 'bg-red-500/10 text-red-600 border-red-500/30',
    medium: 'bg-[#439CB0]/10 text-[#439CB0] border-[#439CB0]/30',
    low: 'bg-[#153E42]/10 text-[#153E42] border-[#153E42]/30'
  };
  return (
    <span className={`px-2 py-1 text-xs rounded-full border font-semibold ${colors[priority]}`}> 
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
};

// Add a sample agents list (replace with import if you have a central list)
const agentsList = [
  { id: 1, name: 'Michael Johnson', area: 'New York' },
  { id: 2, name: 'Sarah Williams', area: 'Los Angeles' },
  { id: 3, name: 'David Brown', area: 'Miami' },
  { id: 4, name: 'Emily Davis', area: 'New York' },
  { id: 5, name: 'Robert Wilson', area: 'Los Angeles' },
];

const LeadPoolDash = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [notification, setNotification] = useState(null);
  
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Olivia Gray',
      phone: '(123) 456-7890',
      address: '123 Main St, Valley, CA',
      type: 'Buyer',
      budget: '$500,000 - $600,000',
      location: 'Valley Area',
      status: 'new',
      lastContact: 'Today, 9:21 AM',
      notes: 'Follow-up needed',
      recording: 'recording1.mp3',
      agentToAssign: 'John Doe',
      assignedTo: '',
      priority: 'high',
      source: 'Website',
      createdAt: '2024-02-20T09:21:00'
    },
    {
      id: 2,
      name: 'Ethan Wong',
      phone: '(556) 123-4557',
      address: '456 Oak Ave, Skyline, NY',
      type: 'Seller',
      demand: '$665,900',
      motivation: 'Relocating',
      status: 'assigned',
      lastContact: 'Yesterday, 2:30 PM',
      notes: 'Discuss budget + location preferences',
      recording: 'recording2.mp3',
      assignedTo: 'Jane Smith',
      priority: 'medium',
      source: 'Referral',
      createdAt: '2024-02-19T14:30:00'
    },
    {
      id: 3,
      name: 'Avery Hill',
      phone: '(789) 321-6540',
      address: '789 Pine Rd, Hillside, TX',
      type: 'Buyer',
      budget: '$400,000 - $450,000',
      location: 'Hillside Area',
      status: 'assigned',
      lastContact: 'April 10, 11:15 AM',
      notes: 'Schedule call for verification',
      recording: 'recording3.mp3',
      assignedTo: 'Mike Johnson',
      priority: 'low',
      source: 'Cold Call',
      createdAt: '2024-02-10T11:15:00'
    },
    {
      id: 4,
      name: 'Liam Barnes',
      phone: '(321) 654-0987',
      address: '321 Elm St, Riverside, FL',
      type: 'Seller',
      demand: '$320,000',
      motivation: 'Downsizing',
      status: 'assigned',
      lastContact: 'April 5, 3:36 PM',
      notes: 'Contract signed',
      recording: 'recording4.mp3',
      assignedTo: 'Sarah Williams',
      priority: 'low',
      source: 'Open House',
      createdAt: '2024-02-05T15:36:00'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    type: 'buyer',
    budget: '',
    desiredLocation: '',
    propertyType: '',
    demand: '',
    askingPrice: '',
    motivation: '',
    appointmentTime: '',
    notes: '',
    recording: null,
    priority: 'medium',
    source: 'Website',
    area: '',
    agent: ''
  });

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
    newLeads: leads.filter(lead => lead.status === 'new').length,
    inProgress: leads.filter(lead => lead.status === 'inProgress').length,
    followUp: leads.filter(lead => lead.status === 'followUp').length,
    closed: leads.filter(lead => lead.status === 'closed').length,
    conversionRate: leads.length > 0 
      ? Math.round((leads.filter(lead => lead.status === 'closed').length / leads.length) * 100)
      : 0,
    avgResponseTime: '2.5 hrs'
  };

  const recentActivity = [
    { id: 1, type: 'call', lead: 'Olivia Gray', agent: 'John Doe', time: '11:45', action: 'Verification call', status: 'completed' },
    { id: 2, type: 'note', lead: 'Ethan Wong', agent: 'Jane Smith', time: '10:20', action: 'Looking for 3 bedroom homes', status: 'active' },
    { id: 3, type: 'follow-up', lead: 'Avery Hill', agent: 'Mike Johnson', time: '8:00', action: 'Follow-up reminder', status: 'overdue' },
    { id: 4, type: 'lead', lead: 'Liam Barnes', agent: 'System', time: '8:15', action: 'Label new lead', status: 'new' }
  ];

  // Chart data and options (same as before)
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Leads',
        data: [12, 19, 8, 15, 12, 18],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Converted Leads',
        data: [8, 12, 5, 9, 10, 14],
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
    if (activeTab === 'new') return lead.status === 'new';
    if (activeTab === 'inProgress') return lead.status === 'inProgress';
    if (activeTab === 'followUp') return lead.status === 'followUp';
    if (activeTab === 'closed') return lead.status === 'closed';
    return true;
  }).filter(lead => 
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.phone.includes(searchQuery) ||
    lead.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.agent.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.agent.trim()) errors.agent = 'Agent is required';
    
    if (formData.type === 'buyer') {
      if (!formData.budget.trim()) errors.budget = 'Budget is required';
      if (!formData.desiredLocation.trim()) errors.desiredLocation = 'Location is required';
      if (!formData.propertyType.trim()) errors.propertyType = 'Property type is required';
    } else {
      if (!formData.demand.trim()) errors.demand = 'Demand is required';
      if (!formData.askingPrice.trim()) errors.askingPrice = 'Asking price is required';
      if (!formData.motivation.trim()) errors.motivation = 'Motivation is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, recording: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newLead = {
      id: leads.length + 1,
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      type: formData.type === 'buyer' ? 'Buyer' : 'Seller',
      status: 'new',
      lastContact: new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      notes: formData.notes,
      recording: formData.recording ? formData.recording.name : 'No recording',
      agentToAssign: formData.agent,
      assignedTo: '',
      area: formData.area,
      priority: formData.priority,
      source: formData.source,
      createdAt: new Date().toISOString()
    };

    if (formData.type === 'buyer') {
      newLead.budget = formData.budget;
      newLead.location = formData.desiredLocation;
      newLead.propertyType = formData.propertyType;
    } else {
      newLead.demand = formData.demand;
      newLead.askingPrice = formData.askingPrice;
      newLead.motivation = formData.motivation;
    }

    setLeads([newLead, ...leads]);
    setShowLeadForm(false);
    setFormData({
      name: '',
      phone: '',
      address: '',
      type: 'buyer',
      budget: '',
      desiredLocation: '',
      propertyType: '',
      demand: '',
      askingPrice: '',
      motivation: '',
      appointmentTime: '',
      notes: '',
      recording: null,
      priority: 'medium',
      source: 'Website',
      area: '',
      agent: ''
    });
    setNotification({ type: 'success', message: 'Lead created!' });
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads(leads.filter(lead => lead.id !== id));
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead(null);
      }
      setNotification({ type: 'success', message: 'Lead deleted successfully!' });
    }
  };

  const handleEditLead = (lead) => {
    setFormData({
      name: lead.name,
      phone: lead.phone,
      address: lead.address,
      type: lead.type.toLowerCase(),
      budget: lead.budget || '',
      desiredLocation: lead.location || '',
      propertyType: lead.propertyType || '',
      demand: lead.demand || '',
      askingPrice: lead.askingPrice || '',
      motivation: lead.motivation || '',
      agent: lead.agent,
      area: lead.area,
      appointmentTime: '',
      notes: lead.notes,
      recording: null,
      priority: lead.priority,
      source: lead.source
    });
    setNotification({ type: 'info', message: `Editing lead: ${lead.name}` });
  };

  const handleCallLead = (lead) => {
    setNotification({ type: 'info', message: `Calling ${lead.name} at ${lead.phone}` });
  };

  const handleEmailLead = (lead) => {
    setNotification({ type: 'info', message: `Emailing ${lead.name} at ${lead.agent}@example.com` });
  };

  const handleScheduleLead = (lead) => {
    setNotification({ type: 'info', message: `Scheduling appointment with ${lead.name}` });
  };

  const handleAddNote = (lead) => {
    setNotification({ type: 'info', message: `Adding note for ${lead.name}` });
  };

  const handleDownloadLeads = () => {
    setNotification({ type: 'success', message: 'Downloading leads data...' });
  };

  const handleFilterLeads = () => {
    setNotification({ type: 'info', message: 'Filtering leads...' });
  };

  return (
    <div className="min-h-screen bg-[#E2E2E2] text-[#262626] font-quicksand">
      <Navbar />
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl bg-[#439CB0] text-white flex items-center space-x-2 transition-opacity duration-300`}>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="text-white hover:text-[#153E42]">
            <X size={16} />
          </button>
        </div>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Create Lead */}
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
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowLeadForm(true)}
              className="bg-[#439CB0] hover:bg-[#153E42] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Create New Lead
            </button>
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
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Lead Overview</h2>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={handleFilterLeads}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                    >
                      <Filter className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleDownloadLeads}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                  {[
                    { key: 'new', label: `New (${stats.newLeads})`, color: 'blue' },
                    { key: 'inProgress', label: `In Progress (${stats.inProgress})`, color: 'yellow' },
                    { key: 'followUp', label: `Follow-up (${stats.followUp})`, color: 'orange' },
                    { key: 'closed', label: `Closed (${stats.closed})`, color: 'green' }
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        activeTab === tab.key
                          ? 'bg-white shadow-sm text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Leads List */}
              <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <div 
                      key={lead.id} 
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-all ${
                        selectedLead?.id === lead.id ? 'bg-emerald-50 border-l-4 border-emerald-500' : ''
                      }`}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{lead.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{lead.address}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                            <Phone className="w-4 h-4" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <StatusBadge status={lead.status} />
                          <PriorityBadge priority={lead.priority} />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{lead.agentToAssign}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{lead.lastContact}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditLead(lead);
                            }}
                            className="p-1 text-emerald-500 hover:bg-emerald-50 rounded"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteLead(lead.id);
                            }}
                            className="p-1 text-red-500 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          {lead.status === 'new' && lead.agentToAssign && (
                            <button
                              onClick={e => {
                                e.stopPropagation();
                                setLeads(leads.map(l => l.id === lead.id ? { ...l, status: 'assigned', assignedTo: l.agentToAssign } : l));
                                setNotification({ type: 'success', message: `Lead assigned to ${lead.agentToAssign}` });
                              }}
                              className="p-1 text-emerald-500 hover:bg-emerald-50 rounded"
                            >
                              <Users className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No leads found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Lead Details */}
          <div className="lg:col-span-1">
            <div className="rounded-lg shadow bg-white">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Lead Details</h2>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                {selectedLead ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selectedLead.name}</h3>
                      <div className="space-y-2 text-gray-600">
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
                          <span>Agent: {selectedLead.agent}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-gray-50">
                        <div className="text-sm text-gray-500 mb-1">Type</div>
                        <div className="font-medium">{selectedLead.type}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-gray-50">
                        <div className="text-sm text-gray-500 mb-1">Priority</div>
                        <PriorityBadge priority={selectedLead.priority} />
                      </div>
                    </div>

                    {selectedLead.budget && (
                      <div className="p-3 rounded-lg bg-gray-50">
                        <div className="text-sm text-gray-500 mb-1">Budget</div>
                        <div className="font-medium text-green-500">{selectedLead.budget}</div>
                      </div>
                    )}

                    {selectedLead.demand && (
                      <div className="p-3 rounded-lg bg-gray-50">
                        <div className="text-sm text-gray-500 mb-1">Demand</div>
                        <div className="font-medium text-green-500">{selectedLead.demand}</div>
                      </div>
                    )}

                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="text-sm text-gray-500 mb-2">Notes</div>
                      <div className="text-gray-800">{selectedLead.notes}</div>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="text-sm text-gray-500 mb-2">Call Recording</div>
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 text-emerald-500 hover:text-emerald-600">
                          <PlayCircle className="w-5 h-5" />
                          <span className="text-sm">{selectedLead.recording}</span>
                        </button>
                        <div className="text-xs text-gray-400">0:25</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => handleAddNote(selectedLead)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center space-x-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Add Note</span>
                      </button>
                      <button 
                        onClick={() => handleCallLead(selectedLead)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </button>
                      <button 
                        onClick={() => handleEmailLead(selectedLead)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </button>
                      <button 
                        onClick={() => handleScheduleLead(selectedLead)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Schedule</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                      <Users className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Select a Lead</h3>
                    <p className="text-gray-500">Choose a lead from the list to view details</p>
                  </div>
                )}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="mt-6 rounded-lg shadow bg-white">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold">Recent Activity</h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.status === 'completed' ? 'bg-green-500/20' :
                        activity.status === 'overdue' ? 'bg-red-500/20' :
                        activity.status === 'active' ? 'bg-blue-500/20' :
                        'bg-gray-500/20'
                      }`}>
                        {activity.type === 'call' && <Phone className="w-4 h-4 text-green-500" />}
                        {activity.type === 'note' && <MessageSquare className="w-4 h-4 text-blue-500" />}
                        {activity.type === 'follow-up' && <AlertCircle className="w-4 h-4 text-orange-500" />}
                        {activity.type === 'lead' && <Target className="w-4 h-4 text-purple-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{activity.lead}</p>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.agent}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create New Lead</h2>
              <button 
                onClick={() => {
                  setShowLeadForm(false);
                  setFormErrors({});
                  setFormData({
                    name: '',
                    phone: '',
                    address: '',
                    type: 'buyer',
                    budget: '',
                    desiredLocation: '',
                    propertyType: '',
                    demand: '',
                    askingPrice: '',
                    motivation: '',
                    appointmentTime: '',
                    notes: '',
                    recording: null,
                    priority: 'medium',
                    source: 'Website',
                    area: '',
                    agent: ''
                  });
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Address*</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Type*</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Priority*</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Source*</label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  >
                    <option value="Website">Website</option>
                    <option value="Referral">Referral</option>
                    <option value="Cold Call">Cold Call</option>
                    <option value="Open House">Open House</option>
                    <option value="Social Media">Social Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Select Area*</label>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={e => {
                      setFormData(prev => ({ ...prev, area: e.target.value }));
                    }}
                    className="w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select Area</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Miami">Miami</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Select Agent*</label>
                  <select
                    name="agent"
                    value={formData.agent}
                    onChange={e => {
                      setFormData(prev => ({ ...prev, agent: e.target.value }));
                    }}
                    className="w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    required
                    disabled={!formData.area}
                  >
                    <option value="">{formData.area ? 'Select Agent' : 'Select Area First'}</option>
                    {agentsList.filter(a => a.area === formData.area).map(agent => (
                      <option key={agent.id} value={agent.name}>{agent.name}</option>
                    ))}
                  </select>
                </div>
                
                {formData.type === 'buyer' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Budget*</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                      />
                      {formErrors.budget && <p className="text-red-500 text-xs mt-1">{formErrors.budget}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Desired Location*</label>
                      <input
                        type="text"
                        name="desiredLocation"
                        value={formData.desiredLocation}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                      />
                      {formErrors.desiredLocation && <p className="text-red-500 text-xs mt-1">{formErrors.desiredLocation}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Property Type*</label>
                      <input
                        type="text"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                      />
                      {formErrors.propertyType && <p className="text-red-500 text-xs mt-1">{formErrors.propertyType}</p>}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Demand*</label>
                      <input
                        type="text"
                        name="demand"
                        value={formData.demand}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                      />
                      {formErrors.demand && <p className="text-red-500 text-xs mt-1">{formErrors.demand}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Asking Price*</label>
                      <input
                        type="text"
                        name="askingPrice"
                        value={formData.askingPrice}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                      />
                      {formErrors.askingPrice && <p className="text-red-500 text-xs mt-1">{formErrors.askingPrice}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Motivation*</label>
                      <input
                        type="text"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                      />
                      {formErrors.motivation && <p className="text-red-500 text-xs mt-1">{formErrors.motivation}</p>}
                    </div>
                  </>
                )}
                
                <div>
                  <label className="block text-sm font-medium mb-1">Appointment Time</label>
                  <input
                    type="datetime-local"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Call Recording</label>
                  <input
                    type="file"
                    name="recording"
                    onChange={handleFileChange}
                    accept="audio/mp3"
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-3 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowLeadForm(false);
                    setFormErrors({});
                    setFormData({
                      name: '',
                      phone: '',
                      address: '',
                      type: 'buyer',
                      budget: '',
                      desiredLocation: '',
                      propertyType: '',
                      demand: '',
                      askingPrice: '',
                      motivation: '',
                      appointmentTime: '',
                      notes: '',
                      recording: null,
                      priority: 'medium',
                      source: 'Website',
                      area: '',
                      agent: ''
                    });
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                >
                  Create Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadPoolDash;