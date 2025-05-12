import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type AnimatedImagePropType = {
  srcname: string;
  width: number;
  height: number;
  classNameProps: string;
  layoutProps: string;
};

const AnimatedImage = ({
  srcname,
  width,
  height,
  layoutProps,
  classNameProps,
}: AnimatedImagePropType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Sağdan sola gelecek
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          className={classNameProps}
          src={srcname}
          alt="Logo"
          width={width}
          height={height}
          layout={layoutProps}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedImage;
