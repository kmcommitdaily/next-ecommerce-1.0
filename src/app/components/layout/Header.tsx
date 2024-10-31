'use client';

import Link from 'next/link';
import Cart from '../ui/Cart';
import SearchInput from '../ui/SearchInput';
import Button from '../ui/Button';
import { useState } from 'react';

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <header className="top-0 sticky">
      <nav className=" bg-red-50 flex justify-between items-center border p-4 rounded-sm ">
        <h3>logo</h3>
        <div
          className={`flex flex-grow rounded-full inset-0 mx-4 p-1   shadow-sm w-full sm:w-auto ${
            isFocused ? 'border-4 border-gray-600 ' : 'border-2 border-gray-400'
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

        {/* <ul className="flex justify-center space-x-4">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/store'}>Store</Link>
          </li>
        </ul> */}
        <div className="flex space-x-4">
          <h3 className="rounded-md bg-red-200 p-2">Pro</h3>{' '}
          {/** CHANGE THIS INTO BUTTON IN THE FUTURE */}
          <Cart />
        </div>
      </nav>
    </header>
  );
};

export default Header;
