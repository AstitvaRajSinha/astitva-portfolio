import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
 

const Projects = () => {
  return (
    <>
      <div className="text-center py-8  bg-zinc-950">
        <div className="text-center py-4">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white font-semibold">
            <span className="text-teal-500 font-light">&lt;</span>
            Projects
            <span className="text-teal-500 font-light">/&gt;</span>
          </h2>
          <p className="px-2 text-sm md:text-base ">
          Stuff I Built (And Didn’t Break... Much)          </p>
        </div>
        <div className="mb-8 p-4">
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </>
  );
};
export default Projects;

const Skeleton = ({ src, alt }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const items = [
  {
    title: "Devlance",
    description: "A freelance websites for Developers",
    header: (
      <Skeleton
        src="devlance.jpg"
        alt="Innovation"
      />
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Connectify",
    description: "A community platform for connecting to health-experts ",
    header: (
      <Skeleton
        src="connectify.jpg"
        alt="Digital Revolution"
      />
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YC Directory",
    description: "Platform to share your Start-Up ideas.",
    header: (
      <Skeleton
        src="ycdirectory.png"
        alt="Art of Design"
      />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bookify",
    description:
      "A book reslling platform",
    header: (
      <Skeleton
        src="bookify.jpg"
        alt="Communication"
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
