import React from "react";

interface StepProps {
  number: string;
  content: string;
  borderClasses: string;
}

const Step: React.FC<StepProps> = ({ number, content, borderClasses }) => {
  // const borderClasses = isFirst ? 'border-t-2 border-red-600' : ' border-l-2 border-red-600';
  return (
    <div
      className={`flex relative flex-col px-8 py-6  border-dashed ${borderClasses} min-h-[150px] min-w-[240px] w-[49%] max-md:px-5`}
    >
      <div className="z-0 flex-1 text-xl tracking-wider leading-7 text-zinc-600">
        {content}
      </div>
      <div className="absolute flex items-center justify-center -left-7 gap-2.5 self-stretch text-2xl font-semibold tracking-wider text-center text-white uppercase whitespace-nowrap bg-red-600 h-[55px] min-h-[55px] rounded-[51px] top-[-27px] w-[55px]">
        {number}
      </div>
    </div>
  );
};

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: "01",
      content: "Compre sua cota",
      borderClasses: "border-l-2 border-red-600",
    },
    { number: "03", content: "Pague as parcelas mensais", borderClasses: " border-t-2 border-l-2 border-red-600" },
    {
      number: "02",
      content: "Entre em um grupo de consórcio",
      borderClasses: "",
    },
    {
      number: "04",
      content: "Contemple sua cota nas assembleias por sorteio ou lance",
      borderClasses: "border-t-2 border-red-600",
    },
    {
      number: "05",
      content: "Escolha seu veículo 0km ou Seminovo",
      borderClasses: "border-l-2 border-red-600",
    },
    { number: "07", content: "Ganhe Cashback", borderClasses: "border-t-2 border-l-2 border-red-600" },
    {
      number: "06",
      content: "Receba auxílio do Concierge",
      borderClasses: "",
    },
  ];

  return (
    <>
    <section className="flex max-lg:hidden  flex-wrap justify-center items-start  pt-8 mt-4 w-full ">
      <div className="flex relative flex-col px-8 py-6  border-dashed border-t-2 border-red-600 min-h-[150px] min-w-[240px] w-[49%] max-md:px-5">
        <div className="z-0 flex-1 text-lg leading-6 text-zinc-600">
          Veja como é no Consórcio Toyota:
        </div>
        <div className="flex absolute -left-7 z-0 gap-2.5 justify-center items-center bg-red-600 h-[55px] min-h-[55px] rounded-[61px] top-[-27px] w-[55px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6328e321a8d701f23453d26cb90591f279bb9ecc8c7469d304fcf1070a99d172?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="object-contain self-stretch my-auto aspect-[1.5] w-[33px]"
          />
        </div>
      </div>
      {steps.map((step, index) => (
        <Step key={step.number} {...step} />
      ))}
      <div className="flex w-full px-2">
        <div className="w-1/2 border-t-2 border-red-600 border-dashed"/>
        <div
          className={`flex relative flex-col px-8 py-6 min-h-[150px] mr-auto w-full max-md:px-5`}
        >
          <div className="z-0 flex-1 text-xl tracking-wider leading-7 text-zinc-600">
            Saia de carro novo
          </div>
          <div className="absolute flex items-center justify-center -left-7 gap-2.5 self-stretch text-2xl font-semibold tracking-wider text-center text-white uppercase whitespace-nowrap bg-red-600 h-[55px] min-h-[55px] rounded-[51px] top-[-27px] w-[55px]">
            08
          </div>
        </div>
        <div className="w-1/2"/>
      </div>
    </section></>
  );
};

export default ProcessSteps;
