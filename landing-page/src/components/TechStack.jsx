import React from 'react';
import AbstractGradient from '../assets/images/AbstractGradient';
import { IoServerOutline, IoShieldCheckmarkOutline, IoCodeSlashOutline, IoLayersOutline, IoLockClosedOutline, IoCloudDoneOutline, IoExtensionPuzzleOutline, IoAnalyticsOutline } from 'react-icons/io5';

const TechStack = () => {
  const technologies = [
    {
      name: "Frontend & User Interface",
      description: "Modern, responsive web interface built with React and styled with TailwindCSS.",
      items: ["React", "Vite", "TailwindCSS", "PostCSS"],
      icon: <IoLayersOutline className="w-7 h-7" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Backend Infrastructure",
      description: "Flexible microservice architecture with both NodeJS and Python implementations.",
      items: ["Express.js", "Node.js", "Flask", "Python 3.13+"],
      icon: <IoServerOutline className="w-7 h-7" />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge AI models with retrieval augmentation for context-aware responses.",
      items: ["Google Gemini Flash 2.0", "Vertex AI", "Fine-tuned LLMs", "Chain-of-thought processing"],
      icon: <IoAnalyticsOutline className="w-7 h-7" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Database & Storage",
      description: "Combination of traditional and vector databases for efficient retrieval.",
      items: ["MongoDB", "Pinecone", "Vector embeddings", "Semantic search"],
      icon: <IoExtensionPuzzleOutline className="w-7 h-7" />,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      name: "Messaging Integration",
      description: "Native Telegram API integration for seamless messaging experience.",
      items: ["gram.js (Node.js)", "Telethon (Python)", "MTProto API", "Media handling"],
      icon: <IoCodeSlashOutline className="w-7 h-7" />,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "Deployment & DevOps",
      description: "Scalable cloud deployment with automated CI/CD pipelines.",
      items: ["Google Cloud Run", "GitHub Actions", "CI/CD Pipeline", "Containerization"],
      icon: <IoCloudDoneOutline className="w-7 h-7" />,
      gradient: "from-gray-600 to-slate-600"
    }
  ];

  return (
    <section id="tech-stack" className="section-spacing  relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute -top-40 left-1/4 w-72 h-72 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>
      <AbstractGradient className="absolute top-1/3 right-1/4 w-80 h-80 opacity-5" colorClass="from-emerald-500 to-cyan-500" />
      <div className="absolute -right-96 top-1/3 w-[600px] h-[800px] bg-gradient-to-l from-blue-900/20 via-indigo-900/5 to-transparent -rotate-45 skew-y-12 rounded-full blur-3xl"></div>
      
      {/* Modern grid overlay with dot pattern */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(20,20,20,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(120,120,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-24 md:mb-32 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white/90 bg-blue-500/10 rounded-full">
            Technology
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Powered by Modern Technology
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Anton is built on a microservice architecture with cutting-edge technologies that make sophisticated AI conversations possible.
          </p>
        </div>
        
        {/* Main visual section */}
        <div className="apple-card p-0 overflow-hidden mb-28 group">
          {/* Glassmorphism effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Image side with 3D-like box effect */}
            <div className="w-full lg:w-5/12 relative bg-[#0A0A0A] overflow-hidden min-h-[400px]">
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
                        
                        {/* Brain neural network representation */}
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
                      src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="AI Technology" 
                      className="w-full h-full object-cover object-center opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content side */}
            <div className="w-full lg:w-7/12 p-10 md:p-16 lg:p-20">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full w-fit">
                ARCHITECTURE OVERVIEW
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Microservice Architecture</h3>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Anton is built with a flexible, scalable microservice architecture that combines Node.js and Python backends with powerful AI components for natural conversations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Server (Node.js & Flask)',
                    description: 'Handles Telegram integration and message processing',
                    icon: <IoServerOutline className="w-5 h-5" />
                  },
                  {
                    title: 'Llama AI Service',
                    description: 'Manages embeddings and response generation',
                    icon: <IoAnalyticsOutline className="w-5 h-5" />
                  },
                  {
                    title: 'Vector Database',
                    description: 'Stores and retrieves semantic data with Pinecone',
                    icon: <IoExtensionPuzzleOutline className="w-5 h-5" />
                  },
                  {
                    title: 'Cloud Deployment',
                    description: 'Hosted on Google Cloud Run with CI/CD',
                    icon: <IoCloudDoneOutline className="w-5 h-5" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex group/item">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg group-hover/item:shadow-blue-500/20 transition-all duration-300 group-hover/item:scale-110">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1 group-hover/item:text-blue-400 transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="apple-card p-8 md:p-10 relative overflow-hidden group hover:translate-y-[-8px] transition-all duration-300">
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${tech.gradient} rounded-2xl pointer-events-none`}></div>
              
              {/* Shine effect on hover */}
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
              
              {/* Icon and title container */}
              <div className="flex items-start mb-6 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white transform transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110 mr-4`}>
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">{tech.name}</h3>
                  <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">{tech.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {tech.items.map((item, i) => (
                  <span key={i} className="inline-block px-3 py-1 bg-[#101010] group-hover:bg-[#151515] rounded-full text-sm text-gray-300 border border-gray-800/50 transition-colors duration-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
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

export default TechStack;