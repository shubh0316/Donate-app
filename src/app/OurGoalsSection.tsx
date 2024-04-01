import React from "react";
import card1 from "@/assets/card1.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


export const Card1 = () => {
    return (
        <div className="p-6 flex flex-col items-center ">
            <div className="bg-white p-4">
                <div className="md:flex md:bg-opacity-0 bg-opacity-80 gap-20 justify-between ">

                    <div className="md:mt-[-40px] md:ml-[20px]">
                    <Image src={card1} alt="image1" width={200} className="w-96 md:w-[96rem] h-96 " />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-4xl leading-normal tracking-wider font-bold ">Aid for Gaza&apos;s Underpaid but Dedicated Doctors.</h1>
                        <p className="text-gray-700 leading-7 text-md text-start ">
                            Join our donation campaign to support underpaid doctors in Gaza who are tirelessly helping the people amidst the conflict. Your donation ensures they continue their critical work in saving lives, providing essential care, and healing communities.
                        </p>
                        <div className="flex items-center gap-10">
                            <div className="flex gap-1">
                                <button className="bg-yellow-500 text-black flex gap-1 px-4 py-2 font-semibold">Donate Now  <ArrowRight /></button>
                            </div>
                            <p className="text-4xl text-gray-400"> | </p>
                            <div className=" flex flex-col space-y-2 items-start text-start">
                                <p className="text-green-700 text-3xl font-semibold">$100,257</p>
                                <p className="text-gray-700 leading-7 text-md">Donation received Till Date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const OurGoalsSection = () => {
    return (
        <>
        <div className="lg:py-0 lg:mt-0 md:mt-0 mt-[16rem]">  
            <div className="max-w-8xl lg:px-20 bg-gray-100">
                <div className="md:py-20 flex items-center">
                    <div className="">
                        <div className="flex flex-col items-center text-center space-y-2 md:py-4">
                            <h1 className="font-semibold text-4xl">
                                Our Goals
                            </h1>
                            <p>Join us in making a difference through our donation campaigns.</p>
                        </div>
                        <div className="lg:py-10 space-y-8">  
                        <Card1 />
                        <Card1 />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default OurGoalsSection;