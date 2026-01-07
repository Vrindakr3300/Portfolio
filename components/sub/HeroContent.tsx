"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
                        <div className="hidden md:flex flex-row items-center md:gap-5 gap-1">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]">
                                            Software Developer
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>

                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]">
                                            Frontend Engineer
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>

                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]">
                                            Problem Solver
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>
                        </div>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                                >
                                    <span>
                                        Hi, I’m
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                            {" "}Vrinda Kumar{" "}
                                        </span>
                                        <br />
                                        Software Developer building
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                            {" "}modern & scalable applications{" "}
                                        </span>
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-sm md:text-md text-gray-400 my-5 max-w-[650px] z-30"
                                >
                                    <li>B.Tech Computer Science Student</li>
                                    <li>Strong foundation in DSA, OOPS, and SQL</li>
                                    <li>Experience with React, Next.js, and Tailwind CSS</li>
                                    <li>Actively seeking Software Developer opportunities</li>
                                </motion.div>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.a
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    href="#about"
                                    variants={slideInFromLeft(1)}
                                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
                                >
                                    About Me
                                </motion.a>
                            )}
                        </InView>
                    </div>

                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
                            >
                                <Image
                                    src="/mainIconsdark.svg"
                                    alt="Vrinda Kumar"
                                    height={650}
                                    width={650}
                                />
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;
