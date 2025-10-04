import React from "react";
import { motion } from "framer-motion";
import { FaCouch, FaHome, FaPaintBrush ,FaLeaf } from "react-icons/fa";

// Images
import curtainImg from "../assets/images/hero/cur.jpg";
import smartHomeImg from "../assets/images/hero/cur2.jpg";
import furnitureImg from "../assets/images/hero/furn.jpg";
import { Link } from "react-router-dom";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

const WhatWeDo = () => {
  return (
    <section className="relative bg-[#FDF5E6] py-12 px-6 md:px-16 overflow-hidden">
      {/* Grid Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M80 0 L0 0 0 80"
              fill="none"
              stroke="#D2B48C"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Top Small Branding */}
      <p
        className="text-charcoal uppercase tracking-widest font-semibold text-sm md:text-base text-center mb-4"
        style={{ color: colors.charcoal, fontFamily: "'Epunda Slab', serif" }}
      >
        Kanpur Furnishing
      </p>

      {/* Main Heading */}
      <h2
        className="heading-slab text-4xl md:text-5xl text-center font-bold mb-12 leading-tight"
        style={{ color: colors.maroon }}
      >
        Experience the Elegance of{" "}
        <span style={{ color: colors.gold }}>Premium Furnishing</span>
      </h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-12 items-start relative z-10">
        {/* Left Card - Curtains */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-cream  overflow-hidden  flex flex-col items-center"
        >
          <img
            src={curtainImg}
            alt="Curtains"
            className="w-80 h-[50vh] object-cover"
          />
          <div className="p-6 text-center">
            
            <h3
              className="heading-slab text-xl font-bold mb-2"
              style={{ color: colors.charcoal }}
            >
              Curtains
            </h3>
            <p
              className="text-taupe text-sm md:text-base"
              style={{ color: colors.charcoal }}
            >
              Enhance your windows with our premium curtains. The price varies
              depending on material, size, and design. Expect anywhere from{" "}
              <span className="text-b8120 font-semibold">₹500 - ₹5000</span>{" "}
              per pair.
            </p>
          </div>
        </motion.div>

        {/* Middle Card - Smart Homes */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-cream  overflow-hidden  flex flex-col items-center"
        >
          <img
            src={smartHomeImg}
            alt="Smart Homes"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
           
            <h3
              className="heading-slab text-xl font-bold mb-2"
              style={{ color: colors.charcoal }}
            >
              Smart Homes
            </h3>
            <p
              className="text-taupe text-sm md:text-base"
              style={{ color: colors.charcoal }}
            >
              Elevate your lifestyle with modern, intelligent furnishing
              solutions tailored for comfort, elegance, and timeless design.
            </p>
          </div>
        </motion.div>

        {/* Right Card - Furniture & Custom Range */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-cream  overflow-hidden  flex flex-col items-center"
        >
          <img
            src={furnitureImg}
            alt="Custom Furniture"
            className="w-80 h-[50vh] object-cover"
          />
          <div className="p-6 text-center">
          
            <h3
              className="heading-slab text-xl font-bold mb-2"
              style={{ color: colors.charcoal }}
            >
              Our Product Range
            </h3>
            <p
              className="text-taupe text-sm md:text-base"
              style={{ color: colors.charcoal }}
            >
              Kanpur Furnishing also offers <span className="text-maroon font-semibold">custom furniture</span>{" "}
              and premium home décor services. Can’t find what you need? Let us
              craft a bespoke piece tailored to your exact specifications.
            </p>
          </div>
        </motion.div>
      </div>
<div className="flex justify-center">
  <Link
    to="/contact"
    className="text-center text-sm md:text-base font-[Epunda Slab] leading-relaxed text-charcoal hover:text-b8120 transition-colors duration-300 cursor-pointer"
    style={{ color: "#1C1C1C" }}
  >
    Don’t hesitate — reach out to us for expert help and services.{" "}
    <span className="text-[#800000] font-semibold underline hover:text-gold transition-colors duration-300">
      Book Online
    </span>
  </Link>
</div>


    </section>
  );
};

export default WhatWeDo;
