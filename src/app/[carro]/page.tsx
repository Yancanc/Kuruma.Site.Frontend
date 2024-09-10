import BannerSwiper from "@/components/Banner";
import CarDatasheet from "@/components/CarsComponents/CarDatasheet";
import CarDatasheetMobile from "@/components/CarsComponents/CarDatasheet/CarDatasheetMobile";
import DifferentialsComponent from "@/components/CarsComponents/DifferentialItem";
import DifferentialsMobile from "@/components/CarsComponents/DifferentialItem/DifferentialMobile";
import PicsSwipper from "@/components/CarsComponents/PicsSwipper";
import SafetyFeatures from "@/components/CarsComponents/SafetyFeatures";
import SafetyFeaturesMobile from "@/components/CarsComponents/SafetyFeatures/SafetyFeaturesMobile";
import CarModels from "@/components/CarModels/CarModels";
import CarModelMobile from "@/components/CarModels/CarModelsMobile";

export default function CarPage() {
  return (
    <>
      <BannerSwiper dotsBottom="bottom-10" />
      <div className="max-lg:hidden">
        <CarDatasheet />
        <PicsSwipper />
        <SafetyFeatures />
        <DifferentialsComponent />
        <CarModels />
      </div>
      <div className="lg:hidden">
        <CarDatasheetMobile />
        <PicsSwipper />
        <SafetyFeaturesMobile/>
        <DifferentialsMobile/>
        <CarModelMobile />
      </div>
    </>
  );
}
