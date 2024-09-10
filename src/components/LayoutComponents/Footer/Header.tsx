import Image from "next/image";
import React from "react";

type HeaderProps = {
  logoSrc: string;
  brandName: string;
  iconSrcs: string[];
};

const Header: React.FC<HeaderProps> = ({ logoSrc, brandName, iconSrcs }) => (
  <header className="flex gap-5 justify-between py-4 w-full border-b border-neutral-300 max-md:flex-wrap max-md:max-w-full">
    <div className="flex">
      <div className="flex justify-center items-center pt-4 pb-4">
        <Image
              width={400}
              height={400} loading="lazy" src={logoSrc} alt="Company logo" className="aspect-[5.88] w-[130px]" />
      </div>
      <div className="px-3 my-auto text-xl whitespace-nowrap text-neutral-600">{brandName}</div>
    </div>
    <nav className="flex gap-5 justify-between my-auto">
      {iconSrcs.map((src, index) => (
        <Image
              width={400}
              height={400} key={index} loading="lazy" src={src} alt={`Navigation icon ${index + 1}`} className="shrink-0 aspect-square w-[25px]" />
      ))}
    </nav>
  </header>
);

export default Header;
