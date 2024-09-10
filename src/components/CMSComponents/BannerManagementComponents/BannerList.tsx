'use client'
import { AiOutlinePlus } from "react-icons/ai"; 
import { BsChevronCompactDown } from "react-icons/bs"; 
import React from 'react';
import BannerItem, { BannerItemProps } from './BannerItem';
import Link from "next/link";
import { usePathname } from "next/navigation";

const bannerData: BannerItemProps[] = [
  {
    order: 1,
    type: 'INSTITUCIONAL',
    desktopImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7866fa722c685e10412286c34d7e95a01782ee4c355ac3fe0e8c2da8ac15472c?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286',
    mobileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9e4e78a8da1b1b4c5a6d599a2991c43b31909fe8cca775a37f13e1d6d02f9f31?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286',
    date: '01/08/2024, 08h'
  },
  {
    order: 2,
    type: 'INSTITUCIONAL',
    desktopImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c60638fe031dec29d83ecdbdff340953d6ac7be8d583128024cf461b490b5643?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286',
    mobileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e73c1f61ccdc45a941b699ea565f2c8bc88fa47be0397359a2e8319716b7ad79?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286',
    date: '01/08/2024, 08h'
  },
  {
    order: 3,
    type: 'INSTITUCIONAL',
    desktopImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c16871a9b61d1b49169e53f534011ef019fef380299bef14910654a5a8ef1826?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286',
    mobileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8636030d3cef7300e29dc3ba3ba7e0ae902b413096ce1bddecac9498342b8d1e?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286',
    date: '01/08/2024, 08h'
  },
  {
    order: 4,
    type: 'INSTITUCIONAL',
    desktopImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/be4cb60ce9c42abf7874265ccd40c091c3a08aba3a06f0ee4de65b1f7a2a5735?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286',
    mobileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49843ac146a53088d636138d96e806a6e3908fb9a966932b0a4ba18962fc20c4?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286',
    date: '01/08/2024, 08h'
  }
];


const BannerList: React.FC = () => {
  const path = usePathname()
  return (
    <section className="flex flex-col px-4 mt-2 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center py-6 w-full max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch my-auto text-4xl italic uppercase basis-12 text-neutral-700 max-md:max-w-full">
          LISTA DE BANNERS e defesas
        </h2>
        <div className="flex overflow-hidden gap-4 items-center self-stretch p-4 h-full bg-white rounded-lg border-2 border-solid border-zinc-400 min-w-[240px] w-[247px]">
          <div className="flex-1 shrink self-stretch my-auto text-base basis-0 text-neutral-800">Todos os banners</div>
          <div className="self-stretch my-auto w-6 text-3xl text-center uppercase text-neutral-800"><BsChevronCompactDown /></div>
        </div>
        <button className="flex gap-2 justify-center items-center self-stretch px-6 py-4 my-auto text-center uppercase border-2 border-solid border-neutral-800 max-md:px-5">
          <span className="self-stretch my-auto w-6 text-3xl text-neutral-800"><AiOutlinePlus /></span>
          <Link href={`${path}/criar`} className="self-stretch my-auto text-base font-semibold text-neutral-800">novo banner</Link>
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-center px-4 py-2 w-full text-base text-neutral-800 max-md:max-w-full">
        <div className="self-stretch my-auto whitespace-nowrap text-neutral-800 w-[140px]">Ordenação</div>
        <div className="self-stretch my-auto whitespace-nowrap w-[146px]">Tipo</div>
        <div className="self-stretch my-auto whitespace-nowrap min-w-[240px] w-[388px]">Banner</div>
        <div className="self-stretch my-auto w-[198px]">Data de Exibição</div>
        <div className="self-stretch my-auto whitespace-nowrap w-[136px]">Ações</div>
      </div>
      <h3 className="text-xl font-bold text-neutral-700 max-md:max-w-full">PRIORIDADE</h3>
      <p className="self-start text-base text-center text-neutral-800 max-md:max-w-full">Sem banner de Prioridade.</p>
      <h3 className="text-xl font-bold text-neutral-700 max-md:max-w-full">OFERTA</h3>
      <p className="self-start text-base text-center text-neutral-800 max-md:max-w-full">Sem banner de Oferta.</p>
      <h3 className="text-xl font-bold text-neutral-700 max-md:max-w-full">INSTITUCIONAL</h3>
      {bannerData.map((banner, index) => (
        <BannerItem key={index} {...banner} />
      ))}
    </section>
  );
};

export default BannerList;