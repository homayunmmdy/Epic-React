import Theme from "@/app/components/Theme";
import StaticData from "@/app/config/data";
import React from "react";

const Themes = () => {
  return (
    <>
      <div className="grid grid-cols-12 px-5 md:px-10 gap-2 mt-20">
        <div className="col-span-0 md:col-span-2"></div>
        <div className="col-span-12 md:col-span-8">
          <div className="rounded-box grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {StaticData.themes.map((theme, index) => (
              <Theme theme={theme} key={index} />
            ))}
          </div>
        </div>
        <div className="col-span-0 md:col-span-2"></div>
      </div>
    </>
  );
};

export default Themes;
