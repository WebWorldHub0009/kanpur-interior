// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import products  from "./poductsdata"; // 👉 your JSON data
import ProductSliderKanpur from "../components/ServiceSection";

// 🎨 Brand Colors
const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

export default function ProductDetail() {
  const { slug } = useParams();
const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <>
     <section className="w-full bg-[#f5f4f2] py-8 px-6 md:px-5">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: "Epunda Slab, serif", color: colors.charcoal }}
        >
          {product.name}
        </h1>

        {/* Quote */}
        <p
          className="text-xl md:text-2xl text-center italic mb-10"
          style={{ fontFamily: "Dancing Script, cursive", color: colors.maroon }}
        >
          {product.quote}
        </p>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={product.img}
              alt={product.name}
              className="rounded-xl shadow-lg w-full max-w-md border-2"
              style={{ borderColor: colors.gold }}
            />
          </div>

          {/* Description */}
          <div>
            <p
              className="text-xl leading-relaxed mb-8"
              style={{
                color: colors.charcoal,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {product.description}
            </p>

            {/* CTA Button */}
            <Link to="/contact">
              <button
                className="px-8 py-3 cursor-pointer rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-110"
                style={{
                  backgroundColor: colors.maroon,
                  color: colors.cream,
                  fontFamily: "Epunda Slab, serif",
                }}
              >
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <ProductSliderKanpur/>
      <section className="w-full py-10 px-6 md:px-16 bg-[#fdfcf9] text-[#1C1C1C] font-[Poppins] relative overflow-hidden">
        {/* Subtle Decorative Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#F4A300]/30 to-[#E8452D]/30 rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#234A8A]/20 to-[#2BA44A]/20 rounded-full -z-10 animate-pulse"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Epunda Slab, serif", color: colors.charcoal }}
          >
            Elevate Your Space with <span style={{ color: colors.gold }}>Luxury Creations</span>
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed mb-8"
            style={{ color: colors.taupe }}
          >
            At <span style={{ color: colors.maroon, fontWeight: 600 }}>Kanpur Furnishing</span>, we combine 
            <span style={{ color: colors.gold, fontWeight: 600 }}> handcrafted artistry</span> with 
            <span style={{ color: colors.redAccent, fontWeight: 600 }}> contemporary design</span>. 
            From premium curtains and elegant blinds to luxurious furniture, our collection ensures every corner of your home reflects <span style={{ color: colors.gold }}>style, comfort, and sophistication</span>.
          </p>

          <p
            className="text-md md:text-lg leading-relaxed mb-10"
            style={{ color: colors.charcoal }}
          >
            Crafted with precision, sustainability, and durability, our products are designed to last while enhancing the beauty and elegance of your interiors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
              style={{ backgroundColor: colors.gold, color: colors.charcoal, fontFamily: "Zen Dots, sans-serif" }}
            >
              🛒 Enquire Now
            </a>
          
          </div>
        </div>
      </section>
    </>
   
  );
}
