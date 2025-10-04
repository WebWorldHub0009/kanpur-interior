// src/pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#FDF5E6] text-[#1C1C1C] py-20 px-6 md:px-16 lg:px-32">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 heading-slab text-[#800000]"
      >
        Privacy Policy
      </motion.h1>

      {/* Sub-quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center italic text-lg text-[#B8120C] mb-12"
      >
        "Your trust is the fabric that we value the most."
      </motion.p>

      <div className="max-w-5xl mx-auto space-y-10 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3">Introduction</h2>
          <p>
            At <strong>Kanpur Furnishing</strong>, your privacy matters as much as the quality of our designs. 
            This Privacy Policy outlines how we collect, use, and safeguard your information when you engage with our website, 
            products, or services. We are committed to keeping your trust intact and ensuring a transparent experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3">Information We Collect</h2>
          <p>
            We may collect personal details such as your name, email address, phone number, and 
            delivery information when you contact us or make inquiries. Additionally, non-personal 
            data such as browser type, device information, and site usage statistics may be gathered 
            to enhance your browsing experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3">How We Use Your Information</h2>
          <p>
            The information collected helps us provide you with tailored solutions, improve our 
            services, and communicate effectively. We may use your data to share updates, offers, 
            and product launches — but only when you choose to receive them. Your personal 
            information is never sold or misused in any way.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3">Data Security</h2>
          <p>
            Protecting your information is our highest priority. We employ secure systems, 
            encrypted communications, and strict access controls to safeguard your data from 
            unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3">Your Rights</h2>
          <p>
            You have the right to access, update, or request the deletion of your personal 
            information at any time. If you wish to opt out of promotional communication, 
            you can contact us directly, and we will honor your request promptly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3">Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy or how your information 
            is handled, please reach out to us at:  
            <br />
            <span className="font-semibold text-[#800000]">
              kanpurfurnishing@gmail.com
            </span>
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="bg-[#800000] text-white px-8 py-4 rounded-2xl shadow-lg font-semibold text-lg hover:bg-[#B8120C] transition-all"
        >
          Contact Us Today
        </motion.a>
      </div>
    </section>
  );
}
