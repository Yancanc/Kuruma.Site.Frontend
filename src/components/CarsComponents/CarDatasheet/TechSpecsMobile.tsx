'use client'
import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai"; 
export default function TechSpecsMobile() {
    const [active, setActive] = useState(false)
    const specs = [
        {
          label: "MOTOR",
          value: "1.8L VVT-i¹ | 16V | DOHC² Flex",
        },
        {
          label: "TIPO DE COMBUSTÍVEL",
          value: "Flex",
        },
        {
          label: "CAPACIDADE DE CARGA",
          value: "440 L",
        },
        {
          label: "DESEMPENHO",
          value: "101 cavalos de potência",
        },
        {
          label: "TRANSMISSÃO",
          value: "Direct Shift (CVT³) com modo sequencial de dez velocidades",
        },
        {
          label: "ÁUDIO MULTIMÍDIA",
          value: "9 pol. Ecrã táctil multimédia",
        },
      ];
  return (
    <>
      <div className="flex w-full">
      <Image
              width={400}
              height={400}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c55928c4a3169f12deadf74c1040ae9f9a0bfd0bf34b190165773621e04262?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt="wave"
          className="contrast-200 brightness-0 w-full relative z-0 -mb-1"
        />
        <div className="w-full" />
      </div>
      <div className="flex flex-col w-full bg-black p-8">
        <div className="flex w-full items-center justify-between">
        <h2 className="text-white text-2xl">Ficha técnica</h2>
        <AiOutlinePlus size={26}  className={`text-white cursor-pointer transition-all ` + (active ? "rotate-[135deg]" : "rotate-0")} onClick={() => setActive(!active)}/>
        </div>
        <div className={`flex flex-col gap-4 items-center justify-center transition-all duration-700 mt-5 w-full overflow-hidden h-fit ${active ? "max-h-[800px]" : "max-h-0"}`}>
          {specs.map((spec) => (
            <div className="flex flex-col gap-2 mt-2 items-center justify-center w-full">
              <div className="flex items-center">
                <span className="flex shrink-0 h-[12px] rounded-full border-2 -mt-1 border-white w-[12px]" />
                <hr className="flex-1 shrink self-stretch h-px border border-white w-[243px]" />
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">{spec.label}</h3>
              <p className="mt-2 text-base leading-snug text-stone-50">{spec.value}</p>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
