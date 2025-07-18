import React, { useEffect, useState } from "react";
import { Download, Laptop } from "lucide-react";

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    projects: 0,
    awards: 0,
  });

  useEffect(() => {
    const targets = { experience: 10, clients: 250, projects: 650, awards: 38 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = [];

    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current = Math.min(current + increment, target);
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));

        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      intervals.push(interval);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#212529] py-16 lg:py-5 relative z-2">
      <div className="absolute inset-0   bg-opacity-20"></div>
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-13">
            <div className="relative">
              <h1 className="text-[clamp(55px,8vw,150px)] font-bold text-[#6c757d] opacity-10 uppercase">
                ABOUT ME
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-[clamp(25px,2.5vw,36px)] font-bold text-white mb-1 hover:text-[#20c997] transition-colors duration-300">
                    Know Me More
                  </h2>
                  <div className="w-16 h-0.5 bg-[#20c997] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h3 className="text-3xl text-white mb-6 font-semibold">
                I'm <span className="text-[#20c997]">Sachil V S</span>, a Web
                Developer
              </h3>
              <p className="text-[#ffffff81] mb-6 leading-relaxed hover:text-[#ffffff9c] transition-colors duration-300">
                I'm a self-driven web development enthusiast making a career transition into tech. 
                With a background in another field, I've discovered my passion for programming and 
                committed myself to learning modern web technologies through hands-on practice and 
                continuous improvement.
              </p>
              <p className="text-[#ffffff81] leading-relaxed hover:text-[#ffffff9c] transition-colors duration-300">
                I'm open to internships or entry-level developer roles where I can apply my skills, 
                grow alongside a team, and contribute meaningfully. My prior work experience has 
                shaped my discipline, communication, and adaptability — qualities I now bring into 
                my journey as a developer.
              </p>
            </div>

            <div className="space-y-3">
              <div className="border-b border-gray-700 pb-3 hover:border-[#20c997] transition-colors duration-300 transform hover:scale-105">
                <span className="text-[#ffffffe2] font-bold">Name:</span>{" "}
                <span className="text-gray-300">Sachil V S</span>
              </div>
              <div className="border-b border-gray-700 pb-3 hover:border-[#20c997] transition-colors duration-300 transform hover:scale-105">
                <span className="text-[#ffffffe2] font-bold">Email:</span>{" "}
                <span className="text-[#20c997]">sachil12346@gmail.com</span>
              </div>
              <div className="border-b border-gray-700 pb-3 hover:border-[#20c997] transition-colors duration-300 transform hover:scale-105">
                <span className="text-[#ffffffe2] font-bold">Age:</span>{" "}
                <span className="text-gray-300">27</span>
              </div>
              <div className="transition-colors duration-300 transform hover:scale-105">
                <span className="text-[#ffffffe2] font-bold">From:</span>{" "}
                <span className="text-gray-300">Kerala, India</span>
              </div>
              <a href="/SACHILVS.pdf" download>
                <button 
                  className="bg-[#20c997] text-gray-900 px-6 py-3 rounded-full md:hover:bg-[#149670] transition-all duration-300 mt-6 transform hover:scale-105 hover:shadow-lg hover:shadow-[#20c997]/25 active:scale-95">
                  <Download className="inline w-4 h-4 mr-2" />
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border-r border-dotted border-gray-700 pr-3 hover:border-[#20c997] transition-all duration-300 transform hover:scale-110 group">
              <div className="text-4xl font-light text-[#ffffff85] mb-2 group-hover:text-[#20c997] transition-colors duration-300">
                8+
              </div>
              <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">Months of Coding</div>
            </div>
            <div className="border-r border-dotted border-gray-700 pr-3 hover:border-[#20c997] transition-all duration-300 transform hover:scale-110 group">
              <div className="text-4xl font-light text-[#ffffff85] mb-2 group-hover:text-[#20c997] transition-colors duration-300">
                5+
              </div>
              <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">Projects</div>
            </div>
            <div className="border-r border-dotted border-gray-700 pr-3 hover:border-[#20c997] transition-all duration-300 transform hover:scale-110 group">
              <div className="text-4xl font-light text-[#ffffff85] mb-2 group-hover:text-[#20c997] transition-colors duration-300">
                MERN
              </div>
              <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">Tech Stack</div>
            </div>
            <div className="hover:border-[#20c997] transition-all duration-300 transform hover:scale-110 group">
              <div className="text-4xl font-light text-[#ffffff85] mb-2 group-hover:text-[#20c997] transition-colors duration-300">
                <Laptop className="mx-auto transform group-hover:rotate-12 transition-transform duration-300" size={42} />
              </div>
              <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">Job Seeking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
