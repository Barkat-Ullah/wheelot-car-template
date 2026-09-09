"use client";

import React from "react";
import { motion } from "framer-motion";

export interface SectionHeaderProps {
  /** Top subtitle badge or label (e.g. "Explore Popular Categories") */
  subtitle?: React.ReactNode;
  /** Main section heading (e.g. "Choose from the most-searched vehicle types") */
  title: React.ReactNode;
  /** Optional words or phrase in the title to highlight in gold accent */
  highlightWords?: string | string[];
  /** Description paragraph underneath the heading */
  description?: React.ReactNode;
  /** Content alignment (defaults to "center") */
  align?: "center" | "left" | "right";
  /** HTML heading element tag to render */
  as?: "h1" | "h2" | "h3";
  /** Additional container wrapper classes */
  className?: string;
  /** Custom classes for subtitle */
  subtitleClassName?: string;
  /** Custom classes for title */
  titleClassName?: string;
  /** Custom classes for description */
  descriptionClassName?: string;
  /** Enable or disable framer-motion scroll entrance animations */
  animate?: boolean;
}

/**
 * Reusable Section Header component that unifies subtitle, title, and description
 * with customizable alignment, gold word highlighting, and smooth entrance motion.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  highlightWords,
  description,
  align = "center",
  as: HeadingTag = "h2",
  className = "",
  subtitleClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  animate = true,
}) => {
  // Determine alignment classes
  const alignmentClasses = {
    center: "items-center text-center mx-auto",
    left: "items-start text-left mr-auto",
    right: "items-end text-right ml-auto",
  }[align];

  // Helper to highlight specific words within a string title
  const renderTitleContent = () => {
    if (typeof title !== "string" || !highlightWords) {
      return title;
    }

    const wordsToHighlight = Array.isArray(highlightWords)
      ? highlightWords
      : [highlightWords];

    // Escape regex special chars
    const pattern = wordsToHighlight
      .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");

    if (!pattern) return title;

    const regex = new RegExp(`(${pattern})`, "gi");
    const parts = title.split(regex);

    return parts.map((part, index) => {
      const isMatch = wordsToHighlight.some(
        (w) => w.toLowerCase() === part.toLowerCase()
      );

      if (isMatch) {
        return (
          <span key={index} className="text-[#FFBD37] gold-text-glow">
            {part}
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  const HeadingElement = HeadingTag;

  return (
    <div
      className={`w-full flex flex-col max-w-3xl mb-8 sm:mb-10 md:mb-14 ${alignmentClasses} ${className}`}
    >
      {/* Subtitle */}
      {subtitle && (
        <motion.h4
          initial={animate ? { opacity: 0, y: -12 } : undefined}
          whileInView={animate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`font-primary text-base sm:text-lg md:text-xl font-normal text-[#FFBD37] gold-text-glow mb-2.5 sm:mb-3 tracking-wide capitalize ${subtitleClassName}`}
        >
          {subtitle}
        </motion.h4>
      )}

      {/* Main Title */}
      <motion.div
        initial={animate ? { opacity: 0, y: 16 } : undefined}
        whileInView={animate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <HeadingElement
          className={`font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] text-white tracking-tight mb-3 sm:mb-4 capitalize ${titleClassName}`}
        >
          {renderTitleContent()}
        </HeadingElement>
      </motion.div>

      {/* Description */}
      {description && (
        <motion.p
          initial={animate ? { opacity: 0, y: 16 } : undefined}
          whileInView={animate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className={`font-secondary text-xs sm:text-sm md:text-base lg:text-lg text-white/80 font-normal leading-relaxed max-w-2xl ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
