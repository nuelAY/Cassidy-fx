'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "./components/SkeletonLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Customers from "./components/Customers";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MotionWrapper from "./components/MotionWrapper";

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

const StarBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 1]
          }}
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
      
      {/* Larger twinkling stars */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute bg-white rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 7,
            ease: "easeInOut"
          }}
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 15px 3px rgba(255, 255, 255, 0.9)'
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
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
              <Hero />
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <About />
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <WhyUs />
            </MotionWrapper>

            <MotionWrapper delay={0.6}>
              <Customers />
            </MotionWrapper>

            <MotionWrapper delay={0.8}>
              <Testimonials />
            </MotionWrapper>

            <MotionWrapper delay={1.0}>
              <CTA />
            </MotionWrapper>

            <MotionWrapper delay={1.2}>
              <Footer />
            </MotionWrapper>
          </motion.div>
        )}
      </div>
    </main>
  );
}