"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  id: string;
  value: string;
  title: string;
  description: string;
}

const STATS: StatItem[] = [
  {
    id: "verified-listings",
    value: "12,450+",
    title: "Verified Listings",
    description:
      "Every vehicle on Wheelot goes through a verification process to ensure accuracy, transparency, and trust.",
  },
  {
    id: "successful-delivered",
    value: "8,900+",
    title: "Successful Delivered",
    description:
      "Our platform streamlines the entire communication flow, helping buyers and sellers connect instantly.",
  },
  {
    id: "user-satisfaction",
    value: "4.9/5",
    title: "User Satisfaction Rating",
    description:
      "Clean design, smart filters, and real-time support make Wheelot one of the most trusted marketplaces today.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="About Wheelot"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#0B0B0E] overflow-hidden"
    >
      {/* Ambient background gold glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] lg:w-[750px] h-[350px] bg-[#FFBD37]/[0.05] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Row: "About" on Left, Main Heading on Right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Subtitle Badge (Left) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full md:w-auto text-left"
          >
            <h4 className="font-primary text-lg sm:text-xl md:text-2xl font-normal text-[#FFBD37] gold-text-glow tracking-wide capitalize">
              About
            </h4>
          </motion.div>

          {/* Heading (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="w-full md:max-w-xl lg:max-w-2xl text-left md:text-right"
          >
            <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] text-white tracking-tight capitalize">
              Transforming The Way People Discover{" "}
              <span className="text-[#FFBD37] gold-text-glow">
                Their Next Vehicle
              </span>
            </h2>
          </motion.div>
        </div>

        {/* 3-Column Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="flex flex-col text-left group"
            >
              {/* Stat Number */}
              <div className="mb-4 sm:mb-5 lg:mb-6">
                <span className="font-primary text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFBD37] gold-text-glow tracking-tight inline-block transition-transform duration-300 group-hover:scale-[1.03] origin-left">
                  {stat.value}
                </span>
              </div>

              {/* Separator Line */}
              <div className="border-t border-[#FFFDF5]/10 w-full mb-5 sm:mb-6 lg:mb-8 transition-colors duration-300 group-hover:border-[#FFBD37]/30" />

              {/* Stat Title */}
              <h3 className="font-primary text-lg sm:text-xl font-normal text-[#FFBD37] mb-2 sm:mb-3 lg:mb-4 capitalize transition-colors duration-300 group-hover:text-white">
                {stat.title}
              </h3>

              {/* Stat Description */}
              <p className="font-secondary text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
