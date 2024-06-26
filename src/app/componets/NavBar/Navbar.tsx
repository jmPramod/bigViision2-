'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';
import { MobileNav } from './MobileNav';
const Navbar = () => {
  const router = useRouter();
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
        <Button variant={'custom1'} onClick={() => router.push('/')}>
          Home
        </Button>
        <Button variant={'custom1'} onClick={() => router.push('/contact')}>
          Contact
        </Button>
      </div>

      <MobileNav />
    </nav>
  );
};

export default Navbar;
