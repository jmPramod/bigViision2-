/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BiSolidPhone } from 'react-icons/bi';
import { AiFillMessage } from 'react-icons/ai';
import Footer from './../../componets/Footer/Footer';

const page = () => {
  return (
    <>
      <div className="flex  justify-center w-full md:flex-row flex-col gap-[15px] p-[15px]">
        <div className="w-full md:w-[50%] border border-black">
          <Image
            className="w-full"
            src="/image/profileImage.JPEG"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="w-full md:w-[50%] border  ">
          <div className="flex flex-col items-center justify-between h-full">
            <div className="p-2">
              <div>
                <div className="text-2xl font-bold">About Pravin</div>
                <div className="font-normal">
                  Welcome to the dynamic ventures of Pravin, where innovation
                  and quality are at the forefront. I proudly helm two distinct
                  enterprises: Bigviision Printers and Unique Buddha
                  Enterprises, each offering exceptional services tailored to
                  meet your diverse needs.
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">Bigviision Printers</div>
                <div className="font-normal">
                  Bigviision Printers is a leader in the printing industry,
                  providing high-quality, customized printing solutions. Our
                  state-of-the-art technology and meticulous attention to detail
                  ensure that every project, big or small, meets the highest
                  standards of excellence. Whether it's for business or personal
                  use, our printing services are designed to leave a lasting
                  impression.
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold">
                  Unique Buddha Enterprises
                </div>
                <div className="font-normal-">
                  Unique Buddha Enterprises is your go-to destination for
                  unparalleled tours and travels. We specialize in crafting
                  bespoke travel experiences that are both memorable and
                  hassle-free. From exotic getaways to seamless business trips,
                  our commitment to excellence ensures that your journey is
                  smooth and enjoyable. Additionally, we offer a range of other
                  services designed to enhance convenience and add value to your
                  life.
                </div>
              </div>
            </div>

            <div className=" md:text-1xl font-bold">
              Contact Number: 9923257527
            </div>
            <div className="flex items-center gap-4 pb-4 mt-4">
              <a
                href="https://wa.me/9923257527" // Replace with your number
                // className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp
                  size={30}
                  className=" border border-black bg-green-500 rounded-[100%] p-1 w-[35px] h-[35px]  hover:text-green-500 hover:bg-white "
                />
              </a>
              <a href="mailto:bigviisionprinters@gmail.com">
                <AiOutlineMail
                  size={30}
                  className="border border-black bg-white rounded-[100%] p-1 w-[35px] h-[35px] hover:text-white hover:bg-black"
                />
              </a>

              <a href="tel:+9923257527">
                <BiSolidPhone
                  size={30}
                  className="block md:hidden border border-black bg-[#3b3b88] rounded-[100%] p-1 w-[35px] h-[35px] text-white hover:text-[#3b3b88] hover:bg-white"
                />
              </a>
              <a href="sms:+9923257527">
                <AiFillMessage
                  size={30}
                  className="block md:hidden  border border-black bg-[#436f6f] rounded-[100%] p-1 w-[35px] h-[35px] text-white hover:text-[#436f6f] hover:bg-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
