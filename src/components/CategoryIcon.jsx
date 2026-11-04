import {
  Laptop,
  FileText,
  Key,
  Backpack,
  Shirt,
  BookOpen,
  Glasses,
  Gem,
  Droplet,
  Package
} from 'lucide-react';
import { categoryMeta } from '../data/items';

const iconMap = {
  Laptop,
  FileText,
  Key,
  Backpack,
  Shirt,
  BookOpen,
  Glasses,
  Gem,
  Droplet,
  Package
};

export default function CategoryIcon({ category, size = 18, className = "" }) {
  const meta = categoryMeta[category] || categoryMeta['Other'];
  const IconComponent = iconMap[meta?.icon] || Package;
  return <IconComponent size={size} className={className} />;
}

