
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  className?: string;
  height?: string;
  overlayOpacity?: number;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
  className = '',
  height = '100vh',
  overlayOpacity = 0.3,
  speed = 0.5,
}) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          y,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10 h-full flex flex-col justify-center">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
