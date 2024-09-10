"use client";
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface AdvantageCardProps {
  icon: string;
  title: string;
  content: string;
  className?: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  icon,
  title,
  content,
  className,
}) => {
  return (
    <div className={"w-full max-lg:p-3 h-96 sm:h-72 md:h-48 lg:h-full " + className} >
    <div
      className={`flex flex-col grow shrink h-full justify-center p-6 rounded-2xl bg-neutral-700 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
    >
      <div className="flex flex-col justify-center py-1.5 w-full text-xl tracking-tight leading-none">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain self-center aspect-[1.22] w-[55px]"
        />
        <div className="mt-1.5">{title}</div>
      </div>
      <div className="py-1.5 w-full text-sm leading-6">{content}</div>
    </div></div>
  );
};

const Advantages: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={
          " absolute h-fit bg-gray-500 text-neutral-100 p-2 px-3 w-fit rounded-full inset-0 mt-auto ml-auto -mb-10 sm:-mb-16"
        }
        onClick={onClick}
      >
        <GrNext size={16} />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={
          " absolute z-20 bg-gray-500 text-neutral-100 p-2 px-3 w-fit h-fit rounded-full inset-0 mt-auto mr-auto -mb-10 sm:-mb-16"
        }
        onClick={onClick}
      >
        <GrPrevious size={16} />
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
  const advantagesData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f58d19b2d7dd1513e065c4fb6fb62dbd9fbf5b9fd89fccef18ca75daf681698a?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Cashback Toyota",
      content:
        "Parte do valor da carta de crédito volta para você usar em acessórios, documentação ou revisão na sua concessionária Toyota. O Cashback também pode ser usado para locação de veículos com a Kinto Sahre.",
      className: "col-span-3",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcaccea44777083776282876651649d87b7570da12a3848c7aae123546fa5dce?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Concierge",
      content:
        "Um time de especialistas que auxilia sobre as documentações necessárias para a aquisição do carro, agilizando a entrega.",
      className: "col-span-3",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b85f69f6ddcf9afab65727ba02e3b24533192ccd1979365f7e7ff8dcec93579?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Comunicação Digital",
      content:
        "Todas as etapas de faturamento acontecem digitalmente, o que torna o processo muito mais rápido.",
      className: "col-span-3",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/89475d46f59c427ba018ec6ca1e9b597f37b565af4eee8a5a93e844e91a995d5?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Atendimento Humanizado",
      content:
        "Quando você tem dúvidas, a equipe de especialista está disponível",
      className: "col-span-3",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3461ca9adb3d24cbe3285bd9dbb7514bad8127593406d110e8df37ac7bcf9bb7?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Mais Prazo",
      content: "Pague seu plano de Consórcio em até 120 meses.",
      className: "col-span-2",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/287401296c0d751e51001020d5b32a32aaaa1ea64f75e1b2438bfdb1604a4f7e?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Carros 0km & Seminovos",
      content:
        "As cartas de crédito contemplam toda a linha de carros Toyota 0km. Além disso, você pode utilize-las para comprar seminovos com até 10 anos de uso.",
      className: "col-span-4",
    },
  ];

  return (
    <section className="flex flex-wrap gap-4 items-start py-4 mt-4 w-full text-zinc-600 max-md:max-w-full">
      <div className="flex flex-col grow shrink text-4xl leading-tight text-center w-[524px] max-md:max-w-full">
        <h2 className="w-full max-md:max-w-full">
          Vantagens do ConsórcioToyota
        </h2>
      </div>
      <p className="grow shrink text-lg leading-6 w-[524px] max-md:max-w-full">
        Confira alguns motivos para você escolher o Consórcio da maior montadora
        de veículos do mundo.
      </p>
      <div className="flex flex-col grow shrink text-center text-white w-[524px] max-md:max-w-full">
        <div className="grid grid-cols-6 gap-4 col-span-2 items-start w-full max-md:max-w-full max-lg:hidden">
          {advantagesData.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              content={advantage.content}
              className={advantage.className}
            />
          ))}
        </div>
        <div className="w-full customSlickFlex lg:hidden mb-20">
          <Slider {...settings}>
            {advantagesData.map((advantage, index) => (
              <AdvantageCard
                key={index}
                icon={advantage.icon}
                title={advantage.title}
                content={advantage.content}
                className={advantage.className}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
