import React from "react";
import CatalogueCard from "../components/CatalogueCard";
import TitleContent from "../components/TitleContent";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <div className="bg-[#b1cafd80]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="container m-auto pt-10 sm:px-2 xs:px-2"
      >
        <div className="flex justify-between flex-wrap ">
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full">
            <p className="text-[#0584BB] font-[500] text-xl">
              ABOUT FARMFRESH YOGURT
            </p>
            <p className="text-[#3C7B88] font-[700] text-2xl my-5">
              WE PRODUCE THE BEST YOGURT
            </p>
            <p className="text-[#1b1c1e80]">
              Farmfresh yoghurt is Nigeria's most loved yoghurt drink. It is
              made from partly skimmed fresh cow milk and contains live and
              active culture. This delicious yoghurt drink is rich in protein,
              carbohydrates, vitamins, essential minerals and contains no
              preservatives.
            </p>
          </div>
          <div className=" flex xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10 xs:mt-10 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-3  xs:gap-3 items-center  xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full">
            <CatalogueCard label="Years of experience" count="20" />
            <CatalogueCard label="Diary Product" count="50" />
          </div>
        </div>
        {/* <div className="mt-20"></div> */}
        <TitleContent
          title="NEWS"
          content="Stay informed with all the latest in our delicious line"
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
