'use client'

import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';

function Navbar() {
    return (
        <motion.nav
            className="flex justify-between items-center py-6 px-8 md:px-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="text-2xl font-bold text-gray-400">
                <Link href="/"> <Image src="/images/CassidyLogo.jpeg" alt="Logo" width={300} height={300} /></Link>
            </div>

            <ul className="hidden md:flex space-x-8 text-gray-400 text-sm ">
                <li className='hover:text-green-500'><Link href="#about">About Us</Link></li>
                <li className='hover:text-green-500'><Link href="#whyus">Why Us</Link></li>
                <li className='hover:text-green-500'><Link href="#testimonials">Testimonials</Link></li>
                <li className='hover:text-green-500'><Link href="/ContactUs">Contact Us</Link></li>
            </ul>
        </motion.nav>
    )
}

export default Navbar