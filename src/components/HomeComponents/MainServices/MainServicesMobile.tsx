'use client'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainServiceCardMobile from "./MainServiceCardMobile";

const MainServicesMobile: React.FC = () => {
  const mainServices = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/966283e1d46046cc2e6dcb4ebee6e10137323135f19935207d5f9cf472d3c7ce?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      alt: "Main service image",
      heading: "O melhor serviço de reparo e manutenção",
      buttonText: "Saiba mais",
    },
  ];
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
        breakpoint: 480,
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
            {mainServices.map((service) => (
              <MainServiceCardMobile {...service}/>
            ))}
            {mainServices.map((service) => (
              <MainServiceCardMobile {...service}/>
            ))}
            {mainServices.map((service) => (
              <MainServiceCardMobile {...service}/>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MainServicesMobile;
