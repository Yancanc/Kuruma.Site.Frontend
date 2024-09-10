import * as React from "react";
import NavBar from "./NavBar";
import CarOverview from "./CarOverview";
import TechSpecs from "./TechSpecs";
import ContactForm from "../../ContactForm/ContactForm";

function CarDatasheet() {
  return (
    <main className="flex flex-col bg-neutral-100">
      <NavBar />
      <section className="flex overflow-hidden max-w-[1140px] mx-auto  justify-center w-full bg-neutral-100">
        <div>
    {/* ^^^^ Não remova essa div  */}
        <CarOverview />
        </div>
        <ContactForm />
      </section>
        <TechSpecs />
    </main>
  );
}

export default CarDatasheet;
