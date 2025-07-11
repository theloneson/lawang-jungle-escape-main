
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import RevealOnScroll from '@/components/RevealOnScroll';
import ParallaxSection from '@/components/ParallaxSection';
import { TreePalm, MapPin, Compass, Heart, Mountain, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/f3a68e98-b1ba-440e-a491-cb5522fcf27b.png"
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
            About Bukit Lawang
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover the gateway to one of Indonesia's most spectacular natural treasures
          </motion.p>
        </div>
      </ParallaxSection>
      
      {/* History and Location Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="A Village at the Edge of Wilderness"
              subtitle="Where the rainforest meets civilization"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <RevealOnScroll>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Bukit Lawang, which translates to "Gateway to the Hill," is a small riverside village located at the 
                  eastern edge of Gunung Leuser National Park in North Sumatra. Originally established as an orangutan 
                  rehabilitation center in the 1970s, the village has evolved into an eco-tourism destination while 
                  maintaining its authentic charm.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The village is famed for its unique position as a gateway to one of the most diverse ecosystems 
                  on the planet. The Leuser Ecosystem spans more than 2.6 million hectares and is home to Sumatran 
                  orangutans, tigers, elephants, rhinos, and countless other species.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.4}>
                <div className="flex flex-wrap gap-6">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <TreePalm className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>UNESCO World Heritage Site</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>North Sumatra, Indonesia</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Globe className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Ecological Hotspot</span>
                  </motion.div>
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="relative h-[500px]">
              <RevealOnScroll direction="left">
                <motion.div
                  className="absolute w-full h-full rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/1df1bdf0-aa89-4b64-aa1a-7e39e4d3a519.png"
                    alt="Bukit Lawang rainforest path"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* National Park Section */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/3be12498-daa9-4b7e-9082-bf393dcb8dd3.png"
        height="auto"
        overlayOpacity={0.5}
        className="py-32"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Gunung Leuser National Park"
              subtitle="One of Indonesia's richest conservation areas"
              light
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <h3 className="text-2xl font-serif mb-4 text-white">Biodiversity Treasure</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <Mountain className="h-5 w-5 mr-3 mt-1 text-jungle-300" />
                    <span>Part of the Leuser Ecosystem, one of the most important conservation areas in Southeast Asia</span>
                  </li>
                  <li className="flex items-start">
                    <TreePalm className="h-5 w-5 mr-3 mt-1 text-jungle-300" />
                    <span>Rich tropical rainforest with thousands of plant species, including the Rafflesia, the world's largest flower</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 mr-3 mt-1 text-jungle-300" />
                    <span>Critical habitat for endangered Sumatran orangutans, elephants, tigers, and rhinoceros</span>
                  </li>
                  <li className="flex items-start">
                    <Compass className="h-5 w-5 mr-3 mt-1 text-jungle-300" />
                    <span>Over 8,500 square kilometers of protected wilderness</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="left">
              <div className="text-white space-y-6">
                <p className="text-lg leading-relaxed">
                  Gunung Leuser National Park is a vast wilderness area spanning North Sumatra and Aceh provinces. Named after Mount Leuser, 
                  the park represents one of the most complete remaining tropical rainforest ecosystems in the world.
                </p>
                <p className="text-lg leading-relaxed">
                  The park forms the core of the broader Leuser Ecosystem and is recognized as part of the Tropical Rainforest Heritage 
                  of Sumatra UNESCO World Heritage Site. Its extraordinary biodiversity makes it a global conservation priority.
                </p>
                <p className="text-lg leading-relaxed">
                  Bukit Lawang serves as the primary access point to this natural wonder, allowing visitors to experience 
                  the richness of the rainforest while supporting conservation efforts.
                </p>
                <motion.button 
                  className="btn-primary mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Conservation
                </motion.button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Orangutan Rehabilitation Center */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Orangutan Rehabilitation Center"
              subtitle="A sanctuary for the 'People of the Forest'"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[600px]">
              <RevealOnScroll direction="right">
                <motion.div
                  className="absolute w-2/3 h-80 top-0 left-0 z-10 rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/13d2b914-81f0-40f6-9b10-3a3dec1f1d84.png"
                    alt="Young orangutan in Bukit Lawang"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
              
              <RevealOnScroll direction="up" delay={0.3}>
                <motion.div
                  className="absolute w-2/3 h-80 bottom-0 right-0 z-20 rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/dcc40d72-1da2-4b93-9de0-44780de07251.png"
                    alt="Adult orangutan in the wild"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <RevealOnScroll direction="left">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Established in 1973, the Bohorok Orangutan Rehabilitation Center in Bukit Lawang was one of the first 
                  facilities dedicated to rehabilitating orangutans that had been captured, kept as pets, or displaced 
                  by deforestation.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll direction="left" delay={0.2}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  While the center no longer actively rehabilitates new orangutans (that work continues at other sites), 
                  it remains a crucial location for monitoring previously released orangutans and their offspring. The 
                  semi-wild orangutans in the area have become ambassadors for their species.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll direction="left" delay={0.4}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, responsible tourism in Bukit Lawang helps fund conservation efforts while raising awareness about 
                  the plight of these critically endangered great apes, whose name means "person of the forest" in Malay.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll direction="left" delay={0.6}>
                <div className="p-6 bg-jungle-50 rounded-lg border border-jungle-100">
                  <h4 className="font-serif text-jungle-800 text-xl mb-2">Conservation Note</h4>
                  <p className="text-gray-700">
                    When visiting Bukit Lawang, always maintain a respectful distance from orangutans, follow your guide's instructions, 
                    and never attempt to feed or touch the animals. This helps ensure both your safety and the well-being of these 
                    magnificent creatures.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/be7ab9be-f8ba-47c7-bfed-ae35e684f046.png"
        height="50vh"
        overlayOpacity={0.6}
        className="flex items-center justify-center"
      >
        <div className="section-container text-center">
          <RevealOnScroll>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Ready to Experience Bukit Lawang?
            </motion.h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a 
                href="/jungle-trekking"
                className="btn-primary"
                whileHover={{ scale: 1.05, backgroundColor: '#276604' }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Jungle Treks
              </motion.a>
              <motion.a 
                href="/accommodations"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Places to Stay
              </motion.a>
            </div>
          </RevealOnScroll>
        </div>
      </ParallaxSection>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
