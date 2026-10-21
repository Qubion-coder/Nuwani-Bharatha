'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HEADING_CLASS, UnderlinedWord } from '@/components/UnderlinedWord';
import { Clock3, MapPin, Navigation } from 'lucide-react';
import { ChurchIcon, ChandelierIcon, VenuePinIcon } from '@/components/icons/WeddingIcons';
import { VENUES } from '@/lib/wedding';

const venueCards = [
  {
    key: 'church',
    icon: ChurchIcon,
    label: 'Holy Matrimony',
    time: '8:15 AM',
    name: "St. Anthony's Church",
    place: 'Kollupitiya',
    address: 'Galle Road, Kollupitiya, Colombo 03',
    mapUrl: VENUES.church.mapUrl,
    embedUrl: VENUES.church.embedUrl,
    tint: 'from-[#A6D5F7] to-[#FFFFFF]',
    ring: 'border-[#A6D5F7]',
  },
  {
    key: 'hotel',
    icon: ChandelierIcon,
    label: 'Poruwa & Reception',
    time: '9:45 AM · 10:15 AM',
    name: 'Cinnamon Grand Colombo',
    place: 'Oak Hall',
    address: '77 Galle Road, Colombo 03',
    mapUrl: VENUES.hotel.mapUrl,
    embedUrl: VENUES.hotel.embedUrl,
    tint: 'from-[#F7D6DE] to-[#FFFFFF]',
    ring: 'border-[#F7D6DE]',
  },
];

export default function VenueLocation() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#CDEDE1_0%,#FFFFFF_42%,#CDEDE1_100%)] px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 55, 0], y: [0, 35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[12%] -top-[8%] h-[52vw] w-[52vw] rounded-full bg-gradient-to-br from-[#F7D6DE] to-[#F7D6DE] opacity-75 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, -45, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[10%] top-[34%] h-[44vw] w-[44vw] rounded-full bg-gradient-to-tl from-[#A6D5F7] to-[#A6D5F7] opacity-60 blur-[110px]"
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 11px 11px, rgba(166,213,247,0.38) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Both venues at a glance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#000000]">Find Your Way</p>
            <h2 className={`mt-3 ${HEADING_CLASS}`}>
              Our Two <UnderlinedWord inView={inView}>Venues</UnderlinedWord>
            </h2>
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-[#A6D5F7]" />
              <VenuePinIcon className="h-5 w-5 text-[#000000]" />
              <span className="h-px w-16 bg-[#F7D6DE]" />
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
            {venueCards.map((venue, index) => {
              const Icon = venue.icon;
              return (
                <motion.div
                  key={venue.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.45 + index * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-[2rem] border border-[#FFFFFF] bg-[#FFFFFF] shadow-[0_18px_50px_rgba(166,213,247,0.35)]"
                >
                  <div className={`relative bg-gradient-to-b ${venue.tint} px-6 pb-6 pt-8 text-center md:px-8`}>
                    <span className="absolute left-5 top-5 rounded-full bg-[#FFFFFF] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#000000]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 ${venue.ring} bg-[#FFFFFF] shadow-[0_10px_25px_rgba(166,213,247,0.35)]`}>
                      <Icon className="h-11 w-11 text-[#000000]" />
                    </div>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#000000]">{venue.label}</p>
                    <h4 className="mt-2 font-serif text-3xl text-[#000000] md:text-4xl">{venue.name}</h4>
                    <p className="mt-1 font-script text-3xl text-[#000000]">{venue.place}</p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-[#000000]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFFFF] px-4 py-1.5">
                        <Clock3 className="h-4 w-4" /> {venue.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFFFF] px-4 py-1.5">
                        <MapPin className="h-4 w-4" /> {venue.address}
                      </span>
                    </div>
                  </div>

                  <div className="relative h-[240px] w-full border-y-4 border-[#CDEDE1] sm:h-[280px]">
                    <iframe
                      title={`Map of ${venue.name}`}
                      src={venue.embedUrl}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-6 md:px-8">
                    <a
                      href={venue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A6D5F7] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#000000] shadow-[0_12px_28px_rgba(166,213,247,0.45)] transition-transform hover:scale-[1.02]"
                    >
                      <Navigation className="h-4 w-4" />
                      Get Directions
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
