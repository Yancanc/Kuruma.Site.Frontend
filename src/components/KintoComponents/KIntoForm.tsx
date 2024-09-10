import React from "react";

const SolicitarProposta: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center px-96 py-12 bg-white max-md:px-5">
      <section className="flex flex-col justify-center items-center max-w-full w-[600px]">
        <div className="flex overflow-hidden flex-col px-6 py-4 w-full bg-white rounded-lg shadow-[5px_5px_30px_rgba(0,0,0,0.4)] max-md:px-5">
          <header className="flex flex-col justify-center px-4 py-2 w-full text-3xl leading-tight text-center text-black bg-white max-md:max-w-full">
            <div className="flex flex-col justify-center items-center py-2 w-full max-md:max-w-full">
              <h1>Solicite uma Proposta</h1>
              <div className="flex mt-2.5 bg-sky-900 rounded min-h-[2px] w-[60px]" />
            </div>
          </header>
          <form className="flex overflow-hidden flex-col justify-center px-6 pt-2 pb-8 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-4 w-full text-sm leading-snug text-red-600 border border-solid bg-stone-300 bg-opacity-0 border-white border-opacity-0 min-h-[40px] max-md:max-w-full">
              <input
                id="nameInput"
                type="text"
                aria-label="Nome"
                className="mt-1 w-full border-b-2 border-neutral-600 min-h-[2px] pl-5 py-2"
                required
                placeholder="Nome*"
              />
            </div>
            <div className="flex flex-col mt-4 w-full text-sm leading-snug text-red-600 border border-solid bg-stone-300 bg-opacity-0 border-white border-opacity-0 min-h-[40px] max-md:max-w-full">
            <input
                id="nameInput"
                type="text"
                aria-label="E-mail"
                className="mt-1 w-full border-b-2 border-neutral-600 min-h-[2px] pl-5 py-2"
                required
                placeholder="E-mail*"
              />
            </div>
            <div className="flex flex-col mt-4 w-full text-sm leading-snug text-red-600 border border-solid bg-stone-300 bg-opacity-0 border-white border-opacity-0 min-h-[40px] max-md:max-w-full">
            <input
                id="nameInput"
                type="text"
                aria-label="Telefone"
                className="mt-1 w-full border-b-2 border-neutral-600 min-h-[2px] pl-5 py-2"
                required
                placeholder="Telefone*"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center mt-4 w-full max-md:max-w-full">
              <div className="flex justify-center items-center self-stretch p-1.5 my-auto w-6 min-h-[24px] rounded-[67px]">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="flex self-stretch my-auto w-3 rounded-sm border border-solid border-neutral-400 min-h-[12px]"
                />
              </div>
              <label
                htmlFor="privacy-policy"
                className="flex-1 shrink self-stretch my-auto text-xs leading-4 basis-3 text-zinc-600 max-md:max-w-full"
              >
                Ao marcar esta opção e clicar em "Enviar", você concorda com
                nosso contato e tratamento de dados conforme nossa Política de
                Privacidade
              </label>
            </div>
            <div className="flex gap-6 justify-center items-center mt-4 w-full text-2xl leading-tight text-center text-white whitespace-nowrap max-md:max-w-full">
              <button
                type="submit"
                className="flex flex-1 shrink gap-2 justify-center items-center self-stretch px-6 py-3.5 my-auto w-full bg-red-600 rounded basis-0 min-h-[55px] min-w-[240px] max-md:px-5 max-md:max-w-full"
              >
                <span className="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
                  Enviar
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SolicitarProposta;
