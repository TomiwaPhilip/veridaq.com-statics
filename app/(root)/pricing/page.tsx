import { Card, Checks } from "@/components/shared/Cards";
import { NoOutlineButtonBig } from "@/components/shared/Button";
import { Cta, Hero2 } from "@/components/shared/Reusables";
import {
  BaseFramerAnimation,
  ScrollTriggeredAnimation,
} from "@/components/shared/Animations";

export default function Pricing() {
  return (
    <main className="mt-[150px] mx-[50px]">
      <BaseFramerAnimation>
        <Hero2
          heading="Welcome to Veridaq.com, your trusted platform for HR information reference 
                and background check. We offer flexible pricing options to meet the needs of both 
                individuals and organizations. Take a look at our pricing plans below:"
        />

        <img
          src="/assets/icons/blur.png"
          alt="Blob"
          className="blob-bottom-right"
        />
      </BaseFramerAnimation>

      <section className="mt-[100px]">
        <p className="font-bold text-[28px] md:text-[36px] lg:text-[36px] xl:text-[36px] mb-10">
          For Individuals
        </p>
        <ScrollTriggeredAnimation>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <Card
              heading="Freemium Plan"
              subheading="Free Request and Issuance"
              cardElements={
                <div>
                  <Checks paragraphs="Work Reference" />
                  <Checks paragraphs="Hands-on Experience Reference" />
                  <Checks paragraphs="Individual Reference/Recommendation" />
                </div>
              }
            />
            <Card
              heading="Veridaq Store Access Fee"
              subheading="$12 (or local currency equivalent)"
              cardElements={
                <div>
                  <Checks
                    paragraphs="
                    Veridaq Store is a Veridaq repo to access and manage the received verifiable references/recommendations from Organisations and Individual"
                  />
                </div>
              }
            />
            <Card
              heading="Verified Account"
              subheading="$5 (N5000)"
              cardElements={
                <div>
                  <Checks
                    paragraphs="
                    Verified Account grant user's a Veridaq Store Access Fee WAIVER
(Available for users in Nigeria only)
"
                  />
                </div>
              }
            />
            <Card
              heading="Pay-for-Issuance and Access Plan"
              subheading=""
              cardElements={
                <div>
                  <Checks paragraphs="Enterprise's product access comes at the organisation's preferred pricing." />
                </div>
              }
            />
          </div>
        </ScrollTriggeredAnimation>
        <div className="mt-10 text-center">
          <NoOutlineButtonBig name="Sign Up Now" />
        </div>
      </section>
      <section className="mt-[100px]">
        <ScrollTriggeredAnimation>
          <p className="font-bold text-[28px] md:text-[36px] lg:text-[36px] xl:text-[36px] mb-10">
            For Organizations
          </p>
          <div className="flex items-center justify-center">
            <img
              src="/assets/icons/blob.png"
              alt="Blob"
              className="blob-center"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <Card
              heading="Freemium Plan"
              subheading="Issuance with No Payment or Earning Plan"
              cardElements={
                <div>
                  <Checks paragraphs="Work Reference" />
                  <Checks paragraphs="Hands-on Experience Reference " />
                </div>
              }
            />
            <Card
              heading="Premium Veridaq Store Access Fee
              $24 (or local currency equivalent)
              "
              subheading="Verified Account and other store management perks in addition to freemium access to issuances record."
              cardElements={
                <div>
                  <Checks paragraphs="Work Reference" />
                  <Checks paragraphs="Hands-on Experience Reference " />
                </div>
              }
            />
            <Card
              heading="Enterprise Plan"
              subheading="Contact us for custom solutions and pricing tailored to your organisation's specific needs or offering."
              cardElements={null}
            />
          </div>
        </ScrollTriggeredAnimation>
        <div className="mt-10 text-center">
          <NoOutlineButtonBig name="Sign Up Now" />
        </div>
      </section>
      <ScrollTriggeredAnimation>
        <section className="mt-[100px]">
          <p className="font-bold text-[36px] mb-10">Additional Information</p>
          <ul className="text-[24px] list-disc pl-4 ml-8">
            <li className="mb-2">
              Custom billing options available for Enterprise Plan.
            </li>
            <li className="mb-2">
              <span className="font-bold"> Payment Methods: </span> We accept
              major credit cards and electronic transfers.
            </li>
            <li className="mb-2">
              <span className="font-bold"> Customer Support: </span>Our
              dedicated support team is available to assist you with any
              questions or concerns.
            </li>
          </ul>
        </section>
      </ScrollTriggeredAnimation>

      <ScrollTriggeredAnimation>
        <Cta
          paragraph={
            <p className="text-[28px] md:text-[32px] lg:text-[32px] xl:text-[32px]">
              Start streamlining your reference verification process with
              Veridaq.com today. Sign Up Now to get started!
            </p>
          }
        />
      </ScrollTriggeredAnimation>
    </main>
  );
}
