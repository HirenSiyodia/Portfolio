import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import profilePhoto from "../assets/Profile_Hiren.jpg";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  // Left Side Animation
  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  // Right Side Animation

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Social Links Animation

  const socialContainerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const socialItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Bottom CTA Animation

  const ctaVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen relative overflow-hidden pt-20 md:pt-26"
    >
      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8 min-h-[calc(85vh-5rem)] grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-14 lg:gap-15 items-center">
        {/* LEFT SIDE */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center py-4"
        >
          <div className="flex flex-col items-center">
            <div className="p-0 sm:p-6 lg:p-7 rounded-none sm:rounded-xl border-0 sm:border border-gray-700 shadow-none sm:shadow-2xl rotate-3">
              <div className="-rotate-3">
                <div className="w-60 h-72 sm:w-68 sm:h-80 lg:w-70 lg:h-78 rounded-xl overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* SOCIAL LINKS */}

          <motion.div
            variants={socialContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex space-x-4 mt-4"
          >
            {/* Email */}

            <motion.a
              variants={socialItemVariants}
              href="mailto:siyodaihiren7@gmail.com"
              className="w-10 h-10 rounded-full border border-gray-700 bg-black/50 flex items-center justify-center text-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110"
            >
              <MdEmail className="w-5 h-5" />
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              variants={socialItemVariants}
              href="https://www.linkedin.com/in/hiren-siyodia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 bg-black/50 flex items-center justify-center text-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </motion.a>

            {/* GitHub */}

            <motion.a
              variants={socialItemVariants}
              href="https://github.com/hirensiyodia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 bg-black/50 flex items-center justify-center text-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>

            {/* Phone */}

            <motion.a
              variants={socialItemVariants}
              href="tel:+919819913272"
              className="w-10 h-10 rounded-full border border-gray-700 bg-black/50 flex items-center justify-center text-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaPhoneAlt className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left"
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wider leading-relaxed font-semibold text-slate-200 flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
            <span>Hi, I'm</span>
            <span className="text-blue-400">
              <Typewriter
                options={{
                  strings: [
                    "Hiren Nanubhai Siyodia",
                    "a Web Developer",
                    "a React Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-200 tracking-wider leading-relaxed">
            A software developer specialized in{" "}
            <span className="text-blue-400">Frontend Engineering</span>
            , Based in
            <br />
            Mumbai city, India.
          </p>

          {/* SKILLS / HIGHLIGHTS */}
          <ul className="mt-4 text-sm tracking-wider sm:text-base md:text-base text-slate-200 list-disc list-inside space-y-2">
            <li>
              Experienced in{" "}
              <span className="text-blue-400">React, Next.js</span> and{" "}
              <span className="text-blue-400">modern web technologies</span>.
            </li>

            <li>
              Proficient in{" "}
              <span className="text-blue-400">REST APIs, CMS,</span> and{" "}
              <span className="text-blue-400">
                integrating frontend applications
              </span>
              &nbsp;with backend services.
            </li>

            <li>
              Proficient with{" "}
              <span className="text-blue-400">Git, GitHub,</span> and{" "}
              <span className="text-blue-400">modern development</span>.
            </li>

            <li>
              Familiar with UI/UX and design tools such as{" "}
              <span className="text-blue-400">Photoshop, Figma</span>.
            </li>

            <li>
              Passionate about creating seamless{" "}
              <span className="text-blue-400">User Experiences</span>.
            </li>
          </ul>

          {/* Bottom Paragraph */}

          <p className="mt-6 text-base sm:text-xl md:text-xl text-slate-200 tracking-wider leading-relaxed">
            Beyond tech I'm proficient in client interactions, successful in
            team and solo projects, eager to learn new technologies.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM CTA */}
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10"
      >
        {/* Separator */}
        <hr className="border-0 h-px bg-linear-to-r from-transparent via-slate-400/50 to-transparent" />
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xl sm:text-xl md:text-2xl tracking-wider leading-relaxed text-blue-400 text-center sm:text-left">
            Let's create something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/Hiren_Siyodia_Resume2026.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-lg border border-blue-300 bg-blue-400/10 px-5 py-3.5 text-sm font-semibold tracking-wider leading-relaxed text-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer hover:border-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-[0_0_25px_rgba(129,140,248,0.25)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
