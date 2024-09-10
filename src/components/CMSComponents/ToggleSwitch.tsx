'use client'
import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex gap-2 items-center min-h-[56px]">
      <button
        onClick={() => setIsChecked(!isChecked)}
        className={`flex gap-2.5 items-start self-stretch p-1 my-auto bg-neutral-500 bg-opacity-20 rounded-[64px] w-[50px] ${isChecked ? 'justify-end' : 'justify-start'}`}
        aria-checked={isChecked}
        role="switch"
      >
        <div className={`flex w-6 h-6 rounded-full ${isChecked ? 'bg-neutral-700' : 'bg-neutral-400'} min-h-[24px]`} />
      </button>
      <span className="self-stretch my-auto text-base text-neutral-800">
        {label}
      </span>
    </div>
  );
};

export default ToggleSwitch;