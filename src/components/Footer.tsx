
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jungle-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Bukit Lawang</h3>
            <p className="mb-4 text-gray-300">The gateway to North Sumatra's untamed rainforest.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/visitbukitlawang/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-jungle-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Bukit Lawang</Link></li>
              <li><Link to="/jungle-trekking" className="text-gray-300 hover:text-white transition-colors">Jungle Trekking</Link></li>
              <li><Link to="/village-life" className="text-gray-300 hover:text-white transition-colors">Village Life</Link></li>
              <li><Link to="/accommodations" className="text-gray-300 hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Bukit Lawang, North Sumatra, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <a href="mailto:info@visitbukitlawang.com" className="text-gray-300 hover:text-white transition-colors">info@visitbukitlawang.com</a>
              </li>
              <li className="mt-4">
                <a href="https://www.instagram.com/visitbukitlawang/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Instagram size={20} />
                  <span>@visitbukitlawang</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-jungle-800 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bukit Lawang Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
