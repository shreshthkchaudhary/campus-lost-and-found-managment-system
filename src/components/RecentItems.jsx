import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, AlertCircle, HandHeart } from 'lucide-react';
import { useItemsContext } from '../context/ItemsContext';
import ItemCard from './ItemCard';

export default function RecentItems() {
  const { items } = useItemsContext();
  const [filterType, setFilterType] = useState('all');

  const filteredItems = items
    .filter(item => filterType === 'all' || item.type === filterType)
    .slice(0, 8);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              <span>Real-Time Campus Feed</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Recently Reported Belongings
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Latest items registered across campus. Filter by type or click any card for verified contact details.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterType('lost')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'lost'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <AlertCircle size={13} />
              <span>Lost</span>
            </button>
            <button
              onClick={() => setFilterType('found')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'found'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HandHeart size={13} />
              <span>Found</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {filteredItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-2">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 hover:border-slate-900 px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            <span>Explore All Registered Items in Directory</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
