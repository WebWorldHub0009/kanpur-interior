// src/components/Showcase.jsx
import React, { useState } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GalleryHero from "../components/GalleryHero";

import img1 from "../assets/images/gallery/p1.jpg";
import img2 from "../assets/images/gallery/p2.jpg";
import img3 from "../assets/images/gallery/p3.jpg";
import img4 from "../assets/images/gallery/p4.jpg";
import img5 from "../assets/images/gallery/p5.jpg";
import img6 from "../assets/images/gallery/p6.jpg";
import img7 from "../assets/images/gallery/p7.jpg";
import img8 from "../assets/images/gallery/p8.jpg";
import img9 from "../assets/images/gallery/p9.jpg";
import img10 from "../assets/images/gallery/p10.jpg";
import img11 from "../assets/images/gallery/p11.jpg";
import img12 from "../assets/images/gallery/p12.jpg";
import img13 from "../assets/images/gallery/p13.jpg";
import img14 from "../assets/images/gallery/p14.jpg";
import img15 from "../assets/images/gallery/p15.jpg";
import img16 from "../assets/images/gallery/p16.jpg";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  redAccent: "#B8120C",
};

const media = [
  { src: img1 }, { src: img2 }, { src: img3 }, { src: img4 },
  { src: img5 }, { src: img6 }, { src: img7 }, { src: img8 },
  { src: img9 }, { src: img10 }, { src: img11 }, { src: img12 },
  { src: img13 }, { src: img14 }, { src: img15 }, { src: img16 },
];

const Showcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openMedia = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevMedia = () =>
    setSelectedIndex((prev) => (prev - 1 + media.length) % media.length);
  const nextMedia = () =>
    setSelectedIndex((prev) => (prev + 1) % media.length);

  return (
    <>
      {/* Hero Section */}
      <GalleryHero />

      {/* Gallery Section */}
      <section className="relative bg-[#fdfcf9] px-4 md:px-12 py-16">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-14">
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Epunda Slab, serif", color: colors.charcoal }}
          >
            Our Premium{" "}
            <span
              style={{ color: colors.gold, fontFamily: "Dancing Script, cursive" }}
            >
              Gallery
            </span>
          </h2>
          <div
            className="w-28 h-1 mx-auto mt-4 rounded-full"
            style={{ background: colors.maroon }}
          ></div>
          <p
            className="mt-6 text-lg leading-relaxed"
            style={{ color: colors.taupe, fontFamily: "Poppins, sans-serif" }}
          >
            Step into the world of{" "}
            <span className="font-semibold" style={{ color: colors.maroon }}>
              Kanpur Furnishing
            </span>
            . A collection of{" "}
            <span style={{ color: colors.gold }}>luxury fabrics</span>,{" "}
            <span style={{ color: colors.redAccent }}>bespoke curtains</span>, and
            timeless designs crafted with passion.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          id="gallery"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {media.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
              onClick={() => openMedia(i)}
            >
              <img
                src={item.src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
                <p
                  className="text-base text-white tracking-wide font-semibold"
                  style={{ fontFamily: "Epunda Slab, serif", color: colors.cream }}
                >
                  Kanpur Furnishing
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 backdrop-blur-md bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={media[selectedIndex].src}
                alt="Enlarged"
                loading="lazy"
                className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Close */}
              <button
                className="absolute top-3 right-3 text-2xl p-3 rounded-full shadow-md transition hover:scale-110"
                style={{ background: colors.maroon, color: colors.cream }}
                onClick={closeModal}
              >
                <FaTimes />
              </button>

              {/* Prev */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xl p-3 rounded-full shadow-md transition hover:scale-110"
                style={{ background: colors.gold, color: colors.charcoal }}
                onClick={prevMedia}
              >
                <FaArrowLeft />
              </button>

              {/* Next */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl p-3 rounded-full shadow-md transition hover:scale-110"
                style={{ background: colors.gold, color: colors.charcoal }}
                onClick={nextMedia}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Showcase;
