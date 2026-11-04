import { useState } from 'react';
import { X, Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    const result = await login(email, password);
    setLoading(false);
    
    if (result.success) {
      onClose();
      if (email.includes('admin')) {
        navigate('/admin');
      }
    } else {
      setError(result.error || 'Failed to login');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-krmu-navy/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-krmu-navy to-[#0d2847] p-8 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
          <div className="w-14 h-14 rounded-full bg-krmu-red mx-auto flex items-center justify-center mb-4 shadow-lg">
            <LogIn size={24} className="text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">Welcome</h2>
          <p className="text-gray-300 text-sm mt-1">
            K.R. Mangalam University · Lost & Found Portal
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <p className="text-xs text-amber-800">
              <strong>Demo mode:</strong> Use any valid email (include 'admin' for Admin access) & password to explore the portal.
            </p>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 text-krmu-red border border-red-200 text-sm px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-krmu-navy mb-2">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your.name@krmangalam.edu.in"
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-2 focus:ring-krmu-red/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-krmu-navy mb-2">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-2 focus:ring-krmu-red/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-krmu-red hover:bg-krmu-hover text-white py-3 rounded-lg text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-xs text-krmu-text-light mt-5">
            A student-developed platform to streamline lost and found item management at K.R. Mangalam University, Gurugram. Built by Team Code Nemesis as a B.Tech Minor Project.
          </p>
        </div>
      </div>
    </div>
  );
}
