
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import RevealOnScroll from '@/components/RevealOnScroll';
import ParallaxSection from '@/components/ParallaxSection';
import { Card, CardContent } from '@/components/ui/card';
import { Hotel, Bed, Key, Star, Instagram, Wifi, UtilityPole, ShowerHead } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AccommodationsPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/105cb896-9614-4680-9d87-dba81a3c0f0d.png"
        height="80vh"
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
            Where to Stay
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From jungle eco-resorts to riverside cottages
          </motion.p>
        </div>
      </ParallaxSection>
      
      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Accommodations in Bukit Lawang"
              subtitle="Rest peacefully surrounded by the sounds of nature"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <RevealOnScroll>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Bukit Lawang offers a range of places to stay that cater to all preferences and budgets. From basic 
                  guesthouses to more luxurious eco-resorts, what they all share is their wonderful riverside locations 
                  and the soothing sounds of the jungle.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Most accommodations are family-run and built in harmony with the natural environment, using local materials 
                  and traditional building techniques. Many feature open-air common areas where you can relax, meet other 
                  travelers, and enjoy views of the river and forest.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.5}>
                <div className="flex flex-wrap gap-6">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Hotel className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Eco-friendly Resorts</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bed className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Riverside Guesthouses</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: '#3D9407' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Key className="h-5 w-5 mr-2 text-jungle-600" />
                    <span>Private Bungalows</span>
                  </motion.div>
                </div>
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
                    src="/lovable-uploads/223e56b1-4020-42da-af48-1f0f113847b7.png"
                    alt="Rainforest lodge"
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
                    src="/lovable-uploads/105cb896-9614-4680-9d87-dba81a3c0f0d.png"
                    alt="Riverside resort"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Accommodations */}
      <section className="bg-jungle-50 py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Featured Places to Stay"
              subtitle="Experience comfort in the heart of the rainforest"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealOnScroll delay={0.1}>
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-xl h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-56 overflow-hidden">
                  <motion.img 
                    src="/lovable-uploads/223e56b1-4020-42da-af48-1f0f113847b7.png" 
                    alt="Jungle River House" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
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
                    Traditional wooden cottages situated on lush tropical grounds just steps from the riverbank. 
                    Each unit features a private bathroom, mosquito nets, and a terrace with jungle views.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <Wifi size={14} className="mr-1" /> Free WiFi
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <UtilityPole size={14} className="mr-1" /> 24/7 Electricity
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <ShowerHead size={14} className="mr-1" /> Hot Water
                    </span>
                  </div>
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
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-xl h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-56 overflow-hidden">
                  <motion.img 
                    src="/lovable-uploads/105cb896-9614-4680-9d87-dba81a3c0f0d.png" 
                    alt="Jungle River Resort" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
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
                    Premium eco-friendly accommodations with stunning river views. Features spacious rooms, 
                    private balconies, restaurant service, and a tranquil garden space to unwind after trekking.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <Wifi size={14} className="mr-1" /> Fast WiFi
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <UtilityPole size={14} className="mr-1" /> Backup Generator
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <ShowerHead size={14} className="mr-1" /> Hot Showers
                    </span>
                  </div>
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
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.5}>
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-xl h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-56 overflow-hidden">
                  <motion.img 
                    src="/lovable-uploads/41025d55-bac5-40dd-b988-7a6bf166d07a.png" 
                    alt="Rainforest Haven" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-jungle-800">Rainforest Haven</h3>
                    <div className="flex text-amber-500">
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cozy guesthouse nestled within walking distance of the national park entrance. 
                    Offers comfortable rooms, home-cooked meals, and a friendly atmosphere perfect for solo travelers.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <Wifi size={14} className="mr-1" /> Basic WiFi
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <UtilityPole size={14} className="mr-1" /> Electricity
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-jungle-100 text-jungle-800 text-sm rounded">
                      <ShowerHead size={14} className="mr-1" /> Private Bathroom
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <a 
                      href="https://www.instagram.com/rainforesthaven/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-jungle-600 hover:text-jungle-800 transition-colors"
                    >
                      <Instagram size={18} className="mr-2" />
                      @rainforesthaven
                    </a>
                    <Button variant="outline" className="border-jungle-600 text-jungle-600 hover:bg-jungle-600 hover:text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Accommodation Types */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Types of Accommodation"
              subtitle="Find the perfect match for your style and budget"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <RevealOnScroll>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <Hotel className="h-6 w-6 mr-3 text-jungle-600" />
                      <h3 className="text-2xl font-serif text-jungle-800">Eco-Resorts</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Higher-end options featuring spacious rooms with private bathrooms, hot water, reliable 
                      electricity, and WiFi. Many have on-site restaurants, organized activities, and can 
                      arrange jungle treks.
                    </p>
                    <p className="text-gray-600 italic">
                      Best for: Travelers seeking comfort, families, and those who prefer more amenities
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <Bed className="h-6 w-6 mr-3 text-jungle-600" />
                      <h3 className="text-2xl font-serif text-jungle-800">Guesthouses</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Family-run accommodations offering clean, basic rooms with shared or private bathrooms. 
                      Many include breakfast and have communal areas perfect for meeting other travelers.
                    </p>
                    <p className="text-gray-600 italic">
                      Best for: Budget travelers, solo adventurers, and those seeking an authentic local experience
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <Key className="h-6 w-6 mr-3 text-jungle-600" />
                      <h3 className="text-2xl font-serif text-jungle-800">Private Bungalows</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Individual cottages or bungalows, often featuring private balconies with hammocks 
                      overlooking the river or jungle. These offer more privacy than standard guesthouses.
                    </p>
                    <p className="text-gray-600 italic">
                      Best for: Couples, small groups, and those seeking a balance of comfort and immersion
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            
            <RevealOnScroll direction="left">
              <div className="relative h-full min-h-[600px]">
                <motion.div
                  className="absolute w-3/4 h-2/3 top-0 right-0 rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/105cb896-9614-4680-9d87-dba81a3c0f0d.png"
                    alt="Luxury eco-resort"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute w-2/3 h-1/2 bottom-0 left-0 rounded-lg overflow-hidden shadow-xl z-10"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/223e56b1-4020-42da-af48-1f0f113847b7.png"
                    alt="Private bungalow"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Booking Information */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/41025d55-bac5-40dd-b988-7a6bf166d07a.png"
        height="auto"
        overlayOpacity={0.7}
        className="py-32"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Planning Your Stay"
              subtitle="Helpful information for booking accommodations"
              light
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealOnScroll>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-serif mb-4 text-white">When to Book</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-300 mr-3 mt-2"></span>
                    <span>
                      <strong>High Season (June-September):</strong> Book accommodations at least 1-2 months in advance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-300 mr-3 mt-2"></span>
                    <span>
                      <strong>Shoulder Season (March-May, October):</strong> Book 2-4 weeks in advance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-300 mr-3 mt-2"></span>
                    <span>
                      <strong>Low Season (November-February):</strong> Last-minute bookings are usually possible, 
                      but it's still advisable to book in advance for preferred accommodations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-300 mr-3 mt-2"></span>
                    <span>
                      <strong>Holidays & Long Weekends:</strong> Book well in advance as these are popular times 
                      for domestic tourists
                    </span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-serif mb-4 text-white">How to Book</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-300 mr-3 mt-2"></span>
                    <span>
                      <strong>Direct Contact:</strong> Many accommodations can be contacted directly via 
                      Instagram or email for the best rates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-300 mr-3 mt-2"></span>
                    <span>
                      <strong>Online Booking:</strong> Some larger properties are available on major booking platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-300 mr-3 mt-2"></span>
                    <span>
                      <strong>Package Deals:</strong> Many accommodations offer packages that include 
                      airport transfers, meals, and jungle treks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-jungle-300 mr-3 mt-2"></span>
                    <span>
                      <strong>Walk-ins:</strong> Possible during low season, but not recommended during 
                      high season or for specific preferences
                    </span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll delay={0.5}>
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-serif mb-4 text-white text-center">Accommodation Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-serif text-white">What to Expect</h4>
                  <p className="text-gray-200">
                    Accommodations in Bukit Lawang are built to blend with nature. Expect to hear wildlife, 
                    feel the jungle breeze, and possibly share your space with the occasional harmless creature.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-serif text-white">Electricity & Water</h4>
                  <p className="text-gray-200">
                    Power outages are occasional. Most places have backup generators but may run them only during 
                    certain hours. Water is sourced from natural springs and may not always be heated.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-serif text-white">Connectivity</h4>
                  <p className="text-gray-200">
                    WiFi can be unreliable due to the remote location. Mobile data works in most areas 
                    of the village but signal can be weak. Consider this an opportunity to disconnect.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </ParallaxSection>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="section-container">
          <RevealOnScroll>
            <div className="bg-jungle-50 border border-jungle-100 p-8 md:p-12 rounded-lg text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-jungle-800 mb-6">Ready to Book Your Stay?</h3>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
                Contact us directly to find the perfect accommodation for your Bukit Lawang adventure. 
                We can help match you with the ideal place based on your preferences, budget, and travel dates.
              </p>
              <motion.a 
                href="/contact"
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05, backgroundColor: '#276604' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us for Booking
              </motion.a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AccommodationsPage;
