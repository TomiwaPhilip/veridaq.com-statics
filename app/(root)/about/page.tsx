import { ScrollTriggeredAnimation } from "@/components/shared/Animations";
import {
  Cta,
  Hero,
  SectionImageLeft,
  SectionImageRight,
} from "@/components/shared/Reusables";

export default function Home() {
  return (
    <main className="mx-[50px] mt-[150px] pt-[10]">
      <ScrollTriggeredAnimation>
        <section>
          <Hero
            heading=""
            subheading="Our Mission: Empowering Connections, Ensuring Integrity and Exchanging Values with Verifiable References"
            paragraphs="Our mission is to empower individuals and organisations by providing a seamless, secure and efficient platform for verifiable references, thus, simplifying the process of talent development, engagement and assessment checks so as to ensure competence and foster trust in professional and work relationships."
            imgSrc="/assets/images/Mission.png"
            imgWidth={1200}
            imgHeight={1200}
            imgAlt="hero"
          />
          <img
            src="/assets/icons/blur.png"
            alt="Blob"
            className="blob-bottom-right"
          />
        </section>
      </ScrollTriggeredAnimation>
      <section className="mt-[100px]">
        <ScrollTriggeredAnimation>
          <SectionImageRight
            heading="Why Veridaq.com?"
            paragraphs={
              <p>
                <span className="mt-10">
                  <span className="font-bold">Efficient: </span> Say goodbye to
                  time-consuming HR Information checks.Veridaq.com streamlines
                  the process, saving you valuable time.
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Reliable: </span>Trust in the
                  authenticity of verifiable references. Our platform ensures
                  the integrity of the information exchanged between entities.
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Cost-Effective: </span>
                  Take away the risk of not verifying either due to expense or
                  negligence with Veridaq. False claims, information
                  misrepresentation and forgery do come with huge social and
                  economic costs.
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Easy and Secured Access: </span>
                  Veridaq.com breaks down barriers to background information
                  access within a secured framework.
                </span>
              </p>
            }
            imgSrc="/assets/images/Veridaq_Check.png"
            imgWidth={1200}
            imgHeight={1200}
            imgAlt="Veridaq_Check"
          />
        </ScrollTriggeredAnimation>
      </section>
      <section className="mt-[100px]">
        <ScrollTriggeredAnimation>
          <div className="flex items-center justify-center">
            <img
              src="/assets/icons/blob.png"
              alt="Blob"
              className="blob-center"
            />
          </div>
          <SectionImageLeft
            imgSrc="/assets/images/Values.png"
            imgWidth={1200}
            imgHeight={1200}
            imgAlt="Settings"
            heading="Our Values: Veracity, Collaboration and Improvement"
            paragraphs={
              <p>
                <span className="mt-10">
                  <span className="font-bold">Veracity: </span>Upholding
                  truthfulness and authenticity in all aspects of our operations
                  and committing to providing accurate and verifiable
                  information.
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Collaboration: </span>Fostering a
                  spirit of teamwork and partnership to achieve shared goals
                  while embracing diverse perspectives and expertise in
                  information management service.
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Improvement: </span>Continuously
                  seeking ways to efficiently and effectively improve our
                  process, impact and partner\'s experience.
                </span>
              </p>
            }
          />
        </ScrollTriggeredAnimation>
      </section>
      <ScrollTriggeredAnimation>
        <Cta
          paragraph={
            <p className="text-sm">
              Veridaq.com is more than just a platform; it's a community
              dedicated to shaping the future of professional connections. Join
              us on this journey of trust, transparency, and efficiency. Whether
              you're an individual user or an organization, Veridaq.com is here
              to redefine your HR background information check experience. Ready
              to experience a smarter, faster, and more secure way of handling
              reference verification? Sign Up Now and be part of the Veridaq.com
              revolution!
            </p>
          }
        />
      </ScrollTriggeredAnimation>
    </main>
  );
}
