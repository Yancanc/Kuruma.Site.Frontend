import React from "react";

type NavigationItem = {
  title: string;
  items: string[];
};

type NavigationSectionProps = {
  sections: NavigationItem[];
};

const NavigationSection: React.FC<NavigationSectionProps> = ({ sections }) => (
  <nav className="flex gap-4 items-start mt-6 text-sm text-black max-md:flex-wrap">
    {sections.map((section, index) => (
      <div key={index} className="flex flex-col flex-1 self-stretch">
        <div>{section.title}</div>
        {section.items.map((item, itemIndex) => (
          <div key={itemIndex} className="mt-2.5 tracking-normal">
            {item}
          </div>
        ))}
      </div>
    ))}
  </nav>
);

export default NavigationSection;
