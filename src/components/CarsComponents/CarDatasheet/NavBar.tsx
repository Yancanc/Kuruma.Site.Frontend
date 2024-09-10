import Image from "next/image";
import * as React from "react";

function NavBar() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center self-center px-14 py-5 w-full bg-black min-h-[90px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center self-stretch py-2 my-auto min-w-[240px] max-md:max-w-full">
        <h1 className="my-auto text-2xl leading-tight text-center text-white">
          Corolla Cross 2024
        </h1>
        <div className="flex overflow-hidden justify-center self-stretch my-auto text-xs leading-snug whitespace-nowrap bg-white border border-solid border-zinc-500 min-w-[240px] rounded-[50px] text-zinc-500 w-[331px]">
          <div className="flex-1 flex shrink gap-4 justify-center items-center py-2 pr-3 pl-3 h-full font-semibold text-white bg-zinc-500">
            <div className="flex gap-1 items-center">
              <Image
                width={400}
                height={400}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcde9ccad5ccfd5bb044dfed3e3c3c7210c6fcf0745e26975aaf7f2a70082db?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                alt="Combustivel icon"
                className="object-contain w-4 aspect-square"
              />
              <span>Combustivel</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center px-4 py-2 h-full border-r border-l border-zinc-500">
            <div className="flex gap-1 items-center">
              <Image
                width={400}
                height={400}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cab43d84571d58a078e1be484ec510bd93c5495bdb030672f87a05f654a78800?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                alt="Híbrido icon"
                className="object-contain w-4 aspect-square"
              />
              <span>Híbrido</span>
            </div>
          </div>
          <div className="flex-1 flex shrink gap-4 justify-center items-center px-4 py-2 h-full">
            <div className="flex gap-1 items-center">
              <Image
                width={400}
                height={400}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54659def89d7222964cb3d6a39946db93fa58b9322b4df89b0c4824761b60942?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                alt="Esportivo icon"
                className="object-contain w-4 aspect-square"
              />
              <span>Esportivo</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex flex-wrap gap-8 justify-center items-center self-stretch my-auto leading-snug text-center min-w-[240px] max-md:max-w-full">
        <ul className="flex gap-6 justify-center items-center my-auto text-base text-white min-w-[240px]">
          <li className="text-stone-50">Visão geral</li>
          <li>Galeria</li>
          <li>TSS</li>
          <li>Diferenciais</li>
        </ul>
        <button className="gap-2.5 self-stretch px-4 py-3 my-auto text-lg text-white bg-red-600 rounded-[29px] shadow-[0px_0px_3px_rgba(255,0,0,1)]">
          Solicitar atendimento
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
