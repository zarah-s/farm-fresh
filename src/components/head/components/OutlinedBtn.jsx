import React from "react";

const OutlinedBtn = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="text-white border border-white py-2 px-6 rounded-full text-sm"
    >
      {text}
    </button>
  );
};

export default OutlinedBtn;
