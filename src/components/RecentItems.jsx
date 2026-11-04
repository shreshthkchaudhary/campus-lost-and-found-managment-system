import { Link } from 'react-router-dom';
import { Grid3X3 } from 'lucide-react';
import { useItemsContext } from '../context/ItemsContext';
import ItemCard from './ItemCard';

export default function RecentItems() {
  const { items } = useItemsContext();
  const recentItems = items.slice(0, 4);

  return (
    <section className="py-20 bg-krmu-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-krmu-red font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Recent Activity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-krmu-navy mb-4">
            Latest Lost & Found Items
          </h2>
          <p className="text-krmu-text-light max-w-xl mx-auto">
            Browse the most recently posted items. Click any card to see full details.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children">
          {recentItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 bg-krmu-red hover:bg-krmu-hover text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Grid3X3 size={18} />
            View All Items
          </Link>
        </div>
      </div>
    </section>
  );
}
