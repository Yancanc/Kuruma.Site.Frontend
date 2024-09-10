import Advantages from '@/components/ServicesComponents/ConsorcioComponents/Advantages';
import InfoCards from '@/components/ServicesComponents/ConsorcioComponents/InfoCards';
import ProcessSteps from '@/components/ServicesComponents/ConsorcioComponents/ProcessSteps';
import React from 'react';

const ConsorcioToyota: React.FC = () => {

  return (
    <div className="w-full text-zinc-800 p-3">
    <h1 className="text-5xl  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
    Consórcio Toyota
    </h1>
    <div className="w-16 border-b-2 ml-1 border-red-600 " />
    <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e475ac62dbfb0b1d75a14aeecba672d7eeff68452ffe70da076dd17c6d3faa43?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" 
        alt="Consórcio Toyota promotional image" 
        className="object-contain mt-4 w-full rounded-lg aspect-[1.77] shadow-[2px_4px_6px_rgba(0,0,0,0.4)]" 
      />
      <p className="flex flex-col mt-4 w-full text-2xl leading-7 text-zinc-600 max-md:max-w-full">
        Ficou muito fácil fazer uma plano para trocar ou comprar seu carro.
      </p>
   <ProcessSteps />
   <InfoCards />
   <Advantages />
    </div>
  );
};

export default ConsorcioToyota;