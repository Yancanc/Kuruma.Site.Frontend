'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const CreateOrEditHeader: React.FC = () => {
    const router = useRouter()
  return (
    <header className="flex flex-wrap gap-2.5 items-end py-6 w-full text-base font-semibold uppercase text-neutral-800 max-md:max-w-full">
      <h1 className="flex-1 shrink text-4xl italic basis-12 text-neutral-700 max-md:max-w-full">
        novo banner / defesa
      </h1>
      <button onClick={() => router.back()}  className="gap-2 uppercase  self-stretch px-6 py-4 text-center whitespace-nowrap max-md:px-5">
        cancelar
      </button>
      <button className="gap-2 uppercase  self-stretch px-6 py-4 text-center whitespace-nowrap border-2 border-solid border-neutral-800 max-md:px-5">
        salvar
      </button>
    </header>
  );
};

export default CreateOrEditHeader;