'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useGuest } from '@/hooks/use-guest';
import { COUPLE } from '@/lib/wedding';

interface EnvelopeOpenerProps {
  onEnvelopeOpen: () => void;
}

const BG_IMAGE = encodeURI('/Pastel Lotus Ceremony Procession.png');
const INTRO_VIDEO = '/intro-sunset-drive.mp4';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function EnvelopeOpener({ onEnvelopeOpen }: EnvelopeOpenerProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const finishedRef = useRef(false);
  const guest = useGuest();

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setShowContent(true);
    onEnvelopeOpen();
  };

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Start the intro video inside the tap so mobile browsers allow playback
    const video = videoRef.current;
    if (!video) {
      setTimeout(finish, 900);
      return;
    }
    video.currentTime = 0;
    video.play().catch(() => setTimeout(finish, 900));
  };

  return (
    <AnimatePresence mode="wait">
      {!showContent && (
        <motion.section
          key="envelope-section"
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.9, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 overflow-hidden bg-[#FFFFFF]"
        >
          {/* Soft blurred fill for wide screens */}
          <div className="absolute inset-0 hidden md:block">
            <Image src={BG_IMAGE} alt="" fill priority sizes="100vw" className="scale-110 object-cover opacity-70 blur-2xl" />
            <div className="absolute inset-0 bg-[#FFFFFF]/40" />
          </div>

          {/* Intro video, revealed as the cover fades away */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpening ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute inset-0 flex justify-center"
          >
            <video
              ref={videoRef}
              src={INTRO_VIDEO}
              muted
              playsInline
              preload="auto"
              onEnded={finish}
              onError={() => isOpening && finish()}
              className="h-full w-full object-cover md:aspect-[720/1280] md:w-auto md:shadow-[0_30px_80px_rgba(166,213,247,0.55)]"
            />
          </motion.div>

          {isOpening && (
            <motion.button
              type="button"
              onClick={finish}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 rounded-full border border-[#FFFFFF]/80 bg-[#FFFFFF]/70 px-6 py-2 font-serif text-[11px] uppercase tracking-[0.3em] text-[#000000] backdrop-blur-sm transition-colors hover:bg-[#F7D6DE]"
            >
              Skip Intro
            </motion.button>
          )}

          {/* Invitation panel: full screen on mobile, portrait card on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isOpening ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
            transition={{ duration: isOpening ? 0.9 : 1.2, ease: 'easeOut' }}
            className={`relative mx-auto h-full w-full overflow-hidden md:aspect-[906/1735] md:w-auto md:shadow-[0_30px_80px_rgba(166,213,247,0.55)] ${isOpening ? 'pointer-events-none' : ''}`}
          >
            <Image
              src={BG_IMAGE}
              alt="Pastel lotus ceremony procession"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vh"
              className="object-cover object-center"
            />

            <div className="relative z-10 flex h-full flex-col items-center justify-center-safe overflow-y-auto px-8 pb-32 pt-6 text-center [@media(min-height:800px)]:pb-[18%]">
              <motion.div {...fadeUp(0.05)} className="relative mb-4 h-24 w-24 shrink-0 sm:h-28 sm:w-28 [@media(max-height:740px)]:mb-2 [@media(max-height:740px)]:h-16 [@media(max-height:740px)]:w-16">
                <Image src="/logo.png" alt="Nuwani & Bharatha monogram" fill priority sizes="112px" className="object-contain drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)]" />
              </motion.div>
              <motion.p {...fadeUp(0.2)} className="font-serif text-xs uppercase tracking-[0.3em] text-[#000000] sm:text-sm">
                The Wedding Of
              </motion.p>

              <motion.h1
                {...fadeUp(0.4)}
                className="mt-6 font-names text-6xl leading-[1.3] pt-2 text-[#000000] sm:text-7xl [@media(max-height:740px)]:mt-3 [@media(max-height:740px)]:text-5xl"
              >
                {COUPLE.bride}
              </motion.h1>
              <motion.p {...fadeUp(0.55)} className="my-1 font-names text-6xl leading-none text-[#000000] sm:text-7xl [@media(max-height:740px)]:text-5xl">
                &amp;
              </motion.p>
              <motion.h1
                {...fadeUp(0.7)}
                className="font-names text-6xl leading-[1.3] pt-2 text-[#000000] sm:text-7xl [@media(max-height:740px)]:text-5xl"
              >
                {COUPLE.groom}
              </motion.h1>

              <motion.p {...fadeUp(0.9)} className="mt-10 font-serif text-lg tracking-[0.35em] [@media(max-height:740px)]:mt-5 text-[#000000] sm:text-xl">
                11 . 12 . 2026
              </motion.p>

              {guest.name && (
                <motion.p {...fadeUp(1.0)} className="mt-6 max-w-xs font-serif text-sm italic leading-relaxed text-[#000000] [@media(max-height:740px)]:mt-3">
                  We cordially invite{' '}
                  <span className="not-italic font-semibold tracking-wide">{guest.name}</span>{' '}
                  to celebrate our special day with us.
                </motion.p>
              )}

              <motion.button
                {...fadeUp(1.1)}
                type="button"
                onClick={handleOpen}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative mt-10 shrink-0 overflow-hidden [@media(max-height:740px)]:mt-6 border border-[#000000]/70 bg-[#FFFFFF]/55 px-10 py-3.5 font-serif text-xs uppercase tracking-[0.3em] text-[#000000] shadow-[0_10px_30px_rgba(247,214,222,0.6)] backdrop-blur-sm transition-colors hover:bg-[#F7D6DE]/70"
              >
                <span className="relative z-10">Open Invitation</span>
                <motion.span
                  className="absolute inset-y-0 left-[-40%] w-[40%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#FFFFFF]/80 to-transparent"
                  animate={{ left: ['-40%', '140%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
