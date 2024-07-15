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

export default function HowItWorks() {
  return (
    <main className="mt-[150px] mx-[50px]">
      <BaseFramerAnimation>
        <Hero2
          heading="Welcome to Veridaq.com, your go-to platform for revolutionizing the reference check 
                process through seamless and secure verifiable claims. Discover the simplicity and efficiency 
                of our platform with a step-by-step guide on how Veridaq.com works:"
        />

        <img
          src="/assets/icons/blur.png"
          alt="Blob"
          className="blob-bottom-right"
        />
      </BaseFramerAnimation>

      <section className="">
        <ScrollTriggeredAnimation>
          <NumberIcon imgSrc="/assets/icons/icon-number-01.png" imgAlt="1" />
          <SectionImageRight2
            heading=""
            paragraphs={
              <div className="">
                <p className="text-[20px] font-bold">
                  Sign Up and Profile Creation{" "}
                </p>
                <p className="text-[20px]">
                  Begin your journey with Veridaq.com by creating your account.
                  Provide essential details and complete your profile to ensure
                  a personalized and secure experience.
                </p>
              </div>
            }
            imgSrc="/assets/images/sign-up.png"
            imgAlt="user"
            imgWidth={300}
            imgHeight={300}
          />
        </ScrollTriggeredAnimation>

        <ScrollTriggeredAnimation>
          <NumberIcon imgSrc="/assets/icons/icon-number-02.png" imgAlt="2" />
          <SectionImageLeft2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold">
                  Create Verifiable References
                </p>
                <ul className="text-[20px] list-disc">
                  <li>Work Reference </li>
                  <li>Hands-on Experience Reference </li>
                  <li>Individual Reference/Recommendation</li>
                </ul>
              </div>
            }
            imgSrc="/assets/images/verify-claims.png"
            imgAlt="user"
            imgWidth={400}
            imgHeight={400}
          />
        </ScrollTriggeredAnimation>

        <ScrollTriggeredAnimation>
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
                <p className="text-[20px] font-bold">Verification Loop</p>
                <p className="text-[20px]">
                  Our platform employs an automated verification loop that
                  allows for new information update. The verification loop is
                  designed to provide a reliable and tamper-proof system for the
                  exchange of verifiable references between entities.
                </p>
              </div>
            }
            imgSrc="/assets/images/loop.png"
            imgAlt="user"
            imgWidth={400}
            imgHeight={400}
          />
        </ScrollTriggeredAnimation>

        <ScrollTriggeredAnimation>
          <NumberIcon imgSrc="/assets/icons/icon-number-04.png" imgAlt="4" />
          <SectionImageLeft2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold">
                  Access Your Veridaq Store
                </p>
                <p className="text-[20px]">
                  Access to Veridaq Store is the hub for managing all your
                  issued and received verifiable references. Through the repo,
                  user can
                </p>
                <p className="text-[20px]">
                  {" "}
                  <span className="font-bold"> Store: </span> Safely store your
                  verifiable references for easy access.
                </p>
                <p className="text-[20px]">
                  {" "}
                  <span className="font-bold"> Share: </span> Share verifiable
                  references with relevant parties.
                </p>
                <p className="text-[20px]">
                  {" "}
                  <span className="font-bold"> Manage: </span> Update, download,
                  and control access to your verifiable references.
                </p>
              </div>
            }
            imgSrc="/assets/images/box.png"
            imgAlt="user"
            imgWidth={400}
            imgHeight={400}
          />
        </ScrollTriggeredAnimation>

        <ScrollTriggeredAnimation>
          <NumberIcon imgSrc="/assets/icons/icon-number-05.png" imgAlt="5" />
          <SectionImageRight2
            heading=""
            paragraphs={
              <div>
                <p className="text-[20px] font-bold">
                  Experience a Smarter, Faster, and More Secure HR Information
                  Check
                </p>
                <p className="text-[20px]">
                  Veridaq.com transforms HR information checks into a
                  streamlined, efficient, and secure process. Say goodbye to the
                  hassles of traditional HR information check and embrace a
                  future where your professional and work connections are built
                  on automation, trust and transparency.
                </p>
              </div>
            }
            imgSrc="/assets/images/loop.png"
            imgAlt="user"
            imgWidth={400}
            imgHeight={400}
          />
        </ScrollTriggeredAnimation>
      </section>
      <ScrollTriggeredAnimation>
        <Cta
          paragraph={
            <p className="font-bold text-[28px] md:text-[32px] lg:text-[32px] xl:text-[32px]">
              Ready to experience the Veridaq.com difference? Sign Up Now and
              start enjoying a smarter, faster, and more secure reference check
              experience!{" "}
            </p>
          }
        />
      </ScrollTriggeredAnimation>
    </main>
  );
}
