import Image from "next/image";
import { ReactNode } from "react";

import { OutlineButtonSmall, NoOutlineButtonSmall, OutlineButtonBig, NoOutlineButtonBig } from "./Button";
import Link from "next/link";

// This component is for the Hero section
export function Hero({
  heading,
  subheading,
  paragraphs,
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
}: {
  heading: string;
  subheading: string;
  paragraphs: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
}) {
  return (
    <div className="flex justify-center gap-10 space-x-10">
      <div className="mr-[70px]">
        <p className="font-bold text-[40px] pb-3">{heading}</p>
        <p className="font-bold text-[32px] pb-3">{subheading}</p>
        <p className="font-semibold text-[24px] pb-3">{paragraphs}</p>
        <div className="flex gap-3">
          <NoOutlineButton name="Sign up Now" />
          <OutlineButton name="How it Works" />
        </div>
      </div>
      <div className="">
        <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </div>
    </div>
  );
}

interface prop {
  heading: string;
  paragraphs: ReactNode;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
}
// This components is for sections with images on the right
export function SectionImageRight({
  heading,
  paragraphs,
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
}: prop) {
  return (
    <div className="">
      <p className="font-bold text-[36px] text-center pb-7">{heading}</p>
      <div className="flex justify-center pt-10 gap-10 space-x-10">
        <div className="mr-[50px]">
          <div className="text-[24px]">{paragraphs}</div>
        </div>
        <div className="">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
      </div>
      <div className="text-center mt-10 pt-5">
        <NoOutlineButton name="Sign Up Now" />
      </div>
    </div>
  );
}

export function SectionImageLeft({
  heading,
  paragraphs,
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
}: prop) {
  return (
    <div className="">
      <p className="font-bold text-[36px] text-center pb-7">{heading}</p>
      <div className="flex justify-center pt-10 gap-10 space-x-10">
        <div className="ml-[50px]">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
        <div className="ml-[100px]">
          <div className="text-[24px]">{paragraphs}</div>
        </div>
      </div>
      <div className="text-center mt-10 pt-5">
        <NoOutlineButton name="Sign Up Now" />
      </div>
    </div>
  );
}

// This components is for sections with images on the right
export function SectionImageRight2({
  heading,
  paragraphs,
  imgSrc,
  imgAlt,
}: prop) {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-10">
        <div className="w-[40%] p-5">
          <img src={imgSrc} alt={imgAlt} className="w-full h-full" />
        </div>
        <div className="w-[60%] p-5 text-justify">
          <div className="text-[24px]">{paragraphs}</div>
        </div>
      </div>
    </div>
  );
}

// This components is for sections with images on the left
export function SectionImageLeft2({
  heading,
  paragraphs,
  imgSrc,
  imgAlt,
}: prop) {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-10">
        <div className="w-[60%] p-5">
          <div className="text-[24px] text-justify">{paragraphs}</div>
        </div>
        <div className="w-[40%] p-5">
          <img src={imgSrc} alt={imgAlt} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export function NumberIcon({
  imgSrc,
  imgAlt,
}: {
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <div className="flex items-center justify-center pt-[4rem]">
      <img src={imgSrc} alt={imgAlt} className="w-[50px] h-[50px]" />
    </div>
  );
}

export function Hero2({ heading }: { heading: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="font-bold text-4xl pb-10">{heading}</p>
      <div className="w-1/2 mx-auto">
        <Image
          src={"/assets/images/Hero.png"}
          alt="hero"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

// This is the Call to Action component
export function Cta({ paragraph }: { paragraph: ReactNode }) {
  return (
    <section className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20 mt-[12rem]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg border border-[#694C9F] border-4">
          <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-normal mb-8 md:mb-10 lg:mb-12 xl:mb-16">{paragraph}</div>
          <div className="">
            <NoOutlineButton name="Sign Up Now" />
          </div>
        </div>
      </div>
    </section>
  );
}

// This function is for the footer
export function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8 p-10">
        {/* Menu section */}
        <div className="flex flex-col w-full md:w-auto md:items-start lg:items-start xl:items-start items-center">
          <p className="text-[#EA098D] font-bold text-2xl mb-4">Menu</p>
          <Link href={"/"} passHref>
            <p className="font-medium text-lg">Home</p>
          </Link>
          <Link href={"/about"} passHref>
            <p className="font-medium text-lg">About</p>
          </Link>
          <Link href={"/pricing"} passHref>
            <p className="font-medium text-lg">Pricing</p>
          </Link>
          <Link href={"/how-it-works"} passHref>
            <p className="font-medium text-lg">How it works</p>
          </Link>
        </div>
        
        {/* Solution section */}
        <div className="flex flex-col w-full md:w-auto md:items-start lg:items-start xl:items-start items-center">
          <p className="text-[#EA098D] font-bold text-2xl mb-4">Solution</p>
          <Link href={"/for-organization"} passHref>
            <p className="font-medium text-lg">For Organization</p>
          </Link>
          <Link href={"/for-solution"} passHref>
            <p className="font-medium text-lg">For Solution</p>
          </Link>
        </div>
        
        {/* Contact section */}
        <div className="flex flex-col w-full md:w-auto md:items-start lg:items-start xl:items-start items-center">
          <p className="text-[#EA098D] font-bold text-2xl mb-4">Contact</p>
          <Link href={"/contact"} passHref>
            <p className="font-medium text-lg">Contact Us</p>
          </Link>
          <Link href={"/support"} passHref>
            <p className="font-medium text-lg">Support</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
