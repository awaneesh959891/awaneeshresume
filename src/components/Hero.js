import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/awaneesh_new.jpg';
import resumePDF from '../assets/Awaneesh_Resume_2025_MCA.pdf';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h3
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </motion.h3>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AWANEESH VIKRAM SINGH
          </motion.h1>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
           .Net Full Stack Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            Passionate Software Engineer with expertise in JavaScript, .NET, and modern web technologies.
            Specialized in building scalable applications and delivering exceptional user experiences.
          </motion.p>

          <motion.div className="hero-contact-info" variants={itemVariants}>
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:awaneesh497@gmail.com">awaneesh497@gmail.com</a>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+91-9598915806</span>
            </div>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
            <a href={resumePDF} download="Awaneesh_Vikram_Singh_Resume.pdf" className="btn btn-download">
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href="https://www.linkedin.com/in/awaneesh-singh-18235b175"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:awaneesh497@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-container">
            <motion.div 
              className="profile-image-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={profileImage} alt="Awaneesh Vikram Singh" className="profile-image" />
              <div className="image-border"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="mouse"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
