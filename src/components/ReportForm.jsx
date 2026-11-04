import { useState } from 'react';
import { AlertCircle, HandHeart, Send, CheckCircle } from 'lucide-react';
import { itemCategories, campusLocations } from '../data/items';
import { useItemsContext } from '../context/ItemsContext';

export default function ReportForm({ type = 'lost' }) {
  const isLost = type === 'lost';
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    category: '',
    location: '',
    date: '',
    description: '',
    contact: ''
  });

  const { addItem } = useItemsContext();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem({ ...form, type });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', category: '', location: '', date: '', description: '', contact: '' });
  };

  return (
    <section className="min-h-screen bg-krmu-light">
      {/* Header */}
      <div className={`py-12 md:py-16 ${
        isLost
          ? 'bg-gradient-to-r from-krmu-red to-[#8b0000]'
          : 'bg-gradient-to-r from-krmu-navy to-[#0d2847]'
      }`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 ${
            isLost ? 'bg-white/20' : 'bg-white/10'
          }`}>
            {isLost
              ? <AlertCircle size={32} className="text-white" />
              : <HandHeart size={32} className="text-white" />
            }
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Report a {isLost ? 'Lost' : 'Found'} Item
          </h1>
          <p className="text-white/80 max-w-lg mx-auto">
            {isLost
              ? 'Fill in the details below so others can help you find your belonging. Be as specific as possible.'
              : 'Help reunite someone with their belonging. Fill in the details of what you found.'
            }
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-krmu-border p-6 md:p-10">
          {submitted && (
            <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-xl animate-fade-in">
              <CheckCircle size={20} />
              <div>
                <p className="font-semibold">Successfully submitted!</p>
                <p className="text-sm text-green-600">Your report has been posted. You'll be notified if someone matches it.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Item Name */}
            <div>
              <label className="block text-sm font-semibold text-krmu-navy mb-2">
                Item Name <span className="text-krmu-red">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={isLost ? 'e.g. Blue Water Bottle' : 'e.g. Student ID Card'}
                className="w-full px-4 py-3 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-2 focus:ring-krmu-red/20 transition-all"
              />
            </div>

            {/* Category + Location */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-krmu-navy mb-2">
                  Category <span className="text-krmu-red">*</span>
                </label>
                <select
                  name="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-2 focus:ring-krmu-red/20 transition-all"
                >
                  <option value="">Select category</option>
                  {itemCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-krmu-navy mb-2">
                  Location <span className="text-krmu-red">*</span>
                </label>
                <select
                  name="location"
                  required
                  value={form.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-2 focus:ring-krmu-red/20 transition-all"
                >
                  <option value="">Select location</option>
                  {campusLocations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-krmu-navy mb-2">
                Date {isLost ? 'Lost' : 'Found'} <span className="text-krmu-red">*</span>
              </label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-2 focus:ring-krmu-red/20 transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-krmu-navy mb-2">
                Description <span className="text-krmu-red">*</span>
              </label>
              <textarea
                name="description"
                required
                rows={4}
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the item in detail — color, brand, any identifying marks, where exactly it was last seen..."
                className="w-full px-4 py-3 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-2 focus:ring-krmu-red/20 transition-all resize-none"
              />
            </div>

            {/* Image Upload Mock */}
            <div>
              <label className="block text-sm font-semibold text-krmu-navy mb-2">
                Upload Image <span className="text-gray-400 font-normal ml-1">(Optional)</span>
              </label>
              <div className="border-2 border-dashed border-krmu-border rounded-lg p-6 text-center hover:border-krmu-red hover:bg-red-50/50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-krmu-light group-hover:bg-red-100 flex items-center justify-center mx-auto mb-3 transition-colors">
                  <span className="text-2xl" role="img" aria-label="Camera">📸</span>
                </div>
                <p className="text-sm font-medium text-krmu-navy">Click to upload or drag and drop</p>
                <p className="text-xs text-krmu-text-light mt-1">PNG, JPG up to 5MB</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-semibold text-krmu-navy mb-2">
                Contact Email <span className="text-krmu-red">*</span>
              </label>
              <input
                type="email"
                name="contact"
                required
                value={form.contact}
                onChange={handleChange}
                placeholder="your.name@krmangalam.edu.in"
                className="w-full px-4 py-3 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-2 focus:ring-krmu-red/20 transition-all"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 text-white py-3.5 rounded-lg text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer ${
                isLost
                  ? 'bg-krmu-red hover:bg-krmu-red-dark'
                  : 'bg-krmu-navy hover:bg-krmu-hover'
              }`}
            >
              <Send size={16} />
              Submit {isLost ? 'Lost' : 'Found'} Report
            </button>
          </form>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-16"></div>
    </section>
  );
}
