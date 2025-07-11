/**
 * Common animation variants to use with Framer Motion throughout the site
 */

// Basic fade animations
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

// Scale animations
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const scaleDown = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 }
};

// Combination animations
export const popUp = {
  hidden: { opacity: 0, scale: 0.5, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// Card flip animation
export const cardFlip = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0 }
};

// Staggered animations for lists and grids
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

// Tech-themed animations
export const glitch = {
  hidden: { 
    opacity: 0,
    x: 0
  },
  visible: { 
    opacity: 1,
    x: [0, -10, 5, -5, 3, -3, 0],
    transition: { 
      duration: 0.5,
      times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1] 
    }
  }
};

// Spotlight reveal animation
export const spotlight = {
  hidden: { 
    opacity: 0,
    clipPath: "circle(0% at 50% 50%)" 
  },
  visible: { 
    opacity: 1,
    clipPath: "circle(100% at 50% 50%)",
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

// Draw SVG path animation
export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.5 }
    }
  }
}; 