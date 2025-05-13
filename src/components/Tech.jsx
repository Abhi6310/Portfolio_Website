import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
          <div className="relative w-full h-full">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");