import { AiOutlinePlus } from "react-icons/ai"; 
import React from 'react';

interface BannerUploadBoxProps {
  width: string;
}

const BannerUploadBox: React.FC<BannerUploadBoxProps> = ({ width }) => {
  return (
    <div className={`flex flex-col justify-center items-center rounded-lg border border-solid bg-zinc-100 border-neutral-300 min-h-[233px] ${width}`}>
      <span className="text-6xl text-blue-400 max-md:text-4xl"><AiOutlinePlus /></span>
      <p className="mt-2 text-base leading-6 text-blue-400">
        Clique aqui para adicionar o banner
      </p>
    </div>
  );
};

const BannerUpload: React.FC = () => {
  return (
    <section className="flex flex-col mt-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-6 items-start w-full text-base whitespace-nowrap text-neutral-800 max-md:max-w-full">
        <h2 className="flex-1 shrink basis-0">Mobile</h2>
        <h2 className="w-[886px] max-md:max-w-full">Desktop</h2>
      </div>
      <div className="flex gap-6 items-start mt-2 text-center max-md:max-w-full">
        <BannerUploadBox width="w-2/12" />
        <BannerUploadBox width="min-w-[240px] w-full" />
      </div>
    </section>
  );
};

export default BannerUpload;