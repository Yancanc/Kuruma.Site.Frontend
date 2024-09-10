import Image from 'next/image';
import React from 'react';

interface VehicleCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  features: string[];
}

export default function VehicleCard ({ imageSrc, title, subtitle, features } : VehicleCardProps) {

    return (
        <article className="flex overflow-hidden flex-wrap grow shrink gap-4 justify-center items-center pb-4 rounded-lg border border-solid bg-stone-50 border-stone-50 shadow-[2px_4px_6px_rgba(0,0,0,0.12)] w-full max-lg:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[272px] w-[272px]">
            <div className="flex overflow-hidden flex-col w-full">
              <Image
              width={400}
              height={400} loading="lazy" src={imageSrc} alt={`${title} vehicle`} className="object-contain w-full aspect-[1.61]" />
            </div>
            <div className="flex flex-col items-center w-full leading-snug">
              <h2 className="text-lg font-semibold text-neutral-700">{title}</h2>
              <p className="text-xs text-zinc-800">{subtitle}</p>
            </div>
          </div>
          <div className="flex flex-col self-stretch px-4 my-auto min-w-[272px] w-[272px]">
            <ul className="flex flex-col w-full text-xs leading-snug text-stone-500">
              <li className="flex flex-col justify-center py-4 w-full">
                {features.map((feature, index) => (
                  <div key={index} className="gap-2 self-stretch py-1 mt-1 w-full">
                    {feature}
                  </div>
                ))}
              </li>
            </ul>
            <button className="flex overflow-hidden gap-1.5 justify-center items-center px-4 py-2 mt-4 w-full text-sm leading-none text-center uppercase bg-red-600 rounded-md min-h-[40px] min-w-[140px] text-slate-50">
              <span className="self-stretch my-auto">Solicite cotação</span>
              <Image
              width={400}
              height={400} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/84f91ccc1a6192ceef0cbec08018ad22537164e8ce4ae448c8b041ac509034e8?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </button>
          </div>
        </article>
      );
}