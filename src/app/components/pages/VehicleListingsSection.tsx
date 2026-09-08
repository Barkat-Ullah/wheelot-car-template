"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import VehicleCard, { VehicleSpecItem } from "../shared/VehicleCard";

export interface VehicleListing {
  id: string;
  image: string;
  badgeText: string;
  title: string;
  subtitle: string;
  specs: VehicleSpecItem[];
  price: string;
  href?: string;
}

export const VEHICLE_LISTINGS: VehicleListing[] = [
  {
    id: "rivian-r1s",
    image: "/images/vehicles/vehicles-one.jpg",
    badgeText: "Performance",
    title: "Luxury Electric Rivian R1S",
    subtitle: "Quad-Motor AWD, Large Pack",
    specs: [
      { icon: "/images/vehicles/card-icon-one.svg", label: "20 Miles" },
      { icon: "/images/vehicles/card-icon-two.svg", label: "Automatic" },
      { icon: "/images/vehicles/card-icon-three.svg", label: "Electric" },
      { icon: "/images/vehicles/card-icon-four.svg", label: "2024" },
    ],
    price: "$80,000",
  },
  {
    id: "audi-rs6-avant",
    image: "/images/vehicles/vehicles-two.jpg",
    badgeText: "Performance",
    title: "Audi RS 6 Avant (Premium Plus Trim)",
    subtitle: "4.0 V8 TFSI, quattro AWD",
    specs: [
      { icon: "/images/vehicles/card-icon-one.svg", label: "20 Miles" },
      { icon: "/images/vehicles/card-icon-two.svg", label: "Automatic" },
      { icon: "/images/vehicles/card-icon-three.svg", label: "Petrol" },
      { icon: "/images/vehicles/card-icon-four.svg", label: "2023" },
    ],
    price: "$125,000",
  },
  {
    id: "volvo-xc90-recharge",
    image: "/images/vehicles/vehicles-three.jpg",
    badgeText: "Performance",
    title: "Volvo XC90 Recharge",
    subtitle: "T8 AWD Plug-in Hybrid",
    specs: [
      { icon: "/images/vehicles/card-icon-one.svg", label: "100 Miles" },
      { icon: "/images/vehicles/card-icon-two.svg", label: "Automatic" },
      { icon: "/images/vehicles/card-icon-three.svg", label: "Plug-in Hybrid" },
      { icon: "/images/vehicles/card-icon-four.svg", label: "2024" },
    ],
    price: "$78,000",
  },
  {
    id: "lucid-air-crossover",
    image: "/images/vehicles/vehicles-four.jpg",
    badgeText: "Super Car",
    title: "Lucid Air Crossover",
    subtitle: "Dual-Motor AWD, Extended Range",
    specs: [
      { icon: "/images/vehicles/card-icon-one.svg", label: "20 Miles" },
      { icon: "/images/vehicles/card-icon-two.svg", label: "Automatic" },
      { icon: "/images/vehicles/card-icon-three.svg", label: "Electric" },
      { icon: "/images/vehicles/card-icon-four.svg", label: "2025" },
    ],
    price: "$105,000",
  },
  {
    id: "mercedes-amg-gt63s",
    image: "/images/vehicles/vehicles-five.jpg",
    badgeText: "Performance",
    title: "Mercedes-AMG GT 63 S",
    subtitle: "4.0L V8 Bi-turbo 4MATIC+",
    specs: [
      { icon: "/images/vehicles/card-icon-one.svg", label: "5,000 Miles" },
      { icon: "/images/vehicles/card-icon-two.svg", label: "AMG Speedshift" },
      { icon: "/images/vehicles/card-icon-three.svg", label: "Petrol" },
      { icon: "/images/vehicles/card-icon-four.svg", label: "2022" },
    ],
    price: "$170,000",
  },
  {
    id: "mclaren-570s-coupe",
    image: "/images/vehicles/vehicles-six.jpg",
    badgeText: "Super Car",
    title: "McLaren 570S Coupe",
    subtitle: "3.8L Twin-Turbo V8",
    specs: [
      { icon: "/images/vehicles/card-icon-one.svg", label: "50 Miles" },
      { icon: "/images/vehicles/card-icon-two.svg", label: "Dual-Clutch" },
      { icon: "/images/vehicles/card-icon-three.svg", label: "Petrol" },
      { icon: "/images/vehicles/card-icon-four.svg", label: "2019" },
    ],
    price: "$88,000",
  },
  {
    id: "electric-supercar-nio-ep9",
    image: "/images/vehicles/vehicles-seven.jpg",
    badgeText: "Super Car",
    title: "Electric Supercar Nio EP9",
    subtitle: "4 Motor AWD, MegaWatt Class",
    specs: [
      { icon: "/images/vehicles/card-icon-one.svg", label: "0 Miles" },
      { icon: "/images/vehicles/card-icon-two.svg", label: "Automatic" },
      { icon: "/images/vehicles/card-icon-three.svg", label: "Electric" },
      { icon: "/images/vehicles/card-icon-four.svg", label: "2025" },
    ],
    price: "$150,000",
  },
  {
    id: "lamborghini-huracan-evo-spyder",
    image: "/images/vehicles/vehicles-eight.jpg",
    badgeText: "Super Car",
    title: "Lamborghini Huracán EVO Spyder",
    subtitle: "5.2L V10, AWD",
    specs: [
      { icon: "/images/vehicles/card-icon-one.svg", label: "1,200 Miles" },
      { icon: "/images/vehicles/card-icon-two.svg", label: "Automatic" },
      { icon: "/images/vehicles/card-icon-three.svg", label: "Electric" },
      { icon: "/images/vehicles/card-icon-four.svg", label: "2023" },
    ],
    price: "$300,000",
  },
];

const VehicleListingsSection = () => {
  return (
    <section
      id="vehicles"
      aria-label="Newly Arrived Vehicles"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#0B0B0E] overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 right-10 w-[600px] lg:w-[850px] h-[500px] bg-[#FFBD37]/[0.04] rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Newly Arrived Vehicles"
          title="Every Lifestyle, Every Purpose One Place"
          highlightWords={["One Place", "one place"]}
          description="A clean, modern marketplace designed for effortless browsing, verified listings, transparent communication, and fast transactions."
          align="center"
        />

        {/* 4x2 Vehicle Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-[24px]">
          {VEHICLE_LISTINGS.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.08,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <VehicleCard
                image={vehicle.image}
                badgeText={vehicle.badgeText}
                title={vehicle.title}
                subtitle={vehicle.subtitle}
                specs={vehicle.specs}
                price={vehicle.price}
                href={vehicle.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleListingsSection;
