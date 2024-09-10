"use client";
import VehicleCardRural from "@/components/ServicesComponents/RuralCard";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Taxista() {
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
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1f041d06b13750ea443fbe01f1abb3dfca60641bf16309ba55f8055d7799805d?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "COROLLA",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e146ee9321185ed97dd67cb3b2a7d0dfc55f096b88b232be77e1cd3dd91fa84c?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "COROLLA CROSS",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b65d86686b30f80f8db518d2f32b3873ae16647419f6af18b67419846f4475ad?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "YARIS SEDAN",
      details: "",
      year: "2024/2024",
    },
  ];
  return (
    <>
      <div className="w-full text-zinc-800 p-3">
      <div className="w-full  lg:h-40 mt-5 lg:p-3 lg:bg-[url('https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F9ca52e18318140f48b3b378fb33190da')] bg-cover bg-no-repeat">
      <h1 className="text-[40px]  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Taxista
          </h1>
          <div className="w-16 border-b-2 ml-1 border-red-600 " />
        </div>
        <p className="mt-10">
          Se você é taxista e procura um veículo confiável e eficiente para
          enfrentar as demandas da cidade, a Toyota tem a solução ideal para
          você. Com nosso programa de venda direta para taxistas, oferecemos
          condições especiais e benefícios exclusivos para ajudá-lo a adquirir o
          carro perfeito para o seu trabalho.
          <br />
          <br />
          Os veículos Toyota são construídos com os mais altos padrões de
          qualidade e segurança, proporcionando tranquilidade e confiança em
          cada viagem tanto para o motorista quanto para os passageiros. Você
          pode confiar na Toyota para oferecer um carro que atenda às suas
          necessidades de táxi, proporcionando confiabilidade e tranquilidade
          durante cada corrida.
          <br />
          <br />
          Nossa equipe de vendas diretas está preparada para oferecer orientação
          especializada e assistência personalizada em todas as etapas do
          processo de compra. Estamos comprometidos em ajudá-lo a encontrar o
          veículo certo que atenda às suas necessidades específicas como
          taxista.
        </p>
        <h2 className="text-2xl py-5">
          Nossos modelos com isenção de IPI e ICMS:
        </h2>
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
          <br />
          - Declaração ou Decreto Municipal que confirme o aceite do
          modelo ou cor do veículo a ser adquirido. (Alguns municípios
          estabelecem regras quanto ao modelo e cor, por isso, é importante a
          apresentação do documento a fim de evitar suspensão do emplacamento
          após a emissão da NF).
        </p>
      </div>
    </>
  );
}
