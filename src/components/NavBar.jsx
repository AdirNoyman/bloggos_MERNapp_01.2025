import { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa6';

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
        {
          <div
            className="cursor-pointer text-4xl"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {/* Change Hamburger Icon */}
            {/* {open ? "X" : "☰"} */}
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
        }
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};

export default NavBar;
