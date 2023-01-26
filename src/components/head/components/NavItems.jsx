import Image from "next/image";
import React from "react";
import OutlinedBtn from "./OutlinedBtn";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const NavItems = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className="flex items-center justify-between">
      {/* <p className="text-[#F5F5F5] font-[400] text-2xl">FarmFresh</p> */}
      <Image width={200} height={200} src="/Farmfresh.png" alt="" />
      <ul className="flex gap-10 text-white xl:flex lg:flex md:flex sm:hidden xs:hidden">
        <li className="text-opacity-50 border-b-2 cursor-pointer">Home</li>
        <li className="text-opacity-50 cursor-pointer hover:border-b-2 transition-all duration-100">
          News
        </li>
        <li className="text-opacity-50 cursor-pointer hover:border-b-2 transition-all duration-100">
          Shop
        </li>
        <li className="text-opacity-50 cursor-pointer hover:border-b-2 transition-all duration-100">
          Contact
        </li>
      </ul>
      <div className="xs:hidden sm:hidden xl:block lg:block md:block">
        <OutlinedBtn text="Contact us" />
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="xs:block sm:block xl:hidden lg:hidden md:hidden"
      >
        <RxHamburgerMenu color="white" size={30} />
      </button>
      <aside
        id="default-sidebar"
        class={`fixed top-0 xl:hidden lg:hidden md:hidden ${
          isActive ? "sm:fixed xs:fixed " : "sm:hidden xs:hidden"
        } right-0 z-40 w-64 h-screen  `}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-end">
            <button onClick={() => setIsActive(false)}>
              <FaTimes />
            </button>
          </div>
          <ul className=" space-y-5 mt-10">
            <li className="p-2 rounded-lg bg-[#3c7b8833]">Home</li>
            <li className="p-2">News</li>
            <li className="p-2">Shop</li>
            <li className="p-2">Contact</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavItems;
