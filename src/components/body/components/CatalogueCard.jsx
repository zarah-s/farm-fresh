import React from "react";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import styles from "../../../styles/Home.module.css";

const CatalogueCard = ({ count, label }) => {
  return (
    <div className="bg-[#ffffff80] xl:w-[calc(40%)] w-1/2  p-3 xl:py-7 lg:py-7 md:py-7 sm:py-3 xs:py-3 rounded-lg ">
      <div className={`${styles.inn} p-2 flex justify-center`}>
        <HiOutlineClipboardCheck />
      </div>
      <div className="flex items-center gap-1 justify-center xl:my-5 lg:my-5 md:my-5 sm:my-5 sx:my-5 ">
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-lg text-[#3C7B88]">+</span>
      </div>
      <div className="flex justify-center">
        <small className="text-gray-500 ">{label}</small>
      </div>
    </div>
  );
};

export default CatalogueCard;
