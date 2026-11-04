import { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, MoreVertical, LayoutDashboard, Package, AlertTriangle } from 'lucide-react';
import { useItemsContext } from '../context/ItemsContext';

export default function AdminDashboard() {
  const { items } = useItemsContext();
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-krmu-light flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-krmu-navy text-white flex-shrink-0 min-h-[200px] md:min-h-screen">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-1">Admin Panel</h2>
          <p className="text-xs text-gray-400">KRMU Lost & Found</p>
        </div>
        <nav className="px-4 space-y-2">
          <button className="flex items-center gap-3 w-full px-4 py-3 bg-white/10 rounded-lg text-sm font-medium text-white transition-colors">
            <LayoutDashboard size={18} />
            Dashboard
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:bg-white/5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
            <Package size={18} />
            Manage Items
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:bg-white/5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
            <AlertTriangle size={18} />
            Review Claims
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-krmu-navy">Dashboard Overview</h1>
              <p className="text-sm text-krmu-text-light">Manage reported items and claims</p>
            </div>
            
            <div className="flex gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search items..." 
                  className="pl-9 pr-4 py-2.5 rounded-lg border border-krmu-border text-sm outline-none w-full md:w-64 focus:border-krmu-red focus:ring-1 focus:ring-krmu-red"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-krmu-border rounded-lg text-sm font-medium bg-white hover:bg-gray-50 cursor-pointer text-krmu-navy">
                <Filter size={16} /> Filter
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-krmu-border p-6 border-l-4 border-l-krmu-navy">
              <p className="text-sm text-krmu-text-light font-medium mb-1">Total Items</p>
              <h3 className="text-3xl font-bold text-krmu-navy">{items.length}</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-krmu-border p-6 border-l-4 border-l-krmu-red">
              <p className="text-sm text-krmu-text-light font-medium mb-1">Lost Reports</p>
              <h3 className="text-3xl font-bold text-krmu-navy">
                {items.filter(i => i.type === 'lost').length}
              </h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-krmu-border p-6 border-l-4 border-l-krmu-accent">
              <p className="text-sm text-krmu-text-light font-medium mb-1">Found Reports</p>
              <h3 className="text-3xl font-bold text-krmu-navy">
                {items.filter(i => i.type === 'found').length}
              </h3>
            </div>
          </div>

          {/* Items Table */}
          <div className="bg-white rounded-xl shadow-sm border border-krmu-border overflow-hidden">
            <div className="p-5 border-b border-krmu-border flex gap-4">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`text-sm font-medium pb-1 border-b-2 ${activeTab === 'all' ? 'border-krmu-red text-krmu-red' : 'border-transparent text-gray-500 hover:text-krmu-navy'}`}
              >
                All Items
              </button>
              <button 
                onClick={() => setActiveTab('pending')} 
                className={`text-sm font-medium pb-1 border-b-2 ${activeTab === 'pending' ? 'border-krmu-red text-krmu-red' : 'border-transparent text-gray-500 hover:text-krmu-navy'}`}
              >
                Pending Review
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b border-krmu-border">
                  <tr>
                    <th className="px-6 py-4 font-medium">Item Details</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Location</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-krmu-border">
                  {items.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-krmu-navy mb-1">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.category}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-semibold ${
                          item.type === 'lost' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.type.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.location}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 text-green-600 text-xs font-medium">
                          <CheckCircle size={14} /> Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-krmu-navy cursor-pointer p-1">
                          <MoreVertical size={18} />
                        </button>
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
