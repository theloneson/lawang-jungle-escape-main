
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  light = false
}) => {
  const titleWords = title.split(' ');
  
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <div className="mb-4 overflow-hidden">
        <h2 className={`text-3xl md:text-4xl font-bold flex flex-wrap ${centered ? 'justify-center' : 'justify-start'} ${light ? 'text-white' : 'text-jungle-800'}`}>
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              className="mx-2 inline-block"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>
      
      {subtitle && (
        <motion.p 
          className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-700'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: titleWords.length * 0.1 + 0.2,
            ease: "easeOut"  
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
