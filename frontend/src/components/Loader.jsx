import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#070a13] z-50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Monogram Badge */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-2xl shadow-blue-500/30 flex items-center justify-center mb-6">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tighter">
              SA
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Sadik <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Ali</span>
        </h1>

        <p className="text-xs text-slate-400 tracking-widest uppercase mt-2 font-medium">
          Full Stack MERN Developer
        </p>

        {/* Animated Bar */}
        <div className="w-44 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-6">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-1/2 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Loader;