import React from "react";

const TechnologyItem = ({ src, label }) => {
  return (
    <div className="flex flex-col justify-center items-center font-bold gap-2 text-xs w-14 ">
      <img
        src={src}
        alt={`${label} icon`}
        className="w-7 h-7 md:w-10 md:h-10"
      />
      <p className="text-center">{label}</p>
    </div>
  );
};

export default TechnologyItem;
