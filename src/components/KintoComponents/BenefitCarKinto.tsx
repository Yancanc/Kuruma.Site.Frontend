import React from 'react';

interface BenefitCardKintoProps {
  iconSrc: string;
  title: string;
  description: string;
  span: string;
}

const BenefitCardKinto: React.FC<BenefitCardKintoProps> = ({ iconSrc, title, description,span }) => {
  return (
    <div className={`flex h-full flex-col grow shrink px-4 pt-4 pb-16 from-sky-200/70 to-sky-300/60 bg-gradient-to-b  bg-opacity-30 min-h-[212px] min-w-[240px] shadow-[0px_6px_12px_rgba(0,0,0,0.2)] w-full ${span}`}>
      <div className="flex gap-4 items-center w-full text-xl tracking-normal leading-none">
        <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square" />
        <div className="flex-1 shrink self-stretch my-auto basis-0">{title}</div>
      </div>
      <div className="flex-1 shrink gap-2.5 px-3.5 mt-2 w-full text-sm leading-5">
        {description}
      </div>
    </div>
  );
};

export default BenefitCardKinto;