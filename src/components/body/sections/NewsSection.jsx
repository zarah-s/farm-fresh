import React from "react";
import NewsCard from "../components/NewsCard";
import { motion } from "framer-motion";

const NewsSection = () => {
  return (
    <div className="bg-blue-300">
      <div className="py-10">
        {/* <!-- component --> */}
        <div class="flex flex-col">
          <div class="flex overflow-x-scroll  hide-scroll-bar">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              class="flex flex-nowrap  "
            >
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
