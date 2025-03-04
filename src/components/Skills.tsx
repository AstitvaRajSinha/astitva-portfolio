import React from "react";
import { Button } from "./ui/button";
const skills = [
  // Programming Languages
  { name: "Java", hover: "hover:bg-[#f89820]", border: "border-[#f89820]" },
  { name: "C++", hover: "hover:bg-[#00599C]", border: "border-[#00599C]" },
  { name: "Python", hover: "hover:bg-[#4B8BBE]", border: "border-[#4B8BBE]" },
  {
    name: "JavaScript",
    hover: "hover:bg-[#F7DF1E]",
    border: "border-[#F7DF1E]",
  },
  {
    name: "TypeScript",
    hover: "hover:bg-[#3178C6]",
    border: "border-[#3178C6]",
  },

  // Frontend
  { name: "React", hover: "hover:bg-[#61DBFB]", border: "border-[#61DBFB]" },
  { name: "Next.js", hover: "hover:bg-[#5C4EE5]", border: "border-[#5C4EE5]" },
  { name: "HTML", hover: "hover:bg-[#E34F26]", border: "border-[#E34F26]" },
  { name: "CSS", hover: "hover:bg-[#1572B6]", border: "border-[#1572B6]" },
  { name: "Tailwind", hover: "hover:bg-[#38B2AC]", border: "border-[#38B2AC]" },
  {
    name: "Bootstrap",
    hover: "hover:bg-[#7952B3]",
    border: "border-[#7952B3]",
  },

  // Backend & Database
  { name: "Node.js", hover: "hover:bg-[#339933]", border: "border-[#339933]" },
  {
    name: "Express.js",
    hover: "hover:bg-[#808080]",
    border: "border-[#808080]",
  },
  { name: "MongoDB", hover: "hover:bg-[#47A248]", border: "border-[#47A248]" },
  { name: "MySQL", hover: "hover:bg-[#4479A1]", border: "border-[#4479A1]" },
  {
    name: "PostgreSQL",
    hover: "hover:bg-[#336791]",
    border: "border-[#336791]",
  },
  { name: "Firebase", hover: "hover:bg-[#FFCA28]", border: "border-[#FFCA28]" },

  // Development Concepts
  {
    name: "Data Structures",
    hover: "hover:bg-[#FF6B6B]",
    border: "border-[#FF6B6B]",
  },
  {
    name: "Algorithms",
    hover: "hover:bg-[#4EA8DE]",
    border: "border-[#4EA8DE]",
  },

  // Tools & Others
  { name: "Git", hover: "hover:bg-[#F05032]", border: "border-[#F05032]" },
  { name: "GitHub", hover: "hover:bg-[#6e5494]", border: "border-[#6e5494]" },
  { name: "EJS", hover: "hover:bg-[#90A93A]", border: "border-[#90A93A]" },
  {
    name: "Socket.IO",
    hover: "hover:bg-[#707070]",
    border: "border-[#707070]",
  },
  { name: "Postman", hover: "hover:bg-[#FF6C37]", border: "border-[#FF6C37]" },
  { name: "Vercel", hover: "hover:bg-[#5F6368]", border: "border-[#5F6368]" },
  { name: "Netlify", hover: "hover:bg-[#00C7B7]", border: "border-[#00C7B7]" },
  { name: "Linux", hover: "hover:bg-[#FCC624]", border: "border-[#FCC624]" },

  // IDEs & Editors
  { name: "VS Code", hover: "hover:bg-[#007ACC]", border: "border-[#007ACC]" },
  { name: "IntelliJ", hover: "hover:bg-[#FC801D]", border: "border-[#FC801D]" },
  { name: "PyCharm", hover: "hover:bg-[#21D789]", border: "border-[#21D789]" },
];
const Skills = () => {
  return (
    <div  id="skills" className="h-[50rem] w-full dark:bg-black bg-white text-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <div className="">
          <div className="p-4 max-w-6xl mx-auto">
            <div className="text-center py-4">
              <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white font-semibold">
                <span className="text-teal-500 font-light">&lt;</span>
                Skills
                <span className="text-teal-500 font-light">/&gt;</span>
              </h2>
              <p className="px-2 text-sm ">
                Honestly, I used some only once :)
              </p>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-4 md:gap-7 md:mx-6 pt-8 md:pt-16">
              {skills.map((skill, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`border-[0.5px] ${skill.border} text-teal-300 text-sm sm:text-lg md:text-xl ${skill.hover}`}
                >
                  {skill.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
