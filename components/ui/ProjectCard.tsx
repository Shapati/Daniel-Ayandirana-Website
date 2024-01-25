import { images } from "@/images/images";
import Image from "next/image";
import React from "react";

type CardType = {
    image: any;
    title: string;
    link: string;
};

export default function ProjectCard({ image, title, link }: CardType) {
    const { arr } = images();
    return (
        <a href={link} className="mb-[30px] cursor-pointer card-hover w-[100%]" target="_blank">
            <div className="bg-[#2A2A2A] rounded-[18px] overflow-hidden w-[390px] pb-[14px] lg:w-[100%] ">
                <Image src={image} alt="" className="w-[100%] lg:w-[100vw]" />
                <div className="flex justify-between w-[90%] mx-auto mt-[12px]">
                    <div>
                        <p className="text-[10px] font-[800] text-[#C5C5C5]">
                            CLICK HERE TO VISIT
                        </p>
                        <p className="text-[19px] font-[800] text-[white]">
                            {title}
                        </p>
                    </div>
                    <Image src={arr} alt="" />
                </div>
            </div>
        </a>
    );
}
