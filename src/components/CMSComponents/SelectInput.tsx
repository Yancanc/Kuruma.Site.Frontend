import { BiChevronDown } from "react-icons/bi"; 
import React from 'react';

interface SelectFieldProps {
  label: string;
  placeholder: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[300px]">
      <label htmlFor="pageSelect" className="gap-2 self-stretch w-full text-base whitespace-nowrap h-[23px] text-neutral-800">
        {label}
      </label>
      <div className="flex overflow-hidden gap-4 items-center  mt-2 w-full bg-white rounded-lg border-2 border-solid border-zinc-400">
        <select
          id="pageSelect"
          className="flex-1 shrink self-stretch -mr-16 my-auto p-4 text-base basis-0 text-zinc-400 bg-transparent border-none appearance-none"
        >
          <option value="" disabled selected hidden>{placeholder}</option>
        </select>
        <span className="self-stretch my-auto w-6 mr-5 relative text-3xl text-center pointer-events-none uppercase text-neutral-700">
          <BiChevronDown />
        </span>
      </div>
    </div>
  );
};

export default SelectField;