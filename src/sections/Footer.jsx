import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  const contactLinks = [
    {
      icon: <MdEmail className="w-5 h-5 text-white" />,
      label: "siyodiahiren7@gmail.com",
      href: "mailto:siyodiahiren7@gmail.com",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5 text-white" />,
      label: "/in/siyodiahiren/",
      href: "https://linkedin.com/in/siyodiahiren/",
    },
    {
      icon: <FaGithub className="w-5 h-5 text-white" />,
      label: "HirenSiyodia",
      href: "https://github.com/hirensiyodia",
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5 text-white" />,
      label: "+91-98-199-13-272",
      href: "tel:+919819913272",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      id="contact"
      className="relative w-full px-6 py-20 font-sans text-white md:px-12"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr_1fr] md:items-center md:gap-10"
      >
        {/* ================= LEFT ================= */}
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col"
        >
          {/* Heading */}
          <div className="flex items-center gap-3">
            <MdPhone className="h-8 w-8 text-blue-400" />

            <h2 className="text-3xl font-bold tracking-tight text-blue-400 md:text-4xl">
              Get In Touch
            </h2>
          </div>

          {/* Contact Details */}
          <div className="mt-8 flex flex-col space-y-4">
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={
                  item.href.startsWith("tel:") ||
                  item.href.startsWith("mailto:")
                    ? "_self"
                    : "_blank"
                }
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                {/* Icon */}
                <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-2.5 transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-400/10">
                  {item.icon}
                </div>

                {/* Text */}
                <span className="text-sm font-medium sm:text-base">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ================= MIDDLE ================= */}
        <motion.div
          variants={itemVariants}
          className="relative flex min-h-60 flex-col items-center justify-center text-center"
        >
          {/* Decorative Lines */}
          <div className="absolute top-0 hidden h-full w-px bg-linear-to-b from-transparent via-gray-800 to-transparent md:left-0 md:block" />

          <div className="px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              Let's Connect
            </p>

            <h3 className="text-3xl font-semibold leading-tight text-slate-200 md:text-4xl">
              Let's create something
              <span className="block text-blue-400">
                amazing together.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-gray-500 md:text-base">
              Have an idea, project, or opportunity in mind?
              Feel free to reach out and let's build something meaningful.
            </p>

            {/* Small CTA */}
            <a
              href="mailto:siyodiahiren7@gmail.com"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-blue-400"
            >
              Start a conversation
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Decorative Line */}
          <div className="absolute bottom-0 hidden h-px w-24 bg-linear-to-r from-transparent via-blue-400/50 to-transparent md:block" />
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center justify-center md:items-end"
        >
          <div className="text-center md:text-right">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
              Resume
            </p>

            <h3 className="mb-6 text-xl font-semibold text-slate-200">
              Want to know more?
            </h3>
            <a
              href="#resume"
              className="group inline-flex items-center gap-3 rounded-lg border tracking-wider leading-relaxed border-blue-300 bg-blue-400/10 px-7 py-3.5 text-sm font-semibold text-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer hover:border-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-[0_0_25px_rgba(129,140,248,0.25)]"
            >
              Download Resume

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* ================= BOTTOM ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mt-20 w-full max-w-5xl border-t border-gray-900 pt-8 text-center"
      >
        <p className="text-xs leading-6 text-gray-500">
          Built & Designed by Hiren Nanubhai Siyodia
          <span className="mx-2 text-gray-700">|</span>
           © 2026 All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}