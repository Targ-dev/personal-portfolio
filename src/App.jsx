import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import Home from "./components/sections/Home";
import Contact from "./components/sections/Contact";
import SidebarNavbar from "./components/Navbar";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'about', 'services', 'resume', 'portfolio', 'testimonials', 'contact'];
        let current = 'home';
        
        sections.forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              current = sectionId;
            }
          }
        });
        
        setActiveSection(current);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} overflow-x-hidden`}>
      <div className="bg-gray-100">
      <SidebarNavbar activeSection={activeSection} onNavigate={handleNavigate} />   
      <main className="flex-1 lg:ml-64 lg:pt-0 min-h-screen">
      <Home onNavigate={handleNavigate} />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </main>
    </div>
      </div>
    </>
  )
}

export default App;