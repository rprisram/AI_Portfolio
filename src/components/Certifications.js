import styles from './Certifications.module.css';

const certifications = [
    {
        title: 'Post Graduate Program in Artificial Intelligence and Machine Learning',
        issuer: 'University of Texas, McCombs School of Business',
        date: 'July 2024 - April 2025',
        desc: 'Specialized in GenAI lifecycle and high-fidelity reasoning. Architected, implemented, and deployed production-grade agentic frameworks.',
        link: 'https://la.utexas.edu/texasexeced/digitalVerification.html?key=sdaavoxr'
    },
    {
        title: 'Agents Course',
        issuer: 'Hugging Face',
        date: '2025',
        desc: 'Deep dive into building autonomous agents using open-source tools. Focus on tool use, LLM reasoning, and agentic workflows.',
        link: 'https://drive.google.com/file/d/1157FdQXDWGdD6GTc2Q9NdA45zC2kNsQV/view'
    },
    {
        title: 'LLM Fundamentals & Fine Tuning Language Models',
        issuer: 'Hugging Face',
        date: '2025',
        desc: 'Comprehensive training on deploying, fine-tuning, and optimizing Large Language Models using PEFT and LoRA techniques.',
        links: [
            { label: 'Fundamentals Cred', url: 'https://drive.google.com/file/d/1tjWUqmEHd17aF6cjTIzTp_M6YIcoXZKF/view' },
            { label: 'Fine-Tuning Cred', url: 'https://drive.google.com/file/d/1XSp5KZtKbiyICzrld53u6V-4U53Fmk2g/view' }
        ]
    },
    {
        title: 'Google 5 Day Gen AI Intensive',
        issuer: 'Google/Kaggle',
        date: '2025',
        desc: 'Featured Capstone Portfolio on Kaggle.',
        links: [
            { label: 'Kaggle Badge', url: 'https://www.kaggle.com/certification/badges/priyaraman1984/105' },
            { label: 'Capstone Writeup', url: 'https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/notebooklm-clone' }
        ]
    },
    {
        title: 'GenAI Bootcamp Master App & Badge',
        issuer: 'ExamPro',
        date: '2025',
        link: 'https://drive.google.com/file/d/1oJFpEp3O4HMkwpIUku5ucluUE252A1rt/view?usp=drive_link'
    }
];

export default function Certifications() {
    return (
        <section id="certs" className={styles.certSection}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.sectionTitle}>Certifications & Professional Development</h2>
                <div className={styles.grid}>
                    {certifications.map((cert, i) => (
                        <div key={i} className={`${styles.certCard} glass`}>
                            <div className={styles.certHeader}>
                                <h3 className={styles.certTitle}>{cert.title}</h3>
                                <span className={styles.date}>{cert.date}</span>
                            </div>
                            <p className={styles.issuer}>{cert.issuer}</p>
                            {cert.desc && <p className={styles.desc}>{cert.desc}</p>}
                            <div className={styles.linkArea}>
                                {cert.link && (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                                        View Credential →
                                    </a>
                                )}
                                {cert.links && (
                                    <div className={styles.multiLinks}>
                                        {cert.links.map((l, li) => (
                                            <a key={li} href={l.url} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                                                {l.label} →
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
