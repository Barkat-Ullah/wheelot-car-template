"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      id="cta"
      aria-label="Transforming Vehicle Shopping"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#0B0B0E] overflow-hidden"
    >
      {/* Ambient background gold glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute bottom-1/4 left-1/3 w-[600px] lg:w-[850px] h-[450px] bg-[#FFBD37]/[0.05] rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10 lg:gap-10 xl:gap-14">
          {/* Left Column: Headline, Description & CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7"
          >
            <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[50px] 2xl:text-[54px] font-normal leading-[1.15] text-white tracking-tight capitalize max-w-lg">
              Transforming The Way People Discover{" "}
              <span className="text-[#FFBD37] gold-text-glow">
                Their Next Vehicle
              </span>
            </h2>

            <p className="font-secondary text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed max-w-md lg:max-w-lg">
              Experience a new level of clarity and convenience in vehicle
              shopping. With advanced search tools, trusted sellers, and clear
              specifications.
            </p>

            <div className="pt-2 sm:pt-4 w-full sm:w-auto">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-[12px] bg-[#FFBD37] hover:bg-[#FFB900] text-[#161618] font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#FFBD37]/25 hover:shadow-2xl hover:shadow-[#FFBD37]/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Your Ride Now</span>
                <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#161618] text-[#FFBD37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Supercar Showcase Visual with Spotlight Border (Large 7-Column Span) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-12 lg:col-span-7 w-full"
          >
            <div className="spotlight-card rounded-2xl md:rounded-[24px] overflow-hidden relative w-full aspect-[16/10] sm:aspect-[16/9.5] lg:aspect-[16/9.2] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] xl:min-h-[500px] shadow-2xl shadow-black/70 group">
              <Image
                src="/images/cta-img.jpg"
                alt="High speed supercar on mountain highway"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
