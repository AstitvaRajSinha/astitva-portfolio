import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
            ✅ Represented my company at industry events—turns out, tech talks
            and coffee make a great combo!!
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs  md:text-[16px] font-normal mb-5">
            ✅ Gone to TechHacks4.0 and Coffee and Code—yes, both caffeine and
            coding are my love. 💚{" "}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
            ✅ Mastered algorithms, full stack wizardry, and system design.
            (Basically, I speak fluent code.)
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
            ✅ Joined The Xiting Way—because ordinary is boring.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
            ✅ Secured a spot in IEEE Chitkara’s web team—because organizing
            tech events is my kind of fun
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
            ✅ Got my hands dirty with personal projects—because side quests are
            the best.{" "}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
            ✅ Fell in love with React.js and Firebase—modern web development?
            Yes, please!{" "}
          </p>
        </div>
      ),
    },
    {
      title: "Late 2022",
      content: (
        <div>
          <div className="mb-4">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
              ✅ Started my coding journey with C/C++ and Python—hello, world
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
              ✅ Conquered the holy trinity: HTML, CSS, and JavaScript.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
              ✅ Built my first personal projects—because theory without
              practice is just... theory.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[16px] font-normal mb-5">
              ✅ Began my Bachelor’s in Computer Science at Chitkara
              University—nerd mode: ON.{" "}
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="py-8 ">
      <div className="text-center py-4">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white font-semibold">
          <span className="text-teal-500 font-light">&lt;</span>
          Experience
          <span className="text-teal-500 font-light">/&gt;</span>
        </h2>
        <p className="px-2 text-sm md:text-base ">
          I&apos;ve been working on for the past 2 years. Here&apos;s a timeline
          of my journey.{" "}
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <Timeline data={data} />
      </div>
    </div>
  );
}
