import React from "react";

export default function ShoeCard({
  urlImage,
  changeBigShoeImage,
  bigShoeImage,
}) {
  const handleChenge = () => {
    if (bigShoeImage !== urlImage.bigShoe) {
      changeBigShoeImage(urlImage.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === urlImage.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleChenge}
    >
      <div className="flex justify-center items-center  bg-card bg-center bg-cover sm:w-32 sm:h-32 rounded-xl max-sm:p-4">
        <img
          src={urlImage.thumbnail}
          alt="shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
}
