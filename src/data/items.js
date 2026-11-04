export const campusLocations = [
  'Block A', 'Block B', 'Block C', 'Block D',
  'Library', 'Cafeteria', 'Auditorium', 'Sports Complex',
  'Parking Area', 'Hostel - Boys', 'Hostel - Girls',
  'Admin Block', 'Lab Building', 'Playground',
  'Main Gate', 'Canteen', 'Workshop'
];

export const itemCategories = [
  'Electronics', 'Documents & ID', 'Keys & Cards',
  'Bags & Accessories', 'Clothing', 'Books & Stationery',
  'Eyewear', 'Jewellery', 'Water Bottles', 'Other'
];

export const categoryMeta = {
  'Electronics': {
    icon: 'Laptop',
    bg: 'bg-blue-50 text-blue-600 border-blue-200/60',
    color: '#2563EB',
    badge: 'bg-blue-50 text-blue-700 ring-1 ring-blue-700/10'
  },
  'Documents & ID': {
    icon: 'FileText',
    bg: 'bg-purple-50 text-purple-600 border-purple-200/60',
    color: '#9333EA',
    badge: 'bg-purple-50 text-purple-700 ring-1 ring-purple-700/10'
  },
  'Keys & Cards': {
    icon: 'Key',
    bg: 'bg-amber-50 text-amber-700 border-amber-200/60',
    color: '#D97706',
    badge: 'bg-amber-50 text-amber-800 ring-1 ring-amber-700/10'
  },
  'Bags & Accessories': {
    icon: 'Backpack',
    bg: 'bg-indigo-50 text-indigo-600 border-indigo-200/60',
    color: '#4F46E5',
    badge: 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-700/10'
  },
  'Clothing': {
    icon: 'Shirt',
    bg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    color: '#059669',
    badge: 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-700/10'
  },
  'Books & Stationery': {
    icon: 'BookOpen',
    bg: 'bg-orange-50 text-orange-700 border-orange-200/60',
    color: '#EA580C',
    badge: 'bg-orange-50 text-orange-800 ring-1 ring-orange-700/10'
  },
  'Eyewear': {
    icon: 'Glasses',
    bg: 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
    color: '#0891B2',
    badge: 'bg-cyan-50 text-cyan-800 ring-1 ring-cyan-700/10'
  },
  'Jewellery': {
    icon: 'Gem',
    bg: 'bg-rose-50 text-rose-700 border-rose-200/60',
    color: '#E11D48',
    badge: 'bg-rose-50 text-rose-800 ring-1 ring-rose-700/10'
  },
  'Water Bottles': {
    icon: 'Droplet',
    bg: 'bg-teal-50 text-teal-700 border-teal-200/60',
    color: '#0D9488',
    badge: 'bg-teal-50 text-teal-800 ring-1 ring-teal-700/10'
  },
  'Other': {
    icon: 'Package',
    bg: 'bg-slate-100 text-slate-700 border-slate-200/60',
    color: '#475569',
    badge: 'bg-slate-100 text-slate-800 ring-1 ring-slate-700/10'
  }
};

export const categoryEmojis = {
  'Electronics': '📱',
  'Documents & ID': '🪪',
  'Keys & Cards': '🔑',
  'Bags & Accessories': '👜',
  'Clothing': '👕',
  'Books & Stationery': '📚',
  'Eyewear': '👓',
  'Jewellery': '💍',
  'Water Bottles': '🧴',
  'Other': '📦'
};

