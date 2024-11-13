'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Card from '../ui/Card';
import { CategoryProps } from '@/hooks/useStoreData';
import useStoreData from '@/hooks/useStoreData';
import Image from 'next/image';

const Carousel = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const { products } = useStoreData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://dummyjson.com/products/categories'
        );
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('error in fetching', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ul
        ref={ref}
        style={{
          // removed scrollbar
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="flex overflow-x-scroll scrollbar-hidden scrollbar-thin space-x-6">
        {products.map((product, index) => (
          <motion.li
            key={product.name}
            initial={{ opacity: 0, x: -20 }} // Start off-screen
            animate={{ opacity: 1, x: 0 }} // Slide in to position
            transition={{ duration: 0.3, delay: index * 0.1 }}>
            {/** REFACTOR THIS SO ONLY NEEDED FEATURES BY CATEGORY WILL BE DISPLAYED */}
            <Card
              pick
              className="bg-green-200 p-4 w-[600px] "
              product={product}
              key={index}></Card>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default Carousel;
