'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CTA() {
    return (
        <section className="relative py-20 bg-gray-400/10 border border-gray-400/30 rounded-2xl px-8 md:px-16 text-center backdrop-blur-sm overflow-hidden">
            {/* Star background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.3, 0],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.3,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div 
                className="relative flex flex-col items-center justify-center gap-8 z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.h2 
                    className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Start your FX Trading<br />now.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Link href="/ContactUs">
                        <Button className="bg-purple-600 hover:bg-purple-700 px-10 py-6 rounded-full text-white text-xl font-semibold">
                            Contact Us
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default CTA