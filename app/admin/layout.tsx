import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invitation Links · Admin',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
