"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { OutlineButton, NoOutlineButton } from "./Button";

export default function Nav() {
  const pathname = usePathname();

  // Function to determine if a link should be active
  const isActiveLink = (href: string) => {
    return pathname === href ? "text-[#EA098D] font-bold" : "";
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-5 border-b border-gray-300 bg-gradient-to-b bg-transparent pb-1 pt-2 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-10 md:hidden lg:block xl:block">
            <Image
              src={"/assets/images/logo.png"}
              alt="veridaq_logo"
              width={100}
              height={100}
            />
          </div>

          <div className="mr-10 lg:hidden">
            <Image
              src={"/assets/images/logo.png"}
              alt="veridaq_logo"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="text-right flex items-center justify-center gap-5">
          <Link href={"/"}>
            <p className={`text-sm p-2 ${isActiveLink("/")}`}>Home</p>
          </Link>
          {/* Modified Solution nav link */}
          <div className="relative group">
            <p
              className={`text-sm p-2 cursor-pointer ${isActiveLink("/solution")}`}
            >
              Solution
            </p>
            <div className="absolute top-full text-left left-0 hidden bg-[#38313a] group-hover:block border border-gray-200 shadow-md py-2 rounded-md z-10">
              <Link href={"/for-organizations"}>
                <p
                  className={`text-sm px-4 py-2 ${isActiveLink("/for-organizations")}`}
                >
                  For Organization
                </p>
              </Link>
              <Link href={"/for-individuals"}>
                <p
                  className={`text-sm px-4 py-2 ${isActiveLink("/for-individuals")}`}
                >
                  For Individuals
                </p>
              </Link>
            </div>
          </div>
          <Link href={"/pricing"}>
            <p className={`text-sm p-2 ${isActiveLink("/pricing")}`}>Pricing</p>
          </Link>
          <Link href={"/how-it-works"}>
            <p className={`text-sm p-2 ${isActiveLink("/how-it-works")}`}>
              How it works
            </p>
          </Link>
          <Link href={"/about"}>
            <p className={`text-sm p-2 ${isActiveLink("/about")}`}>About</p>
          </Link>
          <Link href={"/login"}>
            <OutlineButton name="Log in" />
          </Link>
          <Link href={"/signup"}>
            <NoOutlineButton name="Sign Up" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
