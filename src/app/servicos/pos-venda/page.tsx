"use client";
import ServiceCard from "@/components/PosVendaComponents/ServiceCard";

export default function PosVenda() {
  interface Service {
    title: string;
    description: string;
    info: () => JSX.Element;
    imageSrc: string;
  }

  const services: Service[] = [
    {
      title: "Revisão expressa",
      description:
        "O programa Revisão Expressa oferece um serviço diferenciado, no qual dois técnicos treinados pela fábrica da Toyota realizam...",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e78cbf5dc6c3bf113a1fd6e89630b102afb5238b8fd09c076bf9f6cc7c267908?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      info: () => {
        return (
          <div className="p-3 flex flex-col">
            <h1 className="text-2xl mb-2">
              Serviços de qualidade com agilidade
            </h1>
            <p className="text-sm">
              Com a mais alta qualidade, a manutenção de seu veículo em até 60
              minutos*. Além disso, você pode assistir confortavelmente da sala
              de espera todo o serviço sendo executado no veículo.
              <br />
              <br />
              Os principais serviços oferecidos são:
            </p>

            <ul className="list-disc list-inside my-5 decoration-zinc-800 px-3">
              <li>
                Todas as revisões periódicas (10 mil, 20 mil, 30 mil, 40 mil, 50
                mil, 60 mil, 70 mil, 80 mil, 90 mil, 100 mil, 110 mil, 120 mil
                etc.)
              </li>
              <li>Alinhamento</li>
              <li>Balanceamento</li>
              <li>
                Pequenos serviços (substituição/troca de lâmpadas, filtro de ar
                do motor, borracha do limpador de para- brisa, filtro de
                ar-condicionado, pastilhas, disco de freio, pneus, entre outros)
              </li>
            </ul>
            <p className="text-xs ">
              *Dependendo do modelo do veículo e o tipo de manutenção, o tempo
              poderá ser de até 90 minutos.
            </p>
          </div>
        );
      },
    },
    {
      title: "Revisão Móvel",
      description:
        "A oficina vai até ao cliente, executando serviços preventivos, que são as revisões periódicas e pequenos reparos como, troca de pastilhas e lonas de freio, correias, palheta...",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/12a7f18262fcb02bbd5f24798fbfb00b5657895668d8a3bf0c6ccba66870eb22?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      info: () => {
        return (
          <div className="p-3 flex flex-col">
            <h1 className="text-2xl mb-2">Como Funciona:</h1>
            <p className="text-sm">
              A oficina vai até ao cliente, executando serviços preventivos, que
              são as revisões periódicas e pequenos reparos como, troca de
              pastilhas e lonas de freio, correias, palheta do limpador e
              lâmpadas.
              <br />
              <br />
              O veículo é uma Sprinter toda implementada, com gerador,
              compressor de ar, sistema de abastecimento de óleo pneumático, e
              todo o ferramental necessário às manutenções citadas. Importante
              ressaltar que o procedimento realizado na concessionária é o mesmo
              na oficina Móvel, já que enxergamos como uma extensão da mesma.
              Todos os 64 itens são inspecionados e ou substituídos.
              <br />
              <br />
              O técnico é treinado na Toyota, e possui habilidade comercial e de
              atendimento.
              <br />
              <br />
              Nas manutenções, entregamos aos cliente um voucher para execução
              do alinhamento e balanceamento na concessionária mais próxima,
              Serra, Vitória ou Vila Velha, que é a área de atuação.
            </p>
          </div>
        );
      },
    },
    {
      title: "Boas Vindas",
      description:
        "O principal objetivo da Toyota é garantir a satisfação de todos os nossos clientes. E queremos que isso fique claro desde o seu primeiro momento conosco...",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6f0da6ff1a4e23771bfa03f09bc7390b1d92e712005ea36cb78ab5e6942aa3b1?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      info: () => {
        return (
          <div className="p-3 flex flex-col">
            <h1 className="text-2xl mb-2">
              O melhor atendimento desde o primeiro momento
            </h1>
            <p className="text-sm">
              Por isso, criamos o Toyota Boas-Vindas, um convite a todos os
              clientes que adquirem um Toyota 0 km para conhecer nosso serviço
              de Pós-Venda.
              <br />
              <br />
              O Toyota Boas-Vindas é uma inspeção inicial realizada por um
              técnico após dois meses da compra do veículo. Nossa equipe
              acompanhará você durante todo o processo, tirando suas dúvidas e
              oferecendo uma prévia de como funciona o Serviço de Pós-Venda.
              Assim, você conhece toda a qualidade da Assistência Toyota e já
              pode ter certeza de que sempre pode confiar seu carro à Toyota.
              <br />
              <br />
              A inspeção inicial será realizada nos seguintes itens: <br />
              Nível de fluido <br />
              Bateria <br />
              Calibragem dos pneus <br />
              Óleo do motor <br />
              Luzes internas e externas <br />
              Ar-condicionado
            </p>
            <p className="text-xs mt-4">
              No final dessa inspeção, seu veículo receberá uma lavagem simples.
              Tudo isso de forma rápida e com a qualidade que só a Toyota
              oferece a você.
            </p>
          </div>
        );
      },
    },
    {
      title: "Conheça a Garantia",
      description:
        "Além do período de cinco anos de cobertura básica (descrito no Manual do Proprietário), a Toyota do Brasil oferece cobertura diferenciada...",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/458f1c766ceeb2bca78904273a1700611bf7d17fd256b2aec3697ff267e2b5de?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      info: () => {
        return (
          <div className="p-3 flex flex-col">
            <h1 className="text-2xl mb-2">
              Agora com 5 anos de tranquilidade para você
            </h1>
            <p className="text-sm">
              Além da qualidade Toyota, nossos clientes contam com a
              tranquilidade de cinco anos de garantia a partir do ano/modelo
              2020/2020, contados a partir da entrega do veículo 0 km ao
              primeiro proprietário, sem limite de quilometragem para uso
              particular e limite de cinco anos ou 100 mil (cem mil) quilômetros
              para uso comercial, o que primeiro ocorrer.
              <br />
              <br />
              E mais: 8 anos de garantia para o sistema híbrido Além do período
              de cinco anos de cobertura básica (descrito no Manual do
              Proprietário), a Toyota do Brasil oferece cobertura diferenciada,
              estendida por mais 36 (trinta e seis) meses, contra defeitos de
              fabricação e montagem para alguns componentes do sistema híbrido
              (Bateria Híbrida, Módulo de controle da bateria híbrida, Módulo de
              controle de energia, Inversor/conversor). O período total dessa
              cobertura é de 8 (oito) anos ou 200mil (duzentos mil) quilômetros,
              o que primeiro ocorrer.
              <br />
              <br />
              Como utilizar
              <br />
              Para assegurar essa vantagem é necessário que todas as revisões
              periódicas sejam efetuadas na rede autorizada Toyota, conforme
              indicado no Manual de Proprietário. A Toyota reforça que eventuais
              manutenções ou reparos, o que inclui também os serviços de
              funilaria e pintura, devem ser realizados somente na rede de
              concessionários, sendo passíveis de perda da cobertura de garantia
              do veículo eventuais reparos fora da concessionária. Para mais
              informações sobre condições e limites da garantia, consulte o
              Manual de Proprietário do seu veículo.
            </p>
            <p className="text-xs mt-4">
              Os 5 anos de garantia são válidos a partir do ano/modelo
              2020/2020.
            </p>
          </div>
        );
      },
    },
    {
      title: "Óleos e Fluidos",
      description:
        "Os óleos e fluidos Toyota são desenvolvidos especialmente para os motores Toyota, garantindo seu bom funcionamento por mais tempo...",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e53b83da76e40cff5db6320e62d00c8be614f6581e74781ab740bbbd2fa31c60?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      info: () => {
        return (
          <div className="p-3 flex flex-col">
            <h1 className="text-2xl mb-2">
              Óleos e fluidos Toyota: toda qualidade que seu carro precisa
            </h1>
            <p className="text-sm">
              Quando realizadas nas nossas concessionárias, as trocas se tornam
              necessárias com menor frequência, prologando a vida útil do seu
              motor e reduzindo o impacto ambiental. Além disso, sua fórmula
              favorece a economia de combustível e a emissão de poluentes na
              atmosfera, beneficiando tanto o seu bolso quanto o planeta.
            </p>
            <p className="text-xs mt-4">
              No final dessa inspeção, seu veículo receberá uma lavagem simples.
              Tudo isso de forma rápida e com a qualidade que só a Toyota
              oferece a você.
            </p>
          </div>
        );
      },
    },
  ];
  return (
    <div className="w-full text-zinc-800 p-3">
      <div className="w-full  mt-5 ">
        <h1 className="text-5xl  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Conheça os serviços
        </h1>
        <div className="w-16 border-b-2 ml-1 border-red-600 " />
      </div>
      <p className="my-10">
        Realizar as revisões periódicas na nossa rede de concessionárias
        autorizadas é a melhor maneira de garantir a durabilidade e performance
        originais de seu veículo. Conheça os nossos planos de manutenção e
        agende a sua revisão agora mesmo na concessionária mais próxima para
        aproveitar o melhor para o seu carro.
      </p>
      {services.map((service, index) => (
        <div key={index} className={index > 0 ? "mt-6" : ""}>
          <ServiceCard
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            info={service.info}
          />
        </div>
      ))}
    </div>
  );
}
