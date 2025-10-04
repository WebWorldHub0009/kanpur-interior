// src/components/ProductHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero/pbg.jpg"; // replace with Kanpur Furnishing bg

// 🎨 Brand Colors
const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  redAccent: "#B8120C",
};

export default function ProductHero() {
  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Overlay with Gradient */}
      <div className="absolute inset-0 bg-black/70"></div>
      
    

      {/* ✨ Content */}
      <div className="relative z-10 max-w-5xl px-6">
        {/* Title */}
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl mb-6"
          style={{ fontFamily: "Epunda Slab, serif", color: colors.cream }}
        >
          Elevate Your Home with{" "}
          <span
            style={{
              color: colors.gold,
              fontFamily: "Dancing Script, cursive",
              fontWeight: "bold",
            }}
          >
            Kanpur Furnishing
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          style={{ fontFamily: "Poppins, sans-serif", color: colors.taupe }}
        >
          Explore our exquisite{" "}
          <span style={{ color: colors.redAccent, fontWeight: "600" }}>
            curtains
          </span>
          ,{" "}
          <span style={{ color: colors.gold, fontWeight: "600" }}>
            sofa fabrics
          </span>
          ,{" "}
          <span style={{ color: colors.maroon, fontWeight: "600" }}>
            wallpapers
          </span>
          , and{" "}
          <span style={{ color: colors.charcoal, fontWeight: "600" }}>
            blinds
          </span>
          — crafted with elegance and luxury to redefine interiors.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          {/* Contact Us CTA */}
          <Link to="/contact">
            <button
              className="cursor-pointer px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
              style={{
                backgroundColor: colors.gold,
                color: colors.charcoal,
                fontFamily: "Epunda Slab, serif",
              }}
            >
              ✨ Book Consultation
            </button>
          </Link>

          {/* Gallery CTA */}
          <Link to="/gallery">
            <button
              className="cursor-pointer px-8 py-3 rounded-full text-lg font-semibold border-2 shadow-md transition-all duration-300 transform hover:scale-110 hover:bg-cream hover:text-charcoal"
              style={{
                borderColor: colors.gold,
                color: colors.cream,
                fontFamily: "Epunda Slab, serif",
              }}
            >
              📸 Explore Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
