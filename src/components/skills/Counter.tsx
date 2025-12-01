'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export const Counter = ({ to, prefix = '', suffix = '', duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = to / (duration / 16); // 16ms per frame for ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [to, duration]);

  return (
    <motion.span
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};