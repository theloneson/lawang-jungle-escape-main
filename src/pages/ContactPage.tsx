
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import RevealOnScroll from '@/components/RevealOnScroll';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Instagram, Calendar, Clock } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We will get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/lovable-uploads/be7ab9be-f8ba-47c7-bfed-ae35e684f046.png"
        height="70vh"
        overlayOpacity={0.5}
        className="flex items-center justify-center"
      >
        <div className="section-container text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Plan your Bukit Lawang adventure with personalized assistance
          </motion.p>
        </div>
      </ParallaxSection>
      
      {/* Contact Information Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Get in Touch"
              subtitle="We're here to help you plan your perfect jungle adventure"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <RevealOnScroll>
              <div className="space-y-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you're planning a trip to Bukit Lawang or have questions about our accommodations, 
                  jungle treks, or local attractions, our team is ready to assist you. We provide personalized 
                  recommendations based on your interests, budget, and time frame.
                </p>
                
                <div className="space-y-6">
                  <ContactInfoItem
                    icon={<Instagram className="h-5 w-5 text-jungle-600" />}
                    title="Instagram"
                    content={<a href="https://www.instagram.com/visitbukitlawang/" target="_blank" rel="noopener noreferrer" className="text-jungle-600 hover:underline">@visitbukitlawang</a>}
                    description="The fastest way to reach us - send us a DM"
                  />
                  
                  <ContactInfoItem
                    icon={<Mail className="h-5 w-5 text-jungle-600" />}
                    title="Email"
                    content={<a href="mailto:info@visitbukitlawang.com" className="text-jungle-600 hover:underline">info@visitbukitlawang.com</a>}
                    description="For detailed inquiries and booking requests"
                  />
                  
                  <ContactInfoItem
                    icon={<Phone className="h-5 w-5 text-jungle-600" />}
                    title="WhatsApp"
                    content="+62 812 6543 7890"
                    description="Available for calls and messages"
                  />
                  
                  <ContactInfoItem
                    icon={<Clock className="h-5 w-5 text-jungle-600" />}
                    title="Response Time"
                    content="Within 24 hours"
                    description="We aim to respond to all inquiries promptly"
                  />
                  
                  <ContactInfoItem
                    icon={<MapPin className="h-5 w-5 text-jungle-600" />}
                    title="Location"
                    content="Bukit Lawang Village, North Sumatra, Indonesia"
                    description="Located at the edge of Gunung Leuser National Park"
                  />
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="left">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-100">
                <h3 className="text-2xl font-serif text-jungle-800 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="What is your message about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-jungle-600 hover:bg-jungle-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Planning Section */}
      <section className="bg-jungle-50 py-20">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Plan Your Visit"
              subtitle="Tips and information to help you prepare for your trip"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <RevealOnScroll>
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-jungle-800">Getting to Bukit Lawang</h3>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h4 className="font-bold text-jungle-700 mb-2">From Medan (Closest Airport)</h4>
                    <p className="text-gray-700 mb-2">
                      Medan's Kualanamu International Airport is the main gateway to North Sumatra. 
                      From Medan to Bukit Lawang, you have several options:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                        <span><strong>Private Transfer:</strong> We can arrange door-to-door pickup (3-4 hours)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                        <span><strong>Public Transport:</strong> Buses depart from Pinang Baris terminal (4-5 hours)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-jungle-500 mr-3 mt-2"></span>
                        <span><strong>Shared Tourist Van:</strong> Available from certain hotels in Medan</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h4 className="font-bold text-jungle-700 mb-2">From Lake Toba or Other Destinations</h4>
                    <p className="text-gray-700">
                      If you're coming from other parts of Sumatra, we can help arrange transportation 
                      to Bukit Lawang. Contact us with your location and we'll provide specific guidance.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="left">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-jungle-800">When to Visit</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 mr-2 text-jungle-600" />
                      <h4 className="font-bold text-jungle-700">Dry Season (May to September)</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>Less rainfall, easier trekking conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>More predictable river conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>Peak tourist season</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 mr-2 text-jungle-600" />
                      <h4 className="font-bold text-jungle-700">Rainy Season (Oct to April)</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>Lush, vibrant jungle</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>Fewer tourists</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>Trails can be muddy, river levels higher</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md sm:col-span-2">
                    <h4 className="font-bold text-jungle-700 mb-2">Recommended Length of Stay</h4>
                    <p className="text-gray-700 mb-2">
                      We recommend at least 2-3 days to properly experience Bukit Lawang. This allows time for:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>A full-day jungle trek to see orangutans</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>Village exploration and relaxation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-jungle-500 mr-2 mt-1.5"></span>
                        <span>River activities or additional trekking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="section-container">
          <RevealOnScroll>
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Common questions about visiting Bukit Lawang"
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealOnScroll>
              <FAQItem 
                question="Do I need to book treks and accommodation in advance?"
                answer="During high season (May-September), we strongly recommend booking both accommodation and treks at least 1-2 months in advance. In low season, booking a few weeks ahead is usually sufficient."
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.1}>
              <FAQItem 
                question="What should I pack for a trip to Bukit Lawang?"
                answer="Essential items include lightweight, quick-dry clothing, insect repellent, sunscreen, a hat, comfortable hiking shoes with good grip, a refillable water bottle, and a small backpack for treks."
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <FAQItem 
                question="Is Bukit Lawang suitable for families with children?"
                answer="Yes, many families visit Bukit Lawang. We can arrange child-friendly treks and activities. For jungle trekking, we generally recommend children be at least 6 years old, but this depends on the child's stamina and interest."
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <FAQItem 
                question="What about malaria or other health concerns?"
                answer="While malaria risk is relatively low in Bukit Lawang, it's always wise to consult with a travel doctor before your trip. Bring mosquito repellent and consider taking malaria prophylaxis if recommended by your doctor."
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <FAQItem 
                question="Is there ATM access in Bukit Lawang?"
                answer="There are no reliable ATMs in Bukit Lawang itself. We recommend withdrawing cash in Medan before arrival, as most places in the village don't accept credit cards."
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.5}>
              <FAQItem 
                question="How likely am I to see orangutans during a trek?"
                answer="The chance of seeing orangutans during a trek is very high (over 95%), especially with our experienced guides who know their territories and habits. However, as these are wild animals in their natural habitat, sightings can never be guaranteed."
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <ParallaxSection 
        backgroundImage="/lovable-uploads/3511c3b2-9684-4923-b1c0-eb6d5a6e0b6c.png"
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
              Ready to Plan Your Adventure?
            </motion.h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Contact us now to start planning your unforgettable journey to Bukit Lawang
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a 
                href="https://www.instagram.com/visitbukitlawang/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: '#276604' }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} className="mr-2" />
                DM on Instagram
              </motion.a>
              <motion.a 
                href="mailto:info@visitbukitlawang.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} className="mr-2" />
                Send Email
              </motion.a>
            </div>
          </RevealOnScroll>
        </div>
      </ParallaxSection>
      
      <Footer />
    </div>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  description?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content, description }) => (
  <motion.div 
    className="flex items-start"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="mt-1 mr-4">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-medium text-gray-900">{title}</h4>
      <div className="font-medium">{content}</div>
      {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
    </div>
  </motion.div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <h4 className="text-lg font-serif text-jungle-800 mb-2">{question}</h4>
    <p className="text-gray-700">{answer}</p>
  </motion.div>
);

export default ContactPage;
