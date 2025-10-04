// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaTruckMoving,
  FaInfoCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaCertificate,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import logo from "../assets/klogo.png"

// ✅ Brand Colors
const colors = {
  black: "#1A1A1A",
  maroon: "#7B1E3A",
  gold: "#D4AF37",
  orange: "#FB8120",
  white: "#FFFFFF",
};

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Products", path: "/products", icon: <FaTruckMoving /> },
  { name: "Gallery", path: "/gallery", icon: <FaEnvelope /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  { name: "Certificates", path: "/certificates", icon: <FaCertificate /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/kanpurfurnishing",
  instagram: "https://www.instagram.com/kanpurfurnishing/",
  linkedin: "https://www.linkedin.com/company/kanpurfurnishing/",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 10px",
    cursor: "pointer",
    fontFamily: "'Epunda Slab', serif",
    color: pathname === path ? colors.gold : colors.black,
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.3s ease",
    position: "relative",
  });

  return (
    <>
      {/* 🔹 Top Header */}
      <div
        style={{
          background: `linear-gradient(to right, ${colors.black}, ${colors.maroon})`,
          color: colors.white,
          fontFamily: "'Libre Franklin', sans-serif",
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-1 text-xs md:text-sm gap-2 sm:gap-0">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center justify-between ">
              <MdEmail style={{ color: colors.gold }} />
              <a
                href="mailto:Info@kanpurfurnishing.in"
                className="hover:text-orange transition"
              >
                Info@kanpurfurnishing.in
              </a>
            </p>
            <p className="flex items-center  gap-1">
              <FaPhoneAlt style={{ color: colors.gold }} />
              <a
                href="tel:+919792302099"
                className="hover:text-orange transition"
              >
                +91 9792302099
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav
        style={{
          backgroundColor: colors.white,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          zIndex: 50,
        }}
        className="w-full px-4 py-2 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-2">
           <img className="h-14 md:h-16 w-full" src={logo} alt="kanpur furnishing" />
          </Link>

          {/* Nav Center */}
          <ul className="hidden md:flex gap-2 text-sm uppercase">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} style={navLinkStyle(item.path)}>
                  {item.icon}
                  {item.name}
                  {/* Hover underline effect */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "0%",
                      height: "2px",
                      backgroundColor: colors.gold,
                      transition: "width 0.3s ease",
                    }}
                    className="hover:w-full"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Right */}
          <div className="hidden md:flex items-center gap-3">
            {Object.entries(socialLinks).map(([k, url]) => {
              const Icon =
                k === "facebook"
                  ? FaFacebookF
                  : k === "instagram"
                  ? FaInstagram
                  : FaLinkedinIn;
              return (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: colors.white,
                    color: colors.maroon,
                    border: `1px solid ${colors.maroon}`,
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-gold hover:text-white"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div style={{ color: colors.black }} className="md:hidden">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>
        </div>

        {/* 🔹 Mobile Panel */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              ref={panelRef}
              style={{
                width: "18rem",
                background: colors.white,
                boxShadow: "2px 0 6px rgba(0,0,0,0.1)",
              }}
              className="h-full px-6 py-4 flex flex-col"
            >
              {/* Mobile brand row */}
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
           <img className="h-14 md:h-16 w-full" src={logo} alt="kanpur furnishing" />
          </Link>
                <FaTimes
                  style={{ color: colors.black }}
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4" />

              {/* Mobile Nav */}
              <nav className="flex flex-col gap-3 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color:
                        pathname === item.path ? colors.gold : colors.black,
                      fontWeight: pathname === item.path ? "600" : "400",
                      fontFamily: "'Epunda Slab', serif",
                    }}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/+919792302099"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    borderRadius: "9999px",
                    backgroundColor: "#25D366",
                    color: colors.white,
                    fontWeight: "600",
                    padding: "10px",
                  }}
                  className="hover:bg-green-700 transition"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1"
              style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
