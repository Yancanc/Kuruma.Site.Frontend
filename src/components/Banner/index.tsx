"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./BannerSwiper.module.css"; // Vamos usar um módulo CSS para estilos personalizados
import { useEffect, useState } from "react";

const banners = [
  { id: 1, content: "Banner Ilustrativo 1" },
  { id: 2, content: "Banner Ilustrativo 2" },
  { id: 3, content: "Banner Ilustrativo 3" },
];
interface BannerProps {
  dotsBottom?: string;
}

const BannerSwiper =({ dotsBottom = '-bottom-6'}: BannerProps) => {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
      setProgress(0);
    },
    customPaging: (index: number) => {
      return (
        <div
          key={index}
          className={`${dotsBottom} z-[8] w-12 h-2 cursor-pointer relative  ${
            currentIndex === index ? "bg-red-500" : "bg-gray-300"
          }`}
        ></div>
      );
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative customDotsGap">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="h-[450px] flex items-center justify-center bg-gray-200"
          >
            <h2 className="text-2xl">{banner.content}</h2>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
        <div
          className="h-1 bg-red-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"></div>
    </div>
  );
};

export default BannerSwiper;
