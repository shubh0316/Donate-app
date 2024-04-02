import React from "react";
import Container from "./container";
import logo from "@/assets/logo.png";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, PhoneCall, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <>
           
            <div id="contact" className="bg-gray-100 p-10 mt-10">
                <Container>
                    <div className="lg:ml-40">  
                    <Image src={logo} alt={"icon"} height={150} width={150} />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-20 md:gap-x-20 md:mb-4">
                        <div className="cols-span-3">
                            <h1 className="text-black text-2xl">Logistics to keep you moving</h1>
                        </div>
                        <div className="cols-span-1">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-xl font-semibold text-black">Quick Links</h1>
                                <Link href="#about" className="text-black text-md">About</Link>
                                <Link href="#services" className="text-black text-md">Our Services</Link>
                                <Link href="#specialties" className="text-black text-md">Our Specialties</Link>
                                <Link href="#choose" className="text-black text-md">Why Choose Us</Link>
                            </div>
                        </div>
                        <div className="cols-span-1">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-xl font-semibold text-black">Contact Us</h1>
                                <div className="flex flex-row space-x-5">
                                    <MapPin className="" />
                                    <Link href="" className="text-black text-md">6415 Northwest Dr.  Unit 17 & 18
Mississauga, ON  L4V 1X1</Link>
                                </div>
                                <div className="flex flex-row space-x-5">
                                    <PhoneCall />
                                    <Link href="" className="text-black text-md">+1-833-562-3375</Link>
                                </div>
                                <div className="flex flex-row space-x-5">
                                    <Mail />
                                    <Link href="" className="text-black text-md">info@freightstarts.com</Link>
                                </div>
                            </div>
                        </div>

                        <div className="cols-span-1">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row gap-6">
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <Twitter />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <Facebook />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <Instagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="md:border-t-2 w-[90%] items-center md:border-black mt-8 my-6" />

<div className="text-black text-center">
    <p className="text-md">Copyright © 2023 | Freight Starts Ltd.</p>
</div>
</div>
                </Container>
            </div>
        </>
    );
};

export default Footer;