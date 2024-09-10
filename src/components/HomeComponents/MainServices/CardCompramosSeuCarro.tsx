import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CarPurchaseModuleProps {
  title: string;
  features: Array<{ text: string; boldText: string }>;
  description: string;
}
interface FeatureItemProps {
  text: string;
  boldText: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text, boldText }) => {
  return (
    <div className="flex gap-2.5 justify-center items-center">
      <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-white rounded-full" />
      <div className="self-stretch my-auto">
        {text} <br />
        <span className="font-bold">{boldText}</span>
      </div>
    </div>
  );
};

const CardCSC: React.FC<CarPurchaseModuleProps> = ({
  title,
  features,
  description,
}) => {
  return (
    <article className="flex divHover overflow-hidden flex-col pb-4 bg-white rounded-lg w-[49%]">
      <header className="flex flex-col w-full text-white uppercase bg-neutral-700 max-md:max-w-full">
        <div className="flex relative flex-col pt-4 pb-20 w-full min-h-[215px] max-md:max-w-full">
        <Image
              width={400}
              height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ae0635f82c0032624b451a6e80952671fc59ce8e3bf05424df23c1eaab4e08f?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt="background"
            className="object-cover absolute inset-0 size-full"
          />
          <h1 className="relative flex items-centergap-0 self-center w-56 max-w-full text-2xl font-black leading-6 shadow-[0px_3px_3px_rgba(0,0,0,0.25)]">
            {title}
            <Image
              width={400}
              height={400}
            loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4892d320cd57c8bff9280181be9dfa4f206187e5003352f0c936edf8489a45d6?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt="Descriptive alt text for the image"
        />
          </h1>
          <div className="flex overflow-hidden relative gap-10 justify-center items-center py-2.5 pr-10 pl-10 mt-1 w-full text-sm leading-4 bg-red-600 min-h-[54px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  text={feature.text}
                  boldText={feature.boldText}
                />
              ))}
            </div>
          </div>
          <Image
              width={400}
              height={400}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b62a15ed8fbd0891cf11b9025cca7e59de6cb36f9acd036f310d1131bd69618?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt="Bottom background image"
            className="object-contain absolute left-2/4 z-0 transition-all enlargeImage -translate-x-2/4 aspect-[2.66] -bottom-24 h-[210px] translate-y-[0%] w-full max-md:max-w-full"
          />
        </div>
      </header>
      <footer className="flex flex-wrap justify-between items-end self-center mt-14 px-4 w-full">
        <p className="flex-1 shrink gap-2.5 py-2 pr-6 text-2xl leading-7 min-w-[320px] text-neutral-700">
          {description}
        </p>
        <Link href={'/compra-meu-carro'} className="overflow-hidden paint-button transition-all gap-1.5 self-stretch px-4 py-2 rounded-md text-neutral-700 border border-neutral-700 h-fit mt-auto ">
            SAIBA MAIS
          </Link>
      </footer>
    </article>
  );
};

export default CardCSC;
