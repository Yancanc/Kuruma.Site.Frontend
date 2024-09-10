import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  acronym: string;
  imageUrl: string;
  logoUrl: string;
  availableModels: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  acronym,
  imageUrl,
  logoUrl,
  availableModels,
}) => {
  return (
    <article className="flex relative flex-col rounded-xl bg-stone-50 min-h-[830px] lg:min-h-[758px] min-w-[240px] shadow-[0px_6px_14px_rgba(0,0,0,0.15)] lg:w-[35vw] max-md:max-w-full mb-4 lg:m-20 ">
      <div className="flex overflow-hidden z-0 flex-col items-start w-full rounded-xl max-md:max-w-full">
        <div className="flex relative z-10 flex-col items-end px-20 pt-60 pb-28 mt-0 mr-0 -mb-10 min-h-[378px] max-md:px-5 max-md:py-24 max-md:mb-2.5 w-full">
        <Image
              width={400}
              height={400}
            loading="lazy"
            src={imageUrl}
            alt={title}
            className="object-cover absolute inset-0 size-full w-full max-lg:h-80"
          />
        </div>
      </div>
      <div className="flex z-0 flex-col flex-1 justify-between px-4 pb-4 lg:mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-stone-500 max-md:max-w-full">
          <h2 className="lg:text-2xl text-2xl lg:font-semibold leading-none max-md:max-w-full">
            {title}
          </h2>
          <p className="mt-2 lg:text-base leading-6 max-md:max-w-full text-sm">
            {description}
          </p>
        </div>
        <div className="flex flex-col mt-auto w-full text-sm leading-snug max-md:mt-10 max-md:max-w-full">
          <p className="text-neutral-600 max-md:max-w-full">
            Disponíveis nos modelos:
          </p>
          <div className="flex gap-2 items-start self-start mt-2 uppercase whitespace-nowrap text-neutral-400">
            {availableModels.map((model, index) => (
              <span
                key={index}
                className="overflow-hidden gap-2 self-stretch px-2 py-0.5 rounded-lg border border-solid border-neutral-400 w-[45px]"
              >
                {model}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute gap-2.5 self-stretch px-6 py-3 max-w-full text-4xl font-semibold leading-none whitespace-nowrap bg-white rounded-lg left-[30px] shadow-[0px_4px_7px_rgba(0,0,0,0.15)] text-stone-500 top-[271px] w-[125px] max-md:px-5">
        {acronym}
      </div>
    </article>
  );
};

export default FeatureCard;
