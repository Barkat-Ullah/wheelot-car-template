"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

export interface VehicleSpecItem {
  icon?: string | React.ReactNode;
  label: string;
}

export interface VehicleCardProps {
  /** Car image source */
  image: string;
  /** Image alternative text */
  imageAlt?: string;
  /** Category badge text (e.g. "Performance", "Super Car") */
  badgeText: string;
  /** Car model title (e.g. "Luxury Electric Rivian R1S") */
  title: string;
  /** Trim / powertrain subtitle (e.g. "Quad-Motor AWD, Large Pack") */
  subtitle: string;
  /** Specs list: mileage, transmission, fuel, year */
  specs: VehicleSpecItem[];
  /** Vehicle price formatted (e.g. "$80,000") */
  price: string;
  /** Navigation link */
  href?: string;
  /** Initial bookmark state */
  isBookmarked?: boolean;
  /** Bookmark click callback */
  onBookmark?: (isSaved: boolean) => void;
  /** Custom additional card class */
  className?: string;
}

/**
 * Reusable "Spotlight Border" Car Listing Card Component
 * Features animated conic-gradient rotating spotlight border, dark glass shell,
 * 2x2 spec grid, category pill badge, interactive bookmark button, and right-aligned price badge.
 */
const VehicleCard: React.FC<VehicleCardProps> = ({
  image,
  imageAlt,
  badgeText,
  title,
  subtitle,
  specs,
  price,
  href = "/#vehicles",
  isBookmarked: initialBookmarked = false,
  onBookmark,
  className = "",
}) => {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !bookmarked;
    setBookmarked(nextState);
    if (onBookmark) {
      onBookmark(nextState);
    }
  };

  // Fallback default icons for specs if none provided
  const defaultIcons = [
    "/images/vehicles/card-icon-one.svg",
    "/images/vehicles/card-icon-two.svg",
    "/images/vehicles/card-icon-three.svg",
    "/images/vehicles/card-icon-four.svg",
  ];

  return (
    <div className={`spotlight-card group overflow-hidden flex flex-col h-full ${className}`}>
      {/* 1. Top Image Area */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[15px] bg-[#141417]">
        <Link href={href} className="block w-full h-full relative">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Top-Left Category Badge */}
        <div className="absolute top-3 left-3 pointer-events-none z-10">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15 text-xs font-medium capitalize tracking-wide shadow-sm pointer-events-auto">
            {badgeText}
          </span>
        </div>

        {/* Top-Right Bookmark Button */}
        <div className="absolute top-3 right-3 z-10">
          <button
            type="button"
            onClick={handleBookmarkToggle}
            aria-label={bookmarked ? "Remove from bookmarks" : "Save vehicle to bookmarks"}
            className={`w-8 h-8 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm ${
              bookmarked
                ? "bg-[#FFBD37] border-[#FFBD37] text-[#0B0B0E]"
                : "bg-black/60 border-white/15 text-white hover:bg-[#FFBD37] hover:border-[#FFBD37] hover:text-[#0B0B0E]"
            }`}
          >
            <Bookmark
              className="w-4 h-4 transition-transform duration-200 active:scale-90"
              fill={bookmarked ? "currentColor" : "none"}
              strokeWidth={2.2}
            />
          </button>
        </div>
      </div>

      {/* 2. Card Content Area */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Title */}
          <Link href={href} className="block">
            <h3 className="font-semibold text-lg sm:text-[19px] text-white group-hover:text-[#FFBD37] transition-colors duration-200 tracking-tight leading-snug line-clamp-1">
              {title}
            </h3>
          </Link>

          {/* Subtitle */}
          <p className="font-secondary text-xs sm:text-sm text-white/70 font-normal mt-1 line-clamp-1">
            {subtitle}
          </p>

          {/* 3. 2x2 Spec Grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 my-4 pt-1">
            {specs.slice(0, 4).map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/80 text-xs sm:text-sm min-w-0">
                {typeof spec.icon === "string" ? (
                  <div className="relative w-4 h-4 flex-shrink-0">
                    <Image
                      src={spec.icon || defaultIcons[idx % 4]}
                      alt="spec icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : spec.icon ? (
                  <span className="flex-shrink-0 text-white/70">{spec.icon}</span>
                ) : (
                  <div className="relative w-4 h-4 flex-shrink-0">
                    <Image
                      src={defaultIcons[idx % 4]}
                      alt="spec icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="font-secondary text-white/85 text-xs sm:text-sm truncate">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* 4. Thin Gradient Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFFDF5]/15 to-transparent my-3.5" />

          {/* 5. Bottom Row: Price Badge Right-Aligned */}
          <div className="flex items-center justify-end w-full">
            <div className="px-3.5 py-1.5 rounded-full bg-[#FFFDF5]/[0.08] group-hover:bg-[#FFBD37]/15 group-hover:border-[#FFBD37]/30 border border-white/10 backdrop-blur-md text-white group-hover:text-[#FFBD37] font-bold text-base sm:text-lg tracking-tight transition-colors duration-200">
              {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
