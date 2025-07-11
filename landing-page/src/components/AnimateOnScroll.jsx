import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * AnimateOnScroll is a wrapper component that animates children when they come into view
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to animate
 * @param {Object} [props.variants] - Animation variants (default is fadeInUp)
 * @param {number} [props.threshold=0.1] - Visibility threshold (0-1)
 * @param {string} [props.transition] - Animation transition preset or custom config
 * @param {Object} [props.className] - Optional CSS classes
 */
const AnimateOnScroll = ({ 
  children, 
  variants, 
  threshold = 0.1, 
  transition = "default", 
  className = "",
  ...props 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold, 
    triggerOnce: true 
  });

  // Default animation variants
  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Transition presets
  const transitions = {
    default: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    slow: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    fast: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    bounce: { type: "spring", stiffness: 400, damping: 10 },
    stagger: { staggerChildren: 0.1, delayChildren: 0.2 },
    gentle: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  };

  // Handle transition config
  const transitionConfig = typeof transition === 'string' 
    ? transitions[transition] || transitions.default
    : transition;

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants || defaultVariants}
      transition={transitionConfig}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 