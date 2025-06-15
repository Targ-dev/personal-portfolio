import React from 'react';
import { Server, Monitor, Sliders, Smartphone, Code, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-[#20c997]" />,
      title: "Frontend Development",
      description: "Crafting interactive and responsive interfaces using HTML, CSS, JavaScript, and React."
    },
    {
      icon: <Server className="w-8 h-8 text-[#20c997]" />,
      title: "Backend Development",
      description: "Creating server-side logic, RESTful APIs, and managing data with Node.js, Express & MongoDB."
    },
    {
      icon: <Sliders className="w-8 h-8 text-[#20c997]" />,
      title: "Debugging & Testing",
      description: "Troubleshooting issues and writing clean, functional code."
    },
    {
      icon: <Code className="w-8 h-8 text-[#20c997]" />,
      title: "Project Building",
      description: "Creating full-stack apps and small projects to practice and demonstrate skills."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#20c997]" />,
      title: "Responsive Design",
      description: "Building websites that work seamlessly across devices using Tailwind and Bootstrap."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#20c997]" />,
      title: "Continuous Learning",
      description: "Consistently improving through documentation, tutorials, and hands-on experimentation."
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-[#343a40] flex flex-col justify-center items-center py-16 px-4 lg:py-5 relative z-2"
    >      
      <div className="relative z-10 p-8 lg:p-4 max-w-6xl mx-auto w-full">
        {/* Header */}
          <div className="text-center mb-2">
            <div className="relative">
              <h1 className="text-[clamp(55px,8vw,150px)] font-bold text-gray-400 opacity-10 uppercase">
                EXPERTISE
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-[clamp(25px,2.5vw,36px)] font-bold text-white mb-1">
                    What I Do?
                  </h2>
                  <div className="w-16 h-0.5 bg-[#20c997] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-6 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-18 h-18 bg-[#212529] rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[#ffffff85] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;