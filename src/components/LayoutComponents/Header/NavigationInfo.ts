import { actualSite } from "@/utils/utils";

export interface LinksNavigation {
  name: string;
  src: string;
  groups: {
    name: string;
    itens: {
      name: string;
      link: string;
      target?: string;
    }[];
  }[];
}

const { siteDefaultName } = actualSite();

export const NavigationLines: LinksNavigation[] = [
  {
    name: "Novos",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/63c1c8f92777b334469390bde9f67e2bcced837a017fc5c3732ed82e70616b92?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    groups: [
      {
        name: "Passeio",
        itens: [
          {
            name: "Yaris",
            link: "/yaris",
          },
          {
            name: "Yaris Sedan",
            link: "/yaris-sedan",
          },
          {
            name: "Corolla",
            link: "/corolla",
          },
        ],
      },
      {
        name: "SUV's",
        itens: [
          {
            name: "Corolla Cross",
            link: "/corolla-cross",
          },
          {
            name: "RAV4",
            link: "/rav4",
          },
          {
            name: "SW4",
            link: "/sw4",
          },
        ],
      },
      {
        name: "Esportivos",
        itens: [
          {
            name: "Corolla Hatch GR-Sport",
            link: "/corolla-hatch-gr-sport",
          },
          {
            name: "Corolla GR-Sport",
            link: "/corolla-gr-sport",
          },
          {
            name: "Corolla Cross GR-Sport",
            link: "/corolla-cross-gr-sport",
          },
          {
            name: "SW4 GR-Sport",
            link: "/sw4-gr-sport",
          },
          {
            name: "Hilux GR-Sport",
            link: "/hilux-gr-sport",
          },
        ],
      },
      {
        name: "Híbridos",
        itens: [
          {
            name: "Corolla Híbrido",
            link: "/corolla-híbrido",
          },
          {
            name: "Corolla Cross Híbrido",
            link: "/corolla-cross-híbrido",
          },
        ],
      },
      {
        name: "Pick-ups",
        itens: [
          {
            name: "Hilux Cabine Dupla",
            link: "/hilux-cabine-dupla",
          },
        ],
      },
    ],
  },
  {
    name: "Seminovos",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/329fdefec1bcc91864cf3aae25cd2fdc3b04c96305d89135e5976763c8579d51?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286", 
    groups: [
      {
        name: "Seminovos",
        itens: [
          {
            name: "Seminovos Certificados",
            link: "",
            target: "_blank"
          },
          {
            name: "Compramos seu carro",
            link: "/compra-meu-carro",
          },
          {
            name: `${siteDefaultName} vende meu carro`,
            link: "/vende-meu-carro",
          },
        ],
      },
      {
        name: "Site Seminovos",
        itens: [
          {
            name: "Ver estoque completo",
            link: "",
            target: "_blank"
          },
        ],
      },
    ],
  },
  {
    name: "Venda Direta",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5bee8f7bf92f129d1b5371fce0c7f11a7899960619e41d5afd96e34e1df2b1c?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286", 
    groups: [
      {
        name: "Passeio",
        itens: [
          {
            name: "Frotista",
            link: "/venda-direta/frotista",
          },
          {
            name: "Pessoa com Deficiência",
            link: "/venda-direta/pessoa-com-deficiencia",
          },
          {
            name: "Produtor Rural",
            link: "/venda-direta/produtor-rural",
          },
          {
            name: "Taxista",
            link: "/venda-direta/taxista",
          },
          {
            name: "Governo",
            link: "/venda-direta/governo",
          },
        ],
      },
    ],
  },
  {
    name: "Serviços",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa8a94d65406dbc30d7c830a5e9d6d2dcaa01e184fada235c4d2e448338d6fe0?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286", 
    groups: [
      {
        name: "Serviços",
        itens: [
          {
            name: "Pós-Vendas",
            link: "/servicos/pos-venda",
          },
          {
            name: "Blindagem",
            link: "/servicos/blindagem",
          },
          {
            name: "Acessório",
            link: "/servicos/acessorios",
          },
        ],
      },
      {
        name: "Banco Toyota",
        itens: [
          {
            name: "Ciclo Toyota",
            link: "/servicos/ciclo-toyota",
          },
          {
            name: "Consórcio",
            link: "/servicos/consorcio",
          },
        ],
      },
    ],
  },
  {
    name: "Sobre",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b2811ec0852dda870341cf0f8434f0fd8b7b9d397cfd362b79423fec3ec1200?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    groups: [
      {
        name: `Sobre a ${siteDefaultName}`,
        itens: [
          {
            name: "História e Demonstrativos",
            link: "/sobre",
          },
          {
            name: "Serviço de Atendimento ao Consumidor",
            link: "",
            target: "_blank"
          },
          {
            name: "Trabalhe Conosco",
            link: "https://grupoaguiabranca.empregare.com/pt-br",
            target: "_blank"
          },
          {
            name: "Canal Compliance",
            link: "https://compliancedivisaocomercio.com.br",
            target: "_blank"
          },
          {
            name: "Portal de Privacidade",
            link: "",
            target: "_blank"
          },
        ],
      },
    ],
  },
];
