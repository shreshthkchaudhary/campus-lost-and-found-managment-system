import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  LayoutDashboard, 
  Package, 
  AlertTriangle, 
  ArrowLeft, 
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Calendar
} from 'lucide-react';
import { useItemsContext } from '../context/ItemsContext';
import { useAuth } from '../context/AuthContext';
import CategoryIcon from './CategoryIcon';

export default function AdminDashboard() {
  const { items } = useItemsContext();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('all');
  const [adminSearch, setAdminSearch] = useState('');

  const lostCount = items.filter(i => i.type === 'lost').length;
  const foundCount = items.filter(i => i.type === 'found').length;

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchSearch = !adminSearch || 
        item.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
        item.location.toLowerCase().includes(adminSearch.toLowerCase()) ||
        item.category.toLowerCase().includes(adminSearch.toLowerCase());
      const matchTab = activeTab === 'all' || 
        (activeTab === 'lost' && item.type === 'lost') ||
        (activeTab === 'found' && item.type === 'found');
      return matchSearch && matchTab;
    });
  }, [items, adminSearch, activeTab]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-950 text-white flex-shrink-0 flex flex-col justify-between border-r border-slate-800">
        <div>
          {/* Logo Header */}
          <div className="p-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/images/krmu-seal.webp" 
                alt="KRMU" 
                className="w-8 h-8 rounded-full bg-white p-0.5 object-contain"
              />
              <div>
                <p className="text-xs font-bold text-white tracking-tight">KRMU Security</p>
                <p className="text-[10px] text-slate-400 font-medium">Administration Console</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full mt-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Logged in: {user?.name || 'Administrator'}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1 text-xs font-semibold">
            <button 
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <LayoutDashboard size={16} />
              <span>All Registry Items</span>
            </button>
            <button 
              onClick={() => setActiveTab('lost')}
              className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'lost' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <AlertTriangle size={16} />
              <span>Lost Reports ({lostCount})</span>
            </button>
            <button 
              onClick={() => setActiveTab('found')}
              className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'found' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Package size={16} />
              <span>Found Items ({foundCount})</span>
            </button>
          </nav>
        </div>

        {/* Return to Public Portal */}
        <div className="p-4 border-t border-slate-800/80">
          <Link
            to="/"
            className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-colors"
          >
            <span className="flex items-center gap-2">
              <ArrowLeft size={14} />
              <span>Exit to Main Site</span>
            </span>
            <ExternalLink size={12} className="text-slate-500" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/50">
                Administrative Control
              </span>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
                Campus Registry Overview
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Monitor live lost and found submissions, contact students, and verify returns.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Filter table items..."
                value={adminSearch}
                onChange={e => setAdminSearch(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 shadow-xs"
              />
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <p className="text-xs font-semibold text-slate-500 mb-1">Total Registered</p>
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-slate-900">{items.length}</h3>
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  100% Verified
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <p className="text-xs font-semibold text-slate-500 mb-1">Active Lost Reports</p>
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-rose-600">{lostCount}</h3>
                <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                  Awaiting Match
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <p className="text-xs font-semibold text-slate-500 mb-1">Found & Deposited</p>
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-emerald-600">{foundCount}</h3>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Ready for Claim
                </span>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-200/80 flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Reported Items ({filteredItems.length})
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-medium">Sorted by: Recent</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-[10px] font-bold uppercase text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-3.5">Item & Category</th>
                    <th className="px-5 py-3.5">Status</th>
                    <th className="px-5 py-3.5">Campus Zone</th>
                    <th className="px-5 py-3.5">Incident Date</th>
                    <th className="px-5 py-3.5">Contact Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredItems.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                            <CategoryIcon category={item.category} size={15} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">{item.name}</p>
                            <p className="text-[11px] text-slate-400">{item.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          item.type === 'lost' 
                            ? 'bg-rose-50 text-rose-700 border border-rose-200/60' 
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-slate-600 font-medium">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} className="text-slate-400" />
                          {item.location}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-slate-600 font-mono">
                        {item.date}
                      </td>
                      <td className="px-5 py-3.5 text-slate-600 font-mono text-[11px]">
                        {item.contact || item.contactEmail || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
