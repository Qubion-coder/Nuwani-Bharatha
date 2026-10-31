'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HEADING_CLASS, UnderlinedWord } from '@/components/UnderlinedWord';
import { HeartFlourish } from '@/components/icons/WeddingIcons';
import { COUPLE, PARENTS, PHOTOS } from '@/lib/wedding';

const sides = [
  {
    key: 'bride',
    role: 'The Bride',
    name: COUPLE.brideFull,
    relation: 'Beloved daughter of',
    parents: PARENTS.bride,
    photo: PHOTOS.bride,
    tint: 'from-[#F7D6DE] via-[#F7D6DE]/80',
    accent: '#000000',
  },
  {
    key: 'groom',
    role: 'The Groom',
    name: COUPLE.groomFull,
    relation: 'Beloved son of',
    parents: PARENTS.groom,
    photo: PHOTOS.groom,
    tint: 'from-[#A6D5F7] via-[#A6D5F7]/80',
    accent: '#000000',
  },
];

export default function FamiliesSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(166,213,247,0.6) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className={HEADING_CLASS}>
            Together with Our <UnderlinedWord inView={inView}>Families</UnderlinedWord>
          </h2>
          <HeartFlourish className="mx-auto mt-8 h-6 w-48 text-[#000000]" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#000000]">
            With joy and gratitude, our families request the pleasure of your company as two hearts become one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {sides.map((side, i) => (
            <motion.div
              key={side.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[2rem] border border-[#F7D6DE] p-8 text-center shadow-[0_18px_50px_rgba(166,213,247,0.08)] md:min-h-[600px] md:p-10"
            >
              {/* Portrait fills the card; a pastel fade at the bottom keeps the text readable */}
              <Image src={side.photo} alt={side.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
              <div className={`absolute inset-0 bg-gradient-to-t ${side.tint} to-transparent to-[65%]`} />
              <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-white/90" />
              <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em]" style={{ color: side.accent }}>
                {side.role}
              </p>
              <h3 className="mt-3 font-script text-5xl leading-tight text-[#000000]">{side.name}</h3>
              <HeartFlourish className="mx-auto my-5 h-5 w-32" style={{ color: side.accent }} />
              <p className="text-xs uppercase tracking-[0.2em] text-[#000000]">{side.relation}</p>
              <p className="mt-3 font-serif text-lg leading-relaxed text-[#000000] md:text-xl">
                {side.parents.split(' & ').map((parent, j, all) => (
                  <span key={parent} className="block">
                    {parent}{j < all.length - 1 && ' &'}
                  </span>
                ))}
              </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
