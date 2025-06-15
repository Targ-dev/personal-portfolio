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
                  <h2 className="text-[clamp(25px,2.5vw,36px)] font-bold text-white mb-1">
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
              <p className="text-[#ffffff7c] mb-6 leading-relaxed">
                I'm a self-driven web development enthusiast making a career transition into tech. 
                With a background in another field, I've discovered my passion for programming and 
                committed myself to learning modern web technologies through hands-on practice and 
                continuous improvement.
              </p>
              <p className="text-[#ffffff81] leading-relaxed">
                I'm open to internships or entry-level developer roles where I can apply my skills, 
                grow alongside a team, and contribute meaningfully. My prior work experience has 
                shaped my discipline, communication, and adaptability — qualities I now bring into 
                my journey as a developer.
              </p>
            </div>

            <div className="space-y-3">
              <div className="border-b border-gray-700 pb-3">
                <span className="text-[#ffffffe2] font-bold">Name:</span>{" "}
                <span className="text-gray-300">Sachil V S</span>
              </div>
              <div className="border-b border-gray-700 pb-3">
                <span className="text-[#ffffffe2] font-bold">Email:</span>{" "}
                <span className="text-[#20c997]">sachil12346@gmail.com</span>
              </div>
              <div className="border-b border-gray-700 pb-3">
                <span className="text-[#ffffffe2] font-bold">Age:</span>{" "}
                <span className="text-gray-300">27</span>
              </div>
              <div>
                <span className="text-[#ffffffe2] font-bold">From:</span>{" "}
                <span className="text-gray-300">Kerala, India</span>
              </div>
              <a href="/SACHILVS.pdf" download>
                <button 
                  className="bg-[#20c997] text-gray-900 px-6 py-3 rounded-full hover:bg-[#149670] transition-colors mt-6">
                  <Download className="inline w-4 h-4 mr-2" />
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border-r border-dotted border-gray-700 pr-3">
              <div className="text-4xl font-light text-[#ffffff85] mb-2">
                8+
              </div>
              <div className="text-white opacity-80">Months of Coding</div>
            </div>
            <div className="border-r border-dotted border-gray-700 pr-3">
              <div className="text-4xl font-light text-[#ffffff85] mb-2">
                5+
              </div>
              <div className="text-white opacity-80">Projects</div>
            </div>
            <div className="border-r border-dotted border-gray-700 pr-3">
              <div className="text-4xl font-light text-[#ffffff85] mb-2">
                MERN
              </div>
              <div className="text-white opacity-80">Tech Stack</div>
            </div>
            <div>
              <div className="text-4xl font-light text-[#ffffff85] mb-2">
                <Laptop className="mx-auto" size={42} />
              </div>
              <div className="text-white opacity-80">Job Seeking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
