// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import ContactHero from "../components/ContactHero";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
// import MapSection from "../components/MapSection";
import bg from "../assets/images/hero/1.jpg"

const products = [
  { title: "Customize Curtains", slug: "customize-curtains" },
  { title: "Sofa Fabric", slug: "sofa-fabric" },
  { title: "Wallpapers", slug: "wallpapers" },
  { title: "Blinds", slug: "blinds" },
  { title: "Curtains", slug: "curtains" },
];

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  accent: "#B8120C",
};

const Contact = () => {


  return (
    <>
      <ContactHero />

      {/* Contact Section */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F7F5F2] text-[#1C1C1C] mt-1">
        {/* Left Panel: Info */}
        <div className="w-full lg:w-1/2 bg-[#faf7f7] px-10 py-16 shadow-2xl flex flex-col justify-center">
          <h2
            className="text-4xl font-bold mb-6 pb-3 inline-block border-b-4"
            style={{
              borderColor: colors.gold,
              color: colors.maroon,
              fontFamily: "Epunda Slab, serif",
            }}
          >
            Let’s Connect
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: colors.charcoal, fontFamily: "Dancing Script" }}
          >
            At <span style={{ color: colors.gold, fontWeight: "600" }}>
              Kanpur Furnishing
            </span>, we believe every space deserves luxury, comfort, and elegance.  
            Reach out to us today and let’s transform your interiors.
          </p>

          <div className="space-y-6 text-base">
            <div className="flex items-start gap-3">
              <FaPhoneAlt size={22} style={{ color: colors.gold }} />
              <p className="text-charcoal">+91 8299334764</p>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope size={22} style={{ color: colors.gold }} />
              <p className="text-charcoal">info@kanpurfurnishing.in</p>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt size={22} style={{ color: colors.gold }} />
              <p className="leading-relaxed">
                C/o Of Shakuntala Niwas, House No. 8/59 Ground Floor,  
                Nearby Anjaneya Crystal, GT Road, Krishna Nagar,  
                Kanpur, Uttar Pradesh 208007
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-5 text-2xl">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:scale-110 transition transform duration-300 cursor-pointer"
                  style={{ color: colors.maroon }}
                />
              )
            )}
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl">
          {bg ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
          )}
          <div className="absolute inset-0 bg-black/80" />

          {/* Form */}
          <form
            action="https://formsubmit.co/info@kanpurfurnishing.in"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3
              className="text-2xl font-bold mb-6 border-b-2 inline-block"
              style={{
                borderColor: colors.gold,
                color: colors.gold,
                fontFamily: "Epunda Slab, serif",
              }}
            >
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-gold outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-gold outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-gold outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-gold outline-none"
              />

              <select
                name="product"
                required
                className="bg-transparent border-b border-gray-400 text-white py-2 focus:border-gold outline-none"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select Product
                </option>
                {products.map((p, i) => (
                  <option key={i} value={p.slug} className="text-black">
                    {p.title}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-gold outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 cursor-pointer font-semibold rounded-full transition duration-300 shadow-lg hover:scale-105"
              style={{
                backgroundColor: colors.gold,
                color: colors.charcoal,
                fontFamily: "Epunda Slab, serif",
              }}
            >
              Send Message
            </button>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.kanpurfurnishing.in/"
            />
          </form>
        </div>
      </section>

      {/* <MapSection /> */}
    </>
  );
};

export default Contact;
