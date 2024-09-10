import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  imageSrc: string;
  logoSrc: string;
  altText: string;
  carLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  logoSrc,
  altText,
  carLink
}) => {
  return (
    <article className="flex flex-col grayscale hover:grayscale-0 grow justify-center py-4 text-sm transition-all duration-500 text-center uppercase text-zinc-800 mt-10 hover:mt-0 max-md:mt-6 ">
      <div
        className="flex relative shadow-xl shadow-transparent transition-all duration-500 hover:shadow-black/30 flex-col rounded-xl overflow-y-hidden items-center pt-6 pb-3.5 w-full aspect-[0.8] "
        style={{
          backgroundImage: `url('${imageSrc}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full py-4 relative flex flex-col items-center transition-all duration-500 justify-between h-full hover:pb-24">
        <Image
              width={400}
              height={400}
            loading="lazy"
            src={logoSrc}
            alt={altText}
            className="aspect-[7.14] w-[267px] rounded-md"
          />
          <Link
            href={carLink}
            className="relative -mb-20 bg-white px-5 py-2 rounded    "
            tabIndex={0}
          >
            SAIBA MAIS
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
