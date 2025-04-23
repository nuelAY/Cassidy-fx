
'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react'

function About() {
    return (
        <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10 p-8 md:p-20 relative overflow-hidden">

            {/* Left Image with Background Shapes */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full md:w-1/2 flex justify-center items-center"
            >
                {/* Green Triangle background */}
                <div className="absolute -left-10 top-10 w-72 h-72 bg-green-400/30 clip-triangle rotate-12" />

                {/* Glow Star Shape */}
                <div className="absolute left-4 top-0 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl" />

                {/* Person Image */}
                <Image
                    src="/images/excited.jpg"
                    alt="Excited Trader"
                    width={350}
                    height={350}
                    className="relative z-10"
                />
            </motion.div>

            {/* Right Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="text-center md:text-left w-full md:w-1/2"
            >
                <p className="text-sm text-yellow-400 uppercase font-semibold tracking-widest mb-2">
                    About CassidyFX
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-snug">
                    Trade with a New <br /> Way in the World
                </h2>
                <p className="text-gray-400 text-base leading-relaxed">
                    CassidyFX is a trusted foreign exchange service specializing
                    in the seamless sales and purchase of Nigerian Naira and
                    British Pounds. We offer competitive exchange rates, fast
                    transactions, and secure payment options to individuals and
                    businesses alike.
                </p>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-400/20 via-transparent to-transparent blur-3xl animate-pulse" />
            </div>
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

export default About