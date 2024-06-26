'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 100000, stopOnInteraction: false })
  );

  const data = [
    {
      name: 'Commercial And Industrial Printers & Binders',
      image: '/image/printing.avif',
      features: [
        'Offset Printing',
        'Screen Printing',
        'Digital Printing',
        'Graphics Designing',
        ' Xerox',
        'Four Colour Designing',
        'Lamination',
        'Spiral Binding',
        'Flex Printing',
      ],
    },
    {
      name: 'Unique Buddha Enterprises',
      image: '/image/enterprices.png',
      features: [
        'Digital Marketing',
        'Police verification',
        'Online Trading',
        'Railway Booking',
        'RTO Work',
        'Passport',
        'Online PF Work',
        'Udyam Registration',
        'Tours & Travels',
        'Shop-Act License',
      ],
    },
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-auto md:h-[425px] m-auto md:w-[85%]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {data.map((value: any, index: number) => (
          <CarouselItem key={index} className="h-full">
            <div className="p-1 h-full">
              <Card className="h-full">
                <CardContent className="flex flex-col md:flex-row items-center justify-center p-6 gap-3 h-full">
                  <Image
                    className="w-full md:w-1/2 h-full rounded"
                    src={value.image}
                    width={100}
                    height={100}
                    alt={value.name}
                  />
                  <div className="w-full  md:w-1/2 h-full flex flex-col items-center justify-evenly ">
                    <h1 className="scroll-m-20 border-b-2 border-blue-700 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                      {value.name}
                    </h1>
                    <ul
                      className={
                        'list-disc list-inside grid grid-cols-2 gap-0 md:gap-2 '
                      }
                    >
                      {value.features.map((value: string, index: number) => (
                        <li key={index} className="p-0 md:p-[5px] ">
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
