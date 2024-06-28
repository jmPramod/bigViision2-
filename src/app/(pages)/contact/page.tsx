import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center w-full md:flex-row flex-col">
      <div className="w-full md:w-[50%] border border-black">
        <Image
          className="w-full"
          src="/image/profileImage.JPEG"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="w-full md:w-[50%] border border-black">
        <div>
          <div className="p-2">
            <div>
              <div className="text-2xl font-bold">About Pravin</div>
              <div className="font-normal">
                Welcome to the dynamic ventures of Pravin, where innovation and
                quality are at the forefront. I proudly helm two distinct
                enterprises: Bigviision Printers and Unique Buddha Enterprises,
                each offering exceptional services tailored to meet your diverse
                needs.
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
                our commitment to excellence ensures that your journey is smooth
                and enjoyable. Additionally, we offer a range of other services
                designed to enhance convenience and add value to your life.
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold">Contact Number: 9923257527</div>
          {/* <styles.buttonContainer>
            <styles.whatsappLinkTag
              href="https://wa.me/9923257527" // Replace with your number
              // className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              <styles.whatsappIcon />
            </styles.whatsappLinkTag>
            <styles.emailLinkTag href="mailto:bigviisionprinters@gmail.com">
              <styles.emailIcon />
            </styles.emailLinkTag>
            {mobile && (
              <>
                <styles.phoneLinkTag href="tel:+9923257527">
                  <styles.phoneIcon />
                </styles.phoneLinkTag>
                <styles.messageLinkTag href="sms:+9923257527">
                  <styles.messageIcon />
                </styles.messageLinkTag>
              </>
            )}
          </styles.buttonContainer> */}
        </div>
      </div>
    </div>
  );
};

export default page;
