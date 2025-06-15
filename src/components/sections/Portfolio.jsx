import React, { useState } from "react";
import concert from "../../assets/concert.png";
import shopping from "../../assets/shopping.png";
import portfolioi from "../../assets/portfolioi.png";
import weatheri from "../../assets/weatheri.png";

const Portfolio = () => {

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-[#343a40] py-16 lg:py-5 relative z-2"
    >
      <div className="absolute inset-0   bg-opacity-20"></div>
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-13">
            <div className="relative">
              <h1 className="text-[clamp(55px,8vw,150px)] font-bold text-gray-400 opacity-10 uppercase">
                PORTFOLIO
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-[clamp(25px,2.5vw,36px)] font-bold text-white mb-1">
                    My Work
                  </h2>
                  <div className="w-16 h-0.5 bg-[#20c997] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

            <div className="group rounded-lg w-full h-auto flex items-center justify-center hover:scale-105 transition-transform relative overflow-hidden">
              <img
                src={concert}
                alt="concert"
                className="w-full h-auto transition-all duration-300 group-hover:brightness-20"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-lg font-semibold mb-2">Concert Booking</div>
                <div className="text-white text-sm font-normal mb-2">React.js | Express.js | Node.js | MongoDB</div>
                <div className="text-[#20c997] flex text-sm font-light">
                  <a href="https://github.com/Targ-dev/concert-booking" target="_blank" rel="noopener noreferrer" className="border-b border-dotted">Project Link</a>
                  {/* &nbsp;<p className="text-white">|</p>&nbsp;
                  <a href="#" target="_blank" rel="noopener noreferrer" className="border-b border-dotted">Website Link</a> */}
                </div>
              </div>
              <div className="lg:hidden absolute bottom-4 w-full px-3 flex justify-end">
                <a
                  href="https://github.com/Targ-dev/concert-booking" target="_blank" rel="noopener noreferrer"
                  className="bg-[#232323c8] text-white px-3 py-2 rounded-full text-sm shadow-md"
                >
                  View Project
                </a>
                {/* <a
                  href="#" target="_blank" rel="noopener noreferrer"
                  className="bg-[#232323c8] text-white px-3 py-2 rounded-full text-sm shadow-md"
                >
                  View Website
                </a> */}
              </div>
            </div>

            <div className="group rounded-lg w-full h-auto flex items-center justify-center hover:scale-105 transition-transform relative overflow-hidden">
              <img
                src={portfolioi}
                alt="portfolio"
                className="w-full h-auto transition-all duration-300 group-hover:brightness-20"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-lg font-semibold mb-2">Personal Portfolio</div>
                <div className="text-white text-sm font-normal mb-2">React.js | Tailwind CSS</div>
                <div className="text-[#20c997] flex text-sm font-light">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="border-b border-dotted">Project Link</a>
                  {/* &nbsp;<p className="text-white">|</p>&nbsp;
                  <a href="#" target="_blank" rel="noopener noreferrer" className="border-b border-dotted">Website Link</a> */}
                </div>
              </div>
              <div className="lg:hidden absolute bottom-4 w-full px-3 flex justify-end">
                <a
                  href="#" target="_blank" rel="noopener noreferrer"
                  className="bg-[#232323c8] text-white px-3 py-2 rounded-full text-sm shadow-md"
                >
                  View Project
                </a>
                {/* <a
                  href="#" target="_blank" rel="noopener noreferrer"
                  className="bg-[#232323c8] text-white px-3 py-2 rounded-full text-sm shadow-md"
                >
                  View Website
                </a> */}
              </div>
            </div>

            <div className="group rounded-lg w-full h-auto flex items-center justify-center hover:scale-105 transition-transform relative overflow-hidden">
              <img
                src={shopping}
                alt="shopping-cart"
                className="w-full h-auto transition-all duration-300 group-hover:brightness-20"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-lg font-semibold mb-2">Shopping Cart</div>
                <div className="text-white text-sm font-normal mb-2">Express.js | Node.js | MongoDB</div>
                <div className="text-[#20c997] flex text-sm font-light">
                  <a href="https://github.com/Targ-dev/ecommerce-backend" target="_blank" rel="noopener noreferrer" className="border-b border-dotted">Project Link</a>
                  {/* &nbsp;<p className="text-white">|</p>&nbsp;
                  <a href="#" target="_blank" rel="noopener noreferrer" className="border-b border-dotted">Website Link</a> */}
                </div>
              </div>
              <div className="lg:hidden absolute bottom-4 w-full px-3 flex justify-end">
                <a
                  href="https://github.com/Targ-dev/ecommerce-backend" target="_blank" rel="noopener noreferrer"
                  className="bg-[#232323c8] text-white px-3 py-2 rounded-full text-sm shadow-md"
                >
                  View Project
                </a>
                {/* <a
                  href="#" target="_blank" rel="noopener noreferrer"
                  className="bg-[#232323c8] text-white px-3 py-2 rounded-full text-sm shadow-md"
                >
                  View Website
                </a> */}
              </div>
            </div>

            <div className="group rounded-lg w-full h-auto flex items-center justify-center hover:scale-105 transition-transform relative overflow-hidden">
              <img
                src={weatheri}
                alt="weather"
                className="w-full h-auto transition-all duration-300 group-hover:brightness-20"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-lg font-semibold mb-2">Weather App</div>
                <div className="text-white text-sm font-normal mb-2">HTML5 | CSS | JavaScript | REST API</div>
                <div className="text-[#20c997] flex text-sm font-light">
                  <a href="https://github.com/Targ-dev/simple-weather-ui" target="_blank" rel="noopener noreferrer" className="border-b border-dotted">Project Link</a>&nbsp;<p className="text-white">|</p>&nbsp;
                  <a href="https://targ-dev.github.io/simple-weather-ui/" target="_blank" rel="noopener noreferrer" className="border-b border-dotted">Website Link</a>
                </div>
              </div>
              <div className="lg:hidden absolute bottom-4 w-full px-3 flex justify-between">
                <a
                  href="https://targ-dev.github.io/simple-weather-ui/" target="_blank" rel="noopener noreferrer"
                  className="bg-[#232323c8] text-white px-3 py-2 rounded-full text-sm shadow-md"
                >
                  View Website
                </a>
                <a
                  href="https://github.com/Targ-dev/simple-weather-ui" target="_blank" rel="noopener noreferrer"
                  className="bg-[#232323c8] text-white px-3 py-2 rounded-full text-sm shadow-md"
                >
                  View Project
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
