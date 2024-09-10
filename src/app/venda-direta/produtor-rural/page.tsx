"use client";
import VehicleCardRural from "@/components/ServicesComponents/RuralCard";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ProdutorRural() {
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
  const hiluxModels = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fea6dbbfbbdb6398fe46222344b09ad0321e9f252513fb2be627d8f45acc5148?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "HILUX CHASSI",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/97f3bb3bacd45032a8742a7f4a6e4d9963461f2f30b76d91f6488bfb8d3c845f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "HILUX CABINE DUPLA",
      details: "STD PP",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/10ace6efe7fbae388d354577007b3c178464bbb853971a97a4a75873e776f93b?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "HILUX CABINE SIMPLES",
      details: "",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/986618a0f905632bde458b33beea2d0f0da78776d5f25e9bcb284576dce58f33?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "HILUX CABINE DUPLA",
      details: "SR",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/80a960066c086b6f9d6c8666843a49c796061c5a610fa23b318e0f3dfc5f6686?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "HILUX CABINE DUPLA",
      details: "SRV",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9298c8809b5d25be39332c1bf136e4f439b22b7a1dbc994532b97fc86b8aad6f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "HILUX SW4",
      details: "5 LUGARES",
      year: "2024/2024",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/10a43d67ebceada526bc325734a9ac38881df02ecd3a061ad5376b33a818a5c7?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      name: "HILUX SW4",
      details: "7 LUGARES",
      year: "/2024",
    },
  ];
  return (
    <>
      <div className="w-full text-zinc-800 p-3">
        <div className="w-full  lg:h-40 mt-5 lg:p-3 lg:bg-[url('https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F2ff1efc4949f45fc9b77e6df51933baa')] bg-cover bg-no-repeat">
          <h1 className="text-[40px]  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Produtor Rural
          </h1>
          <div className="w-16 border-b-2 ml-1 border-red-600 " />
        </div>
        <p className="mt-10">
          Os veículos Toyota são reconhecidos em todo o mundo por sua qualidade
          e confiabilidade. Projetados para enfrentar os desafios do campo,
          nossos veículos são construídos para durar e oferecer desempenho
          consistente, mesmo nas condições mais adversas.
          <br />
          <br />
          Na Toyota, reconhecemos o papel crucial desempenhado pelos produtores
          rurais no desenvolvimento e sustentabilidade do nosso país.
          Compreendemos as demandas únicas enfrentadas no campo e estamos
          comprometidos em oferecer soluções automotivas que atendam às suas
          necessidades específicas.
          <br />
          <br />
          Entre em contato conosco para descobrir mais sobre nossos descontos
          especiais para produtores rurais e dar o próximo passo para um
          transporte confiável e eficiente.
        </p>
        <h2 className="text-2xl py-5">
          Como você se enquadra na categoria Produtor Rural?
        </h2>
        <p className="pb-5">
          O desconto para produtor rural é concedido a quem exerce atividades
          e/ou tem propriedades ligadas ao cultivo da terra ou, ainda, para
          criação de animais. Alguns exemplos:
        </p>
        <ul className="list-disc list-inside decoration-zinc-800 px-3">
          <li>Piscicultura</li>
          <li>Pecuárias</li>
          <li>Suinocultura</li>
          <li>Empresário</li>
          <li>Avicultura</li>
          <li>Atividades agrícolas</li>
          <li>Exploração da apicultura</li>
          <li>Extração e a exploração vegetal</li>
        </ul>
        <h2 className="text-2xl py-5">
          Quais veículos você pode comprar com desconto direto de fábrica como
          Produtor Rural?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-lg:hidden">
          {hiluxModels.map((vehicle, index) => (
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
            {hiluxModels.map((vehicle, index) => (
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
