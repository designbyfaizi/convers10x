"use client";

import { useState, useEffect, MutableRefObject } from "react";

function useMouseInElement(ref: MutableRefObject<any>) {
  const [isMouseInElement, setIsMouseInElement] = useState(false);

  useEffect(() => {
    console.log({ isMouseInElement });
  }, [isMouseInElement]);

  useEffect(() => {
    const element = ref.current;

    const handleMouseEnter = () => setIsMouseInElement(true);
    const handleMouseLeave = () => setIsMouseInElement(false);

    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [ref]);

  return isMouseInElement;
}

export default useMouseInElement;
