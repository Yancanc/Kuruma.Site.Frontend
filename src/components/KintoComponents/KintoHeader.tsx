import React from 'react';

interface KintoHeaderProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const KintoHeader: React.FC<KintoHeaderProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <header className="flex flex-col justify-center py-6 w-full max-w-[1140px] mx-auto text-3xl tracking-tighter leading-none text-cyan-700 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
        <img loading="lazy" src={imageSrc} alt={title} className="object-contain self-start aspect-[9.09] min-w-[240px] w-[453px] max-md:max-w-full" />
        <div className="overflow-hidden flex-1 shrink gap-2.5 h-full min-w-[240px] max-md:max-w-full mt-auto">
          {title}
        </div>
      </div>
      <p className="text-lg leading-8 text-slate-500 max-md:max-w-full">
        {subtitle}
      </p>
    </header>
  );
};

export default KintoHeader;