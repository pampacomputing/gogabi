"use client";

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;