import Link from 'next/link';
import React from 'react';

interface BankingBannerProps {
  subtitle: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
}

const BankingBanner: React.FC<BankingBannerProps> = ({
  subtitle,
  title,
  imageSrc,
  imageAlt,
  buttonText
}) => {
  return (
    <section className="flex flex-col justify-center py-4 min-w-[240px]  w-[466px] divHover hover:-mt-6 mt-0 transition-all max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[466px] min-h-[300px]  max-md:max-w-full">
        <div className="flex bg-100% hover:bg-110% grayscale hover:grayscale-0 transition-all overflow-hidden relative justify-center items-start w-full h-72 rounded-lg min-h-[300px] max-md:max-w-full"
        style={{
          backgroundImage: `url('${imageSrc}')`,
          backgroundPosition: "center"
        }}
        >
          {/* <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-contain enlargeImage absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 aspect-[1.6] h-[300px] min-w-[240px] w-[481px] max-md:max-w-full" /> */}
          <div className="flex absolute bottom-0 left-2/4 z-0 shrink-0 -translate-x-2/4 bg-black bg-opacity-60 h-[106px] min-w-[240px] translate-y-[0%] w-[466px] max-md:max-w-full" />
          <div className="flex overflow-hidden z-0 flex-col flex-1 shrink self-end px-6 pt-52 pb-6 w-full basis-0 min-h-[280px] min-w-[240px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
            <div className="flex items-center w-full min-h-[56px]">
              <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-8 min-w-[240px]">
                <p className="text-xs leading-loose text-white">{subtitle}</p>
                <h2 className="text-3xl leading-tight text-white">{title}</h2>
              </div>
              <Link href={'/servicos/consorcio'} className="overflow-hidden transition-all paint-button-alternative border gap-1.5 self-stretch px-4 py-2.5 my-auto text-sm leading-none text-center text-white uppercase rounded-md min-h-[40px] min-w-[132px]">
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingBanner;