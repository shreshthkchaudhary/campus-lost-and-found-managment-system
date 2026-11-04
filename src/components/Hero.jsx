import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, AlertCircle, HandHeart, CheckCircle2, Shield, MapPin, ArrowRight } from 'lucide-react';
import { stats, itemCategories } from '../data/items';

const popularKeywords = ['ID Card', 'Keys', 'Laptop', 'Earphones', 'Umbrella', 'Water Bottle'];

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set('search', searchTerm.trim());
    if (selectedCat) params.set('category', selectedCat);
    navigate(`/browse?${params.toString()}`);
  };

  const handleQuickTagClick = (tag) => {
    navigate(`/browse?search=${encodeURIComponent(tag)}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 md:py-24">
      {/* Background Campus Texture with Sophisticated Dark Mesh */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity scale-105"
        style={{ backgroundImage: "url('/images/campus-hero.png')" }}
      ></div>

      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top University Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span>K.R. Mangalam University</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-normal">Official Campus Recovery Network</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Lost Something on Campus? <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
              We Help You Find It.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A verified, university-wide portal to report, track, and recover misplaced belongings across
            all classrooms, libraries, cafeterias, and hostels.
          </p>
        </div>

        {/* Integrated Command Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <form 
            onSubmit={handleSearchSubmit}
            className="bg-white p-2 sm:p-2.5 rounded-2xl shadow-2xl border border-white/20 flex flex-col sm:flex-row gap-2"
          >
            {/* Search Input */}
            <div className="relative flex-1 flex items-center">
              <Search size={18} className="absolute left-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search lost items (e.g. ID card, black umbrella, keys)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none"
              />
            </div>

            {/* Category Dropdown */}
            <div className="w-full sm:w-44 border-t sm:border-t-0 sm:border-l border-slate-200 pl-1 flex items-center">
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                className="w-full py-2.5 px-3 text-xs font-semibold text-slate-700 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="">All Categories</option>
                {itemCategories.map(cat => (
                  <option key={cat} value={cat} className="text-slate-900">{cat}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
            >
              <Search size={16} />
              <span>Search</span>
            </button>
          </form>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className="text-slate-400 font-medium">Frequently searched:</span>
            {popularKeywords.map(keyword => (
              <button
                key={keyword}
                onClick={() => handleQuickTagClick(keyword)}
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white px-2.5 py-1 rounded-full transition-all cursor-pointer text-xs"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <Link
            to="/report-lost"
            className="inline-flex items-center gap-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-rose-600/30 hover:-translate-y-0.5"
          >
            <AlertCircle size={18} />
            <span>I Lost an Item</span>
          </Link>
          <Link
            to="/report-found"
            className="inline-flex items-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md hover:-translate-y-0.5"
          >
            <HandHeart size={18} className="text-emerald-400" />
            <span>I Found Something</span>
          </Link>
        </div>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
            <p className="text-2xl lg:text-3xl font-extrabold text-white mb-0.5">{stats.itemsPosted}</p>
            <p className="text-xs text-slate-400 font-medium">Items Registered</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
            <p className="text-2xl lg:text-3xl font-extrabold text-emerald-400 mb-0.5">{stats.foundItems}</p>
            <p className="text-xs text-slate-400 font-medium">Found & Secured</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
            <p className="text-2xl lg:text-3xl font-extrabold text-amber-400 mb-0.5">{stats.recoveryRate}</p>
            <p className="text-xs text-slate-400 font-medium">Reunion Rate</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
            <p className="text-2xl lg:text-3xl font-extrabold text-blue-400 mb-0.5">17</p>
            <p className="text-xs text-slate-400 font-medium">Monitored Zones</p>
          </div>
        </div>
      </div>
    </section>
  );
}
