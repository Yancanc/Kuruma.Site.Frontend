import { BsWhatsapp } from "react-icons/bs";
import * as React from "react";
import Link from "next/link";

interface MainServiceProps {
  src: string;
  alt: string;
  heading: string;
  buttonText: string;
  link: string;
}

const MainService: React.FC<MainServiceProps> = ({
  src,
  alt,
  heading,
  buttonText,
  link
}) => {
  return (
    <article className="flex flex-col w-[51%] h-80 max-md:ml-0 max-md:w-full">
      <div className="flex divHover flex-col grow justify-center rounded-lg max-md:mt-6 w-full max-md:max-w-full">
        <div
          className="flex relative contrast-100  hover:contrast-125 bg-100% transition-all duration-500 hover:bg-110% overflow-y-hidden flex-col rounded-lg w-full min-h-[280px] h-full max-md:max-w-full"
          style={{
            backgroundImage: `linear-gradient(to top, rgb(0, 0, 0, 0.8), transparent), url('${src}')`,
            backgroundPosition: "center top",
          }}
        >
          <div className="flex relative backdrop-brightness-100 hover:backdrop-brightness-75 transition-all duration-500 flex-col px-4 pt-20 pb-6 h-full w-full max-md:max-w-full">
            <div className="flex gap-4 justify-between mt-3.5 h-full max-md:flex-wrap w-full max-md:max-w-full">
              <h3 className="flex-1 pr-20 text-3xl relative mt-auto  leading-7 text-white">
                {heading}
              </h3>
              <div className="flex up-div flex-col transition-all duration-500 gap-5 h-full items-end justify-end ">
                <Link href={link} className="self-end px-4 py-2 text-sm text-center uppercase bg-white rounded-md text-zinc-800 max-md:px-5">
                  {buttonText}
                </Link>
                <button className="self-end flex items-center gap-2   px-4 py-2 -mb-16 text-sm text-center uppercase bg-green-500 rounded-md text-white max-md:px-5">
                  AGENDAR AGORA <BsWhatsapp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MainService;
