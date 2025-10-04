// src/components/FooterKanpur.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaCouch,
  FaCertificate,
  FaClipboardList,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import footerBg from "../assets/images/bg.jpg"; 

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  black: "#000000",
};

const products = [
  { title: "Curtains", slug: "curtains" },
  { title: "Customized Curtains", slug: "customized-curtains" },
  { title: "Blinds", slug: "blinds" },
  { title: "Wallpaper", slug: "wallpaper" },
  { title: "Sofa Fabric", slug: "sofa-fabric" },
];

export default function FooterKanpur() {
  return (
    <footer
      className="relative pt-20 pb-16 px-6 md:px-16 overflow-hidden"
      style={{ fontFamily: "'Epunda Slab', serif" }}
    >
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      ></div>
      <div className="absolute inset-0  z-0"></div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <p
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{ color: colors.maroon }}
          >
            Kanpur Furnishing
          </p>
          <p className="leading-relaxed text-gray-800 text-base mt-2">
            Premium home furnishing solutions crafted with sophistication and
            elegance. From curtains to wallpapers — redefining interiors with
            luxury and comfort.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send/?phone=919792302099&text=Hello%20Kanpur%20Furnishing",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#800000] hover:bg-[#D4AF37] text-[#FDF5E6] transition duration-300 shadow-lg"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Webmail CTA */}
          <div className="mt-5">
            <a
              href="mailto:Info@kanpurfurnishing.in"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-4 py-2 rounded-lg font-semibold hover:bg-[#B8120C] hover:text-[#FDF5E6] transition duration-300 shadow-md"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links + Email */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Products", "/products", <FaCouch />],
              ["Certificates", "/certificates", <FaCertificate />],
              ["Privacy Policy", "/privacy-policy", <FaClipboardList />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-gray-800 hover:text-[#D4AF37] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Email Heading Below Quick Links */}
          <div className="mt-8">
            <h4
              className="text-2xl font-semibold mb-2"
              style={{ color: colors.maroon }}
            >
              Email
            </h4>
            <a
              href="mailto:Info@kanpurfurnishing.in"
              className="text-gray-800 hover:text-[#D4AF37] transition duration-300"
            >
              Info@kanpurfurnishing.in
            </a>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon }}>
            Products
          </h4>
          <ul className="space-y-3">
            {products.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaCouch style={{ color: colors.gold }} />
                <Link
                  to={`/products/${slug}`}
                  className="text-gray-800 hover:text-[#D4AF37] transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon}}>
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4">
            C/o Of Shakuntala Niwas, House No. 8/59 Ground Floor,
            <br />
            Nearby Anjaneya Crystal, GT Road, Krishna Nagar,
            <br />
            Kanpur, Uttar Pradesh 208007
          </address>

          {["+91 9792302099"].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2">
              <FaPhoneAlt style={{ color: colors.gold }} />
              <a
                href={`tel:${num.replace(/\s/g, "")}`}
                className="hover:text-[#D4AF37] transition duration-300"
              >
                {num}
              </a>
            </p>
          ))}

         

          <div className="mt-4">
            <Translator />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-sm border-t border-[#D2B48C]/40 pt-6 relative z-10 space-y-2">
        <VisitorCounter />
        <p className="text-gray-800">
          © {new Date().getFullYear()} Kanpur Furnishing. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#D4AF37] hover:text-[#B8120C] transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
