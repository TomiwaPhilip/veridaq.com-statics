import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  heading: string;
  subheading: string;
  cardElements: ReactNode;
}
export function Card({ heading, subheading, cardElements }: Props) {
  return (
    <div className="border border-[] rounded-lg px-3 w-[18rem] py-10">
      <p className="font-semibold text-[28px] text-center mb-5">{heading}</p>
      <p className="font-semibold text-[20px] text-center mb-5">{subheading}</p>
      <div className="mb-5">{cardElements}</div>
    </div>
  );
}

export function Checks({ paragraphs }: { paragraphs: string }) {
  return (
    <div className="flex items-center gap-3 my-5">
      <Image
        src={"assets/icons/new_releases.svg"}
        alt="check"
        width={30}
        height={30}
      />
      <div className="text-sm">{paragraphs}</div>
    </div>
  );
}
