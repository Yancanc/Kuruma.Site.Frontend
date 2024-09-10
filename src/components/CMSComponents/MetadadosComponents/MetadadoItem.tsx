import { BiPencil } from "react-icons/bi"; 
import { AiOutlineDelete } from "react-icons/ai"; 
import React from 'react';
import Link from "next/link";

interface MetadescriptionItemProps {
  page: string;
  title: string;
  description: string;
  date: string;
}

function MetadescriptionItem({ page, title, description, date }: MetadescriptionItemProps) {
  return (
    <article className="flex flex-wrap gap-4 p-4 w-full border-b border-neutral-300 text-neutral-800 max-md:max-w-full">
      <div className="text-base leading-6 w-[172px]">{page}</div>
      <div className="flex flex-col flex-1 shrink my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <h3 className="text-xl font-medium max-md:max-w-full">{title}</h3>
        <p className="text-base leading-6 max-md:max-w-full">{description}</p>
      </div>
      <time className="text-base leading-6 w-[172px]">{date}</time>
      <div className="flex gap-6 items-center my-auto text-3xl text-center uppercase whitespace-nowrap text-neutral-800">
        <button className="self-stretch my-auto w-6" aria-label="Edit"><AiOutlineDelete /></button>
        <Link href={`/cms/metadados/${page}`} className="self-stretch my-auto w-6" aria-label="Delete"><BiPencil /></Link>
      </div>
    </article>
  );
}

export default MetadescriptionItem;