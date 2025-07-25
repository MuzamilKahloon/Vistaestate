import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeSocial, setActiveSocial] = useState(null);
  const navigate = useNavigate();

  // Only two roles for registration
  const roles = [
    { value: 'broker', label: 'Broker' },
    { value: 'agent', label: 'Agent' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.role) {
        newErrors.role = 'Please select a role';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard');
    } catch {
      setErrors({ form: 'Authentication failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const socialMedia = [
    { name: 'facebook', color: 'text-blue-600', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
    ) },
    { name: 'google', color: 'text-red-600', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814c-1.786-1.667-4.146-2.666-6.735-2.666-5.523 0-10 4.477-10 10s4.477 10 10 10c8.396 0 10-7.524 10-10 0-.167-.007-.334-.02-.5h-9.98z" /></svg>
    ) },
    { name: 'linkedin', color: 'text-blue-700', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    ) }
  ];

  // Animate form entrance
  const formRef = useRef(null);
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(formRef.current, { opacity: 0, y: 60, scale: 0.97, filter: 'blur(8px)' }, {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power4.out', delay: 0.2
      });
    }
  }, []);

  const handleSocialBtnHover = (ref) => {
    if (ref) {
      gsap.to(ref, {
        scale: 1.08,
        boxShadow: '0 0 24px 4px #439CB0, 0 4px 16px 0 rgba(67,156,176,0.18)',
        filter: 'brightness(1.08) saturate(1.2)',
        duration: 0.32,
        ease: 'power2.out',
      });
    }
  };
  const handleSocialBtnLeave = (ref) => {
    if (ref) {
      gsap.to(ref, {
        scale: 1,
        boxShadow: '',
        filter: 'brightness(1) saturate(1)',
        duration: 0.32,
        ease: 'power2.in',
      });
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-[#E2E2E2] p-0"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-[#153E42]/70 backdrop-blur-sm"></div>
      {/* Glassmorphism Form Container */}
      <div
        ref={formRef}
        className="relative mt-40 z-10 w-full max-w-md mx-auto my-12 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center"
        style={{ boxShadow: '0 8px 32px 0 rgba(67,156,176,0.18), 0 1.5px 8px 0 rgba(21,62,66,0.10)' }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-dosis font-bold text-[#262626]">VistaEstate</span>
          </Link>
        </div>
        {/* Toggle */}
        <div className="flex mb-8 border-b border-[#262626]/20 w-full">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 font-medium ${isLogin ? 'text-[#262626] border-b-2 border-[#439CB0]' : 'text-[#262626]/60 hover:text-[#262626]'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 font-medium ${!isLogin ? 'text-[#262626] border-b-2 border-[#439CB0]' : 'text-[#262626]/60 hover:text-[#262626]'}`}
          >
            Register
          </button>
        </div>
        {/* Form Error */}
        {errors.form && (
          <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-100 animate-fadein w-full">
            <div className="flex items-center text-red-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">{errors.form}</span>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          {!isLogin && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#262626] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-[#262626]/30'} focus:outline-none focus:ring-1 focus:ring-[#439CB0] focus:border-transparent transition duration-200`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-[#262626] mb-1">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.role ? 'border-red-500' : 'border-[#262626]/30'} focus:outline-none focus:ring-1 focus:ring-[#439CB0] focus:border-transparent transition duration-200 appearance-none bg-white`}
                >
                  <option value="">Select your role</option>
                  {roles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
                {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
              </div>
            </>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#262626] mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-[#262626]/30'} focus:outline-none focus:ring-1 focus:ring-[#439CB0] focus:border-transparent transition duration-200`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#262626] mb-1">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-[#262626]/30'} focus:outline-none focus:ring-1 focus:ring-[#439CB0] focus:border-transparent transition duration-200`}
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#262626] mb-1">
                Confirm Password *
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-[#262626]/30'} focus:outline-none focus:ring-1 focus:ring-[#439CB0] focus:border-transparent transition duration-200`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-[#439CB0] focus:ring-[#439CB0] border-[#262626]/30 rounded transition duration-200"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-[#262626]">
                Remember me
              </label>
            </div>
            {isLogin && (
              <Link 
                to="/forgot-password" 
                className="text-sm text-[#262626]/60 hover:text-[#439CB0] hover:underline transition duration-200"
              >
                Forgot password?
              </Link>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 bg-[#439CB0] hover:bg-[#153E42] text-white font-medium rounded-lg transition duration-300 flex items-center justify-center ${isLoading ? 'opacity-80 cursor-not-allowed' : 'shadow-md hover:shadow-lg'}`}
            onMouseEnter={e => handleSocialBtnHover(e.currentTarget)}
            onMouseLeave={e => handleSocialBtnLeave(e.currentTarget)}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {isLogin ? 'Signing in...' : 'Registering...'}
              </>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>
        <div className="mt-8 pt-6 border-t border-[#262626]/20 w-full">
          <p className="text-sm text-[#262626]/60 text-center mb-4">
            Or continue with
          </p>
          <div className="flex justify-center space-x-3">
            {socialMedia.map((social) => (
              <button
                key={social.name}
                className={`p-3 rounded-lg transition-all duration-300 border border-[#262626]/20 hover:border-transparent ${activeSocial === social.name ? `${social.color} bg-[#262626]/10` : 'bg-white text-[#262626] hover:bg-[#262626]/5'}`}
                onMouseEnter={e => { setActiveSocial(social.name); handleSocialBtnHover(e.currentTarget); }}
                onMouseLeave={e => { setActiveSocial(null); handleSocialBtnLeave(e.currentTarget); }}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-[#262626]/60 w-full">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button 
                onClick={() => setIsLogin(false)}
                className="text-[#439CB0] hover:text-[#153E42] hover:underline font-medium transition duration-200"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button 
                onClick={() => setIsLogin(true)}
                className="text-[#439CB0] hover:text-[#153E42] hover:underline font-medium transition duration-200"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;