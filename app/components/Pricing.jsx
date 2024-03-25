import React from "react";
import StaticData from "../config/data";
import Price from "./Price";

const Pricing = () => {
  return (
    <div>
      <div className="pt-5">
        <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="block w-full font-bold leading-loose text-3xl sm:text-4xl">
              چه فقط شما باشید، چه کل تیمتان - ما شما را تحت پوشش قرار داده ایم.
            </p>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {StaticData.pricing.map((item , index) => (
                <Price data={item} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
