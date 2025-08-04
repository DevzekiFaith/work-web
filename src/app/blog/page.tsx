import Link from 'next/link';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    title: 'Trends in Modern Architecture',
    excerpt: 'Explore how sustainability, smart tech, and minimalism are shaping the future of architecture.',
    slug: 'trends-in-modern-architecture',
  },
  {
    title: 'The Future of Construction Automation',
    excerpt: 'How AI and robotics are transforming building processes across the world.',
    slug: 'future-of-construction-automation',
  },
  {
    title: 'Upskilling for the Digital Workforce',
    excerpt: 'Why developing human capital is key in a software-driven business era.',
    slug: 'upskilling-digital-workforce',
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Insights & Blog</h1>
      <p className="text-center text-gray-600 mb-10">
        Discover insights from our experts in design, technology, and leadership.
      </p>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border rounded p-6 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-purple-600 font-medium hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}