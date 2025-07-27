import React, { useState } from 'react';
import { X, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

/**
 * CreateProfile component
 * Props:
 * - type: 'agent' | 'worker' (determines fields/labels)
 * - onProfileCreated: function(profile) => void (called when profile is created)
 * - initialProfile: object (optional, for editing/viewing)
 * - trigger: ReactNode (button or element to open modal)
 */
const defaultAgentProfile = {
  name: '',
  role: '',
  phone: '',
  email: '',
  bio: '',
  image: '',
  imageFile: null,
  properties: '',
  experience: '',
  rating: '',
  social: { facebook: '', twitter: '', instagram: '', linkedin: '' },
};
const defaultWorkerProfile = {
  name: '',
  role: '',
  phone: '',
  email: '',
  bio: '',
  image: '',
  imageFile: null,
  experience: '',
  rating: '',
  services: '',
  social: { facebook: '', twitter: '', instagram: '', linkedin: '' },
};

function CreateProfile({
  type = 'agent',
  onProfileCreated,
  initialProfile = null
}) {
  const [showCreateProfileModal, setShowCreateProfileModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [notification, setNotification] = useState(null);
  const [createProfile, setCreateProfile] = useState(
    type === 'agent' ? { ...defaultAgentProfile } : { ...defaultWorkerProfile }
  );

  // Handle form changes
  const handleCreateProfileChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setCreateProfile(prev => ({ ...prev, image: reader.result, imageFile: file }));
        };
        reader.readAsDataURL(file);
      }
    } else if (name in createProfile.social) {
      setCreateProfile(prev => ({ ...prev, social: { ...prev.social, [name]: value } }));
    } else {
      setCreateProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle submit
  const handleCreateProfileSubmit = e => {
    e.preventDefault();
    let newProfile;
    if (type === 'agent') {
      newProfile = {
        ...createProfile,
        properties: Number(createProfile.properties),
        rating: Number(createProfile.rating),
      };
    } else {
      newProfile = {
        ...createProfile,
        rating: Number(createProfile.rating),
        services: createProfile.services
          ? createProfile.services.split(',').map(s => s.trim())
          : [],
      };
    }
    setProfile(newProfile);
    setShowCreateProfileModal(false);
    setNotification({ type: 'success', message: 'Profile created!' });
    if (onProfileCreated) onProfileCreated(newProfile);
  };

  // Notification auto-dismiss
  React.useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Field configs
  const isAgent = type === 'agent';
  const title = isAgent ? 'Create Your Agent Profile' : 'Create Your Worker Profile';
  const subtitle = isAgent ? 'Showcase your expertise and achievements' : 'Show your skills and services';

  // Profile Card fields
  const stats = isAgent
    ? [
        { label: 'Properties', value: profile?.properties },
        { label: 'Experience', value: profile?.experience },
        { label: 'Rating', value: profile?.rating },
      ]
    : [
        { label: 'Experience', value: profile?.experience },
        { label: 'Rating', value: profile?.rating },
        { label: 'Services', value: profile?.services?.length },
      ];

  return (
    <>
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 p-4 rounded-2xl shadow-2xl bg-[#439CB0] text-white flex items-center space-x-2 transition-opacity duration-300">
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="text-white hover:text-[#153E42]">
            <X size={18} />
          </button>
        </div>
      )}
      {/* Create Profile Button (centered, only if no profile) */}
      {!profile && (
        <div className="flex justify-center items-start min-h-[60vh] bg-gradient-to-br from-[#e2e2e2] via-[#f8fafc] to-[#dbeafe] pt-32"> {/* pt-32 for navbar margin */}
          <div className="backdrop-blur-xl bg-white/70 border border-[#439CB0]/20 shadow-2xl rounded-3xl px-12 py-14 flex flex-col items-center gap-6 max-w-lg w-full relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#439CB0] to-[#153E42] p-1 rounded-full shadow-xl">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
                {type === 'agent' || type === 'worker' ? (
                  <svg width="60" height="60" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#439CB0"/><path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4v-1z" fill="#439CB0" opacity=".2"/></svg>
                ) : null}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#153E42] mt-16 mb-2 text-center drop-shadow">{title}</h2>
            <p className="text-[#439CB0] text-center mb-4 font-medium">{subtitle}</p>
            <button
              className="bg-gradient-to-r from-[#439CB0] to-[#153E42] hover:from-[#153E42] hover:to-[#439CB0] text-white font-bold px-8 py-3 rounded-xl shadow-lg text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#439CB0]"
              onClick={() => setShowCreateProfileModal(true)}
            >
              Create Profile
            </button>
          </div>
        </div>
      )}
      {/* Business Profile Card (centered, only if profile exists) */}
      {profile && (
        <div className="flex justify-center items-start min-h-[60vh] bg-gradient-to-br from-[#e2e2e2] via-[#f8fafc] to-[#dbeafe] pt-32"> {/* pt-32 for navbar margin */}
          <div
            className="relative bg-white/80 backdrop-blur-2xl border border-[#439CB0]/30 shadow-2xl rounded-3xl px-12 py-10 flex flex-col md:flex-row items-center gap-10 w-full max-w-3xl cursor-pointer hover:scale-[1.02] transition-transform group"
            onClick={() => setShowProfileModal(true)}
            title="View Profile"
          >
            <div className="relative w-40 h-40 rounded-full overflow-visible flex items-center justify-center -mt-24 group-hover:scale-105 transition-transform z-10">
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-[#439CB0]/40 bg-white shadow-2xl flex items-center justify-center">
                {profile.image ? (
                  <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <svg width="100" height="100" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" fill="#439CB0"/><path d="M2 22c0-3.31 4.48-6 10-6s10 2.69 10 6v1H2v-1z" fill="#439CB0" opacity=".2"/></svg>
                )}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-3 items-center md:items-start mt-4 md:mt-0">
              <h2 className="text-3xl font-extrabold text-[#153E42] drop-shadow mb-1">{profile.name}</h2>
              <p className="text-lg text-[#439CB0] font-semibold mb-2">{profile.role}</p>
              <div className="w-full bg-[#439CB0]/10 rounded-xl p-4 mb-2 max-w-xl">
                <h3 className="text-base font-semibold text-[#153E42] mb-1">About</h3>
                <p className="text-[#262626] text-base break-words whitespace-pre-line max-h-32 overflow-y-auto" style={{wordBreak: 'break-word'}}>{profile.bio}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-[#262626] text-base justify-center md:justify-start">
                <span className="flex items-center gap-2"><Phone className="inline w-5 h-5" /> {profile.phone}</span>
                <span className="flex items-center gap-2"><Mail className="inline w-5 h-5" /> {profile.email}</span>
              </div>
              <div className="flex gap-8 mt-4 justify-center md:justify-start">
                {stats.map((stat, idx) => (
                  <div className="text-center" key={idx}>
                    <div className="text-xl font-bold text-[#439CB0]">{stat.value}</div>
                    <div className="text-xs text-[#153E42]">{stat.label}</div>
                  </div>
                ))}
              </div>
              {(!isAgent && profile.services) && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {profile.services.map((service, idx) => (
                    <span key={idx} className="bg-[#439CB0]/30 text-[#153E42] text-xs px-3 py-1 rounded-full">{service}</span>
                  ))}
                </div>
              )}
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                {profile.social.facebook && (
                  <a href={profile.social.facebook} className="text-[#439CB0] hover:text-[#153E42] text-2xl" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                )}
                {profile.social.twitter && (
                  <a href={profile.social.twitter} className="text-[#439CB0] hover:text-[#153E42] text-2xl" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
                )}
                {profile.social.instagram && (
                  <a href={profile.social.instagram} className="text-[#439CB0] hover:text-[#153E42] text-2xl" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                )}
                {profile.social.linkedin && (
                  <a href={profile.social.linkedin} className="text-[#439CB0] hover:text-[#153E42] text-2xl" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Create Profile Modal */}
      {showCreateProfileModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-gradient-to-br from-[#439CB0]/60 via-[#E2E2E2]/60 to-[#153E42]/60 backdrop-blur-sm pt-32"> {/* pt-32 for top margin */}
          <div className="bg-white/90 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto border-4 border-[#439CB0]/30 relative p-10 animate-fadeIn">
            <button
              onClick={() => setShowCreateProfileModal(false)}
              className="absolute top-6 right-6 text-[#439CB0] hover:text-[#153E42] bg-white rounded-full p-2 shadow-lg border z-20"
              aria-label="Close modal"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-visible flex items-center justify-center -mt-20 z-10">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#439CB0]/40 shadow-lg flex items-center justify-center bg-[#E2E2E2]">
                  {createProfile.image ? (
                    <img src={createProfile.image} alt="Profile Preview" className="w-full h-full object-cover" />
                  ) : (
                    <svg width="80" height="80" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" fill="#439CB0"/><path d="M2 22c0-3.31 4.48-6 10-6s10 2.69 10 6v1H2v-1z" fill="#439CB0" opacity=".2"/></svg>
                  )}
                </div>
              </div>
              <label htmlFor="profile-image-upload" className="cursor-pointer text-[#439CB0] hover:text-[#153E42] text-sm mb-4">Upload Profile Image</label>
              <input
                id="profile-image-upload"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleCreateProfileChange}
                className="hidden"
              />
            </div>
            <form onSubmit={handleCreateProfileSubmit} className="space-y-6 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="text" name="name" value={createProfile.name} onChange={handleCreateProfileChange} required className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                  <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Full Name *</label>
                </div>
                <div className="relative">
                  <input type="text" name="role" value={createProfile.role} onChange={handleCreateProfileChange} required className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                  <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Role/Position *</label>
                </div>
                <div className="relative">
                  <input type="tel" name="phone" value={createProfile.phone} onChange={handleCreateProfileChange} required className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                  <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Phone Number *</label>
                </div>
                <div className="relative">
                  <input type="email" name="email" value={createProfile.email} onChange={handleCreateProfileChange} required className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                  <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Email Address *</label>
                </div>
              </div>
              <div className="relative">
                <textarea name="bio" value={createProfile.bio} onChange={handleCreateProfileChange} rows={3} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent resize-none" placeholder=" " autoComplete="off" />
                <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">About</label>
              </div>
              {isAgent ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative">
                    <input type="number" name="properties" value={createProfile.properties} onChange={handleCreateProfileChange} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                    <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Properties Sold</label>
                  </div>
                  <div className="relative">
                    <input type="text" name="experience" value={createProfile.experience} onChange={handleCreateProfileChange} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                    <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Experience</label>
                  </div>
                  <div className="relative">
                    <input type="number" name="rating" value={createProfile.rating} onChange={handleCreateProfileChange} min="1" max="5" step="0.1" className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                    <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Rating (1-5)</label>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input type="text" name="experience" value={createProfile.experience} onChange={handleCreateProfileChange} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                      <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Experience</label>
                    </div>
                    <div className="relative">
                      <input type="number" name="rating" value={createProfile.rating} onChange={handleCreateProfileChange} min="1" max="5" step="0.1" className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                      <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Rating (1-5)</label>
                    </div>
                  </div>
                  <div className="relative">
                    <input type="text" name="services" value={createProfile.services} onChange={handleCreateProfileChange} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                    <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Services (comma separated)</label>
                  </div>
                </>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="url" name="facebook" value={createProfile.social.facebook} onChange={handleCreateProfileChange} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                  <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Facebook Profile</label>
                </div>
                <div className="relative">
                  <input type="url" name="twitter" value={createProfile.social.twitter} onChange={handleCreateProfileChange} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                  <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Twitter Profile</label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="url" name="instagram" value={createProfile.social.instagram} onChange={handleCreateProfileChange} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                  <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">Instagram Profile</label>
                </div>
                <div className="relative">
                  <input type="url" name="linkedin" value={createProfile.social.linkedin} onChange={handleCreateProfileChange} className="peer w-full px-4 py-3 border border-[#439CB0]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#439CB0] focus:border-[#439CB0] placeholder-transparent" placeholder=" " autoComplete="off" />
                  <label className="absolute left-4 top-1.5 text-[#439CB0] text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#439CB0]/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#439CB0] bg-white px-1 pointer-events-none">LinkedIn Profile</label>
                </div>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-[#439CB0] to-[#153E42] hover:from-[#153E42] hover:to-[#439CB0] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-lg">Create Profile</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Profile Modal (View Only, visually attractive) */}
      {showProfileModal && profile && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-gradient-to-br from-[#439CB0]/60 via-[#E2E2E2]/60 to-[#153E42]/60 p-0 overflow-y-auto max-h-screen pt-32"> {/* pt-32 for top margin */}
          <div className="relative w-full max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white/90 backdrop-blur-2xl border-4 border-[#439CB0]/40 flex flex-col items-center animate-fadeIn mt-0 mb-8">
            <button
              onClick={() => setShowProfileModal(false)}
              className="absolute top-6 right-6 text-[#439CB0] hover:text-[#153E42] bg-white rounded-full p-2 shadow-lg border z-20"
              aria-label="Close profile modal"
            >
              <X className="w-7 h-7" />
            </button>
            {/* Hero Section */}
            <div className="w-full flex flex-col items-center justify-center pb-12 bg-gradient-to-br from-[#439CB0]/10 to-[#E2E2E2]/40 relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-40 h-40 rounded-full overflow-visible flex items-center justify-center z-10">
                <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-[#439CB0]/40 bg-white shadow-2xl flex items-center justify-center">
                  {profile.image ? (
                    <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                  ) : (
                    <svg width="100" height="100" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" fill="#439CB0"/><path d="M2 22c0-3.31 4.48-6 10-6s10 2.69 10 6v1H2v-1z" fill="#439CB0" opacity=".2"/></svg>
                  )}
                </div>
              </div>
              <div className="pt-24" />
              <h2 className="text-3xl font-extrabold text-[#153E42] mt-2 mb-1 text-center drop-shadow">{profile.name}</h2>
              <p className="text-lg text-[#439CB0] font-semibold mb-2 text-center">{profile.role}</p>
            </div>
            {/* About Section */}
            <div className="w-full px-8 py-6 flex flex-col items-center bg-white/90 max-h-40 overflow-y-auto rounded-xl" style={{maxHeight: '10rem'}}>
              <h3 className="text-base font-semibold text-[#153E42] mb-1">About</h3>
              <p className="text-[#262626] text-base text-center max-w-xl break-words whitespace-pre-line" style={{wordBreak: 'break-word'}}>{profile.bio}</p>
            </div>
            {/* Stats Section */}
            <div className="w-full flex justify-center gap-12 py-6 bg-gradient-to-r from-[#439CB0]/10 to-[#153E42]/10">
              {stats.map((stat, idx) => (
                <div className="text-center" key={idx}>
                  <div className="text-2xl font-bold text-[#439CB0]">{stat.value}</div>
                  <div className="text-xs text-[#153E42]">{stat.label}</div>
                </div>
              ))}
            </div>
            {/* Contact Section */}
            <div className="w-full px-8 py-6 flex flex-col items-center bg-white/90">
              <h3 className="text-base font-semibold text-[#153E42] mb-1">Contact</h3>
              <div className="flex flex-wrap gap-6 text-[#262626] text-base justify-center">
                <span className="flex items-center gap-2"><Phone className="inline w-5 h-5 mr-1" /> {profile.phone}</span>
                <span className="flex items-center gap-2"><Mail className="inline w-5 h-5 mr-1" /> {profile.email}</span>
              </div>
            </div>
            {/* Social Section */}
            {(profile.social.facebook || profile.social.twitter || profile.social.instagram || profile.social.linkedin) && (
              <div className="w-full px-8 py-10 flex flex-col items-center bg-gradient-to-br from-[#439CB0]/10 to-[#E2E2E2]/40">
                <h3 className="text-base font-semibold text-[#153E42] mb-4">Social</h3>
                <div className="flex gap-8 justify-center items-center">
                  {profile.social.facebook && (
                    <a href={profile.social.facebook} className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer">
                      <span className="rounded-full bg-white shadow-lg p-4 text-[#439CB0] transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#439CB0] group-hover:text-white group-hover:shadow-2xl">
                        <Facebook size={32} />
                      </span>
                      <span className="text-xs text-[#153E42] mt-2">Facebook</span>
                    </a>
                  )}
                  {profile.social.twitter && (
                    <a href={profile.social.twitter} className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer">
                      <span className="rounded-full bg-white shadow-lg p-4 text-[#439CB0] transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#439CB0] group-hover:text-white group-hover:shadow-2xl">
                        <Twitter size={32} />
                      </span>
                      <span className="text-xs text-[#153E42] mt-2">Twitter</span>
                    </a>
                  )}
                  {profile.social.instagram && (
                    <a href={profile.social.instagram} className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer">
                      <span className="rounded-full bg-white shadow-lg p-4 text-[#439CB0] transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#439CB0] group-hover:text-white group-hover:shadow-2xl">
                        <Instagram size={32} />
                      </span>
                      <span className="text-xs text-[#153E42] mt-2">Instagram</span>
                    </a>
                  )}
                  {profile.social.linkedin && (
                    <a href={profile.social.linkedin} className="flex flex-col items-center group" target="_blank" rel="noopener noreferrer">
                      <span className="rounded-full bg-white shadow-lg p-4 text-[#439CB0] transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#439CB0] group-hover:text-white group-hover:shadow-2xl">
                        <Linkedin size={32} />
                      </span>
                      <span className="text-xs text-[#153E42] mt-2">LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CreateProfile;
