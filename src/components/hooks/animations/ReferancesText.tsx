"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ReferancesText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.h1
      ref={ref}
      initial={{
        backgroundImage: 'linear-gradient(to right, #888, #888)', // gri ton
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              backgroundImage:
                'linear-gradient(to right, #312e81, #ec4899, #4b5563)', // orijinal renkler
              opacity: 1,
            }
          : {}
      }
      transition={{
        duration: 1.4,
        ease: "easeOut",
      }}
      style={{
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
      className="sm:text-7xl text-4xl text-center font-bold m-3"
    >
      Referanslarımız
    </motion.h1>
  );
};

export default ReferancesText;
