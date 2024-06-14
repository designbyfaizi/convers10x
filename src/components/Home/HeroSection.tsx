"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3dCard";
import Link from "next/link";
import MButton from "../MButton";
import { excon } from "@/app/fonts";
import Button from "@/components/Button";
import { Variants, motion } from "framer-motion";

const cta = [
  {
    text: "Maximize",
    className: "text-center",
  },
  {
    text: "your",
    className: "text-center md:text-left",
  },
  {
    text: "conversion",
    className: "text-center md:text-right",
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
    transition: {
      delay: 1,
      duration: 2,
    },
  }),
};

function HeroSection() {
  return (
    <div className="flex conversion-container flex-col items-center relative">
      <motion.div
        variants={fadeInAnimationVariants}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className="card-motion-container"
      >
        <CardContainer className="">
          <CardBody className="bg-neutral-100/60 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900/30 dark:border-white/[0.2] border-black/[0.1] w-full min-w-[240px] max-w-screen-lg h-auto rounded-3xl p-4 border overflow-hidden">
            <video
              className="aspect-square object-cover rounded-xl"
              width="600"
              height="600"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src="/test.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CardBody>
        </CardContainer>
      </motion.div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <h2
            className={`${excon.className} home-cta-text font-black text-[48px] md:text-[120px] leading-[0.8] flex flex-col text-white w-full sm:min-w-[770px]`}
          >
            {cta.map((_cta, index) => {
              return (
                <motion.span
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  key={_cta.text}
                  custom={index}
                  className={_cta.className}
                >
                  {_cta.text}
                </motion.span>
              );
            })}
            <motion.div
              variants={fadeUpAnimationVariants}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{
                once: true,
              }}
              custom={3}
              className="md:hidden mx-auto"
            >
              <Link href="/about">
                <Button _className="discover text-sm">Discover what we do</Button>
              </Link>
            </motion.div>
          </h2>
          <motion.div
            variants={fadeUpAnimationVariants}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={3}
            className="hidden md:block absolute left-[300px] top-1/2 -translate-y-1/2"
          >
            <Link href="/about">
              <Button _className="discover">Discover what we do</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
