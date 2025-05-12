import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AnimatedImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      

    >
      <Image
        className="cursor-pointer"
        src="/images/hardware/kioks4.png"
        alt="Logo"
        width={400}
        height={500}
      />
    </motion.div>
  );
};

export default AnimatedImage;
