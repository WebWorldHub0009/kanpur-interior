// src/components/FAQKanpur.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCouch, FaPaintBrush, FaUsers, FaPlus } from "react-icons/fa";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

const faqCategories = {
  "Our Products": {
    icon: <FaCouch className="text-2xl" style={{ color: colors.gold }} />,
    faqs: [
      {
        question: "What types of curtains do you offer?",
        answer:
          "We offer premium curtains, customized curtains, blinds, wallpapers, and high-quality sofa fabrics tailored to your style.",
      },
      {
        question: "Can I customize the design?",
        answer:
          "Yes, all our products can be customized in terms of fabric, color, pattern, and size to perfectly match your home decor.",
      },
      {
        question: "Are your products durable?",
        answer:
          "Absolutely. We use only high-quality materials ensuring durability and long-lasting elegance for your home.",
      },
    ],
  },
  "Process & Quality": {
    icon: <FaPaintBrush className="text-2xl" style={{ color: colors.maroon }} />,
    faqs: [
      {
        question: "How is the quality ensured?",
        answer:
          "Each product goes through strict quality checks for fabric strength, color fastness, and finishing to guarantee premium results.",
      },
      {
        question: "Do you offer installation services?",
        answer:
          "Yes, we provide professional installation for curtains, blinds, and wallpapers to ensure perfect fit and functionality.",
      },
      {
        question: "What is the ordering process?",
        answer:
          "Select your product, choose customization options, confirm your order, and we deliver & install it at your location with care.",
      },
    ],
  },
  "Pricing & Support": {
    icon: <FaUsers className="text-2xl" style={{ color: colors.taupe }} />,
    faqs: [
      {
        question: "Are your products premium priced?",
        answer:
          "We offer high-quality furnishing solutions at competitive prices without compromising on elegance and durability.",
      },
      {
        question: "Do you offer bulk discounts?",
        answer:
          "Yes, discounts are available for large orders or recurring customers. Contact us for a personalized quote.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "Reach out via phone, email, or WhatsApp for inquiries, custom orders, and after-sales assistance.",
      },
    ],
  },
};

const FAQKanpur = () => {
  const [activeTab, setActiveTab] = useState("Our Products");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-full py-16 px-6 md:px-12 text-charcoal overflow-hidden"
      style={{ backgroundColor: colors.cream }}
      aria-labelledby="faq-heading"
    >
      {/* Background Grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              stroke={colors.taupe}
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Heading */}
      <div className="relative z-10 text-center pb-12">
        <h2
          id="faq-heading"
          className="text-4xl md:text-5xl font-heading-slab mb-3"
          style={{ color: colors.gold }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-charcoal max-w-2xl mx-auto text-base md:text-lg">
          Answers to common questions about{" "}
          <span style={{ color: colors.maroon, fontWeight: "600" }}>
            Kanpur Furnishing
          </span>{" "}
          products and services.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
        {/* Left Tabs */}
        <div
          className="md:w-1/3 p-6 flex flex-col gap-4"
          style={{ backgroundColor: colors.maroon }}
        >
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              className={`text-left w-full px-5 py-4 rounded-2xl flex items-center gap-3 font-heading-slab text-sm md:text-base transition-all duration-300 ${
                activeTab === category
                  ? "bg-gold text-charcoal shadow-lg"
                  : "bg-white text-cream hover:bg-gold hover:text-charcoal"
              }`}
              aria-selected={activeTab === category}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Right Questions */}
        <div
          id="faq-content"
          className="md:w-2/3 p-6 sm:p-10 bg-white rounded-r-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-4">
                  <button
                    className="w-full flex cursor-pointer justify-between items-center text-left font-heading-slab text-base sm:text-lg hover:bg-gray-50 transition-colors duration-300 px-3 py-2 rounded-md"
                    onClick={() =>
                      setOpenIndex(index === openIndex ? null : index)
                    }
                    aria-expanded={openIndex === index}
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-bold"
                      style={{ color: colors.gold }}
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-charcoal mt-3 text-sm md:text-base leading-relaxed overflow-hidden px-3"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQKanpur;
