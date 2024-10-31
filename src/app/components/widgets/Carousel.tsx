'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Card from '../ui/Card';
import Image from 'next/image';

interface CategoryProps {
  slug?: string;
  name?: string;
  url?: string;
}

const Carousel = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const [categories, setCategories] = useState<CategoryProps[]>([]);

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
      <ul ref={ref} className="flex overflow-x-scroll scrollbar-thin space-x-6">
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
