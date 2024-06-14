"use client";

import React, { useState, useEffect, ReactNode } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import useMouseInElement from "@/hooks/useMouseInElement";
import { Variants, motion } from "framer-motion";

function BgCursor({ children }: { children: ReactNode }) {
  const { x, y } = useMousePosition();
  const [isMouseInElement, setIsMouseInElement] = useState(true);
  //   const isMouseInElement = useMouseInElement(backdrop);
  //   const variants: Variants | undefined = {
  //     default: {
  //       x: x - 200,
  //       y: y - 200,
  //       position: "fixed",
  //     },
  //   };

  return (
    <div
      onMouseEnter={() => setIsMouseInElement(true)}
      onMouseLeave={() => setIsMouseInElement(false)}
      className="min-w-full min-h-dvh"
    >
      {isMouseInElement && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, easings: ["easeIn", "easeOut"] }}
          style={{
            left: x - 200,
            top: y - 200,
            position: "fixed",
          }}
          className="cursor animate-spinny w-[400px] h-[400px] bg-gradient-to-r from-rose-500 via-orange-300 to-cyan-300 rounded-full pointer-events-none"
        ></motion.div>
      )}
      <div className="backdrop w-screen h-dvh fixed left-0 top-0 bg-background/10 backdrop-blur-[100px] pointer-events-none"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BgCursor;
