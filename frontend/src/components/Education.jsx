import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Teerthanker Mahaveer University, Moradabad",
      year: "2023 - 2026",
      status: "Currently Pursuing",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description:
        "Specializing in modern Web Technologies, Software Engineering, Database Systems (MongoDB & SQL), Data Structures, and Computer Networks.",
      topics: ["Web Development", "Data Structures", "Database Management", "Object-Oriented Programming"]
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      college: "Uttar Pradesh Board",
      year: "2022",
      status: "Completed",
      statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      description:
        "Completed intermediate education with a strong core in Mathematics, Science, and foundational Computer Studies.",
      topics: ["Mathematics", "Physics", "Computer Science"]
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      college: "Uttar Pradesh Board",
      year: "2020",
      status: "Completed",
      statusColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      description:
        "Completed matriculation with academic focus on Mathematics, Science, and analytical problem solving.",
      topics: ["Mathematics", "Science", "General Studies"]
    }
  ];

  return (
    <section
      id="education"
      className="py-24 bg-slate-950/80 relative overflow-hidden border-t border-slate-900"
    >
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
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            My educational qualifications and learning journey
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Header with icon and status */}
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3.5 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <span className={`text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                {/* Degree title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.degree}
                </h3>

                {/* College & Year */}
                <div className="mt-3 space-y-1.5 text-xs text-slate-400">
                  <p className="flex items-center gap-2">
                    <FaUniversity className="text-blue-400 text-xs shrink-0" />
                    <span>{item.college}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-indigo-400 text-xs shrink-0" />
                    <span className="font-medium text-slate-300">{item.year}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Topics Pills */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Topics:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;