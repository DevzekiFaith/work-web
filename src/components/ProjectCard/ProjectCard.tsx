'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectCardProps {
  title: string;
  summary: string;
  images?: string[];
  category?: string;
  location?: string;
  date?: string;
  tech?: string[];
  viewMode?: string;
}

export default function ProjectCard({
  title,
  summary,
  images,
  category,
  location,
  date,
  tech,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Swipe detection
  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e: React.TouchEvent) => (touchStartX = e.changedTouches[0].screenX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 75) setIsOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition text-left w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {images?.[0] && (
          <div className="relative w-full h-48">
            <Image
              src={images[0]}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        )}
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            {category && (
              <span className="text-xs text-white bg-purple-600 px-2 py-1 rounded-full">
                {category}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">{summary}</p>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex items-center md:justify-center justify-start md:p-4 p-0" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <Dialog.Panel className="w-full max-w-2xl md:max-h-[90vh] h-full md:h-auto bg-white p-6 rounded-none md:rounded-lg shadow-xl overflow-y-auto">
                  <Dialog.Title className="text-xl font-bold mb-4">{title}</Dialog.Title>

                  {images?.length && (
                    <div className="mb-4 aspect-video relative">
                      <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        className="w-full h-full"
                      >
                        {images.map((img, index) => (
                          <SwiperSlide key={index}>
                            <Image src={img} alt={`${title} ${index + 1}`} layout="fill" objectFit="cover" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )}

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">{summary}</p>

                  <div className="text-sm text-gray-600 space-y-1 mb-6">
                    {location && <p><strong>Location:</strong> {location}</p>}
                    {date && <p><strong>Date:</strong> {date}</p>}
                    {tech && tech.length > 0 && (
                      <p><strong>Technologies:</strong> {tech.join(', ')}</p>
                    )}
                  </div>

                  <div className="text-right">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
