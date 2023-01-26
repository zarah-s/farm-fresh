import React from "react";

const TitleContent = ({ title, content }) => {
  return (
    <div className="flex items-center flex-col mt-10">
      <p className="text-[#0584BB] text-2xl font-bold">{title}</p>
      <p className="text-[#1b1c1e80]">{content}</p>
    </div>
  );
};

export default TitleContent;
