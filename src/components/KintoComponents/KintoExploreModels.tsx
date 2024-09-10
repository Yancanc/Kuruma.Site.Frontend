import React from "react";

interface KintoExploreModelsProps {}

const KintoExploreModels: React.FC<KintoExploreModelsProps> = () => {
  const categories = [
    { name: "Carros de passeio", isActive: false },
    { name: "SUVs", isActive: true },
    { name: "Esportivos", isActive: false },
    { name: "Híbridos", isActive: false },
    { name: "Pick-ups", isActive: false },
  ];

  const models = [
    {
      name: "Corolla Cross",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/52613283226624cc241c917d6782550df35930da581d7fdfbd65589348d9204f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    },
    {
      name: "RAV4",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0d45a45b78b0e04dc5a88cfc78576c4ec74165f8bd3747b372e4acb4ddac4036?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    },
    {
      name: "SW4",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/534a97e34b4380e071e5f594cb44bd7d9d91cf44a3af99d735f74c7f8bfeb681?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    },
  ];

  return (
    <section className="flex flex-col items-end w-full max-md:pl-5">
      <div className="flex flex-col items-center w-full bg-white ">
        <div className="flex flex-col w-full max-md:max-w-full">
          <header className="flex gap-4 justify-center items-center pt-8 pb-6 w-full max-md:max-w-full">
            <div className="flex flex-col justify-center items-center self-stretch my-auto min-w-[240px]">
              <h1 className="text-4xl leading-tight text-black">
                Explore os modelos
              </h1>
              <p className="mt-2.5 text-base text-center text-black">
                Qual Toyota é perfeito pra você?
              </p>
            </div>
          </header>
          <nav className="flex overflow-hidden relative flex-col justify-center items-center w-full text-sm text-center bg-white max-md:max-w-full">
            <div className="flex z-0 flex-wrap p-1.5 tracking-normal text-zinc-600 max-md:max-w-full">
              {categories.map((category, index) => (
                <div
                  className={`flex relative flex-col justify-center px-6 py-2.5 ${
                    category.isActive ? "text-black" : ""
                  } whitespace-nowrap max-md:px-5`}
                >
                  <div className="z-0 self-center">{category.name}</div>
                  <div
                    className={`flex absolute inset-x-0 -bottom-0.5 z-0 h-0.5 ${
                      category.isActive ? "bg-slate-800" : "bg-zinc-300"
                    } min-h-[2px] w-full`}
                  />
                </div>
              ))}
            </div>
            <div className="flex absolute bottom-0 left-2/4 z-0 self-start -translate-x-2/4 bg-slate-800 h-[140px] min-h-[140px] translate-y-[0%] w-full" />
            <div className="flex overflow-hidden z-0 gap-4 justify-center items-end py-4 mt-4 w-full tracking-normal text-white max-w-[1712px] max-md:max-w-full">
              <div className="flex flex-wrap gap-4 justify-center items-start min-w-[240px] max-md:max-w-full">
                {models.map((model, index) => (
                  <div className="flex flex-col min-w-[240px] w-[272px]">
                    <img
                      loading="lazy"
                      src={model.image}
                      alt={`${model.name} model`}
                      className="object-contain w-full aspect-[1.6]"
                    />
                    <div className="flex flex-col justify-center items-center w-full min-h-[55px]">
                      <div className="flex-1 shrink gap-2.5 self-stretch max-w-full w-[272px]">
                        {model.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default KintoExploreModels;
