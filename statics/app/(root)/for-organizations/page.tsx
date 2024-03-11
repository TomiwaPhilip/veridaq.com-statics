import { Cta, Hero2, SectionImageLeft2, SectionImageRight2, NumberIcon } from "@/components/shared/Reusables";

export default function ForOrganization() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq, where we empower organizations with seamless reference verification solutions. 
                Our platform is designed to simplify the reference check process, saving you time, effort, and resources. 
                Here's how Veridaq can benefit your organization:"
            />

            <img src="/assets/icons/blur.png" alt="Blob" className="blob-bottom-right" />

            <section className="">
                <NumberIcon imgSrc="/assets/icons/icon-number-01.png" imgAlt="1" />
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div className="">
                            <p className="text-[20px] font-bold pb-5">Streamlined Verification Process </p>
                            <p className="text-[20px]">Say goodbye to manual reference checks. 
                            Veridaq automates the verification process, allowing you to issue and manage verifiable claims effortlessly.</p>
                        </div>
                    }
                    imgSrc="/assets/images/sign-up.png"
                    imgAlt="user"
                    imgWidth={300}
                    imgHeight={300}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-02.png" imgAlt="2" />                
                <SectionImageLeft2
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Secure and Verifiable Claims:</p>                            
                            <p className="text-[20px]">
                                Ensure the integrity of your reference verification with secure and verifiable claims. 
                                Veridaq provides clear and tamper-proof records of relationships between entities.
                            </p>
                        </div>
                    }
                    imgSrc="/assets/images/Veridaq_Check.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-03.png" imgAlt="3" />
                <div className="flex items-center justify-center">
                    <img src="/assets/icons/blob.png" alt="Blob" className="blob-center" />
                </div>
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Flexible Issuance Options</p>
                            <p className="text-[20px]">Whether you want to issue work Reference veridaq,,memberships, studentship status, 
                            or document verification veridaq, Veridaq offers flexible issuance options to suit your needs</p>
                        </div>
                    }
                    imgSrc="/assets/images/Values.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-04.png" imgAlt="4" />
                <SectionImageLeft2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Centralized Repository</p> 
                            <p className="text-[20px]">Access, store, and manage all your verifiable claims in one secure repository. 
                            Veridaq's user-friendly interface makes it easy to organize and retrieve important information.</p>
                        </div>
                    }
                    imgSrc="/assets/images/box.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-05.png" imgAlt="5" />
                <SectionImageRight2
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Transparent Pricing Model</p>
                            <p className="text-[20px]">Veridaq offers a transparent pricing model, 
                            with options for freemium-based and commission-based issuance. Rest assured, you only pay for the services you use.
                            </p>
                        </div>
                    }
                    imgSrc="/assets/images/verify-claims.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />
                <NumberIcon imgSrc="/assets/icons/icon-number-06.png" imgAlt="6" />
                <SectionImageLeft2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Dedicated Support</p> 
                            <p className="text-[20px]">Our dedicated support team is here to assist you every step of the way. 
                            Whether you have questions about platform features, pricing, or technical support, we're just a click away.</p>
                        </div>
                    }
                    imgSrc="/assets/images/Settings.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />                
            </section>
            <Cta 
                paragraph = {
                  <p className="font-bold text-[28px] md:text-[32px] lg:text-[32px] xl:text-[32px]">Ready to streamline your reference verification processes? 
                  Sign up for Veridaq today and experience the future of reference checks for organizations. 
                  Join the growing community of organizations who trust Veridaq for their verification needs.</p>
                }
            />
        </main>
    )
}