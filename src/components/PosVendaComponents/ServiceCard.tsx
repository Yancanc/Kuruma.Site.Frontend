"use client";
import React, { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  info: () => JSX.Element;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  info,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <article className="flex overflow-hidden flex-col w-full max-md:h-[520px] h-fit rounded-t-lg bg-stone-50  z-[5]  max-md:max-w-full">
        <div className="flex relative items-start w-full max-md:h-full max-md:flex-col max-md:max-w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={title}
            className="md:object-contain object-cover max-md:h-full z-[2] flex-1 shrink w-full aspect-[2.76] basis-14 max-md:max-w-full"
          />
          <div className="flex absolute right-0 bottom-0 justify-between z-[3] flex-col py-9 pr-8 pl-6 bg-black bg-opacity-70 md:h-full  min-w-[240px] md:w-[409px] max-md:px-5">
            <div className="flex flex-col w-full text-white">
              <h2 className="text-2xl leading-tight">{title}</h2>
              <p className="mt-2 text-base leading-6">{description}</p>
            </div>
            <div className="flex gap-4 items-end mt-6 w-full text-sm leading-none text-center text-white uppercase min-h-[40px]">
              <button
                className="flex overflow-hidden gap-1 justify-center items-center md:pb-1 max-md:rounded-lg max-md:py-2 max-md:w-full max-md:border md:border-b-2 border-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="self-stretch my-auto ">{isOpen ? 'Fechar' :'leia mais'}</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3bd510e5a8ae28af937197616e9e8034a87a6478824cbe171c765f740f7b347?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                  alt=""
                  className={`object-contain shrink-0 self-stretch my-auto w-5 aspect-square transition-all ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                />
              </button>
            </div>
          </div>
        </div>
      </article>
      <div
        className={`w-full border-b-4 border-zinc-700 bg-white overflow-y-hidden shadow z-0 text-black relative  rounded-b-lg h-full transition-all duration-700 ${
          isOpen ? "max-h-[500px] " : "max-h-[1px] "
        } `}
      >
        {info ? info() : null}
      </div>
    </>
  );
};

export default ServiceCard;
