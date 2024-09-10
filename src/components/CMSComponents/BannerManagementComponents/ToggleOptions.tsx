import React from 'react';

interface ToggleOptionProps {
  text: string;
}

const ToggleOption: React.FC<ToggleOptionProps> = ({ text }) => {
  return (
    <div className="flex flex-wrap gap-2 items-center self-start min-h-[56px] max-md:max-w-full">
      <div className="flex gap-2.5 items-start self-stretch p-1 my-auto bg-blue-400 bg-opacity-20 rounded-[64px] w-[50px]">
        <div className="flex w-6 h-6 bg-blue-400 rounded-full min-h-[24px]" />
      </div>
      <p className="self-stretch my-auto text-base text-neutral-800 max-md:max-w-full">{text}</p>
    </div>
  );
};

const ToggleOptions: React.FC = () => {
  const options = [
    "Ativar banner imediatamente. Ao salvar, o banner será postado em seguida no site.",
    "Remover a data de término. Ao removê-la, a campanha continuará rodando intermitentemente."
  ];

  return (
    <section className="flex flex-col mt-6 max-w-full w-[825px]">
      {options.map((option, index) => (
        <ToggleOption key={index} text={option} />
      ))}
    </section>
  );
};

export default ToggleOptions;