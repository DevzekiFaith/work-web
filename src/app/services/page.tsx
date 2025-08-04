import Header from '@/components/Header/Header';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import Footer from '@/components/Footer/Footer';

const services = [
  {
    title: 'Architectural Design',
    description: 'Creative and functional designs for modern infrastructure.',
    href: '/services/architectural',
    images: [
      '/images/services/architectural-1.jpg',
      '/images/services/architectural-2.jpg',
    ],
  },
  {
    title: 'Construction',
    description: 'Reliable and efficient building from ground to finish.',
    href: '/services/construction',
    images: [
      '/images/services/construction-1.jpg',
      '/images/services/construction-2.jpg',
    ],
  },
  {
    title: 'Space Planning',
    description: 'Maximizing space for productivity and comfort.',
    href: '/services/space-planning',
    images: [
      '/images/services/space-1.jpg',
      '/images/services/space-2.jpg',
    ],
  },
  {
    title: 'Software Solutions',
    description: 'Custom tech solutions to streamline your business.',
    href: '/services/software-solutions',
    images: [
      '/images/services/software-1.jpg',
      '/images/services/software-2.jpg',
    ],
  },
  {
    title: 'Human Capacity & Capital Development',
    description: 'Training and strategies to grow your team and vision.',
    href: '/services/human-capacity',
    images: [
      '/images/services/human-1.jpg',
      '/images/services/human-2.jpg',
    ],
  },
];

export default function Services() {
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
