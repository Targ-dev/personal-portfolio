import React, { useState, useEffect } from "react";
import profilePhot from "../assets/profile-phot.jpg";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

// Sidebar and Navbar Component
const SidebarNavbar = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      id: "about",
      label: "About Me",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
    {
      id: "services",
      label: "What I Do",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      id: "resume",
      label: "Resume",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      id: "testimonials",
      label: "Testimonials",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      id: "contact",
      label: "Contact",
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="lg:hidden bg-[#111418] shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-5 py-2">
          <h1 className="text-xl font-bold text-white">SACHIL V S</h1>

          <div className="flex items-center space-x-4">
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 py-4">
              <a
                href="https://www.linkedin.com/in/sachil-v-s/" target="_blank" rel="noopener noreferrer"
                className="text-[#aab1b8] hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-4 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Targ-dev/" target="_blank" rel="noopener noreferrer"
                className="text-[#aab1b8] hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-4 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1GgiERx3g5/" target="_blank" rel="noopener noreferrer"
                className="text-[#aab1b8] hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-4 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/the.realmz.of.sachu" target="_blank" rel="noopener noreferrer"
                className="text-[#aab1b8] hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Hamburger Btton */}
            <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
          } absolute top-full left-0 right-0 z-40 bg-black/60 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden shadow-lg rounded-b-md`}
        >
          <div className="py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavClick(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors duration-200 border-b border-gray-800 last:border-b-0 ${
                  activeSection === item.id ? "text-[#20c997]" : "text-gray-300"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={item.icon}
                  />
                </svg>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-[#111418] brightness-[0.8] shadow-2xl fixed left-0 top-0 h-full z-40">
        <div className="flex flex-col h-full justify-between">
          {/* Profile Section */}
          <div className="px-8 pt-8 text-center">
            <div className="w-43 h-43 mx-auto mb-4 rounded-full overflow-hidden border-9 border-[#343a40] shadow-lg">
              <img
                src={profilePhot}
                alt="sachil-v-s"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-semibold text-white">Sachil V S</h1>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center">
            <div className="space-y-1 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? "text-[#20c997]  transform scale-105"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white hover:translate-x-1"
                  }`}
                >
                  <span className="font-sans font-semibold w-full">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Social Icons */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/sachil-v-s/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Targ-dev/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/sachil.sunilvk" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/the.realmz.of.sachu" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarNavbar;
