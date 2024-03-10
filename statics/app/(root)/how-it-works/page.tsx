import { Cta, Hero2, SectionImageLeft, SectionImageRight, SectionImageRight2 } from "@/components/shared/Reusables"

export default function HowItWorks() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq.com, your go-to platform for revolutionizing the reference check 
                process through seamless and secure verifiable claims. Discover the simplicity and efficiency 
                of our platform with a step-by-step guide on how Veridaq.com works:"
            />

            <section className=""> 

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