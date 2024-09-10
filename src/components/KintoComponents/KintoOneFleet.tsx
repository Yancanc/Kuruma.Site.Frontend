'use client'
import { GrNext, GrPrevious } from "react-icons/gr";
import BenefitCardKinto from "./BenefitCarKinto";
import KintoHeader from "./KintoHeader";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function KintoOneFleet() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={
          " absolute h-fit bg-neutral-100 text-[#59a2b5] w-fit rounded-full inset-0 mt-auto ml-auto mr-4 -mb-16"
        }
        onClick={onClick}
      >
        <GrNext size={30} />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={
          " absolute z-20 bg-neutral-100 text-[#59a2b5] w-fit h-fit rounded-full inset-0 mt-auto mr-auto ml-4 -mb-16"
        }
        onClick={onClick}
      >
        <GrPrevious size={30} />
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
          className={`w-6 h-1 cursor-pointer relative -bottom-10 ${
            currentIndex === index ? "bg-[#25454d]" : "bg-neutral-100"
          }`}
        ></div>
      );
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const benefitsData = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/48cbc1bbf4271f0e0f95ddaebd85f56e7d3ba9f66606e9144bd3c90e151acd3f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Monitoramento 24h",
      description:
        "Veículos monitorados por telemetria. Mais surança para os usuários e mais eficiência para os gestores de frota.",
      span: "col-span-2",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3f1988c524487fa66ac8ffc0d93cec4b8948121feb30c216c501e8fd874ce2c9?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Economia e mais eficiência",
      description:
        "Reduza seu capital imobilizado, seus custos com juros e a sua estrutura administrativa dedicada à gestão de frotas. Seu controle de despesas são mais fáceis com a KINTO.",
      span: "col-span-2",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/026f68db5d7ac3c9acd1b7bdf4ce27c5d590db443d6d1d75ae8eebee54a6d499?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Manutenção especializada",
      description:
        "A manutenção dos veículos é sempre realizada na Rede de Concessionárias e com peças genuínas.",
      span: "col-span-2",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0ab07f4d43c7c67b429b599a5595f5302df309b657e5b469d0d8ca80c2c8363d?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Blindagem de fábrica",
      description:
        "Aluguel do modelo Corolla com blindagem certificada pela Toyota. Mais segurança e tranquilidade com o aval da Engenharia da Toyota.",
      span: "col-span-3",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9cc60ad85a2262d31b8f8ea7cfac64175d2fad5d24185a021a484f5450ee6902?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Na medida certa",
      description:
        "Você pode contratar de 1 até quantos veículos precisar, sem limite mínimo ou máximo. No Kinto One Fleet, você monta a sua frota de acordo com o que você precisa.",
      span: "col-span-3",
    },
  ];
  return (
    <>
      <div className="flex flex-col  justify-center items-center w-full bg-neutral-100  ">
        <div className="flex flex-col justify-center items-center max-w-full w-full">
          <div className="flex relative flex-col justify-center py-4 w-full">
            <div className="flex z-0 flex-col max-lg:px-5 justify-center pb-8 w-full ">
              <KintoHeader
                title=": terceirização e gestão de frota para empresa."
                subtitle="O KINTO One Fleet é muito mais do que um simples serviço de terceirização de frotas. Além dos serviços tradicionais como gestão de multas, agendamento de serviços e assistência 24 horas, aliamos a alta qualidade dos produtos Toyota à excelência em serviços de nossas concessionárias.Mais do que um serviço de gestão de frotas. O seu parceiro favorito de negócios!"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a44955285a14f0bc21b00d00a0cfd14cd21d81ad470faecac904e7d89b6acaea?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
              />
            </div>
            <div className="flex absolute bottom-0 left-0 z-0 bg-[#59a2b5]  h-[105px] min-h-[105px]  w-full" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8a57e41a8129ed5e32b0bcb75acb537be6ceecdffe04eb32d01d4127b7fa24c?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
              alt=""
              className="object-contain z-0 w-full aspect-[4.59]  max-w-[1140px] mx-auto"
            />
          </div>
          <div className="flex relative flex-col mb-12 w-full max-lg:px-5 ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aec0699cfb53450fa63d9ffef276747e7b9614103e9e326bf668440d5ad5c1cf?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
              alt=""
              className="object-cover object-top absolute bottom-0 left-0 z-0 h-[800px] -mt-1  top-0 translate-y-[0%] w-full"
            />
            <div className="flex relative flex-col pb-12 w-full  max-w-[1140px] mx-auto">
              <div className="flex z-0  flex-col justify-center py-8 w-full text-3xl tracking-tighter leading-none text-white whitespace-nowrap ">
                <div className="flex gap-4 justify-center w-full ">
                  <div className="overflow-hidden flex-1 shrink gap-2.5 min-w-[240px] size-full ">
                    BENEFÍCIOS
                  </div>
                </div>
              </div>
              <div className="flex z-0 flex-wrap gap-8 justify-center items-start self-center w-full">
                <div className="max-lg:hidden grid grid-cols-6 grow shrink gap-4 justify-center items-start text-white min-w-[240px] w-[1062px] ">
                  {benefitsData.map((benefit, index) => (
                    <BenefitCardKinto key={index} {...benefit} />
                  ))}
                </div>
                <div className="w-full lg:hidden customSlickFlex">
                  <Slider {...settings}>
                    {benefitsData.map((benefit, index) => (
                      <div className="p-4 w-full my-auto">
                        <BenefitCardKinto key={index} {...benefit} />
                      </div>
                    ))}
                  </Slider>
                </div>
                <button className="flex lg:px-20 gap-2 max-lg:mt-20 max-lg:-mb-10 justify-center items-center py-3 text-2xl font-bold tracking-wider leading-none text-center text-cyan-700 bg-neutral-100 rounded min-h-[55px] min-w-[240px] w-fit max-md:px-5">
                  <span className="flex-1 shrink self-stretch my-auto ">
                    Solicitar Proposta
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
