import React from "react";

const InputField = ({ IconName, placeholder, onChange }) => {
  return (
    <div className="flex my-2 border p-2.5 border-[#1b1c1e1a] items-center gap-3 bg-[#ffffff4d] xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full xs:w-full rounded-md">
      <IconName className="text-[#1b1c1e80]" />
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="outline-none placeholder:text-[#1b1c1e80] text-sm border-none bg-transparent"
      />
    </div>
  );
};

export default InputField;
