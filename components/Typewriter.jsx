"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
      // Reset after a delay for the repeat effect
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 1500); 

      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed]);

  return (
    <motion.span
      className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 text-2xl text-white font-bold"
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      transition={{ duration: 1 }}
    >
      {displayedText}
    </motion.span>
  );
};

export default Typewriter;
