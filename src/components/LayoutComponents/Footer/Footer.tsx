import Image from "next/image";
import React from "react";

type FooterProps = {
  logoSrc: string;
  companyInfo: string;
  copyrightInfo: string;
  safetyLogoSrc: string;
  safetyText: string;
};

const Footer: React.FC<FooterProps> = ({ logoSrc, companyInfo, copyrightInfo, safetyLogoSrc, safetyText }) => (
  <footer className="flex justify-center items-center px-16 py-4 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full max-w-[810px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col items-center text-center text-black">
        <Image
              width={400}
              height={400} loading="lazy" src={logoSrc} alt="Company logo" className="w-48 max-w-full aspect-[4]" />
        <div className="self-stretch px-4 py-px mt-4 text-sm tracking-tight">{companyInfo}</div>
        <div className="mt-2 text-xs leading-5">{copyrightInfo}</div>
      </div>
      <div className="flex justify-center my-auto text-sm font-bold leading-6 text-neutral-500">
        <Image
              width={400}
              height={400} loading="lazy" src={safetyLogoSrc} alt="Safety logo" className="shrink-0 aspect-square w-[60px]" />
        <div className="px-1.5 py-2.5 my-auto">{safetyText}</div>
      </div>
    </div>
  </footer>
);

export default Footer;
