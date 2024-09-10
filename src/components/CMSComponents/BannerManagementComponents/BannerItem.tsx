import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import React from "react";

export interface BannerItemProps {
  order: number;
  type: string;
  desktopImage: string;
  mobileImage: string;
  date: string;
}

const BannerItem: React.FC<BannerItemProps> = ({
  order,
  type,
  desktopImage,
  mobileImage,
  date,
}) => {
  return (
    <div className="flex flex-wrap gap-8 justify-between items-center p-4 w-full border-b border-neutral-300 max-md:max-w-full">
      <div
        className={`flex gap-6 items-center self-stretch my-auto text-3xl text-center whitespace-nowrap  w-[140px] ${
          order == 1 ? "text-neutral-400" : "text-neutral-800"
        }`}
      >
        <div
          className={`self-stretch flex items-center text-center justify-center pr-2.5 pl-${
            order < 10 ? "3" : "2.5"
          } my-auto w-9 h-9 text-2xl font-bold text-white bg-blue-400 min-h-[36px] rounded-[38px]`}
        >
          {order}
        </div>
        <div className="self-stretch my-auto w-6 uppercase">
          <BiChevronDown />
        </div>
        <div className="self-stretch my-auto w-6 uppercase">
          <BiChevronUp />
        </div>
      </div>
      <div className="flex flex-col self-stretch my-auto text-base font-semibold text-white uppercase whitespace-nowrap w-[146px]">
        <div className="self-stretch px-2 py-1 rounded-lg bg-neutral-500 bg-opacity-60">
          {type}
        </div>
      </div>
      <div className="flex gap-4 items-start self-stretch my-auto min-w-[240px]">
        <img
          loading="lazy"
          src={desktopImage}
          alt={`Desktop banner ${order}`}
          className="object-contain rounded-lg aspect-[3.8] min-w-[240px] shadow-[0px_1px_4px_rgba(0,0,0,0.25)] w-[304px]"
        />
        <img
          loading="lazy"
          src={mobileImage}
          alt={`Mobile banner ${order}`}
          className="object-contain shrink-0 rounded-lg aspect-[0.85] shadow-[0px_1px_4px_rgba(0,0,0,0.25)] w-[68px]"
        />
      </div>
      <div className="flex flex-col justify-center self-stretch px-4 py-2 my-auto rounded-lg bg-neutral-500 bg-opacity-10">
        <div className="flex gap-4 items-center">
          <div className="w-6 text-3xl text-center uppercase text-neutral-800">
            <BiCalendar />
          </div>
          <div className="text-base text-neutral-800">{date}</div>
        </div>
      </div>
      <div className="flex gap-6 items-center self-stretch my-auto text-3xl text-center uppercase whitespace-nowrap text-neutral-800">
        <button className="self-stretch my-auto w-6" aria-label="Edit banner">
          <AiFillDelete />
        </button>
        <button className="self-stretch my-auto w-6" aria-label="Delete banner">
          <BiDotsHorizontalRounded />
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
