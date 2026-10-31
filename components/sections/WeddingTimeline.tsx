'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car, Church, Sparkles, Utensils, Wine } from 'lucide-react';
import { HEADING_CLASS, UnderlinedWord } from '@/components/UnderlinedWord';
import { HeartFlourish } from '@/components/icons/WeddingIcons';
import { WEDDING_DATE_LABEL } from '@/lib/wedding';

const events = [
  { time: '8.15 AM', title: 'Church Ceremony', icon: Church, tint: '#A6D5F7' },
  { time: '9.45 AM', title: 'Poruwa Ceremony', icon: Sparkles, tint: '#F7D6DE' },
  { time: '10.15 AM', title: 'Reception', icon: Wine, tint: '#CDEDE1' },
  { time: '12.30 PM', title: 'Lunch', icon: Utensils, tint: '#A6D5F7' },
  { time: '3.30 PM', title: 'End of the Ceremony', icon: Car, tint: '#F7D6DE' },
];

export default function WeddingTimeline() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

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
          className="mb-16 text-center md:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#000000]">{WEDDING_DATE_LABEL}</p>
          <h2 className={`mt-3 ${HEADING_CLASS}`}>
            Wedding Day <UnderlinedWord inView={inView}>Timeline</UnderlinedWord>
          </h2>
          <HeartFlourish className="mx-auto mt-8 h-6 w-48 text-[#000000]" />
        </motion.div>

        <div className="relative">
          {/* Vertical line runs down the centre, behind the icons and cards */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#A6D5F7] via-[#F7D6DE] to-[#CDEDE1]" />

          <div className="space-y-16">
            {events.map((event, i) => {
              const Icon = event.icon;
              const onRight = i % 2 === 1;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: onRight ? 40 : -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                  className={`relative flex flex-col items-center ${onRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  <div
                    className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-[#000000] shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2"
                    style={{ backgroundColor: event.tint }}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>

                  <div className={`relative z-[1] mt-6 w-full text-center md:mt-0 md:w-1/2 ${onRight ? 'md:pl-14 md:text-left' : 'md:pr-14 md:text-right'}`}>
                    <div className="rounded-2xl border border-[#A6D5F7]/40 bg-white p-6 shadow-[0_18px_50px_rgba(166,213,247,0.18)]">
                      <div className="font-serif text-2xl font-medium text-[#000000] md:text-3xl">{event.time}</div>
                      <h3 className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#000000]">{event.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
