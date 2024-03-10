import { Cta, Hero2, SectionImageLeft, SectionImageRight, SectionImageRight2 } from "@/components/shared/Reusables"

export default function HowItWorks() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq.com, your go-to platform for revolutionizing the reference check 
                process through seamless and secure verifiable claims. Discover the simplicity and efficiency 
                of our platform with a step-by-step guide on how Veridaq.com works:"
            />
            <div className="flex items-center justify-center">
            <div className="relative">
                <div className="absolute h-[2000px] border-l-8 border-[#694C9F] border-solid z-10"></div>
                <div className="relative z-20"> 
                </div>
            </div>
            </div>
            <section className=""> 
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div className="mr-[200px]">
                            <p className="text-[20px] font-bold">Sign Up and Profile Creation <br />
                                Begin your journey with Veridaq.com by creating your account. Provide essential details and 
                                complete your profile to ensure a personalized and secure experience.</p>
                        </div>
                    }
                    imgSrc="/assets/images/sign-up.png"
                    imgAlt="user"
                    imgWidth={300}
                    imgHeight={300}
                />
                <SectionImageLeft 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold">Create Verifiable Claims <br />
                            </p>                            
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
                <SectionImageRight 
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
                <SectionImageLeft 
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
                <SectionImageRight 
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
                  <p className="font-bold text-[32px]">Ready to experience the Veridaq.com difference? 
                  Sign Up Now and start enjoying a smarter, faster, and more secure reference check experience! </p>
                }
            />
        </main>
    )
}