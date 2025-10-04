// src/components/VisionMission.jsx
import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  accent: "#B8120C",
};

export default function VisionMission() {
  return (
    <section
      className="relative py-10 px-6"
     
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#800000] to-[#D4AF37]" />

      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <h4
          className="text-lg uppercase tracking-widest mb-2"
          style={{ color: colors.gold, fontFamily: "Epunda Slab, serif" }}
        >
          Our Belief
        </h4>
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ color: colors.maroon, fontFamily: "Epunda Slab, serif" }}
        >
          Vision & Mission
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto text-lg"
          style={{ color: colors.taupe, fontFamily: "Dancing Script, cursive" }}
        >
          At Kanpur Furnishing, we blend timeless craftsmanship with modern design, 
          creating spaces that reflect luxury, comfort, and elegance.
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <div className="p-10 rounded-2xl shadow-xl border border-gray-700 transition-transform hover:-translate-y-2 hover:shadow-2xl"
          style={{ backgroundColor: colors.cream }}>
          <div className="flex justify-center items-center w-20 h-20 rounded-full mx-auto mb-6 shadow-lg"
            style={{ backgroundColor: colors.maroon, color: colors.gold }}>
            <FaEye size={36} />
          </div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: colors.charcoal, fontFamily: "Epunda Slab, serif" }}
          >
            Our Vision
          </h3>
          <p
            className="text-lg leading-relaxed"
            style={{ color: colors.charcoal }}
          >
            To be recognized as the leading furnishing brand in India, 
            delivering premium quality, innovative designs, and 
            unparalleled customer satisfaction that transforms 
            every house into a dream home.
          </p>
        </div>

        {/* Mission Card */}
        <div className="p-10 rounded-2xl shadow-xl border border-gray-700 transition-transform hover:-translate-y-2 hover:shadow-2xl"
          style={{ backgroundColor: colors.cream }}>
          <div className="flex justify-center items-center w-20 h-20 rounded-full mx-auto mb-6 shadow-lg"
            style={{ backgroundColor: colors.gold, color: colors.maroon }}>
            <FaBullseye size={36} />
          </div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: colors.charcoal, fontFamily: "Epunda Slab, serif" }}
          >
            Our Mission
          </h3>
          <p
            className="text-lg leading-relaxed"
            style={{ color: colors.charcoal }}
          >
            To consistently deliver premium furnishing products, 
            blending artistry and durability, while ensuring 
            eco-friendly practices and providing an unmatched 
            customer experience built on trust and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
