import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Human Architecture Audit | Zeki Ubor',
  description: 'Take the Human Architecture Audit to discover which of the 5 layers of potential is holding you back. A diagnostic tool for visionaries.',
  openGraph: {
    title: 'Human Architecture Audit',
    description: 'A precision assessment for modern visionaries.',
    url: 'https://zekiubor.com/audit',
  }
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
