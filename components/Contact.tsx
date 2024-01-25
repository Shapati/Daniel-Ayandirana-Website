import { images } from "@/images/images";
import Image from "next/image";
import React from "react";

export default function Contact() {
    const { z1, z2, z3, z4 } = images();
    return (
        <div className="bg-[#191919] py-[83px] mt-[100px]" id="contact">
            <div className="w-[1200px] mx-auto 1xl:w-[90%]">
                <p className="mb-[23px] text-[white] font-[700] text-[23px] font-[700]">
                    Contact
                </p>
                <p className="text-[#8491A0] text-[14px] font-[400] leading-[150%] mt-[34px] mb-[22px]">
                    Feel free to reach out to me through the provided contact
                    details. Whether you have a project in mind, a collaboration
                    proposal, or just want to connect, I'm always open to new
                    opportunities. Looking forward to hearing from you!
                </p>

                <a
                    href="mailto:nifemiayandiran@gmail.com"
                    className="mb-[42px] flex gap-[6px] text-[#C5C5C5]  text-[14px] font-[600]"
                >
                    <Image src={z1} alt="" /> nifemiayandiran@gmail.com
                </a>
                <div className="flex gap-[27px]">
                    <a href="https://twitter.com/AgbaCodes">
                        <Image src={z3} alt="" />{" "}
                    </a>
                </div>
            </div>
        </div>
    );
}
