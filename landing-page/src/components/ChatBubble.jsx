import React from 'react';

const ChatBubble = ({ className, isUser = false }) => {
  const bubbleColor = isUser ? "#EDE9FE" : "#F3F4F6";
  const tailColor = isUser ? "#EDE9FE" : "#F3F4F6";
  
  return (
    <svg 
      className={className} 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {isUser ? (
        // User bubble tail (on the right)
        <path 
          d="M0 12C0 5.37258 5.37258 0 12 0H18C21.3137 0 24 2.68629 24 6V12C24 18.6274 18.6274 24 12 24H0V12Z" 
          fill={bubbleColor} 
        />
      ) : (
        // Bot bubble tail (on the left)
        <path 
          d="M24 12C24 5.37258 18.6274 0 12 0H6C2.68629 0 0 2.68629 0 6V12C0 18.6274 5.37258 24 12 24H24V12Z" 
          fill={bubbleColor} 
        />
      )}
      {isUser ? (
        <path 
          d="M24 12V14L18 18V12H24Z" 
          fill={tailColor} 
        />
      ) : (
        <path 
          d="M0 12V14L6 18V12H0Z" 
          fill={tailColor} 
        />
      )}
    </svg>
  );
};

export default ChatBubble;