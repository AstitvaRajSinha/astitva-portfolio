"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";

export default function Page() {
  return (
    <div>

    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
        <div className="text-2xl md:text-5xl font-bold dark:text-white text-center">
            Astitva Raj Sinha
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Will write later.. 😴
        </div>
       
      </motion.div>
    </AuroraBackground>

    
          </div>
  );
}
