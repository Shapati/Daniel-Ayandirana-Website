import { images } from "@/images/images";
import Image from "next/image";
import React from "react";

export default function Experience() {
    const { rw } = images();
    const experiences = [
        {
            title: "Front end developer at Qevolt",
            paragraphs: [
                "Developed a visually appealing and user-friendly interface for the Qevolts website, enhancing overall user experience.",
                "Seamlessly integrated Qevolts web application with Kuda's APIs, ensuring efficient communication between systems.",
                "Created a clean dashboard UI for users to easily verify transactions, promoting transparency and user engagement.",
                "Processed over 30 million naira in transactions within the first 3 months, showcasing robust financial transaction management.",
                "Designed and built a mobile app using React Native, extending platform accessibility and catering to users on the go.",
            ],
        },
        {
            title: "Lead Front end developer at Kólé",
            paragraphs: [
                "Developed a clean and visually appealing user interface for Kólé's website, ensuring an engaging and user-friendly online presence.",
                "Single-handedly built the entire front end web application for Kólé from scratch, employing industry best practices and incorporating unit testing for robust functionality.",
                "Designed and implemented a platform resembling Jira, tailored for construction companies, featuring drag-and-drop functionalities and complex charts for project management.",
                "Contributed to Kólé's successful launch, resulting in a substantial number of subscribers, reflecting the effectiveness and appeal of the developed platform.",
                "Integrated advanced features such as drag-and-drop capabilities and intricate charts, showcasing technical expertise and enhancing the functionality of Kóle's platform.",
            ],
        },
        {
            title: "Front end developer at Aipidata",
            paragraphs: [
                "Developed a Learning Management System (LMS) platform specifically designed to assist immigrants in learning the English language.",
                "Implemented diverse features including voice calls, video calls, and event planners to enhance the learning experience.",
                "Integrated voice calls and video calls within the LMS platform, providing effective communication channels for students and educators.",
                "Created a platform utilizing AI tools to monitor pets' health, including the ability to detect heart rates and other vital health information.",
                "Contributed to advancing pet care through the application of cutting-edge technology.",
                "Implemented event planning functionalities within the LMS platform, facilitating seamless organization and coordination of educational events for immigrants.",
                "Showcased versatility by combining technological solutions for both language education and pet health monitoring, demonstrating adaptability and innovation at Aipidata.",
            ],
        },
    ];
    return (
        <div className="w-[1200px] mx-auto mt-[100px] 1xl:w-[90%]">
            <h1 className="text-[35px] text-[white] font-[800] text-center mb-[27px] blue-clip">
                EXPERIENCE
            </h1>
            <div className="flex flex-col gap-[49px]">
                {experiences.map((val, idx) => (
                    <div key={idx}>
                        <p className=" mb-[23px] text-[white] font-[700] text-[21px] font-[700]">
                            {val.title}
                        </p>
                        <div className="flex flex-col gap-[20px]">
                            {val.paragraphs?.map((para, id) => (
                                <div
                                    className="flex gap-[10px] h-fit "
                                    key={id}
                                >
                                    <Image src={rw} alt="" />
                                    <p className="text-[#8491A0] text-[16px] font-[400] leading-[150%] ">
                                        {para}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
