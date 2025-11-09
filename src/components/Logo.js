import React from 'react';
import { motion } from 'framer-motion';
import './Logo.css';

const Logo = ({ size = 'medium', animated = true }) => {
  const logoVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <motion.div 
      className={`avs-logo ${size}`}
      variants={animated ? logoVariants : {}}
      initial={animated ? "hidden" : ""}
      animate={animated ? "visible" : ""}
    >
      <div className="logo-container">
        <svg viewBox="0 0 200 200" className="logo-svg">
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
          
          {/* Outer hexagon */}
          <motion.polygon
            points="100,10 175,55 175,145 100,190 25,145 25,55"
            className="logo-hexagon"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Inner design elements */}
          <motion.circle
            cx="100"
            cy="100"
            r="70"
            className="logo-circle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* AVS Text */}
          <text x="100" y="115" className="logo-text">
            <motion.tspan custom={0} variants={letterVariants} initial="hidden" animate="visible">A</motion.tspan>
            <motion.tspan custom={1} variants={letterVariants} initial="hidden" animate="visible">V</motion.tspan>
            <motion.tspan custom={2} variants={letterVariants} initial="hidden" animate="visible">S</motion.tspan>
          </text>
          
          {/* Decorative lines */}
          <motion.line
            x1="40" y1="100" x2="70" y2="100"
            className="logo-line"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.line
            x1="130" y1="100" x2="160" y2="100"
            className="logo-line"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default Logo;
