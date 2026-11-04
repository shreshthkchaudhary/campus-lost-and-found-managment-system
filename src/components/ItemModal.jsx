import { X, MapPin, Tag, Calendar, Mail, User, Info } from 'lucide-react';
import { categoryEmojis } from '../data/items';

export default function ItemModal({ item, isOpen, onClose }) {
  if (!isOpen || !item) return null;

  const isLost = item.type === 'lost';

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-krmu-navy/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className={`relative px-6 py-8 md:py-10 text-center flex-shrink-0 ${isLost ? 'bg-red-50' : 'bg-blue-50'}`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-krmu-navy transition-colors cursor-pointer shadow-sm"
          >
            <X size={20} />
          </button>

          <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md ${
            isLost ? 'bg-krmu-red' : 'bg-krmu-accent'
          }`}>
            {isLost ? 'LOST ITEM' : 'FOUND ITEM'}
          </span>

          <span className="text-7xl block mb-2 drop-shadow-md" role="img" aria-label={item.category}>
            {categoryEmojis[item.category] || '📦'}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-krmu-navy line-clamp-2 px-8">
            {item.name}
          </h2>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Details Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-krmu-text-light uppercase tracking-wider mb-2">Item Details</h3>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-krmu-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-krmu-red" />
                </div>
                <div>
                  <p className="text-xs text-krmu-text-light font-medium">Location</p>
                  <p className="font-semibold text-krmu-navy">{item.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-krmu-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Tag size={16} className="text-krmu-red" />
                </div>
                <div>
                  <p className="text-xs text-krmu-text-light font-medium">Category</p>
                  <p className="font-semibold text-krmu-navy">{item.category}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-krmu-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar size={16} className="text-krmu-red" />
                </div>
                <div>
                  <p className="text-xs text-krmu-text-light font-medium">Date {isLost ? 'Lost' : 'Found'}</p>
                  <p className="font-semibold text-krmu-navy">{formatDate(item.date)}</p>
                </div>
              </div>
            </div>

            {/* Description Column */}
            <div>
              <h3 className="text-xs font-bold text-krmu-text-light uppercase tracking-wider mb-3">Description</h3>
              <div className="bg-krmu-light rounded-xl p-4 text-sm text-krmu-navy leading-relaxed border border-krmu-border">
                {item.description}
              </div>
            </div>
          </div>

          <hr className="my-8 border-krmu-border" />

          {/* Contact Section */}
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <div className="flex items-center gap-2 mb-4">
              <Info size={18} className="text-amber-600" />
              <h3 className="font-bold text-amber-900">Contact Information</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white rounded-lg p-3 border border-amber-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <User size={14} className="text-amber-700" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-amber-600">Reported By</p>
                  <p className="text-sm font-semibold text-krmu-navy">{item.contactName || 'Student / Staff'}</p>
                </div>
              </div>

              <a 
                href={`mailto:${item.contactEmail || 'contact@example.com'}?subject=Regarding ${item.name} on KRMU Lost & Found`}
                className="flex-[1.5] bg-krmu-red hover:bg-krmu-hover transition-colors rounded-lg p-3 flex items-center justify-center gap-2 text-white font-semibold cursor-pointer shadow-sm"
              >
                <Mail size={16} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
