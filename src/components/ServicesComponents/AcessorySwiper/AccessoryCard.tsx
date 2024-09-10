import React from 'react';

interface AccessoryCardProps {
  genuineLabel: string;
  imageSrc: string;
  title: string;
  description: string;
  code: string;
  buttonText: string;
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({
  genuineLabel,
  imageSrc,
  title,
  description,
  code,
  buttonText
}) => {
  return (
    <article className="flex flex-col grow shrink w-full h-full">
      <div className="flex gap-2.5 items-center self-start px-2 py-1.5 text-xs leading-snug text-white bg-red-600 rounded-lg min-h-[24px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b3243946a14af19e8247842f9c79027aff7533772a58a47ec98a4e296c69383?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.5] w-[18px]" />
        <span className="self-stretch my-auto">{genuineLabel}</span>
      </div>
      <div className="flex overflow-hidden flex-col justify-center w-full bg-white rounded-lg shadow-[0px_0px_16px_rgba(0,0,0,0.17)]">
        <div className="flex flex-col w-full">
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-full aspect-[1.5]" />
        </div>
        <div className="flex flex-col p-4 w-full">
          <div className="flex flex-col pb-4 w-full text-zinc-600">
            <h2 className="text-lg leading-6">{title}</h2>
            <p className="mt-2 text-sm leading-5">{description}</p>
          </div>
          <div className="flex gap-1 items-center py-1 mt-2 w-full text-xs leading-snug text-right whitespace-nowrap text-neutral-400">
            <div className="flex flex-1 shrink self-stretch my-auto h-px basis-0 bg-neutral-400 w-[110px]" />
            <span className="self-stretch my-auto">Código:</span>
            <span className="self-stretch my-auto">{code}</span>
          </div>
          <button className="overflow-hidden gap-1.5 self-stretch px-4 py-2.5 mt-2 w-full text-sm leading-none text-center uppercase bg-red-600 rounded-md min-h-[40px] min-w-[140px] text-slate-50">
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};

export default AccessoryCard;