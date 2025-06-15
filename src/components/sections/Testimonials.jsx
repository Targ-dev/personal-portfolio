import { Quote } from "lucide-react";
import React, { useState } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dennis Jacques",
      role: "User from USA",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-screen bg-[#212529] flex flex-col justify-center items-center py-16 px-4 lg:py-5 relative z-2"
    >
      <div className="relative z-10 p-8 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="relative">
            <h1 className="text-[clamp(45px,8vw,150px)] font-bold text-[#6c757d] opacity-10 uppercase">
              JOURNEY
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-[clamp(23px,2.5vw,36px)] font-bold text-white mb-1">
                  Into Tech
                </h2>
                <div className="w-16 h-0.5 bg-[#20c997] mx-auto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 mx-20 mb-12">
          <div className="bg-[#111418] rounded-lg p-8 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300">
            <div className="w-full flex justify-start mb-4">
              <Quote className="w-8 h-8 text-[#20c997]" />
            </div>
            <blockquote
              className="text-gray-300 text-base leading-relaxed mb-6 px-10"
              style={{ fontFamily: "'Lora', serif" }}
            >
              <div className="mb-4">
                My interest in web development began long ago, but due to some
                circumstances, I initially worked in non-tech roles like sales,
                customer service, and business operations. These roles taught me
                valuable soft skills like communication, teamwork, and
                adaptability — but I always felt drawn to the tech world.
              </div>
              <div className="mb-4">
                In 2024, I made the decision to seriously pursue a career in
                development. I enrolled in a MERN Stack course and committed
                myself to hands-on learning. Since then, I've been building
                projects, improving my understanding of front-end and back-end
                technologies, and staying consistent in my growth.
              </div>
              <div>
                Now, I'm actively looking for internships or entry-level
                developer positions where I can continue learning, contribute
                meaningfully, and grow within a team. This career switch is a
                step I've taken with clarity and confidence, and I'm excited
                about the journey ahead.
              </div>
            </blockquote>
            <div className="w-full flex justify-end">
              <Quote className="w-8 h-8 text-[#20c997]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
