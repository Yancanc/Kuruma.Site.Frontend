'use client'
import BannerSwiper from "@/components/Banner";
import CarModels from "@/components/CarModels/CarModels";
import CarModelMobile from "@/components/CarModels/CarModelsMobile";
import ContactFormService from "@/components/ContactForm/ContactFormService";


export default function ServicesLayout({
  aboveContact,
  belowContact,
  children,
}: Readonly<{
  aboveContact?: JSX.Element;
  belowContact?: JSX.Element;
  children: React.ReactNode;
}>) {
  return (
    <>

      <BannerSwiper />
      <div className="w-full bg-neutral-100">

      <div className="flex max-lg:flex-col max-w-[1440px] mx-auto py-32 px-5  overflow-hidden">
        {children}
        <div className="flex flex-col items-center">
          {aboveContact}
          <ContactFormService/>
          {belowContact}
        </div>
      </div>
      <div className="max-lg:hidden">
        <CarModels/>
      </div>
      <div className="lg:hidden">
        <CarModelMobile/>
      </div>
      </div>
    </>
  );
}
