import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useMemo } from 'react';

interface BlogPostContent {
  title: string;
  content: string;
}

const posts: Record<string, BlogPostContent> = {
  'trends-in-modern-architecture': {
    title: 'Trends in Modern Architecture',
    content: 'Explore how sustainability, smart tech, and minimalism are shaping the future of architecture...'
  },
  'future-of-construction-automation': {
    title: 'The Future of Construction Automation',
    content: 'How AI and robotics are transforming building processes across the world...'
  },
  'upskilling-digital-workforce': {
    title: 'Upskilling for the Digital Workforce',
    content: 'Why developing human capital is key in a software-driven business era...'
  }
};

export default function BlogPost() {
  const router = useRouter();
  const slug = useMemo(() => {
    const query: ParsedUrlQuery = router.query;
    return typeof query.slug === 'string' ? query.slug : '';
  }, [router.query]);

  const post = posts[slug];

  if (!post) return <div className="max-w-4xl mx-auto px-4 py-12 text-center">Post not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
}