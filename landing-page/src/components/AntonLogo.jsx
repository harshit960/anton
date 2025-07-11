import React from 'react';

const AntonLogo = ({ size = 40, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
      <path 
        d="M37.5 70L50 30L62.5 70" 
        stroke="white" 
        strokeWidth="6" 
        fill="none" 
        strokeLinecap="round"
      />
      <line 
        x1="40" 
        y1="55" 
        x2="60" 
        y2="55" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AntonLogo;