// src/components/HowItWorks.jsx
import React from "react";
import {
  FaCouch,
  FaPaintRoller,
  FaLayerGroup,
  FaHandHoldingHeart,
} from "react-icons/fa";

const colors = {
  maroon: "#800000",
  gold: "#D4AF37",
  cream: "#FAF7F2",
  white: "#FFFFFF",
  textDark: "#1C1C1C",
};

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We begin by understanding your furnishing needs, space details, and style preferences for a personalized approach.",
    icon: <FaHandHoldingHeart size={28} />,
  },
  {
    id: 2,
    title: "Customized Design",
    description:
      "Our team curates premium fabrics, wallpapers, and designs that align with your vision of luxury and comfort.",
    icon: <FaLayerGroup size={28} />,
  },
  {
    id: 3,
    title: "Craft & Installation",
    description:
      "From curtains to blinds and sofa fabrics, we craft and install with precision, ensuring elegance in every detail.",
    icon: <FaCouch size={28} />,
  },
  {
    id: 4,
    title: "Final Touch & Care",
    description:
      "We deliver a polished finish and guide you on upkeep, ensuring your furnishing stays beautiful for years.",
    icon: <FaPaintRoller size={28} />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.maroon}, ${colors.textDark})`,
        }}
      ></div>

      {/* Decorative Wave SVG */}
      <svg
        className="absolute top-0 left-0 w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colors.gold}
          fillOpacity="0.3"
          d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,112C672,107,768,117,864,144C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L0,0Z"
        ></path>
      </svg>

      {/* Header */}
      <div className="relative z-10 text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white heading-slab drop-shadow-lg">
          How{" "}
          <span
            className="heading-script"
            style={{ color: colors.gold }}
          >
            Kanpur Furnishing
          </span>{" "}
          Works
        </h2>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
          A premium 4-step process that brings you luxury curtains, blinds,
          wallpapers, and fabrics — crafted with style and sophistication.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-md"
              style={{
                backgroundColor: colors.gold,
                color: colors.maroon,
              }}
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3
              className="text-lg font-semibold mb-3 heading-slab"
              style={{ color: colors.maroon }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
