import Image from "next/image";
import React from "react";

interface OperatingHoursItemProps {
  title: string;
  hours: string[];
}

const OperatingHoursItem: React.FC<OperatingHoursItemProps> = ({ title, hours }) => (
  <div className="flex flex-col px-2 mt-4">
    <h3 className="text-base font-semibold leading-6">{title}</h3>
    <div className="mt-1 text-sm leading-5">
      {hours.map((hour, index) => (
        <React.Fragment key={index}>
          {hour}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>
);

const OperatingHours: React.FC = () => {
  const operatingHoursData = [
    { title: "Showroom", hours: ["Dias úteis: 08h às 18h", "Sábados: 08h às 12h"] },
    { title: "Peças", hours: ["Dias úteis: 08h às 18h", "Sábados: 08h às 12h"] },
    { title: "Serviços", hours: ["Dias úteis: 07h30 às 17h30", "Sábados: 08h às 12h"] },
  ];

  return (
    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-6 text-white max-md:px-5 max-md:mt-4">
        <div className="flex text-base font-semibold leading-6">
        <Image
              width={400}
              height={400} 
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f206cddaf5c0019c03c21a924d9efbfe9f1c0d3d391f2e3722a3bb5b2dd7d4?apiKey=eac21aa640a54d679c8b4aff1d0cf286&&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
            alt=""
            className="shrink-0 self-start w-5 aspect-square"
          />
          <h2 className="flex-1 px-4">Horário de Funcionamento</h2>
        </div>
        {operatingHoursData.map((item, index) => (
          <OperatingHoursItem key={index} title={item.title} hours={item.hours} />
        ))}
      </div>
    </div>
  );
};

export default OperatingHours;
