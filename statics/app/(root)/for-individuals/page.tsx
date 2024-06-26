import { Cta, Hero2, SectionImageLeft2, SectionImageRight2, NumberIcon } from "@/components/shared/Reusables";

export default function ForIndividual() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq, your trusted partner for seamless background 
                information verification. Our platform is designed to empower individuals 
                like you with secure and verifiable reference, making the information 
                check process effortless and reliable while you own and manage access 
                to your verifiable references. With Veridaq you get to:"
            />

            <img src="/assets/icons/blur.png" alt="Blob" className="blob-bottom-right" />

            <section className="">
                <NumberIcon imgSrc="/assets/icons/icon-number-01.png" imgAlt="1" />
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div className="">
                            <p className="text-[20px] font-bold pb-5">Make your background information 
                                check effortless for prospective connections and hirer.
                            </p>
                        </div>
                    }
                    imgSrc="/assets/images/sign-up.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-02.png" imgAlt="2" />                
                <SectionImageLeft2
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Keep a secure, transparent and verifiable records</p>                            
                        </div>
                    }
                    imgSrc="/assets/images/Veridaq_Check.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-03.png" imgAlt="3" />
                <div className="flex items-center justify-center">
                    <img src="/assets/icons/blob.png" alt="Blob" className="blob-center" />
                </div>
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Accessible HR repository that allows for information update.</p>
                        </div>
                    }
                    imgSrc="/assets/images/box.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-04.png" imgAlt="4" />
                <SectionImageLeft2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Flexible and economical products pricing</p> 
                        </div>
                    }
                    imgSrc="/assets/images/verify-claims.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-05.png" imgAlt="5" />
                <SectionImageRight2
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Position yourself well for opportunities with an automated information verification possibility on
                            your Profile/CV/Resume data.</p>
                        </div>
                    }
                    imgSrc="/assets/images/Values.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
                />
                <NumberIcon imgSrc="/assets/icons/icon-number-06.png" imgAlt="6" />
                <SectionImageLeft2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Dedicated support from the Veridaq team</p> 
                        </div>
                    }
                    imgSrc="/assets/images/Settings.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
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