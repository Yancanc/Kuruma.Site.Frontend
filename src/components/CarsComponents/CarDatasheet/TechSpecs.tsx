import Image from "next/image";
import * as React from "react";

type SpecItemProps = {
  label: string;
  value: string;
};

const SpecItem: React.FC<SpecItemProps> = ({ label, value }) => (
  <div className="flex flex-col grow shrink pr-16 min-w-[240px] w-[254px]">
    <div className="flex items-center">
      <span className="flex shrink-0 h-[12px] rounded-full border-2 -mt-1 border-white w-[12px]" />
      <hr className="flex-1 shrink self-stretch h-px border border-white w-[243px]" />
    </div>
    <h3 className="mt-2 text-lg font-semibold text-white">{label}</h3>
    <p className="mt-2 text-base leading-snug text-stone-50">{value}</p>
  </div>
);

function TechSpecs() {
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
      <div className="flex w-full -mt-32">
      <Image
              width={400}
              height={400}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f029ca89af535a5c4c9ec75966d40e2c8d500eb2358c81d81641251bf150aab0?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt="wave"
          className="contrast-200 brightness-0 w-3/5 relative z-0 -mb-1"
        />
      </div>
      <div className="flex w-full bg-black">
        <div className="mx-auto w-full max-w-[1140px] justify-center">
          <h2 className="flex-1 relative -mt-12 flex gap-0 items-start text-3xl font-semibold leading-none text-white basis-0 min-w-[240px] max-md:max-w-full">
            Ficha técnica
          </h2>
          <section className="flex flex-wrap bg-black gap-2.5 items-start py-6 mt-4 w-full max-w-[655px] max-md:max-w-full">
            <div className="flex flex-wrap gap-8 items-start w-[655px] max-md:max-w-full">
              {specs.map((spec) => (
                <SpecItem
                  key={spec.label}
                  label={spec.label}
                  value={spec.value}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default TechSpecs;
