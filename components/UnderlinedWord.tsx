'use client';

// Shared heading style: the last word of each section title is wrapped for emphasis.
export const HEADING_CLASS = 'font-serif text-4xl font-medium tracking-tight text-[#000000] sm:text-5xl md:text-7xl';

export function UnderlinedWord({ children, inView }: { children: React.ReactNode; inView: boolean }) {
  return (
    <span className="relative inline-block text-[#000000]">
      {children}
    </span>
  );
}
