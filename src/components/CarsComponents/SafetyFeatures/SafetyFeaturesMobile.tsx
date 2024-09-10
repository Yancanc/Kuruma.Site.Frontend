"use client";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { safetyFeatures } from "./safetyFeaturesData";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

const SafetyFeaturesMobile: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={
          " absolute h-fit bg-gray-500 text-neutral-100 p-2 px-4 w-fit rounded-full inset-0 mt-auto ml-auto mr-2 -mb-16"
        }
        onClick={onClick}
      >
        <GrNext size={20} />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={
          " absolute z-20 bg-gray-500 text-neutral-100 p-2 px-4 w-fit h-fit rounded-full inset-0 mt-auto mr-auto ml-2 -mb-16"
        }
        onClick={onClick}
      >
        <GrPrevious size={20} />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
    customPaging: (index: number) => {
      return (
        <div
          key={index}
          className={`w-6 h-2 cursor-pointer relative -bottom-10 ${
            currentIndex === index ? "bg-gray-500" : "bg-gray-300"
          }`}
        ></div>
      );
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className=" pt-20 w-full bg-white flex">
      <div className="pb-20 w-full mx-auto flex bg-white flex-col items-center overflow-hidden">
        <div className="flex flex-col gap-8 items-center w-full text-base font-semibold tracking-widest leading-6 uppercase text-stone-500">
        <Image
              width={400}
              height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52046b2cc17389bd7fe76f389724b5aa560b673b1b5e9658cbcb7495cffab6ec?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="object-contain shrink-0 self-stretch m-auto aspect-[1.07] w-[185px]"
          />
          <p className="self-stretch my-auto text-center font-normal text-sm px-2 mx-auto max-w-[400px] w-full">
            é composto pelos sistemas de suporte à condução que contribui para
            uma experiência de direção segura e confortável:
          </p>
        </div>
        <div className=" w-screen py-8 customSlickFlex">
          <Slider {...settings}>
            {safetyFeatures.map((feature, index) => (
                <div className="flex items-end h-full px-5">
              <FeatureCard key={index} {...feature} />
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeaturesMobile;
