/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="  w-full">
      <footer className=" dark:bg-gray-900  w-full bg-[#b1b1ff]">
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
            <div className="md:w-[30%] w-full">
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                ADDRESS
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
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{' '}
              <a href="https://flowbite.com/" className="hover:underline">
                Bigviision Printers™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillFacebook size={30} />
                <span className="sr-only">Facebook page</span>
              </a>

              <Link
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                href="https://wa.me/9923257527" // Replace with your number
              >
                <AiOutlineWhatsApp size={30} />
              </Link>

              <span className="sr-only">whatsapp</span>

              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <AiFillInstagram size={30} />
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
