// src/components/AboutHero.jsx
import React from "react";
import { Link } from "react-router-dom";

// Brand Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  orangeGold: "#F4A300",
  whitePure: "#FFFFFF",
};

import bg from "../assets/images/hero/abg.jpg";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={bg}
        alt="About Kanpur Furnishing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left">
        {/* Badge */}
        <span
          className="inline-block mb-6 px-5 py-2 text-sm tracking-widest uppercase rounded-full shadow-md"
          style={{
            backgroundColor: colors.orangeGold,
            color: colors.whitePure,
            fontFamily: "Zen Dots, sans-serif",
          }}
        >
          Since 2010 • Crafting Elegance
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg heading-slab text-white">
          Welcome to{" "}
          <span className="heading-script" style={{ color: colors.orangeGold }}>
            Kanpur
          </span>{" "}
          <span style={{ color: colors.leafGreen }}>Furnishing</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8 text-gray-100 drop-shadow-sm"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          Redefining interiors with{" "}
          <span style={{ color: colors.leafGreen }}>eco-friendly designs</span>,{" "}
          <span style={{ color: colors.deepBlue }}>timeless craftsmanship</span>{" "}
          and{" "}
          <span style={{ color: colors.brightRed }}>modern elegance</span> — making your spaces
          stand out with warmth and style.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            to="/gallery"
            className="px-8 py-3 rounded-full font-semibold border-2 transition-all hover:scale-105 backdrop-blur-md"
            style={{
              borderColor: colors.leafGreen,
              color: colors.leafGreen,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            Explore Gallery
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${colors.orangeGold}, ${colors.brightRed})`,
              color: colors.whitePure,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
