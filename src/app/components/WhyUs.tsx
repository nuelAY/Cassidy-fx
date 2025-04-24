'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import React from 'react';

function WhyUs() {
    const cards = [
        {
            title: "Trusted and Secure",
            description: "Your peace matters. We use top-tier security measures and provide clear, upfront details with no hidden fees."
        },
        {
            title: "Fast & Reliable",
            description: "Say goodbye to delays — our system is built for quick, hassle-free exchanges you can count on."
        },
        {
            title: "Competitive Exchange Rates",
            description: "We offer some of the best market rates, ensuring you get maximum value for your money."
        }
    ];

    return (
        <section id="whyus" className="py-20 px-8 md:px-16 text-center text-gray-400">
            <motion.h3
                className="text-sm font-semibold text-green-500 mb-2 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Why CassidyFX
            </motion.h3>

            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                What Sets Us Apart
            </motion.h2>

            <motion.p
                className="max-w-3xl mx-auto mb-12 text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                At CassidyFX, we prioritize trust, speed, and value in every transaction. Whether you’re buying or selling Naira and Pounds, our goal is to provide a smooth, secure, and customer-first experience that sets us apart in the FX market.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                    >
                        <Card className={`p-6 rounded-2xl shadow-lg ${
                            idx === 1 ? 'bg-green-500 text-black' : 'bg-gray-900 text-gray-400'
                        }`}>
                            <CardContent>
                                <div className="mb-4">
                                    <div className="w-10 h-10 mx-auto rounded-full bg-black flex items-center justify-center">
                                        {/* Replace with icons if available */}
                                        <span className="text-2xl">
                                            {idx === 0 ? '🛡️' : idx === 1 ? '📈' : '⚙️'}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                                <p className={idx === 1 ? 'text-black' : 'text-gray-400'}>
                                    {card.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default WhyUs;
