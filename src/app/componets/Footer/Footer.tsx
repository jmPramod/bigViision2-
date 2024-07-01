/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="  w-full">
      <footer className=" dark:bg-gray-900  w-full bg-[#494959]">
        <div className="mx-auto w-full  p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Image
                className="rounded  "
                src={'/image/logo.jpg'}
                width={150}
                height={150}
                alt="logo"
              />
            </div>
            <div className="md:w-[30%] w-full text-white">
              <h2 className="mb-6 text-lg font-semibold uppercase dark:text-white">
                ADDRESS:
              </h2>
              <ul className=" font-bold">
                <li className="mb-4">
                  Karvir Society House No. 4, Near Domino's Pizza Shahunagar
                  Chinchwad, Pune - 411019.
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-white">
                  Legal
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">
              © 2024{' '}
              <a href="/" className="hover:underline">
                Bigviision Printers™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 gap-3 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="bg-white hover:text-gray-900 dark:hover:text-white rounded-[100%] p-2"
              >
                <BsFacebook size={30} color="#316FF6" />
                <span className="sr-only">Facebook page</span>
              </a>

              <Link
                className="bg-white hover:text-gray-900 dark:hover:text-white rounded-[100%] p-2"
                href="https://wa.me/9923257527" // Replace with your number
              >
                <AiOutlineWhatsApp size={30} color="#25D366" />
              </Link>

              <span className="sr-only">whatsapp</span>

              <a
                href="#"
                className="bg-white hover:text-gray-900 dark:hover:text-white rounded-[100%] p-2"
              >
                <AiFillInstagram
                  size={30}
                  // style={{
                  //   backgroundColor:
                  //     'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);',
                  // }}
                  color="#e1306c"
                />
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
