import { Card, Checks } from "@/components/shared/Cards"
import { NoOutlineButtonBig } from "@/components/shared/Button"
import { Cta, Hero2 } from "@/components/shared/Reusables"

export default function Pricing() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq.com, your trusted platform for seamless reference
                verification. We offer flexible pricing options to meet the needs of
                both individuals and organizations. Take a look at our pricing plans
                below:"
            />
            
            <img src="/assets/icons/blur.png" alt="Blob" className="blob-bottom-right" />

            <section className="mt-[100px]"> 
                <p className="font-bold text-[28px] md:text-[36px] lg:text-[36px] xl:text-[36px] mb-10">For Individuals</p>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <Card 
                        heading="Freemium Plan"
                        subheading="Free to request and issue"
                        cardElements={
                        <div>
                            <Checks 
                            paragraphs="Work Reference"
                            />
                            <Checks 
                            paragraphs="Individual Reference/Recommendation"
                            />
                        </div>
                        }
                    />
                    <Card 
                        heading="Veridaq Store Access Fee"
                        subheading="$20 (N10,000 users in Nigeria)"
                        cardElements={
                        <div>
                            <Checks 
                            paragraphs="
                            Veridaq Store is a Veridaq repo to store, 
                            access and manage all received Work References/Recommendation from Organisations and Individuals."
                            />
                        </div>
                        }
                    />
                    <Card 
                        heading="Pay-to-Issue Plan"
                        subheading="Fees at Organisation preferred pricing"
                        cardElements={
                        <div>
                            <Checks 
                            paragraphs="Membership Veridaq"
                            />
                            <Checks 
                            paragraphs="Studentship Status Veridaq"
                            />
                            <Checks 
                            paragraphs="Document Verification Veridaq"
                            />
                        </div>
                        }
                    />
                </div>
                <div className="mt-10 text-center">
                    <NoOutlineButtonBig name="Sign Up Now" />
                </div>
            </section>
            <section className="mt-[100px]"> 
                <p className="font-bold text-[28px] md:text-[36px] lg:text-[36px] xl:text-[36px] mb-10">For Organizations</p>
                <div className="flex items-center justify-center">
                    <img src="/assets/icons/blob.png" alt="Blob" className="blob-center" />
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <Card 
                        heading="Freemium Plan"
                        subheading="Issuance with No Earning Plan "
                        cardElements={
                        <div>
                            <Checks 
                            paragraphs="Work Reference"
                            />
                        </div>
                        }
                    />
                    <Card 
                        heading="Get Paid"
                        subheading="Issuing with Earning Plan"
                        cardElements={
                        <div>
                            <Checks 
                            paragraphs="Membership Reference"
                            />
                            <Checks 
                            paragraphs="Studentship Status Reference"
                            />
                            <p className="font-semibold text-[20px] text-center mb-5">50% to Organisation and 50% to Platform Revenue Model</p>
                            <Checks 
                            paragraphs="Document Verification Reference"
                            />
                            <p className="font-semibold text-[20px] text-center mb-5">Document Verification Reference: Fee = Issuing Organisation charge + 50% Markup</p>
                        </div>
                        }
                    />
                    <Card 
                        heading="Enterprise Solutions"
                        subheading="Contact us for custom pricing tailored to your organization's specific needs."
                        cardElements={
                        <div>
                            {" "}
                        </div>
                        }
                    />
                </div>
                <div className="mt-10 text-center">
                    <NoOutlineButtonBig name="Sign Up Now" />
                </div>
            </section>
            
            <section className="mt-[100px]">
                <p className="font-bold text-[36px] mb-10">Additional Information</p>
                <ul className="text-[24px] list-disc pl-4 ml-8">
                    <li className="mb-2">
                        Custom billing options available for Enterprise Plan.
                    </li>
                    <li className="mb-2">
                        <span className="font-bold"> Payment Methods: </span> We accept major credit cards and electronic transfers.
                    </li>
                    <li className="mb-2">
                        <span className="font-bold"> Customer Support: </span>Our dedicated support team is available to assist you with any questions or concerns.
                    </li>
                </ul>
            </section>

            <Cta
                paragraph = {
                <p className="text-[28px] md:text-[32px] lg:text-[32px] xl:text-[32px]"> 
                    Start streamlining your reference verification process with Veridaq.com today. Sign Up Now to get started!
                </p>
                }
            />


        </main>
    )
}