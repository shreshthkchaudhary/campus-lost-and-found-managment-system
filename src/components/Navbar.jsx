import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Search, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onLoginClick }) {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setMobileOpen(false);
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/browse', label: 'Browse Items' },
    { to: '/report-lost', label: 'Report Lost' },
    { to: '/report-found', label: 'Report Found' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg border-b border-krmu-border' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img 
              src="/images/krmu-seal.webp" 
              alt="KRMU Seal" 
              className="w-10 h-10 rounded-full shadow-md object-contain bg-white"
            />
            <div className="leading-tight">
              <p className="text-[10px] font-semibold text-krmu-text-light tracking-widest uppercase">
                K.R. Mangalam University
              </p>
              <p className="text-base font-bold text-krmu-navy tracking-tight">
                Lost & Found Portal
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'bg-krmu-red text-white shadow-md'
                    : 'text-krmu-navy hover:bg-krmu-light hover:text-krmu-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Login / User Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2">
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-2 bg-krmu-light text-krmu-navy hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200"
                  >
                    <Settings size={16} />
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 border border-krmu-border hover:bg-red-50 text-krmu-red px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center gap-2 bg-krmu-red hover:bg-krmu-hover text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <User size={16} />
                Login
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-krmu-navy hover:bg-krmu-light transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-krmu-border shadow-xl animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.to)
                    ? 'bg-krmu-red text-white'
                    : 'text-krmu-navy hover:bg-krmu-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-krmu-light text-krmu-navy px-4 py-3 rounded-lg text-sm font-semibold mt-1"
                  >
                    <Settings size={16} />
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 border border-red-200 text-krmu-red bg-red-50 px-4 py-3 rounded-lg text-sm font-semibold mt-1"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onLoginClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-krmu-red text-white px-4 py-3 rounded-lg text-sm font-semibold mt-3 cursor-pointer"
              >
                <User size={16} />
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
