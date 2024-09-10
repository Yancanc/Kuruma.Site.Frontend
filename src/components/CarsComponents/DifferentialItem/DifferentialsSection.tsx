import React from 'react';
import DifferentialItem from './DifferentialItem';

const differentialsData = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a4bbf463d3d0caca8a98a46b69cf0e4e8b3a158d0f946ea8dedb14bf2b9263f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    title: "Design",
    description: "Rodas de liga leve 17\", faróis halógenos, e retrovisores externos eletro-retráteis e rebatimento automático. Acabamento interno em tecido e volante em couro na cor preta."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1eec240d59655886e22477a84ef092c15620bd4d0b9a94e601a44c23f5d71863?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    title: "Tecnologia",
    description: "Ar-condicionado digital automático, central multimídia de 8\", 9\" ou 10\" com conexão Android Auto® e Apple CarPlay®. Painel digital de 4,2\", volante com controles de áudio e funções TSS (Toyota Safety Sense)."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/623501db485013367ce94cd0e32961608d6015474230846144610e4fbb1c4edf?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    title: "Performance",
    description: "Motor de 2.0 L Dual VVT-iE 16 V DOHC Flex com potência de 177 cv (E) / 169 cv (G) e 21,4 Kgf.m de torque. Transmissão automática CVT de 10 velocidades."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfed24b32ad26561ced29780568865cebd4fdebbf0e94e40f0c4bf7937f9d5ec?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    title: "Segurança",
    description: "7 airbags, sensores de estacionamento dianteiro, traseiro e alerta de tráfego traseiro, e TSS (Toyota Safety Sense) com controle adaptativo de velocidade de cruzeiro, assistente de pré-colisão, sistema de alerta de oscilação, farol alto automático e sistema de alerta de mudança de faixa com controle de direção."
  }
];

const DifferentialsSection: React.FC = () => {
  return (
    <section className="flex z-0 flex-col justify-center pb-8 mt-16 max-w-full w-[1140px] max-md:mt-10 mx-auto">
      <div className="flex flex-wrap gap-4 justify-center items-start w-full max-md:max-w-full">
        {differentialsData.map((differential, index) => (
          <DifferentialItem
            key={index}
            iconSrc={differential.iconSrc}
            title={differential.title}
            description={differential.description}
          />
        ))}
      </div>
    </section>
  );
};

export default DifferentialsSection;