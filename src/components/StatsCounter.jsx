// src/components/StatsSection.jsx
import React, { useEffect, useState } from "react";
import { FaCouch, FaSmile, FaPaintBrush, FaUsers } from "react-icons/fa";
import bg from "../assets/images/hero/1.jpg"; 

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

// Counter StatCard
const StatCard = ({ icon: Icon, label, target, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanTarget = target.trim().toUpperCase();
    let multiplier = 1;

    if (cleanTarget.includes("K")) multiplier = 1000;
    if (cleanTarget.includes("M")) multiplier = 1000000;

    const numericPart = parseFloat(cleanTarget.replace(/[^\d.]/g, ""));
    const finalTarget = Math.floor(numericPart * multiplier);

    const duration = 2000; // 2 seconds
    const increment = finalTarget / (duration / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalTarget) {
        current = finalTarget;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatCount = () => {
    const plus = target.includes("+") ? "+" : "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M${plus}`;
    if (count >= 1000) return `${Math.floor(count / 1000)}K${plus}`;
    return `${count}${plus}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4"
        style={{ backgroundColor: color + "22" }}
      >
        <Icon className="text-3xl" style={{ color }} />
      </div>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "'Epunda Slab', serif", color: colors.gold }}
      >
        {formatCount()}
      </div>
      <p
        className="text-sm mt-2"
        style={{ fontFamily: "'Epunda Slab', serif", color: colors.taupe }}
      >
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section
      className="relative py-15 px-6 md:px-20 text-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-14">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{
            fontFamily: "'Epunda Slab', serif",
            color: colors.maroon,
          }}
        >
          Kanpur Furnishing
        </h2>
        <h3
          className="text-4xl md:text-5xl font-bold leading-snug mb-3"
          style={{
            fontFamily: "'Epunda Slab', serif",
            color: colors.gold,
          }}
        >
          Bringing <span style={{ color: colors.maroon }}>Elegance</span> to{" "}
          <span style={{ color: colors.gold }}>Your Home</span>
        </h3>
        <p
          className="text-base md:text-lg italic"
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: colors.cream,
          }}
        >
          Premium furnishing solutions crafted with care, style, and quality
          for every space in your home.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <StatCard
          icon={FaCouch}
          label="Premium Furniture"
          target="500+"
          color={colors.gold}
        />
        <StatCard
          icon={FaSmile}
          label="Happy Clients"
          target="1200+"
          color={colors.maroon}
        />
        <StatCard
          icon={FaPaintBrush}
          label="Custom Designs"
          target="200+"
          color={colors.taupe}
        />
        <StatCard
          icon={FaUsers}
          label="Expert Team"
          target="50+"
          color={colors.b8120}
        />
      </div>
    </section>
  );
};

export default StatsSection;
