import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import TitleContent from "../components/TitleContent";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <div>
      <div className="sm:px-2 xs:px-2">
        <TitleContent
          title="CUSTOMER FEEDBACK"
          content="What are the recent reviews from our customers?"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap gap-7 my-10 justify-center"
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
