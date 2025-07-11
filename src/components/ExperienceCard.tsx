
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  image,
  title,
  description,
  className,
}) => {
  return (
    <motion.div 
      className={cn("experience-card h-96 group cursor-pointer", className)}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full overflow-hidden rounded-lg">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
          <h3 className="text-2xl font-serif mb-2">{title}</h3>
          <p className="text-gray-200 opacity-90 line-clamp-3 text-sm group-hover:line-clamp-none">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
