'use client';

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black/30 backdrop-blur-lg py-16 px-8 md:px-16 border-t border-gray-700/50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-gray-400"
                >
                    <div className="text-2xl font-bold text-gray-400">
                        <Link href="/"> <Image src="/images/CassidyLogo.jpeg" alt="Logo" width={300} height={300} /></Link>
                    </div>
                    <p className="text-gray-300 mt-5">
                        At CassidyFX, we bridge the gap between Nigeria and the UK with friendliness and efficiency,
                        making cross-border currency exchange simple and secure.
                    </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-gray-400"
                >
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <address className="text-gray-300 not-italic space-y-1">
                        <p>88-90 Hotline Garden,</p>
                        <p>London, EC1N 8PM</p>
                        <p className="mt-3">Call Us: +258 800 693 9796</p>
                        <p>support@cassidyfx.com</p>
                    </address>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-gray-400"
                >
                    <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                    <div className="flex flex-col space-y-3">
                        <Input
                            placeholder="Your email address"
                            className="rounded-full bg-gray-800/50 border-gray-600/50 text-gray-400 placeholder-gray-400 backdrop-blur-sm"
                        />
                        <Button className="bg-green-500 hover:bg-green-500 rounded-full py-6 text-lg backdrop-blur-sm">
                            Subscribe
                        </Button>
                        <p className="text-xs text-gray-400 mt-1">
                            Sign up to receive the latest updates and news.
                        </p>
                    </div>
                </motion.div>

            </div>

            {/* Copyright */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-center text-sm text-gray-400 mt-16"
            >
                © {new Date().getFullYear()} CassidyFX. All rights reserved.
            </motion.p>
        </footer>
    );
}
