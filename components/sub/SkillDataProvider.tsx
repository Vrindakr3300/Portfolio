"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    skillName: string;
}

const SkillDataProvider = ({
    src,
    width,
    height,
    index,
    skillName,
}: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const animationDelay = 0.15;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ delay: index * animationDelay, duration: 0.4 }}
            className="flex flex-col items-center justify-center gap-2"
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt={skillName}
            />
            <p className="text-sm text-gray-300 text-center">
                {skillName}
            </p>
        </motion.div>
    );
};

export default SkillDataProvider;
