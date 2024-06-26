import getSession from "@/lib/session/getSession";

import { Cta, Hero, SectionImageLeft, SectionImageRight } from "@/components/shared/Reusables";

export default async function Home() {
  const session = await getSession();
  console.log(session)
  return (
    <main className="mx-[50px] mt-[150px] pt-[10]">
      <section>
        <Hero
          heading="Welcome to Veridaq.com"
          subheading="Automate check on Profile/CV Data with Verifiable Reference."
          paragraphs="Unlock the power of seamless background information check with Veridaq.com.
          Our platform revolutionizes the way organizations and individuals
          handle HR information verification with secure and verifiable reference."
          imgSrc="/assets/images/Hero.png"
          imgWidth={1200}
          imgHeight={1200}
          imgAlt="hero"
        />
        <img src="/assets/icons/blur.png" alt="Blob" className="blob-bottom-right" />
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
          heading="Verifiable Reference as-a-Service"
          paragraphs={
            <p>
              <span className="mt-10">
                <span className="font-bold">Work Reference: </span>This Veridaq function facilitate 
                Work Reference request by a employee/freelancer/industrial trainee and
                its issuance by a workplace/employer to verifiably document and reference 
                the engagement (work experience/history), accomplishments and recommendations 
                records between the individual and the organisation.
              </span>
              <br /> <br />
              <span className="mt-10">
                <span className="font-bold">Individual Reference/Recommendation: </span>
                  This Veridaq function facilitate the request and Issuance of verifiable 
                  recommendation or an individual reference on the knowledge of another 
                  individual&#39;s competence, personality and accomplishments.              
                </span>
              <br /> <br />
              <span className="mt-10">
                <span className="font-bold">Document Verification Reference: </span>
                  This Veridaq function facilitate the request and the issuing of verification 
                  reference on the authenticity of a document (certificate, transaction etc) 
                </span>
              <br /> <br />
              <span className="mt-10">
                <span className="font-bold">Veridaq Reference: </span>
                This Veridaq function facilitate a Verification Reference on current 
                Studentship, Professional or NYSC Membership Status of the individual user.
              </span>
              <br />
              <span className="mt-4">
                [Note: An issued Veridaq Reference grants the individual user (Student, 
                Professional or NYSC Member) a Veridaq Store fee payment WAIVER to access 
                and manage all received Work References and Individual References/Recommendations].
              </span>
            </p>
          }
        />
      </section>
      <Cta
        paragraph={
          <p>
            Join Veridaq.com Today for a Smarter, Faster, and More Secure Reference Check Experience! Or
            <a href="/about" className="text-[#EA098D]"> learn more. </a>
          </p>
        }
      />
    </main>
  );
}
