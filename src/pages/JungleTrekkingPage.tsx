
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import RevealOnScroll from '@/components/RevealOnScroll';
import ParallaxSection from '@/components/ParallaxSection';
import { Card, CardContent } from '@/components/ui/card';
import { TreeDeciduous, Mountain, PawPrint, Camera } from 'lucide-react';

const JungleTrekkingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/aab1cf9c-45da-424c-9fb8-e91428667c86.png"
        height="80vh"
        overlayOpacity={0.3}
        className="flex items-center justify-center"
      >
        <div className="section-container text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jungle Trekking
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Journey into the heart of Sumatra's ancient rainforest
          </motion.p>
        </div>
      </ParallaxSection>
      
      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Experience Untamed Wilderness"
              subtitle="Guided adventures through one of Earth's most precious ecosystems"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <RevealOnScroll>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Bukit Lawang offers unparalleled access to the ancient rainforest of Gunung Leuser National Park. 
                  Here, experienced local guides lead you through dense jungle trails to witness some of the world's 
                  most rare and endangered wildlife in their natural habitat.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From half-day excursions to multi-day expeditions, each trek is an opportunity to disconnect from 
                  the modern world and immerse yourself in nature. As you move beneath the rainforest canopy, you'll 
                  discover the incredible biodiversity that makes Sumatra so ecologically significant.
                </p>
              </RevealOnScroll>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <RevealOnScroll direction="left" delay={0.2}>
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/aab1cf9c-45da-424c-9fb8-e91428667c86.png"
                    alt="Dense rainforest canopy"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
              
              <RevealOnScroll direction="down" delay={0.4}>
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/1334a463-67c5-4f7b-9b96-09c719397be7.png"
                    alt="Ancient stone steps in jungle"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trek Options Section */}
      <section className="bg-jungle-50 py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Choose Your Adventure"
              subtitle="From half-day walks to multi-day expeditions"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll delay={0.1}>
              <Card className="bg-white border-none shadow-xl overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/1df1bdf0-aa89-4b64-aa1a-7e39e4d3a519.png" 
                    alt="Half-day trek path" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TreeDeciduous className="h-6 w-6 mr-2 text-jungle-600" />
                    <h3 className="font-serif text-2xl text-jungle-800">Half-Day Trek</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A perfect introduction to the rainforest. This 3-4 hour trek takes you to orangutan feeding areas 
                    and through accessible jungle trails with high chances of wildlife sightings.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Duration: 3-4 hours
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Difficulty: Easy to Moderate
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Best for: Families, first-time visitors
                    </li>
                  </ul>
                  <motion.button 
                    className="bg-jungle-600 text-white px-6 py-2 rounded-md w-full hover:bg-jungle-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book This Trek
                  </motion.button>
                </CardContent>
              </Card>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <Card className="bg-white border-none shadow-xl overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/4af2d920-d6f0-4f5f-9513-7a9bbcd2584d.png" 
                    alt="Full-day trek experience" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-6 w-6 mr-2 text-jungle-600" />
                    <h3 className="font-serif text-2xl text-jungle-800">Full-Day Adventure</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A comprehensive jungle experience. Venture deeper into the forest to witness diverse wildlife, 
                    stunning landscapes, and hidden waterfalls perfect for a refreshing swim.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Duration: 6-8 hours
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Difficulty: Moderate
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Best for: Nature enthusiasts, photographers
                    </li>
                  </ul>
                  <motion.button 
                    className="bg-jungle-600 text-white px-6 py-2 rounded-md w-full hover:bg-jungle-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book This Trek
                  </motion.button>
                </CardContent>
              </Card>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.5}>
              <Card className="bg-white border-none shadow-xl overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/72ffe907-3a85-4acc-b0b6-e8e989961516.png" 
                    alt="Multi-day trek camp by river" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <PawPrint className="h-6 w-6 mr-2 text-jungle-600" />
                    <h3 className="font-serif text-2xl text-jungle-800">Multi-Day Expedition</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The ultimate rainforest experience. Camp by the river, venture into remote areas, and maximize 
                    your chances of encountering rare wildlife including orangutans, gibbons, and more.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Duration: 2-4 days
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Difficulty: Moderate to Challenging
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2"></span>
                      Best for: Adventure seekers, wildlife enthusiasts
                    </li>
                  </ul>
                  <motion.button 
                    className="bg-jungle-600 text-white px-6 py-2 rounded-md w-full hover:bg-jungle-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book This Trek
                  </motion.button>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Wildlife Section */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/dcc40d72-1da2-4b93-9de0-44780de07251.png"
        height="auto"
        overlayOpacity={0.6}
        className="py-32"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Incredible Wildlife"
              subtitle="Encounter some of the world's most remarkable creatures"
              light
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RevealOnScroll>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif mb-4 text-white">Orangutans</h3>
                <p className="text-gray-200 mb-4">
                  The iconic "people of the forest" are the stars of Bukit Lawang. These critically endangered great apes 
                  share 97% of their DNA with humans.
                </p>
                <div className="h-40 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/dcc40d72-1da2-4b93-9de0-44780de07251.png" 
                    alt="Wild orangutan" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif mb-4 text-white">Thomas Leaf Monkeys</h3>
                <p className="text-gray-200 mb-4">
                  With their distinctive black crest and white facial markings, these playful primates are often spotted 
                  leaping through the forest canopy.
                </p>
                <div className="h-40 rounded-lg overflow-hidden bg-jungle-900/50 flex justify-center items-center">
                  <Camera className="h-12 w-12 text-white/50" />
                </div>
              </motion.div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif mb-4 text-white">White-Handed Gibbons</h3>
                <p className="text-gray-200 mb-4">
                  Though rarely seen, these acrobatic lesser apes can be heard calling across the forest with their 
                  distinctive songs, especially at dawn.
                </p>
                <div className="h-40 rounded-lg overflow-hidden bg-jungle-900/50 flex justify-center items-center">
                  <Camera className="h-12 w-12 text-white/50" />
                </div>
              </motion.div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.6}>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif mb-4 text-white">Diverse Species</h3>
                <p className="text-gray-200 mb-4">
                  The forest is home to monitor lizards, countless bird species, magnificent insects, and if you're very 
                  lucky, evidence of the elusive Sumatran tigers.
                </p>
                <div className="h-40 rounded-lg overflow-hidden bg-jungle-900/50 flex justify-center items-center">
                  <Camera className="h-12 w-12 text-white/50" />
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>
      
      {/* What to Bring Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Prepare for Your Trek"
              subtitle="Essential items to bring for a comfortable jungle experience"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <RevealOnScroll>
              <div className="bg-jungle-50 border border-jungle-100 p-8 rounded-lg space-y-6">
                <h3 className="font-serif text-2xl text-jungle-800">What to Bring</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3"></span>
                    <span className="text-gray-700">Light, quick-drying clothes (long sleeves/pants recommended)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3"></span>
                    <span className="text-gray-700">Sturdy hiking shoes or boots with good grip</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3"></span>
                    <span className="text-gray-700">Rain jacket or poncho</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3"></span>
                    <span className="text-gray-700">Insect repellent and sunscreen</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3"></span>
                    <span className="text-gray-700">Reusable water bottle (min. 1 liter)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3"></span>
                    <span className="text-gray-700">Small backpack for personal items</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3"></span>
                    <span className="text-gray-700">Camera with zoom lens (optional)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3"></span>
                    <span className="text-gray-700">Basic first aid supplies</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="left" delay={0.3}>
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-100 p-6 rounded-lg">
                  <h4 className="font-serif text-xl text-amber-800 mb-2">Important Notes</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-500 mr-3 mt-2"></span>
                      <span>For multi-day treks, guides will provide camping equipment and meals, but bring a change of clothes and personal hygiene items.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-500 mr-3 mt-2"></span>
                      <span>The jungle can be hot and humid, but temperatures can drop at night, especially during rainy season.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-500 mr-3 mt-2"></span>
                      <span>Plastic waste is a challenge in remote areas. Please take all non-biodegradable waste back with you.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
                  <h4 className="font-serif text-xl text-blue-800 mb-2">Physical Preparation</h4>
                  <p className="text-gray-700">
                    While treks are customized to different fitness levels, the jungle terrain can be challenging 
                    with steep climbs, uneven surfaces, and occasional river crossings. A moderate level of fitness 
                    is recommended, particularly for multi-day expeditions.
                  </p>
                </div>
                
                <motion.div 
                  className="p-6 bg-jungle-600 text-white rounded-lg text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-serif text-xl mb-2">Book Your Trek Today</h4>
                  <p className="mb-4">
                    Guided treks can be arranged through local guides or your accommodation in Bukit Lawang.
                  </p>
                  <motion.button 
                    className="bg-white text-jungle-600 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact a Guide
                  </motion.button>
                </motion.div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/4af2d920-d6f0-4f5f-9513-7a9bbcd2584d.png"
        height="50vh"
        overlayOpacity={0.5}
        className="flex items-center justify-center"
      >
        <div className="section-container text-center">
          <RevealOnScroll>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Begin Your Jungle Adventure
            </motion.h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a 
                href="/contact"
                className="btn-primary"
                whileHover={{ scale: 1.05, backgroundColor: '#276604' }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Trek
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

export default JungleTrekkingPage;
