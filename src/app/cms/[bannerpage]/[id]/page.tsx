import BannerUpload from "@/components/CMSComponents/BannerManagementComponents/BannerUpload";
import CampaignForm from "@/components/CMSComponents/BannerManagementComponents/CampaingnForm";
import CreateOrEditHeader from "@/components/CMSComponents/BannerManagementComponents/CreateOrEditHeader";
import ToggleOptions from "@/components/CMSComponents/BannerManagementComponents/ToggleOptions";
import React from "react";

const Banner: React.FC = () => {
  return (
    <main className="flex flex-col p-4 w-full h-full  bg-neutral-100 ">
      <CreateOrEditHeader />
      <CampaignForm />
      <ToggleOptions />
      <BannerUpload />
      <div className="flex flex-col mt-6 w-full text-base whitespace-nowrap min-h-[200px] max-md:max-w-full">
        <label
          htmlFor="defense"
          className="gap-2 self-stretch w-full h-[23px] text-neutral-800 max-md:max-w-full"
        >
          Defesa
        </label>
        <textarea
          id="defense"
          className="overflow-hidden flex-1 shrink gap-4 p-4 mt-2 leading-6 bg-white rounded-lg border-2 border-solid border-zinc-400 size-full text-ellipsis text-zinc-400 max-md:max-w-full"
          placeholder="Coloque sua defesa aqui"
        />
      </div>
    </main>
  );
};

export default Banner;
