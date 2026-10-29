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
    area: 'Colpetty',
    mapUrl: mapSearch("St. Anthony's Church Kollupitiya Colombo 03"),
    embedUrl: mapEmbed("St. Anthony's Church Kollupitiya Colombo 03"),
    photo: encodeURI('/Screenshot 2026-10-29 214020.png'),
  },
  hotel: {
    name: 'Cinnamon Grand Colombo',
    area: 'Oak Hall',
    mapUrl: mapSearch('Cinnamon Grand Colombo'),
    embedUrl: mapEmbed('Cinnamon Grand Colombo'),
    photo: encodeURI('/Screenshot 2026-10-29 214136.png'),
  },
};

export const SCHEDULE = [
  {
    key: 'church',
    title: 'Holy Matrimony',
    time: '8:15 AM',
    venue: "St. Anthony's Church",
    place: 'Colpetty',
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
  { name: "Groom's Dad - Pushpakeerthi", phone: '0712568196', intl: '94712568196' },
  { name: 'Bride - Nuwani', phone: '0704645846', intl: '94704645846' },
];

// Pastel palette (Baby Pink / Mint Green / Sky Blue with white & silver)
export const PALETTE = {
  sky: '#A6D5F7',
  mint: '#CDEDE1',
  pink: '#F7D6DE',
  silver: '#C3CBD5',
};

// Preshoot photos in /public/pre (encoded in case a filename contains spaces)
const pre = (file: string) => encodeURI(`/pre/${file}`);
export const PHOTOS = {
  hero: pre('RAM02075.jpg.jpeg'),
  ceremony: pre('RAM02038.jpg.jpeg'),
  bride: '/IMG_6150.JPG.jpeg',
  groom: '/IMG_6173.JPG.jpeg',
  gallery: [
    pre('RAM01314.jpg.jpeg'),
    pre('RAM01382.jpg.jpeg'),
    pre('RAM01805.jpg.jpeg'),
    pre('RAM02015.jpg.jpeg'),
    pre('RAM02520.jpg.jpeg'),
    pre('RAM02812.jpg.jpeg'),
  ],
};
