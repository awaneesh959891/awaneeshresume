import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap, FaDatabase, FaMicrosoft, FaCloud } from 'react-icons/fa';
import { SiDotnet, SiTailwindcss, SiJquery, SiOracle, SiPostgresql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: '.NET', icon: <SiDotnet />, level: 85 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'Angular', icon: <FaAngular />, level: 70 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88 },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 90 },
        { name: 'jQuery', icon: <SiJquery />, level: 85 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'SQL Server', icon: <FaDatabase />, level: 85 },
        { name: 'Oracle', icon: <SiOracle />, level: 75 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Azure', icon: <FaCloud />, level: 80 },
        { name: 'Visual Studio', icon: <FaMicrosoft />, level: 90 },
        { name: 'Web API', icon: <FaDatabase />, level: 85 },
        { name: 'MVC', icon: <SiDotnet />, level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-title"
          data-aos="fade-up"
        >
          <h2>Skills & Expertise</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3>Additional Competencies</h3>
          <div className="tags">
            <span className="tag">RESTful APIs</span>
            <span className="tag">Responsive Design</span>
            <span className="tag">Microsoft Graph API</span>
            <span className="tag">MSAL Authentication</span>
            <span className="tag">Azure Blob Storage</span>
            <span className="tag">Agile Methodology</span>
            <span className="tag">Git Version Control</span>
            <span className="tag">Team Collaboration</span>
            <span className="tag">Problem Solving</span>
            <span className="tag">Code Review</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
