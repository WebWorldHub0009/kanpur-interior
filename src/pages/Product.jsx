// src/pages/Product.jsx
import React from 'react';
import ProductHero from '../components/ProductHero';
import ProductSliderKanpur from '../components/ServiceSection';

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  redAccent: "#B8120C",
};

const Product = () => {
  return (
    <>
      {/* Hero Section */}
      <ProductHero />

            <ProductSliderKanpur />
      {/* Premium Products Intro */}
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

      {/* Product / Services Slider */}
    </>
  );
};

export default Product;
