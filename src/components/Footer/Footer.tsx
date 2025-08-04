import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <div className="mb-4 flex justify-center space-x-6 text-lg">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn />
          </Link>
        </div>
        © {new Date().getFullYear()} Yonan Technologies. All rights reserved.
      </div>
    </footer>
  );
}
