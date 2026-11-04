import { useState } from 'react';
import { X, Mail, Lock, LogIn, Eye, EyeOff, ShieldCheck, Sparkles } from 'lucide-react';
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
      if (email.toLowerCase().includes('admin')) {
        navigate('/admin');
      }
    } else {
      setError(result.error || 'Failed to login');
    }
  };

  const handleFillDemo = (type) => {
    if (type === 'admin') {
      setEmail('admin@krmangalam.edu.in');
      setPassword('password123');
    } else {
      setEmail('student@krmangalam.edu.in');
      setPassword('student123');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up border border-slate-100">
        {/* Header */}
        <div className="bg-slate-950 p-6 text-white text-center relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-slate-800"
          >
            <X size={18} />
          </button>
          
          <div className="w-12 h-12 rounded-2xl bg-rose-600 mx-auto flex items-center justify-center mb-3 shadow-lg shadow-rose-600/30">
            <LogIn size={20} className="text-white" />
          </div>
          
          <h2 className="text-lg font-bold tracking-tight text-white">
            Portal Authentication
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            K.R. Mangalam University · Campus Lost & Found
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {/* Quick Demo Credentials Pill */}
          <div className="mb-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
              <Sparkles size={14} className="text-amber-500" />
              <span>Quick Evaluation Access</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-2">
              Click below to autofill demo credentials:
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleFillDemo('admin')}
                className="flex-1 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold py-1.5 px-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Admin Role
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('student')}
                className="flex-1 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold py-1.5 px-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Student Role
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 bg-rose-50 text-rose-700 border border-rose-200 text-xs p-3 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                University Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your.email@krmangalam.edu.in"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter account password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer disabled:opacity-70 mt-2"
            >
              {loading ? 'Authenticating...' : 'Sign In to Portal'}
            </button>
          </form>

          <p className="text-[11px] text-slate-400 text-center mt-5 flex items-center justify-center gap-1">
            <ShieldCheck size={13} className="text-emerald-500" />
            <span>Encrypted Institutional Authentication</span>
          </p>
        </div>
      </div>
    </div>
  );
}
