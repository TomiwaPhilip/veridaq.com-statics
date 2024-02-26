import { Cta, Hero, SectionImageLeft, SectionImageRight } from "@/components/shared/Reusables";

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
        <SectionImageRight
          heading="Why Veridaq.com?"
          paragraphs ={
              <p> 
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
          }
          imgSrc="/assets/images/Veridaq_Check.png"
          imgWidth={1200}
          imgHeight={1200}
          imgAlt="Veridaq_Check"
         />
      </section>
      <section className="mt-[100px]"> 
        <SectionImageLeft
          imgSrc="/assets/images/Settings.png"
          imgWidth={1200}
          imgHeight={1200}
          imgAlt="Settings"
          heading="Verifiable Claims for Every Relationship"
          paragraphs = {
            <p>
                <span className="mt-10">
                    <span className="font-bold">Work History Veridaq: </span> Seamlessly verify work relationships between organizations and employees.
                  </span>
                  <br /> <br />
                  <span className="mt-10">
                    <span className="font-bold">Individual Reference or Recommendation Veridaq: </span>Obtain verifiable references or recommendations between individuals.
                  </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Membership Veridaq: </span>Establish proof of relationships between organizations or associations professional bodies and the members
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Studentship Status Veridaq: </span>Verify current studentshipstatus claim automatically
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Document Verification Veridaq: </span>Ensure the genuineness ofd ocuments through verifiable references.
                </span>
            </p>
          }
        />
      </section>
      <Cta
        paragraph = {
          <p> 
            Join Veridaq.com Today for a Smarter, Faster, and More Secure Reference Check Experience! Or 
            <a href="/about" className="text-[#EA098D]"> learn more. </a>
          </p>
        }
      />
    </main>
  );
}
