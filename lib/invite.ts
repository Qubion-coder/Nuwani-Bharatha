// Builds personalised invite names, links and WhatsApp messages for the /admin page.

import { COUPLE } from '@/lib/wedding';

export const PREFIXES = ['Mr.', 'Mrs.', 'Miss', 'Mr. & Mrs.', 'Family', 'Dear'] as const;
export type Prefix = (typeof PREFIXES)[number];

// "Dear" is not part of the name: the message greeting already starts with "Dear".
export function buildDisplayName(prefix: Prefix, guestName: string): string {
  const name = guestName.trim().replace(/\s+/g, ' ');
  if (!name) return '';
  if (prefix === 'Family') return `${name} and Family`;
  if (prefix === 'Dear') return name;
  return `${prefix} ${name}`;
}

export function buildInviteLink(baseUrl: string, displayName: string, table = ''): string {
  const link = `${baseUrl.replace(/\/+$/, '')}/${encodeURIComponent(displayName)}`;
  const tableNo = table.trim();
  return tableNo ? `${link}?table=${encodeURIComponent(tableNo)}` : link;
}

export function buildInviteMessage(displayName: string, link: string): string {
  return `Dear ${displayName} ❤️

With joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${link}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ ${COUPLE.groom} & ${COUPLE.bride}`;
}
