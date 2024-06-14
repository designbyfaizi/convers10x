"use client";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const dropdownList = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "About Us",
    href: "/about",
  },
  {
    id: 2,
    name: "Contact Us",
    href: "/contact",
  },
];

const fadeUpAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: () => ({
    opacity: 1,
    transition: {},
  }),
};

function DropdownNav({
  dropdownOpen,
  setDropdownOpen,
}: {
  dropdownOpen: boolean;
  setDropdownOpen: (dropdownOpen: boolean) => void;
}) {
  const pathname = usePathname();
  useEffect(() => {
    console.log({ pathname });
    setDropdownOpen(false);
  }, [pathname]);

  if (dropdownOpen) {
    return (
      <motion.div
        variants={fadeInAnimationVariants}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className="fixed w-screen h-dvh left-0 top-0 z-50"
      >
        <div className="fixed w-full h-dvh bg-neutral-950/80 backdrop-blur-lg"></div>
        <div className="flex flex-col items-end gap-4 conversion-container py-4">
          <button
            onClick={() => setDropdownOpen(false)}
            className="relative z-[60] aspect-square p-2 m-2 bg-neutral-900 rounded-full text-neutral-400 hover:bg-neutral-700"
          >
            <Cross />
          </button>
          <ul className="dropdown w-full min-w-[240px] flex flex-col gap-4 relative z-[60] bg-neutral-800 text-neutral-300 rounded-xl p-2 py-4 max-w-[320px]">
            {dropdownList.map((item, index) => {
              return (
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  key={item.id}
                  className=""
                >
                  <Link
                    className="p-4 text-2xl hover:text-accent transition-all duration-75"
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    );
  }
  return null;
}

const Cross = (props?: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="m6 6l12 12m0-12L6 18"
      />
    </svg>
  );
};

export default DropdownNav;
