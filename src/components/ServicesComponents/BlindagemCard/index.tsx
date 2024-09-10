import React from 'react';

interface BlindagemCardProps {
  icon: string;
  title: string;
  description: string;
}

const BlindagemCard: React.FC<BlindagemCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-wrap max-sm:flex-col grow shrink gap-4 justify-center items-center p-6 bg-white rounded-2xl shadow-[0px_0px_16px_rgba(0,0,0,0.17)] max-md:px-5 w-full">
      <div className="flex flex-col justify-center items-center self-stretch pb-2 my-auto text-xl leading-tight whitespace-nowrap max-sm:border-b-2 sm:border-r-2 border-zinc-500 w-full sm:w-[198px]">
        <img loading="lazy" src={icon} alt="" className="object-contain aspect-square w-[65px]" />
        <h3 className="mt-3">{title}</h3>
      </div>
      <p className="flex-1 shrink self-stretch my-auto text-sm leading-5 basis-0">
        {description}
      </p>
    </article>
  );
};

export default BlindagemCard;