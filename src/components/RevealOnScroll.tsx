
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  distance?: number;
  duration?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  width = "fit-content",
  delay = 0.2,
  direction = 'up',
  className = '',
  distance = 50,
  duration = 0.8,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const getDirectionAnimation = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 };
      case 'down': return { y: -distance, opacity: 0 };
      case 'left': return { x: distance, opacity: 0 };
      case 'right': return { x: -distance, opacity: 0 };
      default: return { y: distance, opacity: 0 };
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={{ width }}>
      <motion.div
        variants={{
          hidden: getDirectionAnimation(),
          visible: { 
            y: 0, 
            x: 0, 
            opacity: 1,
            transition: { 
              duration: duration, 
              delay: delay, 
              ease: [0.25, 0.1, 0.25, 1] 
            } 
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealOnScroll;
