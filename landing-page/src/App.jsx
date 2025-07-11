import React, { useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import TechStack from './components/TechStack'
import TechIcons from './components/TechIcons'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scroll = new LocomotiveScroll()

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enable smooth scrolling
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-['SF_Pro_Display',-apple-system,BlinkMacSystemFont,sans-serif] relative">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Subtle dark background with spots */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Main dark background */}
        <div className="absolute inset-0 bg-[#040408]"></div>
        
        {/* Brighter spots of color */}
        <motion.div 
          className="absolute top-[15%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[120px]"
          animate={{ 
            opacity: [0.9, 0.9, 0.9],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] rounded-full bg-purple-700/10 blur-[100px]"
          animate={{ 
            opacity: [0.9, 0.9, 0.9],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-[60%] left-[40%] w-[300px] h-[300px] rounded-full bg-indigo-700/8 blur-[150px]"
          animate={{ 
            opacity: [0.9, 0.9, 0.9],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        ></motion.div>
      </div>

      {/* Enhanced animated particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="particles-container">
          <div className="particles"></div>
          <div className="particles particles2"></div>
        </div>
      </div>

      {/* Main grid backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="main-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(86, 91, 152, 0.08)" strokeWidth="1" />
            </pattern>
            <linearGradient id="grid-fade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(50, 84, 195, 0.04)" />
              <stop offset="50%" stopColor="rgba(104, 78, 183, 0.04)" />
              <stop offset="100%" stopColor="rgba(159, 88, 226, 0.04)" />
            </linearGradient>
            <radialGradient id="spotlight" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(125, 125, 255, 0.03)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
            
            {/* Circle pattern */}
            <pattern id="circle-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="rgba(147, 197, 253, 0.10)" />
              <circle cx="25" cy="25" r="0.5" fill="rgba(165, 180, 252, 0.10)" />
              <circle cx="75" cy="75" r="0.5" fill="rgba(196, 181, 253, 0.10)" />
              <circle cx="25" cy="75" r="0.5" fill="rgba(216, 180, 254, 0.10)" />
              <circle cx="75" cy="25" r="0.5" fill="rgba(240, 171, 252, 0.10)" />
            </pattern>
            
            {/* Hexagon mask for gradients */}
            <mask id="hex-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-fade)" />
            </mask>
          </defs>
          
          {/* Base grid layer */}
          <rect x="0" y="0" width="100%" height="100%" fill="url(#main-grid)" mask="url(#hex-mask)" />
          
          {/* Dot pattern overlay */}
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circle-pattern)" opacity="0.5" />
        </svg>
      </div>
      
      {/* Enhanced glow effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="enhanced-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Key areas with brighter glow */}
          <g opacity="0.15" filter="url(#enhanced-glow)">
            {/* Top right area */}
            <circle cx="80%" cy="20%" r="4" fill="rgba(125, 125, 255, 0.7)" />
            <circle cx="78%" cy="22%" r="3" fill="rgba(125, 125, 255, 0.5)" />
            <circle cx="82%" cy="18%" r="3" fill="rgba(125, 125, 255, 0.5)" />
            
            {/* Bottom left area */}
            <circle cx="20%" cy="80%" r="4" fill="rgba(139, 92, 246, 0.7)" />
            <circle cx="22%" cy="82%" r="3" fill="rgba(139, 92, 246, 0.5)" />
            <circle cx="18%" cy="78%" r="3" fill="rgba(139, 92, 246, 0.5)" />
            
            {/* Center area */}
            <circle cx="50%" cy="50%" r="4" fill="rgba(79, 70, 229, 0.7)" />
            <circle cx="48%" cy="52%" r="3" fill="rgba(79, 70, 229, 0.5)" />
            <circle cx="52%" cy="48%" r="3" fill="rgba(79, 70, 229, 0.5)" />
          </g>
          
          {/* Enhanced accent lines */}
          <g opacity="0.2">
            <path 
              d="M100,50 C150,80 200,70 250,50" 
              stroke="rgba(96, 49, 169, 0.8)" 
              strokeWidth="0.7" 
              fill="none"
            />
            <path 
              d="M50,150 C70,180 90,170 110,150" 
              stroke="rgba(50, 78, 158, 0.8)" 
              strokeWidth="0.7" 
              fill="none"
            />
            <path 
              d="M400,100 C350,130 300,120 250,100" 
              stroke="rgba(80, 66, 189, 0.8)" 
              strokeWidth="0.7" 
              fill="none"
            />
          </g>
        </svg>
      </div>
      
      {/* Enhanced animated blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-700/5 blur-[150px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-700/5 blur-[150px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-80 h-80 rounded-full bg-indigo-700/5 blur-[150px] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Diagonal noise texture overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0 mix-blend-soft-light" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')" }}></div>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-10px, 10px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 35s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Enhanced particle animation */
        .particles-container {
          position: absolute;
          inset: 0;
          perspective: 1200px;
          z-index: 1;
        }
        
        .particles, .particles2 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          transform-style: preserve-3d;
          perspective: 1000px;
          animation: particles 60s linear infinite;
        }
        
        .particles2 {
          animation-delay: -30s;
        }
        
        .particles {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(125, 125, 255, 0.25), rgba(0, 0, 255, 0)),
            radial-gradient(2px 2px at 40px 70px, rgba(124, 58, 237, 0.25), rgba(0, 0, 255, 0)),
            radial-gradient(2px 2px at 50px 160px, rgba(139, 92, 246, 0.25), rgba(0, 0, 255, 0)),
            radial-gradient(2px 2px at 90px 40px, rgba(99, 102, 241, 0.25), rgba(0, 0, 255, 0)),
            radial-gradient(2px 2px at 130px 80px, rgba(79, 70, 229, 0.25), rgba(0, 0, 255, 0)),
            radial-gradient(2px 2px at 160px 120px, rgba(67, 56, 202, 0.25), rgba(0, 0, 255, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }
        
        .particles2 {
          background-image: 
            radial-gradient(2px 2px at 30px 40px, rgba(165, 85, 236, 0.25), rgba(0, 0, 255, 0)),
            radial-gradient(2px 2px at 70px 90px, rgba(139, 92, 246, 0.25), rgba(0, 0, 255, 0)),
            radial-gradient(2px 2px at 110px 130px, rgba(124, 58, 237, 0.25), rgba(0, 0, 255, 0));
          background-size: 300px 300px;
        }
        
        @keyframes particles {
          0% {
            transform: rotateX(0deg) rotateY(0deg) translateZ(-400px);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) translateZ(-400px);
          }
        }
      `}</style>
      
      <div className="relative z-10">
        <Header />
        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <Features />
            <TechStack />
            <TechIcons />
            <CTA />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  )
}

export default App
