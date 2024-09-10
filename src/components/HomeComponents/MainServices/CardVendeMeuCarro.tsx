import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardVMC: React.FC = () => {
  return (
    <article className="flex divHover relative flex-col items-start px-4 pt-64 pb-4 bg-amber-500 rounded-lg w-[49%] max-md:pt-24">
      <Image
        width={400}
        height={400}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b8544ccdb0403cb23363955da83be1da7088a593d8bed64a34fbda430752cd7?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
        alt="Top background image"
        className=" absolute top-0 left-2/4 z-0 rounded-lg -translate-x-2/4 aspect-[2.85] h-[196px] translate-y-[0%] w-full max-md:max-w-full"
      />
      <Image
        width={400}
        height={400}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/90513e6ec22d5c0f9201ea34b0dc55c8779a3793ce86bc4316a106891cb5efcd?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
        alt="Bottom background image"
        className="object-contain absolute left-2/4 z-0 transition-all enlargeImage -translate-x-2/4 aspect-[2.66] bottom-[55px] h-[210px] translate-y-[0%] w-full max-md:max-w-full"
      />
      <header className="flex absolute top-4 left-4 z-0 flex-col justify-center max-w-full drop-shadow-[0px_4px_2px_rgba(0,0,0,0.45)] w-[306px]">
        <Image
          width={400}
          height={400}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03a96c1036dba721048b1061d85a6b924243ede2af94d101cb749bf4d202ede3?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt="Logo"
          className="object-contain max-w-full aspect-[6.71] w-[134px]"
        />
        <Image
          width={400}
          height={400}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc58bf1b694311b6840fa15c07d77728a62e7019b5ef8c4857578a1672dab0d1?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
          alt="Subtitle"
          className="object-contain mt-2.5 w-full aspect-[13.33]"
        />
      </header>
      <div className="flex z-0 flex-wrap justify-between items-end self-stretch w-full max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2.5 py-2 pr-40 mt-2 text-2xl leading-7  text-neutral-700">
          Procurando um jeito fácil de vender seu carro?
        </h2>
        <Link
          href={"/vende-meu-carro"}
          className="overflow-hidden paint-button transition-all gap-1.5 self-stretch px-4 py-2 rounded-md text-neutral-700 border border-neutral-700 h-fit mt-auto "
        >
          SAIBA MAIS
        </Link>
      </div>
    </article>
  );
};

export default CardVMC;
