"use client";

import { actualSite } from "@/utils/utils";
import { useState } from "react";

export default function ChatBot() {
  const { siteDefaultName } = actualSite();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="flex flex-col  fixed z-40 bottom-10 right-10 ">
        {isOpen ? (
          <>
            <main className="flex flex-col overflow-hidden lg:rounded-xl max-lg:w-screen max-lg:h-screen max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:z-40  lg:max-w-[360px] shadow-[3px_4px_12px_rgba(0,0,0,0.15)] ">
              <div className="flex overflow-hidden flex-col w-full lg:min-h-[495px] max-lg:h-full">
                <header className="flex gap-9 justify-between items-center p-4 w-full leading-snug bg-red-600 text-stone-50">
                  <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d61101d0a770b26b8c2cdee6d5616f8df88b8e2ce5c722f3c43afbb5e7c2473e?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                      alt="Chat assistant logo"
                      className="object-contain shrink-0 self-stretch my-auto aspect-[1.49] w-[49px]"
                    />
                    <div className="flex flex-col self-stretch my-auto">
                      <h1 className="text-base font-semibold">
                        Assistente Virtual {siteDefaultName}
                      </h1>
                      <p className="text-xs">Online agora</p>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6988fb0ce3ac56ffc7af4c2b9df8644b88e3128e5b1d3f394d1660eec69eae?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                    alt="Menu"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[1.03] w-[31px] cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </header>
                <section className="flex overflow-hidden flex-col flex-1 px-4 py-6 w-full bg-white">
                  <div className="flex gap-1 items-start self-start text-sm leading-5 text-neutral-700">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/43c9e3bf215bb23f247746e895663abb513d820e460f8261fdee4e072ca8706c?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                      alt={"Assistant avatar"}
                      className="object-contain shrink-0 w-10 aspect-square"
                    />
                    <div className="flex items-start min-w-[240px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a3bc7bfd42b12b9ccd083fce9fb831ae7fc4a4926bf5d4a5844b22b6f5a095?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                        alt=""
                        className="object-contain shrink-0 w-3 aspect-[1.2]"
                      />
                      <div className="gap-2.5 self-stretch p-2.5 bg-gray-200 rounded-none w-[232px]">
                        <>
                          Oi, que bom ver você por aqui! 😄 Antes de começarmos,
                          poderia me informar seu <strong>NOME COMPLETO</strong>
                          ? Assim, consigo te oferecer um atendimento mais
                          personalizado.
                        </>
                      </div>
                    </div>
                  </div>
                  <form className="flex overflow-hidden gap-10 justify-between items-center  mt-auto text-base leading-snug bg-white rounded-lg border-2 border-solid border-neutral-600 text-neutral-500">
                    <input
                      type="text"
                      id="chatInput"
                      placeholder="Sua resposta..."
                      className="flex-grow bg-transparent border-none outline-none px-5 py-4 -mr-16"
                      aria-label="Type your message"
                    />
                    <button type="submit" aria-label="Send message">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c443e090fabec72eb52bbc490d50e6c8cba1994e47826d10f19b29672654934?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto aspect-[1.24] w-[31px] mr-2"
                      />
                    </button>
                  </form>
                </section>
              </div>
            </main>
          </>
        ) : (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82816d496eee8d21758626ee6cea7e26520c28e56722e5136787360d8c9739b4?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt="Descriptive alt text for the image"
            className="object-contain   aspect-square shadow-[0px_0px_0px_rgba(0,0,0,0.05)] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </section>
    </>
  );
}
