
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypingTitlePropsType={
    fullText:string;
};

const TypingTitle = ({fullText}:TypingTitlePropsType) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.h1
            style={{ marginTop: "100px" }}
            className="sm:text-6xl text-4xl text-center font-bold m-3 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-400 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {displayedText}
        </motion.h1>
    );

};
export default TypingTitle;    

