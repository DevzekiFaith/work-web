'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/navigation';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  images?: string[];
  features?: string[];
}

export default function ServiceCard({ title, description, href, image, images, features }: ServiceCardProps) {
  const displayImages = images || (image ? [image] : []);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full text-left block transform transition duration-300 ease-in-out border border-gray-200 rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl bg-white"
      >
        {displayImages.length > 0 && (
          <div className="w-full h-48 relative">
            <Swiper className="w-full h-full">
              {displayImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image src={img} alt={`${title} ${index + 1}`} layout="fill" objectFit="cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          {features && features.length > 0 && (
            <ul className="list-disc list-inside text-sm text-gray-500">
              {features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
            <Dialog.Title className="text-xl font-bold mb-4">{title}</Dialog.Title>
            {displayImages.length > 0 && (
              <div className="mb-4 aspect-video relative">
                <Swiper className="w-full h-full">
                  {displayImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image src={img} alt={`${title} ${index + 1}`} layout="fill" objectFit="cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            <p className="text-gray-700 mb-4">{description}</p>
            {features && features.length > 0 && (
              <ul className="list-disc pl-6 text-gray-600">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}
            <div className="mt-6 flex flex-wrap justify-end gap-4">
              <button
                onClick={() => router.push(href)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Learn More
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Start a Project
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}