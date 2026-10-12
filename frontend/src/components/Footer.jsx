import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaWhatsapp, 
  FaArrowUp, 
  FaHeart 
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-extrabold text-white tracking-tight">
              Sadik <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Ali</span>
            </a>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Full Stack MERN Developer crafting high performance web applications and modern user experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            Designed & Built with <FaHeart className="text-rose-500 inline text-xs" /> by <span className="text-slate-300 font-semibold">Sadik Ali</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-lg">
            <a
              href="https://github.com/sadikali67011-art"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sadik-ali-75a393294/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/917534894896"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-slate-400 hover:text-emerald-400 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:sadikali67011@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-rose-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <p>© {new Date().getFullYear()} Sadik Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;