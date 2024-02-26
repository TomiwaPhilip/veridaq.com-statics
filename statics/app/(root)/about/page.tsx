import { Cta, Hero, SectionImageLeft, SectionImageRight } from "@/components/shared/Reusables";

export default function Home() {
  return (
    <main className="mx-[50px] mt-[150px] pt-[10]">
      <section>
        <Hero 
          heading=""
          subheading="Our Mission: Empowering Connections, Ensuring Integrity"
          paragraphs="Our mission is to empower individuals and organizations by providing a seamless, secure, 
          and efficient platform for verifiable claims. We're dedicated to simplifying the process of reference checks, 
          ensuring accuracy, and fostering trust in professional relationships."
          imgSrc="/assets/images/Mission.png"
          imgWidth={1200}
          imgHeight={1200}
          imgAlt="hero"
        />
      </section>
      <section className="mt-[100px]"> 
        <SectionImageRight
          heading="What Sets Us Apart: Automation for a Smarter Future"
          paragraphs ={
              <p> 
                  Veridaq.com stands out with its cutting-edge approach toreference verification. 
                  By harnessing the power of automation and verifiableclaims, we're redefining how individuals and 
                  organizations interact, ensuring afuture where reference checks are both swift and reliable.
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
          imgSrc="/assets/images/Values.png"
          imgWidth={1200}
          imgHeight={1200}
          imgAlt="Settings"
          heading="Our Values: Trust, Integrity, Innovation"
          paragraphs = {
            <p>
                <span className="mt-10">
                    <span className="font-bold">Trust: </span>Trust is the cornerstone of our platform. We're committed to building trust through transparent and verifiable processes.
                  </span>
                  <br /> <br />
                  <span className="mt-10">
                    <span className="font-bold">Integrity: </span>We uphold the highest standards of integrity in all our interactions. Our platform ensures the authenticity of every verifiable claim.
                  </span>
                <br /> <br />
                <span className="mt-10">
                  <span className="font-bold">Innovation: </span>Innovation is at the heart of what we do. We continuously strive to bring the latest technology to simplify and enhance the reference check experience
                </span>
            </p>
          }
        />
      </section>
      <Cta
        paragraph = {
          <p className="text-sm"> 
            Veridaq.com is more than just a platform; it's a community dedicated to shaping the future of professional connections. 
            Join us on this journey of trust, transparency, and efficiency. Whether you're an individual user or an organization, 
            Veridaq.com is here to redefine your reference check experience.
            Ready to experience a smarter, faster, and more secure way of handling reference verification? 
            Sign Up Now and be part of the Veridaq.com revolution!
          </p>
        }
      />
    </main>
  );
}
