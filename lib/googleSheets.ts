export type GoogleSheetFormType = 'rsvp' | 'wish';

interface SubmitPayload {
  formType: GoogleSheetFormType;
  name: string;
  guests?: string;
  meal?: string;
  dietary?: string;
  table?: string;
  message?: string;
}

export async function submitToGoogleSheets(payload: SubmitPayload): Promise<void> {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    throw new Error('Missing NEXT_PUBLIC_GOOGLE_SCRIPT_URL');
  }

  await fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
      source: 'wedding-site',
    }),
  });
}
