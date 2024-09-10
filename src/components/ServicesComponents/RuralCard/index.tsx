import Image from "next/image";
import Link from "next/link";
import React from "react";

interface VehicleCardProps {
  imageSrc: string;
  name: string;
  details: string;
  year: string;
}

const VehicleCardRural: React.FC<VehicleCardProps> = ({
  imageSrc,
  name,
  details,
  year,
}) => {
  return (
    <article className="flex overflow-hidden flex-col grow shrink pb-6 bg-white rounded-lg border border-solid border-neutral-400 shadow-[2px_4px_6px_rgba(0,0,0,0.12)] w-full">
      <div className="flex flex-col items-center self-center max-w-full w-[207px]">
        <div className="flex overflow-hidden flex-col justify-center px-3.5 py-0.5 w-full">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src={imageSrc}
            alt={`${name} model`}
            className="object-contain w-full aspect-[1.43]"
          />
        </div>
        <div className="flex flex-col px-3.5 mt-4 w-full leading-snug">
          <h2 className="text-base text-center text-neutral-700">{name}</h2>
          {details && (
            <p className="self-center text-xs text-zinc-800">{details}</p>
          )}
          <p className="self-center text-xs text-zinc-800">{year}</p>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 mt-4 w-full text-sm leading-none text-center uppercase text-zinc-800">
        <Link
          href={`/${name.toLocaleLowerCase().replaceAll(" ", "-")}`}
          className="overflow-hidden gap-1.5 self-stretch px-4 py-2 rounded-md border border-solid border-zinc-800"
        >
          Solicite cotação
        </Link>
      </div>
    </article>
  );
};

export default VehicleCardRural;
