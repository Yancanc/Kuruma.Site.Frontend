import React from 'react';

interface KintoSectionProps {
  title: string;
  imageSrc: string;
  children: React.ReactNode;
}

const KintoSection: React.FC<KintoSectionProps> = ({ title, imageSrc, children }) => {
  return (
    <section className="flex flex-col justify-center items-center px-40 pt-8 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center max-w-full w-[1136px]">
        <div className="flex flex-col justify-center py-4 w-full max-md:max-w-full">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <div className="flex flex-col justify-center py-6 w-full max-md:max-w-full">
              <div className="flex gap-4 items-start w-full max-md:max-w-full">
                <img loading="lazy" src={imageSrc} alt={title} className="object-contain aspect-[10.42] min-w-[240px] w-[520px]" />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KintoSection;