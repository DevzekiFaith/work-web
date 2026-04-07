import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masterclasses & Experiences | Zeki Ubor',
  description: 'Join intensive architectural experiences and masterclasses. Deconstruct limits and rebuild your capacity for global impact with Zeki Ubor.',
  openGraph: {
    title: 'Experiences & Masterclasses',
    description: 'Deconstruct your limits and rebuild your potential.',
    url: 'https://zekiubor.com/events',
  }
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "Becoming a Person of Interest Masterclass",
    organizer: {
      "@type": "Person",
      name: "Zeki Ubor",
    }
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {children}
    </>
  );
}
