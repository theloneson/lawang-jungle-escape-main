
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaLabel,
  ctaUrl = "#about"
}) => {
  const scrollToContent = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src={backgroundImage} alt="Bukit Lawang Rainforest" className="hero-image" />
        <div className="overlay-gradient"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow-lg animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="max-w-2xl text-lg md:text-xl text-center mb-8 text-shadow animate-fade-in">
            {subtitle}
          </p>
        )}
        {ctaLabel && (
          <a 
            href={ctaUrl} 
            className="btn-primary animate-fade-in"
          >
            {ctaLabel}
          </a>
        )}
      </div>
      
      <div className="hero-scroll-btn" onClick={scrollToContent}>
        <ArrowDown className="text-white w-10 h-10" strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default HeroSection;
