import React from 'react';

interface VehicleSelectorProps {
  vehicles: Array<{
    id: string;
    name: string;
    imageSrc: string;
  }>;
}

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ vehicles }) => {
  return (
    <nav className="flex gap-5 justify-between items-center py-4 mt-4 w-full text-base leading-snug text-center text-neutral-500 max-md:max-w-full">
      {vehicles.map((vehicle, index) => (
        <React.Fragment key={vehicle.id}>
          <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[108px]">
            <img loading="lazy" src={vehicle.imageSrc} alt={vehicle.name} className="object-contain self-center aspect-[3] w-[90px]" />
            <div className="mt-2">{vehicle.name}</div>
          </div>
          {index < vehicles.length - 1 && (
            <div className="flex shrink-0 self-stretch my-auto w-px h-[50px]" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default VehicleSelector;