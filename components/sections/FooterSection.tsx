'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, MapPin, Phone } from 'lucide-react';
import { RingsIcon } from '@/components/icons/WeddingIcons';
import { CONTACTS, VENUES } from '@/lib/wedding';

const LIVE_LOCATION_URL = VENUES.church.mapUrl;

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#A6D5F7_0%,#CDEDE1_100%)] border-t border-[#A6D5F7]/25 pt-20 pb-8 text-[#000000]">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(166,213,247,0.14),transparent_52%)]" />
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#A6D5F7]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#CDEDE1]/10 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(166,213,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(166,213,247,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 grid grid-cols-1 gap-8">

          {/* Brand/Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center text-center"
          >
            <div className="mb-5 inline-flex items-center justify-center gap-2 self-center rounded-full border border-[#A6D5F7]/35 bg-white/70 px-4 py-2 backdrop-blur-sm">
              <RingsIcon className="h-4 w-4 text-[#000000]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#000000]">Thank You For Your Blessings</span>
            </div>

            <div className="relative mx-auto mb-6 h-32 w-32 md:h-40 md:w-40">
              <Image src="/logo.png" alt="Nuwani & Bharatha monogram" fill sizes="160px" className="object-contain" />
            </div>
            <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-[#000000]">
              We look forward to sharing our joy and celebrating our union surrounded by the people we love most.
            </p>
            <a
              href={LIVE_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 self-center rounded-full border border-[#A6D5F7]/45 bg-white/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#000000] transition-colors hover:bg-[#A6D5F7]/10"
            >
              <MapPin className="h-4 w-4" />
              St. Anthony's Church - Kollupitiya
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {CONTACTS.map((contact) => (
                <a
                  key={contact.name}
                  href={`tel:+${contact.intl}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#A6D5F7]/45 bg-white/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#000000] transition-colors hover:bg-[#A6D5F7]/10"
                >
                  <Phone className="h-4 w-4" />
                  {contact.name} · {contact.phone}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="group relative mb-10 flex w-full items-center justify-center overflow-hidden border-y border-[#A6D5F7]/10 py-10"
        >
          <div className="absolute inset-0 w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#A6D5F7]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite]" />

          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-center font-light tracking-wide bg-gradient-to-r text-[#000000]">
            A New Chapter Begins
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 px-4 text-center text-xs font-light tracking-[0.1em] text-[#000000] md:flex-row md:text-left">
          <div className="space-y-2">
            <p className="!text-[#000000]">
              &copy; {new Date().getFullYear()} NUWANI & BHARATHA. All rights reserved.
            </p>
            <p className="!text-[#000000]">
              Design and created by <span className="!text-[#000000]">InviteMint</span> | Connect WhatsApp: <a href="https://wa.me/94707819074" target="_blank" rel="noopener noreferrer" className="!text-[#000000] hover:underline">+94 70 781 9074</a>
            </p>
          </div>
          <p className="flex items-center justify-center gap-1.5 whitespace-nowrap">
            Crafted with <Heart className="h-3 w-3 fill-current text-[#000000] animate-pulse" /> for our special day
          </p>
        </div>

      </div>
    </footer>
  );
}
