import {
  BaseFramerAnimation,
  ScrollTriggeredAnimation,
} from "@/components/shared/Animations"
import {
  Cta,
  Hero2,
  SectionImageLeft2,
  SectionImageRight2,
  NumberIcon,
} from "@/components/shared/Reusables"

export default function ForIndividual() {
  return (
    <main className="mt-[150px] mx-[50px]">
      <BaseFramerAnimation>
        <Hero2
          heading="Welcome to Veridaq, your trusted partner for seamless background 
                information verification. Our platform is designed to empower individuals 
                like you with secure and verifiable reference, making the information 
                check process effortless and reliable while you own and manage access 
                to your verifiable references. With Veridaq you get to:"
        />

        <img
          src="/assets/icons/blur.png"
          alt="Blob"
          className="blob-bottom-right"
        />
      </BaseFramerAnimation>

      <section className="">
        <ScrollTriggeredAnimation initialY={500} duration={1.5} delay={1}>
          <NumberIcon imgSrc="/assets/icons/icon-number-01.png" imgAlt="1" />
          <SectionImageRight2
            heading=""
            paragraphs={
              <div className="">
                <p className="text-[20px] font-bold pb-5">
                  Individual User Sign-up/in
                </p>
              </div>
            }
            imgSrc="/assets/images/sign-up.png"
            imgAlt="user"
            imgWidth={100}
            imgHeight={100}
          />
        </ScrollTriggeredAnimation>
        <ScrollTriggeredAnimation initialY={500} duration={1.5}>
          <NumberIcon imgSrc="/assets/icons/icon-number-02.png" imgAlt="2" />
          <SectionImageLeft2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold pb-5">
                  Make request and receive Verifiable References (at No Cost) on
                  Hands-on/Work Experiences, Accomplishments and Recommendations
                  from the corresponding entity's ( eg. Workplaces, Institution,
                  Employer, Trainer, Mentor, Boss etc).
                </p>
              </div>
            }
            imgSrc="/assets/images/Veridaq_Check.png"
            imgAlt="user"
            imgWidth={100}
            imgHeight={100}
          />
        </ScrollTriggeredAnimation>

        <ScrollTriggeredAnimation initialY={500} duration={1.5}>
          <NumberIcon imgSrc="/assets/icons/icon-number-03.png" imgAlt="3" />
          <div className="flex items-center justify-center">
            <img
              src="/assets/icons/blob.png"
              alt="Blob"
              className="blob-center"
            />
          </div>
          <SectionImageRight2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold pb-5">
                  Can make Issuance of verifiable Individual References or
                  Recommendations to another Individual at no cost.
                </p>
              </div>
            }
            imgSrc="/assets/images/box.png"
            imgAlt="user"
            imgWidth={100}
            imgHeight={100}
          />
        </ScrollTriggeredAnimation>
        <ScrollTriggeredAnimation initialY={500} duration={1.5}>
          <NumberIcon imgSrc="/assets/icons/icon-number-04.png" imgAlt="4" />
          <SectionImageLeft2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold pb-5">
                  It is FREE to request and receive Work Reference, Hands-on
                  Experience Reference and Individual Reference/Recommendation
                  on the platform.
                </p>
              </div>
            }
            imgSrc="/assets/images/verify-claims.png"
            imgAlt="user"
            imgWidth={100}
            imgHeight={100}
          />
        </ScrollTriggeredAnimation>
        <ScrollTriggeredAnimation initialY={500} duration={1.5}>
          <NumberIcon imgSrc="/assets/icons/icon-number-05.png" imgAlt="5" />
          <SectionImageRight2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold pb-1">
                  Access and manage (download, share and request update) all
                  received Verifiable References from the Veridaq Store.
                </p>
                <p className="text-[20px] font-bold pb-5">
                  Veridaq Store Access Fee = $12
                </p>
              </div>
            }
            imgSrc="/assets/images/Values.png"
            imgAlt="user"
            imgWidth={100}
            imgHeight={100}
          />
        </ScrollTriggeredAnimation>
        <ScrollTriggeredAnimation initialY={500} duration={1.5}>
          <NumberIcon imgSrc="/assets/icons/icon-number-06.png" imgAlt="6" />
          <SectionImageLeft2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold pb-5">
                  Access the Talent/Job Placement portal
                </p>
              </div>
            }
            imgSrc="/assets/images/Settings.png"
            imgAlt="user"
            imgWidth={100}
            imgHeight={100}
          />
        </ScrollTriggeredAnimation>
      </section>
      <ScrollTriggeredAnimation initialY={500} duration={1.5}>
        <Cta
          paragraph={
            <p className="font-bold text-[28px] md:text-[32px] lg:text-[32px] xl:text-[32px]">
              Ready to take control of your reference verification process?
              <br /> Sign up for Veridaq today and experience the future of
              reference checks. Join thousands of individuals who trust Veridaq
              for their verification needs.{" "}
            </p>
          }
        />
      </ScrollTriggeredAnimation>
    </main>
  )
}
