"use client";
import VehicleCardRural from "@/components/ServicesComponents/RuralCard";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Governo() {
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
  const cars = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67eadccebd9ab862c99f192692c0d6f5550ad6db5ead0716ab05e851ed880bd0?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "YARIS HATCH",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/832a68da917743f9d92997ead97a1d71b98951dff9aabca54df654497fe0e15e?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "YARIS SEDAN",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/28552dc8cf29340d0d351b953cc860b44f272eaf19c5158c4d98296b0c3f0cba?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "COROLLA",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/103d0653c6f96c9bf62f68ce7379602bf299814694790d2d57951ea2f8281a84?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "COROLLA CROSS",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7cd0adb2ae7a4fce54bfaa8acb038b4482b0426fedafeb55d0845ae1e42b04f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "RAV4",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b60faa5fa3b1afaabfdc27fe342c543e276c6c7e0953237f5a0f4e11e4ada3f8?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "HILUX",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/844bc544ea54254aec523331cf2b4e6e16beca73dc7984f82522abc153a3ddf1?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "SW4",
      details: "",
      year: "2024/2024",
    },
  ];
  return (
    <>
      <div className="w-full text-zinc-800 p-3">
        <div className="w-full  lg:h-40 mt-5 lg:p-3 lg:bg-[url('https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fd52cc6ea54d943aa8ab07c74ebdb6d0e')] bg-cover bg-no-repeat">
          <h1 className="text-[40px]  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Governo
          </h1>
          <div className="w-16 border-b-2 ml-1 border-red-600 " />
        </div>
        <p className="mt-10">
          Órgãos do governo possuem condições especiais. Para consultá-las,
          solicite uma cotação ou vá até a Concessionária Toyota mais próxima.
        </p>
        <h2 className="text-2xl py-5">Todos modelos disponíveis:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-lg:hidden">
          {cars.map((vehicle, index) => (
            <VehicleCardRural
              key={index}
              imageSrc={vehicle.imageSrc}
              name={vehicle.name}
              details={vehicle.details}
              year={vehicle.year}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 lg:hidden mb-20">
          <Slider {...settings}>
            {cars.map((vehicle, index) => (
              <VehicleCardRural
                key={index}
                imageSrc={vehicle.imageSrc}
                name={vehicle.name}
                details={vehicle.details}
                year={vehicle.year}
              />
            ))}
          </Slider>
        </div>
        <h2 className="text-2xl py-5">
          Quais documentos são necessários para inclusão do pedido?
        </h2>
        <p className="pb-5">
          - CNH em nome do Titular da Placa de Taxi;
          <br />
          - Alvará vigente expedido pela Prefeitura Municipal;
          <br />
          - Comprovação de endereço vinculado ao Município da Licença de TAXI;
          <br />
          - Isenção de IPI e ICMS (se houver) com validade igual ou superior ao
          prazo estabelecido pelo fabricante para o faturamento;
          <br />- Declaração ou Decreto Municipal que confirme o aceite do
          modelo ou cor do veículo a ser adquirido. (Alguns municípios
          estabelecem regras quanto ao modelo e cor, por isso, é importante a
          apresentação do documento a fim de evitar suspensão do emplacamento
          após a emissão da NF).
        </p>
      </div>
    </>
  );
}
