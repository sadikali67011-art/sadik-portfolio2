import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaCheck, 
  FaCopy, 
  FaPaperPlane 
} from "react-icons/fa";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copied, setCopied] = useState(false);

  const emailAddress = "sadikali67011@gmail.com";
  const phoneNumber = "+91 7534894896";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const userMessage = formData.get("message");

    try {
      // 1. Try local backend server if active
      let backendSuccess = false;
      try {
        const backendRes = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message: userMessage }),
        });
        if (backendRes.ok) {
          backendSuccess = true;
        }
      } catch (err) {
        // Backend not running locally, proceed to fallback
      }

      if (backendSuccess) {
        setStatus({
          type: "success",
          message: "🎉 Message saved successfully! Thank you for reaching out, Sadik will get back to you shortly.",
        });
        form.current.reset();
        return;
      }

      // 2. Client-side mailto / WhatsApp fallback & notification
      const mailtoUrl = `mailto:${emailAddress}?subject=Portfolio Contact from ${encodeURIComponent(
        name
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}`
      )}`;

      // Simulate sending feedback and open mail client
      setStatus({
        type: "success",
        message: "✅ Opening your mail client to send directly to Sadik. You can also connect instantly on WhatsApp!",
      });

      window.open(mailtoUrl, "_blank");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "❌ Something went wrong. Please connect directly via WhatsApp or email below!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0b0f19] relative overflow-hidden border-t border-slate-900"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Have a project in mind, a freelance opportunity, or just want to say hi? Let's connect!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mt-16 items-start">

          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Freelance & Full-time Roles
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
                Let's Build Something Great Together 🚀
              </h3>
              <p className="text-slate-400 text-sm md:text-base mt-3 leading-relaxed">
                I am actively seeking software developer roles, full-stack internships, and freelance projects. I respond within 24 hours.
              </p>
            </div>

            {/* Quick Contact Items */}
            <div className="space-y-4 pt-2">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between group hover:border-slate-700 transition">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email Me</p>
                    <a href={`mailto:${emailAddress}`} className="text-sm font-medium text-white hover:text-blue-400 transition">
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <FaCheck className="text-emerald-400 text-sm" /> : <FaCopy className="text-xs" />}
                </button>
              </div>

              {/* WhatsApp / Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between group hover:border-slate-700 transition">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">WhatsApp & Phone</p>
                    <a href="https://wa.me/917534894896" target="_blank" rel="noreferrer" className="text-sm font-medium text-white hover:text-emerald-400 transition">
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/917534894896"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition"
                >
                  Chat Now
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center gap-3.5 group">
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-sm font-medium text-white">Uttar Pradesh, India (Remote Available)</p>
                </div>
              </div>
            </div>

            {/* Social Buttons Row */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">
                Follow On Social
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/sadikali67011-art"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:scale-110 transition-all"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sadik-ali-75a393294/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all"
                >
                  <FaLinkedin className="text-xl" />
                </a>

                <a
                  href="https://wa.me/917534894896"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-110 transition-all"
                >
                  <FaWhatsapp className="text-xl" />
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  aria-label="Email"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 hover:scale-110 transition-all"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-8 md:p-10 rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-2xl backdrop-blur-xl space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Send Me a Message
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Fill in your details below and I'll respond as soon as possible.
                </p>
              </div>

              {/* Status Alert Banner */}
              {status.message && (
                <div
                  className={`p-4 rounded-xl text-sm font-medium ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                      : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="e.g. john@example.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, job opportunity, or inquiry..."
                  rows="5"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-400">
                <span>Or message directly on</span>
                <a
                  href="https://wa.me/917534894896"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  WhatsApp →
                </a>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;