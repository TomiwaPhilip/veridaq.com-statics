import { Cta, Hero2, SectionImageLeft2, SectionImageRight2, NumberIcon } from "@/components/shared/Reusables";

export default function ForOrganization() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq, where we empower organizations with seamless 
                HR information verification solutions. Our platform is designed to 
                simplify the HR information check process, saving you time, effort, and resources. 
                With Veridaq your organization/association/company/institution get:"
            />

            <img src="/assets/icons/blur.png" alt="Blob" className="blob-bottom-right" />

            <section className="">
                <NumberIcon imgSrc="/assets/icons/icon-number-01.png" imgAlt="1" />
                <SectionImageRight2 
                    heading=""
                    paragraphs={
                        <div className="">
                            <p className="text-[20px] font-bold pb-5">Streamlined HR information verification process</p>
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
                            <p className="text-[20px] font-bold pb-5">A secure and reliable verifiable reference technology.</p>                            
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
                            <p className="text-[20px] font-bold pb-5">Flexible reference issuance options</p>
                        </div>
                    }
                    imgSrc="/assets/images/Values.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-04.png" imgAlt="4" />
                <SectionImageLeft2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Centralized and user friendly Veridaq repository to store and manage issuances</p> 
                        </div>
                    }
                    imgSrc="/assets/images/box.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
                />

                <NumberIcon imgSrc="/assets/icons/icon-number-05.png" imgAlt="5" />
                <SectionImageRight2
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Transparent earning or payment model.</p>
                        </div>
                    }
                    imgSrc="/assets/images/verify-claims.png"
                    imgAlt="user"
                    imgWidth={100}
                    imgHeight={100}
                />
                <NumberIcon imgSrc="/assets/icons/icon-number-06.png" imgAlt="6" />
                <SectionImageLeft2 
                    heading=""
                    paragraphs={
                        <div>
                            <p className="text-[20px] font-bold pb-5">Dedicated support from the Veridaq team.</p> 
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
                  <p className="font-bold text-[28px] md:text-[32px] lg:text-[32px] xl:text-[32px]">Ready to streamline your reference verification processes? 
                  Sign up for Veridaq today and experience the future of reference checks for organizations. 
                  Join the growing community of organizations who trust Veridaq for their verification needs.</p>
                }
            />
        </main>
    )
}