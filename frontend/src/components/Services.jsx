import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCode className="text-blue-400 text-3xl" />,
      title: "Frontend & Web Apps",
      badge: "React & Tailwind",
      description: "Crafting beautiful, high-performance web applications with reactive interfaces and fluid animations.",
      deliverables: [
        "React.js Single Page Applications",
        "Responsive Mobile-First Design",
        "Tailwind CSS & Modern UI Components",
        "Smooth micro-interactions & UX"
      ]
    },
    {
      icon: <FaServer className="text-indigo-400 text-3xl" />,
      title: "MERN Stack Development",
      badge: "Full Stack",
      description: "Building complete full-stack web applications connecting powerful frontends with robust backends.",
      deliverables: [
        "Full CRUD Operations & Business Logic",
        "RESTful API Architecture",
        "JWT / Session Authentication",
        "Optimized MongoDB Schemas"
      ]
    },
    {
      icon: <FaMobileAlt className="text-purple-400 text-3xl" />,
      title: "Responsive & Modern UI",
      badge: "Cross-Platform",
      description: "Ensuring your digital product delivers flawless experiences on mobile, tablet, and widescreen desktops.",
      deliverables: [
        "Adaptive Viewport Layouts",
        "Cross-Browser Compatibility",
        "Accessibility & SEO Best Practices",
        "Fast Page Speed & Core Web Vitals"
      ]
    },
    {
      icon: <FaCloudUploadAlt className="text-emerald-400 text-3xl" />,
      title: "API & Deployment",
      badge: "DevOps & Integration",
      description: "Integrating third-party services and managing deployments for reliable public availability.",
      deliverables: [
        "Third-party APIs (Email, Payments, Auth)",
        "Database Deployment (MongoDB Atlas)",
        "Vercel, Netlify & Render Hosting",
        "Git & GitHub Version Management"
      ]
    }
  ];

  return (
    <section
      id="services"
      className="py-24 bg-[#0b0f19] relative overflow-hidden border-t border-slate-900"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

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
            What I Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            My Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            High quality web development solutions tailored to solve business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <FaCheckCircle className="text-blue-400 text-xs shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  Discuss Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;