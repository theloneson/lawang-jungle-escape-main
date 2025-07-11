
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

interface CinematicHeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

const CinematicHero: React.FC<CinematicHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaLabel,
  ctaUrl = "#about"
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const scrollToContent = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.5
        }
      );
    }
  }, []);

  const titleWords = title.split(' ');

  return (
    <motion.section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div 
        ref={imageRef}
        className="absolute inset-0 w-full h-[110%] -top-[5%]"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale,
          y
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      <motion.div 
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-20"
        style={{ opacity }}
      >
        <h1 className="flex flex-wrap justify-center mb-6 text-5xl md:text-7xl font-bold text-shadow-lg">
          {titleWords.map((word, index) => (
            <span key={index} className="mx-2 block">
              {word}
            </span>
          ))}
        </h1>
        
        {subtitle && (
          <p className="max-w-2xl text-lg md:text-xl text-center mb-8 text-shadow">
            {subtitle}
          </p>
        )}
        
        {ctaLabel && (
          <motion.a 
            href={ctaUrl} 
            className="relative group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 block px-8 py-3 text-lg font-medium tracking-wider border-2 border-white">
              {ctaLabel}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-full"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-white opacity-30 transition-all duration-200 group-hover:h-full group-hover:opacity-0"></span>
          </motion.a>
        )}
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToContent}
      >
        <ArrowDown className="text-white w-10 h-10" strokeWidth={1} />
      </motion.div>
    </motion.section>
  );
};

export default CinematicHero;
