'use client';

import { motion } from 'framer-motion';

// Shared heading style: the last word of each section title gets a hand-drawn wave underline.
export const HEADING_CLASS = 'font-serif text-4xl font-medium tracking-tight text-[#000000] sm:text-5xl md:text-7xl';

export function UnderlinedWord({ children, inView }: { children: React.ReactNode; inView: boolean }) {
  return (
    <span className="relative inline-block text-[#000000]">
      {children}
      <motion.svg
        className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
      >
        <motion.path
          d="M0 10 Q 25 20, 50 10 T 100 10"
          fill="none"
          stroke="#A6D5F7"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.svg>
    </span>
  );
}
