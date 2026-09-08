"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

export interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export const WORK_STEPS: StepItem[] = [
  {
    id: "step-1",
    stepNumber: "1",
    title: "Add Your Vehicle Details",
    description:
      "Provide the essential information about your vehicle including make, model, year, and key specifications.",
  },
  {
    id: "step-2",
    stepNumber: "2",
    title: "Upload Clear, HD Photos",
    description:
      "Good visuals attract more attention and increase the chances of quick inquiries.",
  },
  {
    id: "step-3",
    stepNumber: "3",
    title: "Publish Your Inquiries",
    description:
      "Verified buyers can view your vehicle and contact you directly through secure messaging.",
  },
];

const WorkSection = () => {
  return (
    <section
      id="how-it-works"
      aria-label="How We Work"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#0B0B0E] overflow-hidden"
    >
      {/* Background ambient radial gold flare */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[900px] h-[400px] bg-[#FFBD37]/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="How We Work"
          title="Find Your Next Ride With Confidence"
          highlightWords={["With Confidence", "with confidence"]}
          description="A clean, modern marketplace designed for effortless browsing, verified listings, transparent communication, and fast transactions."
          align="center"
        />

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WORK_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <div className="spotlight-card group relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl overflow-hidden">
                <div>
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FFFDF5]/[0.08] group-hover:bg-[#FFBD37]/15 border border-white/10 group-hover:border-[#FFBD37]/40 backdrop-blur-[4px] flex items-center justify-center font-primary text-xl sm:text-2xl font-bold text-[#FFBD37] mb-6 sm:mb-8 transition-all duration-300 shadow-sm shadow-black/30 group-hover:scale-105">
                    {step.stepNumber}
                  </div>

                  {/* Title */}
                  <h3 className="font-primary text-lg sm:text-xl font-normal text-[#FFBD37] group-hover:text-white transition-colors duration-200 mb-3 sm:mb-4 capitalize">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-secondary text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
