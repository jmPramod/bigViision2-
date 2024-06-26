import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HomePage from './(pages)/Home/HomePage';
import Footer from './componets/Footer/Footer';

export default function Home() {
  return (
    <div>
      <HomePage />
      <Footer />
    </div>
  );
}
