"use client";
import ServicesLayout from "@/components/ServicesComponents/ServicesLayout";
import { actualSite } from "@/utils/utils";

export default function VendeMeuCarro() {
  const { siteDefaultName } = actualSite();
  const advantages = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f5aed14be87c6de87b4b8367644d0a5ad8907b6115aad7c92cc9ddc643c61aa?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Tiramos as fotos",
      description:
        "Você fica com duvidas na hora de tirar as fotos pra vender seu carro? Não se preocupe. A gente resolve isso pra você também.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfafeea1e948076db099f2fbb8b747767e6c9c7882801482e78b15565b06b9ac?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Facilidade de Negociação",
      description:
        "Toda negociação é feita de forma transparente e fácil. Você acompanha tudo do conforto da sua casa. Sem preocupação.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33d90caa818a5fc772f8615a91246b7fd6a1bb0bd84754e23707744417827e6b?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Canais digitais de grande audiência",
      description:
        "Seu veículo será anunciado em nossos portais e canais digitais de grande audiência e público selecionado.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d2c6601a3f2cef19dfd5f84c69cbf1afd893cf06d9353664c405db0e0152331?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Economia do seu tempo",
      description:
        "A vida corrida hoje é uma realidade. O atendimento as pessoas interessadas pelo seu carro, será feita por nossa equipe. Pode deixar isso com a gente!",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cca3a8cb80ab65cffd14495347098ed798ad3a8dca7eff2c10c30e93ef4e365?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Segurança de recebimento",
      description:
        "Não tem nenhum tipo de risco. Após a venda, o valor acordado é depositado na sua conta. Total segurança pra você.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d380d51aa1a55e4ea41f3223bdce2f4f106fbcb6c2117fe5912976e0ba81bcb?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
      title: "Prevenção contra golpes digitais",
      description:
        "Muitas noticias sobre golpes aparecem todos os dias nos jornais, com a gente você tem a garantia de que não vai aparecer em uma delas.",
    },
  ];
  const steps = [
    {
      number: "1°",
      title: "Preencha o formulário",
      description:
        "Envie seus dados. Insira também a placa do veículo e sua pretensão de venda. Simples e rápido.",
    },
    {
      number: "2°",
      title: "Agende seu atendimento",
      description:
        "Nossa equipe vai entrar em contato para passar as informações necessárias e tirar dúvidas.",
    },
    {
      number: "3°",
      title: "Pronto",
      description: "Pronto! Agora é só aguardar o dia do agendamento.",
    },
  ];
  return (
    <ServicesLayout
      aboveContact={
        <>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d51ebe9308a335480e828b92711b7d0dcb4b52cea02a9c16261d08bd0cc272c?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="object-contain max-lg:hidden self-center max-w-full aspect-[0.78] w-[382px]"
          />
        </>
      }
    >
      <div className="w-full text-zinc-800 p-3">
        <div className="w-full  ">
          <h1 className="text-5xl  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Procurando um jeito fácil de vender seu carro?
          </h1>
          <div className="w-16 border-b-2 ml-1 mt-4 border-red-600 " />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcf2208ca8bf8355f8f634b0611bfaf2a6e33952c043bc6f80b6a76ad68f3d68?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt="Car for sale"
          className="object-contain mt-4 w-full rounded-lg aspect-[1.79] max-md:max-w-full"
        />
        <p className="my-5">
          Vender um carro gera algumas dúvidas sobre como tirar as fotos, onde
          anunciar, quando e onde atender pessoas desconhecidas interessadas no
          veículo, e também a insegurança de golpes virtuais. Fique tranquilo!
          Aqui na {siteDefaultName} você não vai se preocupar com nada. Nós vendemos seu
          veículo! É Comodidade, Praticidade e Segurança para você.
        </p>
        <h2 className="flex flex-col grow shrink text-3xl leading-9 text-zinc-600  max-md:max-w-full">
          Conheça as vantagens da {siteDefaultName} te ajudar a vender seu carro!
        </h2>
        <div className="w-full grid grid-cols-2 gap-4 my-5">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col grow shrink px-4 py-5 rounded-lg bg-stone-200 min-h-[190px] min-w-[240px] w-full shadow"
            >
              <div className="flex gap-4 items-center w-full text-xl tracking-normal leading-none">
                <img
                  loading="lazy"
                  src={advantage.icon}
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-14 aspect-[0.98]"
                />
                <h3 className="flex-1 shrink self-stretch my-auto basis-0">
                  {advantage.title}
                </h3>
              </div>
              <p className="mt-2 text-base leading-6">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
        <h2 className="flex flex-col grow shrink text-3xl leading-tight text-center text-zinc-600 w-full">
          Passo a passo
        </h2>
        <div className="w-full flex flex-col gap-4">
          {steps.map((step, index) => (
            <div className="flex flex-wrap grow shrink gap-4 justify-center items-center p-6 bg-white rounded-2xl shadow-[0px_0px_16px_rgba(0,0,0,0.17)]  max-md:px-5 w-full">
              <div className="flex gap-6 items-center self-stretch pb-2 my-auto border-r-2 border-red-600 min-w-[240px] w-[258px]">
                <div
                  className="self-stretch my-auto text-7xl font-semibold text-white tracking-tighter leading-none max-md:text-4xl"
                  style={{
                    textShadow:
                      "2px 0 red, -2px 0 red, 0 2px red, 0 -2px red, 1px 1px red, -1px -1px red, 1px -1px red, -1px 1px red;",
                  }}
                >
                  {step.number}
                </div>
                <h3 className="self-stretch my-auto text-xl leading-6 text-zinc-600">
                  {step.title}
                </h3>
              </div>
              <p className="flex-1 shrink self-stretch my-auto text-base leading-6 basis-0 text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ac6fa508114d69f610eb517b6f0cc58b6de25c6c4bb4a87c9912097b5e0307a?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt="Footer image"
          className="object-contain mt-4 w-full rounded-lg aspect-[2.59] max-md:max-w-full"
        />
      </div>
    </ServicesLayout>
  );
}
