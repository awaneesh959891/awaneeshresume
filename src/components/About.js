import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-title"
          data-aos="fade-up"
        >
          <h2>About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            data-aos="fade-right"
          >
            <h3>Full Stack Developer & Problem Solver</h3>
            <p>
              I'm a passionate Software Engineer currently working at Wipro Limited with over 3 years
              of experience in full-stack development. I specialize in building scalable web applications
              using modern technologies like JavaScript, .NET, and cloud platforms.
            </p>
            <p>
              My journey in software development has been driven by a constant desire to learn and
              innovate. I've successfully led multiple projects from conception to deployment,
              always focusing on delivering high-quality solutions that exceed expectations.
            </p>
            <p>
              I thrive in collaborative environments and enjoy tackling complex technical challenges.
              Whether it's developing user-friendly interfaces or architecting robust backend systems,
              I bring dedication and expertise to every project.
            </p>

            <div className="about-stats">
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
                <h4>4+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
                <h4>10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            data-aos="fade-left"
          >
            <div className="about-card">
              <div className="card-content">
                <h4>Quick Facts</h4>
                <ul>
                  <li>
                    <span className="fact-icon">🎓</span>
                    <div>
                      <strong>Education</strong>
                      <p>M.Tech (Master of Technology in Software Systems)</p>
                    </div>
                  </li>
                  <li>
                    <span className="fact-icon">💼</span>
                    <div>
                      <strong>Current Role</strong>
                      <p>Senior Software Engineer at Wipro</p>
                    </div>
                  </li>
                  <li>
                    <span className="fact-icon">📍</span>
                    <div>
                      <strong>Location</strong>
                      <p>Gurugram, India</p>
                    </div>
                  </li>
                  <li>
                    <span className="fact-icon">💡</span>
                    <div>
                      <strong>Specialization</strong>
                      <p>Full Stack Development</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
