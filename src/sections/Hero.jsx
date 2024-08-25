import { useState } from "react";
import { arrowRight } from "../Assets/icons";
import { bigShoe1 } from "../Assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
export default function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen justify-center  gap-10 max-container  "
    >
      <div className="relative flex justify-center items-start flex-col xl:w-2/5 w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
        </h1>
        <p className="font-montserrat font-lg leading-8 mt-6 mb-14 sm:max-w-sm text-slate-gray">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" icon={arrowRight} />
        <div className="flex justify-start items-start  flex-wrap w-full gap-16 mt-20">
          {statistics.map((state, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{state.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {state.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-lg:py-40 bg-primary bg-hero bg-center ">
        <img
          src={bigShoeImg}
          alt="shoes collection"
          className="object-contain relative z-10"
          width={610}
          height={500}
        />
        <div className="sm:gap-6 gap-4 flex absolute -bottom-[5%] max-sm:px-6 max-xl:-bottom-[42%] max-lg:-bottom-[5%]">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                urlImage={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
