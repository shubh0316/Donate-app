import React from "react";
import HeroImage from "@/assets/heroImage.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="relative flex justify-end">
            {/* Image container */}
            <div className="lg:w-[60%]  h-[41.5rem] relative ">
                <Image src={HeroImage} alt="hero" />
            </div>
            <div className="absolute top-40 lg:top-0 lg:left-20 lg:w-[45%]  h-full flex  items-center">
                <div className="bg-white  p-8  space-y-8">
                    <p className="space-y-4 leading-tight font-bold text-6xl relative">
                        Supporting Children and Doctors in Gaza:
                        <span className="underline underline-offset-1 decoration-8 decoration-yellow-500 ">  Aid Amidst Conflicts
                        </span>
                    </p>
                    <div className="text-start text-gray-700 ">
                    Join us in providing vital support to children and underpaid doctors in Gaza, offering aid to those who are homeless, wounded, and in urgent need during the ongoing Palestine-Israel conflict. Your donations make a meaningful difference in saving lives and providing essential care.
                    </div>



                     
                    <button className="flex gap-4 bg-yellow-500 px-6 py-2 text-black font-semibold">Support Them Now 
                    <ArrowRight />
                    </button>
           
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
