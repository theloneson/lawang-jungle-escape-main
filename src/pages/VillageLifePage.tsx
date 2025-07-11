
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import RevealOnScroll from '@/components/RevealOnScroll';
import ParallaxSection from '@/components/ParallaxSection';
import { Users, Utensils, Home } from 'lucide-react';

const VillageLifePage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/3511c3b2-9684-4923-b1c0-eb6d5a6e0b6c.png"
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
            Village Life
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience authentic Sumatran culture along the Bohorok River
          </motion.p>
        </div>
      </ParallaxSection>
      
      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Life by the River"
              subtitle="Where nature and culture flow together"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <RevealOnScroll>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Bukit Lawang isn't just a gateway to the jungle—it's a vibrant community where life moves to the rhythm 
                  of the Bohorok River. The village stretches along both riverbanks, connected by a network of suspension 
                  bridges that sway gently above the flowing waters.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Here, you'll experience the warm hospitality of the local people, a unique blend of traditional Batak culture 
                  and influences from across Indonesia. Daily life centers around the river—washing clothes, bathing, fishing, 
                  and gathering to share stories at riverside cafés.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.5}>
                <div className="flex flex-wrap gap-6">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Users className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Friendly Community</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Utensils className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Authentic Cuisine</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Home className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Riverside Living</span>
                  </motion.div>
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="relative h-[500px]">
              <RevealOnScroll direction="left">
                <motion.div
                  className="absolute w-4/5 h-2/3 top-0 right-0 rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/864534a5-ba06-42ec-864e-742bf9904a8a.png"
                    alt="Bukit Lawang village"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
              
              <RevealOnScroll direction="up" delay={0.3}>
                <motion.div
                  className="absolute w-2/3 h-2/3 bottom-0 left-0 rounded-lg overflow-hidden shadow-xl z-10"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/41025d55-bac5-40dd-b988-7a6bf166d07a.png"
                    alt="Bohorok River"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/864534a5-ba06-42ec-864e-742bf9904a8a.png"
        height="auto"
        overlayOpacity={0.7}
        className="py-32"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Meet the Community"
              subtitle="The heart and soul of Bukit Lawang"
              light
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 mr-3 text-jungle-200" />
                  <h3 className="text-2xl font-serif text-white">Local Guides</h3>
                </div>
                <p className="text-gray-200">
                  Many villagers work as jungle guides, sharing their extensive knowledge of the rainforest ecosystem. 
                  These guides are certified by the national park and are crucial for conservation efforts.
                </p>
                <ul className="mt-4 space-y-2 text-gray-200">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Expert wildlife spotters</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Conservation advocates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Multilingual storytellers</span>
                  </li>
                </ul>
              </motion.div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <Utensils className="h-6 w-6 mr-3 text-jungle-200" />
                  <h3 className="text-2xl font-serif text-white">Food & Culture</h3>
                </div>
                <p className="text-gray-200">
                  Family-run restaurants serve traditional Sumatran cuisine alongside international options. Don't miss 
                  local specialties like sayur lodeh (vegetable curry) and fresh river fish with sambal.
                </p>
                <ul className="mt-4 space-y-2 text-gray-200">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Authentic Sumatran dishes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Riverside cafés</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Fresh tropical fruits</span>
                  </li>
                </ul>
              </motion.div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 mr-3 text-jungle-200" />
                  <h3 className="text-2xl font-serif text-white">Local Economy</h3>
                </div>
                <p className="text-gray-200">
                  Tourism is the lifeblood of Bukit Lawang, providing sustainable income for local families. Many residents 
                  run guesthouses, restaurants, shops, or work as guides and support staff.
                </p>
                <ul className="mt-4 space-y-2 text-gray-200">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Family-owned businesses</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Handmade crafts</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-jungle-300 mr-2"></span>
                    <span>Eco-tourism focus</span>
                  </li>
                </ul>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Experiences Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Experience Village Life"
              subtitle="Beyond jungle trekking: immerse yourself in local culture"
            />
          </RevealOnScroll>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px]">
                <RevealOnScroll direction="right">
                  <motion.div
                    className="h-full rounded-lg overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="/lovable-uploads/72ffe907-3a85-4acc-b0b6-e8e989961516.png"
                      alt="River tubing in Bukit Lawang"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </RevealOnScroll>
              </div>
              
              <div className="space-y-6">
                <RevealOnScroll direction="left">
                  <h3 className="text-3xl font-serif text-jungle-800">River Activities</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The Bohorok River is the lifeline of the village. Take a refreshing dip in its cooling waters, 
                    sunbathe on smooth river rocks, or try tubing—a local favorite where you float downstream on large 
                    inner tubes, navigating gentle rapids.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    In the evenings, the riverside comes alive as locals and visitors gather at cafés built on stilts 
                    over the water, offering the perfect setting to watch the sunset over the rainforest.
                  </p>
                </RevealOnScroll>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <RevealOnScroll direction="right">
                  <h3 className="text-3xl font-serif text-jungle-800">Local Markets & Crafts</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Visit the small village market to see locals trading fresh produce, spices, and household goods. 
                    The vibrant colors and aromatic scents create an authentic sensory experience.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Look for handcrafted souvenirs made by local artisans, including traditional batik cloth, wooden 
                    carvings, and beaded jewelry. These make meaningful mementos of your visit while supporting the 
                    local economy.
                  </p>
                </RevealOnScroll>
              </div>
              
              <div className="relative h-[400px] order-1 md:order-2">
                <RevealOnScroll direction="left">
                  <motion.div
                    className="h-full rounded-lg overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="/lovable-uploads/3511c3b2-9684-4923-b1c0-eb6d5a6e0b6c.png"
                      alt="Village market"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </RevealOnScroll>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px]">
                <RevealOnScroll direction="right">
                  <motion.div
                    className="h-full rounded-lg overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="/lovable-uploads/864534a5-ba06-42ec-864e-742bf9904a8a.png"
                      alt="Village cultural experience"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </RevealOnScroll>
              </div>
              
              <div className="space-y-6">
                <RevealOnScroll direction="left">
                  <h3 className="text-3xl font-serif text-jungle-800">Cultural Exchange</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Strike up conversations with locals to learn about their lives and perspectives. Many villagers 
                    are happy to share stories about the area's history, traditions, and their personal experiences with 
                    the rainforest and its wildlife.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    For those interested in deeper cultural immersion, some families offer homestay experiences where 
                    you can participate in daily activities, learn to cook traditional dishes, and gain insight into 
                    authentic Sumatran village life.
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Responsible Tourism Tips */}
      <section className="bg-jungle-50 py-20">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Being a Responsible Visitor"
              subtitle="Help preserve the culture and environment of Bukit Lawang"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealOnScroll>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-serif text-xl text-jungle-800 mb-4">Cultural Respect</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Dress modestly, especially when visiting homes or community areas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Always ask permission before taking photos of local people.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Learn a few basic Indonesian phrases—even simple greetings are greatly appreciated.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Support local businesses rather than large outside companies.</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-serif text-xl text-jungle-800 mb-4">Environmental Awareness</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Avoid single-use plastics—bring a reusable water bottle and shopping bag.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Use biodegradable soaps and shampoos when bathing in the river.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Pack out all non-biodegradable waste from treks and village visits.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                    <span>Choose eco-friendly accommodations that practice responsible waste management.</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/3511c3b2-9684-4923-b1c0-eb6d5a6e0b6c.png"
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
              Experience Authentic Village Life
            </motion.h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a 
                href="/accommodations"
                className="btn-primary"
                whileHover={{ scale: 1.05, backgroundColor: '#276604' }}
                whileTap={{ scale: 0.95 }}
              >
                Find Places to Stay
              </motion.a>
              <motion.a 
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Plan Your Visit
              </motion.a>
            </div>
          </RevealOnScroll>
        </div>
      </ParallaxSection>
      
      <Footer />
    </div>
  );
};

export default VillageLifePage;
