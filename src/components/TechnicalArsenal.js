import styles from './TechnicalArsenal.module.css';

const skills = [
    {
        category: 'Agentic Lifecycle & NLP',
        items: ['Multi-Agent Orchestration (LangGraph, StateGraph)', 'Agentic RAG (Advanced Semantic Fusion, RRF)', 'Google Agent Development Kit (ADK)', 'LlamaIndex', 'PydanticAI', 'Arize Phoenix & Google Cloud Trace', 'Custom MCP Server Implementation', 'Antigravity Native IDE Orchestration (SKILL.md)']
    },
    {
        category: 'High-Performance Reasoning',
        items: ['Gemini 3.0 Pro / 3.0 Flash', 'Llama 3.1 & 4B (PEFT/LoRA Fine-tuned)', 'SFT (Supervised Fine-Tuning)', 'Ollama & MLX Optimization', 'GGUF Quantization', 'LLM-as-a-Judge Evaluation', 'Weights & Biases (W&B) Tracking']
    },
    {
        category: 'MLOps & Cloud Scalability',
        items: ['GCP Cloud Run', 'Vertex AI Endpoints & Model Registry', 'GCP AgentEngine', 'Docker Containerization', 'Artifact Registry', 'Workload Identity', 'Zero-Trust Security Patterns']
    },
    {
        category: 'Advanced Architecture Patterns',
        items: ['Self-Healing Agents & Reflection Loops', 'High Fidelity Custom Evaluation Framework', 'Triangle of Truth (Multi-Modal Synthesis)', 'Telemetry Gravity (Observability)', 'Nuclear Teardown (FinOps)', 'Distributed Research Synthesis', 'Multi-Modal Reasoning Hub', 'Deterministic Anti-Blocking & Headless State']
    },
    {
        category: 'Foundational AI/ML Systems',
        items: ['Hyperparameter Optimization (Keras Tuner, BayesSearchCV)', 'Cost-Complexity Pruning & EarlyStopping', 'Transfer Learning (VGG19) & Data Augmentation', 'SMOTE-Tomek Imbalanced Data Balancing', 'Transformer NLP (BERT) & Zero-shot Classification', 'Advanced Ensemble Modeling (XGBoost/RF)']
    },
    {
        category: 'Enterprise Leadership Strategy',
        items: ['18+ Years Technology Leadership', 'GenAI Architect & Engineering Lead (Strategic Portfolios)', 'Generative AI Architect & Engineer (KSAP Technologies)', 'Mobile Principal Engineer I (CVS Health)', 'Mobile Lead / Solution Architect (McDonalds)', 'Cross-Functional GenAI Strategy & Adoption']
    }
];

export default function TechnicalArsenal() {
    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.sectionTitle}>Technical Arsenal</h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <div key={index} className={`${styles.skillCard} glass`}>
                            <h3 className={styles.category}>{skill.category}</h3>
                            <ul className={styles.skillList}>
                                {skill.items.map((item, i) => (
                                    <li key={i} className={styles.skillItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
