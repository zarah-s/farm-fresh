import React from "react";
import Stars from "./Stars";

const ProductCard = () => {
  return (
    <div class="inline-block px-3">
      <div class="w-80  max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex justify-center">
          <img class="rounded-t-lg h-44" src="/product.png" alt="" />
        </div>
        <div class="p-5 flex flex-col">
          <h5 class="mb-2 text-lg font-[500] tracking-tight text-[#000000]">
            Farmfresh vanilla flavour
          </h5>
          <small class="mb-3 font-normal text-[#3C7B88] dark:text-gray-400">
            NGN 300.00
          </small>
          <Stars />
          <div className="flex flex-col items-end">
            <small className="text-[#3C7B88]">FarmFresh</small>
            <small className="text-sm text-[#1B1C1E]">20 Jan, 2022</small>
          </div>
          <div className="flex justify-end mt-3">
            <button className="bg-[#3C7B88] rounded-full text-white py-1 px-8">
              Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
