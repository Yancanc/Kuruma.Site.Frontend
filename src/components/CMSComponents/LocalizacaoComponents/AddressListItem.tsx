import { BiPencil } from "react-icons/bi"; 
import { AiOutlineDelete } from "react-icons/ai"; 
import React from 'react';

type AddressListItemProps = {
  location: string;
  uf: string;
  type: string;
  address: string;
  phone: string;
};

const AddressListItem: React.FC<AddressListItemProps> = ({ location, uf, type, address, phone }) => (
  <div className="flex flex-wrap gap-4 p-4 w-full text-base border-b border-neutral-300 text-neutral-800 max-md:max-w-full">
    <div className="leading-6 w-[172px]">{location}</div>
    <div className="w-16 leading-6">{uf}</div>
    <div className="flex flex-col items-start my-auto font-semibold text-white uppercase whitespace-nowrap w-[124px]">
      <div className="self-stretch px-2 py-1 w-fit rounded-lg bg-neutral-500 bg-opacity-60">
        {type}
      </div>
    </div>
    <div className="flex-1 shrink leading-6 basis-0">{address}</div>
    <div className="leading-6 w-[172px]">{phone}</div>
    <div className="flex gap-6 items-center my-auto text-3xl text-center uppercase whitespace-nowrap text-neutral-800">
      <button className="self-stretch my-auto w-6" aria-label="Edit"><AiOutlineDelete /></button>
      <button className="self-stretch my-auto w-6" aria-label="Delete"><BiPencil /></button>
    </div>
  </div>
);

export default AddressListItem;