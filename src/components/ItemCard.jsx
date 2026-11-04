import { useState } from 'react';
import { MapPin, Tag, Calendar } from 'lucide-react';
import { categoryEmojis } from '../data/items';
import ItemModal from './ItemModal';

export default function ItemCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLost = item.type === 'lost';
  
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group bg-white rounded-xl border border-krmu-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
      >
        {/* Header with emoji */}
        <div className={`relative p-6 pb-4 ${isLost ? 'bg-red-50' : 'bg-blue-50'}`}>
          {/* Badge */}
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
            isLost ? 'bg-krmu-red' : 'bg-krmu-accent'
          }`}>
            {isLost ? 'LOST' : 'FOUND'}
          </span>

          {/* Category Emoji */}
          <div className="text-center pt-4 pb-2">
            <span className="text-5xl" role="img" aria-label={item.category}>
              {categoryEmojis[item.category] || '📦'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-bold text-krmu-navy text-base mb-3 group-hover:text-krmu-red transition-colors line-clamp-2">
            {item.name}
          </h3>

          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-sm text-krmu-text-light">
              <MapPin size={14} className="text-krmu-red flex-shrink-0" />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-krmu-text-light">
              <Tag size={14} className="text-krmu-red flex-shrink-0" />
              <span>{item.category}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-krmu-text-light">
              <Calendar size={14} className="text-krmu-red flex-shrink-0" />
              <span>{formatDate(item.date)}</span>
            </div>
          </div>

          <p className="text-sm text-krmu-text-light leading-relaxed flex-1 line-clamp-3 mb-4">
            {item.description}
          </p>

          {/* Footer */}
          <div className="pt-3 border-t border-krmu-border flex justify-between items-center">
            <p className="text-xs text-krmu-text-light">
              📅 {formatDate(item.date)}
            </p>
            <span className="text-xs font-semibold text-krmu-red opacity-0 group-hover:opacity-100 transition-opacity">
              View Details →
            </span>
          </div>
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
