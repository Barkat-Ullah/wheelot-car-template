"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "robert-fox",
    quote:
      "Wheelot completely changed the way I sell vehicles online. The listing process was simple, the interface was clean, and I started receiving inquiries within hours. Buyers were genuine, communication was secure, and I finalized the sale in just two days. This platform feels modern, transparent, and far more reliable than traditional marketplaces.",
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: "/images/testimonial-img.jpg",
  },
  {
    id: "jane-cooper",
    quote:
      "Finding my dream electric vehicle was effortless with Wheelot. The detailed specifications, verified seller history, and seamless test drive scheduling gave me 100% confidence throughout the entire process. Easily the best auto platform available today.",
    name: "Jane Cooper",
    role: "Product Designer",
    image: "/images/vehicles/vehicles-four.jpg",
  },
  {
    id: "leslie-alexander",
    quote:
      "The transparent pricing and direct verified communication made trading in my luxury vehicle completely stress-free. I received multiple solid inquiries within 24 hours and completed the sale seamlessly. Highly recommended!",
    name: "Leslie Alexander",
    role: "Tech Entrepreneur",
    image: "/images/vehicles/vehicles-five.jpg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonial"
      aria-label="Client Testimonials"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#0B0B0E] overflow-hidden"
    >
      {/* Background ambient gold glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] lg:w-[800px] h-[400px] bg-[#FFBD37]/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Row: "Testimonial" on Left, Main Title on Right */}
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
              Testimonial
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
              See What Our Clients Say{" "}
              <span className="text-[#FFBD37] gold-text-glow">
                About Their Rides
              </span>
            </h2>
          </motion.div>
        </div>

        {/* 2-Column Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Visual Car Photo Card with Spotlight Border */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 xl:col-span-4 h-full"
          >
            <div className="spotlight-card rounded-2xl overflow-hidden relative h-[280px] sm:h-[340px] lg:h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id + "-img"}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Quote & Author Card with Spotlight Border */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8 xl:col-span-8 h-full"
          >
            <div className="spotlight-card rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full min-h-[320px] sm:min-h-[380px]">
              {/* Quote Text */}
              <div className="mb-8 sm:mb-10">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTestimonial.id + "-quote"}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="font-secondary text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed"
                  >
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Bottom Row: Author (Left) & Controls (Right) */}
              <div className="flex items-end justify-between gap-4 pt-4 border-t border-white/10">
                {/* Author Info with Gold Line Accent */}
                <div className="relative pl-3.5 border-l-2 border-[#FFBD37]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial.id + "-author"}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="font-primary text-lg sm:text-xl font-normal text-[#FFBD37] mb-1">
                        {currentTestimonial.name}
                      </h3>
                      <p className="font-secondary text-xs sm:text-sm text-white/70">
                        {currentTestimonial.role}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slider Controls (Diagonal Arrow Style) */}
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FFBD37] hover:bg-[#FFB900] text-[#0B0B0E] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md shadow-[#FFBD37]/20 cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5] -rotate-90" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FFBD37] hover:bg-[#FFB900] text-[#0B0B0E] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md shadow-[#FFBD37]/20 cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5] rotate-0" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
