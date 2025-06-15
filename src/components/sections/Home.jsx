import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import banner2 from "../../assets/banner2.jpg";

const Home = ({ onNavigate }) => {
  const phrases = [
    "I'm Sachil V S.",
    "a Web Developer.",
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        const nextText = currentPhrase.substring(0, charIndex + 1);
        setText(nextText);
        setCharIndex((prev) => prev + 1);

        if (nextText === currentPhrase) {
          // Full word typed
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        const nextText = currentPhrase.substring(0, charIndex - 1);
        setText(nextText);
        setCharIndex((prev) => prev - 1);

        if (nextText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative px-4"
    >
      <div className="fixed inset-0 z-1 brightness-[0.2]">
        <img
          src={banner2}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-8">
          Welcome
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8">
          {text}<span className="animate-blink font-extrabold text-5.5xl">|</span>
        </h2>

        <p className="text-[#dee3e4] text-lg sm:text-xl mb-9 max-w-2xl font-light mx-auto px-2">
          based in Alappuzha, Kerala, India.
        </p>

        <button
          className="border-2 border-[#20c997] text-[#20c997] px-6 py-3 sm:px-8 sm:py-3 md:px-11 lg:px-11 rounded-full hover:bg-[#20c997] hover:text-white transition-all duration-300 text-sm sm:text-base cursor-pointer"
          onClick={() => onNavigate("contact")}
        >
          Hire Me
        </button>
      </div>

      <a href="#about">
        <div className="absolute bottom-8 z-50 animate-bounce">
          <ChevronDown className="text-white w-6 h-6" />
        </div>
      </a>
    </section>
  );
};

export default Home;
