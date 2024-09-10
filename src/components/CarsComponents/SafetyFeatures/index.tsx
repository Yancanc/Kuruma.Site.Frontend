'use client'
import React from 'react';
import Slider from 'react-slick';
import { safetyFeatures } from './safetyFeaturesData';
import FeatureCard from './FeatureCard';
import Image from 'next/image';

const SafetyFeatures: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col max-md:pl-5 bg-white w-full">
      <header className="flex overflow-hidden flex-col items-center pb-8 w-full bg-white max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-center max-w-full text-base font-semibold tracking-widest leading-6 uppercase text-stone-500 w-[1140px]">
        <Image
              width={400}
              height={400} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/52046b2cc17389bd7fe76f389724b5aa560b673b1b5e9658cbcb7495cffab6ec?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.07] w-[235px]" />
          <p className="self-stretch my-auto min-w-[240px] w-[729px] max-md:max-w-full">
            é composto pelos sistemas de suporte à condução que contribui para uma experiência de direção segura e confortável:
          </p>
        </div>
        <div className='w-screen'>
          <Slider {...settings}>
            {safetyFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </Slider>
        </div>
      </header>
    </section>
  );
};

export default SafetyFeatures;
