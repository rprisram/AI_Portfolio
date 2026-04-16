import styles from './Experience.module.css';

const experiences = [
    {
        role: 'Generative AI Architect & Engineer',
        company: 'KSAP Technologies',
        period: 'FEB 2024 - MAR 2026',
        desc: 'Led agentic AI architecture for enterprise supply chain systems. Engineered autonomous multi-modal RAG parsing, automated legacy data migrations, and pioneered advanced observability across scalable GCP GenAI deployments.',
        accent: 'var(--accent-secondary)'
    },
    {
        role: 'Generative AI Architect & Engineer',
        company: 'Self-Employed / Strategic Portfolios',
        period: 'MAR 2025 - Present',
        desc: "Architecting sovereign multi-agent ecosystems and fine-tuned open-source LLMs (Llama 3.1, MLX local inference). Pioneered 'Telemetry Gravity' tied to Arize Phoenix and Custom High-Fidelity Evaluation frameworks. Engineered advanced RAG pipelines and custom MCP servers using Google ADK, LangGraph, LlamaIndex, and Vertex AI.",
        accent: 'rgba(255, 255, 255, 0.9)'
    },
    {
        role: 'Foundational AI/ML Mastery (PGP)',
        company: 'University of Texas, McCombs',
        period: 'JUL 2024 - APR 2025',
        desc: 'Intensive fellowship specializing in high-fidelity reasoning, Neural Networks, Transfer Learning, and production-grade ML workflows.',
        accent: 'rgba(255, 255, 255, 0.8)'
    },
    {
        role: 'Mobile Principal Engineer I',
        company: 'CVS Health',
        period: 'OCT 2021 - OCT 2023',
        desc: 'Led enterprise iOS/Android architecture transformation. Reduced app launch from 9s to 300ms. Implemented passwordless auth and high-scale microservices.',
        accent: 'rgba(255, 255, 255, 0.7)'
    },
    {
        role: 'Mobile Solution Architect / Mobile Lead',
        company: 'McDonalds (Capgemini)',
        period: 'JAN 2019 - OCT 2021',
        desc: 'Architected multi-national iOS SDKs and secure payment integrations. Led DAST security remediation.',
        accent: 'rgba(255, 255, 255, 0.6)'
    },
    {
        role: 'iOS Developer',
        company: 'Keevat LLC & Allstate',
        period: 'APR 2015 - DEC 2018',
        desc: 'Engineered high-availability mobile systems for retail/healthcare clients. Applied distributed systems principles used in modern RAG.',
        accent: 'rgba(255, 255, 255, 0.5)'
    },
    {
        role: 'Facets ERP Oracle Developer',
        company: 'Cognizant',
        period: 'SEP 2006 - DEC 2012 | APR 2014 - APR 2015',
        desc: 'Managed large-scale relational databases, providing the foundation for data wrangling and lineage required for vector DB optimization.',
        accent: 'rgba(255, 255, 255, 0.4)'
    }
];

export default function Experience() {
    return (
        <section id="experience" className={styles.experienceSection}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.sectionTitle}>Professional Journey</h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, i) => (
                        <div key={i} className={`${styles.timelineItem} glass`}>
                            <div className={styles.dot} style={{ background: exp.accent }}></div>
                            <div className={styles.content}>
                                <span className={styles.period} style={{ color: exp.accent }}>{exp.period}</span>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <h4 className={styles.company}>{exp.company}</h4>
                                <p className={styles.desc}>{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
