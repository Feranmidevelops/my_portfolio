import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import axios from 'axios';
import './Projects.css';

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/projects');
            setProjects(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
        }
    };

    // Show first 3projects, expand to show all
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        A selection of my recent work showcasing different technologies and problem-solving approaches
                    </p>
                </FadeIn>

                <motion.div className="projects-grid" layout>
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="project-card"
                            >
                                <div className="project-image">
                                    <img src={project.imageUrl || '/placeholder.png'} alt={project.title} />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                                    <i className="icon-github">GitHub</i>
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                                    <i className="icon-external">Live Demo</i>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {loading && (
                    <div className="loading-state">
                        <div className="spinner"></div>
                    </div>
                )}

                {!loading && projects.length > 6 && !showAll && (
                    <div className="show-more-container">
                        <button className="show-more-btn" onClick={() => setShowAll(true)}>
                            Show More Projects
                        </button>
                    </div>
                )}

                {!loading && showAll && projects.length > 6 && (
                    <div className="show-more-container">
                        <button className="show-more-btn" onClick={() => setShowAll(false)}>
                            Show Less
                        </button>
                    </div>
                )}

                {!loading && projects.length === 0 && (
                    <div className="empty-state">
                        <p>No projects found yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
};
