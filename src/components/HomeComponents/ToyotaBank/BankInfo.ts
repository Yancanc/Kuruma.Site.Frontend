import { actualSite } from "@/utils/utils";

const { siteDefaultName } = actualSite();
export const cardData = [
    {
      title: "Inteligente",
      subtitle: "Crédito",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b36bc11a9b63eba7b2bb70f38e209983af41021a0f5f5cc361b7652b5894235?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      imageAlt: "Crédito Inteligente illustration",
      description: 'Até 70% do valor de tabela do seu carro em dinheiro, para usar como quiser.',
      buttonText: "Saiba mais",
      alternative: true,
      link: ""
    },
    {
      title: "",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbbd57cd3c1f8fdd34363b93f1af8bd1ecd216d18cbdf34119e0c48a8b6025?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      imageAlt: "Banking service illustration",
      description: 'O Jeito mais simples de estar sempre de Toyota novo e na garantia.',
      buttonText: "Saiba mais",
      link: "/servicos/ciclo-toyota"
    },
    {
      title: "Seguros",
      subtitle: `TOYOTA ${siteDefaultName.toLocaleUpperCase()}`,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/66be2a659b346f7a4b610161fa2c43de50fa05c953c1d0f9280956303b80304d?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      imageAlt: "Banking Seacure illustration",
      description: 'Pra quem procura tranquilidade proteção e segurança.',
      buttonText: "Saiba mais",
      link: ""
    }
  ];