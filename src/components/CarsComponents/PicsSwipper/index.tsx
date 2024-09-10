'use client'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const PicsSwipper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [picsType, setPicsType] = useState(0)
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={
          " absolute h-fit bg-gray-500 text-neutral-100 p-2 px-4 w-fit rounded-full inset-0 mt-auto mx-auto lg:mr-80 mr-10 -mb-16"
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
          " absolute z-20 bg-gray-500 text-neutral-100 p-2 px-4 w-fit h-fit rounded-full inset-0 mx-auto mt-auto lg:ml-80 ml-10 -mb-16"
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
    customPaging: (index: number) => {
      return (
        <div
          key={index}
          className={`w-6 h-2 cursor-pointer relative max-sm:-bottom-2 -bottom-10 ${
            currentIndex === index ? "bg-gray-500" : "bg-gray-300"
          }`}
        ></div>
      );
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const pics = [
    [
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F1e2a0c54bb944e9c99d51fe675000ff2',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F6a146b81d4fc409a8f4025d543b1b2a7',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F662f5b9108cf4d06923aae4a7d2f1759',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F9b1121bf7fc9466a815ba6fcf598ad3d',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F7bc761c4a874464890e8a04d7d75b464',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F203d0da4b42f4d66b9b5482b696e5b2d'
    ],
    [
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fc94a87880a764978a2d9e640aafd3558',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F1f26e866d70a452da2140fb368339b69',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F62ef5f09e42748a786d179040b91cb3c',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2Fde75598b42094e54b6c64882105dbe72',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F3ecfe3f352674942a57555a9d4fcbc2a',
      'https://cdn.builder.io/api/v1/image/assets%2Feac21aa640a54d679c8b4aff1d0cf286%2F08a2d0a0765c4527be8277b928edd767',
    ]
  ]

  return (
    <section className=" pt-20 w-full  bg-white flex">
      <div className="pb-20 w-full mx-auto max-w-[1140px] flex bg-white flex-col items-center overflow-hidden">
        <h1 className="text-3xl  text-black  max-md:max-w-full text-center">
          Galeria de fotos
        </h1>
        <div className="text-neutral-400 flex mt-3">
          <p className={`px-5 py-3 cursor-pointer border-b-2 ${picsType == 0 && "border-neutral-700 text-neutral-700"}`} onClick={() => setPicsType(0)}>Interior</p>
          <p className={`px-5 py-3 cursor-pointer border-b-2 ${picsType == 1 && "border-neutral-700 text-neutral-700"}`} onClick={() => setPicsType(1)}>Exterior</p>
        </div>
        <div className=" w-10/12 py-8">
          <Slider {...settings}>
            {pics[picsType].map((card) => (
              <>
                <Image
                  width={400}
                  height={400}
                  loading="lazy"
                  src={card}
                  alt="Car Picture"
                  className="object-contain w-full aspect-[1.62] mt-2"
                />
              </>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PicsSwipper;
