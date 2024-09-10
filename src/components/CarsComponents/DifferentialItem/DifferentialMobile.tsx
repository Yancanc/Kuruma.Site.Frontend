"use client";
import Image from "next/image";
import React, { useState } from "react";

const DifferentialsMobile: React.FC = () => {
  const [active, setActive] = useState(0);
  const differentialsData = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2a4bbf463d3d0caca8a98a46b69cf0e4e8b3a158d0f946ea8dedb14bf2b9263f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Design",
      description:
        'Rodas de liga leve 17", faróis halógenos, e retrovisores externos eletro-retráteis e rebatimento automático. Acabamento interno em tecido e volante em couro na cor preta.',
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1eec240d59655886e22477a84ef092c15620bd4d0b9a94e601a44c23f5d71863?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Tecnologia",
      description:
        'Ar-condicionado digital automático, central multimídia de 8", 9" ou 10" com conexão Android Auto® e Apple CarPlay®. Painel digital de 4,2", volante com controles de áudio e funções TSS (Toyota Safety Sense).',
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/623501db485013367ce94cd0e32961608d6015474230846144610e4fbb1c4edf?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Performance",
      description:
        "Motor de 2.0 L Dual VVT-iE 16 V DOHC Flex com potência de 177 cv (E) / 169 cv (G) e 21,4 Kgf.m de torque. Transmissão automática CVT de 10 velocidades.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bfed24b32ad26561ced29780568865cebd4fdebbf0e94e40f0c4bf7937f9d5ec?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Segurança",
      description:
        "7 airbags, sensores de estacionamento dianteiro, traseiro e alerta de tráfego traseiro, e TSS (Toyota Safety Sense) com controle adaptativo de velocidade de cruzeiro, assistente de pré-colisão, sistema de alerta de oscilação, farol alto automático e sistema de alerta de mudança de faixa com controle de direção.",
    },
  ];

  return (
    <section className="flex flex-col items-end w-full">
      <div className="flex items-center pt-8 bg-white w-full">
        <div className="flex relative flex-col overflow-x-hidden  items-center self-stretch bg-white w-full">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abf9bd8f8f71bec493e8291fe6010d624dccb30d6d61fa02ea821280a95dc08d?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            className="object-contain -mr-2 -mb-1 z-0 w-full aspect-[6.1] max-w-[320px] ml-auto"
            alt=""
          />
          <div className="flex z-0 gap-2.5 items-start w-full bg-zinc-900">
            <h2 className="absolute top-4 right-5 z-0 self-start text-xl leading-tight text-white h-[29px]  w-[133px]">
              Diferenciais
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 py-3 w-full flex flex-col items-center">
        <div className="flex justify-around items-center w-full">
          {differentialsData.map((data, i) => {
            return (
              <Image
                width={400}
                height={400}
                alt="icon"
                onClick={() => setActive(i)}
                loading="lazy"
                src={data.iconSrc}
                className={`object-contain aspect-square w-[55px] mx-auto rounded transition-all ${
                  active == i ? "invert bg-black" : "invert-0 bg-transparent"
                }`}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-4 items-center justify-center py-2 w-full transition-all">
          <div className="col-span-4 h-1 w-full border-b bordedr-white" />
          {active > 0 && <div />}
          {active > 1 && <div />}
          {active > 2 && <div />}
          <div className={` flex justify-center relative -mt-2 `}>
            <div className="w-3 h-3 rounded-full border-2 border-white border-solid bg-zinc-900 " />
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-4 w-full px-4 min-h-96">
            <h3 className="text-lg font-semibold text-white">
              {differentialsData[active].title}
            </h3>
            <p className="mt-2 text-base leading-6 text-stone-50">
              {differentialsData[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsMobile;
