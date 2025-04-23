'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import React from 'react'

const testimonials = [
    {
        name: "Kelechi O.",
        location: "London",
        text: "CassidyFX is my go-to for currency exchange. Their rates are always fair, and the service is unbelievably fast!",
    },
    {
        name: "Tolu A.",
        location: "London",
        text: "I was nervous about exchanging large sums, but CassidyFX made it easy and secure. Highly recommended.",
    },
    {
        name: "Chinedu M.",
        location: "Abuja",
        text: "What sets CassidyFX apart is their honesty and transparency. No hidden charges, just smooth transactions.",
    },
];

function Testimonials() {
    return (
        <section id="testimonials" className="py-20 px-8 md:px-16 text-center">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-2 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                TESTIMONIALS
            </motion.h2>
            
            <motion.h3
                className="text-xl md:text-2xl mb-10 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                What people say
            </motion.h3>

            <motion.p 
                className="text-gray-300 max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Our customer satisfaction is at the heart of everything we do. Don&apos;t just take our word for it—hear from real clients who trust us for fast, secure, and reliable Naira and Pound exchange services.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                    >
                        <Card className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg min-h-[250px]">
                            <CardContent className="flex flex-col h-full">
                                <div className="flex justify-center mb-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 flex-grow">&quot;{testimonial.text}&quot;</p>
                                <div>
                                    <p className="text-sm font-semibold">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials