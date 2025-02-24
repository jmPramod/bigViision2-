import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './componets/NavBar/Navbar';
import { MobileNav } from './componets/NavBar/MobileNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bigviision',
  description: 'Best Printing and Traveling Enterprises.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: 'relative' }}>
        <Navbar />
        {/* <MobileNav /> */}
        {children}
      </body>
    </html>
  );
}
