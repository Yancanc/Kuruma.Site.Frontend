"use client";
import VehicleCard from "@/components/ServicesComponents/FrotistasCard";
import ServicesLayout from "@/components/ServicesComponents/ServicesLayout";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Frotista() {
  const [currentIndex, setCurrentIndex] = useState(0);
  interface VehicleData {
    imageSrc: string;
    title: string;
    subtitle: string;
    features: string[];
  }
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
  const vehiclesData: VehicleData[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/82f08c1c3183963356832072f7e1c99f66f47e75090d089a9d41f72713377370?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "FROTA COROLLA",
      subtitle: "ALTIS HYBRIDO | 24/24",
      features: ["Consumo de ------", "Sistema Híbrido Flex", "Teto Solar"],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/021e3d1620af02c7693d96bee3c8333717d365d67800f954b7a8674f8a5b9d11?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "FROTA YARIS",
      subtitle: "XL | 24/24",
      features: [
        "Consumo de ------",
        "Sistema Híbrido Flex",
        "Rodas em liga leve",
      ],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3e0baf4b1bfcb4ae5fa957b3317a94fc6fa6b77f4afb93414de87cd137f793f2?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "FROTA HILUX",
      subtitle: "STD POWER PACK 4X4 | 24/24",
      features: ["Consumo de -----", 'Sistema multimídia de 9"', "Tração 4x4"],
    },
  ];

  return (
    <>
      <div className="w-full text-zinc-800 p-3">
        <div className="w-full  h-36 mt-5 lg:p-3 lg:bg-[url('https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F90ed0d8a41f94f5c9a4088fbb2d49938')] bg-cover bg-no-repeat">
          <h1 className="text-[40px]  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Frotista
          </h1>
          <div className="w-16 border-b-2 ml-1 border-red-600 " />
        </div>
        <p className="mt-10">
          A Venda Direta da Toyota oferece uma solução eficiente e personalizada
          para empresas que buscam renovar ou expandir sua frota de veículos. A
          Toyota é reconhecida mundialmente pela qualidade e confiabilidade de
          seus veículos. Nossos carros são projetados para proporcionar
          desempenho superior, economia de combustível e baixos custos de
          manutenção, garantindo que sua frota opere de forma eficiente e sem
          contratempos. Além de vantagens exclusivas, todos os modelos estão
          cobertos pela garantia de cinco anos ou 100 mil quilômetros. Não perca
          mais tempo e leve sua frota para o próximo nível com a Toyota.
        </p>
        <h2 className="text-2xl py-5">Nossos modelos:</h2>
        <div className="flex flex-col gap-5 max-lg:hidden">
          {vehiclesData.map((vehicle, index) => (
            <VehicleCard
              key={index}
              imageSrc={vehicle.imageSrc}
              title={vehicle.title}
              subtitle={vehicle.subtitle}
              features={vehicle.features}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 lg:hidden mb-20">
          <Slider {...settings}>
            {vehiclesData.map((vehicle, index) => (
              <VehicleCard
                key={index}
                imageSrc={vehicle.imageSrc}
                title={vehicle.title}
                subtitle={vehicle.subtitle}
                features={vehicle.features}
              />
            ))}
          </Slider>
        </div>
        <h2 className="text-2xl py-5">Documentações necessárias:</h2>
        <p className="pb-5">
          - Ficha cadastral de Empresário individual ou Contrato Social ou Ato
          Constitutivo;
          <br />
          - Ata de eleição da Diretoria e/ou Procuração se houver;
          <br />
          - RG/CPF ou documento equivalente do administrador ou representante
          legal da empresa;
          <br />
          - Cartão CNPJ (Situação Ativa);
          <br />- Inscrição Estadual (Situação Regular)
        </p>
      </div>
    </>
  );
}
