"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Progressive loading with more realistic timing
    let interval: NodeJS.Timeout;
    
    const startLoading = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoaded(true);
              setTimeout(() => {
                setIsComplete(true);
                setTimeout(onComplete, 600);
              }, 1000);
            }, 600);
            return 100;
          }
          
          // Realistic loading curve
          if (prev <= 50) {
            return prev + Math.round(Math.random() * 5) + 2;
          } else if (prev <= 90) {
            return prev + Math.round(Math.random() * 2) + 1;
          } else {
            return prev + Math.round(Math.random());
          }
        });
      }, 120);
    };

    startLoading();
    return () => clearInterval(interval);
  }, [onComplete]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)"
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-50 bg-black overflow-hidden cursor-none"
          onMouseMove={handleMouseMove}
        >
          {/* Mouse Follower */}
          <motion.div
            className="absolute w-6 h-6 border border-white/20 rounded-full pointer-events-none z-50"
            style={{
              left: mousePos.x - 12,
              top: mousePos.y - 12,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Background Pattern */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 2 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-8 left-8 right-8 flex justify-between items-center"
          >
            <div className="text-white/40 text-sm tracking-[0.2em] font-light">
              PORTFOLIO
            </div>
            <div className="text-white/40 text-sm tracking-[0.2em] font-light">
              2025
            </div>
          </motion.div>

          {/* Marquee Text */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="whitespace-nowrap"
            >
              <span className="text-[12rem] md:text-[16rem] font-thin text-white/5 tracking-[0.1em]">
                RUSHIKESH — RUSHIKESH — RUSHIKESH — 
              </span>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center space-y-8"
            >
              {/* Loading Button */}
              <motion.div
                className={`relative group ${isLoaded ? 'pointer-events-none' : 'cursor-pointer'}`}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                }}
              >
                <div className="relative border border-white/10 rounded-none p-12 backdrop-blur-sm">
                  {/* Progress Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent"
                    style={{
                      background: `linear-gradient(90deg, 
                        rgba(255,255,255,0.3) 0%, 
                        rgba(255,255,255,0.3) ${progress}%, 
                        rgba(255,255,255,0.05) ${progress}%, 
                        rgba(255,255,255,0.05) 100%
                      )`,
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'subtract',
                      maskComposite: 'subtract',
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      key={Math.floor(progress / 5)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-white text-4xl font-light tracking-[0.2em]"
                    >
                      {isLoaded ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-white/80"
                        >
                          WELCOME
                        </motion.span>
                      ) : (
                        <span className="tabular-nums">
                          LOADING {Math.floor(progress)}%
                        </span>
                      )}
                    </motion.div>
                    
                    {!isLoaded && (
                      <motion.div
                        className="mt-4 text-white/40 text-sm tracking-[0.3em] font-light"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        CLICK TO CONTINUE
                      </motion.div>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.05) 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>

              {/* Progress Dots */}
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-white/20 rounded-full"
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-8 right-8 flex justify-between items-center"
          >
            <div className="text-white/30 text-xs tracking-[0.2em] font-light">
              FULL-STACK DEVELOPER
            </div>
            <div className="text-white/30 text-xs tracking-[0.2em] font-light">
              AI & ML ENTHUSIAST
            </div>
          </motion.div>

          {/* Corner Accents */}
          {[
            { position: "top-4 left-4", rotate: "0deg" },
            { position: "top-4 right-4", rotate: "90deg" },
            { position: "bottom-4 left-4", rotate: "-90deg" },
            { position: "bottom-4 right-4", rotate: "180deg" },
          ].map((corner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
              className={`absolute ${corner.position}`}
              style={{ transform: `rotate(${corner.rotate})` }}
            >
              <div className="w-4 h-4 border-l border-t border-white/20" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
