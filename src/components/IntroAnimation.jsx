import React from "react";
import { motion } from "framer-motion";

const IntroAnimation = ({
  children,
  direction = "bottom",
  duration = 0.8,
  delay = 0,
  once = true,
}) => {

  const directions = {
    left: {
      x: -100,
      y: 0,
    },

    right: {
      x: 100,
      y: 0,
    },

    bottom: {
      x: 0,
      y: 50,
    },

    top: {
      x: 0,
      y: -50,
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      viewport={{
        once: once,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default IntroAnimation;