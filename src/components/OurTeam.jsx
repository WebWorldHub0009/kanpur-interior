// src/components/OurTeam.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

 import ceo from "../assets/images/hero/bharat.jpg"
import dir from "../assets/images/hero/chand.jpeg"
// import ceo from "../assets/images/hero/c.jpg"
import pooja from "../assets/images/hero/pooja.jpeg"
import dhurv from "../assets/images/hero/dhurv.jpeg"

// Brand colors
const colors = {
  maroon: "#800000",
  gold: "#D4AF37",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  whitePure: "#FFFFFF",
  blackPure: "#000000",
};

// Team members with images and roles
const teamMembers = [
  { 
    name: "Bharat Bhatia", 
    role: "CEO", 
    image: ceo, 
    linkedin: "#" 
  },
  { 
    name: "Chanda Bhatia", 
    role: "Director", 
    image: dir, 
    linkedin: "#" 
  },
  { 
    name: "Kailash Bhatia", 
    role: "Founder", 
    image: dir, 
    linkedin: "#" 
  },
  { 
    name: "Pooja Bhatia", 
    role: "Financer", 
    image: pooja, 
    linkedin: "#" 
  },
  { 
    name: "Dhruv Bhatia", 
    role: "Manager", 
    image: dhurv, 
    linkedin: "#" 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatAnimation = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export default function OurTeam() {
  return (
    <section
      className="py-10 px-4 bg-white md:px-20 relative overflow-hidden font-[Poppins]"
     
    >
      {/* Maroon SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={colors.maroon}
          fillOpacity="0.1"
          d="M0,64L80,106.7C160,149,320,235,480,245.3C640,256,800,192,960,181.3C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full mx-auto text-center"
      >
        <motion.h4
          variants={itemVariants}
          className="font-semibold mb-2 text-md uppercase tracking-wider"
          style={{ color: colors.maroon }}
        >
          Our Leadership
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-[Great_Vibes] mb-4"
          style={{ color: colors.charcoal }}
        >
          Meet the Team
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-12 text-lg"
          style={{ color: colors.charcoal }}
        >
          The Kanpur Furnishing team blends expertise, creativity, and dedication to deliver
          premium home décor and furnishing solutions.
        </motion.p>
      </motion.div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <ProfileCard member={member} colors={colors} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 relative z-10">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} member={member} colors={colors} />
        ))}
      </div>
    </section>
  );
}

function ProfileCard({ member, colors }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="flex flex-col items-center space-y-3 p-4 bg-whitePure rounded-3xl shadow-lg relative"
    >
      <motion.div
        {...floatAnimation}
        className="w-32 h-32 rounded-full shadow-xl overflow-hidden border-4 border-gold"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <h4 className="font-bold text-2xl" style={{ color: colors.maroon }}>
        {member.name}
      </h4>
      <p className="text-lg text-charcoal">{member.role}</p>
      <div className="flex gap-4 text-xl">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-gold transition duration-300" />
        </a>
      </div>
    </motion.div>
  );
}
