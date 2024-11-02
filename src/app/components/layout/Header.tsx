'use client';

import Link from 'next/link';
import Cart from '../ui/Cart';
import SearchInput from '../ui/SearchInput';
import Button from '../ui/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Dropdown from '../ui/Dropdown';

const navList = ['Home', 'About', 'Store'];

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedNav, setSelectedNav] = useState(navList[0]);

  return (
    <>
      <div className="bg-red-50 sticky top-0  shadow-md p-4 rounded-sm   ">
        <header className=" flex justify-between items-center ">
          <h3>logo</h3>
          <Dropdown className="bg-red-400" />
          <div
            className={`flex flex-grow rounded-full inset-0 mx-4 p-1   shadow-sm w-full sm:w-auto ${
              isFocused
                ? 'border-4 border-gray-600 '
                : 'border-2 border-gray-400'
            }`}>
            <SearchInput
              type="text"
              placeholder="Search for anything"
              className="flex-grow bg-transparent focus:outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Button className="border border-gray-300 rounded-full">
              search
            </Button>
          </div>

          <div className="flex space-x-4">
            <h3 className="rounded-md bg-red-200 p-2">Pro</h3>{' '}
            {/** CHANGE THIS INTO BUTTON IN THE FUTURE */}
            <Cart />
          </div>
        </header>
        <nav className="block mt-4">
          <ul className="flex justify-center space-x-4 ">
            {navList.map((label) => (
              <li
                key={label}
                onClick={() => setSelectedNav(label)}
                className={`relative, cursor-pointer`}>
                <Link href={label === 'Home' ? '/' : label.toLowerCase()}>
                  {label}
                </Link>
                {selectedNav === label && (
                  <motion.div
                    className="border bg-blue-600 bg-opacity-40"
                    key={label}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
