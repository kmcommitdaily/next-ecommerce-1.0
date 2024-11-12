'use client';
import { useRef } from 'react';
import useStoreData from '@/hooks/useStoreData';
interface DropdownProps {
  icon?: string; //change it soon
  children?: string[];
  className?: string;
  // refactor this and make the dropdown more dynamic
}

import { useState, useEffect } from 'react';
import { useAnimate, motion } from 'framer-motion';

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (scope.current) {
      animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
    }
  }, [isOpen, animate, scope]);

  return scope;
}

const Dropdown = ({ className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const { categories } = useStoreData();

  return (
    <nav className={`${className}`} ref={scope}>
      <div
        style={{
          position: 'fixed',
          bottom: -210,
          left: 200,
          width: 100,
          height: 100,
          background: 'white',
        }}
      />
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}>
        Categories {/**make it more dynamic */}
        <motion.div
          className="arrow"
          style={{ transformOrigin: '50% 50%', display: 'inline-block' }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <ul
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          backgroundColor: 'white',
          boxShadow: ' 4px 4px 5px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          clipPath: isOpen
            ? 'inset(0% 0% 0% 0% round 10px)'
            : 'inset(10% 50% 90% 50% round 10px)',
          height: isOpen ? 'auto' : 0,
          overflow: isOpen ? 'visible' : 'hidden',
        }}>
        {categories.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>{' '}
    </nav>
  );
};

export default Dropdown;
