import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
}
