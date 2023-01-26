import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import NewsCard from "./components/NewsCard";
import ProductCard from "./components/ProductCard";
import Stars from "./components/Stars";
import TestimonialCard from "./components/TestimonialCard";
import TitleContent from "./components/TitleContent";

import InputField from "./components/InputField";
import CatalogueCard from "./components/CatalogueCard";
import AboutSection from "./sections/AboutSection";
import NewsSection from "./sections/NewsSection";
import ProductsSection from "./sections/ProductsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FeedbackSection from "./sections/FeedbackSection";
const BodyComponent = () => {
  return (
    <div>
      <AboutSection />
      <NewsSection />

      <div className="bg-[#b1cafd80]">
        <div className="py-1">
          <ProductsSection />
          <div>
            <TestimonialsSection />

            <div className="sm:px-2 xs:px-2">
              <TitleContent
                title="CONTACT"
                content="Reach out to our customer service representatives and also leave a review."
              />
              <FeedbackSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
