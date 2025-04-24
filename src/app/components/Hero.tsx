'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from 'react'
import Link from "next/link";

const bounceTransition = {
    y: {
        duration: 2,
        yoyo: Infinity,
        ease: 'easeOut',
    },
};

function Hero() {
    return (

        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Floating Sparkles */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-400/20 via-transparent to-transparent blur-3xl animate-pulse" />
            </div>

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-gray-400 text-4xl md:text-6xl font-bold leading-tight relative z-10"
            >
                The Future of FX <br /> Trading
            </motion.h1>

            {/* Contact Button */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                className="mt-6 relative z-10"
            >

                <Link href="/ContactUs" passHref>
                    <Button className="bg-green-500 hover:bg-green-500  font-semibold px-6 py-3 rounded-lg">
                        Contact Us
                    </Button>
                </Link>
            </motion.div>

            {/* Phone Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                className="relative mt-16 z-10"
            >
                <Image
                    src="/images/trading.jpg"
                    alt="Phone showing CassidyFX trading app"
                    width={1000}
                    height={600}
                    className="mx-auto"
                />
            </motion.div>

            {/* Floating Avatars */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={bounceTransition}
                className="absolute top-10 left-8 z-20"
            >
                <Image
                    src="/images/shocked.jpg"
                    alt="Person 1"
                    width={70}
                    height={70}
                    className="rounded-full border-2 border-white"
                />
            </motion.div>

            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ ...bounceTransition, delay: 0.3 }}
                className="absolute top-20 right-8 z-20"
            >
                <Image
                    src="/images/smile.jpg"
                    alt="Person 2"
                    width={70}
                    height={70}
                    className="rounded-full border-2 border-white"
                />
            </motion.div>

            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ ...bounceTransition, delay: 0.6 }}
                className="absolute bottom-32 left-10 z-20"
            >
                <Image
                    src="/images/phone.jpg"
                    alt="Person 3"
                    width={70}
                    height={70}
                    className="rounded-full border-2 border-white"
                />
            </motion.div>

            {/* Floating Dotted Path SVG */}
            <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full pointer-events-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M 100 100 C 300 50, 400 300, 600 200"
                    stroke="#FFFFFF55"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                />
            </motion.svg>
        </section>
    )
}

export default Hero