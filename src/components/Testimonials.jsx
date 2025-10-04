// src/components/TestimonialSliderKanpur.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
};

const testimonials = [
  { name: "Anil Mehra", title: "Homeowner, Kanpur", text: "Kanpur Furnishing transformed my living room with elegant curtains and premium sofa fabric. Truly luxurious!" },
  { name: "Simran Kaur", title: "Interior Designer, Kanpur", text: "Their attention to detail and fabric quality is unmatched. My clients loved the stylish home decor pieces!" },
  { name: "Rahul Verma", title: "Café Owner, Kanpur", text: "The blinds and curtains gave my café a warm, cozy feel. Excellent quality and service." },
  { name: "Priya Nair", title: "Architect, Kanpur", text: "Perfect blend of aesthetics and functionality. Every room we styled with Kanpur Furnishing stands out!" },
  { name: "Arvind Sharma", title: "Resort Owner, Rishikesh", text: "Guests are impressed by the premium look and eco-friendly materials. Highly recommend!" },
  { name: "Neha Patel", title: "Teacher, Kanpur", text: "Affordable and high-quality. The products brought elegance and comfort to my classrooms." },
  { name: "Vikram Singh", title: "Homeowner, Kanpur", text: "Loved the customization options. Every curtain fits perfectly and looks stunning!" },
  { name: "Shweta Agarwal", title: "Interior Designer, Kanpur", text: "From wallpapers to blinds, everything screams premium quality and style." },
  { name: "Rohit Bansal", title: "Office Manager, Kanpur", text: "Professional service and top-notch products. Made our office interiors look spectacular." },
  { name: "Ananya Sharma", title: "Blogger, Kanpur", text: "Eco-friendly and elegant furnishing solutions. Totally satisfied with my purchase!" },
];

export default function TestimonialSliderKanpur() {
  return (
    <section className="relative w-full py-16 px-4 md:px-10 font-[Raleway] overflow-hidden" >
      {/* Background Accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: `radial-gradient(circle at top left, ${colors.gold}20, transparent 70%)` }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 blur-3xl rounded-full animate-pulse" style={{ backgroundColor: `${colors.maroon}30` }} />
      </div>

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "Epunda Slab, serif", color: colors.maroon }}>
          What Our <span style={{ fontFamily: "Dancing Script, cursive", color: colors.gold }}>Clients Say</span>
        </h2>
        <p className="italic mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: colors.charcoal }}>
          “Trusted for generations to deliver elegant and durable home furnishing — bringing comfort and style to every space.”
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative rounded-2xl p-8 bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-charcoal">
              <span className="absolute -top-5 left-5 text-xs font-bold px-3 py-1 rounded-full shadow-md" style={{ backgroundColor: colors.maroon, color: colors.cream }}>
                ★ Verified Client
              </span>
              <FaQuoteLeft className="text-3xl mb-4" style={{ color: colors.maroon }} />
              <p className="mb-6 italic leading-relaxed" style={{ color: colors.charcoal }}>{item.text}</p>
              <div>
                <p className="font-semibold text-lg" style={{ color: colors.gold }}>{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
