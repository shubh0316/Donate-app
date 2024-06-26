import React from "react";
import Container from "./container";
import logo from "@/assets/logo.png";
import location from "@/assets/svg/Footer - Contact Us - Location Icon.svg";
import email from "@/assets/svg/Footer - Contact Us - Email Icon.svg";
import call from "@/assets/svg/Footer - Contact Us - Call Icon.svg";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MapPinned,
  PhoneCall,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <div id="contact" className="bg-white p-10 mt-10">
        <Container>
          <div className="lg:ml-40">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-20 md:gap-x-20 md:mb-4">
              <div className="cols-span-3">
                <Image src={logo} alt={"icon"} height={120} width={800} />
              </div>
              <div className="cols-span-1">
                <div className="flex flex-col gap-6">
                  <h1 className="text-xl font-semibold text-black">
                    Quick Links
                  </h1>
                  <Link href="#about" className="text-black text-md">
                    Our Goals
                  </Link>
                  <Link href="#services" className="text-black text-md">
                    Our Progress
                  </Link>
                  <Link href="#specialties" className="text-black text-md">
                    Live Updates
                  </Link>
                </div>
              </div>
              <div className="cols-span-1">
                <div className="flex flex-col gap-6">
                  <h1 className="text-xl font-semibold text-black">Contact</h1>
                  <div className="flex flex-row space-x-5">
                    <Image
                      src={location}
                      alt={location}
                      height={24}
                      width={24}
                    />
                    <Link href="" className="text-black text-md">
                      shree balaji PG noble enclave gali number 1 gurgaon haryana
                    </Link>
                  </div>
                  <div className="flex flex-row space-x-5">
                    <Image src={call} alt={call} height={24} width={24} />
                    <Link href="" className="text-black text-md ">
                      +1111111111
                    </Link>
                  </div>
                  <div className="flex flex-row space-x-5">
                    <Image src={email} alt={email} height={24} width={24} />
                    <Link href="" className="text-black lg:text-md text-sm">
                      info@docswithinborders.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="cols-span-1">
                <p className="font-semibold text-xl md:pb-6">Follow  us on</p>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-6">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="yellow-500" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:border-t-2 w-[90%] items-center md:border-black mt-8 my-6" />

            <div className="text-black text-center">
              <p className="text-md">
                Copyright © 2023 | Doctors Within Borders.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
