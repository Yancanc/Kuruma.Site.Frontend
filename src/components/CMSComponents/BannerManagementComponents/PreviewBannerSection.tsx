import React from 'react';

const PreviewBannerSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-2 w-full max-md:max-w-full">
      <div className="lg:flex flex-wrap  gap-2.5 px-4 items-end py-6 w-full text-base font-semibold uppercase whitespace-nowrap max-md:max-w-full">
        <h1 className="flex-1 shrink text-4xl italic  text-neutral-700  ">PREVIEW</h1>
        <div className='flex gap-4'>
        <button className="gap-2 self-stretch px-6 py-4 text-center text-white bg-neutral-800 max-md:px-5">DESKTOP</button>
        <button className="gap-2 self-stretch px-6 py-4 text-center border-2 border-solid border-neutral-800 text-neutral-800 max-md:px-5">MOBILE</button>
        </div>
      </div>
      <div className="flex flex-col items-center self-center w-full min-h-[400px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fad29b80e35cdcf7463b4a037db434c19eb759dc39d79474ee7d9ffc518f764?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" alt="Preview banner" className="object-contain w-full aspect-[3.8] max-md:max-w-full" />
        <div className="flex gap-2.5 items-start self-stretch w-full min-h-[5px] max-md:max-w-full">
          <div className="flex flex-1 shrink gap-2.5 w-full bg-red-600 basis-0 min-h-[5px] min-w-[240px] max-md:max-w-full" />
        </div>
        <div className="flex flex-wrap gap-4 justify-center px-12 w-full min-h-[40px] max-md:px-5 max-md:max-w-full">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="flex flex-col justify-center w-[60px]">
              <div className={`flex gap-2.5 w-full ${index === 1 ? 'bg-red-600' : 'bg-zinc-300'} min-h-[8px]`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewBannerSection;