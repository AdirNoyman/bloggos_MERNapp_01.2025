import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link
      to="/"
      className="w-full h-16 md:h-20 flex items-center justify-between"
    >
      {/* LOGO */}
      <div className="flex items-center justify-between gap-4 text-2xl font-bold text-purple-700">
        <Image
          src="/myLogo2.svg"
          imgWidth={35}
          imgHeight={35}
          description="logo"
        />
        <span>Bloggos</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl pr-3"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                isOpen && 'rotate-45'
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                isOpen && 'opacity-0'
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                isOpen && '-rotate-45'
              }`}
            ></div>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 bg-[#e6e6ff]  ${
            isOpen ? '-right-0' : '-right-[100%]'
          } transition-all ease-in-out`}
        >
          <Link to="/" className='hover:text-blue-600'>Home</Link>
          <Link to="/trending"className='hover:text-blue-600'>Trending</Link>
          <Link to="/popular" className='hover:text-blue-600'>Most popular</Link>
          <Link to="/about" className='hover:text-blue-600'>About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-700 hover:shadow-md text-white">
              Login 👈
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/" className='hover:text-blue-600'>Home</Link>
        <Link to="/trending" className='hover:text-blue-600'>Trending</Link>
        <Link to="/popular" className='hover:text-blue-600'>Most popular</Link>
        <Link to="/about" className='hover:text-blue-600'>About</Link>
       
        <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-700 hover:shadow-md text-white">
            Login 👈
          </button>
        </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </Link>
  );
};

export default NavBar;
