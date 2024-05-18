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
        <img src="/assets/icons/blur.png" alt="Blob" className="blob-bottom-right" />
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
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Easy and Secured Access: </span>Veridaq.com breaks down barriers to background information access within a secured framework.
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
        <div className="flex items-center justify-center">
            <img src="/assets/icons/blob.png" alt="Blob" className="blob-center" />
        </div>
        <SectionImageLeft
          imgSrc="/assets/images/Settings.png"
          imgWidth={1200}
          imgHeight={1200}
          imgAlt="Settings"
          heading="Verifiable Claim as-a-Service"
          paragraphs = {
            <p>
                <span className="mt-10">
                    <span className="font-bold">Work Reference: </span> Facilitate a verifiable work 
                    review issued by the organisation to an employee's or independent contractor's 
                    (past and current)  The review detail could contain work history, roles, 
                    accomplishments and/or recommendations.
                  </span>
                  <br /> <br />
                  <span className="mt-10">
                    <span className="font-bold">Recommendation/Individual Reference: </span>
                    Facilitate an Individual-to-Individual verifiable reference on work relationship/review or professional recommendation.
                  </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Membership Reference: </span>
                  A verifiable badge on the membership referencing the relationship between the issuing Organisation/Institution/Association and the individual. 
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Studentship Status Reference: </span>
                  This is the issuing institution's verifiable claim infrastructure to seamlessly facilitate its current Studentship Status Referencing.
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Document Verification Reference: </span>
                  Facilitate the authentication of a document genuineness at the click of a button with a verifiable reference.
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
