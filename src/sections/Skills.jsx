import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const Skills = () => {
  const skillsData = [
    {
      title: "Technologies",
      skills:
        "HTML, CSS, SCSS, SASS, JavaScript, Typescript, JSON, Node, React, Next, ",
    },
    {
      title: "Frameworks",
      skills:
        "Flexboxgrid, Bootstrap, Tailwind, jQuery, React Router, Redux Toolkit, Framer Motion,"
    },
    {
      title: "Tools",
      skills:
        "Vscode, WebStrom, GitHub, Git, Redux, Vercel, Jira, Npm, Webpack",
    },
    {
      title: "Methodologies",
      skills:
        "Version control, SEO, CMS, Data Structures & Algorithms, Object Oriented Programming, User-centered design",
    },
  ];

  // Parent animation
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
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

  // Heading animation
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* Section Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <h1 className="flex items-center gap-3 text-4xl md:text-5xl font-bold text-blue-400 mb-14">
            Skills
            <FaTools className="text-3xl md:text-4xl" />
          </h1>
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative rounded-xl border border-gray-700/80 bg-transparent p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.12)]"
            >
              {/* Floating Badge Title */}
              <div className="absolute -top-3.5 left-6 bg-gray-950 px-3">
                <span className="text-xl font-semibold text-slate-200 transition-colors duration-300 group-hover:text-blue-400">
                  {category.title}
                </span>
              </div>

              {/* Small Line */}
              <div className="mt-3 mb-5 h-px w-12 bg-blue-400 transition-all duration-300 group-hover:w-20" />

              {/* Skills */}
              <p className="text-base leading-relaxed tracking-wide text-slate-400">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;