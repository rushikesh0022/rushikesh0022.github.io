"use client";

import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

interface TypewriterWrapperProps {
  onTypeComplete?: () => void;
}

export default function TypewriterWrapper({ onTypeComplete }: TypewriterWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex items-center gap-2">
        <span>whoami</span>
        <span className="animate-pulse">_</span>
      </div>
    );
  }

  return (
    <TypewriterComponent
      options={{ cursor: "_" }}
      onInit={(typewriter) => {
        typewriter
          .typeString("whoami")
          .callFunction(() => onTypeComplete?.())
          .start();
      }}
    />
  );
}
