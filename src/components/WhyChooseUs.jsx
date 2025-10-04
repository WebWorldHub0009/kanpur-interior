// src/components/WhyChooseUs.jsx
import React, { useState, useEffect } from "react";
import { FaBuilding, FaLeaf, FaUsers, FaRegHandshake } from "react-icons/fa";
import bgImg from "../assets/images/hero/3.jpg";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

export default function WhyChooseUs() {
  const quotes = [
    "Elegance in every fold — curtains and drapes that define luxury.",
    "Sustainability meets style — premium furnishings for your home.",
    "Trusted craftsmanship — transforming interiors across Kanpur and beyond.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})`, fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 "></div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col justify-between h-full py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-wide"
            style={{ color: colors.maroon, fontFamily: "'Dancing Script', cursive" }}
          >
            WHY <br /> CHOOSE US?
          </h2>

          {/* Right Quote */}
          <blockquote
            className="text-cream text-lg sm:text-xl md:text-2xl font-taupe italic max-w-lg leading-relaxed transition-all duration-500"
            style={{ color: colors.cream  }}
          >
            “{quotes[currentQuote]}”
          </blockquote>
        </div>

        {/* Bottom Features */}
        <div className="absolute bottom-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full px-4 md:px-0">
          {[
            {
              icon: <FaBuilding className="text-3xl mb-3" style={{ color: colors.maroon }} />,
              title: "Architectural Excellence",
              desc: "Iconic projects by Kanpur Furnishing built with precision and style.",
            },
            {
              icon: <FaLeaf className="text-3xl mb-3" style={{ color: colors.maroon }} />,
              title: "Sustainability First",
              desc: "Eco-friendly fabrics and wallpapers that honor the environment.",
            },
            {
              icon: <FaUsers className="text-3xl mb-3" style={{ color: colors.maroon }} />,
              title: "Customer-Centric",
              desc: "Shaping homes with trust, elegance, and a personal touch.",
            },
            {
              icon: <FaRegHandshake className="text-3xl mb-3" style={{ color: colors.maroon }} />,
              title: "Trusted Legacy",
              desc: "Delivering premium furnishings that stand the test of time.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center text-cream p-6  hover:scale-105 transition-all duration-300"
            >
              {feature.icon}
              <h4
                className="font-bold text-lg mt-2 mb-1"
                style={{ fontFamily: "'Epunda Slab', serif", color: colors.gold }}
              >
                {feature.title}
              </h4>
              <p
                className="text-sm"
                style={{ fontFamily: "'Raleway', sans-serif", color: colors.cream }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
