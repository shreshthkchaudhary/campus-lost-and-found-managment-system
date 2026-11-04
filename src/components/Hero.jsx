import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertCircle, HandHeart, TrendingUp, Package, CheckCircle } from 'lucide-react';
import { stats } from '../data/items';

const popularSearches = ['ID Card', 'Wallet', 'Mobile', 'Laptop', 'Keys', 'Charger', 'Bag', 'Watch'];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/campus-hero.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-krmu-navy/95 via-krmu-navy/85 to-[#0d2847]/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-krmu-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-krmu-hover rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-krmu-red/20 border border-krmu-red/30 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-krmu-red rounded-full animate-pulse"></span>
              KRMU Official Portal · Team Code Nemesis
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Reuniting Campus{' '}
              <br className="hidden sm:block" />
              Community with Their{' '}
              <br className="hidden sm:block" />
              <span className="text-krmu-gold">Lost Belongings</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              A centralised digital platform for students, faculty, and staff to report, search,
              and recover lost & found items across K.R. Mangalam University campus — fast, easy, and free.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/report-lost"
                className="inline-flex items-center gap-2 bg-krmu-red hover:bg-krmu-red-dark text-white px-7 py-3.5 rounded-lg text-sm font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <AlertCircle size={18} />
                I Lost Something
              </Link>
              <Link
                to="/report-found"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-3.5 rounded-lg text-sm font-bold transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <HandHeart size={18} />
                I Found Something
              </Link>
            </div>
          </div>

          {/* Quick Search Widget */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-white font-semibold text-lg mb-5">
                <Search size={20} className="text-krmu-gold" />
                Quick Search
              </div>
              <div className="flex gap-2 mb-5">
                <input
                  type="text"
                  placeholder="Search item name..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-sm outline-none focus:border-krmu-gold focus:bg-white/15 transition-all"
                />
                <button className="bg-krmu-red hover:bg-krmu-red-dark text-white px-4 py-3 rounded-lg transition-all cursor-pointer">
                  <Search size={18} />
                </button>
              </div>
              <p className="text-gray-400 text-xs mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 rounded-full border border-white/20 text-white/80 text-xs hover:bg-white/15 hover:border-white/40 transition-all cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 mb-1">
                <Package size={16} className="text-krmu-gold" />
                <span className="text-3xl font-bold text-krmu-red">{stats.itemsPosted}</span>
              </div>
              <p className="text-gray-400 text-xs font-medium">Items Posted</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={16} className="text-krmu-gold" />
                <span className="text-3xl font-bold text-krmu-red">{stats.foundItems}</span>
              </div>
              <p className="text-gray-400 text-xs font-medium">Found Items</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={16} className="text-krmu-gold" />
                <span className="text-3xl font-bold text-krmu-red">{stats.itemsRecovered}</span>
              </div>
              <p className="text-gray-400 text-xs font-medium">Items Recovered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
