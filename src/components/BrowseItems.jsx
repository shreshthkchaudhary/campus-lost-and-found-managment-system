import { useState, useMemo } from 'react';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { itemCategories, campusLocations } from '../data/items';
import { useItemsContext } from '../context/ItemsContext';
import ItemCard from './ItemCard';

export default function BrowseItems() {
  const { items } = useItemsContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = !selectedCategory || item.category === selectedCategory;
      const matchLocation = !selectedLocation || item.location === selectedLocation;
      const matchType = !selectedType || item.type === selectedType;
      return matchSearch && matchCategory && matchLocation && matchType;
    });
  }, [items, searchQuery, selectedCategory, selectedLocation, selectedType]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedLocation('');
    setSelectedType('');
  };

  const hasFilters = searchQuery || selectedCategory || selectedLocation || selectedType;

  return (
    <section className="min-h-screen bg-krmu-light">
      {/* Header */}
      <div className="bg-gradient-to-r from-krmu-navy to-[#0d2847] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-krmu-red font-semibold text-sm tracking-[0.2em] uppercase mb-2">Browse</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">All Lost & Found Items</h1>
          <p className="text-gray-300 max-w-xl">
            Search through all reported items. Use filters to narrow your results.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex gap-3 max-w-2xl">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border-0 outline-none text-sm bg-white/10 text-white placeholder-gray-400 focus:bg-white/15 focus:ring-2 focus:ring-krmu-gold transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                showFilters ? 'bg-krmu-red text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="bg-white border-b border-krmu-border shadow-sm animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-krmu-navy mb-2 uppercase tracking-wider">Type</label>
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-1 focus:ring-krmu-red transition-all"
                >
                  <option value="">All Types</option>
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-krmu-navy mb-2 uppercase tracking-wider">Category</label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-1 focus:ring-krmu-red transition-all"
                >
                  <option value="">All Categories</option>
                  {itemCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-krmu-navy mb-2 uppercase tracking-wider">Location</label>
                <select
                  value={selectedLocation}
                  onChange={e => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-krmu-border text-sm outline-none focus:border-krmu-red focus:ring-1 focus:ring-krmu-red transition-all"
                >
                  <option value="">All Locations</option>
                  {campusLocations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 flex items-center gap-1 text-sm text-krmu-red hover:text-krmu-red-dark font-medium cursor-pointer"
              >
                <X size={14} />
                Clear all filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-krmu-text-light">
            Showing <span className="font-semibold text-krmu-navy">{filteredItems.length}</span> items
          </p>
          {hasFilters && (
            <div className="flex items-center gap-2 flex-wrap">
              {selectedType && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-krmu-red/10 text-krmu-red font-medium">
                  {selectedType}
                  <X size={12} className="cursor-pointer" onClick={() => setSelectedType('')} />
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-krmu-red/10 text-krmu-red font-medium">
                  {selectedCategory}
                  <X size={12} className="cursor-pointer" onClick={() => setSelectedCategory('')} />
                </span>
              )}
              {selectedLocation && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-krmu-red/10 text-krmu-red font-medium">
                  {selectedLocation}
                  <X size={12} className="cursor-pointer" onClick={() => setSelectedLocation('')} />
                </span>
              )}
            </div>
          )}
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-krmu-navy mb-2">No items found</h3>
            <p className="text-krmu-text-light mb-6">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 bg-krmu-red hover:bg-krmu-hover text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
