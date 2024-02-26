import Image from "next/image"

import { NoOutlineButton } from "@/components/shared/Button"
import { Cta, Hero2, SectionImageLeft, SectionImageRight } from "@/components/shared/Reusables"

export default function HowItWorks() {
    return(
        <main className="mt-[150px] mx-[50px]">
            <Hero2
                heading="Welcome to Veridaq.com, your go-to platform for revolutionizing the reference check 
                process through seamless and secure verifiable claims. Discover the simplicity and efficiency 
                of our platform with a step-by-step guide on how Veridaq.com works:"
            />
            <section className=""> 
                <SectionImageRight 
                    
                />
            </section>
        </main>
    )
}