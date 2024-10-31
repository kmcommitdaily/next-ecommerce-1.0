import Link from 'next/link';
import Cart from '../ui/Cart';

const Header = () => {
  return (
    <header className="top-0 sticky">
      <nav className=" bg-red-50 flex justify-between items-center p-2 rounded-sm">
        <h3>logo</h3>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/store'}>Store</Link>
          </li>
        </ul>
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
