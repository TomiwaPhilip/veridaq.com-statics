import Image from "next/image";

import { OutlineButton, NoOutlineButton } from "./Button";

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
        <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHieght} />
      </div>
    </div>
  );
}
