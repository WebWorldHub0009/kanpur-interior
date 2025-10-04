// src/components/ContactHero.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bg from "../assets/images/hero/cbg.jpg"

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  accent: "#B8120C",
};

export default function ContactHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Contact Kanpur Furnishing"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black/40"        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h4
          className="text-lg uppercase tracking-widest mb-3"
          style={{ color: colors.gold, fontFamily: "Epunda Slab, serif" }}
        >
          Get in Touch
        </h4>

        <h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-snug"
          style={{ color: colors.cream, fontFamily: "Epunda Slab, serif" }}
        >
          Contact <span style={{ color: colors.gold }}>Kanpur Furnishing</span>
        </h1>

        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: colors.taupe, fontFamily: "Dancing Script, cursive" }}
        >
          Let’s transform your space into a masterpiece of luxury & comfort.  
          Reach out to us today for premium furnishing solutions.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block px-8 py-2 text-lg font-semibold rounded-full shadow-lg transition-transform hover:-translate-y-1"
          style={{
            backgroundColor: colors.gold,
            color: colors.charcoal,
            fontFamily: "Epunda Slab, serif",
          }}
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
