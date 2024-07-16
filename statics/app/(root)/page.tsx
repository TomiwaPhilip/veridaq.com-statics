import getSession from "@/lib/session/getSession"

import {
  Cta,
  Hero,
  SectionImageLeft,
  SectionImageRight,
} from "@/components/shared/Reusables"
import {
  BaseFramerAnimation,
  ScrollTriggeredAnimation,
} from "@/components/shared/Animations"

export default async function Home() {
  const session = await getSession()
  console.log(session)
  return (
    <main className="mx-[50px] mt-[150px] pt-[10]">
      <BaseFramerAnimation>
        <section>
          <Hero
            heading="Welcome to Veridaq.com"
            subheading="Verifiably document and automate HR check on Hands-on/Work Experience, Accomplishment and Recommendation."
            paragraphs="Unlock the power of seamless background information check with Veridaq.com.
          Our platform revolutionizes the way organizations and individuals
          handle HR information verification with secure and verifiable reference."
            imgSrc="/assets/images/Hero.png"
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
      </BaseFramerAnimation>
      <ScrollTriggeredAnimation delay={1}>
        <section className="mt-[100px]">
          <div className="flex items-center justify-center">
            <img
              src="/assets/icons/blob.png"
              alt="Blob"
              className="blob-center"
            />
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
                  <span className="font-bold">Work Reference: </span>This
                  Veridaq function facilitates Work Reference requests by a
                  current or previous employee and its issuance by a work
                  organisation. An issued Work Reference will verifiably
                  document and reference the work engagement, accomplishments
                  and commendation record between the individual and the
                  organisation.
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">
                    Hands-on Experience Reference:{" "}
                  </span>
                  This Veridaq function facilitates Hands-on Experience
                  Reference requests by a project team member (Freelancer,
                  Trainee or a regular Employee) and its issuance by the project
                  promoter (Organisation). An issued Hands-on Experience
                  Reference will verifiably document and reference the hands-on
                  engagement, role accomplishments and commendation record on
                  the project between the individual and the organisation.
                </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">
                    Individual Reference/Recommendation:{" "}
                  </span>
                  This Veridaq function facilitates the request and issuance of
                  verifiable recommendation or an individual reference on the
                  knowledge of another individual&apos;s competence, personality
                  and accomplishments.
                </span>
                <br /> <br />
              </p>
            }
          />
        </section>
      </ScrollTriggeredAnimation>
      <ScrollTriggeredAnimation>
        <Cta
          paragraph={
            <p>
              Join Veridaq.com Today for a Smarter, Faster, and More Secure
              Reference Check Experience! Or
              <a href="/about" className="text-[#EA098D]">
                {" "}
                learn more.{" "}
              </a>
            </p>
          }
        />
      </ScrollTriggeredAnimation>
    </main>
  )
}
