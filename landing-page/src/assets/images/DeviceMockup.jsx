import React from 'react';

const DeviceMockup = ({ children, className = "" }) => {
  return (
    <div className={`device-mockup relative ${className}`}>
      {/* Device frame */}
      <div className="relative z-10 border-[10px] border-[#1D1D1F] rounded-[36px] overflow-hidden shadow-2xl bg-black">
        {/* Status bar */}
        <div className="bg-black py-2 px-6 flex items-center justify-between">
          <div className="text-xs text-gray-400">11:42</div>
          <div className="absolute top-[11px] left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[14px] flex items-center justify-center">
            <div className="w-[70px] h-[4px] bg-[#1D1D1F] rounded-full"></div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full border border-gray-500"></div>
            <div className="w-3 h-3 rounded-full border border-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="device-content overflow-hidden">
          {children}
        </div>
      </div>
      
      {/* Shadows and reflections */}
      <div className="absolute top-0 left-0 right-0 bottom-0 device-glow rounded-[40px] -z-10"></div>
      <div className="absolute top-[5%] left-[5%] right-[5%] h-[50%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 filter blur-xl rounded-full -z-20"></div>
      
      <style jsx>{`
        .device-mockup {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .device-glow {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(59, 130, 246, 0.2) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          transform: translateZ(-10px);
        }
      `}</style>
    </div>
  );
};

export default DeviceMockup; 