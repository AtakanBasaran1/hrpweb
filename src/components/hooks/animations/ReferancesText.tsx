"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ReferancesText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{
        duration: 1.4,
        ease: "easeOut",
      }}
      className="sm:text-7xl text-4xl text-center font-bold m-3 bg-gradient-to-r from-blue-700 via-sky-500 to-gray-400 text-transparent bg-clip-text"
    >
      Referanslarımız
    </motion.h1>
  );
};

export default ReferancesText;
