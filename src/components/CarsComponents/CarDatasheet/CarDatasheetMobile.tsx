import { AiOutlineDown } from "react-icons/ai";
import CarOverview from "./CarOverview";
import ContactForm from "../../ContactForm/ContactForm";
import TechSpecsMobile from "./TechSpecsMobile";

export default function CarDatasheetMobile() {
  return (
    <div className="bg-neutral-100 flex flex-col items-center justify-center">
      <div className="flex w-full bg-black px-4 py-4 items-center justify-between">
        <p>Corolla Cross 2024</p>
        <div className="flex justify-between w-28  items-center text-sm leading-snug text-white bg-black rounded-xl border border-white min-h-[40px]">
          <select
            id="dealerInput"
            aria-label="Concessionária"
            className="flex-1 flex shrink -mr-5 justify-between  text-sm items-center px-3.5 py-1.5 w-full self-stretch rounded-xl my-auto bg-black text-white"
            required
          >
            <option value="" selected disabled>
              Galeria
            </option>
          </select>

          <AiOutlineDown className="relative mr-2 pointer-events-none" />
        </div>
      </div>
      <CarOverview />
      <TechSpecsMobile/>
      <ContactForm />
    </div>
  );
}
