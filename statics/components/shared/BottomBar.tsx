"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full px-5 py-3 sm:hidden border-t border-gray-300 bg-gradient-to-t bg-transparent pt-1 pb-2 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        {/* Icon Links */}
        <div className="text-center flex items-center justify-between w-full">
          <Link href={"/"} passHref>
            <img
              src={"/assets/icons/Home.png"}
              alt="Home"
              className={`w-8 h-8 cursor-pointer ${
                pathname === "/" ? "border-2 border-[#EA098D] rounded-md" : ""
              }`}
              onClick={closeDropdown}
            />
          </Link>
          <div className="relative group">
            <img
              src={"/assets/icons/Solution.png"}
              alt="Solution"
              className={`w-8 h-8 cursor-pointer ${
                pathname.startsWith("/solution")
                  ? "border-2 border-[#EA098D] rounded-md"
                  : ""
              }`}
              onClick={handleDropdownToggle} // Toggle dropdown on click
            />
            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[#38313a] border border-[#EA098D] shadow-md py-2 rounded-md z-10">
                <Link href={"/for-organizations"} onClick={closeDropdown}>
                  <p
                    className={`text-sm px-4 py-2 ${
                      pathname === "/for-organizations"
                        ? "text-[#EA098D]"
                        : "text-white"
                    }`}
                  >
                    For Organization
                  </p>
                </Link>
                <Link href={"/for-individuals"} onClick={closeDropdown}>
                  <p
                    className={`text-sm px-4 py-2 ${
                      pathname === "/for-individuals"
                        ? "text-[#EA098D]"
                        : "text-white"
                    }`}
                  >
                    For Individuals
                  </p>
                </Link>
              </div>
            )}
          </div>
          <Link href={"/pricing"} passHref>
            <img
              src={"/assets/icons/Pricing.png"}
              alt="Pricing"
              className={`w-8 h-8 cursor-pointer ${
                pathname === "/pricing"
                  ? "border-2 border-[#EA098D] rounded-md"
                  : ""
              }`}
              onClick={closeDropdown}
            />
          </Link>
          <Link href={"/how-it-works"} passHref>
            <img
              src={"/assets/icons/How-it-works.png"}
              alt="How it works"
              className={`w-8 h-8 cursor-pointer ${
                pathname === "/how-it-works"
                  ? "border-2 border-[#EA098D] rounded-md"
                  : ""
              }`}
              onClick={closeDropdown}
            />
          </Link>
          <Link href={"/about"} passHref>
            <img
              src={"/assets/icons/About.png"}
              alt="About"
              className={`w-8 h-8 cursor-pointer ${
                pathname === "/about"
                  ? "border-2 border-[#EA098D] rounded-md"
                  : ""
              }`}
              onClick={closeDropdown}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
