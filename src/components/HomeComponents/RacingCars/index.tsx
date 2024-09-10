import React from "react";
import ProductCard from "./productCard";
import Image from "next/image";

const products = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f3509788760c5fcc0d79de5afa9809c3174a2efcbeb02b427cae83b32bc52ce9?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83bd9c42a25f3362c1c3306eeb1d2183fd189781b9c62a72551889a1c4da825f?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    altText: "Product 1",
    carLink: "/hilux-gr",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/272566e3aab1500e2943d4305f9b6d2ae152f282a055c4fa14623113882e1c09?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7344951b049bb00b3ebf0307a410c731ef103851b27403f235a38a854ef8e4cb?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    altText: "Product 2",
    carLink: "/corolla-gr",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/266496ed9d0f22a208e0fad682de0c2ad068d0ca0f89b168c00b6324a353783c?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a0d47a31afb847568fc6fe565db551c43d484b016bb024fc5caeed4cf87aab35?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    altText: "Product 3",
    carLink: "/sw4-gr",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/92a01557f469206353c8518fb353331dc802b77667fd5f33b40544035519a720?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/88c63f28dd366aa29040e1339549a660eb8e156acbbe8f5e2034374ff5996c13?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    altText: "Product 4",
    carLink: "/corolla-cross-gr",
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full pb-28 bg-neutral-100">
      <div className="h-60 bg-black w-full">
        <header className="flex justify-center items-center p-6 w-full max-md:px-5 max-md:max-w-full">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/982f7d48b3ff31ce6e0da521de8ca02583478130de57d5df4303164d27a65ccf?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt="Company Logo"
            className="mb-14 max-w-full aspect-[12.5] w-[377px] max-md:mb-10"
          />
        </header>
      </div>
      <div className="h-60 bg-white"></div>
      <section className="z-10 mt-20  w-full max-md:max-w-full absolute max-w-[1140px] mx-auto">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductShowcase;
