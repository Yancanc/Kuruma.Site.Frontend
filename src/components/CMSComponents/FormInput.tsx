import React from 'react';

interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, placeholder, type = 'text', disabled }) => {
  return (
    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-2 items-center w-full whitespace-nowrap h-[23px] max-md:max-w-full">
        <label htmlFor={`input-${label}`} className="self-stretch my-auto text-base text-neutral-700">{label}</label>
        <span className="self-stretch my-auto text-lg font-medium leading-loose text-red-600">*</span>
      </div>
      <input
        id={`input-${label}`}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className="overflow-hidden flex-1 shrink gap-4 self-stretch p-4 mt-2 w-full text-base bg-white rounded-lg border-2 border-solid border-neutral-500 text-neutral-500 max-md:max-w-full"
        required
      />
    </div>
  );
};

export default FormInput;