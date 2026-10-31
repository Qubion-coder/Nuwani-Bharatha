'use client';

import { useEffect, useState } from 'react';

export interface GuestInfo {
  name: string;
  table: string;
}

const decodeSegment = (segment: string) => {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
};

/**
 * Reads personalised invite details from the URL, e.g.
 *   https://site/Mr.%20Sanjaya
 *   https://site/?guest=Kamal%20%26%20Family&table=5
 * Both values are optional.
 */
export function useGuest(): GuestInfo {
  const [guest, setGuest] = useState<GuestInfo>({ name: '', table: '' });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pathName = decodeSegment(window.location.pathname.split('/').filter(Boolean)[0] || '');
    setGuest({
      name: (params.get('guest') || params.get('name') || pathName).trim(),
      table: (params.get('table') || '').trim(),
    });
  }, []);

  return guest;
}
