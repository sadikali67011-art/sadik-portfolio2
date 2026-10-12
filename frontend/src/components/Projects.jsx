import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import motor from "../assets/motor.png";
import job from "../assets/job.png";
import laundry from "../assets/laundry.png";

function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Motor Doctor",
      image: motor,
      description:
        "A feature-rich automobile e-commerce platform where customers can explore vehicle spare parts, filter by model, add to shopping cart, and place orders smoothly.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/sadikali67011-art",
      demo: "https://motor-doctor.vercel.app",
      category: "MERN Stack",
      featured: true,
      status: "Live Project",
    },
    {
      title: "HuntJob - Career Portal",
      image: job,
      description:
        "A full-stack employment search portal connecting job seekers with recruiters. Includes recruiter job postings, application submissions, and applicant tracking.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/sadikali67011-art",
      demo: "",
      category: "Full Stack",
      featured: true,
      status: "Full Stack App",
    },
    {
      title: "Laundry Service Booking",
      image: laundry,
      description:
        "An intuitive on-demand laundry booking interface enabling users to schedule pick-ups, calculate basket prices, and receive real-time notifications.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "EmailJS"],
      github: "https://github.com/sadikali67011-art",
      demo: "",
      category: "Frontend",
      featured: false,
      status: "Frontend App",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "MERN Stack", label: "MERN Stack" },
    { id: "Full Stack", label: "Full Stack" },
    { id: "Frontend", label: "Frontend" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950/80 relative overflow-hidden border-t border-slate-900"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            Featured Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Recent Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Real-world full stack and frontend applications built with modern engineering
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#93c5fd"
                  glarePosition="top"
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  transitionSpeed={1200}
                  className="h-full flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl overflow-hidden group"
                >
                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-video bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                    {/* Category & Status badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/90 text-white backdrop-blur-md shadow-md">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-900/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {project.tech.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-800">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700 transition"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>

                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <span className="flex-1 text-center py-2.5 px-3 rounded-xl bg-slate-900/50 text-slate-400 text-xs font-medium border border-slate-800/60">
                          Demo on Request
                        </span>
                      )}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All on GitHub Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/sadikali67011-art"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm hover:border-blue-500/50 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <FaGithub className="text-lg" />
            <span>Explore All Repositories on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;