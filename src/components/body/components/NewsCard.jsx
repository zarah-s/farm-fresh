import React from "react";

const NewsCard = () => {
  return (
    <div class="inline-block px-3">
      <div class="w-80  max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img class="rounded-t-lg" src="/item.png" alt="" />
        <div class="p-5 flex flex-col">
          <h5 class="mb-2 text-2xl font-[500] tracking-tight text-[#3C7B88]">
            Farmfresh vanilla flavour
          </h5>
          <small class="mb-3 font-normal text-[#1B1C1E] dark:text-gray-400">
            I absolutely love the Farmfresh vanilla flavour, would come back for
            more.....
          </small>
          <div className="flex flex-col items-end">
            <small className="text-[#3C7B88]">FarmFresh</small>
            <small className="text-sm text-[#1B1C1E]">20 Jan, 2022</small>
          </div>
          <div className="flex justify-end mt-3">
            <button className="bg-[#3C7B88] rounded-full text-white py-1 px-8">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
