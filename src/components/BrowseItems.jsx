import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, SlidersHorizontal, SearchX, PlusCircle, RotateCcw } from 'lucide-react';
import { itemCategories, campusLocations } from '../data/items';
import { useItemsContext } from '../context/ItemsContext';
import ItemCard from './ItemCard';
import CategoryIcon from './CategoryIcon';

export default function BrowseItems() {
  const { items } = useItemsContext();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial query params from URL
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialType = searchParams.get('type') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState(initialType);
  const [showFilters, setShowFilters] = useState(false);

  const [prevParamsString, setPrevParamsString] = useState(searchParams.toString());
  if (prevParamsString !== searchParams.toString()) {
    setPrevParamsString(searchParams.toString());
    if (searchParams.has('search')) setSearchQuery(searchParams.get('search') || '');
    if (searchParams.has('category')) setSelectedCategory(searchParams.get('category') || '');
    if (searchParams.has('type')) setSelectedType(searchParams.get('type') || '');
  }

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());
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
    setSearchParams({});
  };

  const hasFilters = searchQuery || selectedCategory || selectedLocation || selectedType;

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/50">
                Directory
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                Campus Lost & Found Directory
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Explore all verified items reported across K.R. Mangalam University campus.
              </p>
            </div>

            <Link
              to="/report-lost"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm self-start md:self-auto"
            >
              <PlusCircle size={15} className="text-rose-400" />
              <span>Report Item</span>
            </Link>
          </div>

          {/* Search & Control Bar */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by item name, location, or keyword..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 transition-all text-slate-800 placeholder-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Segmented Type Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/80">
              <button
                onClick={() => setSelectedType('')}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedType === '' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType('lost')}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedType === 'lost' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lost Only
              </button>
              <button
                onClick={() => setSelectedType('found')}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedType === 'found' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Found Only
              </button>
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                showFilters || selectedLocation || selectedCategory
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <SlidersHorizontal size={15} />
              <span>Filters</span>
              {(selectedLocation || selectedCategory) && (
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              )}
            </button>
          </div>

          {/* Collapsible Advanced Filters */}
          {showFilters && (
            <div className="mt-5 pt-5 border-t border-slate-100 grid sm:grid-cols-2 gap-4 animate-fade-in">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Filter by Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 cursor-pointer"
                >
                  <option value="">All Categories (10)</option>
                  {itemCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Filter by Campus Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={e => setSelectedLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 cursor-pointer"
                >
                  <option value="">All Campus Zones (17)</option>
                  {campusLocations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Quick Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pt-5 mt-5 border-t border-slate-100 pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === ''
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {itemCategories.map(cat => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(isSelected ? '' : cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <CategoryIcon category={cat} size={12} />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Metadata & Clear Filters */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Showing <span className="text-slate-900 font-extrabold">{filteredItems.length}</span> results
          </p>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 cursor-pointer bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200/60 transition-colors"
            >
              <RotateCcw size={12} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Results Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-md mx-auto my-12">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 mx-auto flex items-center justify-center mb-4">
              <SearchX size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Matching Items Found</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              No reported belongings match your current search terms or selected filters.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <button
                onClick={clearFilters}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
              <Link
                to="/report-lost"
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm inline-flex items-center justify-center gap-1.5"
              >
                <PlusCircle size={14} />
                <span>Report Item</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
