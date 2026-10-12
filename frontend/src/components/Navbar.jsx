import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menu = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Services", link: "#services", id: "services" },
    { name: "Education", link: "#education", id: "education" },
    { name: "Skills", link: "#skills", id: "skills" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = menu.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menu[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-1 group"
        >
          <span className="text-blue-500 font-mono text-2xl group-hover:-translate-x-0.5 transition-transform">
            &lt;
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Sadik Ali
          </span>
          <span className="text-blue-500 font-mono text-2xl group-hover:translate-x-0.5 transition-transform">
            /&gt;
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-7 font-medium text-sm">
          {menu.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <li key={index} className="relative">
                <a
                  href={item.link}
                  className={`transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 rounded-full">
              Let's Talk 👋
            </span>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800/60 focus:outline-none transition"
        >
          {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 px-6 pt-4 pb-6 shadow-2xl"
          >
            <ul className="space-y-3 font-medium">
              {menu.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600/20 text-blue-400 font-semibold border-l-2 border-blue-500"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full text-center block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:brightness-110 transition"
              >
                Let's Talk 👋
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;