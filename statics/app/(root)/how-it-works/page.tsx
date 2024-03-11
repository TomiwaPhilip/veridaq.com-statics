import { Cta, Hero2, SectionImageLeft2, SectionImageRight2, NumberIcon } from "@/components/shared/Reusables";

export default function HowItWorks() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq.com, your go-to platform for revolutionizing the reference check 
                process through seamless and secure verifiable claims. Discover the simplicity and efficiency 
                of our platform with a step-by-step guide on how Veridaq.com works:"
            />

            <section className="">
                <NumberIcon imgSrc="/assets/icons/icon-number-01.png" imgAlt="1" />
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div className="">
                            <p className="text-[20px] font-bold">Sign Up and Profile Creation </p>
                            <p className="text-[20px]">Begin your journey with Veridaq.com by creating your account. Provide essential details and 
                                complete your profile to ensure a personalized and secure experience.</p>
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
                            <p className="text-[20px] font-bold">Create Verifiable Claims</p>                            
                            <ul className="text-[20px] list-disc">
                                <li>Work History Veridaq: request and receive verifiable records of your work relationships with organizations.</li>
                                <li>Individual Reference/Recommendation Veridaq: request and obtain verifiable references or recommendations from other individuals.</li>
                                <li>Membership Veridaq: establish proof of relationships with request for membership verifiable badge from associations/Alumni/Professional bodies </li>
                                <li>Studentship Status Veridaq: Studentship Status claim verifiable badge for current students.</li>
                                <li>Document Verification Veridaq: ensure the authenticity of documents through verifiable references.</li>
                            </ul>
                        </div>
                    }
                    imgSrc="/assets/images/verify-claims.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-03.png" imgAlt="3" />
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold">Verification Loop</p>
                            <p className="text-[20px]">Our platform employs an automated verification loop that ensures accuracy and security throughout the process. The verification loop 
                                is designed to provide a reliable and tamper-proof system for the exchange of verifiable claims between entities.</p>
                        </div>
                    }
                    imgSrc="/assets/images/loop.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-04.png" imgAlt="4" />
                <SectionImageLeft2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold">Access Your Veridaq Repository</p> 
                            <p className="text-[20px]">Your secure Veridaq repository is the hub for managing all your verifiable claims:</p>
                            <p className="text-[20px]"> <span className="font-bold"> Store: </span> Safely store your verifiable claims for easy access.</p>                           
                            <p className="text-[20px]"> <span className="font-bold"> Share: </span> Share verifiable claims with relevant parties.</p>                           
                            <p className="text-[20px]"> <span className="font-bold"> Manage: </span> Update, download, and control access to your verifiable claims.</p>                           
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
                            <p className="text-[20px] font-bold">Experience a Smarter, Faster, and More Secure Reference Check</p>
                            <p className="text-[20px]">Veridaq.com transforms reference checks into a streamlined,efficient, and secure process. Say goodbye to the hassles of traditional 
                            reference verification and embrace a future where your professional connections are built on trust and transparency.</p>
                        </div>
                    }
                    imgSrc="/assets/images/loop.png"
                    imgAlt="user"
                    imgWidth={400}
                    imgHeight={400}
                />                
            </section>
            <Cta 
                paragraph = {
                  <p className="font-bold text-[28px] md:text-[32px] lg:text-[32px] xl:text-[32px]">Ready to experience the Veridaq.com difference? 
                  Sign Up Now and start enjoying a smarter, faster, and more secure reference check experience! </p>
                }
            />
        </main>
    )
}