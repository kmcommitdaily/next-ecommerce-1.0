'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import useStoreData from '@/hooks/useStoreData';
import Image from 'next/image';

const Carousel = () => {
  const ref = useRef(null);

  const { categories } = useStoreData();

  return (
    <>
      <ul
        ref={ref}
        style={{
          // when in safari, this does not works
          // removed scrollbar
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="flex overflow-x-scroll scrollbar-hidden scrollbar-thin space-x-6">
        {categories.map((category, index) => (
          <motion.li
            key={category.name}
            initial={{ opacity: 0, x: -20 }} // Start off-screen
            animate={{ opacity: 1, x: 0 }} // Slide in to position
            transition={{ duration: 0.3, delay: index * 0.1 }}>
            <Card className="p-4 bg-white shadow-md rounded-lg ">
              <div className="h-[200px] w-[300px] shadow-md border"></div>
              {category.name}
            </Card>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default Carousel;