import React, { useState } from "react";
import { motion } from "framer-motion";
import experienceImage from "../assets/experience.jpg";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const [showDetails, setShowDetails] = useState(false);

  const experienceDetails = [
    {
      company: "Company Name",
      role: "Software Developer",
      duration: "June 2020 - Present",
      description:
        "Add your detailed work experience information here. You can mention your responsibilities, projects, technologies, achievements, and other important details.",
    },
    {
      company: "Previous Company",
      role: "Junior Developer",
      duration: "June 2018 - May 2020",
      description:
        "Add your previous work experience details here. Mention the projects you worked on, your responsibilities, and the technologies you used.",
    },
    {
      company: "Another Company",
      role: "Web Developer",
      duration: "June 2016 - May 2018",
      description:
        "Add additional experience details here.",
    },
  ];

  // =================================
  // Content Parent Animation
  // =================================

  const contentVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.25,
      },
    },
  };

  // =================================
  // Individual Item Animation
  // =================================

  const itemVariants = {
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

  // =================================
  // Image Animation
  // =================================

  const imageVariants = {
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

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex items-center mt-24"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-[60%_40%] tracking-wider leading-relaxed">

        {/* ================================= */}
        {/* LEFT - 60% CONTENT */}
        {/* ================================= */}

        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full min-h-125 md:min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24"
        >

          {/* Heading */}

          <motion.h1
            variants={itemVariants}
            className="flex items-center gap-3 text-4xl md:text-5xl font-bold text-blue-400 mb-10 tracking-wider leading-relaxed"
          >
            Work Experience

            <FaBriefcase className="text-3xl md:text-4xl" />
          </motion.h1>

          {/* ================================= */}
          {/* EXPERIENCE 1 */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Software Developer
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-blue-300 mt-2">
              Company Name
            </p>

            <p className="text-slate-500 mt-1">
              June 2020 - Present
            </p>
          </motion.div>

          {/* ================================= */}
          {/* EXPERIENCE 2 */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Junior Developer
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-blue-300 mt-2">
              Previous Company
            </p>

            <p className="text-slate-500 mt-1">
              June 2018 - May 2020
            </p>
          </motion.div>

          {/* ================================= */}
          {/* EXPERIENCE 3 */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Web Developer
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-blue-300 mt-2">
              Another Company
            </p>

            <p className="text-slate-500 mt-1">
              June 2016 - May 2018
            </p>
          </motion.div>

          {/* ================================= */}
          {/* VIEW DETAILS BUTTON */}
          {/* ================================= */}

          <motion.div variants={itemVariants}>
            <button
              onClick={() => setShowDetails(true)}
              className="group inline-flex items-center gap-3 rounded-lg border border-blue-300 bg-blue-400/10 px-7 py-3.5 text-sm font-semibold text-blue-300 tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer hover:border-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-[0_0_25px_rgba(129,140,248,0.25)]"
            >
              View Details
            </button>
          </motion.div>
        </motion.div>

        {/* ================================= */}
        {/* RIGHT - 40% IMAGE */}
        {/* ================================= */}

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full h-125 md:h-screen"
        >
          <img
            src={experienceImage}
            alt="Experience"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
      </div>

      {/* ================================= */}
      {/* MODAL */}
      {/* ================================= */}

      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setShowDetails(false)}
        >
          {/* Modal Box */}

          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-blue-400/30 bg-slate-950 p-8 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}

            <button
              onClick={() => setShowDetails(false)}
              className="absolute right-5 top-5 cursor-pointer text-xl text-slate-400 hover:text-white"
            >
              ✕
            </button>

            {/* Modal Heading */}

            <h2 className="mb-8 text-3xl font-semibold tracking-wider text-blue-400">
              Work Experience Details
            </h2>

            {/* Experience Details */}

            <div className="space-y-8">
              {experienceDetails.map((experience, index) => (
                <div key={index}>

                  <h3 className="text-xl font-semibold text-slate-200">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-blue-300">
                    {experience.company}
                  </p>

                  <p className="mt-1 text-slate-500">
                    {experience.duration}
                  </p>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {experience.description}
                  </p>

                  {index !== experienceDetails.length - 1 && (
                    <hr className="mt-8 border-slate-800" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;