"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type TypingTitlePropsType = {
  fullText: string;
};

const TypingTitle = ({ fullText }: TypingTitlePropsType) => {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [isInView, fullText]);

  return (
    <motion.h1
      ref={ref}
      className="sm:text-6xl text-4xl text-center font-bold m-3 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-400 text-transparent bg-clip-text"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      style={{ marginTop: "100px" }}
    >
      {displayedText}
    </motion.h1>
  );
};

export default TypingTitle;
