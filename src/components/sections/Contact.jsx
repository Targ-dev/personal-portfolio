import React, { useState } from "react";
import {
  Phone,
  Mail,
  Dribbble,
  Twitter,
  Facebook,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form)

    const response = await fetch("https://formspree.io/f/mldnngob", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data
    })

    if (response.ok) {
      setStatus("Thanks! Your message has been sent.");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#343a40] py-16 lg:py-5 relative z-2"
    >
      <div className="absolute inset-0 bg-opacity-20"></div>
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-13">
            <div className="relative">
              <h1 className="text-[clamp(58px,8vw,150px)] font-bold text-gray-400 opacity-10 uppercase">
                CONTACT
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-[clamp(25px,2.5vw,36px)] font-bold text-white mb-1">
                    Get in Touch
                  </h2>
                  <div className="w-16 h-0.5 bg-[#20c997] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12">
            <div>
              <h3 className="text-xl text-white mb-6">ADDRESS</h3>
              <div className="space-y-4 mb-8 text-[#dee3e4]">
                <p className="mb-2">Velikkakath(H)</p>
                <p className="mb-2">Vayalar P.O, Cherthala</p>
                <p>Alappuzha, PIN:688536</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-[#dee3e4]">
                  <Phone className="w-4 h-4 mr-3 text-[#20c997]" />
                  <span>(+91) 953 9939 981</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-[#20c997]" />
                  <span>(+91) 892 1235 743</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-[#20c997]" />
                  <span>sachil12346@gmail.com</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-white mb-6">FOLLOW ME</h3>
                <div className="flex space-x-4 text-[#dee3e4]">
                  <a
                    href="https://www.linkedin.com/in/sachil-v-s/" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 hover:scale-110 transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/the.realmz.of.sachu" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 hover:scale-110 transition-all duration-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1GgiERx3g5/" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 hover:scale-110 transition-all duration-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/Targ-dev/" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 hover:scale-110 transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <h3 className="text-xl text-white mb-6">SEND US A NOTE</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="bg-[#232a31] border border-[#232a31] rounded px-4 py-3 text-white placeholder-[#ffffff5a] focus:border-teal-400 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="bg-[#232a31] border border-[#232a31] rounded px-4 py-3 text-white placeholder-[#ffffff5a] focus:border-teal-400 outline-none"
                  />
                </div>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell us more about your needs......"
                  required
                  className="w-full bg-[#232a31] border border-[#232a31] rounded px-4 py-3 text-white placeholder-[#ffffff5a] focus:border-teal-400 outline-none resize-none"
                ></textarea>
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#20c997] text-white px-8 py-3 rounded-full hover:bg-teal-500 transition-colors font-medium cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
                {status && <p className="text-white text-center mt-4">{status}</p>}
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
