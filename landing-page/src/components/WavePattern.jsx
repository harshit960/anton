import React from 'react';

const WavePattern = ({ className, fill = "#8B5CF6", opacity = 0.1 }) => {
  return (
    <div className={`absolute w-full overflow-hidden ${className}`}>
      <svg 
        viewBox="0 0 1440 320" 
        className="w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill={fill}
          fillOpacity={opacity}
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WavePattern;