import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileCode,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Pf1 from "../assets/Pf1.png";
import Pf2 from "../assets/pf2.png";
import Pf3 from "../assets/pf3.png";
import Pf4 from "../assets/pf4.png";
import Pf5 from "../assets/pf5.png";
import Pf6 from "../assets/pf6.png";
import Pf7 from '../assets/pf7.png';
import Pf8 from '../assets/pf8.png';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Project One",
      image: Pf1,
      description:
        "A modern web application built with React and responsive UI design.",
      link: "https://next-js-2026-eight.vercel.app/",
    },
    {
      title: "Project Two",
      image: Pf8,
      description:
        "A responsive application with clean design, reusable components and API integration.",
      link: "https://aria-studios.netlify.app/",
    },
    {
      title: "Project Three",
      image: Pf7,
      description:
        "A responsive application with clean design, reusable components and API integration.",
      link: "#",
    },
    {
      title: "Project Four",
      image: Pf3,
      description:
        "A full-stack project focused on performance, usability and seamless user experience.",
      link: "https://github.com/HirenSiyodia/React-Router-Dom",
    },
    {
      title: "Project Five",
      image: Pf4,
      description:
        "A user-friendly web application built with modern frontend technologies.",
      link: "https://github.com/HirenSiyodia/React-Contact-Manager",
    },
    {
      title: "Project Six",
      image: Pf5,
      description:
        "A responsive project with reusable components and a clean interface.",
      link: "https://github.com/HirenSiyodia/React-Quiz",
    },
    {
      title: "Project Seven",
      image: Pf6,
      description:
        "A practical application demonstrating modern React development.",
      link: "https://github.com/HirenSiyodia/React-Tic-Tac-Toe-Game",
    },
    {
      title: "Project Eight",
      image: Pf2,
      description:
        "A responsive application with clean design, reusable components and API integration.",
      link: "https://github.com/HirenSiyodia/React-Weather-Application",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= projects.length ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? projects.length - 1 : prev - 1
    );
  };

  /*
    We display:
    - 1 card on mobile
    - 2 cards on tablet
    - 3 cards on desktop

    This helper gives us the projects that should currently be visible.
  */
  const getVisibleProjects = () => {
    const visibleProjects = [];

    for (let i = 0; i < 3; i++) {
      visibleProjects.push(
        projects[(currentIndex + i) % projects.length]
      );
    }

    return visibleProjects;
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 scroll-mt-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center"
      >
        <h1 className="flex items-center gap-3 text-4xl md:text-5xl font-bold text-blue-400 mb-14">
          Projects
          <FaFileCode className="text-3xl md:text-4xl" />
        </h1>
      </motion.div>

      {/* Slider */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Left Arrow */}
        <button
          onClick={previousSlide}
          aria-label="Previous projects"
          className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-700 bg-black/70 text-slate-300 flex items-center justify-center hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
        >
          <FaChevronLeft />
        </button>

        {/* Cards */}
        <div className="overflow-hidden px-8 sm:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="group rounded-xl border border-gray-700 bg-black/40 p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.15)]"
                >
                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-200">
                    {project.title}
                  </h2>

                  {/* Small Line */}
                  <div className="mt-4 mb-5 h-px w-12 bg-blue-400 transition-all duration-300 group-hover:w-20" />

                  {/* Image */}
                  <div className="w-full h-48 md:h-52 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-blue-400 font-semibold transition-colors duration-300 hover:text-blue-300"
                  >
                    View Project
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next projects"
          className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-700 bg-black/70 text-slate-300 flex items-center justify-center hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-blue-400"
                : "w-2 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;