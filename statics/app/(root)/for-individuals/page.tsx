import { Cta, Hero2, SectionImageLeft2, SectionImageRight2, NumberIcon } from "@/components/shared/Reusables";

export default function ForIndividual() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq, your trusted partner for seamless reference verification. 
                Our platform is designed to empower individuals like you with secure and verifiable claims, 
                making the reference check process effortless and reliable while you own and manage access 
                to your verifiable claims. Here's how Veridaq can benefit you:"
            />

            <img src="/assets/icons/blur.png" alt="Blob" className="blob-bottom-right" />

            <section className="">
                <NumberIcon imgSrc="/assets/icons/icon-number-01.png" imgAlt="1" />
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div className="">
                            <p className="text-[20px] font-bold pb-5">Effortless Reference Verification </p>
                            <p className="text-[20px]">Say goodbye to the hassle of traditional reference checks.
                            Veridaq automates the verification process, allowing you to request and manage verifiable claims with ease.</p>
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
                            <p className="text-[20px] font-bold pb-5">Secure and Transparent Records</p>                            
                            <p className="text-[20px]">
                                Assurance that your reference verification is secure, transparent and you are 
                                always in the know of its usage. Veridaq provides clear and tamper-proof records 
                                of your work review/recommendations/individual references, memberships, studentship 
                                status, and document verification.
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
                            <p className="text-[20px] font-bold pb-5">Accessible Repository</p>
                            <p className="text-[20px]">Access, store, and manage all your verifiable claims in one centralized repository. 
                            Veridaq's intuitive interface makes it easy to organize and retrieve important information whenever you need it.</p>
                        </div>
                    }
                    imgSrc="/assets/images/box.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-04.png" imgAlt="4" />
                <SectionImageLeft2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Flexible Pricing Options</p> 
                            <p className="text-[20px]">Veridaq offers flexible pricing options to suit your needs. Work Reference and 
                            individual reference verifiable claims are available on a freemium model, while other types of claims 
                            are offered at competitive rates.</p>
                        </div>
                    }
                    imgSrc="/assets/images/verify-claims.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-05.png" imgAlt="5" />
                <SectionImageRight2
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Credible Profile</p>
                            <p className="text-[20px]">Create a credible profile with verifiable claims showcasing your professional achievements and credentials. 
                            Let your verifiable claims speak for themselves and enhance your credibility in the eyes of potential employers or collaborators.
                            </p>
                        </div>
                    }
                    imgSrc="/assets/images/Values.png"
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
                  <p className="font-bold text-[28px] md:text-[32px] lg:text-[32px] xl:text-[32px]">Ready to take control of your reference verification process? 
                  <br /> Sign up for Veridaq today and experience the future of reference checks. 
                  Join thousands of individuals who trust Veridaq for their verification needs. </p>
                }
            />
        </main>
    )
}