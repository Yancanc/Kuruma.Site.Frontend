import Link from "next/link";
import React from "react";

const HeaderCMS = ({ activePath }: { activePath: string }) => {
  return (
    <header className="flex overflow-x-hidden bg-white flex-wrap justify-between items-center self-stretch px-12 py-6 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 items-center self-stretch my-auto min-h-[56px] w-[218px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c02f6626d5e0eb10d9ffead7b159ba76bb75afc0c417b1796d7d2daefb22abb?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[5.21] w-[78px]"
        />
        <div className="flex shrink-0 self-stretch my-auto w-px bg-neutral-500 h-[33px]" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2ef2952069488d58c6fdd38af9665d495362e779962c69164b0a75caf0489c?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[6.71] w-[94px]"
        />
      </div>
      <nav className="flex flex-wrap flex-1 gap-5 shrink justify-center items-center self-stretch py-4 my-auto text-base font-medium text-center uppercase whitespace-nowrap basis-0 min-w-[240px] text-neutral-500 max-md:max-w-full">
        <Link
          href={"/cms/home"}
          className={`self-stretch px-4 py-2 my-auto  ${
            activePath.includes("home") ? "bg-gray-300" : "bg-white"
          } `}
        >
          home
        </Link>
        <Link
          href={"/cms/consorcio"}
          className={`self-stretch px-4 py-2 my-auto  ${
            activePath.includes("consorcio") ? "bg-gray-300" : "bg-white"
          } `}
        >
          consórcio
        </Link>
        <Link
          href={"/cms/metadados"}
          className={`self-stretch px-4 py-2 my-auto  ${
            activePath.includes("metadados") ? "bg-gray-300" : "bg-white"
          } `}
        >
          Metadados
        </Link>
        <Link
          href={"/cms/localizacao"}
          className={`self-stretch px-4 py-2 my-auto  ${
            activePath.includes("localizacao") ? "bg-gray-300" : "bg-white"
          } `}
        >
          localização
        </Link>
      </nav>
      <div className="flex gap-8 items-center self-stretch my-auto text-base font-semibold text-center uppercase whitespace-nowrap text-neutral-500">
        <Link href={'/cms/login'} className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch px-1 py-2 my-auto min-h-[35px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1915f9f90f0ba87e118124930836d60bcb8d696f2da9fb60bca4ae780530055d?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.1] w-[23px]"
          />
          <span className="self-stretch my-auto">sair</span>
        </Link>
      </div>
    </header>
  );
};

export default HeaderCMS;
