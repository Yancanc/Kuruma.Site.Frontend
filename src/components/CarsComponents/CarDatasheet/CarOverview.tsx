"use client";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function CarOverview() {
  const [selects, setSelects] = useState({
    modelIndex: 0,
    colorIndex: 0,
  });

  const models = ["XR", "XRE", "XRX"];
  const pics = [
    [
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fac677c1c6a2a4e69ba021f560e3bd9bf",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fadfec4b23a0b491987a00bf52d045bfd",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F5582c3b653d04104ba83dc2288eb01e9",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Ff1f552f9b80e45399227f18bab035684",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fc3da9d13162b4f10aca6ddd477007741",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fc6efa2bf8baf471da0187c7c6b5a30cc",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F190ef9f09c0a406789633222ebecfb60",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fb938c79df07145bb8155704a9ebfe064",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Faae093fbc6744c85828dcbcf12ba5627",
    ],
    [
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F06eae7cf0b0c461795a4614dc00e5a97",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F527666de537d495ab2af00cf08cc34bc",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F86ddee96739a4123a526f4e8b1a5b32a",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F2dee18109b744474b890658031c5f1b8",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F58f6a0267f0440fe86a7e0cd1f602b33",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F62a39f435896410bb6542d303f99cbe6",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F8c5ea0ebe5cf49b992cabea8c4704c50",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F0ac74b8de60b4f0594d92614b7e4c33d",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fd0584eb1bba14e84b631931434f80889",
    ],
    [
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F33fd1d5b8a044733a1404dd0e8741986",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F6526e74e799e42c9a53bd40f3a14b0d8",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F3c8a40bd27ce4ba381ea5cbedaae34ef",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F9cbcc09da16a4ef089b5705c46e98680",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F4f21653d4fc54686bdfcff8ef386696d",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F0e26e30fd1c0454c82684d848bd241b8",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fba7461e9e6a1449d88b9b7accb8eb231",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F02548afee1234016a7955225d6104e6e",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F04a506364dba4de184736210b9e58c61",
    ],
    [
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fdbb8eed874584e47934c93dde55ca0dd",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fd6f8651b9c47466b9cd756a221d3f25d",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F339455899be44aacb439620ac2c07a2f",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F3318b5fcccd64af2b50c915b7a91e0c2",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F79ecf26b591d4969abc46c2fa1d86f2c",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F62f704fc6b3345bbad211fca488a730d",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F663c69452682456ab545f4af7db43a12",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fcf726e12474046458713bb5c2373b870",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F5b8a0762e7c14714956b0de06f615c26",
    ],
    [
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F079a23b106954757a1335a0e44587183",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F08434501dd9f44d98dd06d4d2bf2ce74",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fa65a72e2a120490da22fa69f6a8c6946",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F2dd3bcf536b2494d8cee62f5f362c51f",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fb49bcfbfafb347ddbfef05b2658b6357",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F3f35ba4cc9754ab3a775591aa216ab19",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F8b222060dba845c28acbccc3f9da8113",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F6e0ecef546944d17894b541d1767281d",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fafb97148ea9c4709ab594698e86e7bf6",
    ],
    [
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F31c996ff43064ebb983ce56b6d1e556c",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F7791b7cf5bc641fdbbe1d1bcbc89c825",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F5ab4fbb27a8a4f498aacf800f3e86703",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F7f880cd05c574fdd9da098b10a19d75b",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F9d4cefa86b1347aabe203c21193775cc",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fbbfac777bbaf40ee8f731c537cf98aa4",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F55a6cc42e4c54421a637f5284ae8a87a",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fe902c145b82e42f884a0c424269e4351",
      "https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fe372924a1d784cd7b1ec4f6635e992a2",
    ],
  ];
  const colors = [
    "Branco Polar",
    "Vermelho Granada",
    "Cinza Celeste",
    "Preto",
    "Cinza",
    "Branco",
  ];
  const hex = [
    "bg-[#FAFAFA]",
    "bg-[#7E1F23]",
    "bg-[#667072]",
    "bg-[#000000]",
    "bg-[#C3CBD0]",
    "bg-[#F3F3F0]",
  ];
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <section className="flex flex-col w-full max-w-[500px] items-center justify-center">
      <div className="flex flex-col items-center pb-6 w-full max-w-[655px] max-md:max-w-full">
        <h2 className="flex gap-4 justify-center items-center px-14 pt-8 w-full text-3xl leading-tight text-zinc-900 max-md:px-5">
          Conheça as versões
        </h2>
        <div className="lg:hidden flex mx-auto mt-4 overflow-hidden justify-center self-stretch my-auto text-xs leading-snug whitespace-nowrap bg-white border border-solid border-zinc-500  rounded-[50px] text-zinc-500 w-full max-w-[331px]">
          <div className="flex-1 flex shrink gap-4 justify-center items-center w-full py-2  h-full font-semibold text-white bg-zinc-500">
            <div className="flex gap-1 items-center">
              <Image
                width={400}
                height={400}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcde9ccad5ccfd5bb044dfed3e3c3c7210c6fcf0745e26975aaf7f2a70082db?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                alt="Combustivel icon"
                className="object-contain w-4 aspect-square"
              />
              <span>Combustivel</span>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-center items-center w-full py-2 h-full border-r border-l border-zinc-500">
            <div className="flex gap-1 items-center">
              <Image
                width={400}
                height={400}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cab43d84571d58a078e1be484ec510bd93c5495bdb030672f87a05f654a78800?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                alt="Híbrido icon"
                className="object-contain w-4 aspect-square"
              />
              <span>Híbrido</span>
            </div>
          </div>
          <div className="flex-1 flex shrink gap-4 justify-center items-center w-full py-2 h-full">
            <div className="flex gap-1 items-center">
              <Image
                width={400}
                height={400}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54659def89d7222964cb3d6a39946db93fa58b9322b4df89b0c4824761b60942?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
                alt="Esportivo icon"
                className="object-contain w-4 aspect-square"
              />
              <span>Esportivo</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 max-w-full items-center w-full">
          <div className="flex items-start mxc text-sm leading-snug text-center whitespace-nowrap text-neutral-400">
            {models.map((model, index) => (
              <div
                className={`px-6 py-4 border-b-2 cursor-pointer min-h-[40px] max-md:px-5 ${
                  selects.modelIndex == index
                    ? "text-neutral-700 border-neutral-700"
                    : "text-zinc-300 border-zinc-300"
                }`}
                onClick={() => setSelects({ ...selects, modelIndex: index })}
              >
                {model}
              </div>
            ))}
          </div>
          <div className="max-w-[400px] w-full">
            <Slider {...settings}>
              {pics[selects?.colorIndex]?.map((select) => (
                <Image
                  width={400}
                  height={400}
                  loading="lazy"
                  src={select}
                  alt="Car version XR"
                  className="object-contain w-full aspect-[1.62] mt-2"
                />
              ))}
            </Slider>
          </div>
          <div className="flex gap-4 justify-center items-center mt-2 text-xs leading-snug text-center text-zinc-800">
            <Image
              width={400}
              height={400}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f2872e65162315bf8111ab8dca082d20997ec1bd4364ad980883f4a867229b4?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
              alt=""
              className="object-contain w-2 aspect-[0.67]"
            />
            <span>Arraste para girar</span>
            <Image
              width={400}
              height={400}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4187871e98a08940e882371202503131a9cbbf55c4016bbed7489971ee51e52f?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
              alt=""
              className="object-contain w-2 aspect-[0.67]"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-4 mt-2">
            {colors.map((color, i) => {
              return (
                <div
                  className={`w-6 h-6 rounded-full  ${
                    hex[i]
                  }  shadow shadow-black ${
                    i == selects.colorIndex && "scale-125"
                  } cursor-pointer`}
                  onClick={() => setSelects({ ...selects, colorIndex: i })}
                ></div>
              );
            })}
          </div>
          <div className="flex gap-1.5 max-w-60 w-full justify-center items-center mt-2 text-sm text-neutral-700">
            <div className="flex-1 w-full h-[2px] bg-gradient-to-r from-neutral-100 to-neutral-400" />
            <span>{colors[selects.colorIndex]}</span>
            <div className="flex-1 w-full h-[2px] bg-gradient-to-l from-neutral-100 to-neutral-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarOverview;
