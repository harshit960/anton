import React from 'react';
import { IoRocketOutline, IoTimeOutline, IoLockClosedOutline, 
         IoChatbubbleEllipsesOutline, IoPersonOutline, IoBulbOutline } from 'react-icons/io5';
import AbstractGradient from '../assets/images/AbstractGradient';

const Features = () => {
  const features = [
    {
      title: "Context-Aware Responses",
      description: "Anton leverages RAG (Retrieval-Augmented Generation) to maintain conversation context and provide relevant responses.",
      icon: <IoBulbOutline className="w-7 h-7" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Adaptive Personality",
      description: "The system models and evolves personality through user interactions, creating a more natural conversational experience.",
      icon: <IoPersonOutline className="w-7 h-7" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Vector Search & Retrieval",
      description: "Pinecone vector database enables semantic search and efficient retrieval of relevant conversation context.",
      icon: <IoTimeOutline className="w-7 h-7" />,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Hinglish Support",
      description: "Special support for Hindi-English mixed language conversations, making the experience more natural for Indian users.",
      icon: <IoChatbubbleEllipsesOutline className="w-7 h-7" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Chain-of-Thought Processing",
      description: "Multiple chained LLMs enable more complex reasoning and natural responses through progressive stages.",
      icon: <IoRocketOutline className="w-7 h-7" />,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Secure Telegram Integration",
      description: "Seamless connection with Telegram via native API clients for real-time messaging and media handling.",
      icon: <IoLockClosedOutline className="w-7 h-7" />,
      gradient: "from-gray-600 to-gray-500"
    }
  ];

  return (
    <section id="features" className="section-spacing  relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>
      <div className="absolute -left-96 top-1/3 w-[500px] h-[700px] bg-gradient-to-r from-blue-900/20 via-indigo-900/5 to-transparent rotate-45 skew-y-12 rounded-full blur-3xl"></div>
      <AbstractGradient className="absolute bottom-1/3 right-10 w-80 h-80 opacity-5" colorClass="from-purple-500 to-indigo-500" />
      
      {/* Modern grid overlay with dot pattern */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(20,20,20,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(120,120,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white/90 bg-blue-500/10 rounded-full">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Advanced Capabilities
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Anton combines cutting-edge AI technologies to deliver a sophisticated conversational experience with a uniquely evolving personality.
          </p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="apple-card p-8 pb-10 relative group transition-all duration-300 hover:translate-y-[-8px] overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} rounded-2xl pointer-events-none`}></div>
              
              {/* Icon Container */}
              <div className="mb-6 flex items-center relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
            </div>
          ))}
        </div>
        
        {/* Feature Highlight */}
        <div className="mt-36 lg:mt-48 relative">
          <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
          
          <div className="apple-card p-0 overflow-hidden relative z-10 group">
            {/* Glassmorphism effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-10 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full w-fit">
                  BREAKTHROUGH TECHNOLOGY
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white leading-tight">Retrieval-Augmented Generation (RAG)</h3>
                <p className="text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed">
                  Anton leverages cutting-edge RAG architecture to combine vector search with language model generation, creating responses that are grounded in your conversation history.
                </p>
                <ul className="space-y-5">
                  {['Document embedding with Gemini models', 'Semantic search with Pinecone', 'Context-aware response generation'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className=" w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 mt-0.5 mr-4 flex items-center justify-center text-white text-xs">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-gray-300">{item}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 bg-[#0A0A0A] overflow-hidden min-h-[400px] relative">
                {/* Decorative grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(50,50,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Decorative elements */}
                <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
                  <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-2xl"></div>
                  <div className="absolute right-10 bottom-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
                  
                  {/* 3D Wireframe perspective effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative perspective">
                      <div className="relative transform translate-z-0 rotate-y-12 rotate-x-12">
                        <svg width="360" height="300" viewBox="0 0 560 400" className="opacity-25">
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100, 150, 255, 0.2)" strokeWidth="1"/>
                          </pattern>
                          <rect x="0" y="0" width="560" height="400" fill="url(#grid)" />
                          
                          {/* Neural network representation */}
                          <g className="animate-pulse-slow" opacity="0.7">
                            <circle cx="280" cy="200" r="80" fill="none" stroke="rgba(130, 170, 255, 0.5)" strokeWidth="2" />
                            <circle cx="280" cy="200" r="120" fill="none" stroke="rgba(150, 120, 255, 0.3)" strokeWidth="1.5" />
                            <circle cx="280" cy="200" r="160" fill="none" stroke="rgba(180, 100, 240, 0.2)" strokeWidth="1" />
                            
                            {/* Connection lines */}
                            {[...Array(12)].map((_, i) => (
                              <line 
                                key={i}
                                x1="280" 
                                y1="200" 
                                x2={280 + 160 * Math.cos(i * Math.PI / 6)}
                                y2={200 + 160 * Math.sin(i * Math.PI / 6)}
                                stroke="rgba(130, 170, 255, 0.3)"
                                strokeWidth="1"
                              />
                            ))}
                            
                            {/* Neural nodes */}
                            {[...Array(24)].map((_, i) => {
                              const radius = 80 + (i % 3) * 40;
                              const angle = (i * Math.PI / 12);
                              return (
                                <circle 
                                  key={i}
                                  cx={280 + radius * Math.cos(angle)}
                                  cy={200 + radius * Math.sin(angle)}
                                  r={3 - (i % 3)}
                                  fill="rgba(130, 170, 255, 0.7)"
                                />
                              );
                            })}
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main image with glass morphism */}
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="relative transition-all duration-700 group-hover:scale-[1.03] w-full h-full">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-60"></div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                      <img 
                        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                        alt="AI Brain Visualization" 
                        className="w-full h-full object-cover object-center opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>
      </div>
      
      {/* Add keyframe animation for shine effect */}
      <style jsx>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        .translate-z-0 {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default Features;