import React from "react";
import Stars from "./Stars";

const TestimonialCard = () => {
  return (
    <div className="w-64 bg-white p-3 rounded-lg">
      <div className="mt-3"></div>
      <small className="text-[#1B1C1E] text-sm">
        I absolutely love the Farmfresh vanilla flavour, would come back for
        more!
      </small>
      <div className="flex flex-col items-end mt-3">
        <small className="text-[#3C7B88]">
          <small>Kristine</small>
        </small>
        <small>
          <small>10 Jan, 2003</small>
        </small>
        <div className="my-1"></div>
        <Stars />
      </div>
    </div>
  );
};

export default TestimonialCard;
