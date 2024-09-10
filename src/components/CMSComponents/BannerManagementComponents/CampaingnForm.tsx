import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  icon?: string;
  isActive: boolean;
  type?:string
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, icon, isActive, type = 'text' }) => {
  const baseClasses = "flex overflow-hidden gap-4 items-center p-4 mt-2 w-full rounded-lg";
  const activeClasses = "bg-white border-2 border-solid border-zinc-400";
  const inactiveClasses = "bg-neutral-300 border-2 border-solid border-zinc-400";

  return (
    <div className="flex flex-col w-[200px]">
      <label className={`gap-2 self-stretch w-full text-base h-[23px] ${isActive ? 'text-neutral-800' : 'text-zinc-400'}`}>
        {label}
      </label>
      <div className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
        <input
          type={type}
          placeholder={placeholder}
          className={`flex-1 shrink self-stretch my-auto text-base basis-0 ${isActive ? 'text-neutral-800' : 'text-zinc-400'} bg-transparent border-none outline-none`}
        />
     {icon &&   <span className={`self-stretch my-auto w-6 text-3xl text-center uppercase ${isActive ? 'text-neutral-800' : 'text-zinc-400'}`}>
          {icon}
        </span>}
      </div>
    </div>
  );
};

const CampaignForm: React.FC = () => {
  return (
    <form className="flex flex-wrap gap-6 items-end mt-6 w-full max-md:max-w-full">
      <InputField label="Tipo de Campanha" placeholder="Oferta"  isActive={true} />
      <InputField label="Data de Início" placeholder="Ex. 01/06/2024" isActive={false} />
      <InputField label="Horario de Início" placeholder="Ex. 08:00" isActive={false} />
      <InputField label="Data de Término" type='date' placeholder="Ex. 01/06/2024"  isActive={true} />
      <InputField label="Horário de Término" type='time' placeholder="08:00"  isActive={true} />
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <label className="gap-2 self-stretch w-full text-base h-[23px] text-neutral-800 max-md:max-w-full">
          Selecionar paginas
        </label>
        <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center p-4 mt-2 w-full bg-white rounded-lg border-2 border-solid border-zinc-400 max-md:max-w-full">
          <div className="flex gap-4 items-center self-stretch my-auto text-base text-neutral-800">
            <span className="gap-2.5 self-stretch px-1.5 my-auto whitespace-nowrap rounded bg-zinc-300">Home</span>
            <span className="gap-2.5 self-stretch px-1.5 my-auto rounded bg-zinc-300">Corolla Cross</span>
          </div>
          <span className="self-stretch my-auto w-6 text-3xl text-center uppercase text-neutral-800">b</span>
        </div>
      </div>
    </form>
  );
};

export default CampaignForm;