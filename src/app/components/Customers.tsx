'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react';

function Customers() {
    return (
        <section className="py-20 px-8 md:px-16 text-gray-400">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - map placeholder */}
                <div className="flex justify-center">
                    {/* Ideally replace this with an actual map/graphic component or image */}
                    <div className="w-full h-64 bg-center bg-no-repeat bg-contain">
                        <Image
                            src="/images/earth.jpg"
                            alt="Excited Trader"
                            width={650}
                            height={650}
                            className="relative z-10"
                        />
                    </div>
                </div>

                {/* Right side - text content */}
                <div>
                    <motion.p
                        className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        People Trust Us
                    </motion.p>

                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hundreds of Customers<br />around the world
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        People trust us because we deliver secure, transparent, and hassle-free currency exchange they can rely on—every time.
                    </motion.p>

                    <div className="flex gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-green-500">2K</h3>
                            <p className="text-gray-400">Customers</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-green-500">100%</h3>
                            <p className="text-gray-400">Satisfaction</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Customers;
