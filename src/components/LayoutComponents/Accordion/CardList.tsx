"use client";
import { BiChevronDown } from "react-icons/bi";
import React, { useState } from "react";

interface CarModelItemProps {
  name: string;
  description: string;
}

const CardList: React.FC<CarModelItemProps> = ({ name, description }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="flex gap-5 justify-between px-4 py-2 bg-white max-md:flex-wrap max-md:max-w-full cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="my-auto">{name}</div>
        <BiChevronDown size={28} className={`transition-all duration-300 ease-in-out ${open ? "rotate-180" : ""}`} />
      </div>
      <div className={` h-full  transition-all duration-700 ease-in-out overflow-hidden ${open ? "max-h-[800px]" : "max-h-0"}`}>
        <p className="p-4 border-t-2">{description}</p>
      </div>
    </>
  );
};

export default CardList;
