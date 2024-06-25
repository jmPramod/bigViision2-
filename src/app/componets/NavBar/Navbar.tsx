'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="h-16 w-full bg-[#1976d2] flex items-center justify-between px-5">
      {/* logo */}
      <div>
        <Image
          className="rounded"
          src={'/image/logo.jpg'}
          width={130}
          height={130}
          alt="logo"
        />
      </div>

      {/* menu */}
      <div className="hidden items-center justify-center gap-4 md:flex ">
        <Button variant={'custom1'}>Home</Button>
        <Button variant={'custom1'}>Contact</Button>
      </div>

      {/* mobile menu */}
      <div className="block md:hidden">
        {/* {toggleMenu && ( */}
        <div>
          <div
            className={
              toggleMenu
                ? 'md:hidden h-screen w-full bg-slate-700 opacity-[0.6] absolute left-0 top-[63px] transition-transform duration-500 ease-in-out'
                : 'hidden'
            }
          ></div>
          <div
            className={
              toggleMenu
                ? 'md:hidden h-screen w-[60%] bg-white absolute right-0 top-[63px]  flex flex-col gap-5 items-center py-8 transition-all duration-500 ease-in-out'
                : 'hidden'
            }
          >
            <Button variant={'custom1'} className="w-3/4 ">
              Home
            </Button>
            <Button variant={'custom1'} className="w-3/4 ">
              Contact
            </Button>
          </div>
        </div>
        {/* )} */}
        {/* <AiOutlineMenu size={30} color="white" className="block md:hidden" /> */}
        <svg
          onClick={() => setToggleMenu(!toggleMenu)}
          className="w-6 h-6 text-gray-800 dark:text-white md:hidden"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>

        {/* <a href="">&#8801;</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
