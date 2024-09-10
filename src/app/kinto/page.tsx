import BannerSwiper from "@/components/Banner";
import ContactForm from "@/components/ContactForm/ContactForm";
import BenefitCardKinto from "@/components/KintoComponents/BenefitCarKinto";
import KintoExploreModels from "@/components/KintoComponents/KintoExploreModels";
import SolicitarProposta from "@/components/KintoComponents/KIntoForm";
import KintoHeader from "@/components/KintoComponents/KintoHeader";
import KintoOneFleet from "@/components/KintoComponents/KintoOneFleet";
import KintoOnePersonal from "@/components/KintoComponents/KintoOnePersonal";
import KintoOneShare from "@/components/KintoComponents/KintoOneShare";
import KintoSection from "@/components/KintoComponents/KintoSection";
import React from "react";

const KintoApp: React.FC = () => {
  return (
    <div>
      <BannerSwiper />
      <main className="flex flex-col items-center bg-neutral-100 pt-10">
        <div className="flex flex-col w-full  ">
          <KintoOneFleet />
          <div className="w-full lg:hidden">
            <ContactForm />
          </div>
          <KintoOnePersonal />
          <KintoOneShare />
          <div className="w-full max-lg:hidden">
            <SolicitarProposta />
          </div>
          <div className="w-full max-lg:hidden">
          <KintoExploreModels />
          </div>
          {/* Rest of the components... */}
        </div>
      </main>
    </div>
  );
};

export default KintoApp;
