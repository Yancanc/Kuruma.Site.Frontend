import { BsWhatsapp } from "react-icons/bs";
import * as React from "react";
import Image from "next/image";
import { actualSite } from "@/utils/utils";

interface MainServiceProps {
  src: string;
  alt: string;
  heading: string;
  buttonText: string;
}

const MainServiceCardMobile: React.FC<MainServiceProps> = ({
  src,
  alt,
  heading,
  buttonText,
}) => {
  const { siteDefaultName } = actualSite();
  return (
    <article className="flex mx-auto justify-center flex-col px-4 items-center w-full rounded-xl">
      <Image
              width={400}
              height={400} className="w-full" src={src} alt={alt} />
      <div className="bg-blue-900 h-full w-full flex gap-2 flex-col p-4 ">
        <p className="text-sm">TOYOTA {siteDefaultName.toLocaleUpperCase()}</p>
        <p className="text-xl leading-none">{heading}</p>
        <p className="text-sm">
          Uma equipe de profissionais altamente qualificados para honrar os
          nossos dois pilares: precisão nos trabalhos executados e total
          dedicação ao cliente em todo o atendimento.{" "}
        </p>
        <button className="w-full bg-white text-blue-900 rounded-lg py-1 mt-2">{buttonText}</button>
      </div>
    </article>
  );
};

export default MainServiceCardMobile;
