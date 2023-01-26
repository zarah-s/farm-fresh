import React from "react";
import TitleContent from "./components/TitleContent";
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
