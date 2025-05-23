'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skeleton from "../components/SkeletonLoader";
import MotionWrapper from "../components/MotionWrapper";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: 'easeOut',
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const StarBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0], scale: [1, 1.5, 1] }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: Math.random() * 5,
          ease: "easeInOut"
        }}
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)'
        }}
      />
    ))}
  </div>
);

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black min-h-screen relative">
      <StarBackground />

      <div className="relative z-10">
        <Navbar />

        {loading ? (
          <Skeleton />
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-16"
          >
            <MotionWrapper delay={0}>
              <motion.section className="max-w-6xl mx-auto px-6 py-20 text-gray-400">
                <motion.h2
                  variants={fadeInUp}
                  className="text-sm mb-6 text-center text-green-500"
                >
                  GET IN TOUCH
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-400 font-bold text-4xl mb-20 max-w-xl mx-auto text-center"
                >
                  Contact Information
                </motion.p>


                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  {/* Left Column: Office Info + Hours */}
                  <div className="space-y-8">
                    <div className="bg-[#1A1A1A] p-6 rounded-lg space-y-3">
                      <h4 className="font-semibold text-lg mb-2">Head office</h4>

                      <div className="flex items-start gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-green-500 mt-1" />
                        <p>88-90 Hatton Garden, London, EC1N 8PN</p>
                      </div>

                      <div className="flex items-start gap-3 text-gray-300">
                        <FaPhoneAlt className="text-green-500 mt-1" />
                        <p>+234 903 651 9766</p>
                      </div>

                      <div className="flex items-start gap-3 text-gray-300">
                        <FaEnvelope className="text-green-500 mt-1" />
                        <p>support@cassidyfx.com</p>
                      </div>
                    </div>

                    <div className="bg-[#1A1A1A] p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-4">Opening hours</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li><strong>Monday:</strong> 8:00 – 17:00</li>
                        <li><strong>Tuesday:</strong> 8:00 – 17:00</li>
                        <li><strong>Wednesday:</strong> 8:00 – 17:00</li>
                        <li><strong>Thursday:</strong> 8:00 – 17:00</li>
                        <li><strong>Friday:</strong> 8:00 – 17:00</li>
                        <li><strong>Saturday:</strong> 10:00 – 16:00</li>
                        <li><strong>Sunday:</strong> CLOSED</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Form */}
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col space-y-6"
                  >
                    <h4 className="text-gray-400 text-sm mb-2">Your name</h4>
                    <Input
                      type="text"
                      className="bg-gray-800/50 text-gray-400 h-12"
                    />

                    <h4 className="text-gray-400 text-sm mb-2">Your email</h4>
                    <Input
                      type="email"
                      className="bg-gray-800/50 text-gray-400 h-12"
                    />

                    <h4 className="text-gray-400 text-sm mb-2">Your Message</h4>
                    <Textarea
                      rows={5}
                      className="bg-gray-800/50 text-gray-400 h-52"
                    />
                    <Button className="bg-green-500 hover:bg-green-500 py-6 text-lg rounded-full">
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </motion.section>
            </MotionWrapper>

            <MotionWrapper delay={0.6}>
              <section className="max-w-7xl mx-auto px-6">
                <motion.div variants={fadeInUp}>
                <motion.h2
                  variants={fadeInUp}
                  className="text-sm text-center text-green-500"
                >
                  HOW TO FIND US
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-400 font-bold text-4xl mb-10 max-w-xl mx-auto text-center"
                >
                  Find our office
                </motion.p>
                  <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-gray-700">
                    <iframe
                      title="CassidyFX Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19858.095776864386!2d-0.1109286!3d51.519926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4d9677b109%3A0x36e282902622b876!2sHatton%20Garden%2C%20London%20EC1N%208PN%2C%20UK!5e0!3m2!1sen!2sng!4v1713896462914!5m2!1sen!2sng"
                      className="w-full h-full"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </motion.div>
              </section>
            </MotionWrapper>


            <MotionWrapper delay={0.3}>
              <Footer />
            </MotionWrapper>
          </motion.div>
        )}
      </div>
    </main>
  );
}

export default Page;
