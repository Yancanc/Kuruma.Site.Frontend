"use client";
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface InfoCardProps {
  icon: string;
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex grow shrink gap-4 justify-center items-center px-4 bg-white rounded-2xl min-h-[110px] shadow-[0px_0px_16px_rgba(0,0,0,0.17)] w-full max-md:px-5 ">
      <div className="flex gap-4 items-center pr-4 h-full border-r-2 border-zinc-500 min-w-[240px] w-1/2">
        <img loading="lazy" src={icon} alt="icon" className="w-12" />

        <div className=" my-auto text-lg leading-snug text-red-600">
          {title}
        </div>
      </div>
      <div className="w-full text-sm  text-zinc-600">{content}</div>
    </div>
  );
};
const InfoCardMobile: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return (
    <div className="w-full p-4 mt-auto h-96 sm:h-72 md:h-48 ">
    <div className="w-full gap-3 text-center border-red-600 flex flex-col items-center just border-2 rounded-2xl p-4 h-full">
      <img loading="lazy" src={icon} alt="icon" className="w-16 p-2 bg-neutral-100 -mt-12" />
      <div className="h-fit my-auto flex flex-col gap-3">
      <p className=" text-lg leading-snug text-red-600">{title}</p>
      <p className="w-full text-sm  text-zinc-600">{content}</p>
      </div>
    </div>
    </div>
  );
};

const InfoCards: React.FC = () => {
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
  const infoCardsData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd329b76da62817600ea1e787719d30f5bb242b10eed011e701679b77ef786e8?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Grupo",
      content:
        "Ao aderir o Consórcio Toyota, você passa a fazer parte de um grupo de pessoas físicas e jurídicas, que contribuem com parcelas mensais, com o mesmo objetivo: adquirir o carro dos sonhos.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3dcfff4e6bcc2560a2086181619ae01f9e95878c32f6bd42db477d697cd1f573?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Fundo Comum",
      content:
        "É um percentual do pagamento mensal de todos os consorciados. Utilizamos nas assembleias, como saldo para aquisição do seu carro novo.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb9518f94e897ff771da514aefcd684de8822e419a3cdd389a07ec9afefc6564?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Assembleias",
      content:
        "As assembleias definem os consorciados contemplados no mês. Pagando regularmente as parcelas, até o fim do plano, todos os participantes são contemplados.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/046d48687c3b37345f1a0fedd03329100b03eca7ff559ef6e386495e7918f295?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Contemplação",
      content:
        "Mensalmente, você poderá ser sorteado ou ofertar um lance. Sendo contemplado, você recebe a carta de crédito para realizar o seu sonho.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/910467170fbb75d31d0cdaa146bcb4e2da8f65679244d0816109af5344dfda22?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Fundo Comum",
      content:
        "É um percentual do pagamento mensal de todos os consorciados. Utilizamos nas assembleias, como saldo para aquisição do seu carro novo.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e858b4c9d3165284fba1159e5f49c724a0ae2ba43f114eaa1634263cacef336?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Fundo Utilizando o crédito",
      content:
        "É um percentual do pagamento mensal de todos os consorciados. Utilizamos nas assembleias, como saldo para aquisição do seu carro novo.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97e12e9b7364c2632b86349a07f161f461307747b75420c24937a59b50adc41b?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "E qual o papel da Administradora de Consórcio Toyota?",
      content:
        "Nosso papel é formar e administrar os grupos, cuidando dos interesses dos consorciados e garantindo que todas as regras sejam aplicadas.",
    },
  ];

  return (
    <>
      <section className="flex flex-wrap max-lg:hidden gap-4 items-start mt-4 w-full max-md:max-w-full">
        {infoCardsData.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </section>
      <section className="lg:hidden my-20 flex flex-col customSlickFlex ">
        <Slider {...settings}>
          {infoCardsData.map((card, index) => (
            <InfoCardMobile
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
            />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default InfoCards;
