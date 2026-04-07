import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Zeki Ubor | Consultation & Inquiries',
  description: 'Schedule a consultation or inquire about The Becoming Institute and Leadership Architecture programs. Submit a blueprint inquiry.',
  openGraph: {
    title: 'Consultation & Inquiries',
    description: 'Start the architectural assessment of your potential.',
    url: 'https://zekiubor.com/contact',
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
