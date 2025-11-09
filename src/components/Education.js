import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'M.Tech (Master of Technology in Software Systems)',
      institution: 'BITS PILANI University',
      location: 'Pilani, India',
      period: '2022 – 2025',
      cgpa: '6.8',
      icon: '🎓',
      highlights: [
        'Specialized in Advanced Computer Science',
        'Research focus on cutting-edge technologies',
        'Advanced Software Engineering principles',
        'Innovation and research methodologies',
      ],
    },
    {
      degree: 'MCA (Master of Computer Application)',
      institution: 'Chandigarh University',
      location: 'Chandigarh, India',
      period: 'Jul 2022 – Jun 2024',
      cgpa: '7.95',
      icon: '🎓',
      highlights: [
        'Specialized in Advanced Software Development',
        'Completed projects on Full Stack Development',
        'Strong foundation in Data Structures and Algorithms',
        'Participated in coding competitions and hackathons',
      ],
    },
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      institution: 'University Of Lucknow',
      location: 'Lucknow, India',
      period: '2018 – 2021',
      percentage: '67.71',
      icon: '💻',
      highlights: [
        'Foundation in Computer Science fundamentals',
        'Database Management Systems',
        'Web Technologies and Programming',
        'Software Development Life Cycle',
      ],
    },
    {
      degree: '12th (Intermediate)',
      institution: 'U.P Board',
      location: 'Uttar Pradesh, India',
      period: '2018',
      percentage: '56',
      icon: '📚',
      highlights: [
        'Science stream with Mathematics',
        'Strong analytical and problem-solving skills',
        'Foundation for computer science education',
      ],
    },
    {
      degree: '10th (High School)',
      institution: 'U.P Board',
      location: 'Uttar Pradesh, India',
      period: '2016',
      percentage: '75.33',
      icon: '📖',
      highlights: [
        'Core subjects including Mathematics and Science',
        'Academic excellence',
        'Foundation for higher education',
      ],
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-title"
          data-aos="fade-up"
        >
          <h2>Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="education-container">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="education-icon">
                <span className="edu-emoji">{edu.icon}</span>
              </div>

              <div className="education-content">
                <div className="education-header">
                  <div>
                    <h3>{edu.degree}</h3>
                    <h4>
                      <FaUniversity className="inline-icon" />
                      {edu.institution}
                    </h4>
                  </div>
                  {edu.cgpa && (
                    <div className="education-badge">
                      <span className="cgpa-label">CGPA</span>
                      <span className="cgpa-value">{edu.cgpa}</span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="education-badge">
                      <span className="cgpa-label">Percentage</span>
                      <span className="cgpa-value">{edu.percentage}%</span>
                    </div>
                  )}
                </div>

                <div className="education-meta">
                  <div className="meta-item">
                    <FaCalendar />
                    <span>{edu.period}</span>
                  </div>
                  <div className="meta-item">
                    <FaGraduationCap />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="education-highlights">
                  <h5>Highlights:</h5>
                  <ul>
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications-section"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>Professional Development</h3>
          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-icon">💻</div>
              <h4>Full Stack Development</h4>
              <p>Expertise in end-to-end application development</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">☁️</div>
              <h4>Cloud Technologies</h4>
              <p>Microsoft Azure platform experience</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🔐</div>
              <h4>Security & Authentication</h4>
              <p>MSAL and Microsoft Graph API implementation</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📱</div>
              <h4>Responsive Design</h4>
              <p>Modern UI/UX development practices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
