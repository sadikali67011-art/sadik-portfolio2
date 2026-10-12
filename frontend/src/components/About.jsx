import { motion } from "framer-motion";
import { FaCode, FaServer, FaPaintBrush, FaRocket } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaCode className="text-blue-400 text-2xl" />,
      title: "Frontend Craftsmanship",
      desc: "Creating responsive, interactive web apps using React.js, Tailwind CSS, and Framer Motion."
    },
    {
      icon: <FaServer className="text-indigo-400 text-2xl" />,
      title: "Backend Architecture",
      desc: "Designing fast, modular REST APIs with Node.js, Express, and secure MongoDB databases."
    },
    {
      icon: <FaPaintBrush className="text-purple-400 text-2xl" />,
      title: "Clean UI/UX & Responsive",
      desc: "Ensuring seamless user journeys with mobile-first layouts, accessible markup, and smooth micro-animations."
    },
    {
      icon: <FaRocket className="text-emerald-400 text-2xl" />,
      title: "Performance & Delivery",
      desc: "Optimizing code bundles, SEO, fast load times, and structured Git version control."
    }
  ];

  return (
    <section 
      id="about"
      className="py-24 bg-slate-950/80 relative overflow-hidden border-t border-slate-900"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full">
            Get To Know Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mt-16 items-center">

          {/* Left Bio text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              A Dedicated <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Full Stack Developer</span> Turning Ideas into Reality
            </h3>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Hello! I'm <strong className="text-white">Sadik Ali</strong>, an enthusiastic developer currently pursuing a <strong className="text-blue-400">Bachelor of Computer Applications (BCA)</strong> at Teerthanker Mahaveer University (2023 - 2026).
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              My journey began with a curiosity for building web interfaces and grew into mastering the complete MERN stack. I love bridging the gap between clean frontend user experiences and powerful backend server architectures.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Whether building an e-commerce platform, job board portal, or responsive client showcase, I take pride in clean code, robust database modeling, and delivering reliable software.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium">
                📍 Uttar Pradesh, India
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium">
                🎓 BCA (2023 - 2026)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                💼 Open for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300 group shadow-lg"
              >
                <div className="p-3 w-fit rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mt-4 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;