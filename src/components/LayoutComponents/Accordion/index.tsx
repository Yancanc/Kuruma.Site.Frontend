import React from "react";
import CarModelItem from "./CardList";

interface CarModel {
  name: string;
  description: string;
}

const carModels: CarModel[] = [
  {
    name: "DIA DO CONSUMIDOR | YARIS HATCHBACK XS",
    description: "In fermentum euismod massa, id eleifend ex porttitor eu. Phasellus quis dolor elementum, tristique nisi eu, fermentum turpis. Quisque in elit eget augue mollis venenatis sit amet ut sapien. Nullam consequat, nibh vel condimentum placerat, quam urna luctus arcu, et hendrerit lorem tellus non risus. Curabitur eleifend, mauris eu auctor rutrum, sem nisi tristique nunc, vel auctor nulla orci vel dui. Proin ex turpis, tristique at nibh a, iaculis placerat leo. Fusce laoreet leo non ipsum feugiat, in facilisis augue ullamcorper. Suspendisse lacinia velit augue. Pellentesque lacus risus, molestie a efficitur sed, blandit vel neque. Quisque vel odio dolor. Proin tristique aliquet sem quis malesuada. Duis ac ante sit amet erat ultrices bibendum. Aliquam in magna consequat, varius justo non, ultricies tortor."
  },
  {
    name: "DIA DO CONSUMIDOR",
    description: "In fermentum euismod massa, id eleifend ex porttitor eu. Phasellus quis dolor elementum, tristique nisi eu, fermentum turpis. Quisque in elit eget augue mollis venenatis sit amet ut sapien. Nullam consequat, nibh vel condimentum placerat, quam urna luctus arcu, et hendrerit lorem tellus non risus. Curabitur eleifend, mauris eu auctor rutrum, sem nisi tristique nunc, vel auctor nulla orci vel dui. Proin ex turpis, tristique at nibh a, iaculis placerat leo. Fusce laoreet leo non ipsum feugiat, in facilisis augue ullamcorper. Suspendisse lacinia velit augue. Pellentesque lacus risus, molestie a efficitur sed, blandit vel neque. Quisque vel odio dolor. Proin tristique aliquet sem quis malesuada. Duis ac ante sit amet erat ultrices bibendum. Aliquam in magna consequat, varius justo non, ultricies tortor."
  },
  {
    name: "HILUX SRX PLUS",
    description: "In fermentum euismod massa, id eleifend ex porttitor eu. Phasellus quis dolor elementum, tristique nisi eu, fermentum turpis. Quisque in elit eget augue mollis venenatis sit amet ut sapien. Nullam consequat, nibh vel condimentum placerat, quam urna luctus arcu, et hendrerit lorem tellus non risus. Curabitur eleifend, mauris eu auctor rutrum, sem nisi tristique nunc, vel auctor nulla orci vel dui. Proin ex turpis, tristique at nibh a, iaculis placerat leo. Fusce laoreet leo non ipsum feugiat, in facilisis augue ullamcorper. Suspendisse lacinia velit augue. Pellentesque lacus risus, molestie a efficitur sed, blandit vel neque. Quisque vel odio dolor. Proin tristique aliquet sem quis malesuada. Duis ac ante sit amet erat ultrices bibendum. Aliquam in magna consequat, varius justo non, ultricies tortor."
  },
  {
    name: "SW4 PLATINUM",
    description: "In fermentum euismod massa, id eleifend ex porttitor eu. Phasellus quis dolor elementum, tristique nisi eu, fermentum turpis. Quisque in elit eget augue mollis venenatis sit amet ut sapien. Nullam consequat, nibh vel condimentum placerat, quam urna luctus arcu, et hendrerit lorem tellus non risus. Curabitur eleifend, mauris eu auctor rutrum, sem nisi tristique nunc, vel auctor nulla orci vel dui. Proin ex turpis, tristique at nibh a, iaculis placerat leo. Fusce laoreet leo non ipsum feugiat, in facilisis augue ullamcorper. Suspendisse lacinia velit augue. Pellentesque lacus risus, molestie a efficitur sed, blandit vel neque. Quisque vel odio dolor. Proin tristique aliquet sem quis malesuada. Duis ac ante sit amet erat ultrices bibendum. Aliquam in magna consequat, varius justo non, ultricies tortor."
  },
  {
    name: "TODA LINHA COROLLA CROSS HYBRID",
    description: "In fermentum euismod massa, id eleifend ex porttitor eu. Phasellus quis dolor elementum, tristique nisi eu, fermentum turpis. Quisque in elit eget augue mollis venenatis sit amet ut sapien. Nullam consequat, nibh vel condimentum placerat, quam urna luctus arcu, et hendrerit lorem tellus non risus. Curabitur eleifend, mauris eu auctor rutrum, sem nisi tristique nunc, vel auctor nulla orci vel dui. Proin ex turpis, tristique at nibh a, iaculis placerat leo. Fusce laoreet leo non ipsum feugiat, in facilisis augue ullamcorper. Suspendisse lacinia velit augue. Pellentesque lacus risus, molestie a efficitur sed, blandit vel neque. Quisque vel odio dolor. Proin tristique aliquet sem quis malesuada. Duis ac ante sit amet erat ultrices bibendum. Aliquam in magna consequat, varius justo non, ultricies tortor."
  },
];

export const Accordion: React.FC = () => {
  return (
    <section className=" flex flex-col px-6 pt-4 pb-8 text-xs font-bold bg-white text-zinc-500 max-md:px-5">
      {carModels.map((model, index) => (
        <React.Fragment key={index}>
          <CarModelItem {...model} />
          {index < carModels.length - 1 && (
            <div className="shrink-0 mt-2 h-0.5 bg-zinc-300 max-md:max-w-full" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};
