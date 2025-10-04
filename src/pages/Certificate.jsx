import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import CertificateHero from "../components/CertificateHero";

// 🎨 Brand Color Palette
const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

// 🧾 Certificate Data
const certificates = [
  {
    id: 1,
    name: "Udyam Registration 1",
    description:
      "This government-approved certificate represents our official recognition under the MSME sector. It reinforces Kanpur Furnishing’s commitment to transparency, ethical business, and quality craftsmanship. Our Udyam registration ensures our customers receive services and products from a verified, trusted, and compliant establishment.",
    file: "",
    tag: "Govt Approved",
  },
  {
    id: 2,
    name: "Udyam Registration",
    description:
      "Kanpur Furnishing proudly holds its Udyam Registration, marking us as a certified and recognized enterprise in the interior design and furnishing industry. This certificate reflects our dedication to consistent growth, superior quality, and excellence in every detail — from bespoke curtains to premium furniture fabrics.",
    file: "",
    tag: "MSME Verified",
  },
];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <CertificateHero />

      {/* Certificates Section */}
      <section
        className="relative w-full py-20 px-6 md:px-16"
        style={{
          background: `linear-gradient(to bottom, ${colors.cream}, #fff)`,
          color: colors.charcoal,
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 heading-slab"
            style={{ color: colors.charcoal }}
          >
            Verified <span style={{ color: colors.gold }}>Certificates</span>
          </h2>
          <p
            className="max-w-3xl mx-auto text-lg leading-relaxed mb-16"
            style={{ color: colors.taupe }}
          >
            At{" "}
            <span style={{ color: colors.maroon, fontWeight: 600 }}>
              Kanpur Furnishing
            </span>
            , we value{" "}
            <span style={{ color: colors.gold, fontWeight: 600 }}>
              integrity, trust, and authenticity
            </span>
            . Our certificates represent a promise — that every product and
            service meets industry benchmarks and your expectations of
            excellence.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {certificates.map(({ id, name, description, file, tag }) => (
            <div
              key={id}
              className="relative bg-white/95 border border-[#ddd] rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 p-8 text-left overflow-hidden"
            >
              {/* Top Tag */}
              <div
                className="absolute top-4 right-4 text-xs font-semibold px-4 py-1 rounded-full shadow"
                style={{
                  background: `linear-gradient(90deg, ${colors.gold}, ${colors.maroon})`,
                  color: colors.cream,
                }}
              >
                {tag}
              </div>

              {/* Title Section */}
              <div className="flex items-center gap-4 mb-4">
                <HiDocumentText
                  className="text-5xl"
                  style={{ color: colors.gold }}
                />
                <h3
                  className="text-2xl font-bold heading-slab"
                  style={{ color: colors.charcoal }}
                >
                  {name}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: colors.taupe }}
              >
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setPreviewFile(file)}
                  className="flex-1 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${colors.maroon}, ${colors.gold})`,
                    boxShadow: `0 0 15px ${colors.gold}60`,
                  }}
                >
                  <FaEye />
                  View Certificate
                </button>

                <a
                  href={file}
                  download
                  className="flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all duration-300"
                  style={{
                    borderColor: colors.gold,
                    color: colors.gold,
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.gold) &
                    (e.currentTarget.style.color = "#fff")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent") &
                    (e.currentTarget.style.color = colors.gold)
                  }
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section
        className="relative text-center text-white py-20"
        style={{
          background: `linear-gradient(135deg, ${colors.maroon}, ${colors.b8120})`,
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <FaShieldAlt className="text-gold text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold heading-slab">
              Government Approved
            </h3>
            <p className="mt-2 text-cream text-sm leading-relaxed">
              All our documents are officially recognized, ensuring full
              compliance and customer assurance.
            </p>
          </div>

          <div>
            <FaCheckCircle className="text-gold text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold heading-slab">
              100% Authentic
            </h3>
            <p className="mt-2 text-cream text-sm leading-relaxed">
              Our credentials reflect true craftsmanship and reliable business
              ethics in every aspect of furnishing.
            </p>
          </div>

          <div>
            <FaUserTie className="text-gold text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold heading-slab">Trusted Brand</h3>
            <p className="mt-2 text-cream text-sm leading-relaxed">
              A legacy of elegance, trust, and excellence that makes Kanpur
              Furnishing a name synonymous with quality.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;
