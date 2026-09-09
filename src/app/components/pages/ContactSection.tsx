"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  model: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  model: "",
  phone: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate sending inquiry
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData(initialFormData);

    // Auto dismiss success notice after 6 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#0B0B0E] overflow-hidden"
    >
      {/* Background ambient golden aura */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] lg:w-[900px] h-[400px] bg-[#FFBD37]/[0.05] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-14 lg:mb-16">
          {/* Subtitle */}
          <motion.h4
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-primary text-base sm:text-lg md:text-xl font-normal text-[#FFBD37] gold-text-glow mb-2.5 sm:mb-3 tracking-wide capitalize"
          >
            Contact Us
          </motion.h4>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] text-white tracking-tight mb-4 sm:mb-5 capitalize"
          >
            Get In <span className="text-[#FFBD37] gold-text-glow">Touch</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-secondary text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed max-w-2xl"
          >
            These highlighted models showcase world-class performance, advanced
            technology, and the unmistakable character of true automotive
            craftsmanship.
          </motion.p>
        </div>

        {/* Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 2x2 Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Name */}
              <div className="w-full">
                <div className="spotlight-card rounded-xl overflow-hidden">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Anderson"
                    required
                    className="w-full bg-transparent px-5 sm:px-6 py-4 sm:py-5 text-stone-50 text-sm sm:text-base font-normal font-secondary leading-normal placeholder:text-stone-50/50 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="w-full">
                <div className="spotlight-card rounded-xl overflow-hidden">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="wheelot@mail.com"
                    required
                    className="w-full bg-transparent px-5 sm:px-6 py-4 sm:py-5 text-stone-50 text-sm sm:text-base font-normal font-secondary leading-normal placeholder:text-stone-50/50 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Vehicle Model */}
              <div className="w-full">
                <div className="spotlight-card rounded-xl overflow-hidden">
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="Audi R8 – 2021"
                    className="w-full bg-transparent px-5 sm:px-6 py-4 sm:py-5 text-stone-50 text-sm sm:text-base font-normal font-secondary leading-normal placeholder:text-stone-50/50 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="w-full">
                <div className="spotlight-card rounded-xl overflow-hidden">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 325 554 9012"
                    className="w-full bg-transparent px-5 sm:px-6 py-4 sm:py-5 text-stone-50 text-sm sm:text-base font-normal font-secondary leading-normal placeholder:text-stone-50/50 focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="w-full">
              <div className="spotlight-card rounded-xl overflow-hidden">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I want to know availability and price"
                  rows={5}
                  required
                  className="w-full bg-transparent px-5 sm:px-6 py-4 sm:py-5 text-stone-50 text-sm sm:text-base font-normal font-secondary leading-normal placeholder:text-stone-50/50 focus:outline-none transition-all min-h-[160px] sm:min-h-[190px] resize-y"
                />
              </div>
            </div>

            {/* Error Notice */}
            {errorMsg && (
              <p className="text-red-400 text-sm text-center font-secondary">
                {errorMsg}
              </p>
            )}

            {/* Success Notice Banner */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 backdrop-blur-md"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-secondary text-sm sm:text-base font-medium">
                    Message sent successfully! Our team will contact you shortly.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <div className="flex justify-center pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-[10px] bg-[#FFBD37] hover:bg-[#FFB900] text-[#161618] font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#FFBD37]/25 hover:shadow-2xl hover:shadow-[#FFBD37]/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-[#161618]" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="font-secondary">Send Message</span>
                    <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#161618] text-[#FFBD37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
