import React from "react";
import Header from "./Header";
import NavigationSection from "./NavigationSection";
import Footer from "./Footer";
import { actualSite } from "@/utils/utils";

const { siteDefaultName } = actualSite();

const navigationSections = [
  {
    title: "NOVOS",
    items: ["Yaris Hatch", "Yaris Sedan", "Corolla", "Hilux", "SW4", "RAV4", "Corolla Cross"],
  },
  {
    title: "SEMINOVOS",
    items: ["Seminovos Certificados", "Compramos seu carro", "Kurmá vende meu carro"],
  },
  {
    title: "VENDA DIRETA",
    items: ["Frotista", "Taxista", "Pessoa com deficiência", "Produtor Rural"],
  },
  {
    title: "SERVIÇOS",
    items: ["Pós-Venda", "Ciclo Toyota", "Consórcio", "Crédito"],
  },
  {
    title: `SOBRE A ${siteDefaultName.toUpperCase}`,
    items: [
      "Portal de Privacidade",
      "Hitória e Demosntrativos",
      "Serviço de Atendimento ao Consumidor",
      "Trabalhe conosco",
      "Canal Compliance",
    ],
  },
];
export const LayoutFooter: React.FC = () => (
  <div className="flex flex-col px-6 max-md:px-5 bg-[#f2f2f2]">
    <Header
      logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3efe153f24f066d7b20f980a4a8a805ba5d8662f9bd2a50de5bd917bb214d9ac?apiKey=eac21aa640a54d679c8b4aff1d0cf286&"
      brandName={siteDefaultName}
      iconSrcs={[
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d2fa540e8f1bde55d95a63fbfb46076f2bbd576bac0aa464ef2404c060dd3616?apiKey=eac21aa640a54d679c8b4aff1d0cf286&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f0b2d2333bde655ede123e98d6537f4bb2cc629536ffdca82d8c152a3b1d88be?apiKey=eac21aa640a54d679c8b4aff1d0cf286&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83c9e2edc496da4b5f0db2b1ba2b9ca18f0d69e68757e5e3f553bbc17a996673?apiKey=eac21aa640a54d679c8b4aff1d0cf286&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2d57410e10752a0ae6855e737f526f52984982861f044b0a01288652f4f8a096?apiKey=eac21aa640a54d679c8b4aff1d0cf286&",
      ]}
    />
    <NavigationSection sections={navigationSections} />
    <Footer
      logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/541371d715af2cdfae3ad5220fb318b6da074cb8bdaee38001a90b7d4cb5dea9?apiKey=eac21aa640a54d679c8b4aff1d0cf286&"
      companyInfo="Divisão Comércio GAB – CNPJ 00.827.783/0001-81"
      copyrightInfo="Grupo Águia Branca ©2024 | Todos os direitos reservados"
      safetyLogoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/104fc4574717df11033e82d94ae5c9be6f6a68aef10ab41c1f30b2cd6783922d?apiKey=eac21aa640a54d679c8b4aff1d0cf286&"
      safetyText="Paz no trânsito começa por você"
    />
  </div>
);
