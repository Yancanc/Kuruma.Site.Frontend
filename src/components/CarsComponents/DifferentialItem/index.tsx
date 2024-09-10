import React from "react";
import DifferentialsSection from "./DifferentialsSection";
import Image from "next/image";

const DifferentialsComponent: React.FC = () => {
  return (
    <main className="flex flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col items-center  w-full  max-md:px-5 max-md:max-w-full">
        <div className="flex absolute right-0 z-0 flex-col self-start py-0.5  -mt-[1px] h-[546px] max-md:max-w-full w-[50vw]">
          <div className="flex ">
          <Image
              width={400}
              height={400}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56fdb1ae92278901c9f17fe755ed71689c2e7907651b0a9831926768ab51e35d?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
              alt=""
              className="object-contain z-10 self-end max-w-full aspect-[9.8] w-[757px]"
            />
            <div className="w-full h-full bg-zinc-900" />
          </div>
          <div className="flex w-full bg-zinc-900 min-h-[467px] max-md:max-w-full" />
        </div>
        <header className="flex z-0 flex-wrap gap-10 justify-between items-start max-w-full text-3xl font-semibold leading-none text-gray-900 whitespace-nowrap w-[1140px]">
          <h1 className="min-h-[77px] min-w-[240px] w-[481px] max-md:max-w-full">
            Diferenciais
          </h1>
          <div className="flex shrink-0 h-[77px] min-w-[240px] w-[520px]" />
        </header>
        <div className="w-full bg-zinc-900 flex items-center -mt-3">
          <DifferentialsSection />
        </div>
      </div>
    </main>
  );
};

export default DifferentialsComponent;
