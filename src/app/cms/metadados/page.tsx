import { AiOutlinePlusCircle } from "react-icons/ai"; 
import MetadescriptionItem from "@/components/CMSComponents/MetadadosComponents/MetadadoItem";
import Link from "next/link";

interface Metadescription {
  page: string;
  title: string;
  description: string;
  date: string;
}

const metadescriptions: Metadescription[] = [
  {
    page: "Home",
    title: "BYD Seal",
    description:
      "Visite a BYD Vitória Motors e descubra veículos elétricos de alta potência. Experimente a combinação perfeita de força, eficiência e design inovador em nossa seleção de carros elétricos e híbridos.",
    date: "01/08/2024",
  },
  {
    page: "BYD Seal",
    title: "Seu BYD Seal na Vitória Motors",
    description:
      "Encontre o seu BYD Seal e realize o sonho de dirigir um veículo 100%. Um veículo moderno e com design sem igual. Confira agora mesmo!",
    date: "01/08/2024",
  },
  {
    page: "BYD Dolphin Mini",
    title: "Na Vitória Motors você encontra o BYD Dolphin Mini",
    description:
      "O BYD Dolphin Mini entrega tudo o que você precisa em um elétrico: tecnologia de ponta; design moderno; 280 km de autonomia; e muita eficiência. Veja!",
    date: "01/08/2024",
  },
  {
    page: "BYD Dolphin",
    title: "Encontre o seu BYD Dolphin",
    description:
      "O BYD Dolphin é uma escolha ideal para você! Com design moderno, ele entrega até 291 km de autonomia e uma tecnologia de ponta. Confira!",
    date: "01/08/2024",
  },
  {
    page: "BYD Yuan Plus",
    title: "Confira os detalhes sobre o BYD Yuan Plus",
    description:
      "Descubra o BYD Yuan Plus, um SUV elétrico dinâmico com design elegante, amplo espaço interior e tecnologia avançada. Ideal para aventuras urbanas e viagens confortáveis.",
    date: "01/08/2024",
  },
];

function MetadescriptionList() {
  return (
    <main className="flex flex-col px-4 bg-neutral-100 h-full ">
      <header className="flex flex-wrap gap-8 items-center py-6 w-full max-md:max-w-full">
        <h1 className="flex-1 shrink self-stretch my-auto text-4xl italic uppercase basis-12 text-neutral-700 max-md:max-w-full">
          LISTA DE metadescriptions
        </h1>
        <time className="self-stretch my-auto text-base text-neutral-500">
          Atualizado às 08:00, 05/06/2024
        </time>
        <Link href={'/cms/metadados/criar'}  className="flex gap-2 justify-center items-center self-stretch px-6 py-4 my-auto text-center uppercase border-2 border-solid border-neutral-800 max-md:px-5">
          <span className="self-stretch my-auto w-6 text-3xl text-neutral-800">
            <AiOutlinePlusCircle />
          </span>
          <span className="self-stretch my-auto text-base font-semibold text-neutral-800">
            novo metadado
          </span>
        </Link>
      </header>
      <section className="flex flex-wrap gap-4 items-center px-4 py-2 w-full text-base whitespace-nowrap text-neutral-800 max-md:max-w-full">
        <h2 className="self-stretch my-auto w-[172px]">Página</h2>
        <h2 className="flex-1 shrink self-stretch my-auto min-w-[240px] max-md:max-w-full">
          Metadescription
        </h2>
        <h2 className="self-stretch my-auto w-[172px]">Data</h2>
        <h2 className="self-stretch my-auto w-[72px]">Ações</h2>
      </section>
      {metadescriptions.map((item, index) => (
        <MetadescriptionItem key={index} {...item} />
      ))}
    </main>
  );
}

export default MetadescriptionList;
