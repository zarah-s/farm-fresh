import React from "react";
import ProductCard from "../components/ProductCard";
import TitleContent from "../components/TitleContent";
import { motion } from "framer-motion";

const ProductsSection = () => {
  return (
    <div>
      <div className="sm:px-2 xs:px-2">
        <TitleContent
          title="OUR PRODUCTS"
          content="We recommend our healthy, natural and nutritious yogurts."
        />
        {/* <!-- component --> */}
        <p className="text-[#0584BB] mt-6 px-3 font-bold">
          Recommended Products:
        </p>
      </div>
      <div class="flex flex-col mt-4">
        <div class="flex overflow-x-scroll  hide-scroll-bar">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            class="flex flex-nowrap  "
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </motion.div>
        </div>
      </div>

      <p className="text-[#0584BB] mt-6 px-3 font-bold">Suggested Products:</p>
      <div class="flex flex-col mt-4">
        <div class="flex overflow-x-scroll  hide-scroll-bar">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            class="flex flex-nowrap  "
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
