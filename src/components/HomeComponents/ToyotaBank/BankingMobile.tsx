"use client";
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { cardData } from "./BankInfo";
import BankingCard from "./BankingCard";
import { actualSite } from "@/utils/utils";

const BankingMobile: React.FC = () => {
  const { siteDefaultName } = actualSite();
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
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
        <h1 className="text-3xl  text-black  max-md:max-w-full text-center">
          Principais serviços
        </h1>
        <p className="mt-2 text-xl leading-6 border-b border-black w-fit px-5 pb-2 text-center text-black">
          serviços mais procurados
        </p>
        <div className=" w-screen py-8">
          <Slider {...settings}>
            {[
              ...cardData,
              {
                subtitle: `TOYOTA ${siteDefaultName.toLocaleUpperCase()}`,
                title: "Consórcio",
                imageSrc:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/cc14a0f7696e6669edc65737b4cb2f780fe28149511d2b9d831a5a0912ca8503?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
                imageAlt: `Consórcio Toyota ${siteDefaultName} illustration`,
                buttonText: "Saiba mais",
                link: "/servicos/consorcio",
              },
            ].map((card, index) => (
              <BankingCard key={index} {...card} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BankingMobile;
