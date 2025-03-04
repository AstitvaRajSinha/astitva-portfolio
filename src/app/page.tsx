import { Experience } from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
    <HeroSection/>
    <Projects/>
    <Experience/>
    <Skills/>

    <Footer />

    </main>
    </>
  );
}
