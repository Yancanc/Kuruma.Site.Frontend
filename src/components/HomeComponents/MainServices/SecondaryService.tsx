import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface SecondaryServiceProps {
  src: string;
  alt: string;
  buttonText?: string;
  link: string;
}

const SecondaryService: React.FC<SecondaryServiceProps> = ({
  src,
  alt,
  buttonText,
  link
}) => {
  return (
    <article className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full h-80 ">
      <div className="flex divHover flex-col-reverse text-sm h-full justify-between text-center uppercase rounded-lg text-zinc-800 max-md:px-5 max-md:mt-6">
        {buttonText && (
          <Link href={link} className="px-4 paint-button transition-all py-3 w-1/2 mx-auto rounded-md border border-solid border-zinc-800 max-md:px-5 max-md:mt-10">
            {buttonText}
          </Link>
        )}
        <Image
              width={400}
              height={400}
          loading="lazy"
          src={src}
          alt={alt}
          className=" m-auto w-1/2 "
        />
      </div>
    </article>
  );
};

export default SecondaryService;
