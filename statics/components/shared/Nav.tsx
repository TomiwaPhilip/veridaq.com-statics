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
          <div className="mr-10">
            <Image
              src={"/assets/images/logo.png"}
              alt="veridaq_logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="text-right flex items-center justify-center gap-5">
          <Link href={"/"}>
            <p className={`text-sm p-2 ${isActiveLink("/")}`}>Home</p>
          </Link>
          <Link href={"/solution"}>
            <p className={`text-sm p-2 ${isActiveLink("/solution")}`}>
              Solution
            </p>
          </Link>
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
