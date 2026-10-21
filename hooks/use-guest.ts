'use client';

import { useEffect, useState } from 'react';

export interface GuestInfo {
  name: string;
  table: string;
}

/**
 * Reads personalised invite details from the URL, e.g.
 *   https://site/?guest=Kamal%20%26%20Family&table=5
 * Both values are optional.
 */
export function useGuest(): GuestInfo {
  const [guest, setGuest] = useState<GuestInfo>({ name: '', table: '' });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuest({
      name: (params.get('guest') || params.get('name') || '').trim(),
      table: (params.get('table') || '').trim(),
    });
  }, []);

  return guest;
}
