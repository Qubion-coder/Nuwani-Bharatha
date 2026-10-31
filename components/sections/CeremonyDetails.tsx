'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HEADING_CLASS, UnderlinedWord } from '@/components/UnderlinedWord';
import { Clock3, Heart } from 'lucide-react';
import { ChurchIcon, PoruwaIcon, RingsIcon, VenuePinIcon } from '@/components/icons/WeddingIcons';
import Image from 'next/image';
import { PHOTOS } from '@/lib/wedding';

export default function CeremonyDetails() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const detailGroups = [
    {
      key: 'church',
      title: 'Church',
      icon: ChurchIcon,
      timeLabel: 'Church Time',
      timeValue: '8:15 AM',
      timeSub: 'Holy wedding ceremony',
      venueLabel: 'Church Venue',
      venueValue: "St. Anthony's Church - Colpetty",
      venueSub: 'Live location available',
    },
    {
      key: 'poruwa-reception',
      title: 'Poruwa & Reception',
      icon: PoruwaIcon,
      timeLabel: 'Poruwa & Reception Time',
      timeValue: '9:45 AM · 10:15 AM',
      timeSub: 'Poruwa ceremony at 9:45 AM, followed by the reception at 10:15 AM',
      venueLabel: 'Poruwa & Reception Venue',
      venueValue: 'Cinnamon Grand Colombo - Oak Hall',
      venueSub: 'Live location available',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#CDEDE1_0%,#FFFFFF_45%,#CDEDE1_100%)] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.07] mix-blend-multiply"
          style={{ backgroundImage: `radial-gradient(circle at 20px 20px, #A6D5F7 1.1px, transparent 1.1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#A6D5F7]/10 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-[#F7D6DE]/10 blur-[120px]" />
        <motion.div
          animate={{ y: [0, -22, 0], x: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-12 h-40 w-40 rounded-full border border-[#A6D5F7]/30 bg-[#A6D5F7]/10 blur-[1px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-24">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-[420px] sm:h-[520px] md:h-[600px] w-full max-w-[420px] overflow-hidden rounded-[30px] md:rounded-t-[200px] md:rounded-b-[30px] border border-[#A6D5F7]/60 shadow-[0_20px_50px_rgba(166,213,247,0.2)] bg-[linear-gradient(180deg,#A6D5F7_0%,#F7D6DE_55%,#A6D5F7_100%)]"
            >
              <div className="absolute -inset-6 rounded-t-[220px] rounded-b-[40px] border border-[#A6D5F7]/20 hidden md:block" />
              <div className="absolute -inset-3 rounded-t-[210px] rounded-b-[35px] border border-[#A6D5F7]/40 hidden md:block" />

              <Image
                src={PHOTOS.ceremony}
                alt="Nuwani and Bharatha"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.75)_70%,rgba(255,255,255,0.9)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(166,213,247,0.22),transparent_48%)]" />
              <div className="absolute inset-0 opacity-[0.14]"
                style={{ backgroundImage: 'linear-gradient(rgba(166,213,247,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(166,213,247,0.55) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />

              <div className="relative z-10 flex h-full flex-col items-center justify-end px-8 pb-10 text-center md:pb-12 text-[#000000]">
                <h3 className="font-serif text-4xl text-[#000000] drop-shadow-[0_4px_16px_rgba(255,255,255,0.75)]">
                  NUWANI <span className="text-[#000000]">&amp;</span> BHARATHA
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#000000]">
                  "Love is patient, love is kind." Join us as we exchange vows in faith, gratitude, and joy.
                </p>
                <div className="mt-8 h-px w-28 bg-[#A6D5F7]/50" />
                <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#000000]">11th December 2026</p>
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-2 sm:-right-6 md:-right-10 top-20 md:top-40 flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full border border-[#A6D5F7]/40 bg-[#F7D6DE]/80 shadow-[0_0_30px_rgba(166,213,247,0.3)] backdrop-blur-md"
              >
                <div className="text-center">
                  <Heart className="mx-auto h-6 w-6 md:h-8 md:w-8 text-[#000000] fill-[#A6D5F7]/20" />
                  <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#000000]">Forever</span>
                </div>
              </motion.div>

              {/* Sparkle effects */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-10 top-20 h-3 w-3 rounded-full bg-[#FFFFFF] blur-[2px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute right-20 bottom-32 h-4 w-4 rounded-full bg-[#A6D5F7] blur-[2px]"
              />
            </motion.div>
          </motion.div>

          {/* Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#A6D5F7]/30 bg-[#FFFFFF]/50 px-5 py-2 backdrop-blur-sm">
              <RingsIcon className="h-5 w-5 text-[#000000]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#000000] font-medium">
                The Sacred Celebration
              </span>
            </div>

            <h2 className={`mb-10 leading-snug ${HEADING_CLASS}`}>
              Wedding <br />
              <UnderlinedWord inView={inView}>Ceremony</UnderlinedWord>
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-[#000000] max-w-lg">
              With immense joy in our hearts, we invite you to share our happiness as we exchange our vows before God. Join us for a sacred celebration of faith, love, and lifelong commitment.
            </p>

            <div className="flex flex-col gap-5">
              {detailGroups.map((group, index) => {
                const GroupIcon = group.icon;
                return (
                  <motion.div
                    key={group.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(166,213,247,0.08)' }}
                    className="group relative overflow-hidden rounded-2xl border border-[#A6D5F7]/25 bg-[linear-gradient(120deg,rgba(255,255,255,0.72)_0%,rgba(247,214,222,0.55)_100%)] p-5 shadow-lg backdrop-blur-md transition-all cursor-default"
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-[#A6D5F7] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />

                    <div className="mb-4 flex items-center gap-3">
                      <GroupIcon className="h-8 w-8 text-[#000000]" />
                      <p className="text-xs uppercase tracking-[0.25em] text-[#000000]">{group.title} Details</p>
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#A6D5F7]/30 bg-gradient-to-br from-[#F7D6DE] to-[#FFFFFF] shadow-inner">
                          <Clock3 className="h-5 w-5 text-[#000000]" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-[#000000] mb-1">{group.timeLabel}</p>
                          <h3 className="font-serif text-2xl text-[#000000]">{group.timeValue}</h3>
                          <p className="text-sm text-[#000000] mt-1">{group.timeSub}</p>
                        </div>
                      </div>

                      <div className="h-px w-full bg-[#A6D5F7]/20" />

                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#A6D5F7]/30 bg-gradient-to-br from-[#F7D6DE] to-[#FFFFFF] shadow-inner">
                          <VenuePinIcon className="h-6 w-6 text-[#000000]" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-[#000000] mb-1">{group.venueLabel}</p>
                          <h3 className="font-serif text-2xl text-[#000000]">{group.venueValue}</h3>
                          <p className="text-sm text-[#000000] mt-1">{group.venueSub}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 overflow-hidden rounded-2xl border border-[#A6D5F7]/20 bg-[linear-gradient(135deg,rgba(166,213,247,0.4),rgba(255,255,255,0.8))] p-6 shadow-2xl backdrop-blur-lg relative"
            >
              <div className="absolute right-0 top-0 opacity-10">
                <RingsIcon className="w-32 h-32 -mt-8 -mr-8 text-[#000000]" />
              </div>

              <h4 className="text-xs uppercase tracking-widest text-[#000000] mb-3 font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#A6D5F7]"></span> Guest Notes
              </h4>
              <div className="space-y-2">
                <p className="text-[#000000] text-sm md:text-base"><span className="text-[#000000]">Church:</span> Ceremony begins at 8:15 AM at St. Anthony's Church, Colpetty</p>
                <p className="text-[#000000] text-sm md:text-base"><span className="text-[#000000]">Poruwa &amp; Reception:</span> 9:45 AM &amp; 10:15 AM at Cinnamon Grand Colombo - Oak Hall</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}