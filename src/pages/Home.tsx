
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CinematicHero from '@/components/CinematicHero';
import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard';
import GalleryImage from '@/components/GalleryImage';
import RevealOnScroll from '@/components/RevealOnScroll';
import ParallaxSection from '@/components/ParallaxSection';
import { Instagram, MapPin, Compass, TreePalm, Star, Heart, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <CinematicHero
        backgroundImage="/lovable-uploads/be7ab9be-f8ba-47c7-bfed-ae35e684f046.png"
        title="Welcome to Bukit Lawang"
        subtitle="The gateway to North Sumatra's untamed rainforest."
        ctaLabel="Plan Your Visit"
        ctaUrl="#about"
      />
      
      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Discover Bukit Lawang"
              subtitle="Where adventure meets nature"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <RevealOnScroll>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nestled on the edge of Gunung Leuser National Park, Bukit Lawang is a hidden gem for eco-tourists, 
                  nature lovers, and travelers seeking a genuine escape. Cross the iconic suspension bridge into a 
                  village surrounded by mountains, rivers, and lush rainforest.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Home to one of the last populations of wild orangutans, Bukit Lawang offers an unforgettable experience — 
                  serene, sustainable, and full of life.
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
                    <span>Pristine Rainforest</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>North Sumatra</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Compass className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Gunung Leuser Park</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Heart className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Orangutan Sanctuary</span>
                  </motion.div>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.6}>
                <Link to="/about">
                  <motion.button 
                    className="mt-6 bg-jungle-600 text-white px-6 py-2 rounded-md hover:bg-jungle-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </RevealOnScroll>
            </div>
            
            <div className="relative h-[600px]">
              <RevealOnScroll direction="left" delay={0.2}>
                <motion.div
                  className="absolute w-2/3 h-72 top-0 left-0 z-10"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/lovable-uploads/f3a68e98-b1ba-440e-a491-cb5522fcf27b.png"
                    alt="Bukit Lawang bridge view"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
              </RevealOnScroll>
              
              <RevealOnScroll direction="left" delay={0.4}>
                <motion.div
                  className="absolute w-2/3 h-72 bottom-0 right-0 z-20"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/lovable-uploads/1df1bdf0-aa89-4b64-aa1a-7e39e4d3a519.png"
                    alt="Jungle path"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
              </RevealOnScroll>
              
              <RevealOnScroll direction="up" delay={0.6}>
                <motion.div
                  className="absolute w-1/2 h-64 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/lovable-uploads/3be12498-daa9-4b7e-9082-bf393dcb8dd3.png"
                    alt="Gunung Leuser National Park entrance"
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Jungle Trekking Section */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/aab1cf9c-45da-424c-9fb8-e91428667c86.png"
        height="auto"
        overlayOpacity={0.4}
        className="py-32"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Trek the Jungle. Meet the Wild."
              subtitle="Experience one of the few places on Earth to see orangutans in their natural habitat"
              light
            />
          </RevealOnScroll>
          
          <div className="my-16">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/3">
                  <RevealOnScroll>
                    <ExperienceCard
                      image="/lovable-uploads/aab1cf9c-45da-424c-9fb8-e91428667c86.png"
                      title="Orangutan Encounters"
                      description="Come face-to-face with one of our closest relatives in their natural habitat. Our experienced guides know the best spots to respectfully observe these incredible creatures."
                    />
                  </RevealOnScroll>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <RevealOnScroll delay={0.2}>
                    <ExperienceCard
                      image="/lovable-uploads/4af2d920-d6f0-4f5f-9513-7a9bbcd2584d.png"
                      title="Jungle Adventures"
                      description="Join experienced local guides for half-day, full-day, or multi-day jungle treks. Camp by the river, sleep under the stars, and encounter exotic wildlife."
                    />
                  </RevealOnScroll>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <RevealOnScroll delay={0.4}>
                    <ExperienceCard
                      image="/lovable-uploads/72ffe907-3a85-4acc-b0b6-e8e989961516.png"
                      title="River Experiences"
                      description="Cool off in pristine natural waters, tube down the river, or simply relax on the banks and take in the jungle soundscape."
                    />
                  </RevealOnScroll>
                </CarouselItem>
              </CarouselContent>
              <div className="hidden md:flex justify-end gap-2 mt-4">
                <CarouselPrevious className="relative -translate-y-0 left-0 right-auto" />
                <CarouselNext className="relative -translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
          
          <RevealOnScroll className="mt-12 text-center">
            <p className="mb-6 text-lg text-white max-w-3xl mx-auto">
              Bukit Lawang is one of the few places in the world where you can see orangutans in their natural habitat. 
              Our guides are local experts who prioritize the well-being of the wildlife and forest.
            </p>
            <Link to="/jungle-trekking">
              <motion.button 
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05, backgroundColor: '#276604' }}
                whileTap={{ scale: 0.95 }}
              >
                Arrange Your Trek
              </motion.button>
            </Link>
          </RevealOnScroll>
        </div>
      </ParallaxSection>
      
      {/* Village Life Section */}
      <section id="village-life" className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img 
            src="/lovable-uploads/864534a5-ba06-42ec-864e-742bf9904a8a.png"
            alt="Bukit Lawang village"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        
        <div className="section-container relative z-10">
          <RevealOnScroll>
            <SectionTitle
              title="Step Into the Heart of the Village"
              subtitle="Life in Bukit Lawang moves to the rhythm of the river"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/lovable-uploads/3511c3b2-9684-4923-b1c0-eb6d5a6e0b6c.png"
                  alt="Suspension bridge in Bukit Lawang"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </RevealOnScroll>
            
            <div className="space-y-8">
              <RevealOnScroll direction="left">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Walk across the hanging bridge into a community rich in tradition and warmth. Chat with locals, 
                  enjoy fresh Sumatran food, and relax in riverside cafés surrounded by jungle sounds.
                </p>
              </RevealOnScroll>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <RevealOnScroll delay={0.2} direction="up">
                  <motion.div 
                    className="bg-white p-5 rounded-lg shadow-lg"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <h4 className="font-serif text-xl mb-2 text-jungle-800">Local Cuisine</h4>
                    <p className="text-gray-600">Taste authentic Sumatran dishes prepared with fresh local ingredients</p>
                  </motion.div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={0.3} direction="up">
                  <motion.div 
                    className="bg-white p-5 rounded-lg shadow-lg"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <h4 className="font-serif text-xl mb-2 text-jungle-800">Cultural Exchange</h4>
                    <p className="text-gray-600">Experience the unique blend of traditions that shape village life</p>
                  </motion.div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={0.4} direction="up">
                  <motion.div 
                    className="bg-white p-5 rounded-lg shadow-lg"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <h4 className="font-serif text-xl mb-2 text-jungle-800">Riverside Relaxation</h4>
                    <p className="text-gray-600">Unwind in cafés with spectacular views of the flowing river</p>
                  </motion.div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={0.5} direction="up">
                  <motion.div 
                    className="bg-white p-5 rounded-lg shadow-lg"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <h4 className="font-serif text-xl mb-2 text-jungle-800">Local Crafts</h4>
                    <p className="text-gray-600">Discover handmade souvenirs created by talented local artisans</p>
                  </motion.div>
                </RevealOnScroll>
              </div>
              
              <RevealOnScroll delay={0.6} direction="up">
                <Link to="/village-life">
                  <motion.button 
                    className="mt-6 bg-jungle-600 text-white px-6 py-2 rounded-md hover:bg-jungle-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discover Village Life
                  </motion.button>
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accommodations Section with Parallax */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/105cb896-9614-4680-9d87-dba81a3c0f0d.png"
        className="py-32"
        overlayOpacity={0.5}
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Where to Stay"
              subtitle="From riverside resorts to cozy jungle cottages"
              light
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <RevealOnScroll direction="right">
              <motion.div 
                className="bg-white/90 backdrop-blur-md rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="h-64 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/lovable-uploads/223e56b1-4020-42da-af48-1f0f113847b7.png" 
                    alt="Jungle River House" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-jungle-800">Jungle River House</h3>
                    <div className="flex text-amber-500">
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Authentic cottage-style accommodations surrounded by lush gardens and just steps from the riverbank.
                  </p>
                  <div className="flex justify-between items-center">
                    <a 
                      href="https://www.instagram.com/jungleriverhouse/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-jungle-600 hover:text-jungle-800 transition-colors"
                    >
                      <Instagram size={18} className="mr-2" />
                      @jungleriverhouse
                    </a>
                    <Button variant="outline" className="border-jungle-600 text-jungle-600 hover:bg-jungle-600 hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="left" delay={0.2}>
              <motion.div 
                className="bg-white/90 backdrop-blur-md rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="h-64 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/lovable-uploads/105cb896-9614-4680-9d87-dba81a3c0f0d.png" 
                    alt="Jungle River Resort" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-jungle-800">Jungle River Resort</h3>
                    <div className="flex text-amber-500">
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Premium eco-friendly accommodations with stunning views of the river and surrounding jungle landscape.
                  </p>
                  <div className="flex justify-between items-center">
                    <a 
                      href="https://www.instagram.com/jungleriverressort/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-jungle-600 hover:text-jungle-800 transition-colors"
                    >
                      <Instagram size={18} className="mr-2" />
                      @jungleriverressort
                    </a>
                    <Button variant="outline" className="border-jungle-600 text-jungle-600 hover:bg-jungle-600 hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll className="text-center">
            <p className="text-lg text-white max-w-3xl mx-auto mb-6">
              From budget-friendly guesthouses to luxury eco-resorts, Bukit Lawang offers accommodations for every 
              type of traveler. All lodgings are designed to complement the natural beauty of the surroundings.
            </p>
            <Link to="/accommodations">
              <motion.button 
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05, backgroundColor: '#276604' }}
                whileTap={{ scale: 0.95 }}
              >
                Find Your Perfect Stay
              </motion.button>
            </Link>
          </RevealOnScroll>
        </div>
      </ParallaxSection>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Experience Bukit Lawang"
              subtitle="Through the eyes of travelers"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            <RevealOnScroll delay={0.1}>
              <GalleryImage 
                src="/lovable-uploads/dcc40d72-1da2-4b93-9de0-44780de07251.png" 
                alt="Orangutan in the wild"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <GalleryImage 
                src="/lovable-uploads/13d2b914-81f0-40f6-9b10-3a3dec1f1d84.png" 
                alt="Young orangutan on a branch"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <GalleryImage 
                src="/lovable-uploads/1334a463-67c5-4f7b-9b96-09c719397be7.png" 
                alt="Ancient stone steps in jungle"
                className="hidden sm:block"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <GalleryImage 
                src="/lovable-uploads/41025d55-bac5-40dd-b988-7a6bf166d07a.png" 
                alt="River and jungle landscape"
                className="hidden md:block"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.5} className="col-span-2">
              <GalleryImage 
                src="/lovable-uploads/3511c3b2-9684-4923-b1c0-eb6d5a6e0b6c.png" 
                alt="Suspension bridge over village"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.6} className="col-span-2">
              <GalleryImage 
                src="/lovable-uploads/1df1bdf0-aa89-4b64-aa1a-7e39e4d3a519.png" 
                alt="Jungle path between rock formations"
              />
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll delay={0.7} className="mt-10 text-center">
            <Link to="/gallery">
              <motion.button
                className="mt-6 bg-jungle-600 text-white px-6 py-2 rounded-md hover:bg-jungle-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Full Gallery
              </motion.button>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-jungle-800 text-white py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Ready to Visit Bukit Lawang?"
              subtitle="Book your stay, arrange jungle treks, or ask any questions directly via our Instagram"
              light
            />
          </RevealOnScroll>
          
          <div className="flex flex-col items-center justify-center">
            <RevealOnScroll className="w-full max-w-3xl">
              <motion.div 
                className="bg-white text-jungle-900 p-8 rounded-lg shadow-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif mb-2">Contact Us</h3>
                  <p className="text-gray-600">Our local team is ready to help you plan your perfect trip</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-serif mb-3 text-jungle-700">Stay Options</h4>
                      <div className="space-y-3">
                        <motion.a 
                          href="https://www.instagram.com/jungleriverhouse/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-jungle-600 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Instagram size={18} className="mr-2" />
                          @jungleriverhouse
                        </motion.a>
                        <motion.a 
                          href="https://www.instagram.com/jungleriverressort/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-jungle-600 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Instagram size={18} className="mr-2" />
                          @jungleriverressort
                        </motion.a>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-serif mb-3 text-jungle-700">Follow Us</h4>
                      <motion.a 
                        href="https://www.instagram.com/visitbukitlawang/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-jungle-600 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Instagram size={18} className="mr-2" />
                        @visitbukitlawang
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      For inquiries about treks, accommodations, or general information, 
                      please contact us directly via Instagram or email.
                    </p>
                    <motion.a 
                      href="https://www.instagram.com/visitbukitlawang/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center flex justify-center items-center gap-2"
                      whileHover={{ scale: 1.02, backgroundColor: '#276604' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Instagram size={18} />
                      Contact Us on Instagram
                    </motion.a>
                    <Link to="/contact">
                      <motion.button
                        className="block text-center w-full py-3 px-6 border border-jungle-600 text-jungle-600 rounded-md hover:bg-jungle-50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Contact Page
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
