import Image from "next/image"
import { Card, Checks } from "@/components/shared/Cards"
import { NoOutlineButton } from "@/components/shared/Button"

export default function Pricing() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <div className="text-center items-center">
                <p className="font-bold text-[40px] pb-10 text-center">
                    Welcome to Veridaq.com, your trusted platform for seamless reference verification. 
                    We offer flexible pricing options to meet the needs of both individuals and organizations. 
                    Take a look at our pricing plans below:
                </p>
                <Image
                    src={"/assets/images/Hero.png"}
                    alt="hero"
                    width={500}
                    height={500}
                />
            </div>

            <section className="mt-[100px]"> 
                <p className="font-bold text-[36px] mb-10">For Individuals</p>
                <div className="flex justify-center gap-10">
                    <Card 
                        heading="Freemium Plan"
                        subheading="Free to request and issue"
                        cardElements={
                            <div>
                                <Checks 
                                    paragraphs="Work History Veridaq"
                                />
                                <Checks 
                                    paragraphs="Individual Reference or Recommendation Veridaq"
                                />
                            </div>
                        }
                    />
                    <Card 
                        heading="Basic Subscription Plan"
                        subheading="$4 per annum billing: (N2,400 users in Nigeria)"
                        cardElements={
                            <div>
                                <Checks 
                                    paragraphs="To access and manage your Work History Veridaq and Individual 
                                    Reference/Recommendation Veridaq in the Veridaq Repository."
                                />
                            </div>
                        }
                    />
                    <Card 
                        heading="Pay-to-Issue Plan"
                        subheading="Fees at organisation preferred pricing"
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
                    <NoOutlineButton name="Sign Up Now" />
                </div>
            </section>
            <section className="mt-[100px]"> 
                <p className="font-bold text-[36px] mb-10">For Organizations</p>
                <div className="flex justify-center gap-10">
                    <Card 
                        heading="Freemium Plan"
                        subheading="Free to Issue and No Earning Plan"
                        cardElements={
                            <div>
                                <Checks 
                                    paragraphs="Work History Veridaq"
                                />
                            </div>
                        }
                    />
                    <Card 
                        heading="Get Paid"
                        subheading="Pay to Issue with Earning Plan"
                        cardElements={
                            <div>
                                <Checks 
                                    paragraphs="Membership Veridaq"
                                />
                                <Checks 
                                    paragraphs="Studentship Status Veridaq"
                                />
                                <p className="font-semibold text-[20px] text-center mb-5">75% to Organisation and 25% to Platform Revenue Model</p>
                                <Checks 
                                    paragraphs="Document Verification Veridaq"
                                />
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
                    <NoOutlineButton name="Sign Up Now" />
                </div>
            </section>

        </main>
    )
}