"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TextMorphProps = {
  words: string[];
  interval?: number; // time in ms between morphs
  className?: string; // allow custom styling
};

const TextMorph: React.FC<TextMorphProps> = ({
  words,
  interval = 2000,
  className,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className={`relative min-h-[2em] flex items-center justify-center ${className || ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index} // safer than using words[index] directly
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute text-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextMorph;
