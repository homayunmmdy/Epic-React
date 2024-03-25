import React from "react";

const Feature = ({ data }) => {
  const LinkIcon = data.icon;
  return (
    <div className="relative group h-full" key={data.id}>
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <div className="relative rounded-m bg-base-100 p-8 text-center shadow-lg transition duration-200 hover:scale-110 ">
        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
          <LinkIcon
            className="icon icon-tabler icon-tabler-color-swatch"
            size={24}
          />
        </div>
        <h3 className="mt-6">{data.title}</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default Feature;
