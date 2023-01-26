import Image from "next/image";
import React from "react";
import NavItems from "./components/NavItems";
import OutlinedBtn from "./components/OutlinedBtn";
import { motion } from "framer-motion";
const HeadComponent = () => {
  return (
    <div className="bg-[#3C7B88] overflow-hidden">
      <div className="container m-auto py-10 xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2">
        <NavItems />

        <div className="flex items-end xl:mt-32 lg:mt-32 md:mt-32 sm:mt-5 xs:mt-5">
          <motion.div
            initial={{ opacity: 0 }}
            //   animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full"
          >
            <h3 className="text-white text-4xl font-bold">
              Farmfresh Yogurt For Your Pleasure.
            </h3>
            <p className="text-[#ffffff80] my-7">
              Farmfresh yoghurt is Nigeria's most loved yoghurt drink made from
              partly skimmed fresh cow milk and contains live and active
              culture.
            </p>
            <OutlinedBtn text="Shop Now" />
          </motion.div>
          <div className="flex-grow xl:block lg:block md:block sm:hidden xs:hidden">
            <motion.img
              transition={{ duration: 1 }}
              animate={{ x: "0", animationDuration: "2s" }}
              initial={{ x: "calc(100vw - 50%)" }}
              src="/car.png"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadComponent;
