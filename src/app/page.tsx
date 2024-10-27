"use client";

import { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import Tooltip from "./_components/Tooltip";
import { skillBadges } from "@/lib/data";

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="flex items-center h-full max-w-3xl mx-auto">
      <div className="flex flex-col items-start gap-16">
        <div>
          <div className="flex items-center gap-2 pb-6 text-gray-300">
            <span className="text-gray-600">$</span>
            <TypewriterComponent
              options={{ cursor: "_" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("whoami")
                  .callFunction(() => setIsRevealed(true))
                  .start();
              }}
            />
          </div>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              <h1 className="inline-block text-3xl font-bold shadow-lg bg-gray-200 text-black py-1 px-2 rounded">
                triassic
              </h1>
              <p className="mt-6">
                Linux system administrator, open-source software advocate &amp;
                front-end web developer from Latvia.
              </p>
              <div className="flex gap-4 mt-6 text-3xl">
                {skillBadges.map(({ name, icon: Icon }) => (
                  <div key={name} className="relative group">
                    <Tooltip text={name}>
                      <Icon className="transition duration-300 text-gray-500 group-hover:text-gray-200" />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="border border-gray-800 bg-black shadow-gray-900 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              >
                <h2 className="text-xl font-bold mb-2">Card {index + 1}</h2>
                <p className="text-gray-600">
                  This is description for card {index + 1}. Will display blog
                  post excerpt here once implemented.
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
