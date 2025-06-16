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
                  <h2 className="text-[clamp(25px,2.5vw,36px)] font-bold text-white mb-1">
                    Resume
                  </h2>
                  <div className="w-16 h-0.5 bg-[#20c997] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl text-white font-bold mb-8">
                My Education
              </h3>
              <div className="space-y-6">
                <div className="bg-[#111418] p-6 rounded-lg">
                  <span className="bg-[#20c997] text-white px-3 py-1 rounded text-sm font-medium">
                    2015 - 2018
                  </span>
                  <h4 className="text-xl text-white mt-4 mb-2">
                    BSc Computer Science
                  </h4>
                  <p className="text-[#20c997] mb-3">University of Kerala</p>
                  <p className="text-gray-300 text-sm">
                    Gained a strong foundation in programming, data structures,
                    and computer systems, which sparked my interest in web
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white font-bold mb-8">
                Courses & Training
              </h3>
              <div className="space-y-6">
                <div className="bg-[#111418] p-6 rounded-lg">
                  <span className="bg-[#20c997] text-white px-3 py-1 rounded text-sm font-medium">
                    2024 - 2025
                  </span>
                  <h4 className="text-xl text-white mt-4 mb-2">
                    Full-Stack Web Development (MERN Stack)
                  </h4>
                  <p className="text-[#20c997] mb-3">Mashupstack</p>
                  <p className="text-gray-300 text-sm">
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
            <h3 className="text-2xl text-white font-bold mb-8">
              My Experience
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {achievements.map((item, index) => (
                <div key={index}>
                  <div className="space-y-6">
                    <div className="bg-[#111418] p-6 rounded-lg">
                      <span className="bg-[#20c997] text-white px-3 py-1 rounded text-sm font-medium">
                        {item.year}
                      </span>
                      <h4 className="text-xl text-white mt-4 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[#20c997] mb-3">{item.subtitle}</p>
                      <p className="text-gray-300 text-sm">
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
            <h3 className="text-2xl text-white mb-8">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                </div>
                <div className="w-full bg-[#111418] rounded-full h-2">
                  <div
                    className="bg-[#20c997] h-2 rounded-full transition-all duration-1000"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a 
                href="/SACHILVS.pdf"
                download
                className="border border-[#20c997] text-[#20c997] px-8 py-3 rounded-full md:hover:border-green-400 md:hover:bg-[#20c997] md:hover:text-white transition-colors">
                <Download className="inline w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
