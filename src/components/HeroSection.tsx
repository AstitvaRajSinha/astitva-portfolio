import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";
import Image from "next/image";
// import { FloatingDockDemo } from "./FloatingIcons";
import img1 from "../../public/logo.jpg";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { RiUnsplashFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";



function HeroSection() {
  const words = ["Frontend", "Data Structures", "Backend"];
  return (
    <div className="h-auto md:h-screen w-full flex flex-col md:flex-row items-center justify-center rounded-md relative overflow-hidden mx-auto  py-24 md:py-0">
      <Spotlight />
      {/* Image for large screens only */}
      <div className="md:order-2 hidden md:block md:mb-0">
        <Image
          src={img1}
          alt="image"
          width={10000}
          height={10000}
          className="hidden rounded-3xl size-96  md:block p-4"
        />
        <div className="hidden md:flex justify-evenly">
          <Link href="/https://github.com/AstitvaRajSinha">
            <IoLogoGithub size={30} className="text-gray-500 hover:text-[#6e5494]" />
          </Link>
          <Link href={"https://x.com/AstitvaRajSinha"}>
          <FaXTwitter size={30} className="text-gray-500 hover:text-blue-700" />
          </Link>
          <Link href={"https://www.linkedin.com/in/astitvarajsinha/"}>
          
          <IoLogoLinkedin size={30} className="text-gray-500 hover:text-[#0a66c2] " />
          </Link>
          <Link href={"https://unsplash.com/@astitva_raj"}>
          <RiUnsplashFill size={30} className="text-gray-500 hover:text-white" />
          
          </Link>

        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-full text-center md:text-left p-6 md:pl-16">
        <h1 className="mt-10 md:mt-0 text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <span className="text-gray-400 text-xl md:text-2xl">
            console.log<span className="text-tea">{"(intro)"}</span>{" "}
            <span className="text-teal-500"></span>
          </span>
          <br />
          <span className="font-bold text-gray-300">
            Astitva{" "}
            <span className="bg-gradient-to-r from-teal-700 to-teal-400 text-transparent bg-clip-text">
              Raj Sinha.
            </span>
          </span>
        </h1>

        <h2 className="text-lg md:text-xl text-teal-500 mt-2">
          &lt;Full Stack Developer/&gt;
        </h2>

        <div className="mt-6 text-sm font-normal md:text-base text-gray-400 max-w-3xl">
          <p>
            I break things (intentionally😏) and then put them back
            together—better!! As a Full Stack Developer, I live at the
            intersection of creativity and logic, turning caffeine into clean
            code. From sleek frontends to robust backends
          </p>
          <p className="mt-4">
            I’m all about crafting digital experiences that don’t just work—they
            wow.✨
          </p>
          <p className="mt-4">
            When I’m not taming code or debugging the universe, you’ll find me
            experimenting..
            <Link href="/about" className="text-teal-500 hover:underline">
              Read more
            </Link>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center md:justify-start  gap-8">
          <div>
            <Link href="https://wa.me/8709059331">
              <button className="bg-teal-700 text-sm rounded-[1.75rem] relative h-14 w-32 p-[1px] overflow-hidden">
                CallMe{"()"}
              </button>
            </Link>
          </div>

          <Link href="/AstitvaRajSinha.pdf" download>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-teal-700 border-neutral-200 hover:text-teal-700 dark:border-slate-800"
            >
              Get Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
