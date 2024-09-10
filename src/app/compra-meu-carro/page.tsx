"use client";
import ServicesLayout from "@/components/ServicesComponents/ServicesLayout";
import { actualSite } from "@/utils/utils";

export default function VendeMeuCarro() {
  const { siteDefaultName } = actualSite();
  interface VantageItemProps {
    imageSrc: string;
    title: string;
    description: string;
  }

  const vantageItems: VantageItemProps[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ea9cb87e5d456e7fe1dfb9b01222673f835258725ce1c7cefc56ac56837f5760?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Não precisa de troca",
      description: "Você pode optar por trocar ou somente vender o seu veículo",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cce719a20f3b435a01f0206354ae5a88ebfecf949869fb81b995aadf3bae6aeb?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Pagamento à vista",
      description: "O pagamento é realizado à vista pela concessionária",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e1d8e4ceac5edd37012fdd7316035af32133b9645557e1261bd06de55c4a741d?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Segurança total",
      description:
        "Venda seu veículo sem preocupações e com transparência na negociação",
    },
  ];
  return (
    <ServicesLayout>
    <div className="w-full text-zinc-800 p-3">
      <div className="w-full  ">
        <h1 className="text-5xl  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          A {siteDefaultName} compra o seu veículos e o pagamento é à vista
        </h1>
        <div className="w-16 border-b-2 ml-1 mt-4 border-red-600 " />
      </div>
      <p className="my-10">
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos.
      </p>
      {vantageItems.map((vantagens, index) => (
        <article className="flex flex-col grow shrink px-8 text-center w-[524px] max-md:px-5 mx-auto max-md:max-w-full">
          <div className="flex flex-col w-full text-2xl tracking-tight leading-none text-red-600 max-md:max-w-full">
            <img
              loading="lazy"
              src={vantagens.imageSrc}
              alt=""
              className="object-contain self-center max-w-full aspect-square w-[100px]"
            />
            <h3 className="max-md:max-w-full">{vantagens.title}</h3>
          </div>
          <p className="mt-6 text-base tracking-normal text-zinc-600 max-md:max-w-full">
            {vantagens.description}
          </p>
        </article>
      ))}
        <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d266f7026e3e3d0c28beb613e2336c7e064a272a51d3a831f5ba508321938aa?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" 
        alt="vehicle purchase illustration" 
        className="object-contain max-lg:hidden mt-4 w-full rounded-lg aspect-[2.59] max-md:max-w-full" 
      />
    </div>
    </ServicesLayout>
  );
}