export const demoItems = [
  {
    id: 1,
    type: 'found',
    name: 'Prescription Glasses (Black Case)',
    location: 'Cafeteria',
    category: 'Eyewear',
    date: '2026-03-05',
    description: 'Black-framed prescription glasses in a brown leather case. Found on a corner table in the cafeteria. Currently kept safe — verify frame brand to collect.',
    contact: 'shreshth@krmangalam.edu.in',
    postedBy: 'Shreshth Kumar'
  },
  {
    id: 2,
    type: 'lost',
    name: 'Black Folding Umbrella',
    location: 'Library',
    category: 'Other',
    date: '2026-03-01',
    description: 'Black folding umbrella with a red logo. Left near the library entrance umbrella rack. Name tag "S. Mishra" attached to the strap.',
    contact: 'suman@krmangalam.edu.in',
    postedBy: 'Suman Mishra'
  },
  {
    id: 3,
    type: 'found',
    name: 'Set of 3 Keys (Red Lanyard)',
    location: 'Parking Area',
    category: 'Keys & Cards',
    date: '2026-02-22',
    description: 'Three keys on a red woven keychain with a small KRMU metallic tag. Found near the two-wheeler parking zone by the main gate.',
    contact: 'arman@krmangalam.edu.in',
    postedBy: 'Arman Kumar'
  },
  {
    id: 4,
    type: 'found',
    name: 'Grey Padded Laptop Bag',
    location: 'Block B',
    category: 'Bags & Accessories',
    date: '2026-02-21',
    description: 'Grey and black water-resistant laptop sleeve/bag found near Lab B-108. Contains charging adapter and notebook inside. Deposited with DSW office.',
    contact: 'shreyansh@krmangalam.edu.in',
    postedBy: 'Shreyansh Kumar'
  },
  {
    id: 5,
    type: 'found',
    name: 'iPhone 13 (Midnight Black)',
    location: 'Cafeteria',
    category: 'Electronics',
    date: '2026-02-20',
    description: 'Black iPhone 13 found near food counter table 4. Has a transparent case with a campus bus pass inside. Kept at Central Administration Office.',
    contact: 'muskan@krmangalam.edu.in',
    postedBy: 'Muskan Kumari'
  },
  {
    id: 6,
    type: 'lost',
    name: 'KRMU Student Smart ID Card',
    location: 'Block A',
    category: 'Documents & ID',
    date: '2026-02-19',
    description: 'Student ID card (B.Tech CSE, Roll 2501010090). Misplaced around lecture hall A-204 or stairwell. Urgent for hostel biometric access.',
    contact: 'sukhvinder@krmangalam.edu.in',
    postedBy: 'Sukhvinder Kaur'
  },
  {
    id: 7,
    type: 'found',
    name: 'Stainless Steel Water Bottle (Milton)',
    location: 'Sports Complex',
    category: 'Water Bottles',
    date: '2026-02-18',
    description: 'Blue Milton 1000ml insulated water bottle found on the basketball court bleachers. Distinct sports sticker on the lid.',
    contact: 'shreshth@krmangalam.edu.in',
    postedBy: 'Shreshth Kumar'
  },
  {
    id: 8,
    type: 'lost',
    name: 'JBL Endurance Wireless Earphones',
    location: 'Lab Building',
    category: 'Electronics',
    date: '2026-02-15',
    description: 'Black JBL earphones in a compact zippered silicone case. Left in Computer Lab 3 during afternoon practicals.',
    contact: 'arman@krmangalam.edu.in',
    postedBy: 'Arman Kumar'
  }
];

export const teamMembers = [
  { name: 'Shreshth Kumar Chaudhary', roll: '2501010080', role: 'Frontend Architecture' },
  { name: 'Muskan Kumari Singh', roll: '2501010265', role: 'UI/UX & Product Design' },
  { name: 'Shreyansh Kumar', roll: '2501010019', role: 'Backend & Data Flow' },
  { name: 'Sukhvinder Kaur', roll: '2501010272', role: 'QA & Documentation' },
  { name: 'Suman Mishra', roll: '2501010308', role: 'API & PHP Services' },
  { name: 'Arman Kumar', roll: '2501010024', role: 'Database & Schema' }
];

export const stats = {
  itemsPosted: 8,
  foundItems: 5,
  itemsRecovered: 3,
  recoveryRate: '92%'
};
