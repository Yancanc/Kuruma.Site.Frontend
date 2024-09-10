import React from "react";
import { CarModel } from "./CarsInfo";
import Image from "next/image";
import Link from "next/link";

const CarModelCard: React.FC<CarModel> = ({
  imageSrc,
  logoSrc,
  altText,
  carLink
}) => {
  return (
    <div className="flex justify-center items-center max-md:w-[27%] max-md:hover:w-[35%] w-3/5  hover:w-full transition-all duration-300 ease-in-out rounded-xl">
      <div
        className="flex relative h-80 overflow-y-hidden rounded-xl flex-col  w-full origin-left"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0, 0.8), transparent, rgb(0, 0, 0, 0.8)), url('${imageSrc}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full py-4 relative flex flex-col items-center transition-all duration-500 justify-between h-full hover:pb-20">
          <Image
            loading="lazy"
            src={logoSrc}
            width={400}
            height={400}
            alt={`${altText} logo`}
            className="mx-auto w-10/12 aspect-[6.25]"
          />
          <Link href={carLink} className="border text-sm -mb-16 relative text-white px-5 py-2 rounded">SAIBA MAIS</Link>
        </div>
      </div>
    </div>
  );
};

export default CarModelCard;
