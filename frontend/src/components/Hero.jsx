import { useState, useEffect } from "react";
import profile from "../../profile.jpeg";
import resume from "../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaDownload, FaArrowRight, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const roles = [
  "Full Stack MERN Developer",
  "React.js Specialist",
  "Backend & API Architect",
  "UI/UX Enthusiast",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "10+", label: "Projects Built" },
    { number: "1+", label: "Years Experience" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Dedication" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#0b0f19]"
    >
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Freelancer Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-medium backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for Freelance & Full-time Roles
            </motion.div>

            {/* Intro & Name */}
            <div>
              <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mt-2">
                Sadik <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Ali</span>
              </h1>
            </div>

            {/* Cycling Role with AnimatePresence */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-semibold mr-2">
                I am a
              </span>
              <div className="relative inline-block overflow-hidden py-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I specialize in developing scalable, fast, and responsive web applications using the <span className="text-blue-400 font-medium">MERN stack</span> (MongoDB, Express, React, Node.js) with clean architecture and modern UI experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm md:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Hire Me</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm md:text-base backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>View Projects</span>
              </a>

              <a
                href={resume}
                download="Sadik_Ali_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 text-sm md:text-base font-semibold hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaDownload className="text-xs" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Connect Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">
                Connect:
              </span>

              <a
                href="https://github.com/sadikali67011-art"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/sadik-ali-75a393294/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-blue-400 hover:bg-slate-700 hover:border-blue-500/50 transition-all hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="mailto:sadikali67011@gmail.com"
                aria-label="Send Email"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-rose-400 hover:bg-slate-700 hover:border-rose-500/50 transition-all hover:scale-110"
              >
                <FaEnvelope className="text-xl" />
              </a>

              <a
                href="https://wa.me/917534894896"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 hover:border-emerald-500/50 transition-all hover:scale-110"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Profile & Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-sm md:max-w-md flex items-center justify-center">
              
              {/* Outer decorative pulsing halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/25 to-purple-600/25 blur-2xl animate-pulse" />

              {/* 3D Tilt Card */}
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#93c5fd"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={1800}
                className="relative z-10 w-full flex items-center justify-center"
              >
                <div className="relative p-2 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-2xl shadow-blue-500/20">
                  <div className="p-1 rounded-2xl bg-slate-900/95 overflow-hidden flex items-center justify-center">
                    <img
                      src={profile}
                      alt="Sadik Ali - Full Stack Developer"
                      className="w-auto h-auto max-h-[380px] sm:max-h-[420px] max-w-full rounded-2xl object-contain shadow-inner"
                      onError={(e) => {
                        // Fallback avatar if profile fails
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </Tilt>

              {/* Floating Tech Badge: React */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md text-cyan-400"
              >
                <FaReact className="text-2xl animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-xs font-bold text-white">React.js</span>
              </motion.div>

              {/* Floating Tech Badge: Node.js */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-3 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md text-emerald-400"
              >
                <FaNodeJs className="text-2xl" />
                <span className="text-xs font-bold text-white">Node.js</span>
              </motion.div>

              {/* Floating Tech Badge: MongoDB */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -left-8 -translate-y-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md text-green-500"
              >
                <SiMongodb className="text-xl" />
                <span className="text-xs font-bold text-white">MongoDB</span>
              </motion.div>

              {/* Floating Tech Badge: Tailwind */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-6 -right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md text-sky-400"
              >
                <SiTailwindcss className="text-xl" />
                <span className="text-xs font-bold text-white">Tailwind</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-center hover:border-slate-700 transition"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center text-slate-400 hover:text-blue-400 transition"
      >
        <span className="text-xs font-medium tracking-wider uppercase mb-1">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center pt-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
          />
        </div>
      </a>
    </section>
  );
}

export default Hero;