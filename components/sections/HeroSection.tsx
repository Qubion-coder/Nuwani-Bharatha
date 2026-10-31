'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { OrnateCrossIcon, HeartFlourish } from '@/components/icons/WeddingIcons';
import { COUPLE, PHOTOS } from '@/lib/wedding';

const PETAL_COLORS = ['#F7D6DE', '#A6D5F7', '#CDEDE1'];

const reveal = (inView: boolean, delay: number, y = 24) => ({
  initial: { opacity: 0, y },
  animate: inView ? { opacity: 1, y: 0 } : {},
  transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const petals = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 10,
        size: 8 + Math.random() * 10,
        drift: Math.random() * 80 - 40,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
      })),
    []
  );

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-[linear-gradient(135deg,#F7D6DE_0%,#FFFFFF_45%,#A6D5F7_100%)] md:h-auto md:min-h-[100svh]"
    >
      {/* Couple photo as the background, with a slow gentle zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: [1.08, 1, 1.08] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src={PHOTOS.hero}
          alt={`${COUPLE.bride} and ${COUPLE.groom}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%] md:object-[center_30%]"
        />
      </motion.div>

      {/* Pastel veils: photo stays visible edge to edge, with a light wash behind the text */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.55)_62%,rgba(247,214,222,0.75)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.5)_62%,rgba(247,214,222,0.65)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(166,213,247,0.3),transparent_55%)]" />

      {/* Soft pastel glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#CDEDE1] opacity-30 blur-[110px]" />
        <div className="absolute -right-24 -top-24 h-[24rem] w-[24rem] rounded-full bg-[#FFFFFF] opacity-40 blur-[90px]" />
      </div>

      {/* Drifting petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {petals.map((p) => (
          <motion.span
            key={p.id}
            className="absolute -top-10 block"
            style={{
              left: p.left,
              width: p.size,
              height: p.size * 1.4,
              background: p.color,
              borderRadius: '70% 30% 70% 30% / 70% 30% 70% 30%',
              boxShadow: '0 0 8px rgba(255,255,255,0.9)',
            }}
            animate={{ y: ['0vh', '110vh'], x: [0, p.drift, 0], rotate: [0, 180, 360], opacity: [0, 0.9, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Fine double frame */}
      <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#FFFFFF] sm:inset-5" />
      <div className="pointer-events-none absolute inset-5 rounded-[1.7rem] border border-[#A6D5F7] sm:inset-8" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-end px-8 pb-12 md:min-h-[100svh] md:flex-row md:items-center md:justify-end md:px-12 md:py-16">
        {/* Invitation text */}
        <div className="flex flex-col items-center text-center md:w-1/2">
          <motion.div {...reveal(inView, 0.2)} className="relative mb-5 hidden h-16 w-16 md:block md:h-20 md:w-20">
            <Image src="/logo.png" alt="" fill sizes="80px" className="object-contain" />
          </motion.div>

          <motion.div
            {...reveal(inView, 0.3)}
            className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF] bg-[#FFFFFF]/70 px-5 py-2 shadow-[0_8px_24px_rgba(247,214,222,0.6)] backdrop-blur-sm"
          >
            <OrnateCrossIcon className="h-4 w-4 text-[#000000]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#000000] sm:text-xs">
              Wedding Invitation
            </span>
            <OrnateCrossIcon className="h-4 w-4 text-[#000000]" />
          </motion.div>

          <motion.p {...reveal(inView, 0.4)} className="mt-7 hidden text-[11px] uppercase tracking-[0.35em] text-[#000000] md:block">
            Together with their families
          </motion.p>

          <motion.h1 {...reveal(inView, 0.5, 30)} className="mt-3 font-names text-6xl leading-[1.3] pt-2 text-[#000000] sm:text-7xl md:mt-3 md:text-7xl lg:text-8xl">
            {COUPLE.bride}
          </motion.h1>
          <motion.div {...reveal(inView, 0.6)} className="my-1 flex items-center gap-4">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#000000]/50" />
            <span className="font-serif text-2xl italic text-[#000000] md:text-3xl">&amp;</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#000000]/50" />
          </motion.div>
          <motion.h1 {...reveal(inView, 0.7, 30)} className="font-names text-6xl leading-[1.3] pt-2 text-[#000000] sm:text-7xl md:text-7xl lg:text-8xl">
            {COUPLE.groom}
          </motion.h1>

          <motion.p {...reveal(inView, 0.85)} className="mt-6 hidden max-w-md text-sm leading-relaxed text-[#000000] sm:text-base md:block">
            With grateful hearts before God, we invite you to celebrate the beginning of our forever.
          </motion.p>

          {/* Date row */}
          <motion.div
            {...reveal(inView, 1)}
            className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-y border-[#000000]/20 py-3 sm:gap-6 md:mt-8 md:py-4"
          >
            <span className="text-right text-[11px] font-semibold uppercase tracking-[0.3em] text-[#000000]">Friday</span>
            <span className="rounded-2xl bg-[#FFFFFF]/80 px-4 py-1.5 font-serif text-3xl leading-none md:px-5 md:py-2 md:text-4xl text-[#000000] shadow-[0_8px_20px_rgba(166,213,247,0.5)]">
              11
            </span>
            <span className="text-left text-[11px] font-semibold uppercase tracking-[0.3em] text-[#000000]">Dec 2026</span>
          </motion.div>

          <motion.p {...reveal(inView, 1.1)} className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#000000] md:mt-5 md:text-xs md:tracking-[0.22em]">
            St. Anthony&apos;s Church Colpetty
            <br />
            Cinnamon Grand Colombo
          </motion.p>

          <motion.div {...reveal(inView, 1.2)} className="mt-6 hidden md:block">
            <HeartFlourish className="h-7 w-56 text-[#000000]" />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
