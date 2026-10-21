// Single source of truth for all wedding details shown across the site.

export const COUPLE = {
  bride: 'Nuwani',
  brideFull: 'Nuwani Yashoda',
  groom: 'Bharatha',
  groomFull: 'Bharatha Pramodya',
  initials: 'N ✦ B',
};

export const PARENTS = {
  bride: 'Uditha Mallikarachchi & Grace Patricia Francis',
  groom: 'Pushpakeerthi Suraweeraarachchi & Thusantha Kumari Gamage',
};

export const WEDDING_DATE_LABEL = '11th December 2026';
export const WEDDING_DATE_SHORT = 'December 11, 2026';
// Church ceremony start, Sri Lanka time (UTC+05:30)
export const WEDDING_DATE_ISO = '2026-12-11T08:15:00+05:30';

const mapSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const mapEmbed = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const VENUES = {
  church: {
    name: "St. Anthony's Church",
    area: 'Kollupitiya (Colpetty)',
    mapUrl: mapSearch("St. Anthony's Church Kollupitiya Colombo 03"),
    embedUrl: mapEmbed("St. Anthony's Church Kollupitiya Colombo 03"),
  },
  hotel: {
    name: 'Cinnamon Grand Colombo',
    area: 'Oak Hall',
    mapUrl: mapSearch('Cinnamon Grand Colombo'),
    embedUrl: mapEmbed('Cinnamon Grand Colombo'),
  },
};

export const SCHEDULE = [
  {
    key: 'church',
    title: 'Holy Matrimony',
    time: '8:15 AM',
    venue: "St. Anthony's Church",
    place: 'Kollupitiya',
    note: 'Wedding ceremony',
    mapUrl: VENUES.church.mapUrl,
  },
  {
    key: 'poruwa',
    title: 'Poruwa Ceremony',
    time: '9:45 AM',
    venue: 'Cinnamon Grand Colombo',
    place: 'Oak Hall',
    note: 'Traditional Poruwa rituals',
    mapUrl: VENUES.hotel.mapUrl,
  },
  {
    key: 'reception',
    title: 'Reception',
    time: '10:15 AM',
    venue: 'Cinnamon Grand Colombo',
    place: 'Oak Hall',
    note: 'Lunch & celebration',
    mapUrl: VENUES.hotel.mapUrl,
  },
];

export const CONTACTS = [
  { name: 'Nuwani', phone: '0704645846', intl: '94704645846' },
  { name: 'Bharatha', phone: '0710190719', intl: '94710190719' },
];

// Pastel palette (Baby Pink / Mint Green / Sky Blue with white & silver)
export const PALETTE = {
  sky: '#A6D5F7',
  mint: '#CDEDE1',
  pink: '#F7D6DE',
  silver: '#C3CBD5',
};

// Preshoot photos in /public/pre (encoded because the filenames contain spaces)
const pre = (file: string) => encodeURI(`/pre/${file}`);
export const PHOTOS = {
  hero: pre('WhatsApp Image 2026-10-16 at 07.28.03 (1).jpeg'),
  ceremony: pre('WhatsApp Image 2026-10-16 at 07.28.03.jpeg'),
  gallery: [
    pre('WhatsApp Image 2026-10-16 at 07.28.03 (1).jpeg'),
    pre('WhatsApp Image 2026-10-16 at 07.28.03 (2).jpeg'),
    pre('WhatsApp Image 2026-10-16 at 07.28.03.jpeg'),
    pre('WhatsApp Image 2026-10-16 at 07.28.04 (1).jpeg'),
    pre('WhatsApp Image 2026-10-16 at 07.28.04.jpeg'),
  ],
};
