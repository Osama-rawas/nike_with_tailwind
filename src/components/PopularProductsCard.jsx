import React from "react";
import { star } from "../Assets/icons";

export default function PopularProductsCard({ imgURL, name, price }) {
  console.log(name);
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="shoe" className="w-[280px] h-[280px] " />
      <div className="mt-6 flex justify-start items-center gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray leading-normal ">
          4.7
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold font-palanquin leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red leading-normal text-2xl">
        {price}
      </p>
    </div>
  );
}
