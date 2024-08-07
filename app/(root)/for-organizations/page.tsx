import {
  BaseFramerAnimation,
  ScrollTriggeredAnimation,
} from "@/components/shared/Animations";
import {
  Cta,
  Hero2,
  SectionImageLeft2,
  SectionImageRight2,
  NumberIcon,
} from "@/components/shared/Reusables";

export default function ForOrganization() {
  return (
    <main className="mt-[150px] mx-[50px]">
      <BaseFramerAnimation>
        <Hero2
          heading="Welcome to Veridaq, where we empower organizations with seamless 
                HR information verification solutions. Our platform is designed to 
                simplify the HR information check process, saving you time, effort, and resources. 
                With Veridaq your organization/association/company/institution get:"
        />

        <img
          src="/assets/icons/blur.png"
          alt="Blob"
          className="blob-bottom-right"
        />
      </BaseFramerAnimation>

      <section className="">
        <ScrollTriggeredAnimation initialY={500} duration={1.5}>
          <NumberIcon imgSrc="/assets/icons/icon-number-01.png" imgAlt="1" />
          <SectionImageRight2
            heading=""
            paragraphs={
              <div className="">
                <p className="text-[20px] font-bold pb-5">
                  Organisation User Sign-up/in
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
                  Make Issuance of Verifiable References (at No Cost) on
                  Hands-on/Work Experiences, Accomplishments and Recommendations
                  to corresponding individual (eg. Current or Ex Employee's,
                  Freelancer's, Project Team Member, Trainee's, Student's etc.).
                  This Issuance is either motivated by a Request or as a Direct
                  Issuance.
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
                  Access all Issuances record from the Veridaq Store.
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
          <NumberIcon imgSrc="/assets/icons/icon-number-04.png" imgAlt="4" />
          <SectionImageLeft2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold mb-1">
                  Activate premium store access for Verified Account and other
                  store management perks.
                </p>
                <p className="text-[20px] font-bold pb-5">
                  Premium Veridaq Store Access Fee = $24
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
          <NumberIcon imgSrc="/assets/icons/icon-number-05.png" imgAlt="5" />
          <SectionImageRight2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold pb-5">
                  Subscribe for an Enterprise Plan where the organisation can
                  create Verifiable Reference products and charge its users for
                  it. This will be in addition to the platform freemium model
                  for Work Reference and Hands-on Experience Reference
                  Issuances.
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
          <NumberIcon imgSrc="/assets/icons/icon-number-06.png" imgAlt="6" />
          <SectionImageLeft2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold pb-5">
                  Enterprise Access to the Talent SR (Sourcing and Rating)
                  portal.
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
              Ready to streamline your reference verification processes? Sign up
              for Veridaq today and experience the future of reference checks
              for organizations. Join the growing community of organizations who
              trust Veridaq for their verification needs.
            </p>
          }
        />
      </ScrollTriggeredAnimation>
    </main>
  );
}
