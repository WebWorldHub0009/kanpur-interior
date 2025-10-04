// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa";
import bg from "../assets/images/gallery/p6.jpg"

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  redAccent: "#B8120C",
};

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Gallery Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div
            className="p-5 rounded-full shadow-lg"
            style={{ background: colors.gold, color: colors.charcoal }}
          >
            <FaImages size={40} />
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.h4
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-2xl font-light tracking-wide uppercase"
          style={{ color: colors.cream, fontFamily: "Epunda Slab, serif" }}
        >
          Explore Our Premium Collection
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-4xl md:text-6xl font-bold drop-shadow-lg"
          style={{ color: colors.gold, fontFamily: "Dancing Script, cursive" }}
        >
          Kanpur Furnishing Gallery
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-lg md:text-xl leading-relaxed"
          style={{ color: colors.cream }}
        >
          A curated showcase of elegant fabrics, luxurious curtains, and modern
          furnishing designs that reflect timeless beauty and sophistication.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-4"
        >
          <a
            href="/contact"
            className="px-8 py-3 mt-6 rounded-full font-semibold text-lg shadow-md transition-all duration-300 hover:scale-105"
            style={{
              background: colors.maroon,
              color: colors.cream,
              fontFamily: "Epunda Slab, serif",
            }}
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
