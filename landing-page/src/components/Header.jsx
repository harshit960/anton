import React, { useState, useEffect } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import AntonLogo from './AntonLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [apiStatus, setApiStatus] = useState({ isOnline: false, loading: true });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('http://34.45.37.14:3000/api/message-listener/status');
        const data = await response.json();
        setApiStatus({ isOnline: data.isListening, loading: false });
      } catch (error) {
        console.error('Error checking API status:', error);
        setApiStatus({ isOnline: false, loading: false });
      }
    };
    
    checkApiStatus();
    // Check status every 60 seconds
    const interval = setInterval(checkApiStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`fixed w-full z-50 backdrop-blur-lg border-b transition-all duration-500 ${
      isScrolled ? 'border-gray-800/50 bg-black/90 py-3' : 'border-transparent bg-transparent py-6'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <AntonLogo className="w-10 h-10" />
            <span className="text-2xl font-medium text-white">Anton</span>
            <div className="flex items-center ml-2">
              <div className={`w-2 h-2 rounded-full ${apiStatus.loading ? 'bg-yellow-400' : apiStatus.isOnline ? 'bg-green-400' : 'bg-red-500'}`}></div>
              <span className="text-xs ml-1 text-gray-400">
                {apiStatus.loading ? 'Checking...' : apiStatus.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-14">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#tech-stack" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Tech Stack
            </a>
            {/* <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </a> */}
            <a 
                href="https://t.me/talkwithanton" 
                className="primary-button py-2.5 px-8 rounded-full flex items-center text-sm font-medium"
            >
              <FaTelegramPlane className="mr-2" />
              Open Telegram
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-gray-800/50 space-y-8 mt-3">
            <a 
              href="#features" 
              className="block py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#tech-stack" 
              className="block py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech Stack
            </a>
            <a 
              href="#" 
              className="block py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="https://t.me/talkwithanton" 
              className="inline-flex items-center primary-button py-3 px-8 rounded-full text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTelegramPlane className="mr-2" />
              Open Telegram
            </a>
            <div className="flex items-center py-2">
              <div className={`w-2 h-2 rounded-full ${apiStatus.loading ? 'bg-yellow-400' : apiStatus.isOnline ? 'bg-green-400' : 'bg-red-500'}`}></div>
              <span className="text-xs ml-1 text-gray-400">
                {apiStatus.loading ? 'Checking...' : apiStatus.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;