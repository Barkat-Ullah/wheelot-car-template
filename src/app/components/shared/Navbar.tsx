"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Vehicles", href: "/#vehicles" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#161618]/95 backdrop-blur-2xl border-b border-[#FFFDF5]/10 shadow-2xl shadow-black/80 py-3.5"
            : "bg-[#161618]/70 backdrop-blur-xl border-b border-[#FFFDF5]/5 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between relative min-h-[44px]">
            {/* Left: Menu Toggle Icon Button */}
            <div className="relative flex items-center z-50">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsOpen((prev) => !prev);
                }}
                className="group flex items-center justify-center p-2 rounded-lg bg-[#FFFDF5]/5 hover:bg-[#FFFDF5]/10 border border-[#FFFDF5]/10 transition-all duration-300 cursor-pointer focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {/* Official Wheelot 3-Bar Gold Menu SVG Icon */}
                <svg
                  width="34"
                  height="21"
                  viewBox="0 0 34 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 sm:w-7 h-auto transition-transform duration-300 group-hover:scale-105"
                >
                  <path
                    d="M25.125 0C26.1605 0 27 0.671573 27 1.5C27 2.32843 26.1605 3 25.125 3H1.875C0.839466 3 0 2.32843 0 1.5C0 0.671573 0.839466 0 1.875 0H25.125Z"
                    fill="#FFBD37"
                  />
                  <path
                    d="M32.1522 9C33.1727 9 34 9.67157 34 10.5C34 11.3284 33.1727 12 32.1522 12H1.84783C0.8273 12 0 11.3284 0 10.5C0 9.67157 0.8273 9 1.84783 9H32.1522Z"
                    fill="#FFBD37"
                  />
                  <path
                    d="M17.1731 18C18.1821 18 19 18.6716 19 19.5C19 20.3284 18.1821 21 17.1731 21H1.82692C0.817941 21 0 20.3284 0 19.5C0 18.6716 0.817941 18 1.82692 18H17.1731Z"
                    fill="#FFBD37"
                  />
                </svg>
              </button>
            </div>

            {/* Center: Wheelot Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center pointer-events-auto">
              <Link
                href="/"
                className="group inline-flex items-center focus:outline-none"
                aria-label="Wheelot Home"
              >
                <div className="relative h-6 sm:h-8 md:h-10 w-24 sm:w-32 md:w-44 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/Logo.png"
                    alt="Wheelot Logo"
                    fill
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 130px, 176px"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Right: Contact Us Button (Icon-only on mobile < sm, Full button on sm+) */}
            <div className="flex items-center gap-2 z-50">
              <Link
                href="/#contact"
                aria-label="Contact Us"
                className="group relative inline-flex items-center justify-center gap-2 p-2 sm:px-4 sm:py-2.5 rounded-[10px] bg-[#FFB900] hover:bg-[#FFBD37] text-[#161618] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 shadow-md shadow-[#FFB900]/20 hover:shadow-lg hover:shadow-[#FFB900]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="hidden sm:inline">Contact Us</span>
                <div className="flex items-center justify-center w-5 h-5 sm:w-5 sm:h-5 rounded-md bg-[#161618] text-[#FFB900] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Floating Menu Capsule (Appears below header with zero page reload/jump) */}
      <div
        className={`hidden xl:flex fixed top-[76px] left-8 z-40 bg-[#161618]/95 backdrop-blur-2xl border border-[#FFFDF5]/10 rounded-2xl py-2 px-3 shadow-2xl shadow-black/80 items-center gap-2 whitespace-nowrap transition-all duration-300 ease-out origin-top-left ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-[#FFB900] hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Drawer (Left Slide-in for screens < 1280px) */}
      {/* Mobile Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 xl:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-[#121214] border-r border-[#FFFDF5]/10 z-50 p-6 flex flex-col justify-between shadow-2xl xl:hidden overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Header in Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="relative h-8 w-28">
              <Image
                src="/Logo.png"
                alt="Wheelot Logo"
                fill
                className="object-contain"
              />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2 py-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "bg-[#FFB900] text-[#161618] font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Info */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="space-y-2 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FFB900] shrink-0" />
              <span>(808) 555-0111</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FFB900] shrink-0" />
              <span className="truncate">wheelot.support@example.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FFB900] shrink-0 mt-0.5" />
              <span>1901 Thornridge Cir. Shiloh</span>
            </div>
          </div>

          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FFB900] hover:bg-[#FFBD37] text-[#161618] font-bold text-sm transition-all duration-300 shadow-lg shadow-[#FFB900]/20"
          >
            <span>Book Your Vehicle</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

