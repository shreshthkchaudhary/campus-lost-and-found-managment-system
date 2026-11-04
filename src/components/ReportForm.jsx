import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, HandHeart, Send, CheckCircle2, UploadCloud, ShieldAlert, ArrowLeft } from 'lucide-react';
import { itemCategories, campusLocations } from '../data/items';
import { useItemsContext } from '../context/ItemsContext';

export default function ReportForm({ type: initialType = 'lost' }) {
  const [currentType, setCurrentType] = useState(initialType);
  const isLost = currentType === 'lost';
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    category: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    contact: ''
  });

  const { addItem } = useItemsContext();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem({ ...form, type: currentType });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({
      name: '',
      category: '',
      location: '',
      date: new Date().toISOString().split('T')[0],
      description: '',
      contact: ''
    });
  };

  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/browse"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Directory</span>
          </Link>
        </div>

        {/* Top Type Selector Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-6">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/50">
              Campus Registry
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-2">
              Report an Item
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Submit accurate details to help campus security and fellow students identify and recover property.
            </p>
          </div>

          {/* Segmented Switcher */}
          <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-2xl max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setCurrentType('lost')}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isLost 
                  ? 'bg-rose-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <AlertCircle size={16} />
              <span>I Lost Something</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentType('found')}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isLost 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HandHeart size={16} />
              <span>I Found Something</span>
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          {submitted && (
            <div className="mb-6 flex items-start gap-3 bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-2xl animate-fade-in">
              <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold">Report successfully submitted!</p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Your record has been stored and is now searchable in the campus directory.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Item Title */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Item Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={isLost ? 'e.g. Dell Inspiron Charger / Student ID Card' : 'e.g. Set of Keys / Prescription Glasses'}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 transition-all font-medium"
              />
            </div>

            {/* Category & Location */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Category <span className="text-rose-500">*</span>
                </label>
                <select
                  name="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 cursor-pointer"
                >
                  <option value="">Select Category</option>
                  {itemCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Campus Location <span className="text-rose-500">*</span>
                </label>
                <select
                  name="location"
                  required
                  value={form.location}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 cursor-pointer"
                >
                  <option value="">Select Location</option>
                  {campusLocations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Date {isLost ? 'Lost' : 'Found'} <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 transition-all font-medium"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Detailed Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="description"
                required
                rows={4}
                value={form.description}
                onChange={handleChange}
                placeholder="Mention distinct colors, brands, stickers, scratches, or room numbers to help verify ownership..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 transition-all resize-none font-medium leading-relaxed"
              />
            </div>

            {/* Optional Image Upload Container */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Photo Evidence <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <div className="border-2 border-dashed border-slate-200 hover:border-slate-300 rounded-2xl p-6 text-center bg-slate-50/50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 text-slate-400 group-hover:text-rose-500 flex items-center justify-center mx-auto mb-2 transition-colors">
                  <UploadCloud size={20} />
                </div>
                <p className="text-xs font-semibold text-slate-700">Click to upload photo of the item</p>
                <p className="text-[11px] text-slate-400 mt-0.5">PNG, JPG, or WEBP up to 5MB</p>
              </div>
            </div>

            {/* University Contact Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                University Contact Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                name="contact"
                required
                value={form.contact}
                onChange={handleChange}
                placeholder="your.name@krmangalam.edu.in"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 transition-all font-medium"
              />
              <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
                <ShieldAlert size={12} className="text-slate-400" />
                <span>Only verified university emails (@krmangalam.edu.in) will be displayed to logged-in users.</span>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 text-white py-3.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer ${
                isLost 
                  ? 'bg-rose-600 hover:bg-rose-700' 
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              <Send size={16} />
              <span>Publish {isLost ? 'Lost Item Report' : 'Found Item Record'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
