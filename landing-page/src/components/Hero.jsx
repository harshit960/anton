import React, { useEffect } from 'react';
import { IoSend } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { motion } from 'framer-motion';
import DeviceMockup from '../assets/images/DeviceMockup';
import AbstractGradient from '../assets/images/AbstractGradient';

const Hero = () => {
  // Random lens flare positions
  const lensFlares = [
    { x: '15%', y: '20%', size: 120, color: 'from-blue-500/20 to-indigo-600/5', delay: 0 },
    { x: '80%', y: '15%', size: 150, color: 'from-purple-500/20 to-pink-600/5', delay: 3 },
    { x: '30%', y: '70%', size: 100, color: 'from-indigo-500/20 to-blue-600/5', delay: 6 },
    { x: '70%', y: '60%', size: 180, color: 'from-blue-500/20 to-cyan-600/5', delay: 9 },
    { x: '40%', y: '30%', size: 90, color: 'from-violet-500/20 to-purple-600/5', delay: 12 }
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Dark stock image background overlay with grainy texture */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')" }}>
        </div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-black opacity-70 mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')" }}>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-black/70 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-indigo-900/10"></div>
      
      {/* Animated lens flares */}
      {lensFlares.map((flare, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${flare.color} rounded-full opacity-0 blur-3xl pointer-events-none`}
          style={{ 
            left: flare.x, 
            top: flare.y, 
            width: flare.size, 
            height: flare.size 
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: flare.delay,
          }}
        />
      ))}
      
      {/* Subtle radial highlight */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      
      {/* Floating Elements - Apple-like abstract design */}
      <AbstractGradient className="absolute top-1/4 left-1/5 w-72 h-72 opacity-10" colorClass="from-blue-500 to-indigo-500" />
      <AbstractGradient className="absolute bottom-1/3 right-1/4 w-96 h-96 opacity-5" colorClass="from-purple-500 to-indigo-500" />
      <AbstractGradient className="absolute bottom-1/4 left-1/3 w-64 h-64 opacity-5" colorClass="from-cyan-500 to-blue-500" />
      
      {/* Light grid effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(148,163,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Moving stars/particles effect */}
      <div className="stars-container absolute inset-0 opacity-70">
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>
      
      <div className="container mx-auto relative z-10 py-36 md:py-44">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
          {/* Hero Text and CTA */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Meet Anton.<br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Advanced Conversational AI</span>
            </motion.h1>
            <motion.p 
              className="text-lg xl:text-xl text-gray-300 max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience natural, context-aware conversations with an AI assistant that evolves with every interaction. Available now on Telegram.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 w-full sm:w-auto justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="https://t.me/talkwithanton" 
                className="primary-button py-4 px-10 rounded-full shadow-lg flex items-center justify-center font-medium text-lg"
              >
                <FaTelegramPlane className="mr-3 text-xl" />
                Chat on Telegram
              </a>
              <a 
                href="#features" 
                className="secondary-button py-4 px-10 rounded-full shadow-lg flex items-center justify-center font-medium text-lg"
              >
                Learn More
                <MdChevronRight className="ml-1 text-xl" />
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 pt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="px-5 py-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-800/30 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-400 font-medium text-sm">Developer Note</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  This project is under active development and is in initial stage. 
                  There may be lots of inconsistencies and bugs. 
                  It will be soon released as open source for contribution.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Device Mockup */}
          <motion.div 
            className="w-full lg:w-6/12 flex justify-center lg:justify-end mt-20 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <DeviceMockup className="w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="h-[600px] bg-black">
                {/* Chat UI */}
                <div className="p-5 bg-black space-y-5">
                  {/* User info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      A
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Aanya</h3>
                      <p className="text-gray-400 text-sm">with Anton AI</p>
                    </div>
                  </div>
                  
                  {/* Chat messages */}
                  <div className="bg-[#0066CC] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] ml-auto">
                    <p className="text-white text-base">kya hi bakwaas din tha yaar😭</p>
                    <p className="text-blue-200 text-xs mt-1 text-right">11:25 AM</p>
                  </div>
                  
                  <div className="bg-[#1D1D1F] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                    <p className="text-gray-200 text-base">ab kya hua phir se</p>
                    <p className="text-gray-500 text-xs mt-1 text-right">11:25 AM</p>
                  </div>
                  
                  <div className="bg-[#0066CC] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] ml-auto">
                    <p className="text-white text-base">boss ne bola "let's sync" and I knew mera mood khatam</p>
                    <p className="text-blue-200 text-xs mt-1 text-right">11:26 AM</p>
                  </div>
                  
                  <div className="bg-[#1D1D1F] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                    <p className="text-gray-200 text-base">lol tu bhi na</p>
                    <p className="text-gray-500 text-xs mt-1 text-right">11:26 AM</p>
                  </div>
                  
                  <div className="bg-[#0066CC] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] ml-auto">
                    <p className="text-white text-base">arey sach mein… kal se HR banne ka plan hai</p>
                    <p className="text-blue-200 text-xs mt-1 text-right">11:27 AM</p>
                  </div>
                  
                  <div className="bg-[#1D1D1F] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                    <p className="text-gray-200 text-base">tu HR bani toh sab cry karenge</p>
                    <p className="text-gray-500 text-xs mt-1 text-right">11:27 AM</p>
                  </div>
                  
                  <div className="bg-[#0066CC] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] ml-auto">
                    <p className="text-white text-base">bas wahi toh goal hai</p>
                    <p className="text-blue-200 text-xs mt-1 text-right">11:28 AM</p>
                  </div>
                  
                  <div className="bg-[#1D1D1F] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                    <p className="text-gray-200 text-base">psycho vibes</p>
                    <p className="text-gray-500 text-xs mt-1 text-right">11:28 AM</p>
                  </div>
                  
                  <div className="bg-[#0066CC] rounded-2xl rounded-tr-sm p-4 max-w-[80%] ml-auto">
                    <p className="text-white text-base">thank u thank u</p>
                    <p className="text-blue-200 text-xs mt-1 text-right">11:29 AM</p>
                  </div>

                  <div className="bg-[#1D1D1F] rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
                    <p className="text-gray-200 text-base">chal ab chill kar thoda</p>
                    <p className="text-gray-500 text-xs mt-1 text-right">11:29 AM</p>
                  </div>
                  
                  <div className="bg-[#0066CC] rounded-2xl rounded-tr-sm p-4 max-w-[80%] ml-auto">
                    <p className="text-white text-base">kar toh rahi thi… tum disturb kar diye</p>
                    <p className="text-blue-200 text-xs mt-1 text-right">11:30 AM</p>
                  </div>
                  
                  {/* Input area */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center bg-black border-t border-gray-800">
                    <input 
                      type="text" 
                      placeholder="Message Anton..." 
                      className="flex-1 bg-[#1D1D1F] rounded-full px-4 py-3 outline-none text-base focus:ring-1 focus:ring-blue-500 border border-gray-800 text-gray-300" 
                    />
                    <button className="bg-[#0066CC] text-white p-3 rounded-full ml-3 hover:bg-[#0077ED] transition duration-200">
                      <IoSend className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </DeviceMockup>
          </motion.div>
        </div>
      </div>

      {/* CSS for stars animation */}
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%);
        }
        
        .stars-container {
          perspective: 500px;
          overflow: hidden;
        }
        
        .stars, .stars2 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          animation: animateBg 50s linear infinite;
          background-image: 
            radial-gradient(4px 4px at 20px 30px, rgba(159, 48, 226, 0.2), rgba(159, 48, 226, 0)),
            radial-gradient(4px 4px at 40px 70px, rgba(88, 28, 135, 0.2), rgba(88, 28, 135, 0)),
            radial-gradient(4px 4px at 50px 160px, rgba(76, 29, 149, 0.2), rgba(76, 29, 149, 0)),
            radial-gradient(4px 4px at 90px 40px, rgba(124, 58, 237, 0.2), rgba(124, 58, 237, 0)),
            radial-gradient(4px 4px at 130px 80px, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0)),
            radial-gradient(4px 4px at 160px 120px, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }
        
        .stars2 {
          animation-delay: -25s;
          background-size: 300px 300px;
          background-image: 
            radial-gradient(2px 2px at 40px 60px, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0)),
            radial-gradient(2px 2px at 80px 120px, rgba(79, 70, 229, 0.2), rgba(79, 70, 229, 0)),
            radial-gradient(2px 2px at 100px 150px, rgba(91, 33, 182, 0.2), rgba(91, 33, 182, 0));
        }
        
        @keyframes animateBg {
          0% {
            transform: rotate(0deg) translateZ(-300px);
          }
          100% {
            transform: rotate(360deg) translateZ(-300px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;