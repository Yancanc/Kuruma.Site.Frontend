import React from 'react';
import BankingCard from './BankingCard';
import BankingBanner from './BankingBanner';
import { cardData } from './BankInfo';
import { actualSite } from '@/utils/utils';

const BankingLayout: React.FC = () => {
  const { siteDefaultName } = actualSite();


  return (
    <section className="flex flex-col justify-center py-8 bg-neutral-100">
    <header className="flex justify-center items-center px-16 w-full text-center text-black leading-[120%] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[344px]">
        <h2 className="text-4xl">Banco Toyota</h2>

        <p className="px-6 py-0.5 mt-5 max-md:px-5 border-b-2 border-black w-fit mx-auto">
          Serviços mais procurados
        </p>
      </div>
    </header>
    <main className="flex flex-col items-end px-16 pt-6 max-md:pl-5 bg-neutral-100">
      <div className="flex flex-wrap gap-6 justify-center items-start mt-6 w-full max-w-[1140px] mx-auto max-md:max-w-full">
        {cardData.map((card, index) => (
          <BankingCard key={index} {...card} />
        ))}
        <BankingBanner
          subtitle={`TOYOTA ${siteDefaultName.toLocaleUpperCase()}`}
          title="Consórcio"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cc14a0f7696e6669edc65737b4cb2f780fe28149511d2b9d831a5a0912ca8503?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          imageAlt={`Consórcio Toyota ${siteDefaultName} illustration`}
          buttonText="Saiba mais"
        />
      </div>
    </main></section>
  );
};

export default BankingLayout;