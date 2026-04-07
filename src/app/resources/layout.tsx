import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Architecture Library | Resources by Zeki Ubor',
  description: 'Access the Visionary Vault, The Architecture Letter, and Becoming Sessions. Rebuild your structural capacity for global impact.',
  openGraph: {
    title: 'The Architecture Library',
    description: 'Curated resources for the modern visionary.',
    url: 'https://zekiubor.com/resources',
  }
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
