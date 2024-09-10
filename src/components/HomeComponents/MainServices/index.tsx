import * as React from "react";
import MainService from "./MainService";
import SecondaryService from "./SecondaryService";
import CardVMC from "./CardVendeMeuCarro";
import CardCSC from "./CardCompramosSeuCarro";
import { actualSite } from "@/utils/utils";

export const MainServices = () => {
  const { siteDefaultName } = actualSite();
  const mainServices = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/966283e1d46046cc2e6dcb4ebee6e10137323135f19935207d5f9cf472d3c7ce?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      alt: "Main service image",
      heading: "O melhor serviço de reparo e manutenção",
      buttonText: "Saiba mais",
      link: "/servicos/pos-venda",
    },
  ];

  const secondaryServices = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9907aa3d6206ac921586e8c9ca4eb38b2266fa3312921f7c57cd3fbbd5fc0186?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      alt: "Secondary service image one",
      buttonText: "saiba mais",
      link: "/servicos/acessorios",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/039c12cb1b396f760761aceff1e9f8d7f559204a14e526bac4bbd1bfb4e96f87?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      alt: "Secondary service image two",
      buttonText: "saiba mais",
      link: "/servicos/blindagem",
    },
  ];
  const features = [
    { text: "PAGAMENTO", boldText: "À VISTA" },
    { text: "NÃO PRECISA", boldText: "DE TROCA" },
    { text: "SEGURANÇA", boldText: "TOTAL" },
  ];
  return (
    <section className="flex flex-col justify-center py-8 bg-neutral-100">
      <header className="flex justify-center items-center px-16 w-full text-center text-black leading-[120%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[344px]">
          <h2 className="text-4xl">Principais serviços</h2>

          <p className="px-6 py-0.5 mt-5 max-md:px-5 border-b-2 border-black w-fit mx-auto">
            Serviços mais procurados
          </p>
        </div>
      </header>

      <main className=" mt-6 max-w-[1140px] mx-auto">
        <section className="flex gap-5 max-md:flex-col w-full">
          {mainServices.map((service, idx) => (
            <MainService key={idx} {...service} />
          ))}
          {secondaryServices.map((service, idx) => (
            <SecondaryService key={idx} {...service} />
          ))}
        </section>

        <section className="mt-6 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <CardVMC />
            <CardCSC
              title={"COMPRAMOS O SEU CARRO"}
              features={features}
              description={
                `A ${siteDefaultName} compra o seu veículo e o pagamento é à vista`
              }
            />
          </div>
        </section>
      </main>
    </section>
  );
};
