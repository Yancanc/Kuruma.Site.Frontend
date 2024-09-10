import React from "react";
import ContactInfo from "./ContactInfo";
import OperatingHours from "./OperatingHours";
import Image from "next/image";

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <section className="flex relative flex-col  w-full min-h-[382px] max-md:max-w-full">
        <Image
              width={400}
              height={400}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a46f8b87304dc13c14a3e01ff2348025ec81724cc01439fc8073724a514ac6e?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex max-md:pb-80 relative z-10 p-8 flex-row justify-center items-end w-full max-md:pl-5 max-md:max-w-full">
          <Image
              width={400}
              height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c3b31503cc8abdba0123727baf254d3bccccb26f980144744b6f09e7d92878f?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="absolute inset-0 top-0 md:h-full max-md:mt-auto "
          />
          <div className="max-w-full ml-auto backdrop-blur-sm rounded-lg bg-black bg-opacity-30 w-[712px]">
            <div className="flex gap-5 max-md:flex-col">
              <ContactInfo />
              <OperatingHours />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
