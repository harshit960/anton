import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { motion } from 'framer-motion';

const CTA = () => {
  console.log("CTA component rendering"); // Debug log
// 
  // Simplified animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-spacing relative overflow-hidden " id="cta-section">
      {/* Decorative SVG elements specific to CTA */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="cta-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          
          {/* Unique decorative elements for CTA section */}
          <motion.g 
            opacity="0.2" 
            filter="url(#cta-glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Curved accent lines */}
            <motion.path 
              d="M-50,30 Q100,60 300,30" 
              stroke="url(#line-gradient)" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            />
            <motion.path 
              d="M-50,130 Q200,160 300,130" 
              stroke="url(#line-gradient)" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            />
            
            {/* Circular elements */}
            <circle cx="10%" cy="20%" r="5" fill="rgba(59, 130, 246, 0.2)" />
            <circle cx="90%" cy="60%" r="3" fill="rgba(59, 130, 246, 0.2)" />
            <circle cx="80%" cy="20%" r="4" fill="rgba(99, 102, 241, 0.2)" />
            <circle cx="20%" cy="80%" r="6" fill="rgba(139, 92, 246, 0.2)" />
            
            {/* Subtle pulse circles - animated with CSS */}
            <circle className="pulse-circle" cx="75%" cy="75%" r="40" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" fill="none" />
            <circle className="pulse-circle delay-1" cx="25%" cy="30%" r="30" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" fill="none" />
          </motion.g>
          
          {/* Tech themed decorative elements */}
          <g opacity="0.15">
            {/* Circuit patterns */}
            <path d="M10,10 L50,10 L50,50 L90,50 L90,90" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="0.5" fill="none" strokeDasharray="1,3" />
            <path d="M100,100 L140,100 L140,60 L180,60 L180,20" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="0.5" fill="none" strokeDasharray="1,3" />
            
            {/* Connection nodes */}
            <circle cx="10" cy="10" r="2" fill="rgba(99, 102, 241, 0.3)" />
            <circle cx="50" cy="10" r="1" fill="rgba(99, 102, 241, 0.3)" />
            <circle cx="50" cy="50" r="1" fill="rgba(99, 102, 241, 0.3)" />
            <circle cx="90" cy="50" r="1" fill="rgba(99, 102, 241, 0.3)" />
            <circle cx="90" cy="90" r="2" fill="rgba(99, 102, 241, 0.3)" />
            
            <circle cx="100" cy="100" r="2" fill="rgba(99, 102, 241, 0.3)" />
            <circle cx="140" cy="100" r="1" fill="rgba(99, 102, 241, 0.3)" />
            <circle cx="140" cy="60" r="1" fill="rgba(99, 102, 241, 0.3)" />
            <circle cx="180" cy="60" r="1" fill="rgba(99, 102, 241, 0.3)" />
            <circle cx="180" cy="20" r="2" fill="rgba(99, 102, 241, 0.3)" />
          </g>
        </svg>
      </div>
      
      {/* Subtle glow effects */}
      <div className="absolute -bottom-40 left-20 w-[500px] h-[500px] rounded-full bg-blue-600/3 blur-[120px]"></div>
      <div className="absolute -top-40 right-20 w-[400px] h-[400px] rounded-full bg-purple-600/3 blur-[120px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="backdrop-blur-lg bg-[#0A0A14]/40 p-12 sm:p-16 md:p-20 lg:p-24 rounded-3xl max-w-none mx-auto relative overflow-hidden border border-[#222244]/20 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-3xl"></div>
          
          <div className="relative text-center max-w-5xl mx-auto">
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <span className="inline-block px-4 py-1.5 text-sm font-medium text-white/90 bg-blue-500/20 backdrop-blur-sm rounded-full">
                  <span className="mr-1.5 inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  Available on Telegram
                </span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 text-white leading-tight">
                Experience Advanced<br className="hidden sm:block" /> Conversational AI Today
              </h2>
            </motion.div>
            
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-10 sm:mb-14">
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Anton combines RAG technology, vector databases, and fine-tuned models to deliver context-aware conversations with a uniquely evolving personality.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href="https://t.me/talkwithanton" 
                className="primary-button inline-flex items-center text-white py-4 sm:py-5 px-8 sm:px-12 rounded-full text-lg font-medium shadow-lg w-full sm:w-auto justify-center"
              >
                <FaTelegramPlane className="mr-3 text-xl" />
                Chat with Anton on Telegram
              </a>
              
              <a 
                href="#tech-stack" 
                className="inline-flex items-center text-white/90 py-4 px-6 rounded-full text-lg font-medium hover:text-white transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                View Technology Stack
                <IoChevronForward className="ml-2" />
              </a>
            </motion.div>
            
            {/* Testimonial line */}
            <motion.div 
              variants={fadeInUp} 
              transition={{ duration: 0.8 }}
              className="mt-16 sm:mt-20 p-4 sm:p-8 rounded-2xl bg-[#0A0A14]/60 backdrop-blur-md border border-gray-800/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              {/* <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-8 space-y-6 md:space-y-0">
                <div className="flex -space-x-4">
                  <img className="w-14 h-14 rounded-full border-2 border-[#222244]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" alt="User" />
                  <img className="w-14 h-14 rounded-full border-2 border-[#222244]" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" alt="User" />
                  <img className="w-14 h-14 rounded-full border-2 border-[#222244]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" alt="User" />
                </div>
                <div className="max-w-md md:text-left text-center">
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 font-light italic">
                    "Anton's Hinglish support and context awareness make it feel like chatting with a friend who actually remembers our conversations."
                  </p>
                  <p className="text-gray-500 text-sm mt-2">— Rahul D., Software Developer</p>
                </div>
              </div> */}
              
              {/* Developer Note */}
              <div className=" px-5 py-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-800/30 backdrop-blur-sm max-w-lg mx-auto">
                <div className="flex items-center space-x-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-400 font-medium text-sm">Developer Note</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed text-center">
                  This project is under active development and is in initial stage. 
                  There may be lots of inconsistencies and bugs. 
                  It will be soon released as open source for contribution.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Add animations for pulse circles */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }
        .pulse-circle {
          animation: pulse 4s infinite;
        }
        .delay-1 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CTA;