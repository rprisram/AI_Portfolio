import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="hero" className={styles.heroSection}>
            <div className={styles.backgroundGlow}></div>
            <div className={`${styles.container} container`}>
                <div className={styles.mainContent}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            <span className={styles.name}>Priya Raman</span><br />
                            Architecting <span className="gradient-text">Reliable Reasoning</span>
                        </h1>
                        <p className={styles.subtitle}>
                            GenAI Architect & Engineer specializing in Multi-Agent Orchestration, Agentic RAG, and Production LLMOps.
                            Architected, Implemented, and Deployed robust reasoning engines in Production Cloud Environments for senior-level impact.
                        </p>
                        <div className={styles.ctaContainer}>
                            <div className={styles.primaryActions}>
                                <a href="/assets/general/Priya Raman-Resume.pdf" className={styles.primaryButton} download>
                                    Download Resume
                                </a>
                                <a href="#genai" className={styles.secondaryButton}>
                                    Execution Insights
                                </a>
                            </div>
                            <div className={styles.socialActions}>
                                <a href="https://github.com/rprisram" target="_blank" rel="noopener noreferrer" className={styles.socialIconButton}>
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/priya-raman-9124ba9/" target="_blank" rel="noopener noreferrer" className={styles.socialIconButton}>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.briefCard} glass`}>
                        <h3 className={styles.briefTitle}>Professional Summary</h3>
                        <p className={styles.briefText}>
                            GenAI Architect & Engineer with <strong>18+ years</strong> of record-breaking performance in building enterprise-scale solutions across <strong>Healthcare and Mobile</strong> domains.
                        </p>
                        <p className={styles.briefText}>
                            Surgically transitioned from deep systems engineering to leading production-grade GenAI. Expertise spans the full GenAI lifecycle: domain-specific LLM fine-tuning, distributed agent orchestration, and GCP-native LLMOps with custom evaluation and unified observability.
                        </p>
                        <p className={styles.briefText}>
                            Strategic focus on the <strong>Agentic AI Lifecycle</strong>, architecting observable systems that outperform shallow data extraction. Pioneered the "Telemetry Gravity" pattern for unified multi-agent debugging across local and cloud environments.
                        </p>
                        <p className={styles.briefText}>
                            Sought-after for bridging the gap between experimental scripts and robust reasoning engines. <strong>Successfully completed the Post Graduate Program in AI/ML (UT McCombs)</strong>, specializing in high-fidelity reasoning and production-grade agentic frameworks in cloud systems.
                        </p>

                        <div className={styles.statsRow}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>~2 Min Gen</span>
                                <span className={styles.statLabel}>15 Min Podcast</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>331%</span>
                                <span className={styles.statLabel}>Fine-tuned Model perf gain</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
