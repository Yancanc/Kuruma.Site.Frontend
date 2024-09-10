import React from 'react';
export interface ProductData {
    imageSrc: string;
    title: string;
    sizes: string[];
  }
const ProductCard: React.FC<ProductData> = ({ imageSrc, title, sizes }) => {
  return (
    <article className="flex overflow-hidden flex-col grow shrink justify-center bg-white rounded-lg min-w-[240px] shadow-[0px_0px_16px_rgba(0,0,0,0.17)] w-full">
      <div className="flex relative flex-col w-full text-xs leading-snug text-white whitespace-nowrap">
        <img loading="lazy" src={imageSrc} alt={title} className="object-contain z-0 w-full aspect-[1.5]" />
        <div className="flex absolute top-0 left-0 z-0 gap-2.5 items-center self-start px-2 py-1.5 bg-red-600 rounded-lg">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/575aa46ee2e90bd38df2835b949c300a0a7ed3343d73e4af4dfa23f98c3260b4?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.5] w-[18px]" />
          <span className="self-stretch my-auto">Boutique</span>
        </div>
      </div>
      <div className="flex flex-col px-4 pt-2 pb-4 w-full">
        <div className="flex flex-col w-full leading-snug">
          <h2 className="text-lg text-zinc-600">{title}</h2>
          <div className="flex flex-col mt-2 w-full text-sm whitespace-nowrap">
            <label htmlFor={`size-${title}`} className="text-zinc-600">Tamanho:</label>
            <div className="flex gap-2 items-start self-start mt-1 uppercase text-neutral-400">
              {sizes.map((size, index) => (
                <div key={index} className="overflow-hidden gap-2 self-stretch px-2 py-0.5 rounded-lg border border-solid border-neutral-400">
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="overflow-hidden gap-1.5 self-stretch px-4 py-2.5 mt-4 w-full text-sm leading-none text-center uppercase rounded-md bg-neutral-700 min-h-[40px] min-w-[140px] text-slate-50">
          consultar valor
        </button>
      </div>
    </article>
  );
};

export default ProductCard;