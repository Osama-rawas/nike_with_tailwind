import PopularProductsCard from "../components/PopularProductsCard";
import { products } from "../constants";

export default function PopularProduct() {
  return (
    <section id="products" className="max-container max-sm:mt-10">
      <div className="flex flex-col gap-6 justify-start">
        <h2 className="text-4xl font-palanquin font-bold">
          {" "}
          Our <span className="text-coral-red">popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray mt-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:gird-col-2 grid-cols-1 sm:gap-4 ">
          {products.map((product) => (
            <PopularProductsCard key={product} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
