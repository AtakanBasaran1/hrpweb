import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AnimatedImage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    return (
        <motion.div
            ref={ref}
            style={{ perspective: 1000 }}
        >
            <motion.div
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
                transition={{ duration: 0.9, ease: 'easeOut' }}
            >
                <Image
                    className="cursor-pointer"
                    src="/images/hardware/kioks4.png"
                    alt="Logo"
                    width={400}
                    height={500}
                />
            </motion.div>
        </motion.div>
    );
};

export default AnimatedImage;
