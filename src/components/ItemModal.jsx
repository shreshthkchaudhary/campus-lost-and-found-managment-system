import { useState } from 'react';
import { X, MapPin, Calendar, Mail, User, ShieldCheck, Copy, Check, ExternalLink } from 'lucide-react';
import { categoryMeta } from '../data/items';
import CategoryIcon from './CategoryIcon';

export default function ItemModal({ item, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!isOpen || !item) return null;

  const isLost = item.type === 'lost';
  const meta = categoryMeta[item.category] || categoryMeta['Other'];
  const contactEmail = item.contact || item.contactEmail || 'security@krmangalam.edu.in';
  const contactName = item.postedBy || item.contactName || 'Campus Community Member';

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden animate-fade-in-up flex flex-col max-h-[92vh] border border-slate-100">
        {/* Top Header */}
        <div className="p-6 pb-5 border-b border-slate-100 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${meta.bg}`}>
              <CategoryIcon category={item.category} size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  isLost 
                    ? 'bg-rose-50 text-rose-700 ring-1 ring-rose-600/20' 
                    : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20'
                }`}>
                  {isLost ? 'Lost Item' : 'Found Item'}
                </span>
                <span className="text-xs font-medium text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-500">{item.category}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                {item.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Details Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3 flex items-start gap-2.5">
              <MapPin size={16} className="text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Campus Location</p>
                <p className="text-sm font-bold text-slate-800">{item.location}</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3 flex items-start gap-2.5">
              <Calendar size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Date {isLost ? 'Lost' : 'Found'}</p>
                <p className="text-sm font-bold text-slate-800">{formatDate(item.date)}</p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Item Description</h3>
            <div className="bg-slate-50/80 rounded-2xl p-4 text-sm text-slate-700 leading-relaxed border border-slate-200/70">
              {item.description}
            </div>
          </div>

          {/* Contact & Claim Box */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 shadow-sm border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-400" />
                <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
                  Contact & Verification
                </span>
              </div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                KRMU Student / Staff
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 mb-4 border border-white/10">
              <div className="w-8 h-8 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                <User size={14} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-300 font-medium">Reported by</p>
                <p className="text-sm font-semibold text-white truncate">{contactName}</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 text-slate-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <a 
              href={`mailto:${contactEmail}?subject=Regarding your ${item.type} item: ${item.name} (KRMU Lost %26 Found)`}
              className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors shadow-md"
            >
              <Mail size={16} />
              <span>Contact via University Email</span>
              <ExternalLink size={14} className="opacity-70" />
            </a>

            <p className="text-[11px] text-slate-400 text-center mt-3">
              Safety note: Always arrange handovers at public campus locations (Library entrance, Cafeteria, or Admin Block).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
