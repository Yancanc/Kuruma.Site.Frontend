import BannerSwiper from "@/components/Banner";
import CarModels from "@/components/CarModels/CarModels";
import CarModelMobile from "@/components/CarModels/CarModelsMobile";
import { MainServices } from "@/components/HomeComponents/MainServices";
import MainServicesMobile from "@/components/HomeComponents/MainServices/MainServicesMobile";
import RacingCars from "@/components/HomeComponents/RacingCars";
import BankingLayout from "@/components/HomeComponents/ToyotaBank";
import BankingMobile from "@/components/HomeComponents/ToyotaBank/BankingMobile";

// ---------------
// Importar fonte
// ---------------

export default function HomePage() {
  return (
    <>
      <BannerSwiper />
      <div className="max-lg:hidden">
        <CarModels />
        <RacingCars />
        <MainServices />
        <BankingLayout />
      </div>
      <div className="lg:hidden">
        <CarModelMobile />
        <MainServicesMobile />
        <BankingMobile />
      </div>
    </>
  );
}
