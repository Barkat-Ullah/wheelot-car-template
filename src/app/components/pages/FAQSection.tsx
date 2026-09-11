"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "How do I list my vehicle?",
    answer:
      "To list your vehicle, simply create an account, add basic details, upload photos, set your price, and publish your listing. It only takes a few minutes.",
  },
  {
    id: 2,
    question: "Are all vehicle listings verified?",
    answer:
      "Yes, every vehicle listing goes through a verification process. We review documents, images, and seller details to ensure authenticity and reduce fraudulent listings.",
  },
  {
    id: 3,
    question: "How do I contact a seller?",
    answer:
      "You can contact a seller directly through the listing page using our built-in chat or contact options once you are logged in.",
  },
  {
    id: 4,
    question: "How do I compare multiple vehicles?",
    answer:
      "Wheelot allows you to compare multiple vehicles side by side. Simply select the vehicles you’re interested in and use the compare feature to review specifications, pricing, and features.",
  },
  {
    id: 5,
    question: "Is it safe to buy through Wheelot?",
    answer:
      "Yes, Wheelot prioritizes buyer safety by verifying sellers, protecting user data, and offering secure communication tools throughout the buying process.",
  },
  {
    id: 6,
    question: "Does Wheelot charge any fee for buyers?",
    answer:
      "No, Wheelot does not charge buyers any fees. Browsing, comparing, and contacting sellers on the platform is completely free.",
  },
];

interface FAQSectionProps {
  hideDescription?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({ hideDescription = false }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full max-w-full py-12 sm:py-20 lg:py-28 bg-[#0B0B0E] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute bottom-1/3 right-1/4 w-[550px] lg:w-[800px] h-[350px] bg-[#FFBD37]/[0.05] rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading, Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-full col-span-1 lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-8 min-w-0"
          >
            <div>
              <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] text-white tracking-tight capitalize mb-3 sm:mb-6 break-words">
                Frequently Asked{" "}
                <span className="text-[#FFBD37] gold-text-glow block sm:inline">
                  Questions.
                </span>
              </h2>

              {!hideDescription && (
                <p className="font-secondary text-xs sm:text-sm md:text-base lg:text-lg text-white/80 font-normal leading-relaxed max-w-md break-words">
                  Quick answers to common questions about buying, selling, and
                  using Wheelot.
                </p>
              )}
            </div>

            {!hideDescription && (
              <div className="pt-1 sm:pt-2">
                <Link
                  href="/#contact"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 px-5 sm:px-9 py-3 sm:py-4 rounded-[12px] bg-[#FFBD37] hover:bg-[#FFB900] text-[#161618] font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#FFBD37]/25 hover:shadow-2xl hover:shadow-[#FFBD37]/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book Your Ride Now</span>
                  <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#161618] text-[#FFBD37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                </Link>
              </div>
            )}
          </motion.div>

          {/* Right Column: Accordion Items */}
          <div className="w-full max-w-full col-span-1 lg:col-span-7 space-y-3 sm:space-y-4 min-w-0">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="spotlight-card group rounded-xl overflow-hidden transition-all duration-300 w-full max-w-full min-w-0"
                >
                  {/* Question Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full max-w-full flex items-center justify-between gap-2.5 sm:gap-4 p-3.5 sm:p-5 text-left cursor-pointer focus:outline-none transition-colors group"
                  >
                    <span className="flex-1 min-w-0 font-primary text-xs sm:text-base md:text-lg lg:text-xl font-medium tracking-tight text-white group-hover:text-[#FFBD37] transition-colors leading-snug sm:leading-normal break-words">
                      {item.question}
                    </span>

                    <div className="flex-shrink-0 text-[#FFBD37] p-1 sm:p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:bg-[#FFBD37]/10 transition-colors">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden w-full max-w-full"
                      >
                        <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 pt-1.5 border-t border-white/5 w-full max-w-full">
                          <p className="font-secondary text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed break-words">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
