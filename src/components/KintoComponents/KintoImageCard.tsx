import React from 'react';

interface KintoImageCardProps {
  src: string;
  alt: string;
  description: string;
}

const KintoImageCard: React.FC<KintoImageCardProps> = ({ src, alt, description }) => (
  <div className="flex flex-col grow shrink px-4 pt-4 pb-10 min-h-[200px] min-w-[240px] w-[294px]">
    <div className="flex gap-4 justify-center items-center w-full">
      <img loading="lazy" src={src} alt={alt} className="object-contain self-stretch my-auto w-16 aspect-square" />
    </div>
    <div className="flex-1 shrink gap-2.5 px-5 mt-4 w-full text-sm leading-5 text-center text-white">{description}</div>
  </div>
);

export default KintoImageCard;