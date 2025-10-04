import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import heroBg from "../assets/images/hero/ccbg.jpg"; // Replace with your actual image

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

const CertificateHero = () => {
  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay layers for premium tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF3720] to-transparent animate-pulse z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-cream px-6"
      >
      

        {/* Elegant Script Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-3xl italic mb-4 heading-script text-[#FDF5E6]/90"
        >
          Elegance. Excellence. Trust.
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-wide heading-slab"
          style={{ color: colors.gold }}
        >
          Our Certifications & Standards
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light"
        >
          At <span style={{ color: colors.gold }}>Kanpur Furnishing</span>, quality is our signature.  
          Every curtain, blind, and wallpaper is crafted to meet the highest standards of artistry, durability, and comfort.
        </motion.p>

        {/* Golden Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 w-32 h-[3px] mx-auto rounded-full"
          style={{ backgroundColor: colors.gold }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default CertificateHero;
