"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0E] min-h-[calc(100vh-80px)] flex flex-col lg:flex-row lg:items-center justify-between">
      {/* Ambient Gold Radial Glow Flares */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Top-left subtle flare */}
        <div className="absolute top-10 left-10 w-72 sm:w-96 md:w-[450px] h-72 sm:h-96 md:h-[450px] bg-[#FFB900]/10 rounded-full blur-[130px]" />
        {/* Center-right ambient car glow */}
        <div className="absolute top-1/4 right-0 lg:right-[10%] w-80 sm:w-[500px] lg:w-[700px] h-80 sm:h-[500px] lg:h-[700px] bg-[#FFB900]/15 rounded-full blur-[150px]" />
        {/* Bottom edge glow */}
        <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-[#FFBD37]/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full relative z-20">
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-0">
          {/* Mobile & Tablet Car Display (Rendered at the TOP on mobile devices < lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[460px] sm:max-w-[540px] mx-auto block lg:hidden relative z-10 pt-2 pb-2 order-1"
          >
            <div className="relative w-full aspect-[16/9] flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="Koenigsegg Gold Supercar with Gullwing Doors"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
              />
            </div>
          </motion.div>

          {/* Text Content: Rendered BELOW the car on mobile (order-2), and in left column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-7 z-20"
          >
            {/* Headline with exact line breaks & typography */}
            <h1 className="font-primary text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[1.15] tracking-tight text-white">
              <span className="block">Find Your Perfect</span>
              <span className="block mt-1 sm:mt-2">
                Vehicle{" "}
                <span className="text-[#FFBD37] gold-text-glow">Fast &amp;</span>
              </span>
              <span className="block text-[#FFBD37] gold-text-glow mt-1 sm:mt-2">
                Hassle-Free
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-secondary text-xs sm:text-base md:text-lg text-white/80 max-w-sm sm:max-w-lg lg:max-w-xl font-normal leading-relaxed">
              A clean, modern marketplace designed for effortless browsing, verified listings,
              transparent communication, and fast transactions, built for buyers and sellers who
              value clarity and trust.
            </p>

            {/* Primary CTA Button */}
            <div className="pt-2 sm:pt-4 w-full sm:w-auto">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-[12px] bg-[#FFBD37] hover:bg-[#FFB900] text-[#161618] font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#FFBD37]/25 hover:shadow-2xl hover:shadow-[#FFBD37]/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Your Vehicle Now</span>
                <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#161618] text-[#FFBD37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Supercar Image (Anchored at Bottom-Right on lg+ screens) */}
      <div className="hidden lg:flex absolute inset-0 z-10 pointer-events-none justify-end items-end overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="w-[74%] xl:w-[72%] 2xl:w-[75%] max-w-[1400px] lg:mr-[-1%] xl:mr-0 lg:mb-[-15px] xl:mb-[-25px]"
        >
          <div className="relative w-full aspect-[16/8.6] flex items-end justify-end">
            <Image
              src="/hero.png"
              alt="Koenigsegg Gold Supercar with Gullwing Doors"
              fill
              priority
              sizes="(max-width: 1280px) 75vw, 70vw"
              className="object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


