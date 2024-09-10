import FormInput from '@/components/CMSComponents/FormInput';
import SelectField from '@/components/CMSComponents/SelectInput';
import React from 'react';

const MetadataForm: React.FC = () => {
  return (
    <form className="flex flex-col px-4 bg-neutral-100 h-full">
      <header className="flex flex-wrap gap-2.5 items-end py-6 w-full text-base font-semibold uppercase text-neutral-800 max-md:max-w-full">
      <h1 className="flex-1 shrink text-4xl italic basis-12 text-neutral-700 max-md:max-w-full">
        novo metadado
      </h1>
      <button className="gap-2 self-stretch px-6 py-4 text-center whitespace-nowrap max-md:px-5">
        cancelar
      </button>
      <button className="gap-2 self-stretch px-6 py-4 text-center whitespace-nowrap border-2 border-solid border-neutral-800 max-md:px-5">
        salvar
      </button>
    </header>
      <main className="flex flex-wrap gap-6 items-end mt-6 w-full max-md:max-w-full">
        <SelectField
          label="Página"
          placeholder="Selecionar a página"
        />
        <FormInput
          label="Título do Metadado"
          placeholder="Ex. 01/06/2024"
        />
      </main>
      <section className="flex flex-col mt-6 w-full text-base whitespace-nowrap min-h-[200px] max-md:max-w-full">
        <label
          htmlFor="description"
          className="gap-2 self-stretch w-full h-[23px] text-neutral-800 max-md:max-w-full"
        >
          Descrição do Metadado
        </label>
        <textarea
          id="description"
          className="overflow-hidden flex-1 shrink gap-4 p-4 mt-2 leading-6 bg-white rounded-lg border-2 border-solid border-zinc-400 size-full text-ellipsis text-zinc-400 max-md:max-w-full"
          placeholder="Coloque a descrição do metadado aqui"
        />
      </section>
    </form>
  );
};

export default MetadataForm;