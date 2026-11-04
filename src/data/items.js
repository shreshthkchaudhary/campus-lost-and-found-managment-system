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
    name: 'Prescription Glasses',
    location: 'Cafeteria',
    category: 'Eyewear',
    date: '2026-03-05',
    description: 'Black-framed prescription glasses in a brown leather case. Found on a table in the cafeteria. Currently kept with me — contact to verify and collect.',
    contact: 'shreshth@krmangalam.edu.in',
    postedBy: 'Shreshth Kumar'
  },
  {
    id: 2,
    type: 'lost',
    name: 'Black Umbrella',
    location: 'Library',
    category: 'Other',
    date: '2026-03-01',
    description: 'Black folding umbrella with a red logo. Left at the library entrance umbrella stand. Name "S. Mishra" written on handle.',
    contact: 'suman@krmangalam.edu.in',
    postedBy: 'Suman Mishra'
  },
  {
    id: 3,
    type: 'found',
    name: 'Set of 3 Keys (Red Chain)',
    location: 'Parking Area',
    category: 'Keys & Cards',
    date: '2026-02-22',
    description: 'Three keys on a red keychain with a small KRMU promotional tag. Found near the two-wheeler parking zone by the main gate.',
    contact: 'arman@krmangalam.edu.in',
    postedBy: 'Arman Kumar'
  },
  {
    id: 4,
    type: 'found',
    name: 'Grey Laptop Bag',
    location: 'Block B',
    category: 'Bags & Accessories',
    date: '2026-02-21',
    description: 'Grey and black laptop bag found near Lab B-108. Contains USB cables and a charger brick inside. No laptop. Kept at DSW office.',
    contact: 'shreyansh@krmangalam.edu.in',
    postedBy: 'Shreyansh Kumar'
  },
  {
    id: 5,
    type: 'found',
    name: 'iPhone 13 (Black)',
    location: 'Cafeteria',
    category: 'Electronics',
    date: '2026-02-20',
    description: 'Black iPhone 13 found near the food counter. Screen has a minor scratch on the bottom corner. Currently being kept at the admin office.',
    contact: 'muskan@krmangalam.edu.in',
    postedBy: 'Muskan Kumari'
  },
  {
    id: 6,
    type: 'lost',
    name: 'KRMU Student ID Card',
    location: 'Block A',
    category: 'Documents & ID',
    date: '2026-02-19',
    description: 'Student ID card for roll number 2501010090. Lost near classroom A-204 after the morning lecture. Very urgent — needed for hostel entry.',
    contact: 'sukhvinder@krmangalam.edu.in',
    postedBy: 'Sukhvinder Kaur'
  },
  {
    id: 7,
    type: 'found',
    name: 'Blue Water Bottle (Milton)',
    location: 'Sports Complex',
    category: 'Water Bottles',
    date: '2026-02-18',
    description: 'Blue Milton 1-litre steel water bottle found at the basketball court bleachers. Has sticker marks on the side.',
    contact: 'shreshth@krmangalam.edu.in',
    postedBy: 'Shreshth Kumar'
  },
  {
    id: 8,
    type: 'lost',
    name: 'Wired Earphones (JBL)',
    location: 'Lab Building',
    category: 'Electronics',
    date: '2026-02-15',
    description: 'Black JBL wired earphones with a tangled cable. Left in Computer Lab 3 during the afternoon session. Blue carrying pouch.',
    contact: 'arman@krmangalam.edu.in',
    postedBy: 'Arman Kumar'
  }
];

export const teamMembers = [
  { name: 'Shreshth Kumar Chaudhary', roll: '2501010080', role: 'Frontend' },
  { name: 'Muskan Kumari Singh', roll: '2501010265', role: 'UI Design / Frontend' },
  { name: 'Shreyansh Kumar', roll: '2501010019', role: 'Backend / Database' },
  { name: 'Sukhvinder Kaur', roll: '2501010272', role: 'Testing / Docs' },
  { name: 'Suman Mishra', roll: '2501010308', role: 'Backend / PHP' },
  { name: 'Arman Kumar', roll: '2501010024', role: 'Database / MySQL' }
];

export const stats = {
  itemsPosted: 8,
  foundItems: 5,
  itemsRecovered: 1
};
