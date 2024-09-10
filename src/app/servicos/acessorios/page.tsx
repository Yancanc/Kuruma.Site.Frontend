import BannerSwiper from "@/components/Banner";
import CarModels from "@/components/CarModels/CarModels";
import CarModelMobile from "@/components/CarModels/CarModelsMobile";
import AccessoriesSection from "@/components/ServicesComponents/AcessorySwiper/AccessorySwiperSection";
import BoutiqueSwiperSection from "@/components/ServicesComponents/BoutiqueSwiper/BoutiqueSwiperSection";

export default function Acessorios() {
  return (
    <>
      <div className="bg-neutral-100 pb-20">
        <BannerSwiper />
        <AccessoriesSection />
        <div className="bg-neutral-400 mt-20 pb-20">
        <BoutiqueSwiperSection />
        </div>
        <div className="max-lg:hidden">
          <CarModels />
        </div>
        <div className="lg:hidden">
          <CarModelMobile />
        </div>
      </div>
    </>
  );
}
