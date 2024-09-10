import { AiFillCaretRight } from "react-icons/ai";
import { actualSite } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const ContactInfo: React.FC = () => {
  const { siteEmail, siteDefaultName } = actualSite();
  return (
    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-6 py-5 text-base max-md:px-5 max-md:mt-4">
        <div className="flex overflow-hidden gap-4 items-center  mt-2 w-full bg-white rounded ">
          <select
            id="pageSelect"
            className="flex-1 shrink self-stretch -mr-40 my-auto p-3 basis-0 text-black text-2xl bg-transparent border-none appearance-none"
          >
            <option value="" disabled selected hidden>
              <div>{siteDefaultName} Vitória</div>
            </option>
          </select>
          <span className="self-stretch my-auto mr-32 relative text-3xl text-center pointer-events-none uppercase text-neutral-700">
            {/* <BiChevronDown /> */}
            <AiFillCaretRight size={14} />
          </span>
        </div>
        <div className="flex gap-4 mt-5 text-xs sm:text-sm leading-5 text-white">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc8047419969ba7c0d89cf4c9195db327a4d2687f8f444b7be267481a104d67?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="shrink-0 self-start aspect-square w-[18px]"
          />
          <address>
            Rodovia Engenheiro Fabiano Vivacqua, 31 a 45 Marbrasa <br />
            Cachoeiro de Itapemirim / ES - CEP: <br />
            29.313-656
          </address>
        </div>
        <div className="flex mt-5 text-stone-300">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01add3728634b98ad9ddbdf5b7eef43e0bf56c941ef0664616e9dca907741403?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="shrink-0 w-5 aspect-square"
          />
          <div className="flex-1 px-4">Atendimento Online: (27) 99849-7670</div>
        </div>
        <div className="flex mt-5 text-stone-300">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f77db50d1eb861216e3db875b02cf6278917d081fd4bf62d8e5237bc9421ad4b?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="shrink-0 w-5 aspect-square"
          />
          <div className="flex-1 px-4">
            {siteDefaultName} Cachoeiro: (28) 3322-3322
          </div>
        </div>
        <div className="flex mt-5 leading-[125%] text-stone-300 text-xs sm:text-sm  break-all ">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08496c8752133e8848d63b6bf220a99c823c369fe59d0dbf7ea878d7ef00b31a?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="shrink-0 w-5 aspect-square"
          />
          <a href={`mailto:${siteEmail}`} className="flex-1 px-4 underline">
            {siteEmail}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
