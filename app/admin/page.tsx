'use client';

import { useEffect, useRef, useState } from 'react';
import { COUPLE } from '@/lib/wedding';
import {
  PREFIXES,
  type Prefix,
  buildDisplayName,
  buildInviteLink,
  buildInviteMessage,
} from '@/lib/invite';

const fieldClass =
  'w-full rounded-xl border border-[#A6D5F7] bg-white px-4 py-3 text-base text-[#000000] outline-none transition focus:border-[#000000]/40 focus:ring-2 focus:ring-[#A6D5F7]/60';
const buttonClass =
  'rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition disabled:cursor-not-allowed disabled:opacity-40';

export default function AdminPage() {
  const [prefix, setPrefix] = useState<Prefix>('Mr.');
  const [guestName, setGuestName] = useState('');
  const [table, setTable] = useState('');
  const [generated, setGenerated] = useState<{ displayName: string; table: string; link: string; message: string } | null>(null);
  const [notice, setNotice] = useState('');
  const noticeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(noticeTimer.current), []);

  const showNotice = (text: string) => {
    setNotice(text);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(''), 2200);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = buildDisplayName(prefix, guestName);
    if (!displayName) {
      showNotice('Please enter a guest name');
      return;
    }
    const link = buildInviteLink(window.location.origin, displayName, table);
    setGenerated({ displayName, table: table.trim(), link, message: buildInviteMessage(displayName, link) });
  };

  const copy = async (text: string, success: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotice(success);
    } catch {
      showNotice('Could not copy. Please select and copy manually.');
    }
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#CDEDE1_100%)] px-4 py-12 text-[#000000] md:py-16">
      <div className="mx-auto max-w-xl">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.3em]">Admin</p>
          <h1 className="mt-2 font-serif text-3xl md:text-4xl">Invitation Link Generator</h1>
          <p className="mt-2 font-names text-3xl">
            {COUPLE.bride} &amp; {COUPLE.groom}
          </p>
        </header>

        <form
          onSubmit={handleGenerate}
          className="mt-8 space-y-5 rounded-[1.5rem] border border-[#A6D5F7] bg-white/80 p-6 shadow-[0_20px_50px_rgba(166,213,247,0.25)] md:p-8"
        >
          <div>
            <label htmlFor="prefix" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em]">
              Select Prefix
            </label>
            <select
              id="prefix"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value as Prefix)}
              className={fieldClass}
            >
              {PREFIXES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="guestName" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em]">
              Guest Name
            </label>
            <input
              id="guestName"
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="e.g. Sanjaya"
              autoComplete="off"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="table" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em]">
              Table Number <span className="font-normal normal-case tracking-normal opacity-60">(optional)</span>
            </label>
            <input
              id="table"
              type="text"
              inputMode="numeric"
              value={table}
              onChange={(e) => setTable(e.target.value)}
              placeholder="e.g. 5"
              autoComplete="off"
              className={fieldClass}
            />
          </div>

          <button type="submit" className={`${buttonClass} w-full bg-[#000000] text-white hover:bg-[#000000]/85`}>
            Generate Link
          </button>
        </form>

        <section className="mt-6 space-y-5 rounded-[1.5rem] border border-[#A6D5F7] bg-white/80 p-6 md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Greeting</p>
            <p className="mt-2 font-serif text-xl">
              {generated ? `Dear ${generated.displayName} ❤️` : '—'}
            </p>
            {generated?.table && <p className="mt-1 text-sm">Table {generated.table}</p>}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Invitation Link</p>
            <p className="mt-2 break-all rounded-xl bg-[#A6D5F7]/20 px-4 py-3 font-mono text-sm">
              {generated ? generated.link : 'Generate a link to see it here'}
            </p>
          </div>

          {generated && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Full Message</p>
              <pre className="mt-2 max-h-80 overflow-auto whitespace-pre-wrap break-words rounded-xl bg-[#F7D6DE]/30 px-4 py-3 font-sans text-sm leading-relaxed">
                {generated.message}
              </pre>
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              disabled={!generated}
              onClick={() => generated && copy(generated.link, 'Link copied!')}
              className={`${buttonClass} border border-[#000000]/30 bg-white hover:bg-[#A6D5F7]/30`}
            >
              Copy Link Only
            </button>
            <button
              type="button"
              disabled={!generated}
              onClick={() => generated && copy(generated.message, 'Message copied!')}
              className={`${buttonClass} bg-[#A6D5F7] hover:bg-[#A6D5F7]/80`}
            >
              Copy Full Message
            </button>
          </div>
        </section>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-[#000000] px-5 py-2.5 text-sm text-white shadow-lg transition-all duration-300 ${
          notice ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        {notice}
      </div>
    </main>
  );
}
