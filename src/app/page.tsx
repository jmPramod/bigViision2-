import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HomePage from './(pages)/Home/HomePage';
import Footer from './componets/Footer/Footer';
import { CardWithImage } from './componets/Card/CardWithImage';
import BusinessCard from './componets/Card/BusinessCard';

export default function Home() {
  return (
    <div>
      <HomePage />
      <BusinessCard />

      <Footer />
    </div>
  );
}
