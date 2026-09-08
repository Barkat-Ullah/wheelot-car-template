"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export default function NotFound() {
  const quickLinks = [
    {
      title: "Popular Categories",
      desc: "Browse sedans, SUVs, luxury, and electric vehicles.",
      href: "/#categories",
      icon: <Compass className="w-5 h-5 text-[#FFBD37]" />,
    },
    {
      title: "Verified Vehicles",
      desc: "Explore newly arrived and certified car listings.",
      href: "/#vehicles",
      icon: <ShieldCheck className="w-5 h-5 text-[#FFBD37]" />,
    },
    {
      title: "Contact Support",
      desc: "Get in touch with our team for 24/7 assistance.",
      href: "/#contact",
      icon: <HelpCircle className="w-5 h-5 text-[#FFBD37]" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0E] text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main 404 Hero Container */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Ambient Gold Radial Flares */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[500px] bg-[#FFBD37]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FFBD37]/[0.03] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          {/* Status Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF5]/[0.08] border border-[#FFBD37]/30 text-[#FFBD37] text-xs sm:text-sm font-primary mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFBD37] animate-ping" />
            <span>DETOUR // 404 ERROR</span>
          </motion.div>

          {/* Massive 404 Typography */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-primary text-8xl sm:text-9xl md:text-[150px] lg:text-[170px] font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFFDF5] to-[#FFBD37]/30 leading-none select-none drop-shadow-[0_20px_50px_rgba(255,189,55,0.18)]"
          >
            404
          </motion.h1>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-primary text-2xl sm:text-3xl md:text-4xl text-white font-normal mt-4 mb-3 tracking-tight"
          >
            Lost in the Fast Lane?{" "}
            <span className="text-[#FFBD37] gold-text-glow">Page Not Found</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="font-secondary text-sm sm:text-base md:text-lg text-white/80 max-w-lg mx-auto font-normal leading-relaxed mb-8 sm:mb-10"
          >
            It seems you&apos;ve taken an unexpected detour. The road you are
            looking for has ended, been relocated, or is temporarily under
            maintenance.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 sm:mb-18"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-[12px] bg-[#FFBD37] hover:bg-[#FFB900] text-[#161618] font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#FFBD37]/25 hover:shadow-2xl hover:shadow-[#FFBD37]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Return To Showroom</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#161618] text-[#FFBD37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>

            <Link
              href="/#vehicles"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-[12px] bg-[#FFFDF5]/[0.08] hover:bg-[#FFFDF5]/[0.15] border border-white/15 hover:border-[#FFBD37]/40 text-white font-medium text-sm sm:text-base transition-all duration-300 backdrop-blur-md"
            >
              <span>Browse All Vehicles</span>
            </Link>
          </motion.div>

          {/* Quick Shortcuts Cards with Spotlight Border */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left"
          >
            {quickLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="spotlight-card group p-5 sm:p-6 rounded-xl block border border-white/10 overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#FFFDF5]/[0.08] border border-white/10 group-hover:border-[#FFBD37]/40 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <h3 className="font-primary text-sm sm:text-base font-normal text-white group-hover:text-[#FFBD37] transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
                <p className="font-secondary text-xs sm:text-sm text-white/70">
                  {item.desc}
                </p>
              </Link>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
