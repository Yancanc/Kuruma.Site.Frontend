import Link from "next/link";
import React from "react";

interface BankingCardProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  description?: string;
  buttonText: string;
  alternative?: boolean;
  link: string
}

const BankingCard: React.FC<BankingCardProps> = ({
  title,
  subtitle,
  imageSrc,
  description,
  buttonText,
  alternative = false,
  link
}) => {
  return (
    <article className="flex flex-1 shrink gap-2.5 justify-center items-start py-4 basis-0 divHover lg:hover:-mt-6 mt-0 transition-all">
      <div className="flex overflow-hidden h-72 flex-col flex-1 shrink justify-center max-lg:max-w-72 max-lg:mx-2 w-full bg-black rounded-lg basis-0 min-h-[300px] text-white">
        <div
          className="flex overflow-hidden  h-72 relative flex-col flex-1 justify-between   w-full bg-black "
          style={{
            backgroundImage: `url('${imageSrc}')`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-between py-4 h-full w-full hover:backdrop-blur-sm hover:backdrop-brightness-75 transition-all duration-500">
            {/* <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="object-contain absolute bottom-0 left-2/4 z-0 max-w-full -translate-x-2/4 aspect-[0.94] h-full translate-y-[0%] w-[302px]"
          /> */}
            {alternative ? (
              <>
                <div className="flex z-0 flex-col gap-[2px] items-center justify-center text-center w-full">
                  <div className=" w-full mx-auto text-2xl -mb-2 ">
                    {subtitle}
                  </div>
                  <h2 className=" w-full mx-auto text-3xl font-bold">
                    {title}
                  </h2>
                  <p className="w-full bg-red-600 font-semibold tracking-widest">
                    BANCO TOYOTA
                  </p>
                  <p className="text-xs">SOLICITE UMA SIMULAÇÃO</p>
                </div>
              </>
            ) : (
              <div className="flex z-0 flex-col text-center justify-center w-full">
                {subtitle && (
                  <div className="flex-1 shrink gap-2.5 w-full text-xs leading-loose">
                    {subtitle}
                  </div>
                )}
                <h2 className="pb-4 w-full $ text-3xl whitespace-nowrap">
                  {title}
                </h2>
              </div>
            )}
            {description && (
              <p className="opacity-0 display-none text-sm text-center show px-4 transition-all">
                {description}
              </p>
            )}
            <div className="flex z-0 items-center w-full text-sm leading-none text-center uppercase">
              <Link href={link} className="overflow-hidden transition-all paint-button-alternative border w-9/12  gap-1.5 self-stretch px-4 py-2.5 mx-auto rounded-md min-h-[40px]">
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BankingCard;
