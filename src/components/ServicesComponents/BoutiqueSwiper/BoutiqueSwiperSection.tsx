'use client'
import React, { useState } from "react";
import ProductCard, { ProductData } from "./BoutiqueCard";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

const productData: ProductData[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/918bbf1b65cc2221540820dd8a526b3386a63fb33e86017b32a17e001ed205ff?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    title: "Mochila Toyota",
    sizes: ["único"],
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/717613c01282b5bbffce84d6242aae8a9f9d451926526054c47d9c461bacef9f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    title: "Camisa Polo preta Toyota",
    sizes: ["pp", "P", "m", "g", "gg"],
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f18ac3c3e1f8476095401d8dd779b4c35f7b52e641d95c39859a46274cefd7c6?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    title: "Jaqueta Toyota",
    sizes: ["P", "m", "g", "gg"],
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b83cf394b801c4528d2ae2dff789631fad71e276f261ea3923aa1c2effb7d850?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    title: "Moleton Toyota",
    sizes: ["P", "m", "g", "gg", "exg"],
  },
];

const BoutiqueSwiperSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function SampleNextArrow(props: any) {
      const { onClick } = props;
      return (
        <div
          className={
            " absolute h-fit bg-gray-500 text-neutral-100 p-2 px-4 w-fit rounded-full inset-0 mt-auto ml-auto mr-2 -mb-16"
          }
          onClick={onClick}
        >
          <GrNext size={20} />
        </div>
      );
    }
  
    function SamplePrevArrow(props: any) {
      const { onClick } = props;
      return (
        <div
          className={
            " absolute z-20 bg-gray-500 text-neutral-100 p-2 px-4 w-fit h-fit rounded-full inset-0 mt-auto mr-auto ml-2 -mb-16"
          }
          onClick={onClick}
        >
          <GrPrevious size={20} />
        </div>
      );
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      beforeChange: (oldIndex: number, newIndex: number) => {
        setCurrentIndex(newIndex);
      },
      customPaging: (index: number) => {
        return (
          <div
            key={index}
            className={`w-6 h-2 cursor-pointer relative -bottom-10 ${
              currentIndex === index ? "bg-gray-500" : "bg-gray-300"
            }`}
          ></div>
        );
      },
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  
  return (
    <section className="flex flex-col py-12 max-w-[1140px] mx-auto">
      <div className="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
        <header className="flex overflow-hidden relative gap-4 items-start px-8 py-8 w-full rounded-2xl bg-neutral-900 min-h-[150px] shadow-[0px_0px_12px_rgba(0,0,0,0.2)] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f64b94f785bb804ad851baf9fe990a04c7e6244a6f157de2da88418f2ca1fa87?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="object-contain absolute top-2/4 left-2/4 z-0 self-start -translate-x-2/4 -translate-y-2/4 aspect-[4.57] h-[250px] w-[1140px] max-md:max-w-full"
          />
          <div className="flex z-0 flex-col justify-center my-auto min-w-[240px] w-[558px] max-md:max-w-full">
            <h1 className="text-3xl leading-tight text-white max-md:max-w-full">
              Boutique Toyota
            </h1>
            <p className="mt-4 text-sm leading-5 text-white max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Tristique et nisl quis
              praesent viverra urna. Risus amet a cras in quam. Semper rhoncus
              diam malesuada maecenas in.
            </p>
          </div>
        </header>
        <div className="w-full">
        <Slider {...settings}>
          {productData.map((product, index) => (
              <div className="p-4 h-full">
              <ProductCard key={index} {...product} />
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BoutiqueSwiperSection;
