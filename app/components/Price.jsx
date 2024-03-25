import React from "react";
import Link from "next/link";

const Price = ({ data }) => {
  return (
    <>
      <div
        className={
          data.most_popular
            ? "bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10 shadow-2xl"
            : `ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 shadow-2xl`
        }
      >
        <div className="flex items-baseline justify-between gap-x-4">
          <h2
            className="text-lg font-semibold leading-8 "
          >
            {data.title}
          </h2>
          {data.most_popular ? (
            <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
              {data.most_popular}
            </p>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-6 text-base-500">
          {data.description}
        </p>
        <p className="mt-6 flex items-baseline gap-x-1">
          {data.off ? (
            <div className="flex gap-2 justify-center">
              <span className="text-2xl font-bold tracking-tight line-through">
                {data.off}
              </span>
              <span className="text-2xl font-bold tracking-tight ">
                {data.price}
              </span>
            </div>
          ) : (
            <span className="text-3xl font-bold tracking-tight ">
              {data.price}
            </span>
          )}
          <span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <a
          href="/contacts"
          className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 "
        >
          اطلاعات بیشتر یا سفارش
        </a>
      </div>
    </>
  );
};

export default Price;
