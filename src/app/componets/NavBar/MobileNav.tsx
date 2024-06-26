'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';

import { AiOutlineMenu } from 'react-icons/ai';

export function MobileNav() {
  const router = useRouter();
  return (
    <Sheet>
      {/* mobile menu */}
      <div className="block md:hidden">
        <SheetTrigger asChild>
          <AiOutlineMenu size={25} className="text-white  font-bold " />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Button
                variant={'custom1'}
                className="w-full mt-5"
                onClick={() => router.push('/')}
              >
                Home
              </Button>
            </SheetTitle>
            <SheetTitle>
              <Button
                variant={'custom1'}
                className="w-full"
                onClick={() => router.push('/contact')}
              >
                Contact
              </Button>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </div>
    </Sheet>
  );
}
