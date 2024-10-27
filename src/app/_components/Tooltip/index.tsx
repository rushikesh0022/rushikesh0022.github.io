import React from "react";

export default function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <div className="relative group inline-block">
      <span>{children}</span>
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max p-2 text-sm text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </div>
    </div>
  );
}
