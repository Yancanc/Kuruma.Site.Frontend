import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const cars = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f4251c7f8842b12d09092f55d8007a2784d76b5c3673b7d98e849098176d6cf?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    alt: "Etios image",
    name: "Etios",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e197efb2da62c7092c835715f267789f34ec4d835e5a22a6a0c242c3e55e78?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    alt: "Yaris image",
    name: "Yaris",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a31bce8760c22f43e40ddf94bf65d9ddd8c6c66a6cf372955ef13754d60281e2?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    alt: "Crorolla image",
    name: "Crorolla",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/de11d5f3344b4100545c93ca21aceaef4192bcb50af8d553dacf756348161469?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    alt: "Crorolla Cross image",
    name: "Crorolla Cross",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4a836e4a7ec485f14bafc7a851405472f1f34eaf2aed115ac496f201fe1d91f?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    alt: "Prius image",
    name: "Prius",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/86387fb2267bb3f75e4752897a5bc87fbddedc0f170213fcaacb3bd45b79fa02?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    alt: "RAV4 image",
    name: "RAV4",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3af828774ce8591c075dc09413e8e0753f3a3bc6d34547b7df1621491876d874?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    alt: "Hilux image",
    name: "Hilux",
    isHighlighted: true,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f597ba26a6ea9447abb095a59412a69f1b2d91543e47b4e65c63cd887a1ed23?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286",
    alt: "SW4 image",
    name: "SW4",
  },
];

const AccessoryCarGallery: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="flex gap-5 max-lg:hidden justify-between items-center py-4 text-base leading-snug text-center">
        {cars.map((car, index) => (
          <React.Fragment key={index}>
          <div
            className={`flex flex-col self-stretch  border-l border-neutral-300 px-5 items-center  whitespace-nowrap  lg:w-[108px]`}
          >
            <img
              loading="lazy"
              src={car.src}
              alt={car.alt}
              className="object-contain self-center aspect-[3] w-[90px]"
            />
            <div
              className={`mt-2 w-10/12 text-center ${
                car.isHighlighted
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-neutral-500"
              }`}
            >
              {car.name}
            </div>
          </div>
          {index < cars.length - 1 && (
            <div className="flex shrink-0 self-stretch my-auto w-px h-[50px]" />
          )}
        </React.Fragment>
        ))}
      </section>
      <section className="lg:hidden">
        <Slider {...settings}>
          {cars.map((car, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex flex-col self-stretch  border-l border-neutral-300 px-5 items-center  whitespace-nowrap  lg:w-[108px]`}
              >
                <img
                  loading="lazy"
                  src={car.src}
                  alt={car.alt}
                  className="object-contain self-center aspect-[3] w-[90px]"
                />
                <div
                  className={`mt-2 w-10/12 text-center ${
                    car.isHighlighted
                      ? "text-red-600 border-b-2 border-red-600"
                      : "text-neutral-500"
                  }`}
                >
                  {car.name}
                </div>
              </div>
              {index < cars.length - 1 && (
                <div className="flex shrink-0 self-stretch my-auto w-px h-[50px]" />
              )}
            </React.Fragment>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default AccessoryCarGallery;
