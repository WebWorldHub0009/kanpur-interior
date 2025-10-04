// src/components/About.jsx
import React from "react";
import { FaLeaf, FaHammer, FaPaintBrush, FaGlobeAsia } from "react-icons/fa";
import aboutImg1 from "../assets/images/gallery/p4.jpg";
import aboutImg2 from "../assets/images/gallery/p2.jpg";
import aboutImg3 from "../assets/images/gallery/p3.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

const features = [
  {
    icon: <FaLeaf className="text-2xl" style={{ color: colors.gold }} />,
    title: "Eco-Friendly Materials",
    desc: "Premium quality fabrics and wallpapers that are safe and sustainable.",
  },
  {
    icon: <FaHammer className="text-2xl" style={{ color: colors.b8120 }} />,
    title: "Handcrafted Excellence",
    desc: "Meticulous craftsmanship ensures unmatched quality and durability.",
  },
  {
    icon: <FaPaintBrush className="text-2xl" style={{ color: colors.gold }} />,
    title: "Custom Designs",
    desc: "Tailored curtains and wallpapers to match your interiors perfectly.",
  },
  {
    icon: <FaGlobeAsia className="text-2xl" style={{ color: colors.charcoal }} />,
    title: "Pan India Reach",
    desc: "Delivering luxury furnishings across India with trust and reliability.",
  },
];

const stats = [
  { number: "15+", label: "Years of Expertise", color: colors.gold },
  { number: "1000+", label: "Projects Delivered", color: colors.b8120 },
  { number: "100%", label: "Customer Satisfaction", color: colors.charcoal },
  { number: "Pan India", label: "Trusted Presence", color: colors.maroon },
];

const aboutSlider = [aboutImg1, aboutImg2, aboutImg3];

export default function About() {
  return (
    <section
      className="relative bg-[#FDF5E6] py-12 px-6 md:px-16 overflow-hidden"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Watermark */}
      <h1 className="absolute top-20 inset-0 text-[6rem] md:text-[10rem] font-extrabold tracking-widest opacity-5  text-center select-none pointer-events-none">
        Kanpur
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#800000]"
            style={{ color: colors.maroon, fontFamily: "'Dancing Script', cursive" }}
          >
            Crafting Elegance in Furnishing
          </h2>
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{ color: colors.charcoal, fontFamily: "'Epunda Slab', serif" }}
          >
            Blending style with luxury — premium curtains, drapes, and vinyl
            wallpapers designed to transform your interiors.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left */}
          <div>
            <h3
              className="text-3xl font-semibold mb-4 text-taupe"
              style={{ color: colors.maroon, }}
            >
              Who We Are
            </h3>
            <p style={{ color: colors.charcoal, lineHeight: '1.8' }}>
              At Kanpur Furnishing, we create premium curtains and vinyl
              wallpapers that bring elegance and luxury into homes and offices.
              Every product is crafted with attention to detail, quality, and
              sustainability. Our years of experience help us deliver products
              that customers trust and love.
            </p>
            <Link to="/about">
              <button
                className="mt-4 px-6 py-2 cursor-pointer rounded-md shadow-md hover:scale-105 transition"
                style={{ backgroundColor: colors.charcoal, color: colors.cream, fontFamily: "'Epunda Slab', serif" }}
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Middle Slider */}
          <div className="flex justify-center">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="w-full md:w-[90%] rounded-lg shadow-xl"
            >
              {aboutSlider.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`About Slide ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="rounded-lg shadow-xl object-cover w-full h-[350px] md:h-[420px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <p style={{ fontFamily: "'Epunda Slab', serif", color: colors.charcoal }} className="font-semibold">{item.title}</p>
                  <p style={{ color: colors.taupe }} className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-md bg-cream"
              style={{ borderTop: `4px solid ${stat.color}` }}
            >
              <h3
                className="text-3xl font-bold"
                style={{ color: stat.color, fontFamily: "'Epunda Slab', serif" }}
              >
                {stat.number}
              </h3>
              <p style={{ color: colors.charcoal, fontFamily: "'Epunda Slab', serif" }} className="mt-2 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
