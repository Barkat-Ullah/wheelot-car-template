"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroBannerProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  title,
  imageSrc,
  imageAlt = "Eyeflora banner visual",
  className = "",
}) => {
  return (
    <section
      aria-label={`${title} Banner`}
      className={`w-full pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-12 ${className}`}
    >
      <div className="w-[calc(100%-24px)] sm:w-[calc(100%-40px)] xl:w-[calc(100%-60px)] 2xl:w-[calc(100%-256px)] max-w-[1400px] mx-auto">
        <div className="relative rounded-[22px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden h-[180px] sm:h-[220px] md:h-[260px] lg:h-[290px] xl:h-[310px] flex items-center shadow-[0_12px_40px_rgba(27,43,13,0.1)] border border-[#1b2b0d]/10">
          {/* Background Banner Image */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1400px"
            className="object-cover object-[70%_center] sm:object-center select-none pointer-events-none"
          />

          {/* Deep Forest Green Gradient Overlay for Text Readability & Shaping */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0d1e02]/95 via-[#0f2402]/85 md:via-[#0f2402]/65 to-[#0d1e02]/40 md:to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Banner Title */}
          <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 w-full text-left">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-tight drop-shadow-sm break-words"
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeroBanner;