// src/components/PartnersMarquee.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Logos
import axis from "../assets/images/logos/axis.png";
import bajaj from "../assets/images/logos/bajaj.png";
import bhel from "../assets/images/logos/bhel.png";
import godrej from "../assets/images/logos/godrej.png";
import icici from "../assets/images/logos/icici.png";

import boi from "../assets/images/logos/boi.jpg";
import iob from "../assets/images/logos/iob.png";
import hpcl from "../assets/images/logos/hpcl.jpg";
import bob from "../assets/images/logos/bob.jpg";

const logos = [axis, bajaj, bhel, godrej, icici,bob,hpcl,iob,boi];

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

export default function PartnersMarquee() {
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setDuration(12);
      else setDuration(20);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-10 bg-[#FDF5E6]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-6">
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-2"
          style={{ fontFamily: "'Epunda Slab', serif", color: colors.maroon }}
        >
          Trusted by Leading Brands
        </h2>
        <p
          className="text-base md:text-lg"
          style={{ fontFamily: "'Epunda Slab', serif", color: colors.charcoal }}
        >
          Kanpur Furnishing is proud to collaborate with
          <span style={{ color: colors.gold, fontWeight: "600" }}>
            {" "}Top Industry Leaders
          </span>
          {" "}who trust us for premium furnishing solutions.
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8 items-center"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: duration }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-28 md:w-32 h-20 md:h-24 bg-cream rounded-xl shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Partner Logo ${idx + 1}`}
                className="max-h-12 md:max-h-16 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
