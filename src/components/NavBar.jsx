import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center justify-between gap-4 text-2xl font-bold text-purple-700">
        <img src="/myLogo2.svg" alt="logo" className="w-10 h-10" />
        <span>Bloggos</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
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
        {/* MOBILE LINKS LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 bg-[#e6e6ff]  ${
            isOpen ? '-right-0' : '-right-[100%]'
          } transition-all ease-in-out`}
        >
          <a href="/">Home</a>
          <a href="/trending">Trending</a>
          <a href="/popular">Most popular</a>
          <a href="/about">About</a>
          <a href="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👈
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/trending">Trending</a>
        <a href="/popular">Most popular</a>
        <a href="/about">About</a>
        <a href="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 👈
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
