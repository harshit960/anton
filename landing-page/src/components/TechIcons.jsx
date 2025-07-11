import React from 'react';
import { 
  SiReact, SiVite, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiFlask, SiPython, SiMongodb, 
  SiGooglecloud, SiTelegram, SiGithubactions 
} from 'react-icons/si';
import { TbPrompt } from 'react-icons/tb';
import { BiPyramid } from 'react-icons/bi';
import { FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import { staggerContainer, staggerItem } from './animations';

const TechIcons = () => {
  const technologies = [
    { icon: <SiReact />, name: 'React', category: 'frontend' },
    { icon: <SiVite />, name: 'Vite', category: 'frontend' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS', category: 'frontend' },
    { icon: <SiNodedotjs />, name: 'Node.js', category: 'backend' },
    { icon: <SiExpress />, name: 'Express.js', category: 'backend' },
    { icon: <SiFlask />, name: 'Flask', category: 'backend' },
    { icon: <SiPython />, name: 'Python', category: 'backend' },
    { icon: <SiMongodb />, name: 'MongoDB', category: 'database' },
    { icon: <FaDatabase />, name: 'Pinecone', category: 'database' },
    { icon: <TbPrompt />, name: 'Gemini Flash', category: 'ai' },
    { icon: <BiPyramid />, name: 'Vertex AI', category: 'ai' },
    { icon: <SiTelegram />, name: 'Telegram', category: 'platform' },
    { icon: <SiGooglecloud />, name: 'Google Cloud', category: 'platform' },
    { icon: <SiGithubactions />, name: 'CI/CD', category: 'platform' },
  ];

  const categoryColors = {
    frontend: 'from-blue-400 to-indigo-400',
    backend: 'from-emerald-400 to-teal-400',
    database: 'from-amber-400 to-orange-400',
    ai: 'from-purple-400 to-pink-400',
    platform: 'from-cyan-400 to-blue-400',
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <AnimateOnScroll
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white">Powered By</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </AnimateOnScroll>
        
        <AnimateOnScroll
          variants={staggerContainer}
          className="tech-icons-container flex flex-wrap justify-center gap-6 md:gap-8"
          transition="stagger"
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="group relative flex flex-col items-center"
              variants={staggerItem}
            >
              <div className={`
                w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center
                bg-[#0A0A14] border border-[#222244] text-gray-400
                backdrop-blur-sm shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)]
                transform transition-all duration-300
                group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] group-hover:border-opacity-50
                group-hover:text-white
              `}>
                <div className="text-3xl md:text-4xl">
                  {tech.icon}
                </div>
                
                {/* Glass morphism effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20
                  bg-gradient-to-br ${categoryColors[tech.category]}
                  transition-opacity duration-300
                `}></div>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl opacity-0 group-hover:opacity-100">
                <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 group-hover:animate-shine"></div>
              </div>
              
              {/* Name tooltip */}
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-400 font-medium">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </AnimateOnScroll>
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
      `}</style>
    </section>
  );
};

export default TechIcons; 