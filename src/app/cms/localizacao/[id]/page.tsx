import FormInput from "@/components/CMSComponents/FormInput";
import SelectField from "@/components/CMSComponents/SelectInput";
import ToggleSwitch from "@/components/CMSComponents/ToggleSwitch";
import React from "react";

interface NovoEnderecoProps {}

const NovoEndereco: React.FC<NovoEnderecoProps> = () => {
  return (
    <main className="flex flex-col p-4 h-full bg-neutral-100">
      <header className="flex flex-wrap gap-2.5 items-end py-6 w-full text-base font-semibold uppercase text-neutral-800 max-md:max-w-full">
        <h1 className="flex-1 shrink text-4xl italic basis-12 text-neutral-700 max-md:max-w-full">
          novo endereço
        </h1>
        <button className="gap-2 self-stretch px-6 py-4 text-center whitespace-nowrap max-md:px-5">
          cancelar
        </button>
        <button className="gap-2 self-stretch px-6 py-4 text-center whitespace-nowrap border-2 border-solid border-neutral-800 max-md:px-5">
          salvar
        </button>
      </header>
      <form className="flex flex-col gap-6 mt-6">
        <div className="flex gap-6 items-end w-full max-md:max-w-full">
          <FormInput
            label="Nome da Localização"
            placeholder="Ex. BYD Vitória"
          />
          <SelectField label="UF" placeholder="Ex. ES" />
          <SelectField
            label="Tipo de Estrutura"
            placeholder="Selecione o tipo"
          />
        </div>
        <section className="flex flex-col mt-6 w-full text-base whitespace-nowrap min-h-[200px] max-md:max-w-full">
          <label
            htmlFor="defense"
            className="gap-2 self-stretch w-full h-[23px] text-neutral-800 max-md:max-w-full"
          >
            Endereço
          </label>
          <textarea
            id="defense"
            className="overflow-hidden flex-1 shrink gap-4 p-4 mt-2 leading-6 bg-white rounded-lg border-2 border-solid border-zinc-400 size-full text-ellipsis text-zinc-400 max-md:max-w-full"
            placeholder="Coloque a descrição do metadado aqui"
          />
        </section>
        <div className="flex gap-6 items-end w-full max-md:max-w-full">
          <ToggleSwitch label="Possui telefone" />
          <div className="max-w-md">
          <FormInput
            label="Telefone"
            placeholder="Ex. (27) 99999-0123"
            />
            </div>
        </div>
      </form>
    </main>
  );
};

export default NovoEndereco;
