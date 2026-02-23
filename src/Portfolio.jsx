import {motion, AnimatePresence, useScroll, useSpring} from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Layers,
  Menu,
  X,
  ArrowUp,
  ExternalLink,
  Quote,
  Sun,
  Moon,
} from "lucide-react";
import React, {useState, useEffect} from "react";

const Navbar = ({theme, toggleTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {name: "Experience", href: "#experience"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]"
        style={{scaleX}}
      />
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-[#0c1a14]/90 backdrop-blur-md border-b border-emerald-500/30 py-4 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            className="text-lg font-extrabold tracking-tighter flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-500/30 ring-1 ring-white/20">
              <Terminal size={20} />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-white dark:via-emerald-200 dark:to-emerald-400">
              JEEVAN R
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 text-zinc-600 dark:text-white hover:text-emerald-500 cursor-pointer dark:hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: "auto"}}
              exit={{opacity: 0, height: 0}}
              className="md:hidden bg-white dark:bg-[#0c1a14] border-b border-emerald-500/30 overflow-hidden absolute top-full left-0 w-full shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-white transition-colors flex items-center justify-between p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5"
                  >
                    {link.name}
                    <ChevronRight size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-20 pb-32 px-6 overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-[800px] h-[800px] bg-emerald-600/10 top-[-20%] left-[-20%] animate-pulse" />
        <div className="blob w-[600px] h-[600px] bg-teal-600/10 bottom-[-10%] right-[-10%] delay-1000 animate-pulse" />
        <div className="blob w-[400px] h-[400px] bg-amber-600/10 top-[30%] right-[20%] delay-2000 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{opacity: 0, scale: 0.9, filter: "blur(10px)"}}
          animate={{opacity: 1, scale: 1, filter: "blur(0px)"}}
          transition={{duration: 1, ease: [0.16, 1, 0.3, 1]}}
        >
          <motion.div
            initial={{opacity: 1, y: 20}}
            animate={{opacity: 2, y: 0}}
            transition={{delay: 0.2}}
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2.5 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border border-zinc-200 dark:border-emerald-500/40 hover:dark:border-emerald-400/70 shadow-[0_0_30px_rgba(16,185,129,0.2)] mb-8 md:mb-12 hover:border-emerald-500/50 transition-colors max-w-full"
          >
            <Sparkles
              size={16}
              className="text-emerald-600 dark:text-emerald-400 animate-pulse shrink-0"
            />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-emerald-700 dark:text-emerald-300 truncate">
              Software Developer • 4+ Years Exp
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-[120px] font-extrabold tracking-tighter mb-8 md:mb-10 leading-[0.95] md:leading-[0.9] text-zinc-900 dark:text-white drop-shadow-2xl">
            Crafting <span className="text-gradient-brand">Digital</span> <br />
            Masterpieces.
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-xl md:text-3xl max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            Specialized in building{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              scalable frontend architectures
            </span>{" "}
            and high-performance web applications that drive impact.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: "Bangalore, India",
                color: "emerald",
              },
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "jeevanr287@gmail.com",
                color: "teal",
                link: "mailto:jeevanr287@gmail.com",
              },
              {
                icon: <Phone size={20} />,
                label: "Phone",
                value: "+91-8123541792",
                color: "teal",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{y: -5, scale: 1.02}}
                className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-emerald-500/10 dark:border-white/10 shadow-lg backdrop-blur-md hover:bg-white dark:hover:bg-white/10 hover:border-emerald-500/30 transition-all group cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 shadow-lg`}
                >
                  {item.icon}
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.5}}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-400 dark:border-zinc-200 flex justify-center p-1">
          <motion.div
            animate={{y: [0, 12, 0]}}
            transition={{duration: 1.5, repeat: Infinity}}
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

const Summary = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className="p-12 card-gradient bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-emerald-500/10 dark:border-white/10"
      >
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-6">
          Professional Summary
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 text-xl leading-relaxed font-medium">
          Passionate Software Developer with{" "}
          <span className="text-zinc-900 dark:text-white font-bold">
            4 years of experience
          </span>{" "}
          in frontend development. Proven ability to build{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            scalable web applications
          </span>{" "}
          and optimize performance. Demonstrated success in Agile teams,
          delivering high-quality software solutions efficiently. Proficient in
          analyzing technical solutions based on customer requirements.
        </p>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Lead Developer",
      company: "Tecnotree Convergence Pvt. Ltd",
      location: "Hybrid, Bangalore",
      period: "09/2022 - Present",
      color: "emerald",
      points: [
        "Worked as part of the Research and Development (R&D) Customer Experience team, focusing on frontend development for telecom web applications.",
        "Implemented core features such as customer registration, service requests, and dashboard and payment cards in a SaaS application.",
        "Contributed to the development of reusable components, increasing development speed and improving code maintainability.",
        "Collaborated closely with product owners, managers, and technical teams to deliver high-quality software.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <div className="flex items-center gap-6 mb-20">
        <h2 className="text-5xl font-extrabold tracking-tighter">Experience</h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-emerald-500 to-transparent opacity-30" />
      </div>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: i * 0.1}}
            className="experience-card group bg-white/80 dark:bg-[#0a120e]/80 border border-emerald-500/10 dark:border-white/10"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-10 gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-white leading-tight">
                    {exp.role}
                  </h3>
                  <span
                    className={`px-4 py-1.5 rounded-2xl text-[11px] font-black uppercase tracking-widest bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 dark:border-emerald-500/30`}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 font-bold text-xl">
                  {exp.company}
                </p>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-mono text-sm bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-emerald-500/10 dark:border-white/10">
                <MapPin
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="grid md:grid-cols-2 gap-8">
              {exp.points.map((point, j) => (
                <li
                  key={j}
                  className="flex gap-5 text-zinc-700 dark:text-zinc-400 text-base leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300"
                >
                  <div className="mt-2.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      icon: <Globe size={24} />,
      title: "Frontend",
      skills: [
        "ReactJs",
        "Redux",
        "Javascript",
        "Tailwind CSS",
        "Material UI",
        "HTML",
        "CSS",
      ],
      color: "emerald",
    },
    {
      icon: <Layers size={24} />,
      title: "Backend",
      skills: ["NodeJs", "MongoDB", "RESTful API"],
      color: "teal",
    },
    {
      icon: <Cpu size={24} />,
      title: "Tools & Libraries",
      skills: ["Git", "GitHub", "Lodash", "Formik", "RJSF"],
      color: "amber",
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="flex items-center gap-6 mb-20">
        <h2 className="text-5xl font-extrabold tracking-tighter">Skills</h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-teal-500 to-transparent opacity-30" />
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: i * 0.1}}
            className="
    p-10 card-gradient group relative overflow-hidden
    bg-white/80 dark:bg-zinc-900
    border border-zinc-200 dark:border-emerald-500/40
    hover:dark:border-emerald-400/70
    dark:shadow-[0_0_30px_rgba(16,185,129,0.15)]
    backdrop-blur-xl
    transition-all duration-300
    rounded-3xl
  "
          >
            {/* Decorative Background Circle */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ${
                group.color === "emerald"
                  ? "bg-emerald-500/10 dark:bg-emerald-500/10"
                  : group.color === "teal"
                  ? "bg-teal-500/10 dark:bg-teal-500/10"
                  : "bg-amber-500/10 dark:bg-amber-500/10"
              }`}
            />

            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                  group.color === "emerald"
                    ? "bg-emerald-600 text-white shadow-emerald-500/40"
                    : group.color === "teal"
                    ? "bg-teal-600 text-white shadow-teal-500/40"
                    : "bg-amber-600 text-white shadow-amber-500/40"
                }`}
              >
                {group.icon}
              </div>

              <h3 className="text-xl font-black uppercase tracking-widest text-zinc-900 dark:text-white">
                {group.title}
              </h3>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, j) => (
                <span key={j} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section className="section-container">
      <div className="p-10 card-gradient bg-white/80 dark:bg-white/5 flex flex-col md:flex-row justify-between items-center gap-8 border border border-zinc-200 dark:border-emerald-500/40 hover:dark:border-emerald-400/70">
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-4">
            Education
          </h2>
          <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-2">
            PES College of Engineering
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-lg">
            Bachelor of Engineering in Computer Science and Engineering
          </p>
        </div>
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl text-[11px] font-black uppercase
  bg-emerald-100 dark:bg-emerald-500/20
  text-emerald-700 dark:text-emerald-300
  border border-emerald-500/20 dark:border-emerald-500/30"
        >
          <span>2018 - 2022</span>

          <MapPin size={18} className="text-emerald-400" />
          <span className="text-black dark:text-white font-bold text-xs normal-case">
            Mandya, India
          </span>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shashank",
      title: "Product Manager",
      company: "Tecnotree",
      quote:
        "Jeevan is an exceptional developer who consistently delivers high-quality code. His attention to detail and ability to solve complex problems make him a valuable asset to any team.",
    },
    {
      name: "Gowri Shankar",
      title: "Senior Engineer",
      company: "Tecnotree",
      quote:
        "Working with Jeevan was a pleasure. He has a deep understanding of frontend architectures and always stays up-to-date with the latest technologies.",
    },
    {
      name: "Himansu Shaoo",
      title: "UX Designer",
      company: "Tecnotree",
      quote:
        "Jeevan has a great eye for design implementation. He perfectly translated our designs into pixel-perfect, responsive web applications.",
    },
  ];

  return (
    <section className="section-container">
      <div className="flex items-center gap-6 mb-20">
        <h2 className="text-5xl font-extrabold tracking-tighter">
          Testimonials
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-emerald-500 to-transparent opacity-30" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: i * 0.1}}
            className="p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border border-zinc-200 dark:border-emerald-500/40 hover:dark:border-emerald-400/70 relative group hover:bg-white dark:hover:bg-white/10 transition-colors"
          >
            <Quote
              className="absolute top-8 right-8 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors"
              size={48}
            />
            <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-8 relative z-10">
              "{testimonial.quote}"
            </p>
            <div>
              <h4 className="text-zinc-900 dark:text-white font-bold text-lg">
                {testimonial.name}
              </h4>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                {testimonial.title}
              </p>
              <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold mt-1">
                {testimonial.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://getform.io/f/e8f0a3cf-a5e2-44d0-b916-7b7cd1bd3701",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong");
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="flex items-center gap-6 mb-20">
        <h2 className="text-5xl font-extrabold tracking-tighter">Contact</h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-emerald-500 to-transparent opacity-50" />
      </div>

      <div className="grid lg:grid-cols-2 gap-1">
        <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
        >
          <h3 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">
            Let's work together!
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="p-8 md:p-10 card-gradient bg-white/80 dark:bg-[#0c1a14] border border border-zinc-200 dark:border-emerald-500/40 hover:dark:border-emerald-400/70"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "success" && (
              <div className="p-4 bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-700 dark:text-emerald-300 text-sm font-bold text-center animate-pulse">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-red-100 dark:bg-red-500/20 border border-red-500/50 rounded-xl text-red-700 dark:text-red-300 text-sm font-bold text-center">
                {errorMessage}
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest ml-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 dark:bg-white/5 border border-emerald-500/20 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-white/10 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest ml-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 dark:bg-white/5 border border-emerald-500/20 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-white/10 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest ml-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 dark:bg-white/5 border border-emerald-500/20 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-white/10 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-zinc-50 dark:bg-white/5 border border-emerald-500/20 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-white/10 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
              disabled={status === "loading" || status === "success"}
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-12 px-6 border-t border-emerald-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Left Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <Terminal size={20} />
              </div>
              <span className="font-extrabold tracking-tighter text-2xl">
                JEEVAN R.
              </span>
            </div>

            <p className="text-white/70 text-lg leading-relaxed max-w-sm mb-8">
              Crafting scalable, high-performance digital experiences.
              Specialized in React and modern frontend architectures.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jeevan-r-b8a996229/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/Jeevanr1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
              >
                <Github size={18} />
              </a>

              <a
                href="mailto:jeevanr287@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-bold mb-6 tracking-wide uppercase text-sm text-white">
              Sitemap
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold mb-6 tracking-wide uppercase text-sm text-white">
              Socials
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/jeevan-r-b8a996229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-emerald-400 transition-colors flex items-center gap-2 text-sm"
                >
                  LinkedIn <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jeevanr1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-emerald-400 transition-colors flex items-center gap-2 text-sm"
                >
                  GitHub <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_.jeevan__rgowda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-emerald-400 transition-colors flex items-center gap-2 text-sm"
                >
                  Instagram <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60 font-medium">
            © {new Date().getFullYear()} Jeevan R. All rights reserved.
          </p>

          <p className="text-sm text-white/60 font-medium flex items-center gap-2">
            Designed & Built with <span className="text-red-500">❤️</span> in
            Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050a08] text-zinc-900 dark:text-zinc-300 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
