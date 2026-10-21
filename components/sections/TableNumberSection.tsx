'use client';

import { motion } from 'framer-motion';
import { HeartFlourish } from '@/components/icons/WeddingIcons';
import { useGuest } from '@/hooks/use-guest';
import { VENUES } from '@/lib/wedding';

// Shown only when the invite link carries a table number, e.g. ?guest=Kamal&table=5
export default function TableNumberSection() {
  const guest = useGuest();

  if (!guest.table) return null;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#CDEDE1_100%)] px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-sm"
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(120deg,#A6D5F7,#F7D6DE,#CDEDE1)] opacity-40 blur-2xl" />
        <div className="relative rounded-[1.5rem] border-[6px] border-[#CDEDE1] bg-white p-3 shadow-[0_20px_50px_rgba(166,213,247,0.2)]">
          <div className="rounded-[1rem] border border-[#A6D5F7] px-6 py-10 text-center">
            {guest.name && (
              <p className="text-xs uppercase tracking-[0.24em] text-[#000000]">Reserved for</p>
            )}
            {guest.name && <p className="mt-1 font-serif text-xl text-[#000000]">{guest.name}</p>}
            <p className="mt-5 font-script text-5xl text-[#000000]">Table</p>
            <p className="font-serif text-7xl font-light leading-none text-[#000000]">{guest.table}</p>
            <HeartFlourish className="mx-auto mt-4 h-5 w-36 text-[#000000]" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#000000]">
              {VENUES.hotel.area} · {VENUES.hotel.name}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
