import BannerSwiper from "@/components/Banner";
import CarModels from "@/components/CarModels/CarModels";
import CarModelMobile from "@/components/CarModels/CarModelsMobile";
import { actualSite } from "@/utils/utils";
import React from "react";

interface KurumaPageProps {}

const KurumaPage: React.FC<KurumaPageProps> = () => {
  const { siteDefaultName } = actualSite();
  const financialStatements = [
    { year: "2023", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2022", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2021", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2020", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2019", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2018", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2017", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2016", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2015", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
    { year: "2014", title: `Demonstrações Contábeis ${siteDefaultName} NE` },
  ];

  return (
    <>
    <div className="w-full bg-neutral-100">
      <BannerSwiper />
      <main className="flex gap-6 justify-center items-start pb-16 leading-tight bg-neutral-100 max-lg:px-4 mt-10">
        <div className="flex flex-col pt-8 min-w-[240px] w-[1140px]">
          <header className="flex flex-col justify-center w-full text-4xl text-black max-md:max-w-full">
            <div className="flex flex-col justify-center py-2 w-full max-md:max-w-full">
              <h2 className="max-md:max-w-full">Sobre a {siteDefaultName}</h2>
              <div className="flex mt-2.5 bg-red-600 rounded min-h-[2px] w-[60px]" />
            </div>
          </header>
          <section className="flex flex-col mt-4 w-full text-2xl leading-7 text-zinc-600 max-md:max-w-full">
            <p className="w-full max-md:max-w-full">
              Em 1992, o incremento das importações de veículos estimulou a
              abertura de uma concessionária própria da montadora japonesa
              Toyota no Espírito Santo. Assim, naquele ano foi inaugurada em
              Cariacica (ES), a primeira {siteDefaultName}, que assumiu a revenda de
              automóveis Toyota e Lexus na Grande Vitória. Hoje, a {siteDefaultName} atua
              no Espírito Santo, nos municípios de Vitória, Vila Velha, Serra,
              Cariacica, Guarapari, Linhares, Colatina, Cachoeiro de Itapemirim,
              São Mateus e Venda Nova do Imigrante.
              <br />
              <br />
              As concessionárias Toyota do Grupo Águia Branca atuam de acordo
              com os padrões mundiais da montadora, visando oferecer aos seus
              clientes a melhor experiência de compra e de posse do mercado de
              automóveis.
            </p>
          </section>
          <header className="flex mt-20 flex-col justify-center w-full text-4xl text-black max-md:max-w-full">
            <div className="flex flex-col justify-center py-2 w-full max-md:max-w-full">
              <h2 className="max-md:max-w-full">Demonstrações Financeiras</h2>
              <div className="flex mt-2.5 bg-red-600 rounded min-h-[2px] w-[60px]" />
            </div>
          </header>
          <section className="flex flex-col mt-4 w-full text-2xl leading-7 text-zinc-600 max-md:max-w-full">
            <p className="w-full max-md:max-w-full">
              Disponibilizamos nessa página os demonstrativos financeiros da
              {siteDefaultName} Veiculos S/A. Downloads disponíveis nos links abaixo:
            </p>
          </section>
          <div className="grid lg:grid-cols-2 gap-6 items-start mt-4 w-full leading-snug max-md:max-w-full">
            {financialStatements.map((statement, index) => (
              <article className="flex flex-wrap w-full gap-4 justify-center px-6 py-4 bg-white rounded-2xl min-h-[110px] min-w-[240px] shadow-[0px_0px_16px_rgba(0,0,0,0.17)] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-2 items-center pr-4 w-40 h-full text-lg text-red-600 whitespace-nowrap border-r-2 border-zinc-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/54261e26ec34b836db5abc12c05d382641f3208f44915e56640aacb68a8cb332?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
                    alt=""
                  />
                  <div className="self-stretch my-auto">{statement.year}</div>
                </div>
                <div className="flex-1 shrink my-auto text-sm text-sky-700 basis-4">
                  {statement.title}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <div className="w-full max-lg:hidden">
      <CarModels/>
      </div>
      <div className="lg:hidden">
        <CarModelMobile/>
      </div></div>
    </>
  );
};

export default KurumaPage;
