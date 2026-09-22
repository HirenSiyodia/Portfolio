import React, { useState } from "react";
import { motion } from "framer-motion";
import educationImage from "../assets/education.jpg";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [showDetails, setShowDetails] = useState(false);

  const educationDetails = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science & Engineering",
      college:
        "Mahatma Gandhi Institute Of Technical Education And Research Center",
      duration: "June 2011 - January 2017",
      description:
        "Designed and Developed B2B virtual collaboration platform for effective and quick communication within organization. This tool helped to make easy connections between co-workers, partners, and customers.",
    },
    {
      degree: "Diploma in Engineering",
      field: "Electrical Engineering",
      college:
        "Dr. S. & S.S. Ghandhy College of Engineering & Technology",
      duration: "June 2008 - March 2011",
      description:
        "A basic electronic project that demonstrates how a potentiometer works as a variable resistor to control voltage and adjust the output of an electrical circuit. The project helped me understand fundamental concepts of resistance, voltage variation, and circuit control.",
    },
    {
      degree: "Secondary School Certificate Examination",
      field: "",
      college: "Sheth P. H. Vidyalaya, Navsari, Gujarat, India",
      duration: "June 2007",
      description:
        "Completed secondary education with a strong foundation in mathematics, science, and general academic studies.",
    },
  ];

  // Content Parent Animation
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

  // Individual Item Animation
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

  // Image Animation
  const imageVariants = {
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

  return (
    <section
      id="education"
      className="w-full min-h-screen flex items-center mt-24 scroll-mt-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-[40%_60%]">
        {/* LEFT SIDE - IMAGE */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full h-125 md:h-screen"
        >
          <img
            src={educationImage}
            alt="Education"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* RIGHT SIDE - CONTENT */}
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
            className="flex items-center gap-3 pt-4 text-4xl md:text-5xl font-semibold text-blue-400 mb-10 tracking-wider leading-relaxed"
          >
            Education

            <FaGraduationCap className="text-3xl md:text-4xl" />
          </motion.h1>

          {/* ================================= */}
          {/* EDUCATION 1 */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8 tracking-wider leading-relaxed"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Bachelor of Engineering - Computer Science & Engineering
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-slate-400 mt-2">
              Mahatma Gandhi Institute Of Technical Education And Research
              Center
            </p>

            <p className="text-slate-500 mt-1">
              June 2011 - January 2017
            </p>
          </motion.div>

          {/* ================================= */}
          {/* EDUCATION 2 */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8 tracking-wider leading-relaxed"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Diploma in Engineering - Electrical Engineering
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-slate-400 mt-2">
              Dr. S. & S.S. Ghandhy College of Engineering & Technology
            </p>

            <p className="text-slate-500 mt-1">
              June 2008 - March 2011
            </p>
          </motion.div>

          {/* ================================= */}
          {/* EDUCATION 3 */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8 tracking-wider leading-relaxed"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              Secondary School Certificate Examination
            </h2>

            <hr className="w-1/2 mt-3 border-slate-600" />

            <p className="text-slate-400 mt-2">
              Sheth P. H. Vidyalaya, Navsari, Gujarat, India
            </p>

            <p className="text-slate-500 mt-1">
              June 2007
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
      </div>

      {/* MODAL */}
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
              Education Details
            </h2>

            {/* Education Details */}
            <div className="space-y-8">

              {educationDetails.map((education, index) => (
                <div key={index}>

                  <h3 className="text-xl font-semibold text-slate-200">
                    {education.degree}
                  </h3>

                  {education.field && (
                    <p className="mt-2 text-blue-300">
                      {education.field}
                    </p>
                  )}

                  <p className="mt-2 text-slate-400">
                    {education.college}
                  </p>

                  <p className="mt-1 text-slate-500">
                    {education.duration}
                  </p>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {education.description}
                  </p>

                  {index !== educationDetails.length - 1 && (
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

export default Education;