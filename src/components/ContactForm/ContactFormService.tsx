import { AiOutlineDown } from "react-icons/ai"; 
import * as React from "react";

function ContactFormService() {
  return (
    <section className="flex flex-col self-start  relative z-10 lg:ml-20 max-lg:mx-auto">
      <div className="flex w-full min-h-[60px] max-md:max-w-full max-lg:hidden" />
      <div className="flex overflow-hidden flex-col self-center max-w-full bg-white rounded-lg shadow-[2px_2px_24px_rgba(0,0,0,0.15)] w-full lg:w-[400px]">
        <form className="flex flex-col  justify-center px-4 py-2 w-full items-center">
          <h2 className="flex flex-col w-fit mx-auto justify-center items-start pt-2 lg:w-full text-2xl leading-tight text-center text-black">
            Solicitar atendimento
          </h2>
          <hr className="flex mb-2.5 bg-red-600 rounded min-h-[3px] max-lg:mx-auto lg:mr-auto w-[60px]" />
          <p className="text-sm leading-5 text-zinc-600">
            Preencha com suas informações que já entraremos em contato.
          </p>
          <div className="flex flex-col justify-center px-6 pt-2 pb-8 w-full bg-white max-md:px-5 max-lg:max-w-[400px]">
            <div className="flex flex-col w-full text-sm leading-snug text-neutral-600 border bg-stone-300 bg-opacity-0 border-white border-opacity-0 min-h-[40px]">
            
              <input
                id="nameInput"
                type="text"
                aria-label="Nome"
                className="mt-1 w-full border-b-2 border-neutral-400 min-h-[2px] pl-5 py-2"
                required
                placeholder="Nome*"
              />
            </div>
            <div className="flex flex-col mt-4 w-full text-sm leading-snug text-neutral-600 border bg-stone-300 bg-opacity-0 border-white border-opacity-0 min-h-[40px]">
            
              <input
                id="cpfInput"
                type="cpf"
                aria-label="CPF"
                className="mt-1 w-full border-b-2 border-neutral-400 min-h-[2px] pl-5 py-2"
                required
                placeholder="CPF*"
              />
            </div>
            <div className="flex flex-col mt-4 w-full text-sm leading-snug text-neutral-600 border bg-stone-300 bg-opacity-0 border-white border-opacity-0 min-h-[40px]">
            
              <input
                id="emailInput"
                type="email"
                aria-label="E-mail"
                className="mt-1 w-full border-b-2 border-neutral-400 min-h-[2px] pl-5 py-2"
                required
                placeholder="E-mail*"
              />
            </div>
            <div className="flex flex-col mt-4 w-full text-sm leading-snug text-neutral-600 border bg-stone-300 bg-opacity-0 border-white border-opacity-0 min-h-[40px]">
            
              <input
                id="phoneInput"
                type="tel"
                aria-label="Telefone"
                className="mt-1 w-full border-b-2 border-neutral-400 min-h-[2px] pl-5 py-2"
                required
                placeholder="Telefone*"
              />
            </div>
            <div className="flex justify-between mt-4 w-full  items-center text-sm leading-snug text-neutral-600 bg-white rounded border border-stone-500 min-h-[40px] min-w-[200px]">
              <select
                id="modelInput"
                aria-label="Modelo de Interesse"
                className="flex-1 flex shrink -mr-5 justify-between items-center px-3.5 py-1.5 w-full self-stretch my-auto bg-white"
                required
              >
                <option value="" selected disabled>Modelo de Interesse*</option>
                <option value="XR">XR</option>
                <option value="XRE">XRE</option>
                <option value="XRX">XRX</option>
              </select>
              <AiOutlineDown  className="relative mr-2 pointer-events-none" />
            </div>
            <div className="flex justify-between mt-4 w-full  items-center text-sm leading-snug text-neutral-600 bg-white rounded border border-stone-500 min-h-[40px] min-w-[200px]">

              <select
                id="dealerInput"
                aria-label="Concessionária"
                className="flex-1 flex shrink -mr-5 justify-between items-center px-3.5 py-1.5 w-full self-stretch my-auto bg-white"
                required
              >
                <option value="" selected disabled>Concessionária*</option>
                <option value="Dealer 1">Dealer 1</option>
                <option value="Dealer 2">Dealer 2</option>
                <option value="Dealer 3">Dealer 3</option>
              </select>

              <AiOutlineDown  className="relative mr-2 pointer-events-none" />
            </div>
            <fieldset className="flex flex-wrap gap-2 items-center mt-4 w-full">
              <legend className="self-stretch ml-2 my-auto text-sm font-semibold leading-snug text-neutral-600">
                Como você gostaria de ser contactado?
              </legend>
              <label className="flex items-center self-stretch my-auto checkboxGroup cursor-pointer gap-2 ml-2">
                <input
                  type="checkbox"
                  name="contactMethod"
                  value="WhatsApp"
                  className="hidden"
                />
               <div className="w-4 h-4 border rounded-full border-black checkboxMark"/>
                <span className="self-stretch my-auto text-sm leading-snug whitespace-nowrap text-zinc-600">
                  WhatsApp
                </span>
              </label>
              <label className="flex items-center self-stretch my-auto checkboxGroup cursor-pointer gap-2 ml-2">
                <input
                  type="checkbox"
                  name="contactMethod"
                  value="Telefone"
                  className="hidden"
                />
               <div className="w-4 h-4 border rounded-full border-black checkboxMark"/>
                <span className="self-stretch my-auto text-sm leading-snug whitespace-nowrap text-zinc-600">
                  Telefone
                </span>
              </label>
              <label className="flex items-center self-stretch my-auto checkboxGroup cursor-pointer gap-2 ml-2">
                <input
                  type="checkbox"
                  name="contactMethod"
                  value="E-mail"
                  className="hidden"
                />
               <div className="w-4 h-4 border rounded-full border-black checkboxMark"/>
                <span className="self-stretch my-auto text-sm leading-snug whitespace-nowrap text-zinc-600">
                  E-mail
                </span>
              </label>
            </fieldset>
            <div className="flex gap-2 items-center mt-4 w-full">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  required
                  className=""
                />
              </label>
              <span className="flex-1 shrink self-stretch my-auto text-xs leading-4 basis-[11px] text-zinc-600">
                Ao marcar esta opção e clicar em &quot;Enviar&quot;, você
                concorda com nosso contato e tratamento de dados conforme nossa
                Política de Privacidade
              </span>
            </div>
            <button
              type="submit"
              className="flex-1 mt-8 flex shrink gap-2 justify-center items-center self-stretch px-6 py-3.5 my-auto w-full bg-red-600 rounded min-h-[55px]  max-md:px-5"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className="flex w-full min-h-[40px] max-md:max-w-full" />
      </div>
    </section>
  );
}

export default ContactFormService;
