import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";

import img1 from "../assets/images/hero/1.jpg";
import img2 from "../assets/images/hero/4.jpg";
import img3 from "../assets/images/hero/3.jpg";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C", 
};

const HeroSection = () => {
  const bottomContent = (ctaText, points) => (
    <div className="absolute bottom-10 w-full flex flex-col items-center z-10 gap-4">
      {/* CTA Button */}
      <button
        className="flex items-center cursor-pointer gap-2 px-10 py-4 rounded-full font-slab shadow-2xl text-charcoal text-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.8)]"
        style={{
          background: `linear-gradient(90deg, ${colors.gold} 0%, ${colors.b8120} 100%)`,
        }}
      >
        {ctaText} <FaArrowRight />
      </button>

      {/* Three-point feature line */}
      <div className=" px-6 py-3  flex flex-wrap justify-center gap-6 text-sm md:text-base text-cream  max-w-4xl text-center">
        {points.map((point, idx) => (
          <span key={idx}>{point}</span>
        ))}
      </div>
    </div>
  );

  return (
  <section className="relative w-full h-[100vh] font-sans text-white overflow-hidden">
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop
    className="w-full h-full"
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <div
        className="w-full h-full bg-cover bg-center flex flex-col justify-between relative"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/40 to-black/70" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 mt-12 sm:mt-16 md:mt-20">
          <p
            className="uppercase tracking-[3px] sm:tracking-[4px] font-slab mb-2 sm:mb-3 text-gold drop-shadow-lg text-sm sm:text-base"
            style={{ color: colors.gold }}
          >
            Curtains & Wallpapers
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-script leading-snug sm:leading-tight max-w-3xl text-cream drop-shadow-xl"
            style={{ color: colors.cream }}
          >
            Drapes & Walls,{" "}
            <span
              className="text-[#b8120] relative before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-12 sm:before:w-16 before:bg-b8120 before:rounded-full"
              style={{ color: colors.b8120 }}
            >
              Designed to Inspire
            </span>
          </h1>
          <p
            className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl font-sans text-taupe drop-shadow-md"
            style={{ color: colors.taupe }}
          >
            Discover Kanpur Furnishing’s exclusive collection of premium curtains
            and vinyl wallpapers. Luxury crafted for your spaces.
          </p>
        </div>

        {/* CTA + Features */}
        {bottomContent("Explore Collection", [
          "✨ Premium Fabrics",
          "🏠 Perfect Fit for Homes",
          "🎨 Handcrafted Patterns",
        ])}
      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <div
        className="w-full h-full bg-cover bg-center flex flex-col justify-between relative"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/40 to-black/70" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 mt-12 sm:mt-16 md:mt-20">
          <p
            className="uppercase tracking-[3px] sm:tracking-[4px] font-slab mb-2 sm:mb-3 text-gold drop-shadow-lg text-sm sm:text-base"
            style={{ color: colors.gold }}
          >
            Premium Drapes
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-script leading-snug sm:leading-tight max-w-3xl text-cream drop-shadow-xl"
            style={{ color: colors.cream }}
          >
            Elegance in <span style={{ color: colors.maroon }}>Every Fold</span>
          </h1>
          <p
            className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl font-sans text-taupe drop-shadow-md"
            style={{ color: colors.taupe }}
          >
            Handpicked fabrics, luxury finishes, and modern designs crafted to enhance
            your living spaces. Perfectly tailored to fit any window, our drapes offer
            unmatched elegance and sophistication.
          </p>
        </div>

        {bottomContent("View Drapes", [
          "✨ Luxurious Textures",
          "🖼 Modern & Classic Styles",
          "🎨 Custom Designs Available",
        ])}
      </div>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide>
      <div
        className="w-full h-full bg-cover bg-center flex flex-col justify-between relative"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/40 to-black/70" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 mt-12 sm:mt-16 md:mt-20">
          <p
            className="uppercase tracking-[3px] sm:tracking-[4px] font-slab mb-2 sm:mb-3 text-gold drop-shadow-lg text-sm sm:text-base"
            style={{ color: colors.gold }}
          >
            Luxury Wallpapers
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-script leading-snug sm:leading-tight max-w-3xl text-cream drop-shadow-xl"
            style={{ color: colors.cream }}
          >
            Transform Walls with <span style={{ color: colors.maroon }}>Premium Vinyl</span>
          </h1>
          <p
            className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl font-sans text-taupe drop-shadow-md"
            style={{ color: colors.taupe }}
          >
            From textured finishes to modern patterns, our wallpapers add a luxury vibe
            to your interiors.
          </p>
        </div>

        {bottomContent("Browse Wallpapers", [
          "✨ Textured Luxury",
          "🎨 Modern Patterns",
          "🏆 Premium Quality",
        ])}
      </div>
    </SwiperSlide>
  </Swiper>
</section>

  );
};

export default HeroSection;
