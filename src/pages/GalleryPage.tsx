
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import RevealOnScroll from '@/components/RevealOnScroll';
import GalleryImage from '@/components/GalleryImage';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { Instagram, Images, GalleryHorizontal, Camera } from 'lucide-react';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/dcc40d72-1da2-4b93-9de0-44780de07251.png",
      alt: "Wild orangutan in the trees",
      category: "wildlife"
    },
    {
      id: 2,
      src: "/lovable-uploads/13d2b914-81f0-40f6-9b10-3a3dec1f1d84.png",
      alt: "Young orangutan on a branch",
      category: "wildlife"
    },
    {
      id: 3,
      src: "/lovable-uploads/1334a463-67c5-4f7b-9b96-09c719397be7.png",
      alt: "Ancient stone steps in the jungle",
      category: "jungle"
    },
    {
      id: 4,
      src: "/lovable-uploads/41025d55-bac5-40dd-b988-7a6bf166d07a.png",
      alt: "River and jungle landscape",
      category: "jungle"
    },
    {
      id: 5,
      src: "/lovable-uploads/3511c3b2-9684-4923-b1c0-eb6d5a6e0b6c.png",
      alt: "Suspension bridge in Bukit Lawang",
      category: "village"
    },
    {
      id: 6,
      src: "/lovable-uploads/1df1bdf0-aa89-4b64-aa1a-7e39e4d3a519.png",
      alt: "Jungle path between rock formations",
      category: "jungle"
    },
    {
      id: 7,
      src: "/lovable-uploads/f3a68e98-b1ba-440e-a491-cb5522fcf27b.png",
      alt: "View of the village from above",
      category: "village"
    },
    {
      id: 8,
      src: "/lovable-uploads/3be12498-daa9-4b7e-9082-bf393dcb8dd3.png",
      alt: "Gunung Leuser National Park entrance",
      category: "jungle"
    },
    {
      id: 9,
      src: "/lovable-uploads/aab1cf9c-45da-424c-9fb8-e91428667c86.png",
      alt: "Dense jungle canopy",
      category: "jungle"
    },
    {
      id: 10,
      src: "/lovable-uploads/4af2d920-d6f0-4f5f-9513-7a9bbcd2584d.png",
      alt: "Trekking through Bukit Lawang forest",
      category: "activities"
    },
    {
      id: 11,
      src: "/lovable-uploads/72ffe907-3a85-4acc-b0b6-e8e989961516.png",
      alt: "River tubing in Bukit Lawang",
      category: "activities"
    },
    {
      id: 12,
      src: "/lovable-uploads/223e56b1-4020-42da-af48-1f0f113847b7.png",
      alt: "Jungle River House accommodation",
      category: "accommodation"
    },
    {
      id: 13,
      src: "/lovable-uploads/105cb896-9614-4680-9d87-dba81a3c0f0d.png",
      alt: "Resort overlooking the jungle",
      category: "accommodation"
    },
    {
      id: 14,
      src: "/lovable-uploads/be7ab9be-f8ba-47c7-bfed-ae35e684f046.png",
      alt: "Misty morning over the rainforest",
      category: "jungle"
    },
    {
      id: 15,
      src: "/lovable-uploads/864534a5-ba06-42ec-864e-742bf9904a8a.png",
      alt: "Traditional houses in the village",
      category: "village"
    }
  ];
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/be7ab9be-f8ba-47c7-bfed-ae35e684f046.png"
        height="70vh"
        overlayOpacity={0.4}
        className="flex items-center justify-center"
      >
        <div className="section-container text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Visual storytelling of Bukit Lawang's natural wonders
          </motion.p>
        </div>
      </ParallaxSection>
      
      {/* Filter Section */}
      <section className="py-16">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Explore Our Gallery"
              subtitle="Immerse yourself in the sights of Bukit Lawang"
            />
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <FilterButton 
                active={filter === 'all'} 
                onClick={() => setFilter('all')}
                icon={<GalleryHorizontal size={18} />}
              >
                All Photos
              </FilterButton>
              <FilterButton 
                active={filter === 'wildlife'} 
                onClick={() => setFilter('wildlife')}
                icon={<Camera size={18} />}
              >
                Wildlife
              </FilterButton>
              <FilterButton 
                active={filter === 'jungle'} 
                onClick={() => setFilter('jungle')}
                icon={<Camera size={18} />}
              >
                Jungle
              </FilterButton>
              <FilterButton 
                active={filter === 'village'} 
                onClick={() => setFilter('village')}
                icon={<Camera size={18} />}
              >
                Village
              </FilterButton>
              <FilterButton 
                active={filter === 'activities'} 
                onClick={() => setFilter('activities')}
                icon={<Camera size={18} />}
              >
                Activities
              </FilterButton>
              <FilterButton 
                active={filter === 'accommodation'} 
                onClick={() => setFilter('accommodation')}
                icon={<Camera size={18} />}
              >
                Accommodation
              </FilterButton>
            </div>
          </RevealOnScroll>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredImages.map((image, index) => (
              <RevealOnScroll key={image.id} delay={index * 0.1} className="h-64 md:h-72">
                <GalleryImage 
                  src={image.src} 
                  alt={image.alt}
                  className="h-full"
                />
              </RevealOnScroll>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Photographer Section */}
      <section className="bg-jungle-50 py-20">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Meet Our Photographer"
              subtitle="Capturing the essence of Bukit Lawang"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <RevealOnScroll direction="right">
                <motion.div 
                  className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/be7ab9be-f8ba-47c7-bfed-ae35e684f046.png"
                    alt="Photographer portrait"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <RevealOnScroll direction="left" delay={0.2}>
                <h3 className="text-3xl font-serif text-jungle-800">Adi Sumatran</h3>
                <p className="text-gray-600">Wildlife Photographer & Local Guide</p>
                
                <div className="border-l-4 border-jungle-500 pl-4 my-4">
                  <p className="text-gray-700 italic">
                    "I've been photographing the orangutans and the rainforest of Bukit Lawang for over 15 years. 
                    Each day reveals something new and magical in this extraordinary place. My mission is to share 
                    its beauty while raising awareness about the importance of conservation."
                  </p>
                </div>
                
                <p className="text-gray-700">
                  Born and raised in North Sumatra, Adi combines his passion for photography with deep knowledge 
                  of the local ecosystem. His work has been featured in National Geographic, BBC Wildlife, and various 
                  conservation publications.
                </p>
                
                <div className="flex gap-4 mt-4">
                  <motion.a 
                    href="https://www.instagram.com/visitbukitlawang/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-jungle-700 hover:text-jungle-900"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Instagram size={20} className="mr-2" />
                    @adisumatran
                  </motion.a>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Share Your Photos Section */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/3be12498-daa9-4b7e-9082-bf393dcb8dd3.png"
        height="auto"
        overlayOpacity={0.6}
        className="py-24"
      >
        <div className="section-container text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Share Your Journey
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Tag your Bukit Lawang photos with <span className="font-bold">#VisitBukitLawang</span> for a chance 
              to be featured on our Instagram and website
            </p>
            
            <motion.a 
              href="https://www.instagram.com/visitbukitlawang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-jungle-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={20} className="mr-2" />
              Follow Us on Instagram
            </motion.a>
          </RevealOnScroll>
        </div>
      </ParallaxSection>
      
      {/* Photo Tips Section */}
      <section className="py-20">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Photography Tips"
              subtitle="Capture the magic of Bukit Lawang"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll>
              <div className="bg-jungle-50 p-6 rounded-lg border border-jungle-100">
                <h4 className="font-serif text-xl text-jungle-800 mb-3">Wildlife Photography</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Use a zoom lens (ideally 70-300mm) to capture wildlife from a respectful distance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Be patient—sometimes waiting quietly in one spot yields the best sightings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Early morning offers the best light and higher chances of active wildlife.</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="bg-jungle-50 p-6 rounded-lg border border-jungle-100">
                <h4 className="font-serif text-xl text-jungle-800 mb-3">Jungle Landscapes</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Look for shafts of light breaking through the canopy—these create dramatic forest scenes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Include a person or recognizable object to show the scale of massive trees.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Use a wider aperture to create depth in dense forest scenes.</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <div className="bg-jungle-50 p-6 rounded-lg border border-jungle-100">
                <h4 className="font-serif text-xl text-jungle-800 mb-3">Practical Tips</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Protect your gear from humidity with silica gel packets and a rain cover.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Bring extra batteries—charging opportunities may be limited.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Ask your guide about photography spots—they know the best locations and times.</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Helper component for filter buttons
interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ children, active, onClick, icon }) => (
  <motion.button
    className={`px-4 py-2 rounded-full flex items-center ${
      active 
        ? 'bg-jungle-600 text-white' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </motion.button>
);

export default GalleryPage;
