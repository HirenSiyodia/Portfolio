import React, { useEffect, useMemo, useState } from "react";

const IntroAnimation = ({ onFinish }) => {
  const greetings = useMemo(() => ["Hello", "नमस्ते", "Hola", "Bonjour", "Hallo", "Ciao",], []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(timer);

          setTimeout(() => {
            onFinish();
          }, 800);

          return prev;
        }

        return prev + 1;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [greetings, onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 text-white">
      <h1 className="text-4xl md:text-6xl font-bold">
        {greetings[index]}, <br/>Devops
      </h1>
    </div>
  );
};

export default IntroAnimation;