import React from "react";
import InputField from "../components/InputField";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const FeedbackSection = () => {
  return (
    <div className="my-5 flex flex-col items-center ">
      <InputField IconName={FaUserAlt} placeholder="Name" />
      <InputField IconName={BsFillTelephoneFill} placeholder="Phone Nuber" />
      <InputField IconName={MdEmail} placeholder="Email Address" />
      <textarea
        placeholder="Message ..."
        name=""
        id=""
        rows="3"
        className="resize-none my-3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full xs:w-full rounded-md bg-[#ffffff4d] border p-3 border-[#1b1c1e1a]"
      ></textarea>
      <button className="bg-[#3C7B88] my-3 text-white font-[500] xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full xs:w-full rounded-md p-3">
        Send Feedback
      </button>
    </div>
  );
};

export default FeedbackSection;
