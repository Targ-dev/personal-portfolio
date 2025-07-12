import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  const achievements = [
    {
      year: "2022 - 2024",
      title: "Business Development Executive",
      subtitle: "Mechanical City Power Tools",
      description:
        "Built strong client relationships and analyzed trends to support business strategy, enhancing product thinking skills.",
    },
    {
      year: "2021 - 2022",
      title: "Store Assistant",
      subtitle: "Reliance Jio Infocomm Ltd",
      description:
        "Managed inventory and POS accuracy while assisting customers, developing attention to detail and service mindset.",
    },
    {
      year: "2021 - 2021",
      title: "Sales Executive",
      subtitle: "SBI Cards",
      description:
        "Met sales targets through proactive client engagement and teamwork, strengthening communication and goal focus.",
    },
    {
      year: "2018 - 2020",
      title: "Office Assistant",
      subtitle: "Tharayil Sea Foods",
      description:
        "Handled inventory records and shipping documents, building strong organizational and multitasking abilities.",
    },
  ];

const skills = [
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
  { name: "HTML5" },
  { name: "CSS" },
  { name: "Bootstrap" },
  { name: "Tailwind CSS" }
];

  return (
    <section id="resume" className="min-h-screen bg-[#212529] py-16 lg:py-5 relative z-2">
      <div className="absolute inset-0 bg-opacity-20"></div>
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-13">
            <div className="relative">
              <h1 className="text-[clamp(55px,8vw,150px)] font-bold text-[#6c757d] opacity-10 uppercase">
                SUMMARY
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-[clamp(25px,2.5vw,36px)] font-bold text-white mb-1 hover:text-[#20c997] transition-colors duration-300">
                    Resume
                  </h2>
                  <div className="w-16 h-0.5 bg-[#20c997] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl text-white font-bold mb-8 hover:text-[#20c997] transition-colors duration-300">
                My Education
              </h3>
              <div className="space-y-6">
                <div className="bg-[#111418] p-6 rounded-lg hover:bg-[#1a1e23] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-[#20c997]/20 group">
                  <span className="bg-[#20c997] text-white px-3 py-1 rounded text-sm font-medium group-hover:bg-[#1ba384] group-hover:scale-110 transition-all duration-300">
                    2015 - 2018
                  </span>
                  <h4 className="text-xl text-white mt-4 mb-2 group-hover:text-[#20c997] transition-colors duration-300">
                    BSc Computer Science
                  </h4>
                  <p className="text-[#20c997] mb-3 group-hover:text-[#1ba384] transition-colors duration-300">University of Kerala</p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    Gained a strong foundation in programming, data structures,
                    and computer systems, which sparked my interest in web
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white font-bold mb-8 hover:text-[#20c997] transition-colors duration-300">
                Courses & Training
              </h3>
              <div className="space-y-6">
                <div className="bg-[#111418] p-6 rounded-lg hover:bg-[#1a1e23] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-[#20c997]/20 group">
                  <span className="bg-[#20c997] text-white px-3 py-1 rounded text-sm font-medium group-hover:bg-[#1ba384] group-hover:scale-110 transition-all duration-300">
                    2024 - 2025
                  </span>
                  <h4 className="text-xl text-white mt-4 mb-2 group-hover:text-[#20c997] transition-colors duration-300">
                    Full-Stack Web Development (MERN Stack)
                  </h4>
                  <p className="text-[#20c997] mb-3 group-hover:text-[#1ba384] transition-colors duration-300">Mashupstack</p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    Completed hands-on training in MongoDB, Express.js, React,
                    and Node.js. Built real-world projects and gained practical
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl text-white font-bold mb-8 hover:text-[#20c997] transition-colors duration-300">
              My Experience
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {achievements.map((item, index) => (
                <div key={index}>
                  <div className="space-y-6">
                    <div className="bg-[#111418] p-6 rounded-lg hover:bg-[#1a1e23] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-[#20c997]/25 group hover:-translate-y-1">
                      <span className="bg-[#20c997] text-white px-3 py-1 rounded text-sm font-medium group-hover:bg-[#1ba384] group-hover:scale-110 transition-all duration-300">
                        {item.year}
                      </span>
                      <h4 className="text-xl text-white mt-4 mb-2 group-hover:text-[#20c997] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[#20c997] mb-3 group-hover:text-[#1ba384] transition-colors duration-300">{item.subtitle}</p>
                      <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl text-white mb-8 hover:text-[#20c997] transition-colors duration-300">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skills.map((skill, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="flex justify-start mb-2">
                  <span className="text-white group-hover:text-[#20c997] transition-all duration-300 group-hover:scale-105 group-hover:font-semibold">{skill.name}</span>
                  {/* <span className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">50%</span> */}
                </div>
                <div className="w-full bg-[#111418] rounded-full h-2 hover:bg-[#1a1e23] transition-all duration-300 overflow-hidden relative group-hover:h-3 group-hover:shadow-lg group-hover:shadow-[#20c997]/30">
                  <div
                    className="bg-[#20c997] h-full rounded-full transition-all duration-500 hover:bg-[#1ba384] relative overflow-hidden"
                    style={{ width: "50%" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                  </div>
                </div>
              </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a 
                href="/SACHILVS.pdf"
                download
                className="border border-[#20c997] text-[#20c997] px-8 py-3 rounded-full hover:border-green-400 hover:bg-[#20c997] hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#20c997]/40 hover:scale-110 group inline-flex items-center">
                <Download className="inline w-4 h-4 mr-2 group-hover:animate-bounce" />
                <span className="group-hover:font-semibold">Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;