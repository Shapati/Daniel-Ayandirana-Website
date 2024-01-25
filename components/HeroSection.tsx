import { images } from "@/images/images";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
    const { ava, l1, l2, l3, l4, l5, l6, l7, l8 } = images();
    const icons = [l3, l1, l4, l7, l6, l8, l5, l2];
    return (
        <div className="w-[679px] mx-[auto] grid place-items-center lg:w-[90%]">
            <Image src={ava} alt="" className="" />
            <h1 className="text-[white] text-[55px]  font-[800] leading-[76px] text-center mt-[42px] mb-[39px] sm:text-[30px] sm:leading-[40px]">
                Coding the <span className="gradient-clip">Future </span> One{" "}
                <span className="gradient-clip"> Project </span> at a Time.
            </h1>
            <p className="text-[#C5C5C5] text-[18px] font-[300] text-center">
                Hi I'm{" "}
                <span className="gradient-clip font-[800]">
                    {" "}
                    Daniel Ayandiran
                </span>{" "}
                With 3+ years in web development, I specialize in front-end,
                turning designs into seamless, interactive experiences. My focus
                is on clean and efficient code, staying current with industry
                trends to deliver cutting-edge solutions. Let's bring your
                digital vision to life!
            </p>
            <div className="flex gap-[18px] mt-[54px] lg:flex-col lg:items-center lg:justify-center ">
                <a href="tel:07775221852" className="self-center w-[100%] lg:flex lg:justify-center">
                    <button className=" text-[21px] py-[16px] px-[30px] bg-[white] text-[#161513] rounded-[50px] font-[600]">
                        Get in touch
                    </button>
                </a>
                <a href="AYANDIRANDANIELOLUWANIFEMIRESUME.pdf">
                    <button className=" text-[21px] py-[16px] px-[30px] border-2 border-solid border-white  text-white rounded-[50px]">
                        Download CV
                    </button>
                </a>
            </div>

            <p className="text-[#C5C5C5] text-[20px] mt-[88px] font-[600]">
                EXPERIENCE WITH
            </p>

            <div className="grid grid-cols-[repeat(4,auto)] mt-[48px]">
                {icons.map((icon, index) => (
                    <Image
                        src={icon}
                        alt=""
                        key={index}
                        className="w-[72px] h-[72px] cursor-pointer card-hover"
                    />
                ))}
            </div>
        </div>
    );
}
