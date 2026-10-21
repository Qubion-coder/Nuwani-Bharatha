import type { SVGProps } from 'react';

// Fine-line wedding icon set. All icons inherit `currentColor` and share the same
// stroke weight so they read as one family alongside the pastel theme.

type IconProps = SVGProps<SVGSVGElement>;

const soft = { fill: 'currentColor', fillOpacity: 0.14 } as const;

function Base({ children, viewBox = '0 0 48 48', strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const miniHeart = (cx: number, cy: number, s = 1) =>
  `M${cx} ${cy + 2.6 * s} C${cx - 3 * s} ${cy + 0.6 * s} ${cx - 3.5 * s} ${cy - 1.9 * s} ${cx - 1.7 * s} ${cy - 2.6 * s} C${cx - 0.8 * s} ${cy - 2.9 * s} ${cx - 0.2 * s} ${cy - 2.4 * s} ${cx} ${cy - 1.8 * s} C${cx + 0.2 * s} ${cy - 2.4 * s} ${cx + 0.8 * s} ${cy - 2.9 * s} ${cx + 1.7 * s} ${cy - 2.6 * s} C${cx + 3.5 * s} ${cy - 1.9 * s} ${cx + 3 * s} ${cy + 0.6 * s} ${cx} ${cy + 2.6 * s} Z`;

const sparkle = (cx: number, cy: number, r = 2) =>
  `M${cx} ${cy - r} V${cy + r} M${cx - r} ${cy} H${cx + r}`;

export function ChurchIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M10 42 V27 L24 18.5 L38 27 V42 Z" {...soft} stroke="none" />
      <path d="M24 2 V7 M21.8 4 H26.2" />
      <path d="M20.5 15 L24 8 L27.5 15 M20.5 15 V20.6 M27.5 15 V20.6" />
      <path d="M8 28 L24 18.5 L40 28" />
      <path d="M10 27 V42 M38 27 V42" />
      <circle cx="24" cy="27.5" r="2.4" />
      <path d="M20.5 42 V35.5 a3.5 3.5 0 0 1 7 0 V42" />
      <path d="M14 37 V33 a1.5 1.5 0 0 1 3 0 V37 Z M31 37 V33 a1.5 1.5 0 0 1 3 0 V37 Z" />
      <path d="M5 42 H43" />
    </Base>
  );
}

export function PoruwaIcon(props: IconProps) {
  return (
    <Base {...props}>
      {/* Kandyan canopy roof with upturned eaves */}
      <path d="M9 21 Q12 20.4 13 18 Q24 7 35 18 Q36 20.4 39 21 Z" {...soft} stroke="none" />
      <path d="M9 21 Q12 20.4 13 18 Q24 7 35 18 Q36 20.4 39 21 Z" />
      <path d="M24 10.6 V8.4" />
      <circle cx="24" cy="7" r="1.3" />
      {/* Garland */}
      <path d="M13 23 q2.75 3 5.5 0 q2.75 3 5.5 0 q2.75 3 5.5 0 q2.75 3 5.5 0" />
      {/* Pillars */}
      <path d="M13 21 V36 M35 21 V36" />
      <path d="M18 23.5 V36 M30 23.5 V36" strokeOpacity={0.45} />
      {/* Couple's heart */}
      <path d={miniHeart(24, 30, 1)} fill="currentColor" fillOpacity={0.35} />
      {/* Tiered platform */}
      <path d="M11 36 H37 V39 H11 Z" {...soft} />
      <path d="M8.5 39 H39.5 V42 H8.5 Z" />
      <path d="M6 42 H42" />
    </Base>
  );
}

export function ToastIcon(props: IconProps) {
  return (
    <Base {...props}>
      <g transform="rotate(12 17 26)">
        <path d="M13 8 L21 8 L20.2 18 Q17 22.5 13.8 18 Z" {...soft} />
        <path d="M13.6 13 H20.4" />
        <path d="M17 21.3 V36 M12.5 36.5 H21.5" />
      </g>
      <g transform="rotate(-12 31 26)">
        <path d="M27 8 L35 8 L34.2 18 Q31 22.5 27.8 18 Z" {...soft} />
        <path d="M27.6 13 H34.4" />
        <path d="M31 21.3 V36 M26.5 36.5 H35.5" />
      </g>
      <path d={sparkle(24, 3.2, 2)} />
      <path d={sparkle(14, 4.5, 1.2)} strokeOpacity={0.6} />
      <path d={sparkle(34, 4.5, 1.2)} strokeOpacity={0.6} />
    </Base>
  );
}

export function RingsIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="19" cy="31" r="9.5" />
      <circle cx="29" cy="31" r="9.5" />
      <path d="M25.5 18 H32.5 L29 22 Z" {...soft} />
      <path d="M25.5 18 L27 15.5 H31 L32.5 18 M27 15.5 L29 18 L31 15.5" />
      <path d={sparkle(36.5, 12.5, 1.6)} />
      <path d={sparkle(20, 15, 1.1)} strokeOpacity={0.6} />
    </Base>
  );
}

