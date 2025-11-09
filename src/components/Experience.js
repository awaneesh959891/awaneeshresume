import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Wipro Limited',
      location: 'Gurugram, India',
      period: 'Sept 2021 - Present',
      projects: [
        {
          name: 'Letters',
          description: 'Lead end-to-end Full stack development for the project.',
          achievements: [
            'Successfully met tight deadlines, ensuring high code quality and prioritizing user experience',
            'Collaborated with cross-functional teams to introduce innovative solutions and address technical challenges',
            'Ensured project scalability and team learning through comprehensive documentation',
          ],
        },
        {
          name: 'Business Card',
          description: 'Implemented game-changing Admin Module feature on the dashboard.',
          achievements: [
            'Played a pivotal role in successful implementation and launch of Admin Module',
            'Empowered Business Visiting cards, increased Client Visit and revenue',
            'Enhanced platform\'s value proposition for Wipro partners and boosting business growth',
          ],
        },
        {
          name: 'Stationery',
          description: 'Developed user-friendly landing dashboard for Wipro users.',
          achievements: [
            'Led development of dashboard featuring dynamic property listings and key metrics',
            'Revamped navigation sidebar for improved usability and aesthetics in FMG admin and user module',
            'Delivered intuitive and visually appealing interface for efficient property information access',
          ],
        },
        {
          name: 'Goods Transfer',
          description: 'Owned and managed entire Goods Bookings module.',
          achievements: [
            'Contributed significantly to successful launch of Courier Goods Booking App',
            'Ensured seamless integration and functionality',
            'Delivered user-friendly and feature-rich platform',
          ],
        },
        {
          name: 'UKG',
          description: 'Supported UKG SAAS platform onboarding for Wipro Employees.',
          achievements: [
            'Contributed to successful launch of UKG Application',
            'Collaborated with cross-functional teams and Vendor to introduce innovative solutions',
            'Addressed technical challenges for seamless HR Services process',
          ],
        },
        {
          name: 'Wipro Volunteering',
          description: 'Developed volunteer management platform for organizing events across different locations.',
          achievements: [
            'Built comprehensive event registration and management system',
            'Enabled multi-location event coordination for corporate social responsibility initiatives',
            'Implemented volunteer tracking and impact measurement analytics',
          ],
        },
        {
          name: 'Evotix',
          description: 'Integrated SAAS-based training management platform for employee development.',
          achievements: [
            'Facilitated training course management and employee enrollment processes',
            'Implemented compliance certification tracking system',
            'Delivered multi-tenant SAAS architecture for scalable training programs',
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-title"
          data-aos="fade-up"
        >
          <h2>Work Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="projects-grid">
                  {exp.projects.map((project, pIndex) => (
                    <motion.div
                      key={pIndex}
                      className="project-card"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="project-header">
                        <FaBriefcase className="project-icon" />
                        <h5>{project.name}</h5>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <ul className="achievements">
                        {project.achievements.map((achievement, aIndex) => (
                          <li key={aIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
