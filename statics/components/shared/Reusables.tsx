import Image from "next/image";
import { ReactNode } from "react";

import { OutlineButton, NoOutlineButton } from "./Button";
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

// This components is for sections with images on the right
export function SectionImageRight({
  heading,
  paragraphs,
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
}: {
  heading: string;
  paragraphs: ReactNode;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
}) {
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

// This component is for sections with images on the left
export function SectionImageLeft({
  heading,
  paragraphs,
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
}: {
  heading: string;
  paragraphs: ReactNode;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
}) {
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

// This is the Call to Action component
export function Cta({ paragraph }: { paragraph: ReactNode }) {
  return (
    <section className="px-[20rem] text-center mb-[50px] mt-[180px]">
      <div className="p-10 rounded-lg border border-[#694C9F] border-5px">
        <div className="text-[28px] font-semibold mb-10">{paragraph}</div>
        <div className="">
          <NoOutlineButton name="Sign Up Now" />
        </div>
      </div>
    </section>
  );
}

// This function is for the footer
export function Footer() {
  return (
    <div className="flex justify-center gap-10 bg-inherit w-full mx-inherit">
      <div className="items-left">
        <p className="text-[#EA098D] font-bold text-[36px] mb-10 mt-10">Menu</p>
        <p className="font-medium text-[20px]">
          <Link href={"/"}> Home</Link>
        </p>
        <p className="font-medium text-[20px]">
          <Link href={"/about"}> About</Link>
        </p>
        <p className="font-medium text-[20px]">
          <Link href={"/pricing"}> Pricing</Link>
        </p>
        <p className="font-medium text-[20px]">
          <Link href={"/how-it-works"}> How it works</Link>
        </p>
      </div>
      <div className="items-right">
        <p className="text-[#EA098D] font-bold text-[36px] mb-10">Solution</p>
        <p className="font-medium text-[20px]">
          <Link href={"/for-organization"}> For Organization </Link>
        </p>
        <p className="font-medium text-[20px]">
          <Link href={"/for-solution"}> For Solution </Link>
        </p>
      </div>
      <div className="">
        <p className="text-[#EA098D] font-bold text-[36px] mb-10">Contact</p>
        <p className="font-medium text-[20px]">
          <Link href={"/for-organization"}> For Organization </Link>
        </p>
        <p className="font-medium text-[20px]">
          <Link href={"/for-solution"}> For Solution </Link>
        </p>
      </div>
    </div>
  );
}
