'use client';
import React from 'react';
import { CardWithImage } from './CardWithImage';

const BusinessCard = () => {
  let data = [
    {
      title: 'Visiting Card Printing',
      image: '/image/visiting-card.jpg',
      description:
        'Welcome to our Bigviision visiting card printing service, where we transform your professional identity into a tangible, memorable asset. Whether you’re a business owner, freelancer, or corporate professional, our expertly crafted visiting cards will make a lasting impression.',
    },
    {
      title: 'Railway and Passport Services',
      image: '/image/passport-railway.jpg',
      description:
        'Discover the convenience and ease of railway travel with our dedicated railway passport booking service. Whether you’re planning a business trip, a family vacation, or a solo adventure, we provide a seamless booking experience to get you on track quickly and efficiently.',
    },
    {
      title: 'Customize Shirt',
      image: '/image/customize_shirt.jpg',
      description:
        'Welcome to our Bigviision customized printing shirts service, where your creativity meets high-quality apparel. Whether you’re looking to promote your brand, celebrate an event, or create personalized gifts, our customized shirts are the perfect choice.',
    },
  ];
  return (
    <div className="flex items-center justify-between py-3 w-full md:w-[90%] m-auto my-5 flex-col md:flex-row  gap-5 md:gap-0 ">
      {data.map((value: any, index: number) => (
        <div key={index}>
          <CardWithImage value={value} />
        </div>
      ))}
    </div>
  );
};

export default BusinessCard;
