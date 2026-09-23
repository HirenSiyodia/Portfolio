import React, { useState } from "react";
import { motion } from "framer-motion";
import experienceImage from "../assets/experience.jpg";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const [showDetails, setShowDetails] = useState(false);

  const experienceDetails = [
    {
      company: "Inventech Solutions Pvt Ltd.",
      role: "Web Developer & Designer",
      duration: "February 2025 - April 2026",
      description:
        "Worked as a web developer & Designer on client website projects in collaboration with a partner company. Developed websites using HTML, CSS, JavaScript, and React.js to deliver user-facing web experiences. Gathered and analyzed client requirements to create actionable development plans for websites and applications. Designed and implemented technical solutions for specific user-facing assets and website requirements. Collaborated with clients and internal stakeholders throughout the development process to align solutions with project objectives."
    },
    {
      company: "Teleperformance Pvt Ltd.",
      role: "Senior Customer Service",
      duration: "March 2023 - April 2024",
      description:
        "Handled customer queries and concerns through email, chat, and other non-voice channels. Resolved customer issues by providing accurate information and appropriate solutions within defined timelines. Managed escalations and complex customer cases while maintaining high service quality. Coordinated with internal teams to resolve customer issues and ensure timely resolution.",
    },
    {
      company: "Indigo Consulting - Publicis Groupe",
      role: "Web Developer",
      duration: "June 2019 - August 2022",
      description:
        "Collaborated within an 8-member team to build responsive front-end solutions, leveraging HTML, CSS, SCSS, Bootstrap, and media queries across 5+ websites and web applications. Bringing new solutions to advance online banking services and Developing HDFC BANK Website. Implemented content management, campaign and E-mailer. Enhanced UI interactivity by 20% using JavaScript, jQuery, and the GSAP animation library, managed WordPress integrations to support and maintain content management needs.",
    },
    {
      company: "Global Advertising Media Pvt Ltd.",
      role: "Junior Web Developer",
      duration: "February 2019 - June 2019",
      description:
        "Associated in a 7-member frontend team to develop and maintain websites using HTML, CSS, SCSS, Media queries, JavaScript, and jQuery. Managed content across five websites using various Content Management Systems, including WordPress, MVC, and Drupal. Conducted client visits and provided ongoing support to ensure effective content delivery and client satisfaction.",
    },
    {
      company: "Social Fox Digital Marketing",
      role: "Web Developer & Designer",
      duration: "May 2018 - December 2018",
      description:
        "Synchronized with a team of 2 designers and 2 developers to brainstorm and establish UI requirements and layout designs. Developed Responsive web interfaces using HTML, CSS/SCSS for 2+ web applications, incorporated Media queries for Cross-device compatibility. Conducted manual, cross-browser compatibility testing for websites, utilized Git for version control.",
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
      className="w-full min-h-screen flex items-center mt-24 scroll-mt-24"
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
          className="w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16"
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
          {/* EXPERIENCE 2 */}
          {/* ================================= */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Web Developer & Designer
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-blue-300 mt-2">
              Inventech Solutions Pvt Ltd.
            </p>

            <p className="text-slate-500 mt-1">
              February 2025 - April 2026
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
              Senior Customer Service
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-blue-300 mt-2">
              Teleperformance Pvt Ltd.
            </p>

            <p className="text-slate-500 mt-1">
              March 2023 - April 2024
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
              Indigo Consulting - Publicis Groupe
            </p>

            <p className="text-slate-500 mt-1">
              June 2019 - August 2022
            </p>
          </motion.div>

          {/* ================================= */}
          {/* EXPERIENCE 4 */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Junior Web Developer
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-blue-300 mt-2">
              Global Advertising Media Pvt Ltd.
            </p>

            <p className="text-slate-500 mt-1">
              February 2019 - June 2019
            </p>
          </motion.div>

          {/* ================================= */}
          {/* EXPERIENCE 5 */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Web Developer & Designer
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-blue-300 mt-2">
              Social Fox Digital Marketing
            </p>

            <p className="text-slate-500 mt-1">
              May 2018 - December 2018
            </p>
          </motion.div>

          {/* ================================= */}
          {/* VIEW DETAILS BUTTON */}
          {/* ================================= */}

          <motion.div variants={itemVariants} className="mt-2 pb-10">
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
  className="w-full h-150 md:h-175 lg:h-200 flex items-center justify-center sticky top-24"
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