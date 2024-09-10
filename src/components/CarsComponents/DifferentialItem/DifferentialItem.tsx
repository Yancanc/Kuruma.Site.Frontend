import Image from "next/image";
import React from "react";

interface DifferentialItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const DifferentialItem: React.FC<DifferentialItemProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[272px]">
      <Image
        width={400}
        height={400}
        loading="lazy"
        src={iconSrc}
        alt={`${title} icon`}
        className="object-contain aspect-square w-[55px]"
      />
      <div className="flex items-center mt-4 w-full">
        <div className="flex shrink-0 self-stretch my-auto h-2.5 rounded-full border-2 border-white border-solid bg-zinc-900 w-[11px]" />
        <div className="flex-1 shrink self-stretch my-auto h-px border border-white border-solid basis-0 min-w-[240px] w-[261px]" />
      </div>
      <div className="flex flex-col justify-center pr-8 mt-4 w-full max-md:pr-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-base leading-6 text-stone-50">{description}</p>
      </div>
    </div>
  );
};

export default DifferentialItem;
