import { useState } from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { categoryMeta } from '../data/items';
import CategoryIcon from './CategoryIcon';
import ItemModal from './ItemModal';

export default function ItemCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLost = item.type === 'lost';
  const meta = categoryMeta[item.category] || categoryMeta['Other'];

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  };

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer"
      >
        <div>
          {/* Top Row: Category Icon & Status Pill */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${meta.badge}`}>
              <CategoryIcon category={item.category} size={13} />
              <span>{item.category}</span>
            </span>

            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
              isLost 
                ? 'bg-rose-50 text-rose-700 ring-1 ring-rose-600/20' 
                : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20'
            }`}>
              {isLost ? 'Lost Item' : 'Found Item'}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-rose-600 transition-colors line-clamp-1">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
            {item.description}
          </p>

          {/* Location & Date Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <div className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
              <MapPin size={12} className="text-rose-500 flex-shrink-0" />
              <span>{item.location}</span>
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
              <Calendar size={12} className="text-slate-400 flex-shrink-0" />
              <span>{formatDate(item.date)}</span>
            </div>
          </div>
        </div>

        {/* Card Footer: Poster & Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              {getInitials(item.postedBy || item.contactName)}
            </div>
            <span className="text-xs font-medium text-slate-600 truncate">
              {item.postedBy || item.contactName || 'Campus User'}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 group-hover:translate-x-0.5 transition-transform">
            Details <ArrowRight size={13} />
          </span>
        </div>
      </div>

      <ItemModal 
        item={item} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
