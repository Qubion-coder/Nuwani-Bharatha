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

// Apps Script web app (code.gs) that writes to the RSVP and Wishes sheets
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbywhV3jhUlkC58vUP8G6ByA7s7M1KrPhU8_VuGXKUIHN6PU4ldeidAbtF_ojF4HcveyeQ/exec';

export async function submitToGoogleSheets(payload: SubmitPayload): Promise<void> {
  await fetch(SCRIPT_URL, {
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