export function VenuePinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <ellipse cx="24" cy="43.5" rx="7" ry="1.6" strokeOpacity={0.5} />
      <path d="M24 42 C24 42 11 29 11 19 A13 13 0 0 1 37 19 C37 29 24 42 24 42 Z" {...soft} />
      <path d={miniHeart(24, 19, 1.6)} fill="currentColor" fillOpacity={0.35} />
    </Base>
  );
}

const candle = (x: number, y: number) =>
  `M${x - 2.2} ${y} H${x + 2.2} M${x} ${y} V${y - 3.6} M${x} ${y - 5} q1.3 -1.6 0 -3.2 q-1.3 1.6 0 3.2 Z`;

export function ChandelierIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M24 2 V8" />
      <circle cx="24" cy="10" r="2" />
      <path d="M24 12 V30" />
      <path d="M24 22 C18 26 12 25 11.5 19 M24 22 C30 26 36 25 36.5 19" />
      <path d="M24 18 C20.5 20 17.5 19 17 15 M24 18 C27.5 20 30.5 19 31 15" />
      <path d={`${candle(11.5, 19)} ${candle(36.5, 19)} ${candle(17, 15)} ${candle(31, 15)}`} />
      <path d="M24 30 L21.8 33.5 L24 38 L26.2 33.5 Z" {...soft} />
      <path d="M14.5 24.5 V27.5 M33.5 24.5 V27.5" />
      <circle cx="14.5" cy="28.6" r="0.9" />
      <circle cx="33.5" cy="28.6" r="0.9" />
      <path d="M17 42 C20 40.5 28 40.5 31 42" strokeOpacity={0.45} />
    </Base>
  );
}

export function LeafSprigIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M13 41 C19 33 25 23 34 10" />
      <path d="M19.5 32 C13 31 10.5 25 12.5 21.5 C17.5 22.5 20.5 26.5 19.5 32 Z" {...soft} />
      <path d="M24.5 25 C30.5 26 35.5 22 35.5 17 C30.5 17 25.5 20 24.5 25 Z" {...soft} />
      <path d="M27.5 19.5 C22.5 16.5 21.5 11.5 23.5 8 C27.5 10 29.5 14.5 27.5 19.5 Z" {...soft} />
      <path d="M32.5 13 C34.5 9 37.5 7.5 40.5 7.5 C39.5 11.5 36.5 13.5 32.5 13 Z" {...soft} />
    </Base>
  );
}

export function ClocheIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 34 A15 15 0 0 1 39 34 Z" {...soft} />
      <circle cx="24" cy="16.8" r="2.2" />
      <path d="M15 29.5 A10 10 0 0 1 20 23.5" strokeOpacity={0.6} />
      <path d="M5 34 H43" />
      <path d="M8.5 37.5 H39.5" />
      <path d={sparkle(38.5, 13, 1.6)} strokeOpacity={0.6} />
    </Base>
  );
}

export function OrnateCrossIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M24 8 V40 M15 17 H33" />
      <circle cx="24" cy="5.8" r="1.8" />
      <circle cx="12.8" cy="17" r="1.8" />
      <circle cx="35.2" cy="17" r="1.8" />
      <circle cx="24" cy="42.2" r="1.8" />
      <circle cx="24" cy="17" r="3.2" {...soft} />
    </Base>
  );
}

export function EnvelopeHeartIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="6.5" y="14" width="35" height="24" rx="2.5" {...soft} />
      <path d="M7 16 L24 28 L41 16" />
      <path d="M7.5 37 L19 25.5 M40.5 37 L29 25.5" strokeOpacity={0.6} />
      <path d={miniHeart(24, 7.5, 1.3)} fill="currentColor" fillOpacity={0.35} />
      <path d={sparkle(33, 6, 1.3)} strokeOpacity={0.6} />
    </Base>
  );
}

export function QuillIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M39 6 C39 18 31 30 16 32 C18 21 26 11 39 6 Z" {...soft} />
      <path d="M39 6 C29 12 21 21 16 32 L12.5 40" />
      <path d="M31 15.5 L26.5 15 M28 20 L23 19.8 M24.5 24.5 L20 24.6" strokeOpacity={0.6} />
      <path d="M7 42.5 C11 40.5 14.5 43.5 18.5 41.5 C21 40.3 23 41 25 42" />
    </Base>
  );
}

/** Wide ornamental divider: flourishes with a heart in the middle. */
export function HeartFlourish(props: IconProps) {
  return (
    <Base viewBox="0 0 120 24" strokeWidth={1.2} {...props}>
      <path d="M8 12 H38 M38 12 C44 12 46 6 50 7.5 C53 8.6 52 12.5 49.5 12" />
      <path d="M112 12 H82 M82 12 C76 12 74 6 70 7.5 C67 8.6 68 12.5 70.5 12" />
      <circle cx="5" cy="12" r="1.2" fill="currentColor" />
      <circle cx="115" cy="12" r="1.2" fill="currentColor" />
      <path d={miniHeart(60, 12, 2)} fill="currentColor" fillOpacity={0.3} />
    </Base>
  );
}
