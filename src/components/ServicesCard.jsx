import React from "react";

export default function ServicesCard({ imgURL, label, subtext }) {
  return (
    <div className=" flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16 shadow-3xl rounded-[20px]">
      <div className="w-11 h-11 rounded-full flex justify-center items-center bg-coral-red">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words leading-normal text-slate-gray font-montserrat  text-lg">
        {subtext}
      </p>
    </div>
  );
}
