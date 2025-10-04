// src/components/ProductSliderKanpur.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// Replace these with actual product images
import curtainsImg from "../assets/images/gallery/p7.jpg";
import customCurtainsImg from "../assets/images/gallery/p5.jpg";
import blindsImg from "../assets/images/gallery/p14.jpg";
import wallpaperImg from "../assets/images/hero/1.jpg";
import sofaFabricImg from "../assets/images/gallery/p2.jpg";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

const products = [
  {
    name: "Curtains",
    slug: "curtains",
    img: curtainsImg,
    description: "Elegant curtains to enhance your home decor with style."
  },
  {
    name: "Customized Curtains",
    slug: "customized-curtains",
    img: customCurtainsImg,
    description: "Tailored curtains perfectly matching your space and taste."
  },
  {
    name: "Blinds",
    slug: "blinds",
    img: blindsImg,
    description: "High-quality blinds balancing light, privacy, and aesthetics."
  },
  {
    name: "Wallpapers",
    slug: "wallpapers",
    img: wallpaperImg,
    description: "Stylish wallpapers for a modern and sophisticated interior."
  },
  {
    name: "Sofa Fabric",
    slug: "sofa-fabric",
    img: sofaFabricImg,
    description: "Luxurious fabrics giving your sofas a premium look and feel."
  }
];


export default function ProductSliderKanpur() {
  return (
    <section className="bg-[#FDF5E6] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left Heading */}
        <div className="col-span-1">
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-wide leading-tight mb-6"
            style={{ fontFamily: "'Epunda", color: colors.maroon }}
          >
            OUR PREMIUM <br />
            <span className="italic relative" style={{ color: colors.gold, fontFamily: "'Dancing Script', cursive" }}>
              PRODUCTS
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#D4AF37]" />
            </span>
            <br />
            THAT DEFINE ELEGANCE
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ fontFamily: "'Epunda Slab', serif", color: colors.charcoal }}
          >
            Kanpur Furnishing brings you bespoke home furnishing solutions with
            <span style={{ color: colors.gold }}> style</span>, 
            <span style={{ color: colors.maroon }}> quality</span>, and 
            <span style={{ color: colors.b8120 }}> elegance</span>.
          </p>
        </div>

        {/* Right Slider */}
        <div className="col-span-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
               <Link to={`/products/${product.slug}`}>
  <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
    <img
      src={product.img}
      alt={product.name}
      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-500"></div>
    <div className="absolute top-6 left-6 text-white text-6xl md:text-7xl font-serif opacity-20">
      {String(index + 1).padStart(2, "0")}
    </div>
    <div className="absolute bottom-6 left-6 text-white">
      <h3
        className="text-xl md:text-2xl font-bold mb-1"
        style={{ fontFamily: "'Epunda Slab', serif", color: colors.gold }}
      >
        {product.name}
      </h3>
      <p
        className="text-sm md:text-base"
        style={{ fontFamily: "'Dancing Script', cursive", color: colors.cream }}
      >
        {product.description}
      </p>
    </div>
  </div>
</Link>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
