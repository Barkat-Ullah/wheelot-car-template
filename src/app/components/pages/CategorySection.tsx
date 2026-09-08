"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "sedans",
    title: "Sedans",
    description:
      "Smooth, comfortable, and fuel-efficient — ideal for commuting and long drives.",
    icon: "/images/work/car-one.svg",
    link: "/#vehicles",
  },
  {
    id: "luxury-cars",
    title: "Luxury Cars",
    description:
      "Premium craftsmanship, advanced features, and refined comfort.",
    icon: "/images/work/car-two.svg",
    link: "/#vehicles",
  },
  {
    id: "suvs",
    title: "SUVs",
    description:
      "Spacious, powerful, and versatile — great for families and all terrains.",
    icon: "/images/work/car-three.svg",
    link: "/#vehicles",
  },
  {
    id: "hatchbacks",
    title: "Hatchbacks",
    description:
      "Compact, affordable, and easy to maneuver — ideal for city travel.",
    icon: "/images/work/car-four.svg",
    link: "/#vehicles",
  },
  {
    id: "electric-vehicles",
    title: "Electric Vehicles",
    description:
      "Eco-friendly, silent, and efficient — powered by modern battery tech.",
    icon: "/images/work/car-five.svg",
    link: "/#vehicles",
  },
  {
    id: "motorcycles",
    title: "Motorcycles",
    description:
      "Fast, flexible, and stylish — from sporty rides to daily commuting.",
    icon: "/images/work/car-six.svg",
    link: "/#vehicles",
  },
  {
    id: "trucks-pickups",
    title: "Trucks & Pickups",
    description:
      "Strong, tough, and utility-focused for heavy loads and work needs.",
    icon: "/images/work/car-seven.svg",
    link: "/#vehicles",
  },
  {
    id: "vans-family-cars",
    title: "Vans & Family Cars",
    description:
      "Spacious interiors and multiple seating options — ideal for families.",
    icon: "/images/work/car-eight.svg",
    link: "/#vehicles",
  },
];

const CategorySection = () => {
  return (
    <section
      id="categories"
      aria-label="Popular Vehicle Categories"
      className="relative w-full py-14 sm:py-20 lg:py-24 bg-[#0B0B0E] overflow-hidden"
    >
      {/* Subtle background ambient radial light */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[400px] bg-[#FFBD37]/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Reusable Section Header */}
        <SectionHeader
          subtitle="Explore Popular Categories"
          title="Choose from the most-searched vehicle types"
          highlightWords={["vehicle types", "Vehicle Types"]}
          description="A clean, modern marketplace designed for effortless browsing, verified listings, transparent communication, and fast transactions."
          align="center"
        />

        {/* Categories 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-[24px]">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <Link
                href={category.link || "/#vehicles"}
                className="spotlight-card group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl overflow-hidden block cursor-pointer"
              >
                <div>
                  {/* Category SVG Icon Container */}
                  <div className="p-4 bg-[#FFFDF5]/[0.08] group-hover:bg-[#FFBD37]/15 rounded-xl border border-white/10 group-hover:border-[#FFBD37]/40 backdrop-blur-[4px] flex items-center justify-center w-fit mb-6 sm:mb-8 group-hover:scale-105 transition-all duration-300 shadow-sm shadow-black/30">
                    <div className="relative w-11 h-6 sm:w-12 sm:h-7 flex items-center justify-center">
                      <Image
                        src={category.icon}
                        alt={category.title}
                        fill
                        className="object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-primary text-lg sm:text-xl font-normal text-[#FFBD37] group-hover:text-white transition-colors duration-200 mb-2.5 sm:mb-3">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="font-secondary text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
