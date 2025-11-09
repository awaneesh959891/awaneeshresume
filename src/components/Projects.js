import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Executive Booking System (EBC)',
      description: 'A comprehensive full-stack meeting room booking system designed from scratch with advanced features for enterprise use.',
      technologies: ['Angular', '.NET', 'MS SQL Server', 'Azure', 'Microsoft Graph API', 'MSAL'],
      features: [
        'Integrated Microsoft Graph API and MSAL for secure authentication',
        'Calendar synchronization with Microsoft 365',
        'Client and participant management system',
        'Hospitality services integration',
        'Admin approval workflows',
        'Azure Blob Storage for file management',
        'Responsive UI for seamless booking across devices',
      ],
      image: '🏢',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Letters Management System',
      description: 'End-to-end full stack application for managing and processing business letters with automation capabilities.',
      technologies: ['JavaScript', '.NET', 'Web API', 'SQL Server', 'jQuery'],
      features: [
        'Automated letter generation and processing',
        'Template management system',
        'User access control and permissions',
        'Document tracking and versioning',
        'Integration with email services',
      ],
      image: '📝',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Business Card Dashboard',
      description: 'Admin module for managing business visiting cards with analytics and reporting features.',
      technologies: ['JavaScript', 'Bootstrap', 'Web API', '.NET MVC', 'SQL Server'],
      features: [
        'Admin dashboard with analytics',
        'Card design and customization',
        'Client visit tracking',
        'Revenue reporting',
        'Partner management system',
      ],
      image: '💼',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Stationery Management Portal',
      description: 'User-friendly dashboard for Wipro users featuring dynamic property listings and facility management.',
      technologies: ['JavaScript', 'Tailwind CSS', 'Web API', 'SQL Server'],
      features: [
        'Dynamic property listings',
        'Key metrics visualization',
        'Enhanced navigation sidebar',
        'Facility management integration',
        'Real-time updates',
      ],
      image: '📊',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
    {
      title: 'Goods Transfer Application',
      description: 'Comprehensive courier goods booking application with tracking and management features.',
      technologies: ['JavaScript', 'Bootstrap', '.NET', 'Web API', 'SQL Server'],
      features: [
        'Goods booking and scheduling',
        'Real-time tracking system',
        'Invoice generation',
        'Delivery confirmation',
        'Report generation',
      ],
      image: '📦',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    },
    {
      title: 'UKG SAAS Platform Integration',
      description: 'HR services platform integration for seamless employee management and HR operations.',
      technologies: ['JavaScript', 'Angular', 'Web API', 'Azure', 'SAAS'],
      features: [
        'Employee onboarding automation',
        'HR services integration',
        'Third-party vendor collaboration',
        'Automated workflows',
        'Compliance management',
      ],
      image: '👥',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    },
    {
      title: 'Wipro Volunteering',
      description: 'Volunteer management platform enabling Wipro employees to participate in and organize various events across different locations.',
      technologies: ['JavaScript', '.NET', 'Web API', 'SQL Server', 'Azure'],
      features: [
        'Event registration and management',
        'Multi-location event coordination',
        'Volunteer tracking and reporting',
        'Event calendar and notifications',
        'Impact measurement and analytics',
      ],
      image: '🤝',
      color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    },
    {
      title: 'Evotix',
      description: 'SAAS-based training management platform designed to streamline employee training, compliance, and skill development programs.',
      technologies: ['JavaScript', 'Angular', 'SAAS', 'Web API', 'Azure'],
      features: [
        'Training course management',
        'Employee enrollment and tracking',
        'Compliance certification tracking',
        'Progress monitoring and reporting',
        'Multi-tenant SAAS architecture',
      ],
      image: '📚',
      color: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-title"
          data-aos="fade-up"
        >
          <h2>Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Showcasing my expertise through real-world applications and innovative solutions
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card-container"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-card">
                <div className="project-image" style={{ background: project.color }}>
                  <span className="project-emoji">{project.image}</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.slice(0, 3).map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-links">
                    <motion.button
                      className="project-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
