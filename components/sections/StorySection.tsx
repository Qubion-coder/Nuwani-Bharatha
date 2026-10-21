'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HEADING_CLASS, UnderlinedWord } from '@/components/UnderlinedWord';
import { Heart, Stars, Sparkles, BookHeart, PartyPopper, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const storyItems = [
  {
    id: 0,
    chapter: "Chapter I",
    title: "How We Met",
    subtitle: "Where It Began",
    content: "What began as a simple hello slowly grew into deep love, trust, and a lifelong bond.",
    icon: Stars,
    color: "#F7D6DE",
    gradient: "from-[#F7D6DE] via-[#F7D6DE]/80 to-[#A6D5F7]/70",
    accentBg: "bg-[#F7D6DE]",
    tag: "Beginning",
  },
  {
    id: 1,
    chapter: "Chapter II",
    title: "Years Together",
    subtitle: "Growing Together",
    content: "Over the years, we supported each other through every season of life. Today, with grateful hearts, we are ready to begin our forever as husband and wife.",
    icon: BookHeart,
    color: "#A6D5F7",
    gradient: "from-[#A6D5F7] via-[#A6D5F7]/80 to-[#CDEDE1]/80",
    accentBg: "bg-[#A6D5F7]",
    tag: "Journey",
  },
  {
    id: 2,
    chapter: "Chapter III",
    title: "The Promise",
    subtitle: "A Sacred Yes",
    content: "With prayer and joy, we said yes to this new chapter. Your love and blessings make this day even more meaningful.",
    icon: Camera,
    color: "#CDEDE1",
    gradient: "from-[#CDEDE1] via-[#CDEDE1]/80 to-[#F7D6DE]/80",
    accentBg: "bg-[#CDEDE1]",
    tag: "Promise",
  },
  {
    id: 3,
    chapter: "Chapter IV",
    title: "Forever Begins",
    subtitle: "Our Wedding Day",
    content: "Now we celebrate our wedding day with the people we love. Thank you for being part of our story.",
    icon: PartyPopper,
    color: "#F7D6DE",
    gradient: "from-[#F7D6DE] via-[#A6D5F7]/80 to-[#CDEDE1]",
    accentBg: "bg-[#F7D6DE]",
    tag: "Forever",
  },
];

export default function StorySection() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  const prev = () => go(active === 0 ? storyItems.length - 1 : active - 1);
  const next = () => go(active === storyItems.length - 1 ? 0 : active + 1);

  const item = storyItems[active];
  const Icon = item.icon;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  };

  return (
    <section
      ref={ref}
      className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-20 overflow-hidden bg-[#FFFFFF]"
      style={{ minHeight: 'auto' }}
    >
      {/* ── Subtle background texture ── */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #F7D6DE 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />
      <AnimatePresence>
        <motion.div
          key={`tint-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(180deg, #FFFFFF 0%, ${storyItems[active].color} 100%)` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-transparent to-transparent pointer-events-none" />

      {/* Decorative watermark shape */}
      <div className="absolute bottom-0 right-0 h-48 w-48 select-none rounded-full bg-[radial-gradient(circle,rgba(247,214,222,0.22),transparent_72%)] opacity-40 blur-sm md:h-72 md:w-72 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-white shadow-md rounded-full px-5 py-2 mb-5">
            <Heart className="w-4 h-4 text-[#000000] fill-[#F7D6DE]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#000000]">Our Love Story</span>
            <Heart className="w-4 h-4 text-[#000000] fill-[#F7D6DE]" />
          </div>
          <h2 className={HEADING_CLASS}>
            Written in the <UnderlinedWord inView={inView}>Stars</UnderlinedWord>
          </h2>
        </motion.div>

        {/* ── Main Card + Side Panels Layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch"
        >

          {/* ── Left: Chapter Navigator (vertical pill list) ── */}
          <div className="hidden md:flex flex-col justify-center gap-3 w-36 shrink-0">
            {storyItems.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                className={`group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-300 border-2 ${active === i
                  ? 'shadow-lg border-white scale-105'
                  : 'bg-white/50 border-transparent hover:bg-white/70'
                  }`}
                style={active === i ? { backgroundColor: s.color } : undefined}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0 transition-all"
                  style={{ backgroundColor: active === i ? '#FFFFFF' : '#A6D5F7' }}
                />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#000000]">{s.chapter}</p>
                  <p className={`text-[11px] font-semibold leading-tight transition-colors ${active === i ? 'text-[#000000]' : 'text-[#000000]'}`}>
                    {s.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* ── Center: Main Story Card ── */}
          <div className="relative flex-1 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-[0_20px_60px_rgba(247,214,222,0.18)] border-2 border-white min-h-[340px] md:min-h-[380px]">

            {/* Gradient layer behind content */}
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={`bg-${active}`}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} pointer-events-none`}
              />
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full px-10 py-7 md:p-10">
              <AnimatePresence custom={dir} mode="wait">
                <motion.div
                  key={`content-${active}`}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-5 h-full justify-between"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#000000]">{item.chapter}</span>
                      <h3 className="font-serif text-3xl md:text-4xl text-[#000000] mt-1 leading-tight">{item.title}</h3>
                      <p className="text-sm font-semibold text-[#000000] mt-1">{item.subtitle}</p>
                    </div>
                    {/* Icon bubble */}
                    <div
                      className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: '#FFFFFF', border: `3px solid ${item.color}` }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: '#000000' }} />
                    </div>
                  </div>

                  {/* Story text */}
                  <p className="text-[#000000] text-base md:text-lg leading-relaxed font-medium flex-1 flex items-center">
                    {item.content}
                  </p>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="hidden md:flex items-center gap-1.5">
                      {storyItems.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => go(i)}
                          className="transition-all duration-300"
                        >
                          <div
                            className="rounded-full transition-all duration-300"
                            style={{
                              width: active === i ? 24 : 8,
                              height: 8,
                              backgroundColor: active === i ? item.color : '#F7D6DE',
                            }}
                          />
                        </button>
                      ))}
                    </div>

                    {/* Tag pill */}
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-[#000000] shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrow nav buttons — only inside card on md+ */}
            <button
              onClick={prev}
              className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full items-center justify-center shadow-md border border-white/80 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-[#000000]" />
            </button>
            <button
              onClick={next}
              className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full items-center justify-center shadow-md border border-white/80 transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-[#000000]" />
            </button>
          </div>

          {/* ── Right: Mini accent column ── */}
          <div className="hidden md:flex flex-col gap-4 w-28 shrink-0 justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`accent-${active}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Big icon */}
                <div
                  className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: '#FFFFFF', border: `4px solid ${item.color}` }}
                >
                  <Icon className="w-10 h-10" style={{ color: '#000000' }} />
                </div>

                {/* Progress fraction */}
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold" style={{ color: '#000000' }}>
                    {String(active + 1).padStart(2, '0')}
                  </p>
                  <p className="text-xs text-[#000000] font-semibold">
                    /{String(storyItems.length).padStart(2, '0')}
                  </p>
                </div>

                {/* Vertical line */}
                <div className="flex flex-col items-center gap-1">
                  {storyItems.map((_, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full transition-all duration-500"
                      style={{
                        height: active === i ? 28 : 8,
                        backgroundColor: active === i ? item.color : '#F7D6DE',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>

        {/* ── Mobile: arrow buttons row + chapter bar ── */}
        <div className="flex md:hidden flex-col items-center gap-4 mt-5">
          {/* Arrow row */}
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              className="w-11 h-11 bg-white hover:bg-white/90 rounded-full flex items-center justify-center shadow-md border border-white/80 transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-[#000000]" />
            </button>
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {storyItems.map((_, i) => (
                <button key={i} onClick={() => go(i)}>
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? 20 : 7,
                      height: 7,
                      backgroundColor: active === i ? item.color : '#F7D6DE',
                    }}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 bg-white hover:bg-white/90 rounded-full flex items-center justify-center shadow-md border border-white/80 transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-[#000000]" />
            </button>
          </div>

          {/* Chapter pills */}
          <div className="flex justify-center gap-2 flex-wrap">
            {storyItems.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                className={`text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-300 border-2 ${active === i
                  ? 'border-white shadow-md text-[#000000] scale-105'
                  : 'bg-white/50 border-transparent text-[#000000]'
                  }`}
                style={active === i ? { backgroundColor: s.color } : undefined}
              >
                {s.chapter}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
