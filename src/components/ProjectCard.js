"use client";

import { useState } from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={`${styles.card} glass ${project.fullWidth ? styles.fullWidth : ''}`} id={`project-${project.id}`}>
            <div className={styles.header}>
                <div className={styles.titleInfo}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <div className={styles.techStack}>
                        {project.tech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                    </div>
                </div>
            </div>

            <div className={styles.tabContainer}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'overview' ? styles.active : ''}`}
                    onClick={(e) => { e.stopPropagation(); setActiveTab('overview'); }}
                >
                    Overview
                </button>
                {project.infographicLink && (
                    <button
                        className={`${styles.tabButton} ${activeTab === 'architecture' ? styles.active : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTab('architecture'); }}
                    >
                        Deep Architecture
                    </button>
                )}
                {project.features && project.features.length > 0 && (
                    <button
                        className={`${styles.tabButton} ${activeTab === 'demos' ? styles.active : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTab('demos'); }}
                    >
                        Execution
                    </button>
                )}
            </div>

            <div className={styles.contentArea}>
                {activeTab === 'overview' && (
                    <div className={styles.overviewTab}>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.highlights}>
                            <h4 className={styles.subTitle}>GenAI Metrics & ROI</h4>
                            <ul className={styles.bulletList}>
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                        {(project.github || project.github2) && (
                            <div className={styles.overviewFooter}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                                        {project.githubLabel || 'View Source Code (GitHub)'} →
                                    </a>
                                )}
                                {project.github2 && (
                                    <a href={project.github2} target="_blank" rel="noopener noreferrer" className={styles.githubButtonSecondary}>
                                        {project.github2Label || 'View Audio Module (GitHub)'} →
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'architecture' && (
                    <div className={styles.architectureTab}>
                        {project.infographicLink ? (
                            <div className={styles.infographicWrapper} onClick={() => setIsModalOpen(true)}>
                                <img src={project.infographicLink} alt={`${project.title} Architecture`} className={styles.infographic} />
                                <div className={styles.expandOverlay}>View Full Resolution</div>
                            </div>
                        ) : (
                            <div className={styles.noAsset}>Architecture Visualization Pending</div>
                        )}
                        <div className={styles.docLinks}>
                            <a href={project.architectureLink} target="_blank" rel="noopener noreferrer" className={styles.docButton}>
                                Deep Architecture (PDF)
                            </a>
                            {project.shortformLink && (
                                <a href={project.shortformLink} target="_blank" rel="noopener noreferrer" className={styles.docButtonSecondary}>
                                    Technical Summary (PDF)
                                </a>
                            )}
                            {project.htmlSummaryLink && (
                                <a href={project.htmlSummaryLink} target="_blank" rel="noopener noreferrer" className={styles.docButtonSecondary}>
                                    Technical Summary (HTML)
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'demos' && (
                    <div className={styles.demosTab}>
                        {project.features && project.features.length > 0 ? (
                            <div className={styles.featuresScrollList}>
                                {project.features.map((feature, i) => (
                                    <div key={i} className={styles.featureCompactItem}>
                                        <div className={styles.featureHeader}>
                                            <div className={styles.featureLabel}>{feature.label}</div>
                                            {feature.isHtml && (
                                                <a href={feature.link} target="_blank" rel="noopener noreferrer" className={styles.htmlLaunchTag}>
                                                    Interactive HTML Demo
                                                </a>
                                            )}
                                        </div>
                                        {feature.desc && <p className={styles.featureDesc}>{feature.desc}</p>}
                                        <div className={styles.videoWrapper}>
                                            {feature.youtubeId ? (
                                                <iframe
                                                    width="100%"
                                                    height="320"
                                                    src={`https://www.youtube.com/embed/${feature.youtubeId}?rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0&iv_load_policy=3`}
                                                    title={feature.label}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : feature.imageLink ? (
                                                <div className={styles.executionImageWrapper}>
                                                    <img src={feature.imageLink} alt={feature.label} className={styles.executionImage} />
                                                </div>
                                            ) : feature.isHtml ? (
                                                <div className={styles.htmlLaunchArea}>
                                                    <a href={feature.link} target="_blank" rel="noopener noreferrer" className={styles.htmlButton}>
                                                        Launch Demo UI
                                                    </a>
                                                </div>
                                            ) : (
                                                <div className={styles.placeholder}>Artifact Staging In Progress</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.noAsset}>Project insights are being curated.</div>
                        )}
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <img src={project.infographicLink} alt="Expanded Architecture" />
                        <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}
