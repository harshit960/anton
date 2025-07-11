import React from 'react';
import AntonLogo from './AntonLogo';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-28 bg-black border-t border-gray-800/30 relative overflow-hidden">
      {/* Background grid with mask */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(20,20,20,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>
      
      {/* Background gradients */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-3 blur-3xl"></div>
      <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-purple-500 opacity-3 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top section with logo and nav */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
            <div className="flex items-center space-x-3 mb-10 md:mb-0">
              <AntonLogo className="w-12 h-12" />
              <span className="text-2xl font-medium text-white">
                Anton
              </span>
            </div>
            
            <nav className="flex flex-wrap gap-x-12 gap-y-4">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                Features
              </a>
              <a href="#tech-stack" className="text-gray-400 hover:text-white transition-colors text-sm">
                Tech Stack
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </a> */}
            </nav>
          </div>
          
          {/* Bottom section with socials and copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800/30">
            <div className="flex items-center space-x-8 mb-8 md:mb-0">
              <a href="https://github.com/Dark-Blue-Screen-of-Death/Anton" className="text-gray-400 hover:text-white transition">
                <FaGithub className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="w-5 h-5" />
              </a> */}
              <a href="https://www.linkedin.com/in/harshit-raj-805630247/" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
{/*             
            <div className="text-gray-500 text-sm mb-8 md:mb-0">
              © {new Date().getFullYear()} Anton AI. All rights reserved.
            </div> */}
            
            <div className="hidden md:block text-sm text-gray-500">
              Made with <span className="text-red-500">❤️</span> by Harshit and Somesh.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;