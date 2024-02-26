import { Hero } from "@/components/shared/Reusables";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-[50px] mt-[150px] pt-[10]">
      <section>
        <Hero 
          heading="Welcome to Veridaq.com"
          subheading="Automate Your Reference Checks with Verifiable Claims."
          paragraphs="Unlock the power of seamless reference verification with Veridaq.com.
          Our platform revolutionizes the way organizations and individuals
          handle reference checks through secure and verifiable claims."
          imgSrc="/assets/images/Hero.png"
          imgWidth={1200}
          imgHeight={1200}
          imgAlt="hero"
        />
      </section>
      <section className="mt-[100px]">
        <p className="font-bold text-[36px] text-center pb-7">Why Veridaq.com?</p>
        <div className="flex justify-center pt-10 gap-10 space-x-10">
          <div className="mr-[50px]">
            <p className="text-[24px]">
              <span className="mt-10">
                <span className="font-bold">Efficiency: </span> Say goodbye to time-consuming reference checks.Veridaq.com streamlines the process, saving you valuable time.
              </span>
              <br /> <br />
              <span className="mt-10">
                <span className="font-bold">Reliability: </span>Trust in the authenticity of verifiable claims. Our platform ensures the integrity of the information exchanged between entities.
              </span>
              <br /> <br />
              <span className="mt-10">
                <span className="font-bold">Cost-Effective: </span>Cut down on costs associated with traditional reference checks. Veridaq.com offers a cost-effective solution for your verification needs.
              </span>
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/images/Veridaq_Check.png"}
              alt="hero"
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
