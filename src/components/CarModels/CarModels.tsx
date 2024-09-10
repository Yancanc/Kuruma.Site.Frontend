import React from "react";
import CarModelCard from "./CarModelCard";
import { carModels } from "./CarsInfo";

const CarModels: React.FC = () => {
  return (
    <section className=" pt-20 w-full bg-neutral-100 flex">
      <div className="max-w-[1140px] w-full mx-auto flex bg-neutral-100 flex-col items-center py-8 max-h-svh">
        <h1 className="text-5xl  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Explore todos os modelos
        </h1>
        <p className="mt-2 text-xl leading-6 text-center text-black">
          Qual Toyota é perfeito pra você?
        </p>
        <div className="flex justify-between w-full gap-6 max-w-[1140px] mt-6 max-md:flex-wrap">
        {carModels.slice(0,6).map((model, index) => (
            <CarModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarModels;
