'use client'
import BlindagemCard from "@/components/ServicesComponents/BlindagemCard";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}
export default function Blindagem() {
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
  const benefits: Benefit[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64b32a2bc6cf5abb52a8edd1c5444f09c2f3352b81fbce9c7fb8d24911678b22?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Disponibilidade",
      description:
        "Contratação do serviço de blindagem em concessionárias Toyota participantes espalhadas pelo Brasil para clientes que adquirirem um Corolla ou um Corolla Cross.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b85bc8c61f5134bd8b55937678e7a8d981c0c7a32971305a0357a380295ee0fe?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Garantia",
      description:
        "Cinco anos de garantia de fábrica para o seu veículo. Cinco ou dez anos de garantia da blindagem, dependendo do material e vidro escolhido.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb22621ade0189b9512a80eee33cd4d7d572e01465366d3aca77f0b78c19a261?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Proteção",
      description:
        "Todos os materiais utilizados na blindagem, como o aço e a manta, estão de acordo com os padrões e pré-requisitos estabelecidos pela legislação brasileira.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6545d851a251094f992f6795ccc1ce94ee62409c335a2776acbdb832a4348199?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Qualidade",
      description:
        "Processo de instalação seguindo os padrões Toyota de qualidade.",
    },
  ];
  return (
    <>
      <main className="flex flex-col max-w-[655px]">
        <header className="flex flex-col justify-center w-full text-4xl leading-10 text-black max-md:max-w-full">
          <div className="flex flex-col justify-center py-2 w-full max-md:max-w-full">
            <h1 className="max-md:max-w-full">
              Mais segurança para você e sua família
            </h1>
            <div className="flex mt-2.5 bg-red-600 rounded min-h-[2px] w-[60px]" />
          </div>
        </header>
        <section className="flex flex-col mt-4 w-full text-base leading-6 text-zinc-600 max-md:max-w-full">
          <p className="w-full max-md:max-w-full">
            Quem escolhe um Toyota busca um carro que oferece mais segurança e
            conforto para todos os passageiros. Ao optar pela blindagem
            certificada pela Toyota você terá contratado serviços que seguirão à
            risca o padrão de qualidade e atendimento que você já conhece.
          </p>
        </section>
        <section className="flex flex-col mt-4 w-full text-base leading-6 text-zinc-600 max-md:max-w-full">
          <p className="w-full max-md:max-w-full">
            As empresas certificadas passaram por uma primorosa e detalhada
            avaliação do processo de instalação da blindagem, oferecendo a você
            e sua família um serviço de confiança.
          </p>
        </section>
        <section className="flex flex-wrap gap-4 items-start py-4 mt-4 w-full text-zinc-600 max-md:max-w-full">
          <h2 className="flex flex-col grow shrink text-4xl leading-tight text-center w-[524px] max-md:max-w-full">
            Benefícios e vantagens
          </h2>
          <div className="flex flex-col w-full gap-5 max-lg:hidden">
            {benefits.map((benefit, index) => (
              <BlindagemCard key={index} {...benefit} />
            ))}
          </div>
          <div className="lg:hidden w-full mb-20">
            <Slider {...settings}>
              {benefits.map((benefit, index) => (
                <div className="p-5">
                <BlindagemCard key={index} {...benefit} />
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="flex overflow-hidden gap-4 items-center px-4 pt-6 pb-4 w-full rounded-2xl shadow-[0px_0px_16px_rgba(0,0,0,0.17)] text-zinc-600 max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex flex-wrap gap-2.5 items-center w-full text-4xl leading-tight max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ec27206af9de7e1f42309097b01cc4a5a0ba6b5cad7aea35864ad5d60a5593?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-[2.35] w-[195px]"
                />
                <h2 className="self-stretch my-auto">Como solicitar?</h2>
              </div>
              <p className="mt-2 text-sm leading-5 max-md:max-w-full">
                Você pode solicitar a blindagem certificada na concessionária
                Toyota participante no momento da aquisição do seu veículo. O
                serviço será executado pela blindadora de sua preferência,
                certificada pela Toyota, e você retira seu veículo blindado
                diretamente na concessionária em que o adquiriu, com
                tranquilidade e segurança.
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-wrap gap-7 justify-between items-center p-4 w-full max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5738fa6002832f4d1e0cce0c156303665012512df297d165f231bdad692892d?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt="Company Logo 1"
            className="object-contain shrink-0 self-stretch my-auto aspect-[4.44] w-[111px]"
          />
          <div className="flex shrink-0 self-stretch my-auto w-px h-5 bg-zinc-700" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4e2b4b5d452bbd02c46460100f49dd31db6b8d6959a622e9beb3b59542ed1f4?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt="Company Logo 2"
            className="object-contain shrink-0 self-stretch my-auto aspect-[4.44] w-[111px]"
          />
          <div className="flex shrink-0 self-stretch my-auto w-px h-5 bg-zinc-700" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d82b9405655da0839da731d39c6ebaaf9c1178f1b22c30c98c04e9de3c9a4f93?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt="Company Logo 3"
            className="object-contain shrink-0 self-stretch my-auto aspect-[5.29] w-[111px]"
          />
          <div className="flex shrink-0 self-stretch my-auto w-px h-5 bg-zinc-700" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/61af254997383070c0a8a8d9884f2623d0aab68d5a8ae2696b702cd0dbe66350?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt="Company Logo 4"
            className="object-contain shrink-0 self-stretch my-auto aspect-[4.44] w-[111px]"
          />
        </div>
        <section className="flex flex-col my-4 w-full text-zinc-600 max-md:max-w-full">
          <div className="flex overflow-hidden gap-4 items-center px-4 pt-6 pb-4 w-full rounded-2xl shadow-[0px_0px_16px_rgba(0,0,0,0.17)] max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-wrap items-center w-full text-4xl leading-tight whitespace-nowrap max-md:max-w-full">
                  <h2 className="self-stretch my-auto">Modelos</h2>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b988b3f81331e3c90cdbd9192452dffffa5625e5dbebc21b208abaeb084e8bad?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                    alt="Toyota Models"
                    className="object-contain flex-1 shrink gap-0 self-stretch my-auto aspect-[7.94] basis-0 min-w-[240px] w-[483px] max-md:max-w-full"
                  />
                </div>
                <p className="mt-2 text-sm leading-5 max-md:max-w-full">
                  A blindagem certificada pela Toyota está disponível para todas
                  as versões do Corolla (a partir do modelo 2020) e do Corolla
                  Cross, seja 0km ou seminovo. Os veículos seminovos precisam
                  passar por uma avaliação prévia em uma concessionária Toyota.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
