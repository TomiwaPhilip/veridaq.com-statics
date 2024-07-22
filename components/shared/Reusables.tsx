"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

import {
  OutlineButtonBig,
  NoOutlineButtonBig,
  OutlineButtonBig2,
} from "./Button";
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
    <div className="flex flex-col md:flex-row justify-center gap-10 space-x-10 items-center">
      <div className="md:order-1">
        <p className="font-bold text-2xl text-center md:text-left lg:text-left xl:text-left md:text-3xl lg:text-4xl pb-3">
          {heading}
        </p>
        <p className="font-bold text-center md:text-left lg:text-left xl:text-left text-xl md:text-2xl lg:text-3xl pb-3">
          {subheading}
        </p>
        <p className="font-semibold text-center md:text-left lg:text-left xl:text-left text-lg md:text-xl lg:text-2xl pb-3">
          {paragraphs}
        </p>
        <div className="flex gap-5 pt-5">
          <NoOutlineButtonBig name="Sign up Now" />
          <Link href={"/how-it-works"}>
            <OutlineButtonBig2 name="How it Works" />
          </Link>
        </div>
      </div>
      <div className="md:order-2">
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
      <p className="font-bold text-center text-2xl md:text-3xl lg:text-4xl pb-7">
        {heading}
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 space-x-10 items-center">
        <div className="md:order-1 md:mr-10 md:mb-0 mb-5">
          <div className="text-base text-left md:text-lg lg:text-xl">
            {paragraphs}
          </div>
          <div className="mt-10 text-center md:text-left lg:text-left xl:text-left">
            <NoOutlineButtonBig name="Sign Up Now" />
          </div>
        </div>
        <div className="md:order-2">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
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
      <p className="font-bold text-center text-2xl md:text-3xl lg:text-4xl pb-7">
        {heading}
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 space-x-10 items-center">
        <div className="md:order-1 mb-5">
          <div className="text-base md:text-lg lg:text-xl">{paragraphs}</div>
          <div className="mt-10 text-center md:text-left lg:text-left xl:text-left">
            <NoOutlineButtonBig name="Sign Up Now" />
          </div>
        </div>
        <div className="md:order-2">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
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
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="p-5 w-full">
          <img src={imgSrc} alt={imgAlt} className="w-full h-auto" />
        </div>
        <div className="p-5 text-center sm:text-left w-full">
          <p className="text-lg md:text-xl lg:text-2xl">{heading}</p>
          <div className="text-sm md:text-base lg:text-lg">{paragraphs}</div>
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
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="p-5 w-full">
          <div className="text-center sm:text-left">
            <p className="text-lg md:text-xl lg:text-2xl">{heading}</p>
            <div className="text-sm md:text-base lg:text-lg">{paragraphs}</div>
          </div>
        </div>
        <div className="p-5 w-full">
          <img src={imgSrc} alt={imgAlt} className="w-full h-auto" />
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
      <p className="font-bold text-[28px] md:text-4xl lg:text-4xl xl:text-4xl pb-10">
        {heading}
      </p>
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
    <section className="text-center mb-8 md:mb-20 lg:mb-20 xl:mb-20 mt-[12rem]">
      <img src="/assets/icons/blob.png" alt="Blob" className="blob-center2" />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg border-[#FFFFFF] border-4 bg-[#554957]">
          <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-normal mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            {paragraph}
          </div>
          <div className="">
            <NoOutlineButtonBig name="Sign Up Now" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src="/assets/icons/blob.png" alt="Blob" className="blob-center" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-5 bg-[#38313A]">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-around md:items-start space-y-8 md:space-y-0 md:space-x-8 p-10">
        {/* Menu section */}
        <div className="flex flex-col w-full md:w-auto items-center md:items-start">
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
        <div className="flex flex-col w-full md:w-auto items-center md:items-start">
          <p className="text-[#EA098D] font-bold text-2xl mb-4">Solution</p>
          <Link href={"/for-organizations"} passHref>
            <p className="font-medium text-lg">For Organizations</p>
          </Link>
          <Link href={"/for-individuals"} passHref>
            <p className="font-medium text-lg">For Individuals</p>
          </Link>
          {/* <Link href={"/for-individuals"} passHref> */}
          <p className="font-medium text-lg">Veridaq AI Tools</p>
          {/* </Link> */}
        </div>

        {/* Legal section */}
        <div className="flex flex-col w-full md:w-auto items-center md:items-start">
          <p className="text-[#EA098D] font-bold text-2xl mb-4">Legal</p>
          <Link href={"/privacy-policy"} passHref>
            <p className="font-medium text-lg">Privacy Policy</p>
          </Link>
          <Link href={"/terms-condition"} passHref>
            <p className="font-medium text-lg">Terms & Condition</p>
          </Link>
          <Link href={"/data-protection"} passHref>
            <p className="font-medium text-lg">Data Protection</p>
          </Link>
          <Link href={"/refund-policy"} passHref>
            <p className="font-medium text-lg">Refund Policy</p>
          </Link>
        </div>

        {/* Contact section */}
        <div className="flex flex-col w-full text-center md:w-auto items-center md:items-start text-left">
          <p className="text-[#EA098D] font-bold text-2xl mb-4">Contact</p>
          <Link href="/contact">
            <p className="font-medium text-lg">Contact</p>
          </Link>
          <p className="font-medium text-lg">Adsoft Online Limited</p>
          <p className="font-medium text-lg">
            7A Milverton Road, Ikoyi, Lagos State, Nigeria
          </p>
          <p className="font-medium text-lg">admin@veridaq.com</p>
          <div className="flex gap-3">
            <a
              href={"https://www.linkedin.com/company/veridaq/"}
              target="_blank"
            >
              <img src="/assets/icons/linkedin.png" alt="linkedin" />
            </a>
            <a href={"https://twitter.com/veridaq"} target="_blank">
              <img src="/assets/icons/twitter.png" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center">All rights reserved by Veridaq. © 2024</p>
    </footer>
  );
}
