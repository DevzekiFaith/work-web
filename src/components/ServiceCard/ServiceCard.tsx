'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiX, HiArrowRight, HiEye } from 'react-icons/hi';
import { Fragment } from 'react';

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
      <motion.div
        className="card card-hover group cursor-pointer overflow-hidden"
        onClick={() => setIsOpen(true)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {displayImages.length > 0 && (
          <div className="relative w-full h-48 overflow-hidden">
            <Swiper 
              className="w-full h-full"
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={displayImages.length > 1}
            >
              {displayImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image 
                      src={img} 
                      alt={`${title} ${index + 1}`} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Overlay Icon */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <HiEye className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
        )}
        
        <div className="p-6">
          <h3 className="heading-4 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="body-base text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>
          
          {features && features.length > 0 && (
            <div className="space-y-2 mb-4">
              {features.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
              {features.length > 3 && (
                <div className="text-sm text-indigo-600 font-medium">
                  +{features.length - 3} more features
                </div>
              )}
            </div>
          )}
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm font-medium text-indigo-600">View Details</span>
            <HiArrowRight className="w-4 h-4 text-indigo-600 transform group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </motion.div>

      {/* Enhanced Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
                  {/* Modal Header */}
                  <div className="relative">
                    {displayImages.length > 0 && (
                      <div className="relative h-64 md:h-80">
                        <Swiper 
                          className="w-full h-full"
                          modules={[Navigation, Pagination]}
                          navigation
                          pagination={{ clickable: true }}
                          loop={displayImages.length > 1}
                        >
                          {displayImages.map((img, index) => (
                            <SwiperSlide key={index}>
                              <Image 
                                src={img} 
                                alt={`${title} ${index + 1}`} 
                                fill
                                className="object-cover" 
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    )}
                    
                    {/* Close Button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200 z-10"
                    >
                      <HiX className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8">
                    <Dialog.Title className="heading-3 mb-4 text-left">
                      {title}
                    </Dialog.Title>
                    
                    <p className="body-large text-gray-700 mb-6 text-left">
                      {description}
                    </p>
                    
                    {features && features.length > 0 && (
                      <div className="mb-8">
                        <h4 className="heading-4 mb-4 text-left">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {features.map((feature, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                              <span className="body-base text-gray-700">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                      <button
                        onClick={() => {
                          router.push(href);
                          setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200 order-2 sm:order-1"
                      >
                        Learn More
                      </button>
                      <button
                        onClick={() => {
                          router.push('/contact');
                          setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl order-1 sm:order-2"
                      >
                        Start a Project
                        <HiArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}