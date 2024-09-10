import { AiOutlinePlusCircle } from "react-icons/ai"; 
import AddressListItem from '@/components/CMSComponents/LocalizacaoComponents/AddressListItem';
import React from 'react';
import Link from "next/link";

type Address = {
  location: string;
  uf: string;
  type: string;
  address: string;
  phone: string;
};

const addresses: Address[] = [
  {
    location: "BYD Vitória",
    uf: "ES",
    type: "loja",
    address: "Av. Nossa Sra. da Penha, 1331b - Santa Lucia, Vitória - ES, 29056-243",
    phone: "(27) 2125-2200"
  },
  {
    location: "BYD Vila Velha",
    uf: "ES",
    type: "loja",
    address: "Av. Nossa Sra. da Penha, 1331b - Santa Lucia, Vitória - ES, 29056-243",
    phone: "(27) 2125-6060"
  },
  {
    location: "BYD Serra",
    uf: "ES",
    type: "stand",
    address: "Av. Eldes Scherrer Souza, 2162 - Colina de Laranjeiras, Serra - ES, 29167-080",
    phone: "Sem telefone"
  },
  {
    location: "BYD Goiânia",
    uf: "ES",
    type: "loja",
    address: "Avenida Deputado Jamel Cecílio, 3123 - quadra b30, lote 6E - Jardim Goiás, Goiânia - Goiás, 74810-100",
    phone: "(62) 3611-6700"
  },
  {
    location: "BYD Cachoeiro de Itapemerim",
    uf: "ES",
    type: "stand",
    address: "Av. Nossa Sra. da Penha, 1331b - Santa Lucia, Vitória - ES, 29056-243",
    phone: "Sem telefone"
  },
  {
    location: "BYD Linhares",
    uf: "ES",
    type: "p. de venda",
    address: "Av. Nossa Sra. da Penha, 1331b - Santa Lucia, Vitória - ES, 29056-243",
    phone: "Sem telefone"
  },
  {
    location: "BYD Asa Norte - Brasília",
    uf: "ES",
    type: "loja",
    address: "Av. Nossa Sra. da Penha, 1331b - Santa Lucia, Vitória - ES, 29056-243",
    phone: "(27) 2125-6060"
  }
];

const AddressList: React.FC = () => {
  return (
    <main className="flex flex-col px-4 h-full bg-neutral-100">
      <header className="flex flex-wrap gap-8 items-center py-6 w-full max-md:max-w-full">
    <h1 className="flex-1 shrink self-stretch my-auto text-4xl italic uppercase basis-12 text-neutral-700 max-md:max-w-full">
      LISTA DE ENDEREÇOS
    </h1>
    <p className="self-stretch my-auto text-base text-neutral-500">
      Atualizado às 08:00, 05/06/2024
    </p>
    <Link href={"/cms/localizacao/criar"} className="flex gap-2 justify-center items-center self-stretch px-6 py-4 my-auto text-center uppercase border-2 border-solid border-neutral-800 min-w-[240px] max-md:px-5">
      <span className="self-stretch my-auto w-6 text-3xl text-neutral-800"><AiOutlinePlusCircle /></span>
      <span className="self-stretch my-auto text-base font-semibold text-neutral-800">
        NOVA LOCALIZAÇÃO
      </span>
    </Link>
  </header>

      <section>
      <div className="flex flex-wrap gap-4 items-center px-4 py-2 w-full text-base whitespace-nowrap text-neutral-800 max-md:max-w-full">
    <div className="self-stretch my-auto w-[172px]">Localização</div>
    <div className="self-stretch my-auto w-16">UF</div>
    <div className="self-stretch my-auto w-[124px]">Tipo</div>
    <div className="flex-1 shrink self-stretch my-auto min-w-[240px]">Endereço</div>
    <div className="self-stretch my-auto w-[172px]">Telefone</div>
    <div className="self-stretch my-auto w-[72px]">Ações</div>
  </div>
        {addresses.map((address, index) => (
          <AddressListItem key={index} {...address} />
        ))}
      </section>
    </main>
  );
};

export default AddressList;