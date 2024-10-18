import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Power Prediction</h3>
            <p className="text-gray-400 mb-4">Empowering you with intelligent energy insights.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                <li><a href="/#home" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="/#about" className="text-gray-400 hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="/#features" className="text-gray-400 hover:text-orange-400 transition-colors">Features</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Energy Street</p>
              <p>Power City, PC 12345</p>
              <p>Email: info@powerprediction.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Power Prediction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
