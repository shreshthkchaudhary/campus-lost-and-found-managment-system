import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, PlusCircle } from 'lucide-react';
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    { to: '/browse', label: 'Explore Directory' },
    { to: '/report-lost', label: 'Report Lost' },
    { to: '/report-found', label: 'Report Found' },
    { to: '/about', label: 'About Project' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <div className="relative">
              <img 
                src="/images/krmu-seal.webp" 
                alt="KRMU Seal" 
                className="w-10 h-10 rounded-full object-contain bg-white shadow-sm ring-1 ring-slate-200 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                  KRMU
                </span>
                <span className="text-xs font-medium text-slate-500">Official Portal</span>
              </div>
              <p className="text-base font-bold text-slate-900 tracking-tight leading-tight">
                Lost & Found <span className="font-normal text-slate-500">Network</span>
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                  isActive(link.to)
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/report-lost"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors shadow-sm"
            >
              <PlusCircle size={14} className="text-rose-400" />
              Report Item
            </Link>

            {user ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border border-rose-200/60"
                  >
                    <Settings size={14} />
                    Admin
                  </Link>
                )}
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <span className="text-xs font-medium text-slate-700 truncate max-w-[100px]">
                    {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    title="Log Out"
                    className="text-slate-400 hover:text-rose-600 transition-colors p-0.5"
                  >
                    <LogOut size={13} />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg transition-all shadow-sm cursor-pointer"
              >
                <User size={14} className="text-slate-500" />
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200/60"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-fade-in">
          <div className="px-4 py-4 space-y-1.5 max-w-lg mx-auto">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive(link.to)
                    ? 'bg-rose-50 text-rose-700 border border-rose-200/60'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/report-lost"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-rose-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm"
              >
                <PlusCircle size={16} />
                Report Lost or Found Item
              </Link>

              {user ? (
                <>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      onClick={() => setMobileOpen(false)}
                      className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-lg text-sm font-semibold"
                    >
                      <Settings size={16} />
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 border border-slate-200 text-rose-600 bg-rose-50/50 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <LogOut size={16} />
                    Sign Out ({user.name})
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onLoginClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 border border-slate-300 text-slate-800 px-4 py-2.5 rounded-lg text-sm font-semibold"
                >
                  <User size={16} />
                  Sign In to Your Account
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
