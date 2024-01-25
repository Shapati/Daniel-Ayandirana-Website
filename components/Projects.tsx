import { images } from "@/images/images";
import React from "react";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
    const { e1, e2, e3, e4 } = images();
    const projects = [
        {
            image: e1,
            title: "QEVOLT WEBSITE",
            link: "https://qevolt-v1.netlify.app/",
        },
        {
            image: e2,
            title: "QEVOLT WEB APP",
            link: "https://app.qevolt.com",
        },
        {
            image: e3,
            title: "KOLE WEBSITE",
            link: "https://getkole.co",
        },
        {
            image: e3,
            title: "KOLE WEB APP",
            link: "https://app.getkole.co",
        },
        {
            image: e4,
            title: "LMS PLATFORM",
            link: "https://course-rouge-nine.vercel.app/",
        },
    ];

    return (
        <div className="w-[1200px] mx-auto mt-[100px] 1xl:w-[90%]">
            <h1 className="text-[35px] text-[white] font-[800] text-center mb-[27px] red-clip">
                PROJECTS
            </h1>
            <div className="grid grid-cols-[repeat(3,auto)] justify-between gap-[30px] 1xl:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(1,auto)] lg:w-[100%]">
                {projects.map((project, index) => (
                    <ProjectCard
                        image={project.image}
                        title={project.title}
                        link={project.link}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
