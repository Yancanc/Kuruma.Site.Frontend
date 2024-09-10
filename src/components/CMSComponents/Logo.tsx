import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex gap-5 items-center self-center max-w-full min-h-[56px] w-[218px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18d81bb1890b05dd59d8fdf7dd898cc1059f2b01c7feb4e6bbc82b5963cc1ecb?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" className="object-contain shrink-0 self-stretch my-auto aspect-[4.88] w-[78px]" alt="Logo 1" />
      <div className="flex shrink-0 self-stretch my-auto w-px bg-neutral-500 h-[33px]" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2fef76724ca137d0fe6f0f35dee4d367b396ad2e884a0e48bd4b173b272d19d?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286" className="object-contain shrink-0 self-stretch my-auto aspect-[6.71] w-[94px]" alt="Logo 2" />
    </div>
  );
};

export default Logo;