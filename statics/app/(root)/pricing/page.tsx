import Image from "next/image"

export default function Pricing() {
    return(
        <main>
            <div className="">
                <p className="font-bold text-[40px]">
                    Welcome to Veridaq.com, your trusted platform for seamless reference verification. 
                    We offer flexible pricing options to meet the needs of both individuals and organizations. 
                    Take a look at our pricing plans below:
                </p>
                <Image
                    src={"/assets/images/Hero.png"}
                    alt="hero"
                    width={1200}
                    height={1200}
                />
            </div>
            
        </main>
    )
}