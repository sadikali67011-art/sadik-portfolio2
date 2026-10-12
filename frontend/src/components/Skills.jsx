import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiRedux, 
  SiVite 
} from "react-icons/si";

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const skills = [
    // Frontend
    { name: "React.js", level: 90, category: "frontend", icon: <FaReact className="text-cyan-400" /> },
    { name: "JavaScript (ES6+)", level: 85, category: "frontend", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Tailwind CSS", level: 92, category: "frontend", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "HTML5", level: 95, category: "frontend", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", level: 90, category: "frontend", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Redux / Context", level: 80, category: "frontend", icon: <SiRedux className="text-purple-400" /> },

    // Backend
    { name: "Node.js", level: 85, category: "backend", icon: <FaNodeJs className="text-emerald-500" /> },
    { name: "Express.js", level: 88, category: "backend", icon: <SiExpress className="text-slate-300" /> },
    { name: "REST APIs", level: 90, category: "backend", icon: <FaNodeJs className="text-indigo-400" /> },

    // Database & Tools
    { name: "MongoDB & Mongoose", level: 82, category: "tools", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git & GitHub", level: 88, category: "tools", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Postman", level: 85, category: "tools", icon: <SiPostman className="text-amber-500" /> },
    { name: "Vite & Tooling", level: 90, category: "tools", icon: <SiVite className="text-purple-500" /> },
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Database & Tools" },
  ];

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  return (
    <section
      id="skills"
      className="py-24 bg-[#0b0f19] relative overflow-hidden border-t border-slate-900"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full">
            Technical Proficiency
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            My Skills & Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Tools, frameworks, and technologies I utilize to engineer reliable digital products
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 shadow-lg group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <h3 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-bold text-blue-400 font-mono">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;