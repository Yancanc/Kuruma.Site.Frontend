import React from "react";

const KintoOneShare: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center   pt-12 bg-white ">
      <div className="flex relative flex-col justify-center  w-full ">
        <div className="flex absolute bottom-0 left-2/4 z-0 items-center -translate-x-2/4 h-[212px] min-h-[212px] translate-y-[0%]  w-full " />
        <div className="flex z-0 flex-col justify-center w-full ">
          <header className="flex flex-col justify-center w-full max-w-[1140px] mx-auto max-md:max-w-full">
            <div className="flex flex-col justify-center py-6 w-full max-md:max-w-full">
              <div className="flex gap-4 justify-center items-center w-full max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6cc49e672388f48f7769df30d1a54d476417f184adb0f1feb0d630cd894fb1e?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                  alt="Kinto Share logo"
                  className="object-contain self-stretch my-auto aspect-[8.06] min-w-[240px] w-[403px]"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-start pb-8 mt-4 w-full text-lg leading-8 text-slate-500 max-md:max-w-full">
              <p className="flex-1 shrink gap-2.5 px-8 min-w-[240px]  max-md:max-w-full">
                Reserve seu veículo pelo app e dirija quando quiser. Solução
                flexível e self-service te dá a liberdade de ter seu próprio
                carro sem os custos de propriedade e despesas fixas.
              </p>
              <p className="flex-1 shrink gap-2.5 px-8 min-w-[240px]  max-md:max-w-full">
                Todas as nossas tarifas incluem seguro, assistência rodoviária
                24 horas por dia, 7 dias por semana e manutenção - portanto,
                você pode se concentrar apenas na direção.
              </p>
            </div>
            <h2 className="gap-4 self-stretch mt-4 w-full text-center text-3xl tracking-tighter leading-none text-cyan-700 max-md:max-w-full">
              COMO FUNCIONA O KINTO SHARE
            </h2>
          </header>
          <section className="w-full max-md:max-w-full max-w-[1136px] mx-auto ">
            <div className="flex gap-5 max-md:flex-col-reverse">
              <div className="flex flex-col w-full max-md:ml-0 max-md:w-full lg:-mr-64 lg:ml-40">
                <div className="flex z-10 flex-col self-stretch lg:my-auto mr-0 w-full max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col justify-center lg:px-6 py-4 text-white bg-[#59a2b5] max-md:px-5 max-md:pt-40 max-md:-mt-40 lg:shadow-[-7px_7px_13px_rgba(0,0,0,0.3)]  max-md:max-w-full">
                    <p className="text-lg leading-8 max-md:max-w-full">
                      Baixe o app Kinto Share em seu smartphone ou tabletInforme
                      seus dados pessoais, CNH e número de cartão de crédito*.
                    </p>
                    <p className="mt-2 text-sm tracking-normal leading-5 max-md:max-w-full">
                      * O limite do cartão de crédito deve ser igual ou superior
                      a R$1.000,00. Para verificação ANTI-FRAUDE o cartão de
                      crédito será TESTADO e depois de alguns minutos a Toyota
                      garante o estorno do mesmo.
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-center self-center mt-10">
                    <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-0.5 py-2 my-auto min-h-[48px] rotate-[3.1415925661670165rad]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3c3e2650bfb9f462a43d5b820e336ebc78cda6418b943fb8d5216f34e72a10c?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                        alt=""
                        className="object-contain w-8 aspect-square rounded-[32px]"
                      />
                    </div>
                    <div className="flex gap-1.5 justify-center self-stretch h-full w-[175px]">
                      <div className="flex flex-col justify-center items-center w-8">
                        <div className="flex w-8 bg-cyan-700 rounded min-h-[4px]" />
                      </div>
                      <div className="flex flex-col justify-center items-center w-6">
                        <div className="flex w-6 rounded bg-neutral-400 min-h-[4px]" />
                      </div>
                      <div className="flex flex-col justify-center items-center w-6">
                        <div className="flex w-6 rounded bg-neutral-400 min-h-[4px]" />
                      </div>
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-0.5 py-2 my-auto min-h-[48px] rotate-[1.224648970167536e-16rad]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/323e2c28c19c7ba0ff3947d179b23515ceac8621d638cd7c08a2617d61785828?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                        alt=""
                        className="object-contain w-8 aspect-square rounded-[32px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full relative z-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd1912b0270e77123a906a3a22f9a24dacff2dbebd58441d63aed35bbae78fc6?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                  alt="Kinto Share app interface"
                  className="object-cover grow w-full aspect-[1.13] max-md:max-w-full"
                />
              </div>
            </div>
          </section>
          <div className="flex gap-6 justify-center items-center self-center p-4 pt-64 -mt-32 bg-[#59a2b5] w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83014fad36804eff7f4808ccf9cc8e919337e75371e8fa7e72c0aa18d4859305?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
              alt="Download on the App Store"
              className="object-contain shrink-0 self-stretch my-auto aspect-[3.38] w-[135px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e551701e79aa5bf589b32bcd8d8993d990b7e2c08378aaf32db8b21f3fae362?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
              alt="Get it on Google Play"
              className="object-contain shrink-0 self-stretch my-auto aspect-[3.08] w-[117px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default KintoOneShare;
