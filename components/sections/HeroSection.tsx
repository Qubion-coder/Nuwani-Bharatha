'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { OrnateCrossIcon, HeartFlourish } from '@/components/icons/WeddingIcons';
import { PHOTOS } from '@/lib/wedding';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${PHOTOS.hero}")`, backgroundPosition: 'center 30%' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(247,214,222,0.7)_55%,rgba(255,255,255,0.88)_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(166,213,247,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(166,213,247,0.25) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F7D6DE]/55 bg-white/60 px-5 py-2 backdrop-blur-sm"
        >
          <OrnateCrossIcon className="h-5 w-5 text-[#000000]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#000000] sm:text-xs">
            Holy Matrimony
          </span>
          <OrnateCrossIcon className="h-5 w-5 text-[#000000]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="font-serif text-4xl font-light leading-tight tracking-[0.08em] text-[#000000] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          NUWANI <span className="text-[#000000]">&amp;</span> BHARATHA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-5 max-w-3xl text-sm leading-relaxed text-[#000000] sm:text-base md:text-lg"
        >
          With grateful hearts before God, we invite you to witness our blessed marriage ceremony and celebrate this joyful beginning with our families.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 rounded-3xl border border-[#F7D6DE]/45 bg-white/60 px-6 py-5 backdrop-blur-sm sm:px-10"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#000000]">Wedding Date</p>
          <p className="mt-2 font-serif text-2xl text-[#000000] sm:text-3xl">11th December 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-8 flex items-center gap-3 text-[#000000]"
        >
          <HeartFlourish className="h-7 w-56" />
        </motion.div>
      </div>
    </section>
  );
}
