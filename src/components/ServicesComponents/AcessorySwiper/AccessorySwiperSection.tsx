'use client'
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AccessoryCard from "./AccessoryCard";
import AccessoryCarGallery from "./AccessoryCarGallery";

interface AccessoryData {
  genuineLabel: string;
  imageSrc: string;
  title: string;
  description: string;
  code: string;
  buttonText: string;
}

const AccessoriesSection: React.FC = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 770,
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

  const accessoryData: AccessoryData[] = [
    {
      genuineLabel: "Acessório Genuíno",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/49ccc172e4d1b3d1b6f050a84f6334c649c36513bd46b8e50a77dc9dd3ce2551?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Assistente de abertura da caçamba",
      description:
        "O assistente de abertura da caçamba facilita a abertura e fechamento da tampa traseira, tornando-a mais leve e prática. Produto de alta qualidade.",
      code: "PC3B2-0K001",
      buttonText: "consultar valor",
    },
    {
      genuineLabel: "Acessório Genuíno",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0597065c8d2adc1ecec71c0a26ac151d657b3cdb2900d4c103e360a356062d83?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Aplique cromado tampa da caçamba",
      description:
        "Adicione um toque exclusivo à sua Hilux com design sofisticado e elegante, combinando perfeitamente com acessórios genuínos cromados.",
      code: "PC406-0K001",
      buttonText: "consultar valor",
    },
    {
      genuineLabel: "Acessório Genuíno",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2685acf2160752f9f0e64b14d3896e25c0e321ac7180318248cbd226af80a136?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Santantônio Sport",
      description:
        "Transforme o visual do seu veículo com um design exclusivo e esportivo, que apresenta linhas arredondadas acompanhando o formato da cabine.",
      code: "PH3B0-0KA11-BL",
      buttonText: "consultar valor",
    },
    {
      genuineLabel: "Acessório Genuíno",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0ca4d7bda9c453d84974f9e4bd9b646384eac69b4b8c5df434ce6a49eb39dff1?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Aplique cromado da lanterna",
      description:
        "Personalize sua Hilux com um design exclusivo e sofisticado, combinando com acessórios genuínos cromados. Encaixe perfeito e exclusivo.",
      code: "PC410-0K001",
      buttonText: "consultar valor",
    },
  ];

  return (
    <section className="flex flex-col pt-5">
      <div className="flex flex-col items-center pt-8 pb-12 mt-5 w-full max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1140px]">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <div className="flex overflow-hidden relative gap-4 items-start px-8 py-8 mb-5 w-full rounded-2xl bg-neutral-900 min-h-[150px] shadow-[0px_0px_12px_rgba(0,0,0,0.2)] max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ffe7b78e8ad1a7261a620f00e3c4b43c76ccf1ae4b28206f069b13b126dbd77?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                alt=""
                className="object-contain absolute top-2/4 left-2/4 z-0 self-start -translate-x-2/4 -translate-y-2/4 aspect-[4.57] h-[250px] min-w-[240px] w-[1140px] max-md:max-w-full"
              />
              <div className="flex z-0 flex-col justify-center my-auto min-w-[240px] w-[558px] max-md:max-w-full">
                <h2 className="text-3xl leading-tight text-white max-md:max-w-full">
                  Acessórios Genuínos
                </h2>
                <p className="mt-4 text-sm leading-5 text-white max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Vitae pharetra diam
                  ullamcorper blandit. Sed non et luctus gravida dictumst
                  tristique cras. Sagittis rutrum tellus quis diam
                </p>
              </div>
            </div>
            <AccessoryCarGallery />
            <div className="px-5">
              <Slider {...settings}>
                {accessoryData.map((accessory) => (
                <div className="p-4 h-full">
                  <AccessoryCard key={accessory.code} {...accessory} />
                </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
