"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tooltip from "./_components/Tooltip";
import TypewriterWrapper from "./_components/TypewriterWrapper";
import { skillBadges } from "@/lib/styles/data";

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [jumpingBadges, setJumpingBadges] = useState<string[]>([]);

  const handleClick = (name: string) => {
    if (!jumpingBadges.includes(name)) {
      setJumpingBadges((prev) => [...prev, name]);
      setTimeout(() => {
        setJumpingBadges((prev) => prev.filter((badge) => badge !== name));
      }, 1000);
    }
  };

  return (
    <div className="flex items-center h-full max-w-3xl mx-auto">
      <div className="flex flex-col items-start gap-16">
        <div>
          <div className="flex items-center gap-2 pb-6 text-gray-300">
            <span className="text-gray-600">$</span>
            <TypewriterWrapper onTypeComplete={() => setIsRevealed(true)} />
          </div>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              <h1 className="inline-block text-3xl font-bold shadow-lg bg-gray-200 text-black py-1 px-2 rounded">
                Rushikesh
              </h1>
                  <div className="mt-6 space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Passionate full-stack developer with hands-on experience in AI integration 
                      across various projects. Love building modern web applications and exploring 
                      the intersection of traditional development and artificial intelligence.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Active in competitive coding and always eager to tackle challenging problems. 
                      Enjoy experimenting with the latest technologies and frameworks to stay at 
                      the forefront of web development.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Currently exploring machine learning and data science while maintaining a 
                      genuine passion for full-stack development. Driven by curiosity and constantly 
                      pushing boundaries in both frontend and backend technologies.
                    </p>
                  </div>
              <div className="relative flex gap-4 mt-6 text-3xl h-12">
                {skillBadges.map(({ name, icon: Icon }) => (
                  <motion.div
                    key={name}
                    className="relative group cursor-pointer"
                    onClick={() => handleClick(name)}
                    initial={{ y: 0 }}
                    animate={{
                      y: jumpingBadges.includes(name) ? [0, -10, 0, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                  >
                    <Tooltip text={name}>
                      <Icon className="transition duration-300 text-gray-500 group-hover:text-gray-200" />
                    </Tooltip>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
