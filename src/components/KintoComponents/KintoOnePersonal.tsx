import React from "react";
import KintoSection from "./KintoSection";

interface Feature {
  imageSrc: string;
  description: string;
}

const features: Feature[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/47dcf92e89d7557cc2ea1a1e75b2eef10b11b0ebca4959df0b793d4a53d221a3?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    description:
      "Manutenção realizada nas Concessionárias da Rede Toyota, com 100% de peças genuínas.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1ffe450ef29f215cdff01fb0598c7b4585145669ab358de2c369b633be3e1451?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    description:
      "Compartilhe o veículo com quem mora com você sem precisar cadastrá-las individualmente",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/993bcd42bc05539eec510b965707a720d2657b6a8b45118501de492927316af2?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    description:
      "Documentação, seguro com cobertura total, carro reserva, e assistência 24h já inclusos.",
  },
];

const KintoOnePersonal: React.FC = () => {
  return (
    <section className="flex flex-col pb-12 lg:mt-40">
      <div>
        <KintoSection
          title="KINTO One Personal"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9156849cd143ec2c6b22e4b9f533537aac1bec65f1865b3d8ff8160211e55505?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
        >
          <div className="flex flex-wrap gap-4 justify-center items-start pb-8 mt-4 w-full text-lg leading-8 text-slate-500 max-md:max-w-full">
            <div className="flex-1 shrink gap-2.5 px-8 min-w-[240px] max-md:px-5 max-md:max-w-full">
              O KINTO One Personal oferece praticidade para todas as suas
              necessidades de mobilidade pessoal. Em poucos cliques você pode
              personalizar seu carro e sua assinatura. Na mensalidade estão
              inclusas as manutenções programadas, seguros e impostos, você só
              precisa abastecer.
            </div>
            <div className="flex-1 shrink gap-2.5 px-8 min-w-[240px] max-md:px-5 max-md:max-w-full">
              Todas as nossas tarifas incluem seguro, assistência rodoviária 24
              horas por dia, 7 dias por semana e manutenção - portanto, você
              pode se concentrar apenas na direção.
            </div>
          </div>
        </KintoSection>
      </div>
      <header className="flex flex-col w-full max-md:max-w-full bg-[#59a2b5] py-10 px-4">
        <h1 className="flex flex-col max-w-[1140px] mx-auto justify-center py-8 w-full text-3xl leading-none text-white max-md:max-w-full">
          <span className="flex gap-4 justify-center w-full max-md:max-w-full">
            <span className="overflow-hidden flex-1 shrink gap-2.5 lg:min-w-[240px] size-full max-md:max-w-full ">
              Diferenciais <br className="lg:hidden"/> <strong>KINTO One Personal</strong>
            </span>
          </span>
        </h1>
        <div className="flex flex-col items-center self-center max-w-full w-[1136px]">
          <div className="flex flex-wrap gap-4 justify-center items-start w-full">
            {features.map((feature, index) => (
              <article className="flex flex-col grow shrink px-4 pt-4 pb-10 min-h-[200px] min-w-[240px] w-[294px]">
                <div className="flex gap-4 justify-center items-center w-full">
                  <img
                    loading="lazy"
                    src={feature.imageSrc}
                    alt=""
                    className="object-contain self-stretch my-auto w-16 aspect-square"
                  />
                </div>
                <p className="flex-1 shrink gap-2.5 px-5 mt-4 w-full text-sm leading-5 text-center text-white">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
          <p className="flex-1 shrink gap-2.5 px-16 py-6 w-full text-base leading-6 text-center text-cyan-700 bg-white max-md:px-5 max-md:max-w-full">
            Você pode optar também pela assinatura de Veículos Seminovos. Os
            veículos seminovos do KINTO One Personal possuem baixa quilometragem
            e certificação de qualidade Toyota que você já conhece e confia.
            Conte ainda com a agilidade da pronta-entrega: em poucos cliques
            você pode personalizar sua assinatura e retirar seu veículo.
          </p>
        </div>
      <button className="flex gap-2 justify-center items-center self-center px-6 py-3 mt-6 max-w-full text-2xl font-bold tracking-wider leading-none text-center text-cyan-700 bg-white rounded min-h-[55px] w-[368px] max-md:px-5">
        <span className="flex-1 shrink self-stretch my-auto w-full min-w-[240px]">
          Solicitar Proposta
        </span>
      </button>
      </header>
    </section>
  );
};

export default KintoOnePersonal;
