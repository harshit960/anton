import React from 'react';

const AbstractGradient = ({ className, colorClass = "from-blue-500 to-indigo-500" }) => {
  // Define unique ID for this specific gradient instance
  const uniqueId = `abstractGradient-${Math.random().toString(36).substring(2, 9)}`;
  
  // Color mappings
  const colorMappings = {
    'from-blue-500 to-indigo-500': {
      fromColor: '#3B82F6',
      toColor: '#6366F1'
    },
    'from-purple-500 to-indigo-500': {
      fromColor: '#8B5CF6',
      toColor: '#6366F1'
    },
    'from-purple-500 to-pink-500': {
      fromColor: '#8B5CF6',
      toColor: '#EC4899'
    },
    'from-cyan-500 to-blue-500': {
      fromColor: '#06B6D4',
      toColor: '#3B82F6'
    },
    'from-emerald-500 to-cyan-500': {
      fromColor: '#10B981',
      toColor: '#06B6D4'
    },
    'from-amber-500 to-orange-500': {
      fromColor: '#F59E0B',
      toColor: '#F97316'
    }
  };

  const gradient = colorMappings[colorClass] || colorMappings['from-blue-500 to-indigo-500'];

  return (
    <svg 
      className={className}
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradient.fromColor} />
          <stop offset="100%" stopColor={gradient.toColor} />
        </linearGradient>
        <filter id={`blur-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
        </filter>
      </defs>
      
      <path 
        fill={`url(#${uniqueId})`} 
        d="M47.5,-51.2C59.7,-38.1,66.8,-19.1,67.1,0.3C67.4,19.7,60.9,39.4,48.5,51.6C36.1,63.9,18.1,68.8,-0.5,69.3C-19.2,69.8,-38.3,66,-51.9,53.7C-65.4,41.4,-73.4,20.7,-71.7,1.7C-70,-17.3,-58.6,-34.6,-44.6,-47.7C-30.6,-60.8,-15.3,-69.6,2,-71.6C19.2,-73.6,38.5,-68.8,47.5,-51.2Z" 
        transform="translate(100 100)"
        filter={`url(#blur-${uniqueId})`}
        className="animate-blob"
      />
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(100px, 100px) scale(1);
          }
          33% {
            transform: translate(100px, 100px) scale(1.1);
          }
          66% {
            transform: translate(100px, 100px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
          opacity: 0.6;
        }
      `}</style>
    </svg>
  );
};

export default AbstractGradient; 